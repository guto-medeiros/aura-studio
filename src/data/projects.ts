import { ProjectData } from '../types';

export const PROJECTS: ProjectData[] = [
  {
    id: 'casa-serena',
    slug: 'casa-serena',
    title: 'Casa Serena',
    category: 'Residencial',
    year: '2026',
    location: 'São Paulo, SP',
    status: 'Concluído',
    area: '420 m²',
    tagline: 'Uma residência concebida como uma sequência de espaços de transição entre interior e paisagem.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2000',
    heroSubtitle: 'Residencial · São Paulo · 2026',
    conceptShort: 'A casa nasce da intenção de aproximar arquitetura e paisagem através de planos contínuos de pedra clara e madeira.',
    materialsList: ['Pedra calcária clara', 'Madeira freijó maciça', 'Concreto aparente ripado', 'Grandes planos de vidro termoacústico'],
    paletteWords: ['Areia', 'Bege mineral', 'Verde natural', 'Branco quente'],
    specs: {
      area: '420 m²',
      location: 'São Paulo, SP',
      year: '2026',
      status: 'Concluído',
      typology: 'Habitação Unifamiliar',
      leadership: 'Marina Azevedo, Rafael Moura',
      photography: 'Studio Sombras & Luz'
    },
    narrative: {
      concept: {
        title: 'O conceito',
        body: [
          'A Casa Serena nasce da intenção de dissolver os limites convencionais entre a arquitetura e a paisagem natural circundante.',
          'Em vez de erguer uma barreira contra o exterior, o desenho propõe uma sequência contínua de planos horizontais e volumes baixos, onde o interior se abre gradualmente para os pátios protegidos.',
          'O ritmo do projeto é regido pela desaceleração: corredores que enquadram o verde, sombras profundas provocadas por beirais generosos e um silêncio visual que acolhe a rotina da família.'
        ],
        highlight: 'A casa não se impõe ao terreno; ela se estende como uma pausa construída sobre a topografia suave.'
      },
      context: {
        title: 'Contexto e Implantação',
        body: [
          'Inserida em um terreno em suave aclive na zona oeste de São Paulo, a residência foi orientada para capturar os ventos predominantes e a luz matinal nos setores sociais e íntimos.',
          'A topografia existente foi preservada ao máximo, distribuindo o programa em dois níveis sutilmente desfasados que respeitam o perfil natural do solo e resguardam a privacidade em relação à via pública.'
        ]
      },
      strategy: {
        title: 'Estratégia Arquitetônica',
        body: [
          'A estrutura parte de uma modulação rigorosa em concreto aparente e pilares esbeltos de aço escurecido, permitindo vãos livres generosos.',
          'Grandes caixilhos de correr recolhem-se inteiramente para dentro de bolsões embutidos na alvenaria de pedra, transformando a sala de estar e a varanda em uma única praça coberta.'
        ]
      },
      materials: {
        title: 'Materialidade e Tato',
        body: [
          'A seleção de materiais privilegia texturas honestas que envelhecem com dignidade ao longo do tempo.',
          'A pedra calcária clara do piso e dos muros externos dialoga com os painéis em madeira freijó natural, enquanto o concreto lavado traz o peso telúrico necessário para ancorar a composição.',
          'Tecidos de linho puro cru e serralheria em acabamento bronze acetinado completam a atmosfera tátil dos interiores.'
        ],
        highlight: 'Materiais naturais que não disfarçam sua passagem pelo tempo, mas ganham nobreza com o uso.'
      },
      light: {
        title: 'Luz e Atmosfera',
        body: [
          'A luz natural percorre os ambientes durante o dia, criando diferentes atmosferas ao longo das horas.',
          'Pelas manhãs, a luz rasante atravessa as brises de madeira projetando ritmos de sombra sobre os pisos minerais.',
          'Ao entardecer, os beirais filtram o calor e banham os interiores em um tom âmbar suave, reduzindo a necessidade de iluminação artificial até o anoitecer completo.'
        ]
      },
      spaces: {
        title: 'Organização Espacial',
        body: [
          'O setor social organiza-se em um grande pavilhão integrado com pé-direito generoso, conectado diretamente à cozinha silenciosa e à biblioteca voltada para o jardim íntimo.',
          'A ala íntima situa-se na porção mais resguardada do lote, garantindo que os dormitórios se abram para um terraço privativo pontuado por espécies nativas da Mata Atlântica.'
        ]
      },
      outcome: {
        title: 'O Habitar',
        body: [
          'O resultado final é uma arquitetura serena e desprovida de excessos formais, onde cada detalhe foi executado para proporcionar uma vivência contemplativa e profundamente conectada com o tempo natural.'
        ]
      }
    },
    gallery: [
      {
        id: 'cs-1',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600',
        title: 'Fachada e Beiral',
        caption: 'Fachada principal com planos de concreto ripado e pedra calcária em equilíbrio horizontal.',
        aspect: 'panoramic',
        tag: 'Fachada Externa'
      },
      {
        id: 'cs-2',
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1200',
        title: 'Estar e Integração',
        caption: 'Sala de estar principal totalmente aberta para o jardim através dos vãos desobstruídos.',
        aspect: 'wide',
        tag: 'Estar Principal'
      },
      {
        id: 'cs-3',
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=85&w=1200',
        title: 'Cozinha Silenciosa',
        caption: 'Ilha monolítica em pedra fosca e marcenaria artesanal em freijó ripado.',
        aspect: 'wide',
        tag: 'Cozinha'
      },
      {
        id: 'cs-4',
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=85&w=1200',
        title: 'Jardim de Transição',
        caption: 'Pátio interno com espelho d’água e vegetação nativa filtrando a luz sul.',
        aspect: 'tall',
        tag: 'Pátio Interno'
      },
      {
        id: 'cs-5',
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1200',
        title: 'Detalhe de Marcenaria',
        caption: 'Encaixes precisos entre a pedra mineral e a carpintaria autoral.',
        aspect: 'tall',
        tag: 'Detalhe Construtivo'
      },
      {
        id: 'cs-6',
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1600',
        title: 'Circulação e Luz Rasante',
        caption: 'Galeria de circulação onde fendas zenitais desenham sombras arquitetônicas silenciosas.',
        aspect: 'panoramic',
        tag: 'Circulação'
      }
    ],
    nextProjectSlug: 'casa-atlas'
  },
  {
    id: 'casa-atlas',
    slug: 'casa-atlas',
    title: 'Casa Atlas',
    category: 'Residencial',
    year: '2026',
    location: 'Rio de Janeiro, RJ',
    status: 'Em desenvolvimento',
    area: '510 m²',
    tagline: 'Uma arquitetura marcada por volumes monolíticos, aberturas precisas e uma relação constante com a paisagem.',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=85&w=2000',
    heroSubtitle: 'Residencial · Rio de Janeiro · 2026',
    conceptShort: 'Volumes austeros em concreto pigmentado escuro ancorados na encosta rochosa em direção ao horizonte atlântico.',
    materialsList: ['Concreto escuro aparente', 'Basalto escovado', 'Painéis de cumaru termo-tratado', 'Aço corten oxidado'],
    paletteWords: ['Grafite mineral', 'Cinza basalto', 'Madeira escura', 'Bronze profundo'],
    specs: {
      area: '510 m²',
      location: 'Rio de Janeiro, RJ',
      year: '2026',
      status: 'Em desenvolvimento',
      typology: 'Residência em Encosta',
      leadership: 'Marina Azevedo',
      photography: 'Studio Atlas Arquitetura'
    },
    narrative: {
      concept: {
        title: 'O conceito',
        body: [
          'A Casa Atlas é desenhada a partir de uma postura de firmeza e clareza geométrica diante da grandiosidade da encosta carioca.',
          'Em lugar de pavilhões transparentes frágeis, o projeto assume uma presença quase telúrica: dois blocos monolíticos de concreto escuro que parecem ter emergido da própria rocha matriz.',
          'A monumentalidade, contudo, é contida por aberturas cirúrgicas e vazios meditativos que enquadram o mar e a floresta como pinturas dinâmicas.'
        ],
        highlight: 'Uma presença construída que aceita a força da geografia sem competir com ela.'
      },
      context: {
        title: 'Implantação na Encosta',
        body: [
          'O terreno íngreme exigiu uma abordagem estrutural engenhosa. O volume inferior engasta-se na rocha, abrigando áreas técnicas e estúdio privativo.',
          'O volume superior projeta-se em balanço dramático de sete metros sobre a copa das árvores, criando uma sensação de levitação sobre a baía.'
        ]
      },
      strategy: {
        title: 'Volumetria e Escala',
        body: [
          'A volumetria explora a alternância entre solidez e vacuidade.',
          'A fachada frontal voltada para a rua revela apenas uma fenda vertical e uma porta pivotante esguia, garantindo inviolabilidade acústica e privacidade visual absoluta.'
        ]
      },
      materials: {
        title: 'Materialidade e Densidade',
        body: [
          'Concreto pigmentado com fuligem natural em tom grafite escuro confere peso tectônico inconfundível.',
          'Pisos em lajotas de basalto negro escovado recebem o toque dos pés, enquanto fechamentos em madeira cumaru temperam a frieza mineral com calor orgânico.'
        ],
        highlight: 'A matéria austera ganha vida sob a intensidade da luz tropical.'
      },
      light: {
        title: 'Luz Contrastante e Penumbra',
        body: [
          'Ao contrário da busca desenfreada pela claridade irrestrita, a Casa Atlas celebra o poder da penumbra arquitetônica.',
          'Pátios internos de sombra oferecem alívio visual da claridade extrema da costa, com frestas estratégicas que guiam o olhar para o horizonte azul distante.'
        ]
      },
      spaces: {
        title: 'Circulação Escultórica',
        body: [
          'Uma escadaria monolítica em concreto aparente conecta os níveis como um desfiladeiro escavado na matéria.',
          'O percurso conduz o observador da compressão da entrada à ampla liberação visual da sala principal, cujo teto em balanço abriga a piscina de borda infinita.'
        ]
      },
      outcome: {
        title: 'O Ensaio Construtivo',
        body: [
          'Atualmente em fase executiva de fundações especiais, a Casa Atlas sintetiza nossa busca por uma arquitetura permanente, capaz de resistir ao tempo e às modas transitórias.'
        ]
      }
    },
    gallery: [
      {
        id: 'ca-1',
        url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=85&w=1600',
        title: 'Balanço Sobre a Encosta',
        caption: 'Volume escultórico em concreto escuro projetando-se sobre a vegetação nativa.',
        aspect: 'panoramic',
        tag: 'Volumetria'
      },
      {
        id: 'ca-2',
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=1200',
        title: 'Transição Mineral',
        caption: 'Basalto escovado e painéis de cumaru no living com vista para o mar.',
        aspect: 'wide',
        tag: 'Living'
      },
      {
        id: 'ca-3',
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=85&w=1200',
        title: 'Abertura Cirúrgica',
        caption: 'Fendas verticais que dosam a entrada de luz e emolduram a rocha natural.',
        aspect: 'tall',
        tag: 'Luz Zenital'
      },
      {
        id: 'ca-4',
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=85&w=1200',
        title: 'Pátio de Penumbra',
        caption: 'Área protegida da insolação direta para recolhimento e leitura.',
        aspect: 'tall',
        tag: 'Pátio'
      },
      {
        id: 'ca-5',
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=1600',
        title: 'Horizonte Infinito',
        caption: 'A água do espelho reflete o céu fluminense no crepúsculo.',
        aspect: 'panoramic',
        tag: 'Vista Externa'
      }
    ],
    nextProjectSlug: 'villa-nova'
  },
  {
    id: 'villa-nova',
    slug: 'villa-nova',
    title: 'Villa Nova',
    category: 'Hospitality',
    year: '2025',
    location: 'Bahia, Brasil',
    status: 'Concluído',
    area: '680 m²',
    tagline: 'Um refúgio contemporâneo onde arquitetura e natureza coexistem sem hierarquia.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=85&w=2000',
    heroSubtitle: 'Hospitality · Bahia · 2025',
    conceptShort: 'Pavilhões abertos construídos com técnicas ancestrais reinterpretadas sob uma métrica arquitetônica contemporânea.',
    materialsList: ['Pedra arenito regional', 'Madeira biriba e tatajuba', 'Pisos em cimento queimado claro', 'Fibras de palha trançada'],
    paletteWords: ['Areia fina', 'Verde restinga', 'Terracota suave', 'Madeira quente'],
    specs: {
      area: '680 m²',
      location: 'Trancoso, Bahia',
      year: '2025',
      status: 'Concluído',
      typology: 'Eco-Hospitality Boutique',
      leadership: 'Marina Azevedo, Clara Nunes',
      photography: 'Acervo Aura Studio'
    },
    narrative: {
      concept: {
        title: 'O conceito',
        body: [
          'Projetada como uma pousada boutique intimista na costa sul da Bahia, a Villa Nova parte da premissa de que o verdadeiro luxo contemporâneo reside na simplicidade descalça e no tempo suspenso.',
          'Em vez de um edifício único concentrado, fragmentamos a ocupação em uma série de pequenos pavilhões independentes costurados por passarelas suspensas de madeira entre coqueirais.',
          'A brisa marítima circula livremente por meio de tramas vazadas de ripados e beirais amplos, dispensando sistemas artificiais de climatização na maior parte do ano.'
        ],
        highlight: 'Não há fronteira nítida entre o jardim litorâneo e a sala de repouso: o chão é a própria continuidade da terra.'
      },
      context: {
        title: 'Relação com a Paisagem',
        body: [
          'A implantação evitou o corte de qualquer espécime arbóreo nativo.',
          'Cada pavilhão encontrou sua posição exata na clareira pré-existente da restinga, orientando-se para o som das ondas e a sombra natural da copa das árvores centenárias.'
        ]
      },
      strategy: {
        title: 'Áreas Externas e Convívio',
        body: [
          'A piscina central, revestida em pedra hijau de tons terrosos, reflete o céu tropical sem reflexos artificiais.',
          'Lounges abertos, cobertos por esteiras de biriba local, funcionam como salas de estar sob o ar livre onde os hóspedes compartilham conversas e leituras.'
        ]
      },
      materials: {
        title: 'Materialidade Vernacular e Rigor Técnico',
        body: [
          'Trabalhamos lado a lado com mestres artesãos locais para talhar a pedra arenito e estruturar as madeiras nativas certificadas de manejo sustentável.',
          'Mobiliário desenhado sob medida pelo estúdio em linho cru, esteiras de piaçava e cerâmica terracota cozida em fornos da região completam o repertório sensorial.'
        ],
        highlight: 'Saberes construtivos ancestrais combinados à precisão geométrica do traço contemporâneo.'
      },
      light: {
        title: 'Iluminação Cênica e Crepuscular',
        body: [
          'A iluminação noturna foi pensada com delicadeza máxima para não poluir visualmente o céu estrelado nem perturbar a fauna local.',
          'Luzes indiretas a 2400K posicionadas próximas ao chão desenham os caminhos na areia, conferindo um clima de mistério acolhedor e contemplativo.'
        ]
      },
      spaces: {
        title: 'Experiência do Hóspede',
        body: [
          'As seis suítes contam com banheiros abertos para jardins privados com duchas sob a copa das árvores.',
          'A transição entre o quarto fechado e a varanda coberta é feita por portas camarão de venezianas móveis que controlam vento, privacidade e luz com um simples toque manual.'
        ]
      },
      outcome: {
        title: 'Memória Espacial',
        body: [
          'A Villa Nova consolidou-se como uma referência de hospitalidade sustentável e sensível no Brasil, premiada pela delicadeza com que respeitou e enalteceu a paisagem da Bahia.'
        ]
      }
    },
    gallery: [
      {
        id: 'vn-1',
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=85&w=1600',
        title: 'Pavilhão Central',
        caption: 'Piscina mineral e pergolado em biriba integrados ao paisagismo nativo da restinga.',
        aspect: 'panoramic',
        tag: 'Piscina e Deck'
      },
      {
        id: 'vn-2',
        url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=85&w=1200',
        title: 'Estar Descalço',
        caption: 'Lounge aberto com piso em cimento queimado e sofás baixos em linho cru.',
        aspect: 'wide',
        tag: 'Lounge'
      },
      {
        id: 'vn-3',
        url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=1200',
        title: 'Suíte Contemplativa',
        caption: 'Quarto com ventilação cruzada permanente e vista livre para o coqueiral.',
        aspect: 'tall',
        tag: 'Suíte'
      },
      {
        id: 'vn-4',
        url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=85&w=1200',
        title: 'Banho sob a Copa',
        caption: 'Jardim de banho com piso drenante em seixos e ducha ao ar livre.',
        aspect: 'tall',
        tag: 'Banho Externo'
      },
      {
        id: 'vn-5',
        url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=85&w=1600',
        title: 'Passarela Crepuscular',
        caption: 'Caminho suspenso entre os pavilhões iluminado por balizadores discretos.',
        aspect: 'panoramic',
        tag: 'Paisagem'
      }
    ],
    nextProjectSlug: 'apto-oliva'
  },
  {
    id: 'apto-oliva',
    slug: 'apto-oliva',
    title: 'Apto Oliva',
    category: 'Interiores',
    year: '2025',
    location: 'São Paulo, SP',
    status: 'Concluído',
    area: '180 m²',
    tagline: 'Uma intervenção precisa em um apartamento urbano, construída a partir de tons naturais, madeira e pedra.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=2000',
    heroSubtitle: 'Interiores · São Paulo · 2025',
    conceptShort: 'Reorganização espacial e curadoria apurada de texturas em um refúgio acolhedor no coração da metrópole.',
    materialsList: ['Mármore Verde Alpi fosco', 'Carvalho europeu natural', 'Alvenaria com massa mineral cal', 'Latonaria escovada'],
    paletteWords: ['Oliva suave', 'Creme mineral', 'Carvalho mel', 'Preto acetinado'],
    specs: {
      area: '180 m²',
      location: 'Jardins, São Paulo, SP',
      year: '2025',
      status: 'Concluído',
      typology: 'Reforma de Interiores Residenciais',
      leadership: 'Clara Nunes, Rafael Moura',
      photography: 'Studio Sombras & Luz'
    },
    narrative: {
      concept: {
        title: 'O conceito',
        body: [
          'Localizado em um edifício modernista dos anos 70 nos Jardins, o Apto Oliva demandava uma transformação radical na fluidez da planta sem apagar a memória das vigas e pilares originais.',
          'Nossa intervenção eliminou divisórias excessivas para criar uma sucessão contínua de planos visuais que conectam a copa das árvores da rua ao interior acolhedor.',
          'A paleta parte do verde oliva profundo do mármore fosco em diálogo com o calor aconchegante do carvalho escandinavo.'
        ],
        highlight: 'A busca por um refúgio cosmopolita que substitui o ruído urbano por uma sensação de calma imediata.'
      },
      context: {
        title: 'Layout e Circulação Fluida',
        body: [
          'A antiga compartimentação cedeu lugar a um volume central de marcenaria que funciona como eixo articulador.',
          'Esse bloco multifuncional esconde o lavabo, rouparia e apoio para equipamentos técnicos, permitindo que a área social respire livremente sem pilares aparentes no centro do caminho.'
        ]
      },
      strategy: {
        title: 'Mobiliário e Curadoria Autoral',
        body: [
          'A curadoria reuniu peças clássicas do design moderno brasileiro — como a poltrona Mole de Sérgio Rodrigues e criações de Lina Bo Bardi — combinadas a itens contemporâneos desenhados exclusivamente pelo Aura Studio.',
          'A mesa de jantar em tora maciça e as luminárias em papel washi japonês pontuam o espaço com equilíbrio escultórico.'
        ]
      },
      materials: {
        title: 'A Matéria Tátil',
        body: [
          'As paredes receberam pintura mineral à base de cal e pó de mármore, conferindo uma superfície sutilmente aveludada que reage à luz natural.',
          'No piso social, assoalho em tábuas corridas de carvalho natural com acabamento em óleo fosco convida ao caminhar descalço.'
        ],
        highlight: 'Texturas aveludadas que acolhem o olhar e criam profundidade silenciosa.'
      },
      light: {
        title: 'Iluminação Arquitetônica',
        body: [
          'A luz artificial é estritamente indireta e pontual.',
          'Sancas ocultas lavam as paredes minerais, enquanto luminárias de chão e abajures em cerâmica artesanal criam pequenas ilhas de aconchego para leitura e descanso noturno.'
        ]
      },
      spaces: {
        title: 'Cozinha e Convivência',
        body: [
          'A cozinha pode ser totalmente integrada ao living através de portas de correr em palhinha trançada, adaptando-se do preparo descontraído com amigos ao recolhimento íntimo da manhã.'
        ]
      },
      outcome: {
        title: 'A Vida no Espaço',
        body: [
          'O Apto Oliva tornou-se o lar definitivo de um casal de colecionadores de arte que encontrou na arquitetura do Aura Studio a moldura perfeita para viver cercado de beleza e tranquilidade.'
        ]
      }
    },
    gallery: [
      {
        id: 'ao-1',
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1600',
        title: 'Living e Luz Natural',
        caption: 'Estar com marcenaria em carvalho e sofá sob medida em tecido boucle natural.',
        aspect: 'panoramic',
        tag: 'Living Integrado'
      },
      {
        id: 'ao-2',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200',
        title: 'Bancada em Mármore Oliva',
        caption: 'Cozinha com ilha esculpida em mármore fosco e ferragens escurecidas.',
        aspect: 'wide',
        tag: 'Cozinha'
      },
      {
        id: 'ao-3',
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=85&w=1200',
        title: 'Quarto Principal',
        caption: 'Painéis acústicos de linho e cabeceira baixa em madeira natural.',
        aspect: 'tall',
        tag: 'Suíte Master'
      },
      {
        id: 'ao-4',
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1200',
        title: 'Banho Monolítico',
        caption: 'Cuba esculpida em bloco maciço e iluminação difusa zenital.',
        aspect: 'tall',
        tag: 'Banheiro'
      },
      {
        id: 'ao-5',
        url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=85&w=1600',
        title: 'Detalhe de Curadoria',
        caption: 'Composição de cerâmicas autorais e livros de arte na estante de carvalho.',
        aspect: 'panoramic',
        tag: 'Curadoria'
      }
    ],
    nextProjectSlug: 'casa-serena'
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
