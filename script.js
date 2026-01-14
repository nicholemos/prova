const container = document.getElementById('container-questoes');
function embaralhar(array) {
    let indiceAtual = array.length, valorTemporario, indiceAleatorio;

    // Enquanto restarem elementos para embaralhar...
    while (0 !== indiceAtual) {
        // Pegue um elemento restante...
        indiceAleatorio = Math.floor(Math.random() * indiceAtual);
        indiceAtual -= 1;

        // E troque-o com o elemento atual.
        valorTemporario = array[indiceAtual];
        array[indiceAtual] = array[indiceAleatorio];
        array[indiceAleatorio] = valorTemporario;
    }
    return array;
}


function renderizar(lista) {
    container.innerHTML = "";

    lista.forEach(q => {
        const card = document.createElement('div');
        card.className = 'card-questao';

        // 1. Criamos um array de objetos para rastrear o texto e se é a correta
        let alternativasRastreadas = q.alts.map((texto, index) => ({
            texto: texto,
            eCorreta: index === q.correta
        }));

        // 2. Embaralhamos esse array
        alternativasRastreadas = embaralhar(alternativasRastreadas);

        // 3. Geramos o HTML baseado na nova ordem
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

function conferirNova(id) {
    const escolhida = document.querySelector(`input[name="q${id}"]:checked`);
    const feedback = document.getElementById(`feedback-${id}`);
    const questaoData = bancoDados.find(q => q.id === id);

    if (!escolhida) {
        alert("Selecione uma opção!");
        return;
    }

    feedback.style.display = "block";

    // Verificamos se o valor do rádio selecionado é "true"
    if (escolhida.value === "true") {
        feedback.className = "feedback-box sucesso";
        feedback.innerHTML = `✅ <strong>Correto!</strong><br><p class="explica">${questaoData.comentario}</p>`;
    } else {
        feedback.className = "feedback-box erro";
        feedback.innerHTML = `❌ <strong>Incorreto.</strong><br><p class="explica"><strong>Análise:</strong> ${questaoData.comentario}</p>`;
    }
}

function filtrar(materia, btn) {
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const filtradas = (materia === 'Todas')
        ? bancoDados
        : bancoDados.filter(q => q.materia === materia);

    renderizar(filtradas);
}

// Inicialização
window.onload = () => renderizar(bancoDados);
