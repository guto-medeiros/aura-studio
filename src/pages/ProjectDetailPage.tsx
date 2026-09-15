import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { getProjectBySlug, PROJECTS } from '../data/projects';
import { Lightbox } from '../components/Lightbox';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  const nextProject = PROJECTS.find((p) => p.slug === project.nextProjectSlug) || PROJECTS[0];

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#F4F1EA] text-[#11110F]">
      {/* 1. HERO DO PROJETO */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-end pb-16 md:pb-24 pt-36 bg-[#11110F] text-[#F4F1EA] overflow-hidden">
        {/* Full-width Hero Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-50 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Back Navigation & Breadcrumb */}
          <div className="flex items-center justify-between border-b border-[#F4F1EA]/15 pb-6 mb-12">
            <Link
              to="/projetos"
              className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#D8D3C9] hover:text-[#A88C62] transition-colors"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              <span>Voltar aos Projetos</span>
            </Link>

            <span className="text-xs font-mono tracking-widest text-[#A88C62]">
              {project.specs.status}
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#A88C62] block">
              {project.heroSubtitle}
            </span>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-light text-[#F4F1EA] leading-[1.05]">
              {project.title}
            </h1>

            <p className="font-display text-xl sm:text-2xl md:text-3xl font-light text-[#D8D3C9] italic leading-relaxed max-w-2xl">
              “{project.tagline}”
            </p>
          </div>
        </div>
      </section>

      {/* 2. INFORMAÇÕES TÉCNICAS (Ficha Técnica Editorial) */}
      <section className="border-b border-[#D8D3C9] py-14 bg-[#D8D3C9]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-xs font-sans">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block mb-1">
                Área
              </span>
              <span className="font-mono text-sm text-[#11110F] font-medium">
                {project.specs.area}
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block mb-1">
                Localização
              </span>
              <span className="text-[#11110F] font-medium">
                {project.specs.location}
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block mb-1">
                Ano
              </span>
              <span className="font-mono text-sm text-[#11110F] font-medium">
                {project.specs.year}
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block mb-1">
                Tipologia
              </span>
              <span className="text-[#11110F] font-medium">
                {project.specs.typology}
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block mb-1">
                Autoria
              </span>
              <span className="text-[#11110F] font-medium">
                {project.specs.leadership}
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block mb-1">
                Fotografia
              </span>
              <span className="text-[#11110F] font-medium">
                {project.specs.photography || 'Studio Aura'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONCEITO E NARRATIVA ARQUITETÔNICA */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Concept Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-baseline mb-24">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-2">
                01 / Narrativa
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#11110F]">
                {project.narrative.concept.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg font-sans font-light text-[#11110F]/85 leading-relaxed">
              {project.narrative.concept.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {project.narrative.concept.highlight && (
                <blockquote className="pt-6 pb-2 font-display text-2xl sm:text-3xl text-[#11110F] italic border-l-2 border-[#A88C62] pl-6 my-6">
                  “{project.narrative.concept.highlight}”
                </blockquote>
              )}
            </div>
          </div>

          {/* Context & Architectural Strategy Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t border-[#D8D3C9]">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#77746E]">
                CONTEXTO & IMPLANTAÇÃO
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#11110F]">
                {project.narrative.context.title}
              </h3>
              <div className="space-y-4 text-sm font-sans font-light text-[#77746E] leading-relaxed">
                {project.narrative.context.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#77746E]">
                ESTRATÉGIA CONSTRUTIVA
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#11110F]">
                {project.narrative.strategy.title}
              </h3>
              <div className="space-y-4 text-sm font-sans font-light text-[#77746E] leading-relaxed">
                {project.narrative.strategy.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MATERIALIDADE & 7. LUZ (Contraste Escuro Tátil) */}
      <section className="py-24 md:py-36 bg-[#11110F] text-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-8">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
                Matéria e Tato
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#F4F1EA]">
                {project.narrative.materials.title}
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-sans font-light text-[#D8D3C9] leading-relaxed">
                {project.narrative.materials.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Material Badges */}
              <div className="pt-6 border-t border-[#77746E]/30 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#77746E] block">
                  Materiais em destaque:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.materialsList.map((mat, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 border border-[#77746E]/40 text-[#D8D3C9] font-sans font-light"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 lg:pl-8 lg:border-l lg:border-[#77746E]/30">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
                Luz e Atmosfera
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#F4F1EA]">
                {project.narrative.light.title}
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-sans font-light text-[#D8D3C9] leading-relaxed">
                {project.narrative.light.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Palette Words */}
              <div className="pt-6 border-t border-[#77746E]/30 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#77746E] block">
                  Atmosfera cromática:
                </span>
                <div className="flex flex-wrap gap-3">
                  {project.paletteWords.map((color, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-[#A88C62] flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A88C62]" />
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ESPAÇOS & 9. GALERIA EDITORIAL COM RITMO */}
      <section className="py-24 md:py-36 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Spatial Section Note */}
          <div className="max-w-2xl mb-16 space-y-4">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
              Registro Fotográfico Editorial
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#11110F]">
              Galeria da obra
            </h2>
            <p className="text-sm font-sans text-[#77746E] leading-relaxed font-light">
              Clique em qualquer imagem para abrir a visualização em escala ampliada.
            </p>
          </div>

          {/* Rhythmic Gallery Cadence (Horizontal wide, two side-by-side, vertical, panoramic) */}
          <div className="space-y-12 md:space-y-16">
            {/* Image 0: Wide Panoramic Opening */}
            {project.gallery[0] && (
              <div
                onClick={() => handleOpenLightbox(0)}
                data-cursor="VIEW"
                className="group relative cursor-pointer overflow-hidden bg-[#D8D3C9] aspect-[16/9] md:aspect-[21/9]"
              >
                <img
                  src={project.gallery[0].url}
                  alt={project.gallery[0].caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 p-2 bg-[#11110F]/80 text-[#F4F1EA] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} />
                </div>
                <div className="absolute bottom-4 left-4 text-xs font-sans text-[#F4F1EA] bg-[#11110F]/70 px-3 py-1.5 backdrop-blur-sm">
                  {project.gallery[0].title}
                </div>
              </div>
            )}

            {/* Images 1 & 2: Two medium side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {project.gallery.slice(1, 3).map((item, idx) => {
                const realIndex = idx + 1;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleOpenLightbox(realIndex)}
                    data-cursor="VIEW"
                    className="group relative cursor-pointer overflow-hidden bg-[#D8D3C9] aspect-[4/3]"
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 right-4 p-2 bg-[#11110F]/80 text-[#F4F1EA] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} />
                    </div>
                    <div className="absolute bottom-4 left-4 text-xs font-sans text-[#F4F1EA] bg-[#11110F]/70 px-3 py-1.5 backdrop-blur-sm">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Images 3 & 4: Vertical portrait + Detail closeup */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {project.gallery[3] && (
                <div
                  onClick={() => handleOpenLightbox(3)}
                  data-cursor="VIEW"
                  className="md:col-span-5 group relative cursor-pointer overflow-hidden bg-[#D8D3C9] aspect-[3/4]"
                >
                  <img
                    src={project.gallery[3].url}
                    alt={project.gallery[3].caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 text-xs font-sans text-[#F4F1EA] bg-[#11110F]/70 px-3 py-1.5 backdrop-blur-sm">
                    {project.gallery[3].title}
                  </div>
                </div>
              )}

              {project.gallery[4] && (
                <div
                  onClick={() => handleOpenLightbox(4)}
                  data-cursor="VIEW"
                  className="md:col-span-7 group relative cursor-pointer overflow-hidden bg-[#D8D3C9] aspect-[16/10]"
                >
                  <img
                    src={project.gallery[4].url}
                    alt={project.gallery[4].caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 text-xs font-sans text-[#F4F1EA] bg-[#11110F]/70 px-3 py-1.5 backdrop-blur-sm">
                    {project.gallery[4].title}
                  </div>
                </div>
              )}
            </div>

            {/* Remaining images if any */}
            {project.gallery.slice(5).map((item, idx) => {
              const realIndex = idx + 5;
              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(realIndex)}
                  data-cursor="VIEW"
                  className="group relative cursor-pointer overflow-hidden bg-[#D8D3C9] aspect-[16/9]"
                >
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 text-xs font-sans text-[#F4F1EA] bg-[#11110F]/70 px-3 py-1.5 backdrop-blur-sm">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. RESULTADO (O Habitar) */}
      <section className="py-20 md:py-28 bg-[#D8D3C9]/40 border-t border-[#D8D3C9]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62]">
            Resultado e Síntese
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-[#11110F]">
            {project.narrative.outcome.title}
          </h2>
          <div className="text-base sm:text-lg font-sans font-light text-[#77746E] leading-relaxed max-w-2xl mx-auto">
            {project.narrative.outcome.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROJETO SEGUINTE (Banner de Transição Fluida) */}
      <section className="relative overflow-hidden bg-[#11110F] text-[#F4F1EA] py-28 md:py-40 group">
        <Link
          to={`/projetos/${nextProject.slug}`}
          data-cursor="VER PROJETO"
          className="block relative z-10 max-w-7xl mx-auto px-6 md:px-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#F4F1EA]/15 pb-12">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#A88C62] block">
                Próximo Estudo de Caso →
              </span>
              <h2 className="font-display text-5xl sm:text-7xl font-light group-hover:text-[#A88C62] transition-colors duration-300">
                {nextProject.title}
              </h2>
              <p className="text-xs font-sans tracking-widest text-[#D8D3C9]/70 uppercase">
                {nextProject.category} · {nextProject.location} · {nextProject.year}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#D8D3C9]">
                Explorar obra
              </span>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#A88C62] group-hover:bg-[#A88C62] group-hover:text-[#F4F1EA] transition-all duration-300">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        images={project.gallery}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))
        }
        onNext={() =>
          setActiveImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))
        }
      />
    </div>
  );
};
