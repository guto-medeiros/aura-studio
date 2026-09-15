import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 bg-[#F4F1EA] text-[#11110F]">
      <div className="max-w-xl mx-auto px-6 text-center space-y-8">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#A88C62]">
          404 / Espaço Não Encontrado
        </span>
        <h1 className="font-display text-5xl sm:text-6xl font-light">
          A página solicitada não existe ou foi movida.
        </h1>
        <p className="text-sm font-sans text-[#77746E] font-light leading-relaxed">
          Retorne à galeria de projetos ou navegue pela estrutura principal do estúdio.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#11110F] text-[#F4F1EA] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#A88C62] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Retornar ao início</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
