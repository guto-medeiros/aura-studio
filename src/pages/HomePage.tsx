import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { STUDIO_INFO } from '../data/studio';

export const HomePage: React.FC = () => {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const casaSerena = PROJECTS.find((p) => p.slug === 'casa-serena')!;
  const casaAtlas = PROJECTS.find((p) => p.slug === 'casa-atlas')!;
  const villaNova = PROJECTS.find((p) => p.slug === 'villa-nova')!;
  const aptoOliva = PROJECTS.find((p) => p.slug === 'apto-oliva')!;

  return (
    <div className="w-full">
      {/* 11. HOME — HERO */}
      <section
        id="hero-section"
        className="relative min-h-[95vh] lg:min-h-screen flex items-end pb-16 md:pb-24 pt-36 bg-[#11110F] text-[#F4F1EA] overflow-hidden"
      >
        {/* Full-bleed Editorial Architectural Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2400"
            alt="Arquitetura contemporânea residencial em concreto, pedra e madeira — Aura Studio"
            className="w-full h-full object-cover object-center opacity-45 scale-[1.02] transform transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11110F]/80 via-transparent to-transparent hidden lg:block" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Subtle Top Editorial Markers */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F4F1EA]/15 pb-6 mb-12 text-[11px] font-sans tracking-[0.25em] uppercase text-[#D8D3C9]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A88C62]" />
              AURA STUDIO · Architecture · Interiors · Spaces
            </span>
            <span className="text-[#A88C62]">São Paulo · Brasil</span>
          </div>

          {/* Asymmetric Typography Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-light leading-[1.05] tracking-tight text-[#F4F1EA]"
              >
                Arquitetura que <br />
                <span className="italic font-normal text-[#F4F1EA]">cria presença.</span>
              </motion.h1>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm md:text-base font-sans text-[#D8D3C9] font-light leading-relaxed max-w-md"
              >
                Projetamos espaços contemporâneos onde matéria, luz e proporção encontram uma forma de existir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  to="/projetos"
                  id="hero-cta-primary"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#F4F1EA] text-[#11110F] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#A88C62] hover:text-[#F4F1EA]"
                >
                  <span>Explorar projetos</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/estudio"
                  id="hero-cta-secondary"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#F4F1EA]/30 text-[#F4F1EA] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#F4F1EA] hover:bg-white/5"
                >
                  Conheça o estúdio
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. TRANSIÇÃO ENTRE HERO E CONTEÚDO */}
      <section id="transition-section" className="py-24 md:py-36 bg-[#F4F1EA] text-[#11110F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-[#D8D3C9] pt-12">
            <div className="lg:col-span-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#77746E]">
                01 / INTENÇÃO
              </span>
            </div>
            <div className="lg:col-span-9">
              <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#11110F] leading-tight italic">
                “Cada projeto começa antes do desenho.”
              </blockquote>
              <p className="mt-4 text-xs font-sans tracking-[0.2em] uppercase text-[#77746E]">
                Aura Studio · Princípio de Ateliê
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. MANIFESTO */}
      <section id="manifesto-section" className="py-24 md:py-36 bg-[#D8D3C9]/40 text-[#11110F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block">
                Manifesto Editorial
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] text-[#11110F]">
                Mais do que espaços. <br />
                <span className="italic font-normal">Experiências para habitar.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-6 text-base sm:text-lg font-sans text-[#11110F]/80 font-light leading-relaxed max-w-2xl">
                <p>
                  Para nós, arquitetura não é apenas composição.
                </p>
                <p>
                  É a relação entre luz e matéria, entre proporção e movimento, entre o espaço e quem o ocupa.
                </p>
                <p className="text-[#11110F] font-normal">
                  Criamos ambientes que não dependem do excesso para serem marcantes.
                </p>
              </div>

              <div className="pt-8 border-t border-[#77746E]/20 flex items-center justify-between">
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#77746E]">
                  Luz · Matéria · Proporção · Espaço · Tempo
                </span>
                <Link
                  to="/estudio"
                  className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#11110F] font-semibold hover:text-[#A88C62] transition-colors"
                >
                  <span>Sobre nossa prática</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. PROJETOS EM DESTAQUE (Composição Editorial Assimétrica) */}
      <section id="featured-projects" className="py-28 md:py-40 bg-[#F4F1EA] text-[#11110F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-6 border-b border-[#D8D3C9] pb-8">
            <div className="space-y-3">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
                Seleção de Obras
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#11110F]">
                Projetos selecionados
              </h2>
            </div>
            <p className="text-sm font-sans text-[#77746E] max-w-sm font-light leading-relaxed">
              Uma seleção de espaços concebidos entre arquitetura, matéria e experiência.
            </p>
          </div>

          {/* Editorial Asymmetrical Layout */}
          <div className="space-y-32 md:space-y-44">
            {/* Project 1: CASA SERENA (Grande Largura) */}
            <div className="group relative">
              <Link
                to={`/projetos/${casaSerena.slug}`}
                data-cursor="VER PROJETO"
                id="featured-casa-serena"
                className="block focus:outline-none"
              >
                <div className="overflow-hidden bg-[#D8D3C9] relative aspect-[16/9] md:aspect-[21/9]">
                  <img
                    src={casaSerena.heroImage}
                    alt={casaSerena.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#11110F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#A88C62]">
                      01 / Residencial · São Paulo · 2026
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#11110F] mt-1 group-hover:text-[#A88C62] transition-colors duration-300">
                      {casaSerena.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="text-xs font-sans text-[#77746E] max-w-md hidden md:block">
                      {casaSerena.tagline}
                    </p>
                    <span className="inline-flex items-center justify-center w-10 h-10 border border-[#11110F]/30 rounded-full group-hover:border-[#A88C62] group-hover:text-[#A88C62] transition-all">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Project 2 & 3: CASA ATLAS (Deslocado) + VILLA NOVA (Vertical) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Project 2: Casa Atlas - shifted column */}
              <div className="lg:col-span-7 group">
                <Link
                  to={`/projetos/${casaAtlas.slug}`}
                  data-cursor="VER PROJETO"
                  id="featured-casa-atlas"
                  className="block focus:outline-none"
                >
                  <div className="overflow-hidden bg-[#D8D3C9] relative aspect-[4/3]">
                    <img
                      src={casaAtlas.heroImage}
                      alt={casaAtlas.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-6 space-y-2">
                    <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#A88C62]">
                      02 / Residencial · Rio de Janeiro · 2026
                    </span>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-3xl sm:text-4xl font-light text-[#11110F] group-hover:text-[#A88C62] transition-colors duration-300">
                        {casaAtlas.title}
                      </h3>
                      <span className="text-xs font-mono text-[#77746E]">510 m²</span>
                    </div>
                    <p className="text-xs font-sans text-[#77746E] leading-relaxed max-w-md">
                      {casaAtlas.tagline}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Project 3: Villa Nova - vertical portrait aspect */}
              <div className="lg:col-span-5 group lg:pt-16">
                <Link
                  to={`/projetos/${villaNova.slug}`}
                  data-cursor="VER PROJETO"
                  id="featured-villa-nova"
                  className="block focus:outline-none"
                >
                  <div className="overflow-hidden bg-[#D8D3C9] relative aspect-[3/4]">
                    <img
                      src={villaNova.heroImage}
                      alt={villaNova.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-6 space-y-2">
                    <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#A88C62]">
                      03 / Hospitality · Bahia · 2025
                    </span>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-3xl sm:text-4xl font-light text-[#11110F] group-hover:text-[#A88C62] transition-colors duration-300">
                        {villaNova.title}
                      </h3>
                      <span className="text-xs font-mono text-[#77746E]">680 m²</span>
                    </div>
                    <p className="text-xs font-sans text-[#77746E] leading-relaxed">
                      {villaNova.tagline}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Project 4: APTO OLIVA (Composição mais compacta) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 space-y-6">
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
                  04 / Interiores · São Paulo · 2025
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#11110F]">
                  {aptoOliva.title}
                </h3>
                <p className="text-sm font-sans text-[#77746E] font-light leading-relaxed">
                  {aptoOliva.tagline}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/projetos/${aptoOliva.slug}`}
                    className="group inline-flex items-center gap-3 text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#11110F] pb-1 border-b border-[#11110F] hover:text-[#A88C62] hover:border-[#A88C62] transition-colors"
                  >
                    <span>Ver Estudo de Caso</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 group">
                <Link
                  to={`/projetos/${aptoOliva.slug}`}
                  data-cursor="VER PROJETO"
                  id="featured-apto-oliva"
                  className="block focus:outline-none"
                >
                  <div className="overflow-hidden bg-[#D8D3C9] relative aspect-[16/10]">
                    <img
                      src={aptoOliva.heroImage}
                      alt={aptoOliva.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Projects CTA Banner */}
          <div className="mt-28 md:mt-36 pt-12 border-t border-[#D8D3C9] flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#77746E]">
              Portfólio Completo de Projetos
            </span>
            <Link
              to="/projetos"
              id="view-all-projects-link"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#11110F] text-[#F4F1EA] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all hover:bg-[#A88C62]"
            >
              <span>Ver todos os projetos</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 22. FILOSOFIA */}
      <section id="philosophy-section" className="py-28 md:py-44 bg-[#11110F] text-[#F4F1EA] relative overflow-hidden">
        {/* Subtle architectural lines */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:6rem_6rem]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#A88C62] block mb-6">
              Princípios Fundamentais
            </span>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-[#F4F1EA] mb-12">
              Luz. Matéria. <br />
              <span className="italic font-normal text-[#D8D3C9]">Proporção.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-[#77746E]/30 text-[#D8D3C9] font-light">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#A88C62]">01 / LUZ</span>
                <p className="font-display text-2xl text-[#F4F1EA]">A luz revela.</p>
                <p className="text-xs font-sans leading-relaxed text-[#77746E]">
                  A iluminação natural guia o desenho e modula a experiência espacial ao longo das horas.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs text-[#A88C62]">02 / MATÉRIA</span>
                <p className="font-display text-2xl text-[#F4F1EA]">A matéria constrói.</p>
                <p className="text-xs font-sans leading-relaxed text-[#77746E]">
                  Pedra, madeira, concreto e metal com textura autêntica que envelhece com dignidade.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs text-[#A88C62]">03 / PROPORÇÃO</span>
                <p className="font-display text-2xl text-[#F4F1EA]">A proporção organiza.</p>
                <p className="text-xs font-sans leading-relaxed text-[#77746E]">
                  A harmonia de escalas que acolhe o corpo humano e gera uma sensação imediata de calma.
                </p>
              </div>
            </div>

            <p className="mt-14 text-sm md:text-base font-sans font-light text-[#D8D3C9]/80 italic max-w-2xl">
              “Entre eles, encontramos a essência de cada projeto.”
            </p>
          </div>
        </div>
      </section>

      {/* 23. PROCESSO (Como projetamos) */}
      <section id="process-section" className="py-28 md:py-36 bg-[#F4F1EA] text-[#11110F]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D8D3C9] gap-6">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
                Metodologia de Ateliê
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#11110F] mt-2">
                Como projetamos
              </h2>
            </div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#77746E]">
              Quatro etapas intencionais
            </p>
          </div>

          {/* Interactive Steps List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STUDIO_INFO.processSteps.map((step, idx) => {
              const isActive = activeProcessStep === idx;
              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveProcessStep(idx)}
                  className={`p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[300px] ${
                    isActive
                      ? 'bg-[#11110F] text-[#F4F1EA] border-[#11110F] shadow-lg'
                      : 'bg-white/40 border-[#D8D3C9] hover:border-[#A88C62]'
                  }`}
                >
                  <div className="space-y-4">
                    <span
                      className={`font-mono text-xs tracking-[0.25em] ${
                        isActive ? 'text-[#A88C62]' : 'text-[#77746E]'
                      }`}
                    >
                      {step.step}
                    </span>
                    <h3 className="font-display text-2xl font-light">
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs font-sans leading-relaxed italic ${
                        isActive ? 'text-[#D8D3C9]' : 'text-[#11110F]/80'
                      }`}
                    >
                      “{step.quote}”
                    </p>
                  </div>

                  <p
                    className={`text-[11px] font-sans leading-relaxed pt-4 border-t ${
                      isActive
                        ? 'border-white/15 text-[#D8D3C9]/70'
                        : 'border-[#D8D3C9] text-[#77746E]'
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Call to Action Section */}
      <section id="cta-contact-section" className="py-24 md:py-32 bg-[#D8D3C9]/30 text-[#11110F] border-t border-[#D8D3C9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center max-w-3xl">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-4">
            Inicie uma Conversa
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#11110F] leading-tight mb-6">
            Vamos conversar sobre o seu próximo espaço.
          </h2>
          <p className="text-sm md:text-base font-sans text-[#77746E] font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Conte-nos sobre o projeto que você imagina. Queremos entender o contexto antes de começar a desenhar.
          </p>
          <Link
            to="/contato"
            id="home-closing-cta"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#11110F] text-[#F4F1EA] text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#A88C62]"
          >
            <span>Iniciar diálogo de projeto</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
};
