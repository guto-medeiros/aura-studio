import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 md:pt-44 pb-32 bg-[#F4F1EA] text-[#11110F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-[#D8D3C9] pb-16 mb-24">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-4">
            Áreas de Prática
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
            <div className="lg:col-span-7">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-[#11110F] leading-tight">
                Serviços
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="font-display text-2xl md:text-3xl text-[#77746E] font-light italic leading-relaxed">
                Do planejamento conceitual à coordenação obsessiva do canteiro.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Presentation of 6 Services */}
        <div className="space-y-28 md:space-y-36">
          {SERVICES.map((service, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={service.id}
                id={`service-${service.id}`}
                className="pt-12 border-t border-[#D8D3C9]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-widest text-[#A88C62]">
                        {service.number}
                      </span>
                      <span className="w-8 h-[1px] bg-[#A88C62]" />
                      <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#77746E]">
                        Atuação Especializada
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#11110F]">
                      {service.title}
                    </h2>

                    <p className="font-display text-xl text-[#77746E] font-light italic">
                      {service.headline}
                    </p>

                    <p className="text-sm sm:text-base font-sans font-light text-[#11110F]/80 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Scope Checklist */}
                    <div className="space-y-3 pt-4">
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#77746E] block">
                        Entregas e escopo de atuação:
                      </span>
                      <ul className="space-y-2 text-xs font-sans text-[#11110F]/85 font-light">
                        {service.scope.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check size={14} className="text-[#A88C62] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Material/Technical Focus */}
                    <div className="pt-4 border-t border-[#D8D3C9]/70">
                      <span className="text-[10px] font-mono tracking-wider text-[#A88C62] block mb-1">
                        FOCO MATERIAL & TÉCNICO
                      </span>
                      <p className="text-xs font-sans text-[#77746E]">
                        {service.materialsApproach}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/contato"
                        className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#11110F] font-semibold hover:text-[#A88C62] transition-colors"
                      >
                        <span>Solicitar proposta para {service.title.toLowerCase()}</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="overflow-hidden bg-[#D8D3C9] aspect-[4/3] relative">
                      <img
                        src={service.image}
                        alt={`Aura Studio — ${service.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Tailored Custom Project Section */}
        <div className="mt-32 pt-16 border-t border-[#D8D3C9] bg-[#D8D3C9]/30 p-8 md:p-14 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-3">
            Demandas Singulares
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-light text-[#11110F] mb-4">
            Cada cliente traz um contexto irrepetível.
          </h3>
          <p className="text-sm font-sans text-[#77746E] leading-relaxed mb-8 max-w-xl mx-auto font-light">
            Não aplicamos modelos pré-fabricados. Ajustamos nosso modelo de atendimento para atender à singularidade do seu terreno, cronograma e estilo de vida.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#11110F] text-[#F4F1EA] text-xs font-sans font-medium uppercase tracking-[0.2em] hover:bg-[#A88C62] transition-colors"
          >
            <span>Iniciar diálogo de projeto</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
