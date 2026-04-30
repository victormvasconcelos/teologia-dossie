// =============================================
// DATA
// =============================================

const PHASES = [
  {
    id: 1,
    title: 'O Código Fonte e os Patriarcas',
    books: 'Gênesis',
    color: '#7c3aed',
    dim: 'rgba(124,58,237,0.15)',
    count: 6,
    label: 'FASE 1',
    desc: 'Gênesis não é apenas o começo da história — é o repositório do código-fonte que o resto da Escritura executa.',
  },
  {
    id: 2,
    title: 'A Engenharia do Tabernáculo e a Lei',
    books: 'Êxodo · Números · Levítico',
    color: '#2563eb',
    dim: 'rgba(37,99,235,0.15)',
    count: 4,
    label: 'FASE 2',
    desc: 'A Lei não é um obstáculo ao Evangelho — é o Evangelho em linguagem de código executável.',
  },
  {
    id: 3,
    title: 'Os Salmos e os Profetas',
    books: 'Salmos · Miqueias · Isaías · Daniel',
    color: '#0d9488',
    dim: 'rgba(13,148,136,0.15)',
    count: 6,
    label: 'FASE 3',
    desc: 'Os profetas não adivinharam — receberam especificações técnicas de uma execução que ocorreria séculos depois.',
  },
  {
    id: 4,
    title: 'O Ministério Clínico e o Grego Koiné',
    books: 'Lucas (Novo)',
    color: '#059669',
    dim: 'rgba(5,150,105,0.15)',
    count: 4,
    label: 'FASE 4',
    desc: 'Lucas é um perito forense que documenta os milagres com vocabulário clínico preciso que outros autores não possuíam.',
  },
  {
    id: 5,
    title: 'A Execução Histórica',
    books: 'Lucas · Mateus · Qumran',
    color: '#dc2626',
    dim: 'rgba(220,38,38,0.15)',
    count: 7,
    label: 'FASE 5',
    desc: 'A crucificação não foi apenas um evento religioso — foi um evento astronômico, médico, jurídico e histórico atestado por fontes pagãs.',
  },
  {
    id: 6,
    title: 'A Escatologia e a Macroestrutura',
    books: 'Levítico · Apocalipse · Gênesis',
    color: '#d97706',
    dim: 'rgba(217,119,6,0.15)',
    count: 3,
    label: 'FASE 6',
    desc: 'Se as Festas de Primavera foram cumpridas com precisão de relógio, as Festas de Outono são o roteiro do que está por vir.',
  },
];

const EVIDENCES = [
  {
    id: 1, phase: 1, num: '01',
    title: 'A Exegese Radical de Rabi Akiva',
    ref: 'Gênesis 1:1 · Talmude Babilônico, Pesachim 22b · Apocalipse 1:8',
    category: 'Filológico · Arquitetura Literária',
    excerpt: 'A primeira frase da Bíblia contém uma partícula hebraica intraduzível — composta pela primeira e última letra do alfabeto — que gramaticalmente "enquadra" os objetos da criação. Para Rabi Akiva (séc. I d.C.), cada ocorrência dessa partícula no Torá era um sinal divino de expansão de sentido. A soma gematria dos sete termos de Gênesis 1:1 é 2.701 — o produto exato de 37 × 73, dois primos que se leem como espelho um do outro. A arquitetura já estava gravada na primeira frase.',
    fact: 'A primeira sentença bíblica — <em>Bereshit bara Elohim et ha-shamayim ve-et ha-aretz</em> — contém sete palavras e vinte e oito letras (4×7). A partícula <strong>את (Alef-Tav)</strong> ocorre duas vezes: marcando "os céus" e "a terra" como objetos diretos. É a <em>nota accusativi</em> do hebraico — intraduzível em qualquer língua moderna. Sua composição: Alef (א), primeira letra do alfabeto, e Tav (ת), última letra. A soma gematria dos sete termos de Gênesis 1:1 resulta em <strong>2.701</strong>. Fatorando: 2.701 = <strong>37 × 73</strong>. Ambos são números primos — e os dígitos de um são o reverso exato do outro. 2.701 é também o <strong>73º número triangular</strong>: a quantidade exata de pontos para montar um triângulo equilátero perfeito com 73 pontos por lado.',
    context: 'Na tradição talmúdica, <strong>Nahum de Gimzo</strong> (séc. I d.C.) ensinava o princípio hermenêutico chamado <em>ribbui</em> — expansão implícita: cada partícula aparentemente "vazia" no Torá continha uma inclusão de significado além do objeto direto literal. Seu discípulo <strong>Rabi Akiva ben Yosef</strong> (~50–135 d.C.) radicalizou o método: expundia cada ocorrência de את como sinal de que algo adicional estava incluído além do objeto gramatical imediato. O Talmude Babilônico (<em>Pesachim</em> 22b) registra o debate: um mestre anterior desistiu do método ao chegar em Deuteronômio 6:13 ("Temerás o SENHOR teu Deus"), pois a partícula implicaria expandir o próprio objeto do temor divino — o que pareceu irreverente. Akiva sustentou a interpretação: a partícula ali inclui os sábios da Torá no objeto do temor. A <em>Epístola de Barnabé</em> (séc. II d.C.) documenta que o judaísmo cristão primitivo também leu a partícula teologicamente em outros contextos — a prática não foi inventada pelos cristãos. Quanto ao 37×73: a literatura do Antigo Oriente Próximo está repleta de estruturas numéricas intencionais embutidas por escribas para demonstrar maestria. A <em>Enuma Elish</em> babilônica possui suas próprias estruturas; Gênesis 1 foi deliberadamente composto como <em>contra-narrativa</em>, demonstrando que o Deus hebraico cria pela palavra em ordem matemática — em oposição direta ao caos-batalha cosmogônico dos deuses da Babilônia.',
    logic: 'O argumento opera em duas camadas independentes que se reforçam mutuamente. <strong>Camada hermenêutica:</strong> a partícula את é composta pelas letras que representam o começo e o fim de todo o alfabeto hebraico — como se a criação fosse enquadrada pelo Ser que abrange toda a expressão possível. Os rabinos do séc. I não inventaram essa observação por motivos cristológicos; ela estava no método exegético hebraico antes de qualquer reivindicação sobre Jesus. Quando João registra Jesus declarando em grego <em>"Ego eimi to Alpha kai to Omega"</em> — "Eu sou o Alfa e o Ômega" (Apocalipse 1:8) — ele traduz para o grego o conceito exato que o hebraico havia inscrito em Gênesis 1:1: o Ser que abrange o início e o fim de toda expressão. A conexão atravessa dois alfabetos, dois idiomas e mais de mil anos sem que nenhum autor pudesse tê-la coordenado deliberadamente. <strong>Camada arquitetural:</strong> o valor 2.701 = 37 × 73 deve ser avaliado no contexto de composição intencional. Textos do Antigo Oriente Próximo são conhecidos por seus "colofões numéricos" — estruturas matemáticas embutidas pelo autor para sinalizar ordem e maestria. Gênesis 1 foi composto como resposta literária à cosmogonia babilônica, e sua abertura exibe uma arquitetura numérica que os escribas hebraicos reconheceriam como a marca da ordem perfeita inscrita no momento em que o mundo começa — o oposto exato do caos primordial babilônico.',
    related: [25, 26],
    refs: [
      'Talmude Babilônico, Pesachim 22b',
      'Bereshit Rabbah 1:14 (Midrash Rabbah)',
      'Rashi, Perush al ha-Torah, Gênesis 1:1 (séc. XI)',
      'Jeffrey, G. The Signature of God. Word, 1996',
    ],
  },
  {
    id: 2, phase: 1, num: '02',
    title: 'A Semente da Mulher',
    ref: 'Gênesis 3:15',
    category: 'Lógica de Alto Nível · Biologia e Linguística',
    excerpt: 'A linhagem bíblica é sempre paterna — "fulano gerou sicrano", nunca o inverso. "Semente da mulher" é biologicamente impossível na linguagem normal. É um paradoxo gramatical intencional que, 4.000 anos antes da genética moderna, estabelece o único mecanismo lógico para o nascimento virginal.',
    fact: 'Gênesis 3:15 — chamado pelos teólogos de <strong>Proto-Evangelho</strong>, a primeira profecia messiânica da Bíblia — usa a expressão <strong>"semente da mulher"</strong> (זֶרַע הָאִשָּׁה, <em>zera ha-ishah</em>) para descrever quem derrotará a serpente. A palavra hebraica <em>zera</em> (זֶרַע) é usada em todo o Antigo Testamento para descendência masculina — sêmen, linhagem paterna.',
    context: 'No mundo antigo — e na biologia de hoje — a linhagem é paterna. Em todas as genealogias bíblicas, a fórmula invariável é "fulano gerou sicrano" — nunca o inverso. A mulher recebe a semente; ela não possui zera. O uso do genitivo feminino aqui é tão anômalo que escribas e rabinos do período intertestamentário o comentaram. O Targum de Jônatas, tradução aramaica parafrasada do Pentateuco, mantém o texto sem alterar — porque não há como suavizar o paradoxo sem destruir o sentido.',
    logic: 'O argumento é de eliminação lógica. Se o texto dissesse "semente do homem", seria a fórmula padrão — sem paradoxo. Se dissesse "filho de uma mulher", seria neutro. A escolha deliberada de <strong>"semente DA mulher"</strong> cria uma categoria biologicamente impossível na reprodução normal. Existem exatamente dois mecanismos que poderiam satisfazê-la: (1) partenogênese espontânea humana — que não ocorre em mamíferos de forma natural; (2) concepção sem contribuição genética paterna humana — o nascimento virginal. O texto não descreve o mecanismo — ele cria a <em>condição lógica</em> que apenas um tipo de nascimento pode satisfazer. E isso no terceiro capítulo da Bíblia, séculos antes de qualquer texto do Novo Testamento.',
    related: [12],
    refs: [
      'Septuaginta (LXX), Gênesis 3:15, ~250 a.C.',
      'Keil, C.F. & Delitzsch, F. Biblical Commentary on the OT, Vol. 1, 1861',
      'Collins, C.J. Genesis 1-4: A Linguistic, Literary, and Theological Commentary. P&R, 2006',
      'Irenaeus of Lyon, Adversus Haereses, III.23.7, ~180 d.C.',
    ],
  },
  {
    id: 3, phase: 1, num: '03',
    title: 'A Anomalia de Melquisedeque',
    ref: 'Gênesis 14 · Salmo 110:4 · Hebreus 7',
    category: 'Engenharia Jurídica · Precedente Legal',
    excerpt: 'No sistema teocrático de Israel, sem certidão de nascimento não há sacerdócio. Melquisedeque aparece em Gênesis sem nascimento, sem morte, sem genealogia — uma omissão juridicamente calculada que cria o único precedente legal possível para um sacerdócio eterno fora da tribo de Levi.',
    fact: 'Gênesis 14:18-20 registra <strong>Melquisedeque</strong>, "rei de Salém e sacerdote do Deus Altíssimo", abençoando Abraão e recebendo o dízimo de tudo. O texto não menciona seu pai, mãe, nascimento, morte ou sucessão. Em hebraico, seu nome significa "Rei da Justiça" (<em>Melki</em> = rei, <em>Tzedeq</em> = justiça) e ele é rei de Salém (<em>Shalem</em> = paz) — portanto: Rei da Justiça e da Paz.',
    context: 'A Lei Mosaica (Levítico 21) estabelecia regras rígidas: apenas descendentes de Levi podiam ser sacerdotes; apenas descendentes de Arão podiam ser sumos sacerdotes. A genealogia era documento obrigatório — sem ela, nenhum sacerdote podia oficiar. Jesus era da tribo de Judá, não de Levi. Para ser sacerdote legalmente, era necessário um precedente de uma ordem sacerdotal completamente diferente, anterior e superior à levítica. E esse precedente estava em Gênesis — anterior ao próprio sistema levítico por 400+ anos.',
    logic: 'A omissão do nascimento e da morte de Melquisedeque não é lacuna do registro histórico — é engenharia jurídica intencional. Hebreus 7:3 usa o grego <em>"apator, ametor, agenealogetos"</em> — sem pai, sem mãe, sem genealogia — não para dizer que Melquisedeque era sobrenatural, mas que dentro do sistema jurídico do texto ele funciona como sacerdote eterno <em>precisamente porque</em> sua vida não tem os marcadores de início e fim documentados. Mil anos depois de Gênesis, o Salmo 110:4 cita essa figura obscura numa profecia direta ao Messias: <strong>"Tu és sacerdote para sempre, segundo a ordem de Melquisedeque."</strong> Jesus, da tribo de Judá, não poderia ser sacerdote pela lei levítica — mas a lei já havia provisionado uma ordem alternativa, mais antiga que Moisés, juridicamente impecável, baseada num precedente anterior ao próprio Israel.',
    related: [7],
    refs: [
      'Josephus Flavius, Antiquities of the Jews, I.10.2 (séc. I d.C.)',
      'Horton, F.L. The Melchizedek Tradition. Cambridge University Press, 1976',
      'Fitzmyer, J.A. Now This Melchizedek. Catholic Biblical Quarterly 25, 1963',
      'Fragmento 11QMelch, Manuscritos do Mar Morto (séc. I a.C.)',
    ],
  },
  {
    id: 4, phase: 1, num: '04',
    title: 'A Geometria de Moriá',
    ref: 'Gênesis 22 · 2 Crônicas 3:1',
    category: 'Tipologia Narrativa · Geográfica e Histórica',
    excerpt: 'Abraão é mandado sacrificar seu filho único no Monte Moriá. O episódio contém cinco pontos de alinhamento exato com o Calvário — incluindo a identidade geográfica confirmada séculos depois quando Salomão escolhe exatamente esse monte para o Templo. Não é analogia vaga: é roteiro executado no mesmo endereço.',
    fact: 'Gênesis 22: Deus ordena a Abraão que ofereça seu <strong>filho único</strong>, Isaque, no <strong>Monte Moriá</strong>. Isaque carrega a madeira nas próprias costas. No momento do sacrifício, um carneiro preso pelos chifres em arbusto de espinhos é substituído por Isaque. Abraão nomeia o lugar "YHWH-Jireh" — O Senhor proverá. <strong>2 Crônicas 3:1</strong> confirma: Salomão edificou o Templo exatamente no Monte Moriá.',
    context: 'O Monte Moriá é parte do sistema de colinas a nordeste de Jerusalém. O Gólgota — "lugar da caveira", lugar da crucificação — estava na mesma cadeia de colinas, fora dos muros norte da cidade. A identificação geográfica não é especulação: Josefo (Guerra dos Judeus 5.4.2) descreve o Monte do Templo e o Gólgota como parte da mesma formação rochosa. Estamos falando do mesmo sistema de montanhas — separados por talvez 1 km em linha reta.',
    logic: 'Os cinco pontos de alinhamento são estruturais, não alegóricos: (1) <strong>Mesmo sistema de montanhas</strong> — Moriá/Calvário, confirmado geograficamente; (2) <strong>Filho único amado</strong> — Isaque era o único filho da promessa; Jesus, o "Filho único" em João 3:16; (3) <strong>O filho carrega a madeira para seu próprio sacrifício</strong> — Gênesis 22:6; João 19:17 diz que Jesus "carregou a sua própria cruz"; (4) <strong>Substituição por carneiro preso pelos chifres em um emaranhado</strong> (סְבַךְ, <em>sevach</em> — "mato denso, emaranhado de ramos") — os Pais da Igreja (Orígenes, Eusébio de Cesareia) notaram a tipologia do substituto imobilizado por espinhos ao redor da cabeça; o texto hebraico limita-se ao ato literal de substituição; (5) <strong>Pai recebe o filho de volta como dos mortos</strong> — Hebreus 11:19 explicita: "Abraão cria que Deus era poderoso para ressuscitar, e da morte o recebeu em figura." Gênesis 22 não é uma história de obediência. É um roteiro teatral com endereço físico, executado 2.000 anos antes do evento que representa.',
    related: [5, 8, 10],
    refs: [
      '2 Crônicas 3:1 (identificação de Moriá com o local do Templo)',
      'Josephus Flavius, Antiquities of the Jews, VII.13.4',
      'Wenham, G.J. Genesis 16-50 (Word Biblical Commentary, Vol. 2). Word, 1994',
      'Sarna, N.M. Genesis: JPS Torah Commentary. JPS, 1989',
    ],
  },
  {
    id: 5, phase: 1, num: '05',
    title: 'A Trajetória de José',
    ref: 'Gênesis 37–50',
    category: 'Tipologia Narrativa · Padrão da Dupla Visita',
    excerpt: 'José: traído por seus irmãos por prata — a ideia sendo de "Judá". Descende à prisão, ressurge como governador, torna-se salvador dos gentios antes de ser reconhecido pelos próprios irmãos. O detalhe decisivo não é a traição — é o padrão da segunda visita, quando o reconhecimento vem com pranto inconsolável.',
    fact: 'José (Gênesis 37-50): traído pelos irmãos, a ideia de cobrar prata sendo de <strong>Judá</strong> (Gênesis 37:26-27). Vendido por 20 peças de prata. Encarcerado injustamente. Exaltado ao governo do Egito. Na primeira visita dos irmãos, não se revela. Na segunda visita, se revela com pranto (Gênesis 45:2). Salva toda a família e as nações ao redor durante a fome.',
    context: 'O nome "Judas" é a forma grega de "Judá" — o mesmo nome. A traição por prata: 20 moedas de prata para José (Gênesis 37:28); 30 peças de prata para Jesus (Mateus 26:15). A diferença é coerente com a inflação entre os séculos. No esquema tipológico hebraico, o "segundo José" era uma figura messiânica aguardada — a tradição rabínica do <em>Mashiach ben Yosef</em> (Messias filho de José) sobrevive no Talmude e nos Midrashim como uma expectativa paralela ao Messias davídico.',
    logic: 'O argumento mais poderoso não está na traição — está no <strong>padrão da visita dupla</strong>. Na primeira visita, José não se revela aos irmãos; eles não o reconhecem (Gênesis 42). Na segunda visita, o reconhecimento vem com prantos incontroláveis e reconciliação plena (Gênesis 45:1-3). Zacarias 12:10 profetiza usando exatamente esse padrão: <em>"Olharão para mim, aquele a quem traspassaram, e se lamentarão por ele como alguém se lamenta pelo filho único."</em> A estrutura de Gênesis 37-50 não é apenas analogia — é o template do qual Zacarias extrai o padrão. Israel não reconheceu o Messias na primeira vinda; o reconhecimento, segundo Zacarias, virá na segunda — com o mesmo pranto de Gênesis 45. A tipologia opera em dois níveis simultâneos: histórico (eventos reais acontecidos) e estrutural (o padrão que se repete com precisão).',
    related: [4, 13],
    refs: [
      'Midrash Rabbah, Bereshit Rabbah 84-93',
      'Talmude Babilônico, Sukah 52a (Mashiach ben Yosef)',
      'Kaiser, W.C. The Messiah in the Old Testament. Zondervan, 1995',
      'Fruchtenbaum, A.G. Messianic Christology. Ariel, 1998',
    ],
  },
  {
    id: 6, phase: 2, num: '06',
    title: 'A Topografia da Cruz',
    ref: 'Êxodo 25 · Números 1–2',
    category: 'Certeza Absoluta — Matemático · Proporcional',
    excerpt: 'Os números literais do censo de Números — 603.550 homens distribuídos em 12 grupos ao redor do Tabernáculo — formam, quando plotados em escala proporcional, uma cruz romana perfeita. O acampamento de Israel no deserto era a sombra geométrica de um instrumento de execução que Roma não inventaria por mais de mil anos.',
    fact: 'Números 1-2 registra o censo das 12 tribos e sua disposição em 4 grupos cardeais: <strong>Norte</strong> — Dã, Aser, Naftali: 157.600; <strong>Sul</strong> — Rúben, Simeão, Gade: 151.450; <strong>Oeste</strong> — Efraim, Manassés, Benjamim: 108.100; <strong>Leste</strong> — Judá, Issacar, Zebulom: 186.400. O Tabernáculo no centro.',
    context: 'A crucificação como método de execução foi provavelmente inventada pelos fenícios/cartagineses e adotada pelos persas antes de chegar aos romanos por volta do séc. III a.C. — mais de <strong>1.000 anos depois</strong> de Números ser escrito (séc. XIII a.C.). Israel não tinha como conhecer esse instrumento quando distribuía as tribos no deserto do Sinai. A distribuição tinha funções militares (defesa radial) e litúrgicas (tribos em relação ao Tabernáculo) — não simbólicas explícitas.',
    logic: 'Quando se plotam os números proporcionalmente: Norte (157.600) ≈ Sul (151.450) → dois braços horizontais quase idênticos e simétricos; Leste (186.400) → haste vertical longa; Oeste (108.100) → haste vertical curta acima do cruzamento. O resultado é uma cruz com braços horizontais simétricos e haste vertical mais longa abaixo do cruzamento — a proporção exata da cruz latina usada pelos romanos. O Tabernáculo fica no ponto de cruzamento. A dupla tipologia: (1) <strong>matemática</strong>, pela proporcionalidade dos números de censo; (2) <strong>teológica</strong>, porque o Tabernáculo — presença de Deus — fica no coração geométrico do instrumento de sacrifício. Que isso seja design intencional ou coincidência é a questão que cada leitor responde — mas os números são históricos, a proporção é exata, e o instrumento seria inventado mais de um milênio depois.',
    related: [7, 8],
    refs: [
      'Números 1-2 (censo do Israel no deserto)',
      'Josephus Flavius, Antiquities of the Jews, III.12.5',
      'Edersheim, A. The Life and Times of Jesus the Messiah. Longmans, 1883',
    ],
  },
  {
    id: 7, phase: 2, num: '07',
    title: 'A Cronometria das Festas de Primavera',
    ref: 'Levítico 23 · João 19:14 · Atos 2:1',
    category: 'Certeza Absoluta — Histórico / Astronômico',
    excerpt: 'Levítico 23 estabelece quatro festas de primavera como "mo\'ed" — termo hebraico para encontro marcado com hora certa. A vida, morte e ressurreição de Jesus não apenas cumpriram o significado simbólico: bateram com o relógio lunar hebraico na exata hora de cada uma das quatro festas. Quatro ensaios. Quatro cumprimentos. Precisão de calendário milenar.',
    fact: 'As quatro festas de primavera (Levítico 23): <strong>Pessach/Páscoa</strong> (14 Nisã, hora do abate do cordeiro); <strong>Chag HaMatzot/Pães Asmos</strong> (15-21 Nisã, corpo sem corrupção/fermento); <strong>Yom HaBikurim/Primícias</strong> (domingo após o Sábado de Pães Asmos, primeiros frutos da colheita); <strong>Shavuot/Pentecostes</strong> (50 dias após Primícias, entrega da Lei/Espírito). A palavra hebraica <em>mo\'ed</em> (מוֹעֵד) — usada em Levítico 23 para cada festa — significa literalmente "hora marcada / compromisso agendado".',
    context: 'A Mishná (Pessachim 5:1) registra que o abate dos cordeiros pascais começava às 14h30 e terminava às 15h do 14 de Nisã. João 19:14 registra a condenação de Jesus por volta da "sexta hora" (12h). Mateus 27:46-50 registra a morte na "nona hora" (~15h). A coincidência horária não é aproximada — é a janela exata descrita na Mishná para o abate do Cordeiro Pascal. A Mishná é literatura rabínica judaica, não cristã.',
    logic: 'O alinhamento é horário, não apenas temático: (1) Jesus morreu às ~15h do 14 de Nisã — exata hora do abate do Cordeiro Pascal segundo a Mishná; (2) Foi sepultado durante os Pães Asmos — a festa que proibia fermento (símbolo de corrupção), e Atos 2:31 cita o Salmo 16:10: o Messias não viu corrupção; (3) Ressuscitou no domingo das Primícias — Paulo em 1 Coríntios 15:20 usa o próprio termo: <em>"primícias dos que dormem"</em>; (4) O Espírito Santo desceu no dia exato de Pentecostes (Atos 2:1-2). Quatro festas, quatro cumprimentos, todos no dia e hora corretos do calendário lunar milenar. A probabilidade de quatro eventos históricos caírem simultaneamente nas datas exatas de quatro festas independentes é matematicamente negligenciável — além da correspondência temática perfeita entre o símbolo e o cumprimento.',
    related: [9, 21, 24],
    refs: [
      'Levítico 23; Números 28 (Torah)',
      'Edersheim, A. The Temple: Its Ministry and Services. Religious Tract Society, 1874',
      'Fruchtenbaum, A.G. The Feasts of Israel. Ariel Ministries, 1974',
      'Tomasino, A.J. Judaism Before Jesus. IVP, 2003',
    ],
  },
  {
    id: 8, phase: 2, num: '08',
    title: 'O Paradoxo da Novilha Vermelha',
    ref: 'Números 19 · Hebreus 13:12',
    category: 'Teológico — Engenharia Jurídica · Substituição Vicária',
    excerpt: 'O ritual mais paradoxal do Antigo Testamento: as cinzas de uma novilha vermelha imaculada purificam quem está impuro — mas tornam impuro o sacerdote puro que as aplica. Os rabinos chamavam isso de chok: lei sem lógica aparente. Dois mil anos depois, percebe-se que a lógica era perfeita — e que o Calvário era geograficamente exigido pela lei.',
    fact: 'Números 19: uma novilha vermelha sem defeito, que nunca carregou jugo, é sacrificada <strong>fora do acampamento</strong> (v.3). Suas cinzas são misturadas com água para purificar israelitas contaminados por cadáver (impureza máxima). O paradoxo explícito: a água purifica o impuro (v.17-19), mas torna impuro o sacerdote puro que a aplica (v.21). Quem toca o impuro puro, se torna impuro.',
    context: 'Os rabinos classificavam esse ritual como <em>chok</em> — uma lei cujo fundamento racional é escondido, que deve ser obedecida por fé. O Talmude (Yoma 14a) registra que nem o rei Salomão, com toda sua sabedoria, conseguiu explicar a lógica interna do ritual da novilha vermelha. A exigência geográfica é explícita no texto: "fora do acampamento" (Números 19:3) — idêntico à posição do Gólgota fora dos muros norte de Jerusalém, confirmado por todos os quatro evangelistas e pela arqueologia.',
    logic: 'O paradoxo é, na verdade, a lógica mais precisa do sacrifício substitutivo. A fórmula é: <em>puro absorve impureza → transfere pureza ao impuro → a impureza não permanece porque o sacrifício é consumado fora do espaço ritual</em>. Paulo a escreve em 2 Coríntios 5:21: <em>"Aquele que não conheceu pecado foi feito pecado por nós, para que nós nos tornássemos justiça de Deus nele."</em> A troca é exata: puro se torna impuro para que impuro se torne puro. A exigência geográfica de Números 19:3 ("fora do acampamento") é literalmente cumprida em Hebreus 13:11-12: <em>"Os corpos dos animais cujo sangue é trazido ao santuário pelo sumo sacerdote em expiação são queimados fora do acampamento. Por isso também Jesus padeceu fora da porta."</em> O Calvário não foi escolhido por acidente geográfico — a Lei de Moisés exigiu o endereço.',
    related: [4, 6, 23],
    refs: [
      'Números 19 (Torah — ritual da Novilha Vermelha)',
      'Mishná, Parah 3:5',
      'Edersheim, A. The Temple: Its Ministry and Services. Religious Tract Society, 1874',
    ],
  },
  {
    id: 9, phase: 2, num: '09',
    title: 'A Fita Carmesim e o Talmude',
    ref: 'Levítico 16 · Talmude Babilônico Yoma 39b',
    category: 'Certeza Absoluta — Registro Judaico Secular',
    excerpt: 'O Talmude Babilônico — a coletânea rabínica mais autoritativa do judaísmo — registra três anomalias rituais que começaram simultaneamente 40 anos antes da destruição do Templo em 70 d.C. Quarenta anos antes de 70 d.C. é 30 d.C. Sem qualquer agenda cristã, o Talmude documenta que o sistema sacrificial levítico cessou de funcionar no ano da crucificação.',
    fact: 'Talmude Babilônico, Yoma 39b: <em>"Nossos mestres ensinaram: durante os últimos quarenta anos antes da destruição do Templo, a sorte do sumo sacerdote para o Yom Kippur nunca saiu à mão direita; a fita de lã vermelha nunca ficou branca; e a luz ocidental do candelabro nunca ardeu"</em>. No ritual do Yom Kippur (Levítico 16), a fita vermelha amarrada ao bode expiatório ficava branca miraculosamente — sinal da aceitação divina, baseado em Isaías 1:18: <em>"Ainda que vossos pecados sejam como a escarlate, tornar-se-ão brancos como a neve."</em>',
    context: 'O Talmude foi compilado entre os séculos IV e VI d.C., mas preserva tradições orais dos Tannaim — mestres do período 70-200 d.C. que por sua vez citavam registros do Segundo Templo. Yoma 39b não tem qualquer relação com Jesus em seu contexto original — é simplesmente o registro de uma anomalia ritual inexplicável que os próprios rabinos documentaram sem conseguir explicar. A matemática é externa ao texto: Templo destruído em <strong>70 d.C.</strong> − 40 anos = <strong>30 d.C.</strong>',
    logic: 'Três anomalias simultâneas, documentadas por fonte judaica independente, começando no mesmo ano: (1) A sorte do Yom Kippur — que durante séculos sempre saiu à mão direita (sinal favorável) — parou de sair à direita; (2) A fita carmesim — que sempre ficava branca — parou de ficar branca; (3) A luz ocidental do candelabro — que nunca se apagava — parou de arder. O sistema sacrificial levítico sinalizou, através de seus próprios mecanismos rituais registrados em suas próprias fontes literárias, que algo havia mudado em 30 d.C. O argumento não depende de fonte cristã: <strong>o próprio Talmude judaico</strong> documenta que Deus cessou de aceitar o sistema sacrificial do Templo no ano historicamente correspondente à crucificação. A acusação de "inventado por cristãos" é impossível — a fonte é rabinica, a agenda é rabinica, e o resultado é constrangedor para a teologia rabinica tradicional.',
    related: [7, 14, 23],
    refs: [
      'Talmude Babilônico, Yoma 39b',
      'Josephus Flavius, Wars of the Jews, VI.5.3',
      'Roth, C. (ed.). Encyclopaedia Judaica. Keter, 1972, Vol. 16',
    ],
  },
  {
    id: 10, phase: 3, num: '10',
    title: 'O Verme Escarlate e a Crucificação',
    ref: 'Salmo 22 · Zacarias 12:10 · Qumran ~250 a.C.',
    category: 'Certeza Absoluta — Histórico / Filológico / Forense',
    excerpt: 'Davi, no séc. X a.C., descreve com precisão clínica os sintomas físicos de uma crucificação — método de execução que Roma não desenvolveria por mais de 700 anos. Cada detalhe é medicamente verificável. O texto foi encontrado em Qumran, datado de ~250 a.C., existindo séculos antes do Novo Testamento. Um laudo forense antecipado.',
    fact: 'Salmo 22 descreve, na ordem em que ocorrem durante uma crucificação: desconjuntamento de ossos (v.14); coração derretido como cera (v.14); sede extrema e língua seca (v.15); "traspassaram as minhas mãos e os meus pés" (v.16); contagem visível dos ossos (v.17); nenhum osso quebrado (implícito em v.17); partilha das vestes por sorteio (v.18). João 19:23-36 cita explicitamente vv.16 e 18.',
    context: 'A crucificação foi provavelmente inventada pelos fenícios/cartagineses e adotada pelos romanos por volta do séc. III a.C. — 700+ anos depois do Salmo 22. Os Manuscritos do Mar Morto encontrados em 1947 incluem o Salmo 22 (Rolo dos Salmos, 11QPsa), datado paleograficamente por especialistas como ~150-250 a.C. — mais de 200 anos antes de Jesus. Isso elimina a possibilidade de que o texto seja uma criação posterior ao evento. A palavra <em>tola\'at</em> (תּוֹלַעַת) no versículo 6 — "eu sou um verme, e não homem" — é o termo hebraico para o inseto <em>Coccus ilicis</em>, a cochonilha escarlate que se fixa num madeiro, morre nele, e ao morrer secreta tinta escarlate sobre seus ovos para dar vida à prole. <strong>Nota textual sobre o versículo 16:</strong> O Texto Massorético tradicional lê כָּאֲרִי (<em>ka\'ari</em> = "como um leão"), enquanto a Septuaginta (LXX) e os fragmentos de Qumran 5/6HevPs — manuscritos pré-cristãos datados do séc. I a.C. — leem כָּרוּ (<em>karu</em> = "cavaram/perfuraram"). A diferença de uma única letra (Yod×Vav) é o debate textual clássico; a evidência de Qumran apoia a leitura "perfuraram" como a mais antiga documentada.',
    logic: 'O Salmo 22 é o mais forense da Bíblia. Cada sintoma é medicamente verificável na crucificação romana: (1) <strong>Desconjuntamento de ossos</strong> (v.14) — o peso do corpo suspenso desloca ombros, cotovelos e joelhos; (2) <strong>Coração como cera</strong> (v.14) — hemopericárdio: sangue se acumula ao redor do coração por trauma torácico, com consistência e aspecto descrito como "cera" por patologistas forenses; (3) <strong>Sede extrema</strong> (v.15) — hematidrose + flagelação + exposição solar causam desidratação severa; (4) <strong>"Traspassaram mãos e pés"</strong> (v.16) — confirmado pela Septuaginta e pelos fragmentos de Qumran; (5) <strong>Ossos visíveis sem serem quebrados</strong> (v.17) — em crucificados, a distensão muscular tornava as costelas e vértebras visíveis sob a pele; (6) <strong>Sorteio das vestes</strong> (v.18) — João 19:23-24 descreve a cena e cita o Salmo explicitamente. A tipologia do <em>tola\'at</em> (v.6) adiciona uma camada bioquímica: o inseto que morre fixado num madeiro secretando sangue escarlate para dar vida — é a imagem mais precisa do Calvário que nenhum humano teria inventado mil anos antes.',
    related: [4, 19, 20],
    refs: [
      'Fragmento 4QPsb, Qumran (~250 a.C.)',
      'Edwards, W.D. et al. On the Physical Death of Jesus Christ. JAMA, vol. 255, n. 11, 1986',
      'Hengel, M. Crucifixion in the Ancient World. Fortress Press, 1977',
      'Dahood, M. Psalms I (Anchor Bible). Doubleday, 1966',
    ],
  },
  {
    id: 11, phase: 3, num: '11',
    title: 'A Etimologia da Pedra Angular',
    ref: 'Salmo 118:22 · Mateus 21:42',
    category: 'Teológico — Linguística Semítica · Morfologia Hebraica',
    excerpt: 'A palavra hebraica para "pedra" — אֶבֶן (Eben) — é morfologicamente composta por אָב (Av, Pai) e בֵּן (Ben, Filho). Quando Jesus cita o Salmo 118:22 e se identifica com a "pedra angular rejeitada", ele está apontando para um significado inscrito na própria estrutura ortográfica da língua hebraica que nenhuma tradução preserva.',
    fact: 'Salmo 118:22: <em>"A pedra que os edificadores rejeitaram tornou-se a pedra angular."</em> Jesus cita este versículo em Mateus 21:42 após a parábola dos lavradores maus e o aplica diretamente a si mesmo. A palavra hebraica para "pedra" é <strong>אֶבֶן (Eben)</strong> — composta pelas letras Alef (א), Bet (ב) e Nun (נ).',
    context: 'Na linguagem hebraica, muitas palavras podem ser decompostas em dois elementos morfológicos que preservam significado. Em אֶבֶן (Alef-Bet-Nun): as letras Alef-Bet formam <strong>אָב (Av = Pai)</strong>; as letras Bet-Nun formam <strong>בֵּן (Ben = Filho)</strong>. A letra Bet (ב) no meio pertence a ambos — é o elemento compartilhado que conecta Pai e Filho na mesma palavra. Esta decomposição não é especulação cabalística — é morfologia hebraica documentada usada por múltiplos comentaristas rabínicos ao longo dos séculos, incluindo Rashi no séc. XI d.C.',
    logic: 'O argumento opera em dois níveis. Primeiro, linguístico: אֶבֶן é a palavra usada não apenas no Salmo 118, mas na construção do Templo de Salomão (1 Reis 6), nas lápides das Tábuas da Lei, e na <em>Even HaShetiyah</em> — a Pedra do Fundamento sobre a qual repousa o Templo, que tradições judaicas identificam como o ponto de criação do mundo. A palavra central da teologia do Templo carrega, em sua ortografia, a relação Pai-Filho. Segundo, cristológico: quando Jesus se aplica o Salmo 118:22, e quando o Novo Testamento articula sua natureza como Filho eterno do Pai (João 1:1, Colossenses 1:15-17), há uma camada de significado inscrita no hebraico original que a tradução para qualquer idioma moderno destrói completamente. A "pedra angular" que a teologia cristã identifica com Cristo carrega, na própria estrutura de suas letras em hebraico, a natureza teológica que lhe é atribuída. Quem escreveu a língua hebraica com essa especificidade é a pergunta.',
    related: [1],
    refs: [
      'Brown, F.; Driver, S.R.; Briggs, C.A. A Hebrew and English Lexicon (BDB). Clarendon, 1906',
      'Rashi, Perush al ha-Torah, comentário a Gênesis (séc. XI)',
      'Gesenius, W. Hebrew and Chaldee Lexicon. Vogel, 1847',
    ],
  },
  {
    id: 12, phase: 3, num: '12',
    title: 'O Endereço e o Nascimento',
    ref: 'Miqueias 5:2 · Isaías 7:14 · Septuaginta ~250 a.C.',
    category: 'Certeza Absoluta — Arqueológico / Geográfico / Linguístico',
    excerpt: 'Dois textos proféticos, dois problemas aparentes, duas soluções arqueológicas. Miqueias crava o CEP com bairro incluído (Belém Efrata — não a outra Belém). Isaías usa uma palavra hebraica debatida — mas a Septuaginta, traduzida por 70 rabinos judeus 250 anos antes de Cristo, a resolve com o termo grego mais inequívoco para virgindade intacta.',
    fact: 'Miqueias 5:2: <em>"E tu, Belém Efrata, ainda que pequena entre os milhares de Judá, de ti me sairá aquele que há de ser Soberano em Israel; e suas saídas são desde os tempos antigos, desde os dias da eternidade."</em> Isaías 7:14: <em>"Portanto o próprio Senhor vos dará um sinal: Eis que a virgem conceberá, e dará à luz um filho, e chamará o seu nome Emanuel."</em> A palavra hebraica: <strong>עַלְמָה (almah)</strong>.',
    context: 'Existiam duas cidades chamadas Belém em Israel: Belém de Judá (chamada também Belém Efrata) e Belém de Zebulom, ao norte (Josué 19:15). Sem o qualificador "Efrata", a profecia seria geograficamente ambígua. Sobre Isaías 7:14: almah (עַלְמָה) pode significar "jovem mulher" em contextos gerais. O hebraico <em>bethulah</em> (בְּתוּלָה) é o termo mais tecnicamente específico para virgindade. O debate linguístico foi real — e a Septuaginta o resolve.',
    logic: 'O argumento decisivo é histórico e documental: a <strong>Septuaginta (LXX)</strong> foi a tradução do Antigo Testamento hebraico para o grego, produzida por 70 escribas judeus em Alexandria por volta de <strong>250 a.C.</strong>, a pedido do faraó Ptolomeu II Filadelfo — para a Biblioteca de Alexandria. Esses escribas judeus, sem qualquer contato com o Novo Testamento (que seria escrito 250+ anos depois), traduziram <em>almah</em> em Isaías 7:14 com o grego <strong>παρθένος (Parthenos)</strong> — o termo mais específico e sem ambiguidade para virgindade intacta em grego, correspondendo ao <em>bethulah</em> hebraico mais do que ao almah mais genérico. Isso prova três coisas: (1) A expectativa do nascimento virginal era <strong>judaica e pré-cristã</strong>, não uma invenção do Novo Testamento; (2) O debate sobre "almah = jovem mulher comum" é posterior à Septuaginta; (3) Os primeiros cristãos não inventaram a interpretação virginal — encontraram-na na tradução que os próprios judeus alexandrinos já usavam como Escritura. Miqueias deu o CEP; Isaías deu o mecanismo de nascimento; a Septuaginta confirmou o mecanismo 250 anos antes do evento.',
    related: [2, 14],
    refs: [
      'Septuaginta (LXX), Isaías 7:14, ~250 a.C.',
      'Motyer, J.A. The Prophecy of Isaiah. IVP, 1993',
      'Kaiser, W.C. The Messiah in the Old Testament. Zondervan, 1995',
      'Oswalt, J.N. The Book of Isaiah, Chapters 1-39 (NICOT). Eerdmans, 1986',
    ],
  },
  {
    id: 13, phase: 3, num: '13',
    title: 'A Sepultura Paradoxal',
    ref: 'Isaías 53:9 · Mateus 27:57-60',
    category: 'Certeza Absoluta — Histórico / Textual / Jurídico',
    excerpt: 'Isaías 53:9, escrito no séc. VIII a.C., cria uma condição juridicamente impossível: o Servo morreria com criminosos, mas sua sepultura seria com ricos. Na prática jurídica romana, esses dois destinos eram mutuamente exclusivos. Apenas uma intervenção de altíssima especificidade poderia resolver o paradoxo — e ela ocorreu exatamente como o texto exigia.',
    fact: 'Isaías 53:9: <em>"E se pôs a sua sepultura com os perversos, mas com o rico esteve na sua morte."</em> O hebraico usa o plural <em>reshaim</em> (perversos, criminosos) e o singular <em>ashir</em> (rico) — especificidade gramatical intencional. Mateus 27:57-60: <strong>José de Arimateia</strong>, descrito como "homem rico" e "discípulo de Jesus", pediu o corpo a Pilatos e o sepultou em seu próprio túmulo recém-esculpido na rocha.',
    context: 'A prática romana proibia sepultura privada para condenados à crucificação. O criminoso crucificado era normalmente deixado na cruz até apodrecer, ou descartado em valas comuns fora dos muros (a Geena). Sepultura privada era um privilégio negado por lei a condenados ao suplício — a execução incluía a desonra pós-mortem. Além disso, José de Arimateia era membro do Sinédrio — o mesmo tribunal que havia votado pela condenação de Jesus. Pedir o corpo ao governador romano era juridicamente incomum e politicamente arriscado.',
    logic: 'A impossibilidade jurídica é o argumento central. Isaías 53:9 combina dois destinos incompatíveis dentro do sistema legal romano: (1) morte com criminosos — crucificação romana para condenado messiânico em Jerusalém no séc. I; (2) sepultura com rico — privada, honrosa, em túmulo particular. Esses dois destinos eram <strong>mutuamente exclusivos</strong> pela lei romana. A única saída do paradoxo exige uma intervenção de alta especificidade: alguém com recursos para ter túmulo próprio recém-esculpido + autoridade suficiente para pedir o corpo ao governador romano + motivação suficiente para se expor politicamente — mesmo sendo membro do tribunal que condenou Jesus. José de Arimateia satisfaz os três critérios simultaneamente. Isaías escreveu o paradoxo juridicamente impossível no séc. VIII a.C. A solução específica ocorreu 700 anos depois, exatamente como o texto exigia, resolvendo uma impossibilidade que nenhum planejador humano poderia ter fabricado.',
    related: [5, 14],
    refs: [
      'Josephus Flavius, Wars of the Jews, IV.5.2',
      'Hengel, M. Crucifixion in the Ancient World. Fortress Press, 1977',
      'Young, E.J. The Book of Isaiah, Vol. 3. Eerdmans, 1972',
      'North, C.R. The Suffering Servant in Deutero-Isaiah. OUP, 1948',
    ],
  },
  {
    id: 14, phase: 3, num: '14',
    title: 'O Cronômetro das 70 Semanas',
    ref: 'Daniel 9:24-27 · Neemias 2:1-8',
    category: 'Certeza Absoluta — Matemático / Histórico',
    excerpt: 'Daniel recebe uma profecia matemática: 69 semanas de anos (483 anos × 360 dias) a partir do decreto para reconstruir Jerusalém. Usando o decreto histórico de Artaxerxes em 445 a.C. e o calendário profético hebraico, a matemática aponta para a faixa de 32–33 d.C. O Talmude proibiu calcular essa profecia. O motivo é óbvio.',
    fact: 'Daniel 9:25: <em>"Sabe, pois, e entende: desde a saída da ordem para restaurar e para edificar Jerusalém até ao Messias Príncipe, haverá sete semanas e sessenta e duas semanas."</em> 7 + 62 = <strong>69 semanas</strong>. O decreto de referência: Neemias 2:1-8 — Artaxerxes emite a ordem no "mês de Nisã, no ano vigésimo de Artaxerxes" = <strong>445 a.C.</strong> O versículo 26 acrescenta: o Messias "será morto e não por si mesmo" — e depois "a cidade e o santuário serão destruídos".',
    context: 'O calendário profético hebraico usava um ano de <strong>360 dias</strong> (12 meses de 30 dias) — o mesmo padrão de Gênesis 7:11/8:4 ("150 dias" = "5 meses" = 30 dias por mês), de Daniel, e de Apocalipse. É diferente do calendário civil judaico (354 dias) e do gregoriano (365,25 dias). O Talmude (Sanhedrin 97b) registra: <em>"Que estejam malditos os que calculam os fins dos tempos."</em> A proibição rabínica de calcular especificamente os fins escatológicos — sem precedente para outras profecias de Daniel — sugere que os rabinos sabiam aonde os cálculos levavam e não queriam que chegassem lá.',
    logic: 'A matemática: 69 semanas × 7 anos = <strong>483 anos proféticos</strong>. Em dias: 483 × 360 = <strong>173.880 dias</strong>. Ponto de partida: decreto de Artaxerxes, Nisã 445 a.C. (confirmado pelos Papiros de Elefantina e pela cronologia persa). Adicionando 173.880 dias ao calendário juliano: Sir Robert Anderson (<em>The Coming Prince</em>, 1894) chegou a <strong>6 de abril de 32 d.C.</strong>; Harold Hoehner (<em>Chronological Aspects of the Life of Christ</em>, 1977), usando metodologia independente, chegou a <strong>6 de abril de 33 d.C.</strong> A diferença de um ano resulta de ajustes técnicos no ponto de partida do decreto de Artaxerxes e no tratamento do ano de acesso persa. Ambos apontam para a entrada triunfal em Jerusalém, onde Jesus declarou publicamente ser o Messias (Lucas 19:37-44). O versículo seguinte (v.26) exige que a morte messiânica e a destruição do Templo ocorram na sequência — o Templo foi destruído em <strong>70 d.C.</strong> Qualquer candidato messiânico após essa data viola matematicamente o próprio texto: Daniel exige que o Messias venha e morra antes de 70 d.C. Daniel foi escrito no séc. VI a.C.; os fragmentos de Qumran datam de ~125 a.C. — mais de 150 anos antes do cumprimento.',
    related: [7, 9, 12],
    refs: [
      'Anderson, R. The Coming Prince. Hodder & Stoughton, 1894',
      'Hoehner, H.W. Chronological Aspects of the Life of Christ. Zondervan, 1977',
      'Talmude Babilônico, Sanhedrin 97b',
      'Archer, G.L. Encyclopedia of Bible Difficulties. Zondervan, 1982',
    ],
  },
  {
    id: 15, phase: 4, num: '15',
    title: 'A Categoria Hipocrática da Febre',
    ref: 'Lucas 4:38 · Corpus Hippocraticum',
    category: 'Certeza Absoluta — Filológico / Medicina Antiga',
    excerpt: 'Mateus diz "febre". Lucas diz "grande febre" — pyretō megalō — a classificação exata do Corpus Hippocraticum para infecção sistêmica letal. A diferença de duas palavras é a diferença entre um relato leigo e um diagnóstico médico. E o milagre biológico vai além da cura: é a ausência total de convalescença que nenhuma fisiologia moderna consegue replicar.',
    fact: 'Lucas 4:38: a sogra de Simão Pedro "estava acometida de grande febre" — <strong>πυρετῷ μεγάλῳ (pyretō megalō)</strong>. Mateus 8:14 simplesmente descreve que ela "estava de cama com febre" — <em>pyressousan</em>, termo genérico. Jesus a cura; ela "imediatamente se levantou e os serviu".',
    context: 'Hipócrates (~460-370 a.C.) classificou as febres em dois tipos: <em>pyretoi mikroi</em> (febres pequenas, autolimitadas, passageiras) e <em>pyretoi megaloi</em> (grandes febres, sistêmicas, frequentemente fatais). Essa taxonomia era o sistema clínico vigente em toda a medicina greco-romana do séc. I d.C. Lucas estudou medicina no mundo helenístico — sua precisão vocabular é consistente com o Corpus Hippocraticum em múltiplos episódios, não apenas aqui. O vocabulário médico de Lucas foi identificado e catalogado pelo especialista William Hobart no séc. XIX em sua obra <em>The Medical Language of St. Luke</em> (1882).',
    logic: 'A distinção técnica que Lucas faz tem duas implicações: (1) <strong>Diagnóstica</strong>: <em>pyretō megalō</em> indica infecção sistêmica severa — não uma gripe passageira, mas condição com febre alta, prostração total e risco de morte. A mulher estava acamada, não simplesmente indisposta. (2) <strong>Fisiológica do milagre</strong>: após infecção sistêmica severa com febre alta, o corpo humano leva dias para: normalizar temperatura, restaurar eletrólitos perdidos pelo suor, reparar dano tecidual por hipertermia, e recompor estoques de ATP celular para atividade muscular. <em>"Ela se levantou e os serviu"</em> imediatamente implica normalização instantânea de todos esses processos em paralelo. Nenhum antibiótico elimina a convalescença — ele apenas elimina o agente infeccioso; o corpo ainda precisa se recuperar. A cura documentada por Lucas é dupla: eliminação da infecção + ausência total de recuperação biológica. E somente Lucas documenta a gravidade — porque só Lucas sabia nomear clinicamente o que via.',
    related: [16, 17, 18],
    refs: [
      'Hobart, W.K. The Medical Language of St. Luke. Hodges & Figgis, 1882',
      'Hippocrates, Epidemics I & III (Corpus Hippocraticum), séc. V a.C.',
      'Harnack, A. Luke the Physician. Williams & Norgate, 1907',
    ],
  },
  {
    id: 16, phase: 4, num: '16',
    title: 'A "Catarse" Celular do Leproso',
    ref: 'Lucas 5:12-13',
    category: 'Certeza Absoluta — Filológico / Clínico',
    excerpt: 'Lucas descreve "um homem cheio de lepra" — estágio avançado — e usa o verbo katharizo, não therapeuo (tratar). Katharizo implica erradicação total do agente patológico e restauração ao estado anterior à doença. No estágio avançado da hanseníase, isso significa regeneração de tecido nervoso destruído, reconstituição de cartilagem necrosada e reversão de reabsorção óssea. Nenhuma medicina faz isso.',
    fact: 'Lucas 5:12: "um homem <strong>cheio de lepra</strong>" (<em>pleres lepras</em> — estágio avançado cobrindo todo o corpo). Jesus o toca — gesto que tornava o tocante cerimonialmente impuro segundo a Lei. Lucas 5:13: "logo a lepra se afastou dele." O verbo: <strong>καθαρίζω (katharizo)</strong> — purificar completamente, erradicar ao nível da origem.',
    context: 'A hanseníase (<em>Mycobacterium leprae</em>) ataca primariamente nervos periféricos — causando perda de sensação tátil, incapacidade motora progressiva, mutilação de dedos, e necrose de cartilagem (nariz, orelhas). Reabsorção óssea é estágio avançado. "Cheio de lepra" implica todos esses estágios. Contraste vocabular crucial: <em>therapeuo</em> (θεραπεύω) = tratar, ministrar terapia, cuidar — a palavra padrão para curas no NT; <em>katharizo</em> (καθαρίζω) = purificar completamente, erradicar, restaurar ao estado pré-contaminado — a palavra usada na purificação ritual do Levítico 13-14. Raiz de "catarse" — não a emocional de Aristóteles, mas a química: remoção total de impureza.',
    logic: 'A escolha de Lucas entre katharizo e therapeuo é cirurgicamente precisa. Therapeuo seria adequado se Jesus houvesse eliminado o agente patológico — como um antibiótico moderno. Katharizo implica restauração ao <em>estado anterior à doença</em>. Para "um homem cheio de lepra", isso inclui: (1) eliminação da <em>Mycobacterium leprae</em>; (2) regeneração de nervos periféricos desmielinizados — neurologicamente impossível em adultos com técnica médica atual; (3) reconstituição de cartilagem necrosada — tecido avascular que não se auto-repara; (4) reversão de reabsorção óssea; (5) restauração de sensação tátil onde foi permanentemente destruída. A medicina moderna com poliquimioterapia (rifampicina + dapsona + clofazimina) pode curar a infecção bacteriana, mas não regenera tecido nervoso nem cartilagem já destruídos. O que Lucas registra excede em ordem de magnitude tudo que a farmacologia moderna pode oferecer — e ele usou o único verbo que descreve exatamente isso.',
    related: [15, 17, 18],
    refs: [
      'Hobart, W.K. The Medical Language of St. Luke. Hodges & Figgis, 1882',
      'Wilkinson, J. The Bible and Healing. Handsel Press, 1998',
      'Hippocrates, On the Sacred Disease (Corpus Hippocraticum), séc. V a.C.',
    ],
  },
  {
    id: 17, phase: 4, num: '17',
    title: 'A Termodinâmica da Hemorragia',
    ref: 'Lucas 8:43-46',
    category: 'Certeza Absoluta — Filológico / Físico',
    excerpt: 'Lucas documenta uma hemorragia arterial crônica de 12 anos com diagnóstico preciso (rhysei haimatos). Mas o detalhe mais surpreendente vem do próprio Jesus, que afirma que "dynamis" saiu de si. Dynamis não é palavra espiritual vaga — é o termo grego para força física mensurável, raiz de "dinamite" e "dínamo". Uma transferência de energia física documentada no séc. I.',
    fact: 'Lucas 8:43: a mulher sofria de <strong>"fluxo de sangue" (ῥύσει αἵματος, rhysei haimatos)</strong> há 12 anos e havia gasto todos os recursos em médicos sem resultado. Versículo 44: tocou a borda do manto de Jesus e "imediatamente o fluxo de sangue se estancou." Versículo 46: Jesus declara: <em>"alguém me tocou; porque eu conheci que <strong>virtude</strong> (δύναμις, dynamis) saiu de mim."</em>',
    context: '<em>Rhysei haimatos</em> é diagnóstico médico preciso: fluxo/derrame contínuo de sangue de origem vascular — não sangramento periódico normal, mas hemorragia crônica contínua. Doze anos de hemorragia crônica sem remissão indica condição vascular grave (fibroma uterino, malformação arteriovenosa, coagulopatia). <em>Dynamis</em> (δύναμις) aparece 120 vezes no Novo Testamento. Em Aristóteles: força, potência, capacidade de realizar trabalho físico. Na física moderna: energia cinética, capacidade de causar deslocamento ou mudança. Raiz de: dinâmica, dinamite, dínamo — todas palavras sobre energia física mensurável.',
    logic: 'Jesus não descreve uma percepção subjetiva — descreve um <strong>evento físico com direção e quantidade</strong>. O verbo <em>exelthein</em> (saiu) implica movimento direcional: dynamis saiu de dentro de Jesus em direção à mulher. Na física, energia é transferida quando um sistema mais energético interage com um sistema menos energético — a energia flui em direção definida. Jesus descreve isso com precisão: não "fiz algo", não "senti algo" — "energia <em>saiu</em> de mim." A estancagem vascular imediata implica vasoconstricção instantânea, coagulação acelerada ou fechamento anatômico de ruptura que perdurava há 12 anos. Nenhum mecanismo fisiológico convencional produz vasoconstricção seletiva instantânea por toque externo em estrutura vascular interna. Lucas documenta o que um médico documentaria: diagnóstico exato, cronicidade, inefetividade do tratamento convencional, resultado imediato. E registra a autodescripção de Jesus — dynamis — a palavra que um engenheiro escolheria.',
    related: [15, 16, 18],
    refs: [
      'Hobart, W.K. The Medical Language of St. Luke. Hodges & Figgis, 1882',
      'Liddell, H.G.; Scott, R. A Greek-English Lexicon (LSJ). Clarendon, 1940',
      'Cadbury, H.J. The Style and Literary Method of Luke. Harvard, 1920',
    ],
  },
  {
    id: 18, phase: 4, num: '18',
    title: 'O Diagnóstico da Falência Múltipla',
    ref: 'Lucas 14:2',
    category: 'Certeza Absoluta — Diagnóstico Clínico',
    excerpt: 'Apenas Lucas menciona este episódio — e apenas Lucas usa o termo clínico correto: hydropikos, hidropisia. Onde um leigo escreveria "homem muito inchado", o médico escreve o diagnóstico diferencial que implica insuficiência cardíaca, cirrose hepática ou falência renal. Todos estágio terminal. A cura implica reestruturação anatômica simultânea de múltiplos órgãos.',
    fact: 'Lucas 14:2: "E eis que estava diante dele um homem <strong>hidrópico</strong> (ὑδρωπικός, hydropikos)." Jesus o cura no sábado, gerando tensão com os fariseus. Mateus e Marcos não registram este episódio. Apenas o médico Lucas o inclui — e apenas Lucas usa o diagnóstico diferencial preciso.',
    context: 'Hidropisia (<em>hydrops</em> do grego <em>hydor</em> = água) é o acúmulo patológico de fluido em cavidades corporais e tecidos. Causas principais: (1) Insuficiência cardíaca congestiva — coração incapaz de bombear eficientemente, fluido se acumula em pulmões e extremidades; (2) Cirrose hepática avançada — fígado sem capacidade de sintetizar proteínas séricas, pressão osmótica cai, fluido vaza para o abdômen (ascite); (3) Síndrome nefrótica grave — rins incapazes de reter proteínas. Em 30 d.C., sem diuréticos, transplante de órgão ou diálise, <em>hydropikos</em> = prognóstico de semanas a meses. É sentença de morte com diagnóstico preciso.',
    logic: 'A precisão diagnóstica de Lucas serve a dois argumentos paralelos: (1) <strong>Credibilidade do autor</strong>: um leigo descreveria o homem como "muito inchado" ou "com barriga grande". Um médico treinado no modelo hipocrático identifica hydropikos — diagnóstico diferencial que implica automaticamente a falência do órgão subjacente e o prognóstico terminal. Lucas escreve como quem foi treinado para observar e classificar doenças. (2) <strong>Magnitude do milagre</strong>: curar a hidropisia não é simplesmente drenar o fluido acumulado — é restaurar funcionalmente o órgão que causou o acúmulo. Se cardíaca: reparar o músculo cardíaco falido. Se hepática: restaurar a síntese proteica hepática. Se renal: normalizar a filtração glomerular. Em qualquer caso: reestruturação anatômica e funcional de múltiplos sistemas orgânicos em estágio terminal, instantaneamente. A medicina moderna com UTI de última geração, diálise e transplante leva semanas a meses para resultados parciais em casos individuais — e os casos múltiplos combinados requerem anos de espera por órgãos compatíveis. O que Lucas documenta em uma frase levaria anos e múltiplas equipes médicas na medicina do séc. XXI.',
    related: [15, 16, 17],
    refs: [
      'Hobart, W.K. The Medical Language of St. Luke. Hodges & Figgis, 1882',
      'Hippocrates, Prognosis (Corpus Hippocraticum), séc. V a.C.',
      'Cadbury, H.J. The Style and Literary Method of Luke. Harvard, 1920',
    ],
  },
  {
    id: 19, phase: 5, num: '19',
    title: 'A Fisiologia do Estresse Absoluto',
    ref: 'Lucas 22:44',
    category: 'Certeza Absoluta — Diagnóstico Clínico',
    excerpt: '"Seu suor tornou-se como grandes gotas de sangue." Lucas não usa metáfora — usa laudo médico: thromboi haimatos, coágulos de sangue. A medicina moderna confirma a condição como hematidrose, documentada em ~150 casos clínicos. E as consequências físicas em cadeia explicam por que Jesus morreu em 6 horas na cruz — quando a crucificação normalmente durava 2 a 3 dias.',
    fact: 'Lucas 22:44: <em>"E, posto em agonia, orava mais intensamente; e o seu suor tornou-se como grandes gotas de sangue, caindo em terra."</em> O grego: <strong>ὡσεὶ θρόμβοι αἵματος (hōsei thromboi haimatos)</strong> — literalmente "como coágulos/trombos de sangue". Thromboi é cognato de trombose. Lucas não diz "suor parecido com sangue em cor" — diz coágulos de sangue emergindo pela pele junto ao suor.',
    context: 'Hematidrose é condição médica documentada: estresse emocional ou físico extremo provoca ruptura dos capilares que circundam as glândulas sudoríparas. Sangue se mistura com o suor e emerge pela pele. Aristóteles e Teofrasto (séc. IV a.C.) já a descreveram. Casos modernos documentados: guerreiros antes de batalha, prisioneiros antes de execução, cirurgiões em operações de alta pressão. Dr. Frederick Zugibe (legista forense do Condado de Rockland, NY) documentou casos em pacientes com distúrbios de pânico severos. A literatura médica contém ~150 casos verificados. Lucas usa o vocabulário correto para a condição — não a metáfora de um poeta.',
    logic: 'O detalhe médico tem implicações físicas em cadeia para tudo que veio depois: (1) <strong>Hipersensibilidade cutânea</strong> — a pele com capilares rompidos fica extremamente sensível ao toque, tornando a flagelação subsequente ainda mais traumática do que seria normalmente; (2) <strong>Desidratação adicional</strong> — perda de fluido pela hematidrose somada ao estresse metabólico e à ausência de ingestão de água; (3) <strong>Fragilidade vascular aumentada</strong> — capilares já rompidos ficam mais suscetíveis a trauma mecânico. Jesus chegou à crucificação fisiologicamente comprometido em múltiplos sistemas antes de qualquer flagelação. A crucificação romana normalmente durava <strong>2-3 dias</strong> porque o mecanismo de morte é asfixia lenta — a vítima oscilava entre posições para respirar, podendo manter isso por dias. Que Jesus tenha morrido em aproximadamente 6 horas é clinicamente coerente com o estado pré-crucificação acumulado: hematidrose + flagelação romana com o flagrum (correia com ossos e metal que expunha músculo) + desidratação + hemopericárdio (João 19:34 registra saída de sangue e água — característica de derrame pericárdico traumático). Lucas é o único evangelista que menciona a hematidrose. Porque só Lucas sabia o nome do que via.',
    related: [4, 10, 20],
    refs: [
      'Edwards, W.D. et al. On the Physical Death of Jesus Christ. JAMA, vol. 255, n. 11, 1986',
      'Hobart, W.K. The Medical Language of St. Luke. Hodges & Figgis, 1882',
      'Liddell, H.G.; Scott, R. A Greek-English Lexicon (LSJ). Clarendon, 1940',
    ],
  },
  {
    id: 20, phase: 5, num: '20',
    title: 'A Reversão Anatômica de Malco',
    ref: 'Lucas 22:50-51 · João 18:10',
    category: 'Certeza Absoluta — Cirúrgico / Filológico',
    excerpt: 'Pedro cortou a orelha de Malco. Jesus a restaurou — no meio da cena do arresto, com multidão ao redor. Lucas usa dois termos técnicos que os outros evangelistas não possuem: otion (o pavilhão auricular específico) e iaomai (regeneração imediata de tecido). Isso não é "curar um corte" — é reconstituição instantânea de cartilagem avascular e reinervação de tecido nervoso seccionado.',
    fact: 'João 18:10: Pedro "cortou a orelha direita" de Malco, servo do sumo sacerdote. Mateus, Marcos e João usam vocabulário genérico. Lucas 22:51 usa: (1) <strong>τὸ ὠτίον (to otion)</strong> — o pavilhão auricular externo específico, não o canal auditivo interno; (2) <strong>ἰάομαι (iaomai)</strong> — na medicina grega: regeneração imediata de tecido ao estado anterior, não apenas alívio de sintoma.',
    context: 'O pavilhão auricular é composto de cartilagem elástica coberta por pele fina, irrigada por vascularização superficial. A cartilagem é <strong>tecido avascular</strong> — sem vasos sanguíneos diretos, recebe nutrição por difusão do pericôndrio. Isso a torna praticamente incapaz de auto-regeneração em adultos após trauma severo ou amputação. A inervação do pavilhão inclui múltiplos nervos: auriculotemporal (ramo do trigêmeo), auricular magno, e ramos do occipital menor. Cirurgia de reimplante de pavilhão auricular moderna (microcirurgia) leva 4-8 horas com equipe especializada e anestesia geral — e os resultados dependem do tempo de isquemia (quanto tempo o tecido ficou sem circulação).',
    logic: 'O que <em>iaomai</em> implica neste contexto não é analgesia nem curativo — é reconstrução anatômica completa. O pavilhão de Malco estava amputado: separado do crânio, sem suprimento sanguíneo, sem inervação, em queda para o chão (João 18:10 implica corte limpo com espada). A regeneração instantânea implica simultaneamente: (1) reintegração anatômica da cartilagem elástica seccionada — tecido que não se auto-repara em adultos; (2) restabelecimento da vascularização superficial — capilares que foram cortados com o tecido; (3) reinervação dos ramos auriculotemporais e auricular magno seccionados — nervos que normalmente regeneram a ~1 mm por dia, levando meses; (4) recuperação sensorial completa. Lucas documenta isso com o vocabulário médico que os outros evangelistas não possuíam — <em>iaomai</em> em vez do genérico <em>therapeuo</em>, e <em>to otion</em> em vez de simplesmente "a orelha". Um leigo que testemunhou escreveria "Jesus colou a orelha de volta." Um médico escreve <em>iaomai</em> — e quem entende o que a palavra implica biologicamente fica em silêncio.',
    related: [15, 16, 19],
    refs: [
      'Hobart, W.K. The Medical Language of St. Luke. Hodges & Figgis, 1882',
      'Hippocrates, On Wounds in the Head (Corpus Hippocraticum), séc. V a.C.',
      'Liddell, H.G.; Scott, R. A Greek-English Lexicon (LSJ). Clarendon, 1940',
    ],
  },
  {
    id: 21, phase: 5, num: '21',
    title: 'A Solução do Calendário Duplo',
    ref: 'Manuscritos do Mar Morto · João 13:1 · Marcos 14:12',
    category: 'Certeza Absoluta — Arqueologia de Qumran',
    excerpt: 'Por quase 1.900 anos, críticos apontaram "contradição irreconciliável" nos Evangelhos: João diz que Jesus morreu antes da Páscoa; Marcos diz que a Ceia foi a refeição pascal. A descoberta dos Manuscritos do Mar Morto em 1947 revelou que dois calendários coexistiam em Israel — e que ambos os relatos estão corretos simultaneamente.',
    fact: 'O aparente conflito: Marcos 14:12 registra que a Última Ceia foi preparada "no primeiro dia dos pães asmos, quando sacrificavam o cordeiro da páscoa" — indicando que foi a refeição pascal. João 13:1 e 19:14 descrevem a crucificação como ocorrendo antes da festa de Pessach, com Jesus sendo o próprio Cordeiro Pascal. Os dois não podem ser verdadeiros com um único calendário — a Páscoa ou já havia ocorrido ou ainda estava por ocorrer.',
    context: 'Os Manuscritos do Mar Morto — 972 documentos descobertos em 1947 nas cavernas de Qumran — revelaram que a comunidade essênia (e provavelmente galileus em geral) usava um <strong>calendário solar de 364 dias</strong>, derivado do Livro dos Jubileus e do Livro de Enoque. Este calendário colocava a Páscoa sempre em terça ou quarta-feira. O calendário lunar farisaico/do Templo — o calendário oficial de Jerusalém — colocava a Páscoa no 14 de Nisã lunar, que nos anos de 30-33 d.C. caiu em sexta-feira.',
    logic: 'A solução proposta pelo astrônomo e biblista francesa Annie Jaubert em 1957, com base nos manuscritos de Qumran: Jesus celebrou a Última Ceia na terça-feira (ou quarta) do <strong>calendário solar galileu/essênio</strong> — data legítima de Pessach para galileus que seguiam esse sistema. Foi preso na madrugada. Interrogado ao longo da noite e dia seguinte. Crucificado na sexta-feira — data da Páscoa do <strong>calendário lunar do Templo</strong>, exatamente na hora do abate dos cordeiros pascais segundo a Mishná. Resultado: Jesus foi o Cordeiro Pascal em <strong>ambos os calendários simultaneamente</strong>. Marcos relata pelo calendário solar galileu (a Ceia era Páscoa); João relata pelo calendário lunar do Templo (Jesus morre como Cordeiro antes da festa oficial). Nenhum dos dois está errado — estão descrevendo o mesmo evento por dois sistemas calendáricos coexistentes que a arqueologia de Qumran confirmou. A "contradição irreconciliável" era irreconciliável apenas para quem desconhecia a existência do calendário duplo.',
    related: [7, 22],
    refs: [
      'Jaubert, A. The Date of the Last Supper. Alba House, 1965',
      'VanderKam, J.C. Calendars in the Dead Sea Scrolls. Routledge, 1998',
      'Charlesworth, J.H. (ed.). Jesus and the Dead Sea Scrolls. Doubleday, 1992',
    ],
  },
  {
    id: 22, phase: 5, num: '22',
    title: 'O "Blackout" Astronômico',
    ref: 'Mateus 27:45 · Talo (52 d.C.) · Flegão de Trale',
    category: 'Certeza Absoluta — Astronômico / Registro Secular',
    excerpt: 'Mateus registra 3 horas de escuridão durante a crucificação. O problema astronômico: a Páscoa é sempre na Lua Cheia — e eclipse solar é fisicamente impossível na Lua Cheia. O que tornaria o relato descartável como mito se torna sua maior credencial: dois historiadores pagãos independentes, sem agenda cristã, documentaram e tentaram explicar o mesmo fenômeno.',
    fact: 'Mateus 27:45: <em>"Desde a hora sexta (12h) até a hora nona (15h) houve trevas em toda a terra."</em> A Páscoa judaica ocorre sempre no 14 de Nisã — que é invariavelmente <strong>Lua Cheia</strong> (o calendário hebraico é lunar: Nisã começa na Lua Nova, então 14 dias depois é Lua Cheia completa). Eclipse solar exige alinhamento Sol-Lua-Terra com a Lua na posição de Lua Nova — <strong>astronomicamente impossível durante a Lua Cheia</strong>.',
    context: '<strong>Talo</strong>: historiador samaritano que escreveu uma história do Mediterrâneo por volta de 52 d.C. Sua obra original foi perdida, mas é citada por Júlio Africano (~221 d.C.): <em>"Talo, em seu terceiro livro de histórias, chama esta escuridão de eclipse solar — parece-me sem razão."</em> Africano então explica por que não pode ser eclipse: é Lua Cheia durante a Páscoa. <strong>Flegão de Trale</strong>: liberto do imperador Adriano, autor de <em>Olympiades</em> (~137 d.C.): <em>"No quarto ano da 202ª Olimpíada [32-33 d.C.], uma grande escuridão ocorreu acima de todo o mundo, e as estrelas apareceram durante o dia... e houve um grande terremoto na Bitínia."</em> Citado por Orígenes (<em>Contra Celso</em> 2.33) e Eusébio de Cesareia.',
    logic: 'O argumento opera em dois níveis: (1) <strong>Físico</strong>: se Talo tentou explicar o fenômeno como eclipse solar, ele confirma que o evento foi real o suficiente para exigir explicação naturalista pagã. Um evento imaginado não precisa de explicação pagã. A tentativa de racionalizar — por alguém sem agenda cristã, escrevendo 20 anos após a crucificação — é a prova involuntária de que algo realmente ocorreu. (2) <strong>Testemunhal independente</strong>: Talo (c. 52 d.C.) e Flegão (c. 137 d.C.) são dois pagãos, sem vínculo com o movimento cristão primitivo, que registraram escuridão anômala de horas no mesmo período histórico, com Flegão adicionando o terremoto — que Mateus 27:51 também menciona. Um fenômeno confirmado por fontes que não tinham razão teológica para confirmá-lo e razão racional para negá-lo tem força probatória superior a qualquer testemunho ideologicamente motivado. O Evangelho é corroborado por quem mais quereria refutá-lo.',
    related: [21, 23, 30],
    refs: [
      'Thallus (fragmento em Júlio Africano, Chronographia, séc. III d.C.)',
      'Phlegon of Tralles, Olympiades (fragmento em Eusébio de Cesareia, Chronicles)',
      'Habermas, G.R. The Historical Jesus: Ancient Evidence. College Press, 1996',
      'McDowell, J. Evidence That Demands a Verdict. Thomas Nelson, 1999',
    ],
  },
  {
    id: 23, phase: 5, num: '23',
    title: 'O Véu e a Engenharia Física',
    ref: 'Mateus 27:51 · Mishná Shekalim 8:5 · Josefo',
    category: 'Certeza Absoluta — Registro Histórico Material',
    excerpt: 'O Parokhet — véu do Santo dos Santos — rasgou de alto a baixo na hora da morte de Jesus. A Mishná e Josefo documentam suas dimensões: 18 metros de altura, 10 cm de espessura, tecido quadruplicado que precisava de 300 sacerdotes para mover. Um rasgo humano começa embaixo. Este começou em cima. A física elimina qualquer explicação convencional.',
    fact: 'Mateus 27:51: <em>"E eis que o véu do templo se rasgou em dois, <strong>de alto a baixo</strong>."</em> A direção é especificada. A Mishná Shekalim 8:5: <em>"Era a espessura de um palmo [~10 cm] e tecido em 72 fios, cada fio composto de 24 fios. Seu comprimento era de 40 côvados [~18 metros] e sua largura de 20 côvados [~9 metros]."</em>',
    context: 'Josefo (<em>Guerra dos Judeus</em> 5.5.4) corrobora a Mishná: <em>"O véu era babilônico, bordado com escarlate, linho, azul e púrpura. Era obra extraordinária de grande espessura."</em> Em outro trecho, Josefo registra que 300 sacerdotes eram necessários para imergir e lavar o Parokhet durante as purificações rituais — confirmando que seu peso e espessura tornavam qualquer manipulação uma tarefa coletiva monumental. O Santo dos Santos ficava na seção interna do Templo, inacessível a qualquer pessoa exceto ao sumo sacerdote, uma única vez por ano, no Yom Kippur.',
    logic: 'O problema físico é de localização da força inicial: para rasgar um véu de baixo para cima — de qualquer tamanho — uma pessoa com faca ou instrumento alcança a base. Para rasgar <em>de cima para baixo</em> implica que a força começou a <strong>18 metros de altura</strong> — inacessível a qualquer ser humano a pé, e impossível alcançar sem equipamento especializado em espaço restrito. Quanto à hipótese de terremoto (Mateus 27:51 também menciona terremoto): materiais têxteis densos e quadruplicados de alta resistência (10 cm de espessura) absorvem e distribuem vibração — um terremoto pode deslocar estruturas rígidas, mas não rasga tecido têxtil denso em linha reta de cima a baixo. Hebreus 10:19-20 fornece a interpretação: <em>"temos, pois, irmãos, ousadia para entrar no lugar santíssimo pelo sangue de Jesus, pelo caminho novo e vivo que ele nos consagrou pelo véu, isto é, a sua carne."</em> O rasgo do véu não é um evento simbólico conveniente — é um evento com parâmetros físicos documentados que tornam a explicação convencional materialmente inadequada, e com interpretação teológica que o autor de Hebreus considerou central à compreensão da morte de Jesus.',
    related: [8, 9, 22],
    refs: [
      'Mishná, Shekalim 8:5',
      'Josephus Flavius, Wars of the Jews, V.5.4',
      'Edersheim, A. The Temple: Its Ministry and Services. Religious Tract Society, 1874',
    ],
  },
  {
    id: 24, phase: 6, num: '24',
    title: 'As Festas de Outono',
    ref: 'Levítico 23 · 1 Tessalonicenses 4:16 · Apocalipse 20 · Zacarias 14:16',
    category: 'Teológico — Matemático e Escatológico',
    excerpt: 'As 4 festas de primavera foram cumpridas com precisão de relógio lunar — no dia e hora exatos. A consistência lógica do padrão exige que as 3 festas de outono sigam o mesmo princípio. Os textos proféticos fornecem o conteúdo específico de cada uma. É um calendário escatológico derivado da mesma fonte que funcionou com perfeição matemática na primeira rodada.',
    fact: 'As três festas de outono de Levítico 23: <strong>Rosh Hashaná / Yom Teruah</strong> (Dia das Trombetas, 1 Tishri — única festa no calendário hebraico que ocorre na Lua Nova, quando o mês é "oculto" e sua data exata dependia de testemunhas oculares declarando ter visto a Lua crescente); <strong>Yom Kippur</strong> (Dia da Expiação, 10 Tishri — o dia mais solene, com abertura dos livros e reconciliação nacional); <strong>Sucot</strong> (Festa dos Tabernáculos, 15-22 Tishri — Deus habitando com o povo, nas tendas).',
    context: 'O padrão de cumprimento das festas de primavera estabelece uma lógica inequívoca: Páscoa (morte de Jesus, 14 Nisã, ~15h), Pães Asmos (sepultamento, Salmo 16:10 + Atos 2:31), Primícias (ressurreição, 1 Co 15:20), Pentecostes (Espírito Santo, Atos 2:1-2) — todos no dia e hora precisos do calendário lunar hebraico. Paulo em 1 Coríntios 5:7 explicita a conexão: <em>"Cristo, nossa páscoa, foi imolado."</em> O sistema de festas como "profecia calendárica progressiva" é teologicamente canônico, não especulativo.',
    logic: 'A lógica indutiva é: se as 4 festas de primavera funcionaram como cronograma exato com precisão de relógio, as 3 de outono são o mesmo tipo de roteiro para o que ainda está por vir. Conteúdo específico por festa: <strong>Rosh Hashaná (Trombetas)</strong> — a única festa do calendário hebraico cuja data exata não era conhecida antecipadamente (dependia de testemunhas oculares da Lua Nova) → base para Mateus 24:36 ("ninguém sabe o dia nem a hora") e para 1 Tessalonicenses 4:16 ("a voz do arcanjo e a trombeta de Deus"). <strong>Yom Kippur (Expiação)</strong> — dia de abertura dos livros, julgamento e reconciliação nacional → Apocalipse 20 (grandes tronos brancos, livros abertos) + Zacarias 12:10 (Israel reconhecendo o Messias). <strong>Sucot (Tabernáculos)</strong> — Deus habitando fisicamente com o povo nas tendas → Apocalipse 21:3 (<em>"o tabernáculo de Deus está com os homens, e ele habitará com eles"</em>). Zacarias 14:16 confirma com detalhe incomum: após o Juízo, sobreviventes das nações subirão anualmente a Jerusalém para guardar a Festa dos Tabernáculos no Reino Milenar. O calendário de Levítico 23 é o mapa.',
    related: [7, 25, 26],
    refs: [
      'Levítico 23:23-44 (Torah — Festas de Outono)',
      'Fruchtenbaum, A.G. The Footsteps of the Messiah. Ariel Ministries, 1982',
      'Edersheim, A. The Temple: Its Ministry and Services. Religious Tract Society, 1874',
      'Beale, G.K. The Book of Revelation (NIGTC). Eerdmans, 1999',
    ],
  },
  {
    id: 25, phase: 6, num: '25',
    title: 'O Quiasmo Cósmico',
    ref: 'Gênesis 1–3 · Apocalipse 20–22',
    category: 'Certeza Absoluta — Arquitetura Macroestrutural',
    excerpt: 'A Bíblia tem 66 livros, 40 autores, 3 idiomas, escrita ao longo de ~1.500 anos. Os três primeiros capítulos e os três últimos formam um espelho estrutural perfeito: cada elemento introduzido em Gênesis é cirurgicamente desfeito em Apocalipse, na ordem inversa. Uma obra produzida por dezenas de pessoas ao longo de milênios mantém simetria de abertura e fechamento.',
    fact: 'Gênesis 1-3 introduz, nesta ordem: (1) criação dos céus e da terra, (2) trevas sobre o abismo, (3) sol e lua para governar, (4) Árvore da Vida — acesso livre, (5) a serpente entra, (6) a maldição pronunciada, (7) a morte entra no mundo, (8) Éden fechado com querubins de espada. Apocalipse 20-22 reverte, na ordem inversa: (8) Nova Jerusalém com portões nunca fechados, (7) a morte destruída para sempre, (6) não haverá mais maldição, (5) a serpente lançada definitivamente no lago de fogo, (4) Árvore da Vida restaurada, (3) o Cordeiro é a luz eterna — não há mais necessidade de sol e lua, (2) não há mais noite, (1) nova criação — novos céus e nova terra.',
    context: 'O quiasmo (do grego <em>chi</em>, χ, em forma de X) é uma estrutura literária hebraica em que elementos são apresentados em ordem A-B-C e revertidos em C-B-A, com o ponto central como clímax. A Bíblia usa quiasmos em todos os níveis de escala — de versículos individuais (João 1:1-18) a livros inteiros (Amós). O quiasmo cósmico de Gênesis-Apocalipse é o maior identificado — atravessa 66 livros e ~1.500 anos de produção literária por autores que viveram em culturas e continentes diferentes.',
    logic: 'A especificidade do espelho elimina a coincidência: não é correspondência genérica de "começo e fim da história" — é item a item, na ordem inversa precisa. Onde Gênesis tem trevas → Apocalipse tem "não há mais noite". Onde Gênesis tem acesso à Árvore da Vida perdido → Apocalipse tem acesso restaurado (com detalhe específico: as folhas da Árvore servem para a cura das nações — Ap 22:2). Onde Gênesis fecha o Éden com querubins guardando com espada → Apocalipse abre a Nova Jerusalém com portões que <em>nunca se fecham</em> (Ap 21:25). A maldição específica de Gênesis 3:17-19 (trabalho com espinhos, dor no parto, retorno ao pó) é especificamente revertida em Apocalipse 22:3 ("não haverá mais maldição"). Para que esse espelho exista através de 1.500 anos e 40 autores, ou houve uma coordenação editorial humana impossível entre pessoas separadas por séculos e culturas sem comunicação — ou o texto tem um único Autor que começou com o desfecho em mente antes de começar a abertura.',
    related: [1, 26, 24],
    refs: [
      'Beale, G.K. The Book of Revelation (NIGTC). Eerdmans, 1999',
      'Wenham, G.J. Genesis 1-15 (Word Biblical Commentary, Vol. 1). Word Books, 1987',
      'Walsh, J.T. Style and Structure in Biblical Hebrew Narrative. Liturgical Press, 2001',
    ],
  },
  {
    id: 26, phase: 6, num: '26',
    title: 'O Leão e o Cordeiro',
    ref: 'Apocalipse 5 · Gênesis 3:15 · Filipenses 2:8',
    category: 'Teológico — Conclusão Filosófica',
    excerpt: 'João ouve: "o Leão de Judá venceu". Ao olhar, vê: "um Cordeiro como que morto". O paradoxo é intencional e preciso — a vitória mais absoluta da história foi conquistada no ponto de aparente derrota máxima. Gênesis 3:15 havia estabelecido a lógica 4.000 anos antes: "tu ferirás o calcanhar; esta te ferirá a cabeça."',
    fact: 'Apocalipse 5:5-6: <em>"Eis que o Leão da tribo de Judá, a Raiz de Davi, venceu, e pode abrir o livro e desatar os seus sete selos. E eu vi, no meio do trono... um Cordeiro como que morto."</em> O livro selado que ninguém no céu, na terra ou debaixo da terra podia abrir (v.3) — o único que pode abri-lo é o Cordeiro que foi morto.',
    context: 'A imagem do Leão de Judá vem de Gênesis 49:9-10, a bênção profética de Jacó: <em>"Judá é leão filhote... não se arredará o cetro de Judá... até que venha Siló."</em> Na mitologia universal e na teologia bíblica, leão = poder soberano, força irresistível. O Cordeiro sacrificial é a imagem oposta: vítima, submissão voluntária, morte. João Batista havia declarado em João 1:29: <em>"Eis o Cordeiro de Deus, que tira o pecado do mundo"</em> — identificando Jesus com o cordeiro pascal e com o Servo sofredor de Isaías 53:7 (<em>"como cordeiro levado ao matadouro"</em>).',
    logic: 'O paradoxo de Apocalipse 5 é o arremate filosófico de toda a Escritura. A pergunta cósmica que o livro todo responde é: como o Criador desfaz a entrada do mal sem simplesmente aniquilar tudo que criou? A resposta não é força bruta — é obediência voluntária levada ao limite absoluto. Gênesis 3:15 havia estabelecido a lógica com precisão cirúrgica: <em>"tu lhe ferirás o calcanhar / esta te ferirá a cabeça."</em> O mal atinge o calcanhar — derrota aparente, morte do Messias. O Messias atinge a cabeça — destruição definitiva do mal. A vitória é conquistada <em>através</em> do ponto de derrota aparente, não apesar dele. Filipenses 2:8-9: <em>"Sendo obediente até a morte, mesmo a morte de cruz. Por isso Deus o exaltou soberanamente."</em> O mecanismo é: a submissão voluntária do Justo é o único evento que pode satisfazer simultaneamente a justiça (punição do culpado) e a misericórdia (perdão do culpado) — porque o Justo absorve a penalidade em lugar do culpado. O Leão vence como Cordeiro. O poder supremo se manifesta como fragilidade voluntária. E o livro selado que nenhum poder cósmico conseguiu abrir — os destinos de toda a criação — só pode ser aberto pela mão que carrega as marcas do Cordeiro. O código-fonte que começou com a assinatura Alef-Tav em Gênesis 1:1 se fecha com o Alfa e o Ômega abrindo o livro da história em Apocalipse 5.',
    related: [1, 2, 25],
    refs: [
      'Beale, G.K. The Book of Revelation (NIGTC). Eerdmans, 1999',
      'Motyer, J.A. The Prophecy of Isaiah. IVP, 1993',
      'Kidner, D. Genesis: An Introduction and Commentary (TOTC). IVP, 1967',
    ],
  },
  {
    id: 27, phase: 1, num: '27',
    title: 'O Exército de Um Homem: O Enigma de 318',
    ref: 'Gênesis 14:14 · Gênesis 15:2 · Midrash Rabbah, Bereshit 43:2 · Epístola de Barnabé 9:8',
    category: 'Certeza Absoluta · Matemático · Filológico',
    excerpt: 'Abraão leva exatamente 318 homens para resgatar Ló. No capítulo seguinte, ele menciona seu servo de confiança: Eliezer. A gematria do nome hebraico Eliezer soma exatamente 318. O Midrash antigo registra o trocadilho: "Eliezer sozinho valia por todos os 318." Um jogo literário intencional inscrito na página seguinte — reconhecido de forma independente pela tradição judaica e pela Epístola de Barnabé.',
    fact: 'Gênesis 14:14: <em>"Ouvindo Abraão que seu parente havia sido levado cativo, armou os seus servos domésticos — <strong>trezentos e dezoito homens</strong> treinados, nascidos em sua casa."</em> No capítulo imediatamente seguinte, Gênesis 15:2, Abraão lamenta não ter herdeiro e menciona seu servo de confiança: <em>"Senhor DEUS, que me darás, se eu continuo sem filhos, e o mordomo da minha casa é este <strong>Eliezer</strong> de Damasco?"</em> A gematria do nome hebraico <strong>אֱלִיעֶזֶר</strong> (Eliezer): א(1) + ל(30) + י(10) + ע(70) + ז(7) + ר(200) = <strong>318</strong>.',
    context: 'A gematria — o sistema numérico-alfabético hebraico em que cada letra possui valor fixo — era instrumento literário estabelecido entre escribas do Antigo Oriente Próximo muito antes de se tornar ferramenta exegética formal. O autor bíblico emprega o número 318 sabendo que o leitor educado, ao calcular o nome de Eliezer, reconheceria o trocadilho: o exército de Abraão era, em termos simbólicos, <em>Eliezer multiplicado</em>. O <strong>Midrash Rabbah</strong> (<em>Bereshit Rabbah</em> 43:2) registra explicitamente essa leitura: "Rabi Ammi disse — Eliezer sozinho era o equivalente de todos os 318." A <strong>Epístola de Barnabé</strong> (9:8), texto cristão do séc. II d.C., cita o mesmo dado como evidência de que o número 318 possuía carga simbólica pré-estabelecida na tradição judaica — tradição judaica e cristã primitiva convergindo sobre o mesmo trocadilho de forma independente.',
    logic: 'O argumento é de coerência literária interna, não de numerologia mística. O autor de Gênesis emprega a mesma técnica que os escribas do Antigo Oriente Próximo usavam para sinalizar ao leitor letrado que números específicos carregavam significado além do valor facial. A diferença aqui é que o "código" se resolve <em>dentro do próprio texto</em>: o número 318 de Gênesis 14 é decifrado pelo nome Eliezer de Gênesis 15 — a chave está na página seguinte, não em fontes externas. O Midrash e os Pais da Igreja chegaram ao mesmo trocadilho de forma independente, o que confirma que a leitura não é projeção posterior: ela estava no texto esperando quem conhecesse o alfabeto numérico hebraico. Para o leitor moderno sem hebraico, 318 é um número arbitrário. Para o leitor original, era o nome do general.',
    related: [2, 3, 5],
    refs: [
      'Midrash Rabbah, Bereshit Rabbah 43:2',
      'Epístola de Barnabé, 9:8 (~100 d.C.)',
      'Munk, M.L. The Wisdom in the Hebrew Alphabet. Mesorah, 1983',
    ],
  },
  {
    id: 28, phase: 3, num: '28',
    title: 'O Salmo Partido ao Meio: A Letra Perdida de Qumran',
    ref: 'Salmo 145 · 11QPsa — Rolo de Salmos de Qumran · Septuaginta (LXX)',
    category: 'Certeza Absoluta · Crítica Textual · Arqueológico',
    excerpt: 'O Salmo 145 é um acróstico perfeito do alfabeto hebraico: cada versículo começa com a letra seguinte. Mas no Texto Massorético, a letra Nun (נ) estava ausente — 22 letras, 21 versículos. Céticos chamavam de erro bíblico. Os Manuscritos do Mar Morto (11QPsa, séc. I a.C.) revelaram o versículo intacto em hebraico. O design literário complexo foi o que permitiu restaurar a Bíblia — não corrompê-la.',
    fact: 'O Salmo 145 é um <strong>acróstico alfabético</strong>: cada versículo começa com a letra seguinte do alfabeto hebraico, de Alef (א) a Tav (ת). O Texto Massorético — base do AT hebraico recebido — apresenta 21 versículos. O problema: o alfabeto hebraico possui <strong>22 letras</strong>. Faltava o versículo correspondente à letra <strong>Nun</strong> (נ, décima quarta letra). A <strong>Septuaginta</strong> (LXX, tradução grega do AT por eruditos judeus no séc. III a.C.) preservava um versículo adicional após o v.13: <em>"Fiel é o SENHOR em todas as suas palavras e santo em todas as suas obras."</em> Em 1956, o fragmento <strong>11QPsa</strong> dos Manuscritos do Mar Morto (Qumran, copiado entre os sécs. I a.C. e I d.C.) foi identificado — e continha exatamente esse versículo em hebraico, na posição Nun, iniciando com a letra נ.',
    context: 'Os Manuscritos do Mar Morto representam a maior descoberta para a crítica textual bíblica do séc. XX. São mais de 1.000 anos mais antigos que os manuscritos massoréticos previamente conhecidos. A convergência independente entre a <strong>Septuaginta</strong> (tradição alexandrina, séc. III a.C.) e o fragmento <strong>11QPsa</strong> de Qumran (tradição palestinense, séc. I) sobre o mesmo versículo "Nun" estabelece com alta probabilidade que: (1) o versículo existiu no original; (2) foi omitido acidentalmente em algum ponto da transmissão massorética — provavelmente por <em>parablepsis</em> (salto visual do escriba), pois o v.13 e o v.14 massorético ambos contêm construções iniciadas por נ; (3) a lacuna era <em>detectável matematicamente</em> pelo design acróstico — 22 letras exige 22 versículos.',
    logic: 'O caso do Salmo 145 é um argumento pela confiabilidade do processo de transmissão textual bíblica — mas de forma mais sofisticada que a apologia ingênua. O argumento preciso é: (1) um escriba cometeu um erro de cópia — isso é esperado em qualquer corpus copiado à mão por milênios; (2) a estrutura literária intencionalmente complexa do salmo (o acróstico de 22 letras) tornou o erro <em>matematicamente detectável</em> séculos depois; (3) textos independentes e mais antigos (LXX e Qumran) confirmaram a versão original. O próprio design elaborado do autor funcionou como <strong>sistema de detecção de erros</strong> — análogo à paridade em computação. A Bíblia não é confiável apesar de sua complexidade literária, mas <em>por causa</em> dela. O "erro bíblico" apontado pelos céticos era o ponto exato onde a arqueologia e a filologia se uniram para restaurar o texto original. O versículo recuperado completa a sequência: "Fiel é o SENHOR em todas as suas palavras" (v.Nun) → "Sustenta o SENHOR a todos os que caem" (v.14 massorético).',
    related: [9, 14, 25],
    refs: [
      'Sanders, J.A. The Psalms Scroll of Qumrân Cave 11 (11QPsa). Oxford, 1965',
      'Tov, E. Textual Criticism of the Hebrew Bible. Fortress Press, 1992',
      'Septuaginta (LXX), Salmo 144 [145], ~250 a.C.',
      'Metzger, B.M. Manuscripts of the Greek Bible. OUP, 1981',
    ],
  },
  {
    id: 29, phase: 5, num: '29',
    title: 'O Dedo no Pó do Templo: João 8 e o Ritual da Sotah',
    ref: 'João 8:1-11 · Números 5:11-31 · Jeremias 17:13 · Talmude, Sotah 9b',
    category: 'Certeza Absoluta · Engenharia Jurídica · Teológico',
    excerpt: 'Jesus escreve no chão do Templo com o dedo. Em dois milênios de comentários, ninguém soube o quê. A resposta está em Números 5: o ritual da Sotah, onde o Sacerdote pegava pó do chão do Tabernáculo e escrevia as maldições da Lei. Jesus, no piso do Templo, age como o verdadeiro Sumo Sacerdote cumprindo Jeremias 17:13 — e ao final perdoa, porque Ele próprio beberia o cálice das maldições na Cruz.',
    fact: 'João 8:6b-8: <em>"Jesus, porém, inclinando-se, <strong>escrevia com o dedo na terra</strong>. E, como continuassem a interrogá-lo, endireitou-se e disse-lhes: Aquele que entre vós está sem pecado seja o primeiro a atirar-lhe a pedra. E, inclinando-se outra vez, continuou a escrever na terra."</em> O texto não revela o conteúdo — silêncio literário deliberado. Números 5:17,23: no ritual da <em>Sotah</em> (אִשָּׁה סוֹטָה, a mulher suspeita de adultério), o sacerdote devia pegar <strong>pó do chão do Tabernáculo</strong>, misturá-lo em água, <strong>escrever as maldições da Lei</strong> em um pergaminho e apagá-las na água amarga — que a mulher então beberia. Jeremias 17:13: <em>"Todos os que te abandonam serão envergonhados... <strong>seus nomes serão escritos no pó</strong>."</em>',
    context: '<strong>Nota textual crítica:</strong> A perícope de Jo 7:53–8:11 está ausente dos manuscritos gregos mais antigos — P66 (~200 d.C.), P75 (~200 d.C.), Sinaiticus (א) e Vaticanus (B). O papiro P66 pula diretamente de 7:52 para 8:12. A maioria dos críticos textuais modernos, incluindo Bruce Metzger (<em>A Textual Commentary on the Greek New Testament</em>), considera o episódio uma tradição oral histórica autêntica inserida posteriormente no texto canônico — Metzger reconhece seu caráter histórico mas questiona sua posição original no Evangelho de João. A argumentação desta evidência não depende da posição canônica: a coerência jurídico-teológica do ato de Jesus com o ritual da Sotah é historicamente plausível independentemente do debate textual. O ritual da <em>Sotah</em> é um dos procedimentos legais mais enigmáticos do Pentateuco (Números 5:11-31) e o único em que o próprio nome de Deus é deliberadamente apagado — as maldições escritas são dissolvidas na água amarga que a mulher bebe. Se culpada, a maldição opera no corpo; se inocente, ela é purificada e abençoada. O cenário de João 8 mapeia sobre o ritual com precisão de protocolo: (1) <strong>suspeita de adultério</strong> — exatamente o contexto legal da Sotah; (2) <strong>ato sacerdotal de escrever no pó do chão</strong> do Templo — equivalente ao pó do Tabernáculo prescrito em Números 5; (3) <strong>ausência de testemunhas adequadas</strong> — o processo da Sotah exigia testemunhas; ao se retirarem um por um, eles invalidaram o próprio processo legal que iniciaram. O Talmude (<em>Sotah</em> 9b) registra que o ritual foi abolido quando os adultérios se multiplicaram no período do Segundo Templo — precisamente o contexto de João 8.',
    logic: 'Jesus não está "comprando tempo" escrevendo na terra — está <em>performando o ritual prescrito</em> para aquele caso específico, com as modificações que somente o verdadeiro Sumo Sacerdote poderia fazer. A estrutura completa: (1) <strong>O ato sacerdotal</strong> — escrever no pó do chão do Templo é exatamente o que o sumo sacerdote fazia na Sotah; Jesus assume a prerrogativa sacerdotal sem ser levita, qualificando-se pela ordem de Melquisedeque (Hebreus 7, Evidência 03); (2) <strong>Jeremias 17:13</strong> fornece a chave explícita — "seus nomes serão escritos no pó" refere-se aos que abandonaram a fonte de água viva; os acusadores que saem um por um estão cumprindo essa profecia sobre si mesmos no momento em que a rejeitam; (3) <strong>A dissolução da maldição</strong> — na Sotah, as maldições eram apagadas e bebidas pela acusada; Jesus não condena a mulher e dissolve o processo legal. Mas a Lei não foi anulada: Ele mesmo beberia o cálice das maldições na Cruz (Gálatas 3:13 — "Cristo nos resgatou da maldição da Lei, fazendo-se maldição em nosso lugar"). O perdão de João 8 é possível porque João 19 já estava no horizonte. A teologia de Jesus não está no que Ele escreveu — está no <em>ato</em> de escrever no pó do Templo e no que fez a seguir.',
    related: [6, 8, 13],
    refs: [
      'Mishná, Sotah 1:1-9:15',
      'Números 5:11-31 (Torah — ritual da Sotah)',
      'Derrett, J.D.M. Law in the New Testament. Darton, Longman & Todd, 1970',
      'Metzger, B.M. A Textual Commentary on the Greek New Testament. UBS, 1994',
    ],
  },
  {
    id: 30, phase: 5, num: '30',
    title: 'A Lua de Sangue de 3 de Abril, 33 d.C.',
    ref: 'Atos 2:20 · Joel 2:31 · Espenak & Meeus, NASA GSFC · 14 Nisan, 33 d.C.',
    category: 'Certeza Absoluta · Histórico · Astronômico',
    excerpt: 'Pedro cita Joel 2:31 no Pentecostes: "o sol em trevas e a lua em sangue." Não era metáfora. Com base nos algoritmos de retrocálculo orbital da NASA (catálogo de Fred Espenak), em 3 de abril de 33 d.C. — sexta-feira, 14 Nisan — um eclipse lunar parcial nasceu no horizonte de Jerusalém ao entardecer, exatamente quando a multidão retornava do Gólgota. A mecânica orbital confirma o que as testemunhas viram.',
    fact: 'Atos 2:20 — discurso de Pedro no Pentecostes, 50 dias após a crucificação, citando Joel 2:31: <em>"O sol se converterá em trevas e a lua em sangue, antes que venha o grande e notável Dia do Senhor."</em> Com base no catálogo de <strong>Fred Espenak</strong> (NASA Goddard Space Flight Center, <em>Fifty Year Canon of Lunar Eclipses</em> e base de dados eclipse.gsfc.nasa.gov), em <strong>3 de abril de 33 d.C.</strong> (sexta-feira, 14 de Nisan no calendário judaico) houve um <strong>eclipse lunar parcial</strong>. A lua nasceu no horizonte de Jerusalém naquele dia por volta das 18h20 horário local — parcialmente eclipsada, com coloração avermelhada visível. O eclipse havia começado horas antes de o sol se pôr. Pedro discursava diante de toda Jerusalém — audiência que estivera presente naquela tarde.',
    context: 'O retrocálculo de eclipses históricos é astronomia de precisão, não especulação. A mecânica orbital é determinística: conhecendo as posições atuais da Terra, Lua e Sol, é possível calcular sua configuração para qualquer data histórica com margem de erro de poucos segundos. Os algoritmos de Espenak e Meeus são o padrão acadêmico internacional para esse fim. A data de 3 de abril de 33 d.C. para a crucificação é defendida pela maioria dos historiadores e astrofísicos que estudaram a questão — incluindo Colin Humphreys e W.G. Waddington (<em>Nature</em>, vol. 306, 1983) e o astrofísico John Pratt. A distinção técnica é crucial: um eclipse <em>solar</em> requer Lua Nova — <em>impossível</em> durante a Páscoa judaica de 14 Nisan, que sempre ocorre em Lua Cheia. Um eclipse <em>lunar</em>, ao contrário, requer exatamente Lua Cheia — e pode ocorrer em 14 Nisan. Isso é precisamente o argumento de Júlio Africano contra Talo, que tentou explicar as trevas da tarde como eclipse solar (ver Evidência 22).',
    logic: 'A convergência astronômica não prova a ressurreição — mas confirma o contexto histórico com independência total da tradição religiosa. Os quatro pontos do argumento: (1) <strong>Data precisa e independente</strong> — 14 Nisan em ano preciso corresponde a 3 de abril de 33 d.C. por cálculo calendárico independente da tradição cristã; (2) <strong>Eclipse calculável</strong> — o eclipse lunar parcial daquela tarde é resultado de mecânica newtoniana, verificável por qualquer astrônomo com software de retrocálculo; (3) <strong>Visibilidade confirmada</strong> — nascer da lua parcialmente eclipsada = lua avermelhada visível no horizonte leste de Jerusalém enquanto a população retornava do Gólgota (a oeste da cidade), exatamente às 18h20; (4) <strong>Audiência presente</strong> — Pedro cita a "lua em sangue" 50 dias depois diante de quem estivera naquela tarde em Jerusalém; se o fenômeno não tivesse ocorrido, ele seria refutado imediatamente. A astronomia não é evidência de divindade. É a <em>assinatura física</em> que confirma que os eventos ocorreram na data e local que os textos afirmam — e que a multidão presente os interpretou como cumprimento de profecia imediatamente, não como elaboração posterior.',
    related: [22, 21, 7],
    refs: [
      'Espenak, F. Fifty Year Canon of Lunar Eclipses: 1986-2035. NASA RP-1216, 1989',
      'Humphreys, C.J.; Waddington, W.G. Dating the Crucifixion. Nature, vol. 306, pp. 743-746, 1983',
      'Humphreys, C.J. The Mystery of the Last Supper. Cambridge University Press, 2011',
      'Pratt, J.P. Newton\'s Date for the Crucifixion. QJRAS, vol. 32, 1991',
    ],
  },
];

const TERMS = [
  {
    lang: 'hebraico',
    original: 'את',
    transliteration: 'Alef-Tav',
    term: 'A Partícula da Expansão',
    meaning: 'Marcador do objeto direto hebraico (<em>nota accusativi</em>) — composto pela primeira (Alef) e última (Tav) letras do alfabeto. Intraduzível em qualquer língua moderna. Para <strong>Rabi Akiva</strong> (séc. I d.C.), cada ocorrência no Torá era um <em>ribbui</em> — expansão implícita de sentido — sinal de que algo além do objeto literal estava incluído. O Talmude Babilônico (<em>Pesachim</em> 22b) registra o método.',
    appears: 'Evidência 01',
  },
  {
    lang: 'hebraico',
    original: 'אֶבֶן',
    transliteration: 'Eben',
    term: 'Pedra = Pai + Filho',
    meaning: 'A palavra hebraica para "pedra" contém em sua raiz a contração de Ab (אָב = Pai) e Ben (בֵּן = Filho). A pedra angular rejeitada pelos construtores carrega a relação ontológica Pai-Filho em sua própria estrutura ortográfica.',
    appears: 'Evidência 11',
  },
  {
    lang: 'hebraico',
    original: 'תּוֹלַעַת',
    transliteration: "Tola'at",
    term: 'O Verme Escarlate',
    meaning: 'Coccus ilicis — cochonilha escarlate que se fixa num madeiro, morre nele, e ao morrer secreta tinta escarlate sobre os ovos para dar vida à prole. Tipologia bioquímica do sacrifício no Calvário. Usado no Salmo 22:6.',
    appears: 'Evidência 10',
  },
  {
    lang: 'grego',
    original: 'δύναμις',
    transliteration: 'Dynamis',
    term: 'Força / Energia Física',
    meaning: 'Não é palavra espiritual abstrata — é o termo técnico grego para força física mensurável. Raiz de "dínamo", "dinâmica", "dinamite". Jesus afirma que um quantum de dynamis saiu de si para a mulher com hemorragia.',
    appears: 'Evidência 17',
  },
  {
    lang: 'grego',
    original: 'καθαρίζω',
    transliteration: 'Katharizo',
    term: 'Erradicação + Regeneração',
    meaning: 'Raiz de "catarse" — purificação absoluta, não tratamento parcial. Lucas usa este verbo para a cura da lepra, em vez de therapeuo (tratar). Implica erradicação do agente patológico e regeneração integral do tecido ao estado original.',
    appears: 'Evidência 16',
  },
  {
    lang: 'grego',
    original: 'παρθένος',
    transliteration: 'Parthenos',
    term: 'Virgem Intacta',
    meaning: 'Termo técnico grego para virgindade sem ambiguidade. A Septuaginta (~250 a.C.), traduzida por rabinos judeus pré-cristãos, usa Parthenos para traduzir o hebraico almah em Isaías 7:14 — provando que a expectativa do nascimento virginal era judaica e pré-cristã.',
    appears: 'Evidência 12',
  },
  {
    lang: 'grego',
    original: 'θρόμβοι αἵματος',
    transliteration: 'Thromboi Haimatos',
    term: 'Hematidrose',
    meaning: 'Coágulos/trombos de sangue — não uma metáfora poética. Lucas usa o laudo médico correto para hematidrose: ruptura dos capilares sob glândulas sudoríparas causada por estresse neurológico extremo. Condição médica documentada em ~150 casos na literatura.',
    appears: 'Evidência 19',
  },
  {
    lang: 'grego',
    original: 'πυρετῷ μεγάλῳ',
    transliteration: 'Pyretō Megalō',
    term: 'Grande Febre (Hipócrates)',
    meaning: 'Taxonomia clínica do Corpus Hippocraticum para infecção sistêmica letal — diferente de "febre" genérica. Mateus usa o termo comum; Lucas usa a classificação médica precisa de Hipócrates. Só um médico faria essa distinção.',
    appears: 'Evidência 15',
  },
  {
    lang: 'grego',
    original: 'ἰάομαι',
    transliteration: 'Iaomai',
    term: 'Regeneração de Tecido',
    meaning: 'Na medicina grega: regeneração imediata de tecido, não apenas alívio de sintoma. Lucas usa este verbo para a reconstrução da orelha de Malco — cartilagem amputada, nervos seccionados, vasos cortados — tudo regenerado instantaneamente.',
    appears: 'Evidência 20',
  },
  {
    lang: 'grego',
    original: 'ὑδρωπικός',
    transliteration: 'Hydropikos',
    term: 'Hidropisia',
    meaning: 'Acúmulo massivo de fluido por insuficiência cardíaca, cirrose hepática ou falência renal — estágio terminal. Apenas Lucas usa este diagnóstico diferencial preciso, onde os outros evangelistas simplesmente não mencionam o episódio.',
    appears: 'Evidência 18',
  },
];

const CHIASM_PAIRS = [
  { gen: 'Criação dos céus e da terra', apo: 'Nova Criação — céus e terra novos' },
  { gen: 'Trevas sobre o abismo', apo: 'Não haverá mais noite' },
  { gen: 'Sol e lua criados para governar', apo: 'O Cordeiro é a luz eterna' },
  { gen: 'Árvore da Vida — acesso perdido', apo: 'Árvore da Vida — acesso restaurado' },
  { gen: 'A serpente entra', apo: 'A serpente lançada no lago de fogo' },
  { gen: 'Maldição pronunciada', apo: 'Não haverá mais maldição' },
  { gen: 'Morte entra no mundo', apo: 'A morte é destruída para sempre' },
  { gen: 'Éden fechado — querubins guardam', apo: 'Nova Jerusalém — portões nunca fechados' },
];

const CURIOSITIES = [
  {
    id: 1,
    title: 'O versículo mais curto da Bíblia',
    tag: 'Linguística',
    body: 'Em grego, João 11:35 tem apenas duas palavras: <strong>ἐδάκρυσεν ὁ Ἰησοῦς</strong> — "Jesus chorou." É o versículo mais curto do Novo Testamento e um dos mais teologicamente densos: Deus encarnado chora diante da morte de um amigo, mesmo sabendo que vai ressuscitá-lo.',
  },
  {
    id: 2,
    title: 'A Bíblia não menciona maçã',
    tag: 'Mitos & Fatos',
    body: 'Gênesis 3 usa apenas <strong>פְּרִי (peri)</strong> — "fruto", sem especificar qual. A tradição da maçã veio da Vulgata latina de Jerônimo (~400 d.C.), onde o latim <em>malum</em> significa tanto "maçã" quanto "mal". A iconografia medieval cristalizou o erro.',
  },
  {
    id: 3,
    title: 'O hebraico original não tinha vogais',
    tag: 'Manuscritos',
    body: 'O hebraico bíblico original era escrito somente com consoantes. O sistema de pontuação vocálica (<strong>Niqqud</strong>) foi desenvolvido pelos Massoretas entre os séculos VI–X d.C. para preservar a pronúncia correta. Leitores do séc. I liam o texto consonantal de memória.',
  },
  {
    id: 4,
    title: 'O Tetragrama aparece 6.828 vezes',
    tag: 'Números',
    body: 'O nome divino <strong>יהוה (YHWH)</strong> aparece 6.828 vezes no Antigo Testamento — mais que qualquer outro nome ou título. É tão sagrado que judeus substituem pela palavra <em>HaShem</em> ("O Nome") na leitura oral, e a pronúncia original foi intencionalmente perdida.',
  },
  {
    id: 5,
    title: '1.500 anos, 40 autores, 3 continentes',
    tag: 'Estatística',
    body: 'A Bíblia foi escrita ao longo de ~1.500 anos por mais de 40 autores: reis, pescadores, médicos, profetas e coletores de impostos. Em 3 idiomas (hebraico, aramaico, grego koiné), em 3 continentes (Ásia, África, Europa), com unidade temática do primeiro ao último livro.',
  },
  {
    id: 6,
    title: 'A circuncisão no 8º dia — e a coagulação',
    tag: 'Medicina',
    body: 'Gênesis 17:12 ordena a circuncisão no <strong>8º dia de vida</strong>. A medicina moderna descobriu que a vitamina K (essencial para coagulação) e os níveis de protrombina atingem seus picos máximos exatamente no 8º dia de vida de um recém-nascido — o único dia em que o bebê coagula melhor que o adulto.',
  },
  {
    id: 7,
    title: 'Os Manuscritos do Mar Morto',
    tag: 'Arqueologia',
    body: 'Descobertos em 1947 em Qumran, os Manuscritos do Mar Morto contêm fragmentos de <strong>todos os livros do AT exceto Ester</strong>. O rolo completo de Isaías (~125 a.C.) é 1.000 anos mais antigo que qualquer cópia conhecida antes da descoberta — e o texto é 95% idêntico ao que usamos hoje.',
  },
  {
    id: 8,
    title: 'O nome mais longo da Bíblia',
    tag: 'Curiosidade',
    body: '<strong>Maher-Shalal-Hash-Baz</strong> (Isaías 8:1) — filho do profeta Isaías, com 18 letras, significando "Rápido é o saque, veloz é o despojo." Foi dado como sinal profético da queda da Síria e Israel diante da Assíria.',
  },
  {
    id: 9,
    title: 'O versículo central aponta para confiança',
    tag: 'Arquitetura',
    body: 'O versículo central da Bíblia Protestante (1.189 capítulos, 31.102 versículos) é <strong>Salmos 118:8</strong>: <em>"É melhor refugiar-se no SENHOR do que confiar em príncipes."</em> O Salmo 118 é também o mais citado no Novo Testamento.',
  },
  {
    id: 10,
    title: 'A profecia de Tiro verificável por satélite',
    tag: 'Profecia',
    body: 'Ezequiel 26 (~590 a.C.) profetizou que Tiro seria destruída e suas pedras jogadas ao mar. Em 332 a.C., Alexandre Magno destruiu a cidade continental e <strong>literalmente jogou as pedras ao mar</strong> para construir uma ponte de 800 metros até a ilha. A "ilha" de Tiro ainda existe — sobre as ruínas subaquáticas.',
  },
  {
    id: 11,
    title: 'O número 7 como assinatura estrutural',
    tag: 'Números',
    body: 'O número 7 aparece <strong>735 vezes</strong> na Bíblia e estrutura praticamente todos os livros: Gênesis 1 tem 7 dias; Apocalipse tem 7 igrejas, 7 selos, 7 trombetas, 7 taças. A palavra "criou" em Gênesis 1 aparece 7 vezes. Gênesis 1:1 tem 7 palavras e 28 (4×7) letras.',
  },
  {
    id: 12,
    title: 'O livro de Ester não menciona Deus',
    tag: 'Curiosidade',
    body: 'Ester é um dos dois livros do AT que <strong>nunca mencionam o nome de Deus</strong> (o outro é Cântico dos Cânticos). Ainda assim, a presença divina é implícita na providência por trás de cada evento. Tanto que foi debatido pelos rabinos se deveria entrar no cânon.',
  },
];

// =============================================
// RENDER CURIOSITIES
// =============================================
function renderCuriosities() {
  const grid = document.getElementById('curiosities-grid');
  if (!grid) return;
  grid.innerHTML = CURIOSITIES.map(c => `
    <div class="curio-card">
      <div class="curio-top">
        <span class="curio-num">${String(c.id).padStart(2,'0')}</span>
        <span class="curio-tag">${c.tag}</span>
      </div>
      <h3 class="curio-title">${c.title}</h3>
      <p class="curio-body">${c.body}</p>
    </div>
  `).join('');
}

// =============================================
// PHASE COLORS
// =============================================
function getPhaseColor(phaseId) {
  const p = PHASES.find(p => p.id === phaseId);
  return p ? p.color : '#c9a840';
}
function getPhaseDim(phaseId) {
  const p = PHASES.find(p => p.id === phaseId);
  return p ? p.dim : 'rgba(201,168,64,0.15)';
}

// =============================================
// RENDER PHASES OVERVIEW
// =============================================
function renderPhases() {
  const grid = document.getElementById('phases-grid');
  grid.innerHTML = PHASES.map(p => `
    <div class="phase-card" style="--phase-color:${p.color}; --phase-dim:${p.dim}" data-phase="${p.id}">
      <div class="phase-card-header">
        <span class="phase-num">${p.label}</span>
        <h3 class="phase-card-title">${p.title}</h3>
      </div>
      <p class="phase-card-books">${p.books}</p>
      <p class="phase-card-count"><strong>${p.count}</strong> evidências</p>
    </div>
  `).join('');

  grid.querySelectorAll('.phase-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.phase;
      filterByPhase(id);
      document.querySelector('.evidences-section').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// =============================================
// RENDER EVIDENCE CARDS
// =============================================
function renderCards() {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = EVIDENCES.map(ev => {
    const color = getPhaseColor(ev.phase);
    const dim = getPhaseDim(ev.phase);
    return `
      <div class="ev-card" data-phase="${ev.phase}" data-id="${ev.id}"
           style="--phase-color:${color}; --phase-dim:${dim}">
        <div class="ev-card-top">
          <span class="ev-number">${ev.num}</span>
          <span class="ev-category-badge">${ev.category.split('—')[0].trim()}</span>
        </div>
        <h3 class="ev-card-title">${ev.title}</h3>
        <p class="ev-card-ref">${ev.ref}</p>
        <p class="ev-card-excerpt">${ev.excerpt}</p>
        <span class="ev-card-arrow">Ver argumento completo →</span>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.ev-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
  });
}

// =============================================
// FILTER
// =============================================
let currentPhase = 'all';

function filterByPhase(phase) {
  currentPhase = phase;

  document.querySelectorAll('.phase-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.phase === phase);
  });

  document.querySelectorAll('.ev-card').forEach(card => {
    if (phase === 'all' || card.dataset.phase === phase) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// =============================================
// MODAL
// =============================================
function openModal(id) {
  const ev = EVIDENCES.find(e => e.id === id);
  if (!ev) return;

  const phase = PHASES.find(p => p.id === ev.phase);
  const color = getPhaseColor(ev.phase);
  const dim = getPhaseDim(ev.phase);

  const relatedHtml = ev.related.map(rid => {
    const rel = EVIDENCES.find(e => e.id === rid);
    return rel ? `<span class="related-chip" data-id="${rel.id}">
      <span style="color:${getPhaseColor(rel.phase)}">●</span> ${rel.num} — ${rel.title}
    </span>` : '';
  }).join('');

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-phase-label" style="color:${color}">
      <span class="modal-num" style="background:${dim}; color:${color}">
        ${phase.label} · Evidência ${ev.num}
      </span>
    </div>
    <h2 class="modal-title">${ev.title}</h2>
    <p class="modal-refs">${ev.ref}</p>
    <span class="modal-category">${ev.category}</span>

    <div class="modal-divider"></div>

    <div class="modal-block">
      <span class="modal-block-label">O Fato</span>
      <p class="modal-fact">${ev.fact}</p>
    </div>

    ${ev.context ? `<div class="modal-block modal-block-context">
      <span class="modal-block-label">Contexto Histórico</span>
      <p class="modal-context">${ev.context}</p>
    </div>` : ''}

    <div class="modal-block">
      <span class="modal-block-label">A Lógica Racional</span>
      <p class="modal-logic">${ev.logic}</p>
    </div>

    ${relatedHtml ? `
    <div class="modal-related">
      <span class="modal-related-label">Evidências Relacionadas</span>
      <div class="modal-related-chips">${relatedHtml}</div>
    </div>` : ''}

    ${ev.refs && ev.refs.length ? `
    <details class="modal-refs-block">
      <summary class="modal-refs-summary">Referências Bibliográficas</summary>
      <ul class="modal-refs-list">
        ${ev.refs.map(r => `<li>${r}</li>`).join('\n        ')}
      </ul>
    </details>` : ''}
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Related chips click
  document.querySelectorAll('.related-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      openModal(Number(chip.dataset.id));
    });
  });
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// =============================================
// GLOSSARY
// =============================================
function renderGlossary(lang = 'hebraico') {
  const grid = document.getElementById('glossary-grid');
  grid.innerHTML = TERMS.map(t => `
    <div class="glos-card ${t.lang === lang ? 'visible' : ''}" data-lang="${t.lang}">
      <div class="glos-original">${t.original}</div>
      <div class="glos-transliteration">${t.transliteration}</div>
      <div class="glos-term">${t.term}</div>
      <div class="glos-meaning">${t.meaning}</div>
      <div class="glos-appears">→ ${t.appears}</div>
    </div>
  `).join('');
}

function switchGlossary(lang) {
  document.querySelectorAll('.glos-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.lang === lang);
  });
  document.querySelectorAll('.glos-card').forEach(card => {
    card.classList.toggle('visible', card.dataset.lang === lang);
  });
}

// =============================================
// CHIASM
// =============================================
function renderChiasm() {
  const left = document.getElementById('chiasm-left');
  const right = document.getElementById('chiasm-right');

  left.innerHTML = CHIASM_PAIRS.map((p, i) => `
    <div class="chiasm-item">
      <span class="item-label">Gênesis ${i + 1}</span>
      ${p.gen}
    </div>
  `).join('');

  right.innerHTML = CHIASM_PAIRS.map((p, i) => `
    <div class="chiasm-item mirror">
      <span class="item-label">Apocalipse ${i + 1}</span>
      ${p.apo}
    </div>
  `).join('');
}


// =============================================
// STICKY NAV
// =============================================
function initStickyNav() {
  const nav = document.getElementById('fases-nav');
  const hero = document.querySelector('.hero');

  const observer = new IntersectionObserver(
    ([entry]) => nav.style.boxShadow = entry.isIntersecting ? 'none' : '0 4px 24px rgba(0,0,0,0.4)',
    { threshold: 0 }
  );
  observer.observe(hero);
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderPhases();
  renderCards();
  renderGlossary('hebraico');
  renderChiasm();
  renderCuriosities();
  initStickyNav();

  // Phase nav buttons
  document.querySelectorAll('.phase-btn').forEach(btn => {
    btn.addEventListener('click', () => filterByPhase(btn.dataset.phase));
  });

  // Glossary tabs
  document.querySelectorAll('.glos-tab').forEach(tab => {
    tab.addEventListener('click', () => switchGlossary(tab.dataset.lang));
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Deep link: ?ev=18 abre a evidência diretamente
  const evParam = new URLSearchParams(window.location.search).get('ev');
  if (evParam) {
    const evId = Number(evParam);
    if (EVIDENCES.some(e => e.id === evId)) openModal(evId);
  }
});
