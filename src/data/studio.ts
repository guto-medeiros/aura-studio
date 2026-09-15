import { TeamMember } from '../types';

export const STUDIO_INFO = {
  name: 'Aura Studio',
  tagline: 'Arquitetura que cria presença.',
  manifestoLead: 'Mais do que espaços. Experiências para habitar.',
  manifestoBody: [
    'Para nós, arquitetura não é apenas composição.',
    'É a relação entre luz e matéria, entre proporção e movimento, entre o espaço e quem o ocupa.',
    'Criamos ambientes que não dependem do excesso para serem marcantes.'
  ],
  quoteIntention: 'Cada projeto começa antes do desenho.',
  philosophyHeadline: 'Luz. Matéria. Proporção.',
  philosophyBody: [
    'Três elementos orientam nosso trabalho.',
    'A luz revela.',
    'A matéria constrói.',
    'A proporção organiza.',
    'Entre eles, encontramos a essência de cada projeto.'
  ],
  studioIntroTitle: 'Um escritório pequeno por escolha. Grande na atenção aos detalhes.',
  studioIntroText: 'O Aura Studio nasceu da vontade de criar uma arquitetura mais silenciosa, precisa e humana. Trabalhamos de forma próxima em cada projeto, buscando compreender não apenas o espaço, mas as pessoas que irão habitá-lo.',
  stats: [
    { number: '12+', label: 'Projetos desenvolvidos' },
    { number: '08', label: 'Cidades' },
    { number: '06', label: 'Anos de prática' }
  ],
  approach: [
    {
      title: 'Silenciosa e Autoral',
      description: 'Rejeitamos o ruído de tendências passageiras e exibicionismos vazios. Nossos projetos buscam uma calma elegante onde os materiais expressam sua nobreza intrínseca.'
    },
    {
      title: 'A Matéria como Linguagem',
      description: 'Pedra, madeira, concreto e metal são empregados em seu estado mais autêntico. Acreditamos no envelhecimento digno das superfícies e na textura palpável de cada encontro construtivo.'
    },
    {
      title: 'Precisão e Proporção',
      description: 'A harmonia das dimensões é tratada com rigor quase musical. O desenho das frestas, a altura dos beirais e a modulação dos vãos respondem a um cálculo cuidadoso de ritmo e equilíbrio.'
    },
    {
      title: 'Escala Humana e Convivência',
      description: 'Projetamos para corpos reais que habitam, tocam e sentem. A arquitetura ganha sentido quando acolhe a rotina diária com fluidez, conforto térmico e generosidade sensorial.'
    }
  ],
  processSteps: [
    {
      step: '01',
      title: 'Escutar',
      quote: 'Entendemos o contexto, as pessoas e o modo de viver ou trabalhar naquele espaço.',
      detail: 'Antes de qualquer traço, ouvimos com atenção as aspirações, rotinas e memórias afetivas. Visitamos o terreno em diferentes horários para compreender o vento, a topografia e a insolação.'
    },
    {
      step: '02',
      title: 'Conceituar',
      quote: 'Transformamos necessidades em uma direção arquitetônica clara.',
      detail: 'Definimos a essência do projeto através de croquis conceituais, maquetes de estudo e moodboards de materiais reais. Estabelecemos as diretrizes estruturais e bioclimáticas fundamentais.'
    },
    {
      step: '03',
      title: 'Materializar',
      quote: 'Desenvolvemos arquitetura, interiores, materiais, iluminação e detalhes.',
      detail: 'Elaboramos projetos executivos completos com detalhamentos de marcenaria, paginações de pedra e especificações de iluminação. Coordenamos as engenharias com precisão cirúrgica.'
    },
    {
      step: '04',
      title: 'Entregar',
      quote: 'Acompanhamos o projeto até que a ideia se torne espaço.',
      detail: 'Supervisionamos a execução da obra lado a lado com os mestres construtores. Asseguramos que cada junção e acabamento correspondam exatamente ao rigor planejado.'
    }
  ],
  contact: {
    address: 'Alameda Gabriel Monteiro da Silva, 1420 — Jardim Paulistano',
    city: 'São Paulo, SP — Brasil',
    postalCode: 'CEP 01442-001',
    email: 'contato@aurastudio.arq.br',
    pressEmail: 'imprensa@aurastudio.arq.br',
    phone: '+55 11 3088-2940',
    instagram: '@aurastudio.arq',
    pinterest: 'aurastudio_arq',
    linkedin: 'aura-studio-arquitetura'
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Marina Azevedo',
    role: 'Arquiteta · Direção',
    bio: 'Formada pela FAU-USP com passagens por ateliês em Lisboa e Tóquio. Lidera a direção conceitual e estética do estúdio, com olhar aguçado para a relação entre luz zenital e silêncio espacial.',
    focus: 'Direção Criativa & Arquitetura',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=800'
  },
  {
    name: 'Rafael Moura',
    role: 'Arquiteto · Desenvolvimento',
    bio: 'Especialista em estruturas contemporâneas e compatibilização tecnológica. Coordena a viabilidade técnica, o desenvolvimento executivo e o rigor construtivo em canteiro.',
    focus: 'Desenvolvimento Técnico & Coordenação',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=85&w=800'
  },
  {
    name: 'Clara Nunes',
    role: 'Interiores · Materiais',
    bio: 'Arquiteta com mestrado em Design de Mobiliário e Artesanato Têxtil em Milão. Dedica-se à pesquisa tátil de matérias-primas naturais, curadoria de arte e desenho de marcenaria autoral.',
    focus: 'Atmosfera, Têxteis & Curadoria',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=85&w=800'
  }
];
