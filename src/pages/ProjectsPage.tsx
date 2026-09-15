import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectCategory } from '../types';

type FilterType = 'Todos' | ProjectCategory;

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');

  const filters: FilterType[] = ['Todos', 'Residencial', 'Interiores', 'Hospitality'];

  const filteredProjects = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 md:pt-44 pb-32 bg-[#F4F1EA] text-[#11110F] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-[#D8D3C9] pb-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-3">
                Portfólio Autoral
              </span>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-[#11110F] leading-none">
                Projetos
              </h1>
            </div>

            <p className="font-display text-2xl md:text-3xl text-[#77746E] font-light italic max-w-md">
              Espaços pensados para permanecer.
            </p>
          </div>

          {/* Functional Category Filters */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-12 pt-6 border-t border-[#D8D3C9]/60">
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E] mr-2">
              Filtrar por:
            </span>
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  id={`filter-${filter.toLowerCase()}`}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-xs font-sans tracking-[0.15em] uppercase transition-all duration-300 relative ${
                    isActive
                      ? 'bg-[#11110F] text-[#F4F1EA]'
                      : 'bg-transparent text-[#77746E] hover:text-[#11110F] border border-[#D8D3C9] hover:border-[#11110F]'
                  }`}
                >
                  <span>{filter}</span>
                  {filter !== 'Todos' && (
                    <span className="ml-1.5 text-[9px] opacity-60">
                      ({PROJECTS.filter((p) => p.category === filter).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Asymmetrical column spanning for magazine-like editorial cadence
              const isEven = idx % 2 === 0;
              const colSpan = isEven ? 'md:col-span-7' : 'md:col-span-5 md:pt-16';
              const aspect = isEven ? 'aspect-[16/10]' : 'aspect-[4/5]';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`${colSpan} group`}
                >
                  <Link
                    to={`/projetos/${project.slug}`}
                    data-cursor="VER PROJETO"
                    id={`project-card-${project.slug}`}
                    className="block focus:outline-none"
                  >
                    {/* Image Container */}
                    <div className={`relative overflow-hidden bg-[#D8D3C9] ${aspect}`}>
                      <img
                        src={project.heroImage}
                        alt={`${project.title} — ${project.category} em ${project.location}`}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Technical Info Preview on Hover (No shadow, pure editorial typography) */}
                      <div className="absolute inset-0 bg-[#11110F]/65 p-6 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#F4F1EA]">
                        <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.2em] text-[#A88C62]">
                          <span>{project.specs.area}</span>
                          <span>{project.specs.status}</span>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-sans text-[#D8D3C9] line-clamp-3 leading-relaxed">
                            {project.conceptShort}
                          </p>
                          <div className="flex flex-wrap gap-1 pt-2">
                            {project.materialsList.slice(0, 2).map((mat, i) => (
                              <span
                                key={i}
                                className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-white/10 text-[#F4F1EA]"
                              >
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[11px] tracking-[0.2em] uppercase font-sans">
                          <span>Ver Estudo de Caso</span>
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Meta Information Underneath */}
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E]">
                        <span>
                          {project.category} · {project.location}
                        </span>
                        <span className="font-mono">{project.year}</span>
                      </div>

                      <div className="flex items-baseline justify-between">
                        <h2 className="font-display text-2xl sm:text-3xl font-light text-[#11110F] group-hover:text-[#A88C62] transition-colors duration-300">
                          {project.title}
                        </h2>
                        <span className="text-xs font-sans tracking-widest text-[#A88C62] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline">
                          EXPLORAR →
                        </span>
                      </div>

                      <p className="text-xs font-sans text-[#77746E] font-light leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Contact Inquiry Strip */}
        <div className="mt-32 pt-16 border-t border-[#D8D3C9] flex flex-col md:flex-row items-center justify-between gap-6 bg-[#D8D3C9]/30 p-8 md:p-12">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-[#11110F]">
              Possui um terreno ou imóvel para transformar?
            </h3>
            <p className="text-xs font-sans text-[#77746E] mt-1 tracking-wider uppercase">
              Atendemos projetos residenciais, interiores e hospitality em todo o Brasil.
            </p>
          </div>
          <Link
            to="/contato"
            className="px-6 py-3.5 bg-[#11110F] text-[#F4F1EA] text-xs font-sans font-medium uppercase tracking-[0.2em] hover:bg-[#A88C62] transition-colors duration-300"
          >
            Fale com os arquitetos
          </Link>
        </div>
      </div>
    </div>
  );
};
