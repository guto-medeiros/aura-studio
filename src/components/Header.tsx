import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Determine if we are on a page/hero with dark backdrop initially
  const isCaseStudy = location.pathname.startsWith('/projetos/');
  const isDarkHero = location.pathname === '/' || isCaseStudy;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Projetos', path: '/projetos', id: 'nav-projetos' },
    { label: 'Estúdio', path: '/estudio', id: 'nav-estudio' },
    { label: 'Serviços', path: '/servicos', id: 'nav-servicos' },
    { label: 'Contato', path: '/contato', id: 'nav-contato' },
  ];

  // Header background & color dynamics
  const headerTextColor = isScrolled
    ? 'text-[#11110F]'
    : isDarkHero
    ? 'text-[#F4F1EA]'
    : 'text-[#11110F]';

  const headerBgClass = isScrolled
    ? 'bg-[#F4F1EA]/90 backdrop-blur-md py-4 border-b border-[#D8D3C9]/40 shadow-[0_4px_24px_rgba(0,0,0,0.02)]'
    : 'bg-transparent py-7';

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${headerBgClass} ${headerTextColor}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Logo
            onClick={() => setMobileMenuOpen(false)}
            className={headerTextColor}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Navegação principal">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                id={item.id}
                className={({ isActive }) =>
                  `relative py-1 text-xs tracking-[0.2em] uppercase transition-colors duration-300 font-sans font-medium group ${
                    isActive
                      ? 'text-[#A88C62]'
                      : 'opacity-80 hover:opacity-100 hover:text-[#A88C62]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#A88C62]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full opacity-40" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Inquire Direct Action */}
            <NavLink
              to="/contato"
              id="header-cta"
              className="ml-3 px-4 py-2 border border-current text-[11px] tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:bg-[#11110F] hover:text-[#F4F1EA] hover:border-[#11110F]"
            >
              Iniciar Projeto
            </NavLink>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-end w-8 h-8 gap-1.5 focus:outline-none z-50 p-1"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-[1px] bg-current transition-all duration-300 ${
                mobileMenuOpen
                  ? 'w-6 rotate-45 translate-y-[7px] text-[#F4F1EA]'
                  : 'w-6'
              }`}
            />
            <span
              className={`block h-[1px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 w-6' : 'w-4'
              }`}
            />
            <span
              className={`block h-[1px] bg-current transition-all duration-300 ${
                mobileMenuOpen
                  ? 'w-6 -rotate-45 -translate-y-[7px] text-[#F4F1EA]'
                  : 'w-5'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-fullscreen-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#11110F] text-[#F4F1EA] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Architectural Grid Watermark */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="relative z-10 flex flex-col gap-6 my-auto">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A88C62]">
                Menu de Navegação
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((item, idx) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    id={`mobile-${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-4xl sm:text-5xl font-light tracking-wide transition-colors duration-300 flex items-baseline justify-between ${
                        isActive ? 'text-[#A88C62]' : 'text-[#F4F1EA] hover:text-[#A88C62]'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-sans tracking-[0.2em] opacity-40 font-normal">
                      0{idx + 1}
                    </span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Meta */}
            <div className="relative z-10 pt-6 border-t border-[#77746E]/30 flex flex-col gap-4 text-xs font-sans text-[#D8D3C9]">
              <div className="flex justify-between items-end">
                <div>
                  <p className="tracking-widest uppercase text-[10px] text-[#A88C62] mb-1">
                    Atelier
                  </p>
                  <p className="opacity-80">São Paulo · Brasil</p>
                </div>
                <div className="text-right">
                  <p className="tracking-widest uppercase text-[10px] text-[#A88C62] mb-1">
                    Contato Direto
                  </p>
                  <a
                    href="mailto:contato@aurastudio.arq.br"
                    className="hover:text-[#F4F1EA] underline underline-offset-4 decoration-[#A88C62]"
                  >
                    contato@aurastudio.arq.br
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 text-[10px] tracking-[0.25em] uppercase opacity-50">
                <span>Luz · Matéria · Proporção</span>
                <span>© 2026 Aura Studio</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
