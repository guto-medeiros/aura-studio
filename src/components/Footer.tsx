import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#11110F] text-[#F4F1EA] pt-24 pb-12 border-t border-[#77746E]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Architectural Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#77746E]/20">
          <div className="lg:col-span-6 space-y-6">
            <Logo theme="dark" className="text-[#F4F1EA]" />
            <p className="font-display text-2xl md:text-3xl font-light text-[#D8D3C9] leading-relaxed max-w-lg">
              Arquitetura que cria presença através da luz, matéria e proporção.
            </p>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#A88C62]">
              Arquitetura · Interiores · Espaços
            </p>
          </div>

          {/* Links & Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block">
              Navegação
            </span>
            <ul className="space-y-3 text-xs tracking-[0.15em] uppercase font-sans">
              <li>
                <Link
                  to="/projetos"
                  className="text-[#D8D3C9] hover:text-[#A88C62] transition-colors duration-300"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/estudio"
                  className="text-[#D8D3C9] hover:text-[#A88C62] transition-colors duration-300"
                >
                  Estúdio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-[#D8D3C9] hover:text-[#A88C62] transition-colors duration-300"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-[#D8D3C9] hover:text-[#A88C62] transition-colors duration-300"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Direct Channels */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#77746E] block">
              Presença
            </span>
            <ul className="space-y-3 text-xs tracking-[0.15em] uppercase font-sans">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8D3C9] hover:text-[#A88C62] transition-colors duration-300 flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <span className="text-[10px] opacity-40 font-mono">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8D3C9] hover:text-[#A88C62] transition-colors duration-300 flex items-center justify-between"
                >
                  <span>Pinterest</span>
                  <span className="text-[10px] opacity-40 font-mono">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D8D3C9] hover:text-[#A88C62] transition-colors duration-300 flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px] opacity-40 font-mono">↗</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:contato@aurastudio.arq.br"
                  className="text-[#A88C62] hover:text-[#F4F1EA] transition-colors duration-300 lowercase text-xs tracking-normal"
                >
                  contato@aurastudio.arq.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#77746E] tracking-[0.1em]">
          <p>© 2026 Aura Studio. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>São Paulo · Brasil</span>
            <span className="w-1 h-1 rounded-full bg-[#A88C62]" />
            <span className="text-[#D8D3C9]/70">Luz · Matéria · Proporção</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
