const bancoDados = [
    // --- BLOCO 1: TEXTO SOBRE IA E DEMISSÕES ---
    {
        id: 1,
        materia: "Português",
        enunciado: "O texto aborda o impacto da inteligência artificial nas demissões em empresas de tecnologia. Qual a argumentação central apresentada sobre as causas desses cortes?",
        alts: [
            "Embora a IA esteja associada às demissões, fatores econômicos (como alta de juros e excesso de contratações pós-pandemia) e estruturais também explicam os cortes.",
            "A inteligência artificial é apresentada como a única e exclusiva causa do desemprego em massa, reforçando um papel puramente destrutivo.",
            "A tecnologia elimina empregos de forma definitiva, sem promover qualquer tipo de reestruturação ou exigência de novas funções no mercado.",
            "O texto adota uma perspectiva estritamente neutra, limitando-se a dados estatísticos sem expor interpretações sobre as causas das demissões."
        ],
        correta: 0,
        comentario: "O texto explica que os cortes resultam tanto de fatores macroeconômicos quanto do avanço da automação, mencionando que a IA reorganiza o mercado em vez de apenas eliminar vagas[cite: 1956, 1961, 1968]."
    },
    {
        id: 2,
        materia: "Português",
        enunciado: "Na frase: 'A Chegg, plataforma de educação online, reduziu 45% de seus funcionários...', o termo entre vírgulas exerce qual função sintática?",
        alts: [
            "Aposto explicativo, pois esclarece e identifica o substantivo anterior, acrescentando informação acessória.",
            "Sujeito da oração, por ser o núcleo central que pratica a ação de reduzir o quadro de funcionários.",
            "Predicativo do sujeito, por expressar uma característica atribuída ao sujeito após um verbo de ligação implícito.",
            "Adjunto adnominal, pois possui valor restritivo e não deveria estar isolado por vírgulas conforme a norma-padrão."
        ],
        correta: 0,
        comentario: "O termo explica quem é a 'Chegg'. Por ser um substantivo explicativo isolado por pontuação, trata-se de um aposto explicativo[cite: 1998]."
    },
    {
        id: 3,
        materia: "Português",
        enunciado: "Sobre a tipologia e o gênero do texto que discute as demissões na Amazon e a IA, é correto afirmar que:",
        alts: [
            "É um texto expositivo-argumentativo do gênero jornalístico informativo-analítico, pois apresenta dados, opiniões de especialistas e reflexão crítica.",
            "Trata-se de um artigo científico, pois segue linguagem estritamente técnica, impessoal e estrutura acadêmica rígida.",
            "É uma reportagem de interesse humano, focada em descrever trajetórias individuais e dramas pessoais de trabalhadores afetados.",
            "É um texto puramente descritivo e neutro, que se limita a listar declarações sem qualquer posicionamento interpretativo."
        ],
        correta: 0,
        comentario: "O texto analisa um fato atual unindo informações objetivas (dados de demissões) com análises de especialistas (como Martha Gimbel e Enrico Moretti)[cite: 1950, 1959, 1983]."
    },
    {
        id: 4,
        materia: "Português",
        enunciado: "Assinale a alternativa que mantém o sentido original e a pontuação correta da frase: 'Após a pandemia, o excesso de contratações e a alta dos juros levaram empresas como a Amazon a ajustar suas estruturas.'",
        alts: [
            "O excesso de contratações e a alta dos juros levaram empresas como a Amazon a ajustar suas estruturas, após a pandemia.",
            "O excesso de contratações e a alta dos juros levaram empresas, como a Amazon, a ajustar suas estruturas após a pandemia.",
            "Empresas, como a Amazon levaram a ajustar suas estruturas, após a pandemia devido ao excesso de contratações.",
            "Levaram empresas como a Amazon a ajustar suas estruturas após, a pandemia o excesso de contratações."
        ],
        correta: 0,
        comentario: "O deslocamento do adjunto adverbial de tempo ('após a pandemia') para o final da frase exige apenas a vírgula opcional, mantendo a clareza sem separar sujeito de predicado[cite: 1989, 2444, 2925]."
    },
    {
        id: 5,
        materia: "Português",
        enunciado: "Analise a expressão 'em parte' no trecho: '...eliminou quarenta e oito mil cargos, em parte devido ao aprendizado de máquina'. Qual sua classificação morfológica?",
        alts: [
            "Locução adverbial de intensidade, pois indica a medida parcial ou grau em que a ação verbal ocorreu.",
            "Locução prepositiva, pois estabelece uma relação de dependência obrigatória entre o verbo e seu complemento.",
            "Locução adjetiva, já que sua função principal é caracterizar qualitativamente o substantivo 'cargos'.",
            "Locução conjuntiva, sendo responsável por unir duas orações independentes estabelecendo relação de causa."
        ],
        correta: 0,
        comentario: "A expressão indica o modo ou a intensidade parcial da ação de eliminar, classificando-se como locução adverbial[cite: 1976, 2472, 2935]."
    },

    // --- BLOCO 2: TEXTO SOBRE NOVO IMPOSTO DE RENDA ---
    {
        id: 6,
        materia: "Português",
        enunciado: "No trecho: 'Apesar da redução na arrecadação esperada com essa exceção, o Ministério da Fazenda afirma \"que\" a reforma será fiscalmente neutra.', qual a classificação da palavra em destaque?",
        alts: [
            "Conjunção integrante, pois introduz uma oração subordinada substantiva que completa o sentido do verbo 'afirmar'.",
            "Pronome relativo, uma vez que retoma o substantivo 'Ministério da Fazenda' para evitar sua repetição.",
            "Conjunção explicativa, por introduzir uma justificativa ou causa para a afirmação feita anteriormente.",
            "Preposição, pois sua função principal é ligar o verbo ao seu complemento nominal."
        ],
        correta: 0,
        comentario: "A palavra 'que' introduz uma oração que funciona como objeto direto (quem afirma, afirma algo). Por iniciar uma oração subordinada substantiva, é uma conjunção integrante[cite: 142, 145, 594]."
    },
    {
        id: 7,
        materia: "Português",
        enunciado: "Analise o uso da crase em: '...muito inferior \"à de outras profissões\"'. É correto afirmar que o acento grave ocorre por quê?",
        alts: [
            "Pela fusão da preposição exigida pelo adjetivo 'inferior' com o artigo feminino que acompanha o substantivo subentendido 'alíquota'.",
            "Por se tratar de uma locução prepositiva feminina fixa, na qual o uso do acento grave é sempre obrigatório.",
            "Para marcar a tonicidade da preposição 'a', que é uma exigência gramatical do termo anterior.",
            "Pela fusão da preposição exigida por um verbo de movimento com o artigo definido que especifica o substantivo seguinte."
        ],
        correta: 0,
        comentario: "Algo é inferior 'a' alguma coisa. A crase ocorre porque há a preposição 'a' (pedida por 'inferior') e o artigo 'a' que se refere à 'alíquota' (subentendido: inferior à alíquota de outras profissões)[cite: 126, 130, 609]."
    },
    {
        id: 8,
        materia: "Português",
        enunciado: "Considere as frases: 'A medida beneficia cerca de quinze milhões de pessoas...' e 'O limite atual de isenção é de cerca de dois mil reais.'. Sobre a relação entre elas, é correto afirmar:",
        alts: [
            "Há coerência temática entre as ideias, embora não exista um conectivo ou elemento explícito de coesão unindo formalmente as sentenças.",
            "Existe coesão explícita garantida pela repetição da palavra 'isenção', que conecta formalmente as duas orações.",
            "Não há coerência nem coesão, pois as frases tratam de temas econômicos distintos sem qualquer elo lógico.",
            "As frases são unidas por coesão e coerência através do uso de conectivos coordenativos que articulam a progressão do texto."
        ],
        correta: 0,
        comentario: "As frases falam do mesmo assunto (Imposto de Renda), mantendo a unidade do tema (coerência), mas no trecho citado não há palavras de ligação como 'portanto' ou 'além disso' (coesão)[cite: 118, 119, 124, 605]."
    },
    {
        id: 9,
        materia: "Português",
        enunciado: "A frase: 'O aumento da isenção do Imposto de Renda para quem ganha até cinco mil reais foi aprovado por unanimidade no Senado...' apresenta qual tipo de linguagem?",
        alts: [
            "Linguagem denotativa, pois transmite uma informação de forma objetiva, literal e sem uso de figuras de estilo.",
            "Linguagem conotativa, pois utiliza palavras em sentido figurado para ressaltar o impacto da notícia.",
            "Linguagem conotativa, uma vez que expressa uma opinião fortemente subjetiva do autor sobre a medida política.",
            "Linguagem denotativa, pois faz uso de símbolos e metáforas que sugerem múltiplos sentidos ao leitor."
        ],
        correta: 0,
        comentario: "O trecho é informativo e direto, usando as palavras em seu sentido real (dicionário), característica fundamental da linguagem denotativa[cite: 110, 114, 619]."
    },
    {
        id: 10,
        materia: "Português",
        enunciado: "De acordo com a análise dos impactos econômicos e sociais descritos no texto, qual é o principal contraste estabelecido pelo autor?",
        alts: [
            "O contraste entre a ampliação da isenção para as classes de menor renda e a preservação de benefícios fiscais para grupos como os grandes produtores rurais.",
            "A redução generalizada do Imposto de Renda para todos os brasileiros, gerando um impacto fiscal positivo imediato.",
            "A criação de novos tributos focados exclusivamente na classe média, enquanto servidores públicos recebem isenções totais.",
            "A implementação de um aumento linear na carga tributária de todos os setores para equilibrar as contas da União."
        ],
        correta: 0,
        comentario: "O autor destaca que, enquanto muitos saem da faixa de tributação, grupos ricos (como latifundiários e super-ricos) mantêm privilégios ou alíquotas inferiores à média nacional[cite: 135, 137, 628]."
    },

    // --- RACIOCÍNIO LÓGICO E MATEMÁTICO (11 a 15) ---
    {
        id: 11,
        materia: "Lógica",
        enunciado: "Considere a afirmação do gestor: 'Se o projeto é bem planejado, então ele será eficiente. O projeto foi bem planejado. Logo, ele será eficiente.' Sobre essa estrutura lógica, analise as proposições e indique o valor lógico (V ou F):\nI. Trata-se de um argumento válido (Modus Ponens).\nII. A primeira frase é uma condicional (P -> Q).\nIII. Se a primeira frase for falsa, o argumento perde a validade.",
        alts: [
            "V, V, V",
            "V, V, F",
            "F, V, V",
            "V, F, V"
        ],
        correta: 0,
        comentario: "O argumento segue a regra do Modus Ponens: se temos 'Se P, então Q' e confirmamos 'P', obrigatoriamente concluímos 'Q'. Portanto, todas as análises sobre a estrutura condicional e sua validade são verdadeiras."
    },
    {
        id: 12,
        materia: "Lógica",
        enunciado: "Um poste de 8 metros de altura projeta uma sombra de 6 metros no solo. Considerando que o sol forma um ângulo de elevação θ, qual o valor aproximado da tangente de θ?",
        alts: ["1,33", "0,60", "0,75", "1,25"],
        correta: 0,
        comentario: "Em um triângulo retângulo, Tangente = Cateto Oposto / Cateto Adjacente. Aqui, o oposto é a altura (8m) e o adjacente é a sombra (6m). Cálculo: 8 / 6 = 1,33."
    },
    {
        id: 13,
        materia: "Lógica",
        enunciado: "Júlia utiliza formas cônicas com 12 cm de altura e 6 cm de raio na base para fazer sorvetes. Qual o volume total aproximado de sorvete necessário para preencher 10 dessas formas? (Use π = 3,14)",
        alts: [
            "4.521,6 cm³",
            "3.600,0 cm³",
            "9.048,0 cm³",
            "1.356,4 cm³"
        ],
        correta: 0,
        comentario: "O volume de um cone é (1/3) * π * r² * h. Para uma forma: (1/3) * 3,14 * 6² * 12 = (1/3) * 3,14 * 36 * 12 = 452,16 cm³. Como são 10 formas, multiplicamos por 10 = 4.521,6 cm³."
    },
    {
        id: 14,
        materia: "Lógica",
        enunciado: "Se 5 máquinas idênticas produzem 70.000 unidades em 5 dias operando 7 horas por dia, quantas máquinas seriam necessárias para produzir 168.000 unidades em apenas 4 dias, mantendo as mesmas 7 horas diárias?",
        alts: ["15 máquinas", "12 máquinas", "10 máquinas", "9 máquinas"],
        correta: 0,
        comentario: "Usando Regra de Três Composta: Máquinas e Produção são diretamente proporcionais; Máquinas e Dias são inversamente proporcionais. (5/X) = (70.000/168.000) * (4/5). Resolvendo a equação, chegamos a X = 15 máquinas."
    },
    {
        id: 15,
        materia: "Lógica",
        enunciado: "Em um grupo de 40 jovens, 25 gostam de Robótica, 20 de Astronomia e 10 gostam de ambos. Qual a probabilidade de escolher um jovem ao acaso que goste de Robótica e Astronomia simultaneamente?",
        alts: ["1/4 (ou 25%)", "1/2 (ou 50%)", "1/5 (ou 20%)", "3/8 (ou 37,5%)"],
        correta: 0,
        comentario: "A intersecção (gostam de ambos) é 10. O total de jovens é 40. A probabilidade é 10/40, que simplificado resulta em 1/4 ou 25%."
    },
    // --- LEGISLAÇÃO DO SUS (16 a 20) ---
    {
        id: 16,
        materia: "SUS",
        enunciado: "O Sistema Único de Saúde (SUS) é regido por princípios doutrinários e organizativos. Analise as proposições abaixo:\nI. Descentralização político-administrativa, com direção única em cada esfera de governo.\nII. Participação da comunidade por meio dos Conselhos e Conferências de Saúde.\nIII. Integralidade de assistência, entendida como um conjunto articulado de ações e serviços preventivos e curativos.\nQuais estão corretas?",
        alts: [
            "I, II e III estão corretas.",
            "Apenas I e II estão corretas.",
            "Apenas II e III estão corretas.",
            "Apenas a III está correta."
        ],
        correta: 0,
        comentario: "Todos os itens são princípios fundamentais do SUS previstos na Lei 8.080/90 e na Constituição Federal. A descentralização, a participação social e a integralidade formam a base do sistema."
    },
    {
        id: 17,
        materia: "SUS",
        enunciado: "Com base nos artigos 196 a 200 da Constituição Federal de 1988, assinale a alternativa VERDADEIRA sobre a organização da saúde no Brasil:",
        alts: [
            "O Art. 198 determina que o SUS seja organizado em uma rede regionalizada e hierarquizada, com direção única em cada esfera de governo.",
            "As ações de vigilância sanitária são expressamente excluídas das competências do SUS pelo Artigo 200.",
            "O Art. 197 estabelece que as ações de saúde são de relevância pública, competindo exclusivamente à União sua execução.",
            "A participação da comunidade na gestão do SUS é opcional e fica a critério de cada prefeitura municipal."
        ],
        correta: 0,
        comentario: "O Art. 198 define a estrutura básica do SUS. O erro das outras opções é que: a vigilância sanitária FAZ PARTE do SUS (Art. 200), a execução pode ser feita por terceiros (não é exclusiva da União) e a participação social é um princípio OBRIGATÓRIO."
    },
    {
        id: 18,
        materia: "SUS",
        enunciado: "A Lei nº 8.080/1990 dispõe sobre as condições para a promoção, proteção e recuperação da saúde. Sobre as competências, é correto afirmar:",
        alts: [
            "O planejamento da saúde deve ser feito de maneira ascendente, do nível local até o federal, ouvidos os respectivos Conselhos de Saúde.",
            "O financiamento do SUS é de responsabilidade exclusiva da União, sendo vedado o repasse de verbas estaduais.",
            "A direção municipal do SUS não possui autonomia para normatizar ações de saúde de forma suplementar.",
            "As vigilâncias sanitária e epidemiológica não integram o campo de atuação do SUS nesta lei."
        ],
        correta: 0,
        comentario: "A Lei 8.080 estabelece que o planejamento deve vir da base (municípios) para o topo (União). O financiamento é tripartite (União, Estados e Municípios) e as vigilâncias são pilares do sistema."
    },
    {
        id: 19,
        materia: "SUS",
        enunciado: "Sobre a Lei nº 8.142/1990, que trata da participação da comunidade e das transferências intergovernamentais de recursos financeiros, assinale a correta:",
        alts: [
            "O Conselho de Saúde, em caráter permanente e deliberativo, atua na formulação de estratégias e no controle da execução da política de saúde.",
            "A Conferência de Saúde deve reunir-se anualmente para aprovar as contas do gestor municipal.",
            "Os recursos do Fundo Nacional de Saúde são transferidos aos municípios de forma discricionária, independente da existência de Conselhos.",
            "A representação dos usuários nos Conselhos de Saúde deve ser de 25%, sendo os 75% restantes de profissionais de saúde."
        ],
        correta: 0,
        comentario: "O Conselho é permanente e deliberativo. O erro das outras: a Conferência ocorre a cada 4 anos; a existência de Conselho e Fundo é OBRIGATÓRIA para receber recursos; e a representação dos usuários deve ser de 50% (paridade)."
    },
    {
        id: 20,
        materia: "SUS",
        enunciado: "A Carta dos Direitos dos Usuários da Saúde define que todo cidadão tem direito ao acesso ordenado e organizado aos sistemas de saúde. Sobre isso, é correto afirmar:",
        alts: [
            "O usuário tem o direito de conhecer o conteúdo de seu prontuário e de receber informações claras sobre diagnósticos e tratamentos.",
            "A presença de acompanhante durante consultas e internações é proibida para garantir a assepsia do ambiente hospitalar.",
            "O cidadão deve aceitar qualquer procedimento médico sem a necessidade de consentimento livre e esclarecido.",
            "O prontuário médico é propriedade exclusiva do hospital, sendo vedada a entrega de cópias ao paciente."
        ],
        correta: 0,
        comentario: "O acesso à informação e ao prontuário é um direito fundamental do paciente. O consentimento deve ser sempre livre e esclarecido, e o direito a acompanhante é garantido em diversas situações por lei."
    },

    // --- CONHECIMENTOS DE CONTAGEM (21 a 25) ---
    {
        id: 21,
        materia: "Contagem",
        enunciado: "A partir da década de 1940, Contagem passou por um intenso processo de industrialização com a criação da Cidade Industrial Juventino Dias. Sobre esse marco, é correto afirmar:",
        alts: [
            "A instalação das indústrias atraiu uma grande massa populacional, resultando na criação de bairros operários e núcleos urbanos no entorno, como o bairro Eldorado.",
            "A Cidade Industrial foi projetada para ser um polo exclusivamente têxtil, sem espaço para metalúrgicas ou indústrias de cimento.",
            "O projeto de industrialização foi um fracasso inicial, levando Contagem a retornar à sua base econômica estritamente agrícola até os anos 80.",
            "A criação da Cidade Industrial impediu o crescimento populacional da cidade, pois as fábricas utilizavam apenas mão de obra vinda de Belo Horizonte."
        ],
        correta: 0,
        comentario: "A Cidade Industrial (1941) transformou a face da cidade. O erro das outras é que o projeto foi diversificado, um grande sucesso econômico e o principal motor do boom populacional e surgimento de novos bairros."
    },
    {
        id: 22,
        materia: "Contagem",
        enunciado: "Contagem tem atraído grandes investimentos tecnológicos recentes, como a construção de novos Data Centers focados em Inteligência Artificial. Esse movimento representa para o município:",
        alts: [
            "Uma oportunidade de descentralização tecnológica e consolidação de Contagem como um polo de inovação e infraestrutura digital regional.",
            "Um aumento na dependência da cidade em relação à economia mineradora tradicional, sem gerar novos tipos de emprego.",
            "A substituição total de todas as indústrias metalúrgicas por empresas de software, eliminando os empregos de nível técnico.",
            "Uma medida meramente simbólica, já que esses centros de dados não exigem infraestrutura elétrica ou conectividade de ponta."
        ],
        correta: 0,
        comentario: "Data Centers (como os da Century) buscam a localização estratégica de Contagem para expandir a infraestrutura de nuvem e IA, diversificando a economia local além da indústria pesada."
    },
    {
        id: 23,
        materia: "Contagem",
        enunciado: "O 'Registro das Abóboras', importante marco histórico de Contagem, funcionou durante o período colonial como:",
        alts: [
            "Um posto de controle e arrecadação de tributos sobre mercadorias e gado que circulavam em direção às regiões mineradoras.",
            "Uma escola jesuíta voltada para a alfabetização de colonos e indígenas da região metropolitana.",
            "O primeiro quartel militar responsável pela defesa da província contra invasões estrangeiras no século XVIII.",
            "Um centro de distribuição de sementes de abóbora para incentivar a agricultura de subsistência na Vila de Curral del Rei."
        ],
        correta: 0,
        comentario: "O nome da cidade vem de 'contagem' de gado e mercadorias que passavam pelo posto fiscal (Registro). O erro é pensar que era um centro agrícola ou militar; sua função era puramente fiscal e de controle de rotas."
    },
    {
        id: 24,
        materia: "Contagem",
        enunciado: "Sobre o patrimônio histórico e cultural de Contagem, analise as afirmativas e escolha a correta:",
        alts: [
            "A Igreja de São Gonçalo e a Comunidade Quilombola dos Arturos são símbolos da formação religiosa e da resistência cultural negra no município.",
            "O município de Contagem não possui comunidades quilombolas reconhecidas, sendo sua cultura baseada apenas na herança industrial europeia.",
            "A Igreja de São Gonçalo foi construída recentemente, nos anos 90, para substituir o antigo Registro das Abóboras.",
            "A Festa do Rosário é uma celebração exclusiva da cidade de Belo Horizonte, sem qualquer tradição ou prática no território de Contagem."
        ],
        correta: 0,
        comentario: "Contagem possui uma riqueza cultural imensa. A Igreja de São Gonçalo (século XVIII) e os Arturos (Reinado/Congado) são pilares da identidade contagense. O erro é negar essa herança afro-brasileira ou datar a igreja erroneamente."
    },
    {
        id: 25,
        materia: "Contagem",
        enunciado: "A localização geográfica de Contagem é considerada estratégica desde os tempos coloniais porque:",
        alts: [
            "Situava-se em um entroncamento de caminhos que ligavam os principais núcleos mineradores, como Sabará, Vila Rica e São João del-Rei.",
            "Era a única região de Minas Gerais com acesso direto ao mar, facilitando o escoamento do ouro.",
            "Suas terras eram as únicas da província que não pagavam impostos à Coroa Portuguesa, o que atraiu muitos colonos.",
            "Funcionava como um deserto natural que protegia a capital da época contra ataques de piratas."
        ],
        correta: 0,
        comentario: "Contagem era um ponto de passagem obrigatório ('entroncamento'). O erro das outras alternativas é geográfico (Minas não tem mar) ou histórico (sempre houve cobrança de impostos, como o Quinto)."
    },

    // --- CONHECIMENTOS ESPECÍFICOS (26 a 40) ---
    {
        id: 26,
        materia: "Específicos",
        enunciado: "No framework Scrum, quem é o responsável por gerenciar o Backlog do Produto e garantir que o time de desenvolvimento esteja trabalhando no que agrega mais valor ao negócio?",
        alts: [
            "Product Owner (PO)",
            "Scrum Master",
            "Stakeholders",
            "Líder Técnico (Tech Lead)"
        ],
        correta: 0,
        comentario: "O Product Owner é a voz do cliente e o dono do backlog. O Scrum Master foca no processo e na remoção de impedimentos, enquanto o Time de Desenvolvimento foca na execução técnica."
    },
    {
        id: 27,
        materia: "Específicos",
        enunciado: "Sobre as técnicas de teste e desenvolvimento de software, qual abordagem foca em escrever testes de aceitação automatizados antes mesmo do início da codificação, facilitando a comunicação entre stakeholders e desenvolvedores?",
        alts: [
            "ATDD (Acceptance Test-Driven Development)",
            "TDD (Test-Driven Development)",
            "BDD (Behavior-Driven Development)",
            "DDD (Domain-Driven Design)"
        ],
        correta: 0,
        comentario: "O ATDD foca em testes de aceitação (requisitos do negócio). O TDD foca no teste unitário do desenvolvedor. Já o BDD utiliza uma linguagem natural (Dado/Quando/Então) para descrever o comportamento."
    },
    {
        id: 28,
        materia: "Específicos",
        enunciado: "Na modelagem de bancos de dados relacionais, a Segunda Forma Normal (2FN) exige que:",
        alts: [
            "A tabela esteja na 1FN e que todos os atributos não-chave dependam funcionalmente de toda a chave primária, e não apenas de parte dela.",
            "Não existam grupos repetidos e que todos os valores sejam atômicos.",
            "Sejam eliminadas as dependências transitivas entre campos não-chave.",
            "O banco de dados possua obrigatoriamente chaves estrangeiras em todas as entidades."
        ],
        correta: 0,
        comentario: "A 2FN combate a dependência parcial, que ocorre geralmente em tabelas com chaves compostas. A 1FN foca na atomicidade e a 3FN nas dependências transitivas."
    },
    
    {
        id: 29,
        materia: "Específicos",
        enunciado: "Sobre os conceitos de Programação Orientada a Objetos (POO), o mecanismo que permite que uma classe herde comportamentos e atributos de outra é chamado de:",
        alts: [
            "Herança",
            "Polimorfismo",
            "Encapsulamento",
            "Abstração"
        ],
        correta: 0,
        comentario: "A Herança permite o reuso de código através de hierarquias. O Polimorfismo é a capacidade de um objeto ser tratado de diferentes formas. O Encapsulamento protege os dados internos da classe."
    },
    {
        id: 30,
        materia: "Específicos",
        enunciado: "Qual a principal diferença técnica entre a passagem de parâmetros 'por valor' e 'por referência' em linguagens de programação?",
        alts: [
            "Por valor, uma cópia do dado é enviada e o original não muda; por referência, o endereço de memória é enviado e o original pode ser alterado.",
            "Passagem por referência é exclusiva de linguagens interpretadas, enquanto por valor é de linguagens compiladas.",
            "Por valor é mais rápido para grandes estruturas de dados como arrays, enquanto por referência consome mais CPU.",
            "Não há diferença técnica, são apenas termos diferentes para o mesmo processo de execução."
        ],
        correta: 0,
        comentario: "Na passagem por valor, a função recebe apenas o conteúdo. Por referência, ela recebe um 'ponteiro' para o local real na memória, permitindo modificações que persistem fora da função."
    },
    {
        id: 31,
        materia: "Específicos",
        enunciado: "Em bancos de dados SQL, qual comando é utilizado para remover registros de uma tabela mas manter a estrutura da tabela intacta?",
        alts: [
            "DELETE ou TRUNCATE",
            "DROP",
            "REMOVE",
            "ALTER"
        ],
        correta: 0,
        comentario: "O DELETE apaga linhas (pode ter cláusula WHERE). O TRUNCATE limpa a tabela toda (mais rápido). O DROP deleta a tabela INTEIRA da existência, incluindo sua estrutura."
    },
    {
        id: 32,
        materia: "Específicos",
        enunciado: "O Teorema CAP, fundamental para arquiteturas de sistemas distribuídos e Big Data, afirma que é impossível garantir simultaneamente:",
        alts: [
            "Consistência, Disponibilidade e Tolerância a Partições.",
            "Concorrência, Atomicidade e Persistência.",
            "Velocidade, Volume e Variedade.",
            "Segurança, Integridade e Disponibilidade."
        ],
        correta: 0,
        comentario: "Em sistemas distribuídos, você geralmente escolhe dois dos três. No Big Data (NoSQL), costuma-se priorizar Disponibilidade e Tolerância a Partições (AP), aceitando consistência eventual."
    },
    
    {
        id: 33,
        materia: "Específicos",
        enunciado: "Sobre o servidor Apache Tomcat, qual a sua principal função em um ambiente Java?",
        alts: [
            "Atuar como um Servlet Container para executar aplicações web Java (JSP e Servlets).",
            "Servir como um servidor de aplicação completo com suporte total a EJB e JMS nativo.",
            "Compilar código Java diretamente para binários executáveis de Windows.",
            "Gerenciar exclusivamente o controle de versões do código fonte (como o Git)."
        ],
        correta: 0,
        comentario: "O Tomcat é 'leve' (web profile). Ele foca em Servlets e JSP. Para suporte completo a EJB/JMS, você precisaria de um servidor 'Full Profile' como WildFly/JBoss ou Glassfish."
    },
    {
        id: 34,
        materia: "Específicos",
        enunciado: "No contexto de Metodologias Ágeis, o gráfico utilizado para visualizar o progresso do trabalho em relação ao tempo restante em uma Sprint é o:",
        alts: [
            "Burndown Chart",
            "Diagrama de Gantt",
            "Mapa de Empatia",
            "Diagrama de Pareto"
        ],
        correta: 0,
        comentario: "O Burndown mostra quanto trabalho ainda falta (eixo Y) ao longo do tempo (eixo X). Se a linha descer até o zero no fim da Sprint, o objetivo foi atingido."
    },
    {
        id: 35,
        materia: "Específicos",
        enunciado: "Em algoritmos, o que caracteriza uma função como 'recursiva'?",
        alts: [
            "Uma função que faz chamadas a si mesma durante sua execução.",
            "Uma função que nunca termina sua execução (loop infinito).",
            "Uma função que só aceita parâmetros do tipo booleano.",
            "Uma função que é executada apenas uma vez pelo sistema operacional."
        ],
        correta: 0,
        comentario: "A recursividade envolve a função chamar a si própria com um problema menor, até atingir uma condição de parada (caso base). Sem essa condição, ocorre estouro de pilha (Stack Overflow)."
    },

    // --- CONTINUAÇÃO CONHECIMENTOS ESPECÍFICOS (36 a 40) ---
    {
        id: 36,
        materia: "Específicos",
        enunciado: "No contexto de Sistemas Gerenciadores de Banco de Dados (SGBDs) e modelagem de dados, é correto afirmar:",
        alts: [
            "Triggers e Stored Procedures podem ser utilizados para manter a integridade referencial e implementar regras de negócio complexas diretamente no banco.",
            "Índices têm a função principal de aumentar a segurança dos dados contra acessos não autorizados.",
            "O modelo relacional foi substituído pelo modelo hierárquico devido à melhor performance em consultas complexas.",
            "Em bancos de dados distribuídos, a sincronização entre as cópias dos dados é desnecessária e opcional."
        ],
        correta: 0,
        comentario: "O erro das demais é: índices servem para performance (busca), não segurança; o modelo relacional sucedeu o hierárquico; e em bancos distribuídos a sincronização é vital para a consistência."
    },
    {
        id: 37,
        materia: "Específicos",
        enunciado: "Sobre as diferenças entre Apache Tomcat e JBoss (WildFly), assinale a alternativa correta:",
        alts: [
            "O Apache Tomcat é essencialmente um servlet container leve, enquanto o JBoss é um servidor de aplicação completo (Full Profile).",
            "O Tomcat suporta nativamente todas as especificações do Jakarta EE, incluindo EJB e JMS, sem necessidade de bibliotecas externas.",
            "O JBoss não permite a implantação de arquivos no formato .WAR, aceitando apenas o formato .EAR.",
            "O Tomcat é desenvolvido em C++, o que garante sua superioridade em performance de rede em relação ao JBoss."
        ],
        correta: 0,
        comentario: "O Tomcat foca no Web Profile (mais leve). Para suporte total a Enterprise JavaBeans (EJB) e Java Message Service (JMS) de forma nativa, utiliza-se o JBoss/WildFly. Ambos são baseados em Java."
    },
    {
        id: 38,
        materia: "Específicos",
        enunciado: "Em relação ao desenvolvimento em SQL e lógica de banco de dados, qual afirmação é verdadeira sobre Stored Procedures e Functions?",
        alts: [
            "Permitem a programação de lógica procedural (condicionais e laços) que é executada dentro do próprio servidor de banco de dados.",
            "Stored Procedures não podem receber parâmetros de entrada, servindo apenas para consultas simples de leitura.",
            "Views e Functions são idênticas em funcionalidade, não havendo diferença técnica entre elas no padrão SQL.",
            "Triggers devem ser disparadas manualmente pelo usuário através do comando EXECUTE logo após um INSERT."
        ],
        correta: 0,
        comentario: "Stored Procedures e Functions trazem o poder da programação (IF, WHILE, etc) para o banco. O erro da D é que Triggers são automáticas (disparadas por eventos), não manuais."
    },
    
    {
        id: 39,
        materia: "Específicos",
        enunciado: "No ciclo de vida de um projeto de Data Mining, seguindo o modelo CRISP-DM, qual é a primeira etapa obrigatória?",
        alts: [
            "Entendimento do negócio (Business Understanding).",
            "Preparação dos dados (Data Preparation).",
            "Modelagem (Modeling).",
            "Avaliação dos resultados (Evaluation)."
        ],
        correta: 0,
        comentario: "O CRISP-DM começa sempre pelo entendimento do negócio para definir os objetivos. Sem saber o que o negócio precisa, não faz sentido coletar ou preparar dados."
    },
    
    {
        id: 40,
        materia: "Específicos",
        enunciado: "Sobre a administração de SGBDs modernos como PostgreSQL e SQL Server, é correto afirmar que:",
        alts: [
            "O SQL Server Agent é uma ferramenta utilizada para o agendamento de jobs, alertas e tarefas administrativas automáticas.",
            "O PostgreSQL não permite a criação de funções procedurais, limitando-se apenas ao SQL puro (declarativo).",
            "O DB2 é um SGBD NoSQL que não utiliza tabelas ou chaves estrangeiras em sua arquitetura.",
            "O controle de acesso baseado em papéis (RBAC) é uma tecnologia exclusiva do SQL Server, não existindo no PostgreSQL."
        ],
        correta: 0,
        comentario: "O SQL Server Agent é o 'maestro' das automações no ambiente Microsoft. O erro das outras: o Postgres tem o PL/pgSQL (poderoso!), o DB2 é um gigante relacional, e o RBAC existe em quase todos os SGBDs profissionais."
    },

    // --- NOVAS QUESTÕES: CONHECIMENTOS ESPECÍFICOS (BASEADAS NO EDITAL) ---
    {
        id: 41,
        materia: "Específicos",
        enunciado: "Na modelagem de dados, a notação IDEF1X é frequentemente utilizada para a criação de modelos conceituais e lógicos. Sobre essa notação, é correto afirmar:",
        alts: [
            "É uma metodologia que utiliza entidades, atributos e relacionamentos, onde uma 'entidade dependente' é representada por um retângulo com cantos arredondados.",
            "Trata-se de uma técnica exclusiva para bancos de dados NoSQL orientados a grafos, focada em performance de busca.",
            "É uma linguagem de programação procedural utilizada para escrever triggers e stored procedures no PostgreSQL.",
            "Define que todas as chaves primárias devem ser obrigatoriamente do tipo UUID para garantir a distribuição dos dados."
        ],
        correta: 0,
        comentario: "Na notação IDEF1X (padrão para modelagem relacional), entidades que dependem de outras para sua identificação (entidades fracas) possuem cantos arredondados, enquanto as independentes possuem cantos retos."
    },
    {
        id: 42,
        materia: "Específicos",
        enunciado: "Em relação à acessibilidade em sistemas do governo, o eMAG (Modelo de Acessibilidade em Governo Eletrônico) estabelece diretrizes para:",
        alts: [
            "Nortear o desenvolvimento e a adaptação de conteúdos digitais do governo brasileiro, garantindo o acesso a pessoas com deficiência.",
            "Otimizar a performance de consultas SQL em grandes data warehouses governamentais.",
            "Padronizar a instalação de servidores JBoss e Tomcat em ambientes de nuvem privada.",
            "Definir as métricas de pontos de função (IFPUG) para contratos de desenvolvimento de software público."
        ],
        correta: 0,
        comentario: "O eMAG é o equivalente brasileiro às WCAG internacionais. Ele foca na acessibilidade digital para garantir que cidadãos com deficiência consigam navegar em sites e sistemas públicos."
    },
    {
        id: 43,
        materia: "Específicos",
        enunciado: "Sobre a Análise por Pontos de Função (APF), especificamente as normas do IFPUG e NESMA, qual a finalidade dessa técnica?",
        alts: [
            "Medir o tamanho funcional do software com base nos requisitos do usuário, independente da tecnologia de implementação.",
            "Contar o número de linhas de código (LOC) para definir o salário dos desenvolvedores do projeto.",
            "Validar se o software possui vulnerabilidades de segurança conforme os padrões da W3C.",
            "Verificar a qualidade do código fonte através de métricas de complexidade ciclomática."
        ],
        correta: 0,
        comentario: "Pontos de Função medem 'o que' o sistema faz (funcionalidade) e não 'como' ele foi feito (código). É uma métrica de tamanho usada para estimar custos e prazos de projetos de software."
    },
    {
        id: 44,
        materia: "Específicos",
        enunciado: "No ecossistema de busca e indexação, o ElasticSearch é amplamente utilizado devido a sua capacidade de:",
        alts: [
            "Realizar buscas textuais complexas (full-text search) em tempo real de forma distribuída e escalável.",
            "Substituir completamente o uso de bancos de dados relacionais como SQL Server para armazenamento de transações ACID.",
            "Gerenciar exclusivamente o controle de versões de código fonte em ambientes Scrum.",
            "Atuar como um compilador de arquivos PHP para execução em containers JBoss."
        ],
        correta: 0,
        comentario: "O ElasticSearch é um motor de busca NoSQL baseado em documentos (JSON). Sua força está na indexação massiva de dados para buscas rápidas, comum em sistemas de logs e e-commerces."
    },
    {
        id: 45,
        materia: "Específicos",
        enunciado: "O conceito de MVP (Minimum Viable Product), central no gerenciamento ágil de produtos, refere-se a:",
        alts: [
            "Uma versão simplificada do produto com funcionalidades mínimas para validar hipóteses de negócio com usuários reais.",
            "O produto final completo e testado em carga máxima antes do lançamento para o mercado.",
            "Um protótipo de baixa fidelidade feito apenas em papel que não contém código funcional.",
            "A métrica de desempenho que mede o tempo médio de resposta de um servidor Tomcat sob estresse."
        ],
        correta: 0,
        comentario: "O MVP serve para aprender rápido com o menor esforço possível. Ele deve ser funcional o suficiente para que o usuário possa testar e o time possa colher feedbacks reais."
    },
    {
        id: 46,
        materia: "Específicos",
        enunciado: "Em bancos de dados NoSQL, a principal diferença entre um banco orientado a Documentos (como MongoDB) e um orientado a Grafos (como Neo4j) é:",
        alts: [
            "O orientado a documentos armazena dados em estruturas flexíveis (JSON/BSON), enquanto o orientado a grafos foca nos relacionamentos complexos entre entidades.",
            "Bancos de documentos não permitem consultas, servindo apenas para backup físico de arquivos estáticos.",
            "Bancos de grafos são obrigatoriamente normalizados até a terceira forma normal (3FN).",
            "Apenas bancos orientados a documentos suportam processamento distribuído em Big Data."
        ],
        correta: 0,
        comentario: "Grafos são ideais para redes sociais ou sistemas de recomendação onde a 'conexão' entre os dados é tão importante quanto o dado em si. Documentos são excelentes para catálogos e dados semiestruturados."
    },
    // --- NOVAS QUESTÕES: DESENVOLVIMENTO WEB E PADRÕES (47 a 52) ---
    {
        id: 47,
        materia: "Específicos",
        enunciado: "As Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1) são organizadas em quatro princípios fundamentais. Quais são eles?",
        alts: [
            "Perceptível, Operável, Compreensível e Robusto.",
            "Visual, Auditivo, Motor e Cognitivo.",
            "Rápido, Seguro, Acessível e Responsivo.",
            "HTML, CSS, JavaScript e WAI-ARIA."
        ],
        correta: 0,
        comentario: "Os quatro princípios da WCAG (POUR) garantem que a informação seja visível/ouvida (Perceptível), navegável (Operável), clara (Compreensível) e compatível com diversas tecnologias (Robusto)."
    },
    {
        id: 48,
        materia: "Específicos",
        enunciado: "No ECMAScript 6 (ES6), a introdução de 'let' e 'const' trouxe mudanças no escopo das variáveis. Qual a principal diferença entre 'let' e o antigo 'var'?",
        alts: [
            "O 'let' possui escopo de bloco, enquanto o 'var' possui escopo de função ou global.",
            "O 'let' permite que uma variável seja redeclarada no mesmo escopo, o que o 'var' proíbe.",
            "O 'var' é uma constante imutável, enquanto o 'let' permite alteração de valor.",
            "O 'let' funciona apenas em servidores Node.js, enquanto o 'var' é exclusivo para navegadores."
        ],
        correta: 0,
        comentario: "O escopo de bloco (variável limitada pelas chaves {}) é a grande vantagem do 'let' e 'const'. O 'var' sofre o efeito de 'hoisting' (elevação) e pode vazar para fora de blocos como IF ou FOR, causando erros."
    },
    {
        id: 49,
        materia: "Específicos",
        enunciado: "O framework Bootstrap utiliza um sistema de grid altamente flexível para criar layouts responsivos. Por padrão, em quantas colunas esse sistema divide a largura da página?",
        alts: [
            "12 colunas.",
            "10 colunas.",
            "8 colunas.",
            "16 colunas."
        ],
        correta: 0,
        comentario: "O sistema de grid do Bootstrap é baseado em 12 colunas. Essa divisão permite criar facilmente layouts com 2, 3, 4 ou 6 partes iguais, facilitando o design responsivo para diferentes tamanhos de tela."
    },
    {
        id: 50,
        materia: "Específicos",
        enunciado: "Na biblioteca jQuery, amplamente utilizada para manipulação do DOM, qual o seletor correto para identificar todos os elementos que possuem a classe CSS 'btn-sucesso'?",
        alts: [
            "$('.btn-sucesso')",
            "$('#btn-sucesso')",
            "$('btn-sucesso')",
            "$('<btn-sucesso>')"
        ],
        correta: 0,
        comentario: "O jQuery utiliza os seletores do CSS. O ponto (.) indica uma classe, enquanto o sustenido (#) indica um ID único. Seletores sem prefixo buscam nomes de tags HTML (como 'div' ou 'p')."
    },
    {
        id: 51,
        materia: "Específicos",
        enunciado: "No contexto de tecnologias Java EE (Jakarta EE), qual o componente responsável por processar requisições HTTP e gerar respostas dinâmicas em servidores como Tomcat e JBoss?",
        alts: [
            "Servlet.",
            "JavaBean.",
            "JDBC Driver.",
            "Maven Plugin."
        ],
        correta: 0,
        comentario: "Servlets são classes Java que formam a base da web no ecossistema Java EE. Elas recebem o request, processam a lógica e devolvem o response ao navegador. O Tomcat é, essencialmente, um 'Servlet Container'."
    },
    {
        id: 52,
        materia: "Específicos",
        enunciado: "Sobre a linguagem PHP, frequentemente utilizada em portais governamentais, qual a tag padrão e recomendada pelas normas PSR para iniciar um bloco de código?",
        alts: [
            "<?php",
            "<script php>",
            "<% php",
            "<?="
        ],
        correta: 0,
        comentario: "A tag '<?php' é o padrão oficial. Embora existam 'short tags' como '<?', elas podem estar desativadas nas configurações do servidor, enquanto '<?php' é universal e garante a portabilidade do código."
    },
    // --- NOVAS QUESTÕES: ENGENHARIA DE SOFTWARE E TESTES (53 a 58) ---
    {
        id: 53,
        materia: "Específicos",
        enunciado: "Na Análise de Pontos de Função (APF) segundo o IFPUG, os tipos de funções de dados que devem ser mensuradas para determinar o tamanho funcional são:",
        alts: [
            "Arquivos Lógicos Internos (ALI) e Arquivos de Interface Externa (AIE).",
            "Entradas Externas (EE) e Saídas Externas (SE).",
            "Consultas Externas (CE) e Arquivos de Configuração.",
            "Pontos de Caso de Uso e Linhas de Código Fonte."
        ],
        correta: 0,
        comentario: "A APF divide as funções em duas categorias: Dados (ALI e AIE) e Transações (EE, SE e CE). ALI são dados mantidos dentro da aplicação e AIE são dados apenas lidos de outras aplicações."
    },
    {
        id: 54,
        materia: "Específicos",
        enunciado: "No contexto de metodologias ágeis e UX (User Experience), o que define uma 'História de Usuário' (User Story) eficaz?",
        alts: [
            "Ser uma descrição concisa de uma necessidade sob a perspectiva do usuário, geralmente seguindo o formato: 'Como [perfil], eu quero [objetivo], para que [valor]'.",
            "Ser um documento técnico detalhado com diagramas de sequência e especificações de banco de dados.",
            "Ser um contrato jurídico assinado entre o Scrum Master e o Product Owner para impedir mudanças de escopo.",
            "Ser um manual de instruções passo a passo de como o desenvolvedor deve codificar a funcionalidade."
        ],
        correta: 0,
        comentario: "Histórias de Usuário focam no 'quê' e no 'porquê', não no 'como' técnico. Elas servem para gerar diálogo entre o negócio e o time técnico, focando sempre no valor entregue ao cliente."
    },
    {
        id: 55,
        materia: "Específicos",
        enunciado: "A pirâmide de testes é um conceito que sugere a proporção ideal de diferentes tipos de testes. Qual a recomendação básica desta estrutura?",
        alts: [
            "Ter uma base larga de testes unitários, uma camada média de integração e um topo menor de testes de interface (E2E).",
            "Focar 90% do esforço em testes manuais de interface, pois são os que o usuário final enxerga.",
            "Realizar apenas testes de carga e desempenho, ignorando os testes unitários por serem muito simples.",
            "Ter a mesma quantidade de testes unitários, de integração e de sistema para manter o equilíbrio."
        ],
        correta: 0,
        comentario: "Testes unitários são rápidos e baratos, por isso devem ser a maioria (base). Testes de interface são lentos e frágeis, por isso devem ser feitos em menor quantidade (topo)."
    },
    
    {
        id: 56,
        materia: "Específicos",
        enunciado: "Sobre a técnica de 'Storytelling' aplicada à elicitação de requisitos, é correto afirmar que seu objetivo principal é:",
        alts: [
            "Utilizar narrativas para humanizar os requisitos e compreender o contexto real de uso do software pelo cliente.",
            "Escrever o código-fonte do sistema em formato de texto literário para facilitar a leitura por leigos.",
            "Substituir o uso de protótipos e diagramas por contação de histórias lúdicas sem fins técnicos.",
            "Criar fábulas sobre o sucesso da empresa para motivar os desenvolvedores durante a Daily Scrum."
        ],
        correta: 0,
        comentario: "O Storytelling ajuda a equipe de desenvolvimento a entender a jornada do usuário, seus pontos de dor e expectativas através de cenários reais, evitando que o software seja construído apenas com base em listas de funcionalidades frias."
    },
    {
        id: 57,
        materia: "Específicos",
        enunciado: "Qual a diferença fundamental entre Testes de Carga e Testes de Estresse (Stress Testing)?",
        alts: [
            "O de carga verifica o comportamento sob uso esperado; o de estresse leva o sistema ao limite para ver onde ele falha.",
            "O de carga é feito por desenvolvedores; o de estresse é feito exclusivamente por usuários finais.",
            "O de carga testa apenas o banco de dados; o de estresse testa apenas a interface web.",
            "Não existe diferença técnica, ambos visam apenas medir a velocidade de resposta da rede."
        ],
        correta: 0,
        comentario: "Carga é sobre 'aguentar o dia a dia'. Estresse é sobre 'descobrir o ponto de quebra'. O teste de estresse foca na robustez e na recuperação do sistema após uma falha crítica de recursos."
    },
    {
        id: 58,
        materia: "Específicos",
        enunciado: "Na engenharia de requisitos, a técnica de Prototipação serve para:",
        alts: [
            "Validar requisitos prematuramente com o usuário, reduzindo riscos de má interpretação antes da codificação final.",
            "Gerar automaticamente o código de produção em Java a partir de desenhos feitos à mão.",
            "Substituir a necessidade de testes unitários e de integração no final do projeto.",
            "Aumentar o tempo de desenvolvimento para garantir que o cliente pague mais horas de consultoria."
        ],
        correta: 0,
        comentario: "Protótipos (baixa ou alta fidelidade) permitem que o usuário 'sinta' o sistema. É muito mais barato corrigir um erro de lógica em um desenho ou mockup do que em um sistema já programado."
    },

    // --- NOVAS QUESTÕES: GESTÃO ÁGIL AVANÇADA (59 a 64) ---
    {
        id: 59,
        materia: "Específicos",
        enunciado: "No framework Scrum, durante a cerimônia de Sprint Retrospective, qual é o objetivo principal da equipe?",
        alts: [
            "Inspecionar como a última Sprint foi em relação às pessoas, relacionamentos, processos e ferramentas, visando a melhoria contínua.",
            "Demonstrar as funcionalidades prontas para os Stakeholders e coletar feedback sobre o incremento do produto.",
            "Selecionar os itens do Backlog do Produto que serão desenvolvidos na próxima Sprint e definir a Meta da Sprint.",
            "Realizar uma atualização rápida de 15 minutos sobre o progresso das tarefas diárias e identificar impedimentos."
        ],
        correta: 0,
        comentario: "A Retrospectiva foca no PROCESSO (como trabalhamos), enquanto a Review (Revisão) foca no PRODUTO (o que fizemos). A melhoria contínua (Kaizen) é o coração desta cerimônia."
    },
    {
        id: 60,
        materia: "Específicos",
        enunciado: "O método Kanban utiliza o conceito de 'WIP Limit' (Work In Progress). Qual a finalidade técnica de limitar o trabalho em progresso?",
        alts: [
            "Reduzir o multitarefa, expor gargalos no fluxo de trabalho e melhorar o 'Lead Time' das entregas.",
            "Garantir que todos os desenvolvedores estejam trabalhando na mesma tarefa simultaneamente.",
            "Impedir que novos requisitos sejam adicionados ao Backlog do Produto durante o ano fiscal.",
            "Definir o número máximo de horas extras que a equipe pode realizar em um único projeto."
        ],
        correta: 0,
        comentario: "Ao limitar o WIP, você força a equipe a terminar o que começou antes de iniciar algo novo ('Stop starting, start finishing'). Isso torna o fluxo previsível e revela onde o trabalho fica parado."
    },
    {
        id: 61,
        materia: "Específicos",
        enunciado: "Sobre a relação entre 'Critérios de Aceitação' e 'Definição de Pronto' (Definition of Done - DoD), assinale a alternativa correta:",
        alts: [
            "Critérios de Aceitação são específicos para cada História de Usuário; a DoD é uma lista comum aplicada a todos os itens entregues na Sprint.",
            "Critérios de Aceitação são definidos pelo Scrum Master, enquanto a DoD é definida exclusivamente pelo cliente externo.",
            "Não há diferença entre os termos, ambos referem-se aos testes unitários automatizados que o desenvolvedor deve rodar.",
            "A DoD deve ser escrita em código (Gherkin/BDD), enquanto os Critérios de Aceitação são sempre informais e verbais."
        ],
        correta: 0,
        comentario: "Pense na DoD como um 'checklist de qualidade' padrão (ex: código revisado, testado e documentado). Já os Critérios de Aceitação dizem o que AQUELA funcionalidade específica deve fazer para ser aceita."
    },
    {
        id: 62,
        materia: "Específicos",
        enunciado: "No Scrum, se o Time de Desenvolvimento percebe que não conseguirá entregar todos os itens selecionados durante a Sprint, o que deve ser feito?",
        alts: [
            "Negociar com o Product Owner para remover ou redimensionar itens, mantendo o foco na Meta da Sprint.",
            "Adicionar automaticamente mais desenvolvedores ao time para acelerar a entrega até o final da semana.",
            "Cancelar a Sprint imediatamente e iniciar um novo planejamento do zero.",
            "Trabalhar em horas extras ilimitadas sem avisar o Product Owner para garantir a entrega total."
        ],
        correta: 0,
        comentario: "O escopo da Sprint é flexível, mas a Meta da Sprint (Sprint Goal) deve ser protegida. A transparência e a renegociação com o PO são as práticas ágeis corretas em vez do 'heroísmo' ou da falta de comunicação."
    },
    {
        id: 63,
        materia: "Específicos",
        enunciado: "O gráfico 'Cumulative Flow Diagram' (CFD) é uma métrica avançada do Kanban. O que indica um alargamento repentino na faixa de 'Testing' (Testes) neste gráfico?",
        alts: [
            "Um gargalo, indicando que o trabalho está acumulando na fase de testes mais rápido do que está sendo concluído.",
            "Um aumento na velocidade da equipe, indicando que os testes estão sendo finalizados instantaneamente.",
            "Que a equipe de desenvolvimento entrou de férias e o fluxo foi interrompido por completo.",
            "Que o projeto foi finalizado com sucesso e todos os itens foram movidos para a produção."
        ],
        correta: 0,
        comentario: "No CFD, a distância vertical entre as linhas representa a quantidade de trabalho. Se a faixa 'alarga', significa acúmulo (gargalo). Se a distância horizontal aumenta, significa que o tempo de ciclo (Cycle Time) está subindo."
    },
    {
        id: 64,
        materia: "Específicos",
        enunciado: "Quem tem a autoridade final para cancelar uma Sprint antes do tempo previsto, caso a Meta da Sprint se torne obsoleta?",
        alts: [
            "O Product Owner.",
            "O Scrum Master.",
            "O Time de Desenvolvimento.",
            "Os Stakeholders (Clientes)."
        ],
        correta: 0,
        comentario: "Apenas o Product Owner tem essa autoridade, embora ele possa fazê-lo sob influência dos Stakeholders ou do Time. É uma medida extrema e rara no Scrum moderno."
    },

    // --- NOVAS QUESTÕES: LÓGICA E ALGORITMOS AVANÇADOS (65 a 70) ---
    {
        id: 65,
        materia: "Específicos",
        enunciado: "Sobre algoritmos de ordenação, qual a principal característica que diferencia o 'Merge Sort' do 'Quick Sort' em termos de estabilidade e desempenho no pior caso?",
        alts: [
            "O Merge Sort é estável e garante desempenho O(n log n) no pior caso; o Quick Sort é instável e pode chegar a O(n²) no pior caso.",
            "O Quick Sort é sempre mais lento que o Merge Sort em qualquer conjunto de dados devido à sua natureza recursiva.",
            "Ambos são algoritmos de ordenação por bolha (bubble sort) e possuem a mesma complexidade de tempo constante.",
            "O Merge Sort utiliza menos memória que o Quick Sort, pois ordena os elementos 'in-place' (no próprio local)."
        ],
        correta: 0,
        comentario: "O Merge Sort é um algoritmo de 'dividir para conquistar' estável. O Quick Sort, apesar de ser muito rápido na média, sofre com o pior caso (O(n²)) se o pivô for mal escolhido, e não garante a ordem original de elementos iguais (instável)."
    },
    {
        id: 66,
        materia: "Específicos",
        enunciado: "No contexto de estruturas de dados, uma 'Tabela Hash' (Hashing) utiliza uma função para mapear chaves a endereços. O que ocorre quando dois valores diferentes geram o mesmo índice na tabela?",
        alts: [
            "Ocorre uma colisão, que deve ser tratada por técnicas como encadeamento (chining) ou endereçamento aberto.",
            "O sistema operacional trava imediatamente para evitar a corrupção da memória RAM.",
            "O segundo valor substitui automaticamente o primeiro, apagando o dado anterior sem aviso.",
            "A tabela hash dobra de tamanho instantaneamente e reordena todos os elementos via Quick Sort."
        ],
        correta: 0,
        comentario: "Colisões são inerentes às tabelas hash. Um bom algoritmo busca minimizá-las, mas quando ocorrem, o sistema usa listas encadeadas no mesmo índice ou procura o próximo espaço vazio (endereçamento aberto)."
    },
    
    {
        id: 67,
        materia: "Específicos",
        enunciado: "Sobre a 'Recursividade' na construção de algoritmos, é uma condição obrigatória para evitar um loop infinito (estouro de pilha):",
        alts: [
            "A existência de um 'Caso Base', que é uma condição que interrompe as chamadas recursivas.",
            "O uso obrigatório de variáveis globais para armazenar os resultados parciais de cada chamada.",
            "A conversão automática de todas as funções para o formato de laço 'while' pelo compilador.",
            "Que a função nunca receba parâmetros para não ocupar espaço no Stack de execução."
        ],
        correta: 0,
        comentario: "Toda função recursiva precisa de um ponto de parada (Caso Base). Sem ele, a função chamará a si mesma infinitamente até esgotar a memória reservada para a pilha de execução (Stack Overflow)."
    },
    {
        id: 68,
        materia: "Específicos",
        enunciado: "O método de pesquisa binária (Binary Search) é extremamente eficiente para encontrar elementos. Qual o requisito fundamental para que este algoritmo possa ser aplicado?",
        alts: [
            "O conjunto de dados (array/lista) deve estar previamente ordenado.",
            "O conjunto de dados deve conter apenas números inteiros e positivos.",
            "A lista deve ter um tamanho que seja obrigatoriamente uma potência de 2.",
            "O algoritmo só funciona se for implementado em linguagem C ou C++."
        ],
        correta: 0,
        comentario: "A pesquisa binária funciona dividindo o intervalo de busca ao meio sucessivamente. Se a lista não estiver ordenada, é impossível saber para qual lado (esquerda ou direita) o valor procurado estaria."
    },
    
    {
        id: 69,
        materia: "Específicos",
        enunciado: "Considere os tipos de dados simples e estruturados. Qual a principal diferença entre um 'Array' (Vetor) e uma 'Lista Encadeada'?",
        alts: [
            "O Array possui tamanho fixo e acesso direto via índice; a Lista Encadeada possui tamanho dinâmico e acesso sequencial através de ponteiros.",
            "O Array é armazenado na memória cache, enquanto a Lista Encadeada é armazenada apenas em disco rígido.",
            "Apenas Listas Encadeadas podem armazenar números reais (float); Arrays são exclusivos para strings.",
            "Arrays são estruturas de dados não-lineares, enquanto Listas Encadeadas são estruturas multidimensionais."
        ],
        correta: 0,
        comentario: "Arrays ocupam blocos contíguos de memória, o que permite acesso rápido pelo índice (O(1)). Listas encadeadas usam nós espalhados na memória ligados por ponteiros, facilitando a inserção/remoção (O(1)) mas dificultando o acesso aleatório."
    },
    {
        id: 70,
        materia: "Específicos",
        enunciado: "Na avaliação de expressões lógicas, se utilizarmos o operador 'XOR' (Ou Exclusivo) entre dois valores booleanos, o resultado será VERDADEIRO apenas quando:",
        alts: [
            "Exatamente um dos valores for verdadeiro e o outro for falso.",
            "Ambos os valores forem verdadeiros simultaneamente.",
            "Ambos os valores forem falsos simultaneamente.",
            "O primeiro valor for verdadeiro, independentemente do valor do segundo."
        ],
        correta: 0,
        comentario: "O XOR (Exclusive OR) retorna verdadeiro se, e somente se, os operandos forem diferentes. Se ambos forem V ou ambos forem F, o resultado é Falso."
    },

    // --- NOVAS QUESTÕES: BANCO DE DADOS E INFRAESTRUTURA (71 a 77) ---
    {
        id: 71,
        materia: "Específicos",
        enunciado: "As transações em SGBDs relacionais devem seguir as propriedades ACID para garantir a integridade dos dados. O que define a propriedade da 'Isolamento'?",
        alts: [
            "Garante que transações simultâneas sejam executadas sem interferirem umas nas outras, como se fossem sequenciais.",
            "Garante que todas as operações da transação sejam concluídas com sucesso ou nenhuma delas seja aplicada.",
            "Garante que, após o commit, os dados permaneçam gravados mesmo em caso de falha de energia ou sistema.",
            "Garante que o banco de dados passe de um estado válido para outro estado também válido conforme as regras."
        ],
        correta: 0,
        comentario: "O Isolamento evita que dados intermediários de uma transação incompleta fiquem visíveis para outras. As outras siglas do ACID são: Atomicidade (Tudo ou nada), Consistência (Regras válidas) e Durabilidade (Persistência pós-falha)."
    },
    
    {
        id: 72,
        materia: "Específicos",
        enunciado: "Sobre a administração do Microsoft SQL Server, qual o papel do componente 'SQL Server Agent'?",
        alts: [
            "Gerir o agendamento de tarefas automáticas (jobs), como backups, reconstrução de índices e alertas do sistema.",
            "Atuar como o motor principal de execução de consultas SQL e otimização de planos de execução.",
            "Criptografar obrigatoriamente todas as tabelas do banco de dados para conformidade com a LGPD.",
            "Realizar a tradução automática de código PL/SQL do Oracle para o T-SQL do SQL Server."
        ],
        correta: 0,
        comentario: "O SQL Server Agent é a ferramenta de automação do SQL Server. Ele permite que o administrador agende manutenções recorrentes sem intervenção manual, disparando jobs baseados em horário ou eventos."
    },
    {
        id: 73,
        materia: "Específicos",
        enunciado: "No contexto de Business Intelligence (BI), qual a principal diferença entre um 'Data Warehouse' (DW) e um 'Data Lake'?",
        alts: [
            "O DW armazena dados estruturados e limpos para relatórios; o Data Lake armazena dados em estado bruto (estruturados ou não).",
            "O DW é exclusivo para pequenas empresas, enquanto o Data Lake é utilizado apenas por órgãos governamentais.",
            "O Data Lake utiliza apenas tecnologia SQL Server, enquanto o DW exige o uso de NoSQL como o MongoDB.",
            "DW foca no armazenamento em tempo real (Streaming), enquanto o Data Lake foca exclusivamente em dados históricos de 10 anos."
        ],
        correta: 0,
        comentario: "O Data Warehouse segue o modelo 'Schema-on-write' (dados prontos para análise). O Data Lake segue o 'Schema-on-read' (armazena tudo agora, organiza depois), sendo ideal para o volume e variedade do Big Data."
    },
    
    {
        id: 74,
        materia: "Específicos",
        enunciado: "Em arquiteturas de Big Data, o conceito de 'Escalabilidade Horizontal' (Scale-out) refere-se à capacidade de:",
        alts: [
            "Aumentar o poder de processamento adicionando mais máquinas (nós) a um cluster distribuído.",
            "Aumentar a memória RAM e a CPU de um único servidor central para suportar a carga.",
            "Substituir todos os HDDs por SSDs para acelerar a leitura dos arquivos de log do banco.",
            "Reduzir o número de usuários para que o sistema atual consiga responder mais rapidamente."
        ],
        correta: 0,
        comentario: "Escalabilidade Vertical (Up) é dar mais força a um servidor. Escalabilidade Horizontal (Out) é somar servidores trabalhando juntos. Esta última é a base de tecnologias como Hadoop e Spark."
    },
    {
        id: 75,
        materia: "Específicos",
        enunciado: "Sobre o SGBD IBM DB2, citado no edital, qual recurso é utilizado para dividir fisicamente tabelas muito grandes em diferentes grupos de partições visando performance?",
        alts: [
            "Database Partitioning Feature (DPF).",
            "Auto-Indexing Cloud.",
            "Relational Buffer Pool.",
            "Stored Package Manager."
        ],
        correta: 0,
        comentario: "O DPF permite que o DB2 divida os dados entre vários servidores ou partições de banco de dados, permitindo processamento paralelo massivo, essencial para grandes volumes corporativos."
    },
    {
        id: 76,
        materia: "Específicos",
        enunciado: "O processamento analítico online (OLAP) permite a análise de dados sob múltiplas perspectivas através de uma estrutura conhecida como:",
        alts: [
            "Cubo de Dados.",
            "Tabela de Dispersão.",
            "Lista Encadeada.",
            "Vetor de Chaves Primárias."
        ],
        correta: 0,
        comentario: "O 'Cubo OLAP' permite realizar operações como Drill-down (detalhar) e Roll-up (resumir) os dados através de dimensões (ex: tempo, região, produto), facilitando a tomada de decisão gerencial."
    },

    
    {
        id: 77,
        materia: "Específicos",
        enunciado: "Qual comando SQL é utilizado para criar uma 'View' que simplifica consultas complexas ocultando as junções (joins) do usuário final?",
        alts: [
            "CREATE VIEW nome_view AS SELECT...",
            "CREATE VIRTUAL TABLE nome_view FROM...",
            "SELECT INTO VIEW nome_view...",
            "SET VIEW AS JOIN..."
        ],
        correta: 0,
        comentario: "Views são 'tabelas virtuais' que não armazenam dados fisicamente (geralmente), servindo apenas como uma consulta salva que pode ser acedida como se fosse uma tabela comum, aumentando a segurança e simplicidade."
    },

    // --- NOVAS QUESTÕES: ENGENHARIA DE SOFTWARE (78 a 87) ---
    {
        id: 78,
        materia: "Específicos",
        enunciado: "No contexto de metodologias ágeis, o Desenvolvimento Orientado por Comportamento (BDD - Behavior Driven Development) utiliza uma linguagem comum para descrever funcionalidades. Qual é a estrutura padrão para escrita de cenários no BDD?",
        alts: [
            "Dado (Given), Quando (When), Então (Then).",
            "Início, Meio, Fim.",
            "Requisito, Teste, Código.",
            "Entrada, Processamento, Saída."
        ],
        correta: 0,
        comentario: "O BDD foca no comportamento do sistema sob a perspectiva do negócio. A estrutura 'Dado (contexto), Quando (evento), Então (resultado)' facilita a comunicação entre técnicos e não-técnicos."
    },
    {
        id: 79,
        materia: "Específicos",
        enunciado: "O Desenvolvimento Guiado por Testes (TDD - Test Driven Development) segue um ciclo repetitivo de desenvolvimento. Qual é a ordem correta das etapas desse ciclo?",
        alts: [
            "Escrever um teste que falha (Red) -> Fazer o teste passar (Green) -> Refatorar o código (Refactor).",
            "Escrever o código -> Criar o teste -> Corrigir bugs.",
            "Analisar requisitos -> Codificar -> Testar unitariamente.",
            "Refatorar -> Escrever teste -> Codificar."
        ],
        correta: 0,
        comentario: "O ciclo Red-Green-Refactor é a base do TDD. Primeiro cria-se o teste (que falha pois o código não existe), depois escreve-se o código mínimo para passar, e por fim melhora-se o código sem alterar o comportamento."
    },
    {
        id: 80,
        materia: "Específicos",
        enunciado: "No framework Scrum, qual evento tem como objetivo principal inspecionar o incremento e adaptar o Product Backlog, ocorrendo ao final da Sprint?",
        alts: [
            "Sprint Review.",
            "Sprint Retrospective.",
            "Daily Scrum.",
            "Sprint Planning."
        ],
        correta: 0,
        comentario: "A Sprint Review foca no produto (o que foi feito), enquanto a Sprint Retrospective foca no processo (como a equipe trabalhou)."
    },
    {
        id: 81,
        materia: "Específicos",
        enunciado: "Sobre a técnica de Análise de Pontos de Função (APF), segundo o IFPUG, quais são os dois principais tipos de funções medidas?",
        alts: [
            "Funções de Dados (ALI e AIE) e Funções de Transação (EE, SE e CE).",
            "Funções de Entrada e Funções de Saída apenas.",
            "Funções de Processamento e Funções de Armazenamento.",
            "Funções de Interface e Funções de Algoritmo."
        ],
        correta: 0,
        comentario: "A APF mede o tamanho funcional. Funções de Dados: Arquivo Lógico Interno (ALI) e Arquivo de Interface Externa (AIE). Funções de Transação: Entrada Externa (EE), Saída Externa (SE) e Consulta Externa (CE)."
    },
    {
        id: 82,
        materia: "Específicos",
        enunciado: "Em testes de software, qual tipo de teste é realizado para verificar se o sistema continua funcionando corretamente após modificações ou correções de bugs?",
        alts: [
            "Teste de Regressão.",
            "Teste de Carga.",
            "Teste de Unidade.",
            "Teste de Fumaça (Smoke Test)."
        ],
        correta: 0,
        comentario: "O teste de regressão garante que novas alterações não 'quebraram' funcionalidades que já estavam operacionais."
    },
    {
        id: 83,
        materia: "Específicos",
        enunciado: "O conceito de MVP (Minimum Viable Product) no desenvolvimento ágil refere-se a:",
        alts: [
            "A versão mais simples de um produto que pode ser lançada para validar uma ideia com o menor esforço possível.",
            "O produto final completo após todas as fases de teste de aceitação.",
            "Um protótipo não funcional usado apenas para apresentações de design.",
            "A documentação mínima necessária para iniciar a codificação de um sistema."
        ],
        correta: 0,
        comentario: "O MVP foca no aprendizado validado. É o conjunto mínimo de funcionalidades que permite entregar valor ao usuário e coletar feedback para evoluções futuras."
    },
    {
        id: 84,
        materia: "Específicos",
        enunciado: "No Kanban, o que representa o limite de 'WIP' (Work In Progress)?",
        alts: [
            "A quantidade máxima de itens que podem estar em uma determinada etapa do fluxo simultaneamente.",
            "O tempo total que uma tarefa leva para atravessar todo o quadro.",
            "A prioridade máxima definida para tarefas urgentes.",
            "O número de desenvolvedores alocados em um projeto específico."
        ],
        correta: 0,
        comentario: "Limitar o WIP ajuda a identificar gargalos e foca na conclusão de tarefas (parar de começar e começar a terminar)."
    },
    {
        id: 85,
        materia: "Específicos",
        enunciado: "Qual tipo de teste de software foca em avaliar o comportamento do sistema sob uma carga de trabalho extrema, visando encontrar o ponto de ruptura?",
        alts: [
            "Teste de Estresse.",
            "Teste de Usabilidade.",
            "Teste de Integração.",
            "Teste Funcional."
        ],
        correta: 0,
        comentario: "Enquanto o teste de carga verifica se o sistema aguenta o esperado, o teste de estresse vai além do limite para ver como o sistema falha e se ele se recupera."
    },
    {
        id: 86,
        materia: "Específicos",
        enunciado: "Na Engenharia de Requisitos, a técnica de 'Storytelling' é utilizada principalmente para:",
        alts: [
            "Facilitar a elicitação de requisitos através da narração de cenários de uso e jornadas do usuário.",
            "Escrever o código-fonte de forma que pareça uma história legível.",
            "Documentar erros do sistema em formato de crônicas para os desenvolvedores.",
            "Substituir os diagramas de caso de uso por roteiros de cinema."
        ],
        correta: 0,
        comentario: "O Storytelling ajuda a humanizar os requisitos, permitindo que a equipe entenda o contexto, as dores e as necessidades do usuário de forma empática."
    },
    {
        id: 87,
        materia: "Específicos",
        enunciado: "Sobre o gerenciamento de requisitos, o que define um 'Requisito Não Funcional'?",
        alts: [
            "Uma restrição ou qualidade do sistema, como desempenho, segurança, disponibilidade ou usabilidade.",
            "Uma funcionalidade específica que o usuário deseja que o sistema execute.",
            "Um erro de software que impede o funcionamento de uma rotina.",
            "Um requisito que foi descartado durante a fase de análise de viabilidade."
        ],
        correta: 0,
        comentario: "Requisitos Funcionais dizem 'o que' o sistema faz. Requisitos Não Funcionais dizem 'como' o sistema deve ser (rápido, seguro, fácil de usar, etc.)."
    },

    // --- NOVAS QUESTÕES: DESENVOLVIMENTO WEB E ACESSIBILIDADE (88 a 97) ---
    {
        id: 88,
        materia: "Específicos",
        enunciado: "No CSS3, qual propriedade é utilizada para criar layouts flexíveis, permitindo alinhar e distribuir espaço entre itens em um container de forma eficiente?",
        alts: [
            "display: flex;",
            "position: absolute;",
            "float: left;",
            "display: block;"
        ],
        correta: 0,
        comentario: "O Flexbox revolucionou o layout web, permitindo alinhamentos complexos e responsividade com poucas linhas de código, superando as limitações de floats e tabelas."
    },
    {
        id: 89,
        materia: "Específicos",
        enunciado: "Em JavaScript (ECMAScript 6), qual a principal diferença entre declarar uma variável com 'var' e com 'let'?",
        alts: [
            "'let' possui escopo de bloco, enquanto 'var' possui escopo de função ou global.",
            "'var' é exclusivo para números e 'let' para strings.",
            "'let' não permite que o valor da variável seja alterado após a criação.",
            "Não há diferença prática, 'let' é apenas um apelido moderno para 'var'."
        ],
        correta: 0,
        comentario: "O 'let' (e o 'const') resolvem problemas de 'hoisting' e vazamento de escopo comuns ao 'var', tornando o código mais previsível e seguro."
    },
    {
        id: 90,
        materia: "Específicos",
        enunciado: "Sobre as Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1), quais são os quatro princípios fundamentais que norteiam a acessibilidade?",
        alts: [
            "Perceptível, Operável, Compreensível e Robusto.",
            "Rápido, Seguro, Bonito e Funcional.",
            "Visível, Clicável, Editável e Portável.",
            "Auditivo, Visual, Motor e Cognitivo."
        ],
        correta: 0,
        comentario: "Estes princípios (conhecidos pela sigla POUR) garantem que o conteúdo possa ser acessado por qualquer pessoa, independentemente de suas limitações ou tecnologias assistivas."
    },
    {
        id: 91,
        materia: "Específicos",
        enunciado: "O eMAG (Modelo de Acessibilidade em Governo Eletrônico) é uma adaptação das WCAG para o contexto brasileiro. Qual o seu principal objetivo?",
        alts: [
            "Padronizar a acessibilidade nos sites e portais do governo federal brasileiro.",
            "Criar uma nova linguagem de programação exclusiva para o governo.",
            "Substituir o uso de HTML por formatos proprietários de documentos.",
            "Impedir o acesso de usuários estrangeiros aos dados governamentais."
        ],
        correta: 0,
        comentario: "O eMAG fornece diretrizes específicas para que os serviços públicos digitais no Brasil sejam inclusivos para todos os cidadãos."
    },
    {
        id: 92,
        materia: "Específicos",
        enunciado: "No desenvolvimento Java EE, qual componente é responsável por gerenciar a lógica de negócio e oferecer suporte a transações e segurança de forma declarativa?",
        alts: [
            "EJB (Enterprise JavaBeans).",
            "JSP (JavaServer Pages).",
            "Servlet.",
            "JDBC (Java Database Connectivity)."
        ],
        correta: 0,
        comentario: "Os EJBs permitem que o desenvolvedor foque na regra de negócio, enquanto o servidor de aplicação (como JBoss ou Tomcat) cuida de aspectos complexos como persistência e transações."
    },
    {
        id: 93,
        materia: "Específicos",
        enunciado: "O framework Bootstrap é amplamente utilizado no desenvolvimento web para:",
        alts: [
            "Criar interfaces responsivas e componentes de UI pré-estilizados com HTML, CSS e JS.",
            "Gerenciar bancos de dados relacionais no lado do servidor.",
            "Compilar código Java para execução em navegadores antigos.",
            "Realizar a análise estatística de acessos ao site."
        ],
        correta: 0,
        comentario: "O Bootstrap utiliza um sistema de grid baseado em 12 colunas que facilita muito a criação de sites que funcionam bem em celulares, tablets e desktops."
    },
    {
        id: 94,
        materia: "Específicos",
        enunciado: "Em PHP, qual superglobal é utilizada para coletar dados enviados através de um formulário HTML com o método 'POST'?",
        alts: [
            "$_POST",
            "$_GET",
            "$_REQUEST",
            "$_SERVER"
        ],
        correta: 0,
        comentario: "O array $_POST contém as variáveis passadas via HTTP POST, sendo o método preferido para envio de dados sensíveis ou grandes volumes de informação."
    },
    {
        id: 95,
        materia: "Específicos",
        enunciado: "Qual a função do elemento HTML <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">?",
        alts: [
            "Ajustar a largura da página para corresponder à largura da tela do dispositivo, essencial para o design responsivo.",
            "Definir a cor de fundo padrão do navegador para o modo escuro.",
            "Indicar ao Google que o site deve ser indexado apenas em dispositivos móveis.",
            "Aumentar a velocidade de carregamento das imagens em conexões 3G."
        ],
        correta: 0,
        comentario: "Sem essa tag, os navegadores móveis tentam renderizar a página como se fosse um desktop, resultando em textos minúsculos e necessidade de zoom."
    },
    {
        id: 96,
        materia: "Específicos",
        enunciado: "No jQuery, qual seletor é utilizado para selecionar um elemento HTML que possui o ID 'botao-enviar'?",
        alts: [
            "$('#botao-enviar')",
            "$('.botao-enviar')",
            "$('botao-enviar')",
            "$(ID='botao-enviar')"
        ],
        correta: 0,
        comentario: "O jQuery utiliza seletores baseados no CSS. O '#' indica ID, o '.' indica classe e o nome puro indica a tag HTML."
    },
    {
        id: 97,
        materia: "Específicos",
        enunciado: "Sobre servidores de aplicação, qual a principal diferença entre o Apache Tomcat e o WildFly (antigo JBoss)?",
        alts: [
            "O Tomcat é um container de Servlets/JSP; o WildFly é um servidor Java EE completo (Full Profile).",
            "O Tomcat suporta apenas PHP, enquanto o WildFly suporta apenas Java.",
            "O WildFly é gratuito e o Tomcat é uma ferramenta paga da Microsoft.",
            "Não há diferença, são apenas nomes diferentes para o mesmo software da Apache."
        ],
        correta: 0,
        comentario: "O Tomcat implementa apenas uma parte da especificação Java EE (Web Profile). O WildFly implementa a pilha completa, incluindo EJBs, JMS, etc."
    },

    // --- NOVAS QUESTÕES: BANCO DE DADOS AVANÇADO E NOSQL (98 a 107) ---
    {
        id: 98,
        materia: "Específicos",
        enunciado: "Bancos de dados NoSQL do tipo 'Orientado a Documentos', como o MongoDB, armazenam dados tipicamente em qual formato?",
        alts: [
            "JSON ou BSON.",
            "Tabelas com linhas e colunas fixas.",
            "Arquivos de texto simples (TXT).",
            "Planilhas de Excel (XLSX)."
        ],
        correta: 0,
        comentario: "Documentos JSON permitem estruturas flexíveis e aninhadas, facilitando o armazenamento de dados que não possuem um esquema rígido."
    },
    {
        id: 99,
        materia: "Específicos",
        enunciado: "O ElasticSearch é uma ferramenta amplamente utilizada para:",
        alts: [
            "Busca e análise de dados em tempo real, sendo um motor de busca distribuído baseado em documentos JSON.",
            "Gerenciar o backup físico de fitas magnéticas em data centers.",
            "Substituir o firewall da rede para evitar ataques de negação de serviço.",
            "Criar diagramas de entidade-relacionamento automaticamente."
        ],
        correta: 0,
        comentario: "O ElasticSearch é parte da stack ELK e é excelente para buscas textuais complexas e análise de logs em grandes volumes de dados."
    },
    {
        id: 100,
        materia: "Específicos",
        enunciado: "Na normalização de dados, uma tabela está na Terceira Forma Normal (3FN) quando:",
        alts: [
            "Está na 2FN e não possui dependências transitivas (colunas não-chave dependendo de outras colunas não-chave).",
            "Possui pelo menos três chaves primárias compostas.",
            "Todos os seus campos são do tipo texto (VARCHAR).",
            "Contém dados repetidos para garantir a redundância e segurança."
        ],
        correta: 0,
        comentario: "A 3FN elimina a redundância onde um campo depende de outro que não é a chave primária, garantindo maior integridade aos dados."
    },
    {
        id: 101,
        materia: "Específicos",
        enunciado: "Bancos de dados NoSQL 'Orientados a Grafos', como o Neo4j, são ideais para:",
        alts: [
            "Modelar relacionamentos complexos e conexões entre dados, como redes sociais ou sistemas de recomendação.",
            "Armazenar apenas arquivos de imagem e vídeo de alta resolução.",
            "Substituir o uso de índices em bancos de dados relacionais tradicionais.",
            "Realizar cálculos matemáticos de alta precisão para engenharia civil."
        ],
        correta: 0,
        comentario: "Em grafos, os relacionamentos são cidadãos de primeira classe. É muito mais performático percorrer conexões (nós e arestas) do que fazer múltiplos 'joins' em SQL."
    },
    {
        id: 102,
        materia: "Específicos",
        enunciado: "A metodologia CRISP-DM é um padrão de processo para projetos de:",
        alts: [
            "Mineração de Dados (Data Mining).",
            "Desenvolvimento de Hardware.",
            "Manutenção de Redes de Fibra Óptica.",
            "Gestão de Recursos Humanos."
        ],
        correta: 0,
        comentario: "O CRISP-DM define fases como: Entendimento do Negócio, Entendimento dos Dados, Preparação, Modelagem, Avaliação e Implantação."
    },
    {
        id: 103,
        materia: "Específicos",
        enunciado: "O que caracteriza um banco de dados NoSQL 'Orientado a Colunas' (como o Apache Cassandra)?",
        alts: [
            "Armazena dados em colunas em vez de linhas, otimizando consultas analíticas e agregação de grandes volumes.",
            "Exige que todas as tabelas tenham exatamente 10 colunas.",
            "Não permite o uso de chaves primárias.",
            "É um banco de dados que funciona apenas dentro do Microsoft Excel."
        ],
        correta: 0,
        comentario: "Bancos colunares são excelentes para leitura de grandes quantidades de dados de colunas específicas, sendo muito usados em Big Data e Data Warehousing."
    },
    {
        id: 104,
        materia: "Específicos",
        enunciado: "Em bancos de dados distribuídos, o Teorema CAP afirma que é impossível um sistema garantir simultaneamente:",
        alts: [
            "Consistência, Disponibilidade e Particionamento (Tolerância a falhas).",
            "Custo, Agilidade e Performance.",
            "Criptografia, Autenticação e Permissão.",
            "Concorrência, Atomicidade e Persistência."
        ],
        correta: 0,
        comentario: "O Teorema CAP diz que, em caso de partição de rede, você deve escolher entre manter o sistema consistente (C) ou disponível (A)."
    },
    {
        id: 105,
        materia: "Específicos",
        enunciado: "O conceito de 'Data Lakehouse' tenta unir o melhor de quais dois mundos?",
        alts: [
            "Data Warehouse e Data Lake.",
            "SQL Server e Oracle.",
            "Frontend e Backend.",
            "Desenvolvimento e Operações (DevOps)."
        ],
        correta: 0,
        comentario: "O Lakehouse traz a estrutura e gestão de dados do DW para o armazenamento barato e flexível do Data Lake."
    },
    {
        id: 106,
        materia: "Específicos",
        enunciado: "Qual a função do processo de ETL em um ambiente de Business Intelligence?",
        alts: [
            "Extrair, Transformar e Carregar dados de diversas fontes para um repositório central.",
            "Eliminar Todos os Logs do sistema para economizar espaço.",
            "Executar Testes de Linguagem para verificar a tradução do site.",
            "Enviar Torpedos e Ligações para os clientes automaticamente."
        ],
        correta: 0,
        comentario: "ETL (Extract, Transform, Load) é o coração da integração de dados, garantindo que os dados brutos sejam limpos e padronizados antes da análise."
    },
    {
        id: 107,
        materia: "Específicos",
        enunciado: "Sobre a notação IDEF1X, utilizada em modelagem de dados, é correto afirmar que:",
        alts: [
            "É uma técnica para produzir modelos de dados relacionais semânticos.",
            "É um protocolo de comunicação para redes sem fio.",
            "É uma linguagem de programação para inteligência artificial.",
            "É um padrão de criptografia para transações bancárias."
        ],
        correta: 0,
        comentario: "O IDEF1X foi desenvolvido para modelar informações de forma rigorosa, sendo muito comum em projetos governamentais e militares."
    },

    // --- NOVAS QUESTÕES: LÓGICA, ALGORITMOS E ESTRUTURAS (108 a 115) ---
    {
        id: 108,
        materia: "Específicos",
        enunciado: "O que caracteriza uma função recursiva na programação?",
        alts: [
            "Uma função que chama a si mesma para resolver subproblemas menores.",
            "Uma função que nunca termina sua execução (loop infinito).",
            "Uma função que pode ser acessada por qualquer outra parte do sistema.",
            "Uma função que não aceita parâmetros de entrada."
        ],
        correta: 0,
        comentario: "A recursividade é poderosa para problemas que podem ser divididos em partes idênticas, como o cálculo de fatorial ou percurso em árvores, mas exige um 'caso base' para parar."
    },
    {
        id: 109,
        materia: "Específicos",
        enunciado: "Qual algoritmo de ordenação utiliza a estratégia de 'dividir para conquistar', particionando o array em torno de um elemento pivô?",
        alts: [
            "Quick Sort.",
            "Bubble Sort.",
            "Insertion Sort.",
            "Selection Sort."
        ],
        correta: 0,
        comentario: "O Quick Sort é um dos algoritmos mais eficientes na prática (média O(n log n)), embora seu pior caso seja O(n²)."
    },
    {
        id: 110,
        materia: "Específicos",
        enunciado: "Em estruturas de dados, o que é uma 'Tabela Hash' (Hashing)?",
        alts: [
            "Uma estrutura que associa chaves a valores através de uma função matemática para busca rápida.",
            "Uma tabela que armazena apenas senhas criptografadas.",
            "Um tipo de banco de dados que não permite a exclusão de registros.",
            "Uma lista onde os elementos são ordenados por ordem alfabética automaticamente."
        ],
        correta: 0,
        comentario: "O Hashing permite acesso quase instantâneo (O(1)) aos dados, transformando a chave em um índice do array."
    },
    {
        id: 111,
        materia: "Específicos",
        enunciado: "Sobre a passagem de parâmetros em funções, o que acontece na 'Passagem por Referência'?",
        alts: [
            "A função recebe o endereço de memória da variável original, e qualquer alteração afeta a variável fora da função.",
            "A função recebe uma cópia do valor, e a variável original permanece inalterada.",
            "A função ignora o parâmetro e utiliza uma variável global.",
            "O parâmetro é convertido obrigatoriamente para uma string antes de ser usado."
        ],
        correta: 0,
        comentario: "Na passagem por referência, você trabalha diretamente com o dado original. Na passagem por valor, você trabalha com uma cópia segura."
    },
    {
        id: 112,
        materia: "Específicos",
        enunciado: "Qual a complexidade de tempo no pior caso para uma busca binária em um array ordenado de tamanho N?",
        alts: [
            "O(log N)",
            "O(N)",
            "O(N²)",
            "O(1)"
        ],
        correta: 0,
        comentario: "A busca binária divide o espaço de busca pela metade a cada passo, resultando em uma eficiência logarítmica."
    },
    {
        id: 113,
        materia: "Específicos",
        enunciado: "No paradigma de Programação Orientada a Objetos (POO), o conceito de 'Polimorfismo' permite:",
        alts: [
            "Que objetos de diferentes classes respondam à mesma mensagem de formas diferentes.",
            "Que uma classe herde todas as características de múltiplas classes pai simultaneamente.",
            "Esconder os detalhes internos de uma classe e mostrar apenas o necessário.",
            "Criar variáveis que podem mudar de tipo durante a execução do programa."
        ],
        correta: 0,
        comentario: "O polimorfismo (muitas formas) permite tratar objetos de subclasses como se fossem da superclasse, mas executando o comportamento específico de cada um."
    },
    {
        id: 114,
        materia: "Específicos",
        enunciado: "O que define uma 'Estrutura de Dados Heterogênea'?",
        alts: [
            "Uma estrutura que pode armazenar dados de diferentes tipos (ex: um Registro ou Struct).",
            "Uma estrutura que armazena apenas dados do mesmo tipo (ex: um Array de inteiros).",
            "Uma estrutura que só pode ser acessada por um usuário por vez.",
            "Uma estrutura que se apaga automaticamente após a leitura."
        ],
        correta: 0,
        comentario: "Enquanto o Array é homogêneo (tudo igual), o Registro (ou Objeto) permite agrupar informações de tipos distintos (nome: string, idade: int) sob um mesmo nome."
    },
    {
        id: 115,
        materia: "Específicos",
        enunciado: "Qual o objetivo principal do algoritmo de ordenação 'Merge Sort'?",
        alts: [
            "Dividir o array em metades, ordenar cada metade recursivamente e depois mesclá-las.",
            "Trocar elementos adjacentes repetidamente até que o maior 'flutue' para o topo.",
            "Encontrar o menor elemento e colocá-lo na primeira posição, repetindo para o restante.",
            "Inserir cada elemento na sua posição correta em uma lista já ordenada."
        ],
        correta: 0,
        comentario: "O Merge Sort garante complexidade O(n log n) em todos os casos, sendo muito estável e eficiente para grandes conjuntos de dados."
    }
];
