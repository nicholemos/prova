// Variáveis de estado
let questõesSimulado = [];
const TOTAL_PROVA = 40;
let tempoRestante = 4 * 60 * 60; // 4 horas
let intervaloTempo;
let respostasUsuario = {};

const container = document.getElementById('container-questoes');

// 1. FUNÇÕES DE INICIALIZAÇÃO E SIMULADO
function gerarNovoSimulado() {
    // Seleção proporcional conforme o edital 
    const simulado = [
        ...embaralhar([...bancoDados.filter(q => q.materia === 'Português')]).slice(0, 10),
        ...embaralhar([...bancoDados.filter(q => q.materia === 'Lógica')]).slice(0, 5),
        ...embaralhar([...bancoDados.filter(q => q.materia === 'SUS')]).slice(0, 5),
        ...embaralhar([...bancoDados.filter(q => q.materia === 'Contagem')]).slice(0, 5),
        ...embaralhar([...bancoDados.filter(q => q.materia === 'Específicos')]).slice(0, 15)
    ];

    questõesSimulado = simulado;
    localStorage.setItem('simulado_atual', JSON.stringify(simulado));
    localStorage.removeItem('respostas_usuario');
    respostasUsuario = {};
    atualizarProgresso();
    renderizar(questõesSimulado);
}

function carregarSimulado() {
    const salvo = localStorage.getItem('simulado_atual');
    const respostasSalvas = localStorage.getItem('respostas_usuario');

    if (salvo) {
        questõesSimulado = JSON.parse(salvo);
        if (respostasSalvas) respostasUsuario = JSON.parse(respostasSalvas);
        renderizar(questõesSimulado);
        atualizarProgresso();
    } else {
        gerarNovoSimulado();
    }
}

// 2. FUNÇÃO DO CRONÔMETRO
function iniciarCronometro() {
    clearInterval(intervaloTempo);
    intervaloTempo = setInterval(() => {
        tempoRestante--;
        let horas = Math.floor(tempoRestante / 3600);
        let minutos = Math.floor((tempoRestante % 3600) / 60);
        let segundos = tempoRestante % 60;

        document.getElementById('cronometro').innerText =
            `Tempo: ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        if (tempoRestante <= 0) {
            clearInterval(intervaloTempo);
            alert("Tempo esgotado!");
            finalizarProva();
        }
    }, 1000);
}

// 3. LÓGICA DE RESPOSTAS E RANKING
function conferirNova(id) {
    const escolhida = document.querySelector(`input[name="q${id}"]:checked`);
    const feedback = document.getElementById(`feedback-${id}`);
    const questaoData = bancoDados.find(q => q.id === id);

    if (!escolhida) {
        alert("Selecione uma opção!");
        return;
    }

    feedback.style.display = "block";
    const acertou = escolhida.value === "true";

    if (acertou) {
        feedback.className = "feedback-box sucesso";
        feedback.innerHTML = `✅ <strong>Correto!</strong><br><p class="explica">${questaoData.comentario}</p>`;
    } else {
        feedback.className = "feedback-box erro";
        feedback.innerHTML = `❌ <strong>Incorreto.</strong><br><p class="explica"><strong>Análise:</strong> ${questaoData.comentario}</p>`;
    }

    registrarResposta(id, acertou, questaoData.materia);
}

function registrarResposta(id, acertou, materia) {
    respostasUsuario[id] = { acertou, materia };
    localStorage.setItem('respostas_usuario', JSON.stringify(respostasUsuario));
    atualizarProgresso();
}

function atualizarProgresso() {
    const respondidas = Object.keys(respostasUsuario).length;
    const porcentagem = (respondidas / TOTAL_PROVA) * 100;
    document.getElementById('barra-progresso').style.width = porcentagem + "%";
    document.getElementById('texto-progresso').innerText = `${respondidas}/${TOTAL_PROVA} Respondidas`;
}

// 4. UTILITÁRIOS
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderizar(lista) {
    container.innerHTML = "";
    lista.forEach(q => {
        const card = document.createElement('div');
        card.className = 'card-questao';
        let alternativasRastreadas = q.alts.map((texto, index) => ({
            texto: texto,
            eCorreta: index === q.correta
        }));
        alternativasRastreadas = embaralhar(alternativasRastreadas);

        const opcoesHtml = alternativasRastreadas.map((alt, i) => `
            <label class="opcao-item">
                <input type="radio" name="q${q.id}" value="${alt.eCorreta}">
                <div class="opcao-conteudo">
                    <span class="letra">${String.fromCharCode(65 + i)}</span>
                    <span class="texto-alternativa">${alt.texto}</span>
                </div>
            </label>
        `).join('');

        card.innerHTML = `
            <div class="header-card">
                <span class="tag">${q.materia}</span>
                <span class="q-num">Questão ${q.id}</span>
            </div>
            <p class="enunciado">${q.enunciado}</p>
            <div class="alternativas-grid">${opcoesHtml}</div>
            <button class="btn-conferir" onclick="conferirNova(${q.id})">Confirmar Resposta</button>
            <div id="feedback-${q.id}" class="feedback-box"></div>
        `;
        container.appendChild(card);
    });
}

function reiniciarProva() {
    if (confirm("Deseja reiniciar? O progresso será perdido.")) {
        tempoRestante = 4 * 60 * 60;
        gerarNovoSimulado();
        iniciarCronometro();
        window.scrollTo(0, 0);
    }
}
function filtrar(materia, btn) {
    // 1. Gerencia a aparência dos botões (ativa o clicado)
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // 2. Filtra APENAS dentro das 40 questões que foram sorteadas para o simulado atual
    const filtradas = (materia === 'Todas')
        ? questõesSimulado
        : questõesSimulado.filter(q => q.materia === materia);

    // 3. Renderiza a lista filtrada na tela
    renderizarFiltradas(filtradas);
}

// Criamos uma função de renderização auxiliar para não perder o progresso visual ao filtrar
function renderizarFiltradas(lista) {
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px;'>Nenhuma questão desta matéria no simulado atual. Clique em 'Reiniciar' para um novo sorteio.</p>";
        return;
    }

    renderizar(lista);
}


// ÚNICA CHAMADA ONLOAD
window.onload = () => {
    carregarSimulado();
    iniciarCronometro();
};
