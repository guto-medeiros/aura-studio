import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STUDIO_INFO, TEAM_MEMBERS } from '../data/studio';

export const StudioPage: React.FC = () => {
  return (
    <div className="pt-32 md:pt-44 pb-32 bg-[#F4F1EA] text-[#11110F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Heading */}
        <div className="border-b border-[#D8D3C9] pb-16 mb-20">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-4">
            Sobre o Aura Studio
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#11110F] leading-[1.08]">
                Um escritório pequeno por escolha. <br />
                <span className="italic font-normal">Grande na atenção aos detalhes.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pt-4">
              <p className="text-base font-sans text-[#77746E] font-light leading-relaxed">
                {STUDIO_INFO.studioIntroText}
              </p>
            </div>
          </div>
        </div>

        {/* Fictional Studio Metric Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-14 border-b border-[#D8D3C9] mb-24">
          {STUDIO_INFO.stats.map((stat, i) => (
            <div key={i} className="space-y-2 border-l border-[#A88C62] pl-6">
              <span className="font-display text-5xl md:text-6xl font-light text-[#11110F]">
                {stat.number}
              </span>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#77746E]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Atmosphere Banner */}
        <div className="mb-28 overflow-hidden bg-[#D8D3C9] aspect-[16/8] md:aspect-[21/9] relative">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=2000"
            alt="Mesa de ateliê de arquitetura com amostras de pedras e madeira — Aura Studio"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#11110F]/80 backdrop-blur-sm text-[#F4F1EA] px-4 py-2 text-xs font-sans tracking-widest uppercase">
            Atelier Aura Studio · São Paulo
          </div>
        </div>

        {/* Seção sobre Abordagem */}
        <div className="mb-32">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-2">
              Diretrizes de Atuação
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#11110F]">
              Nossa abordagem
            </h2>
            <p className="text-sm font-sans text-[#77746E] mt-3 font-light leading-relaxed">
              Como articulamos intenção, técnica e sensibilidade em cada projeto que desenvolvemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {STUDIO_INFO.approach.map((item, idx) => (
              <div key={idx} className="space-y-4 pt-6 border-t border-[#D8D3C9]">
                <span className="text-[11px] font-mono tracking-widest text-[#A88C62]">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-light text-[#11110F]">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-[#77746E] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipe Conceitual (Sem parecer currículo tradicional) */}
        <div className="pt-20 border-t border-[#D8D3C9]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-2">
                As Mãos por Trás do Desenho
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#11110F]">
                Equipe
              </h2>
            </div>
            <p className="text-xs font-sans tracking-widest uppercase text-[#77746E]">
              Corpo técnico e criativo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {TEAM_MEMBERS.map((member, idx) => (
              <article key={idx} className="space-y-5 group">
                <div className="overflow-hidden bg-[#D8D3C9] aspect-[3/4] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-[#11110F]/70 text-[#F4F1EA] px-2 py-0.5 backdrop-blur-sm">
                    {member.focus}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-light text-[#11110F]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#A88C62]">
                    {member.role}
                  </p>
                  <p className="text-xs font-sans text-[#77746E] font-light leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing Contact Prompt */}
        <div className="mt-32 pt-16 border-t border-[#D8D3C9] flex flex-col md:flex-row items-center justify-between gap-8 bg-[#11110F] text-[#F4F1EA] p-8 md:p-14">
          <div className="space-y-2">
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
              Diálogo Inicial
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-light">
              Deseja apresentar seu projeto ao estúdio?
            </h3>
            <p className="text-xs font-sans text-[#D8D3C9]/80 max-w-lg">
              Agendamos reuniões preliminares presenciais em nosso atelier ou virtuais para projetos em outras localidades.
            </p>
          </div>
          <Link
            to="/contato"
            className="px-8 py-4 bg-[#F4F1EA] text-[#11110F] text-xs font-sans font-medium uppercase tracking-[0.2em] hover:bg-[#A88C62] hover:text-[#F4F1EA] transition-colors whitespace-nowrap"
          >
            Entrar em contato
          </Link>
        </div>
      </div>
    </div>
  );
};
