import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'arquitetura',
    number: '01',
    title: 'Arquitetura',
    headline: 'Projetos residenciais e comerciais completos.',
    description: 'Do primeiro croqui à entrega técnica, concebemos construções enraizadas no lugar, pautadas pelo diálogo constante entre luz, topografia, escala e durabilidade estrutural.',
    scope: [
      'Estudo de viabilidade e implantação bioclimática',
      'Anteprojeto e modelagem espacial tridimensional',
      'Projeto legal e aprovação junto aos órgãos competentes',
      'Projeto executivo completo e compatibilização de engenharias',
      'Detalhamento construtivo arquitetônico autoral'
    ],
    materialsApproach: 'Concreto aparente, pedras minerais, estruturas híbridas de madeira e aço, vãos livres com grandes aberturas de luz natural.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'interiores',
    number: '02',
    title: 'Interiores',
    headline: 'Concepção de ambientes, materiais, mobiliário e iluminação.',
    description: 'Criamos atmosferas táteis e acolhedoras onde cada elemento — da textura do tecido ao encaixe milimétrico da marcenaria — contribui para uma vivência estética de serenidade e permanência.',
    scope: [
      'Layout distributivo e fluxos de circulação otimizados',
      'Desenho executivo de marcenaria e serralheria sob medida',
      'Curadoria de mobiliário moderno e contemporâneo',
      'Seleção e especificação de obras de arte e objetos artesanais',
      'Projeto luminotécnico com automação e cenários crepusculares'
    ],
    materialsApproach: 'Madeiras nobres certificadas, mármores nacionais e importados com acabamento levigado, linhos puros e latão escovado.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'reformas',
    number: '03',
    title: 'Reformas',
    headline: 'Transformação de espaços existentes preservando sua essência.',
    description: 'Respeitamos a história prévia e a alma do edifício existente, realizando intervenções precisas e cirúrgicas que atualizam infraestruturas e revelam novas qualidades de luz e amplitude.',
    scope: [
      'Diagnóstico estrutural e patrimonial preliminar',
      'Reconfiguração de plantas obsoletas em plantas integradas',
      'Recuperação e valorização de materiais originais nobres',
      'Modernização de instalações elétricas, hidráulicas e térmicas',
      'Acompanhamento e coordenação técnica de canteiro de obras'
    ],
    materialsApproach: 'Equilíbrio entre o patrimônio estrutural existente e novas inserções contemporâneas com linguagem clara e honesta.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'hospitality',
    number: '04',
    title: 'Hospitality',
    headline: 'Projetos para hotéis, pousadas e espaços de experiência.',
    description: 'Desenvolvemos destinos memoráveis onde o hóspede é convidado a desacelerar. Arquitetura como ferramenta de identidade e encantamento, integrando paisagem, serviços e hospitalidade sensorial.',
    scope: [
      'Masterplan territorial de ocupação e preservação ambiental',
      'Concepção de bangalôs, suítes e áreas de convivência social',
      'Integração de spas, piscinas naturais e pátios gastronômicos',
      'Design de experiência do hóspede e circulação discreta de serviços',
      'Sustentabilidade passiva e valorização da cultura local'
    ],
    materialsApproach: 'Fibras e madeiras regionais, alvenarias rústicas, piscinas em pedra natural e ventilação cruzada permanente.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'direcao-de-projeto',
    number: '05',
    title: 'Direção de projeto',
    headline: 'Coordenação estética e técnica para garantir coerência em todas as etapas.',
    description: 'Atuamos como curadores e guardiões da intenção do projeto, alinhando equipes de engenharia, fornecedores especializados e artesãos para que o resultado construído supere a promessa inicial do desenho.',
    scope: [
      'Supervisão contínua da fidelidade arquitetônica em obra',
      'Validação de protótipos de marcenaria, pedras e caixilhos',
      'Gestão estética de cronograma e refinamento de custos',
      'Relatórios fotográficos de evolução construtiva e qualidade',
      'Entrega final das chaves com vistoria criteriosa de acabamentos'
    ],
    materialsApproach: 'Rigor obsessivo nos encontros de planos, juntas de dilatação invisíveis e precisão milimétrica em cantos e transições.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'consultoria',
    number: '06',
    title: 'Consultoria',
    headline: 'Orientação estratégica para decisões arquitetônicas e espaciais.',
    description: 'Assessoramos clientes na escolha e aquisição de terrenos, avaliação de potencial construtivo, diretrizes de iluminação e curadoria artística de ambientes já construídos.',
    scope: [
      'Visita técnica a terrenos e imóveis antes da aquisição',
      'Análise de insolação, ventos dominantes e vistas potenciais',
      'Estudo conceitual rápido de viabilidade de ocupação',
      'Orientação para retrofit e valorização imobiliária autoral',
      'Pareceres técnicos e curadoria estética pontual'
    ],
    materialsApproach: 'Visão crítica apurada para desvelar o potencial oculto de cada espaço com o menor volume de intervenção necessária.',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=85&w=1200'
  }
];
