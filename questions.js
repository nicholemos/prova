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
    }
];
