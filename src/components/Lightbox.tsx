import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  isOpen: boolean;
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !currentImage) return null;

  const currentNumberStr = String(currentIndex + 1).padStart(2, '0');
  const totalNumberStr = String(images.length).padStart(2, '0');

  return (
    <AnimatePresence>
      <motion.div
        id="project-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#11110F]/95 backdrop-blur-md text-[#F4F1EA] p-4 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Visualizador ampliado de imagem"
      >
        {/* Top Control Bar */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#A88C62]">
              {currentNumberStr} / {totalNumberStr}
            </span>
            {currentImage.tag && (
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] font-sans px-2.5 py-0.5 border border-[#77746E]/40 text-[#D8D3C9]">
                {currentImage.tag}
              </span>
            )}
          </div>

          <button
            type="button"
            id="lightbox-close-button"
            onClick={onClose}
            className="p-2.5 text-[#D8D3C9] hover:text-[#F4F1EA] hover:bg-white/5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#A88C62]"
            aria-label="Fechar visualizador"
          >
            <X size={20} />
          </button>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            id="lightbox-prev-button"
            onClick={onPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-[#D8D3C9] hover:text-[#F4F1EA] hover:bg-white/5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#A88C62]"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            id="lightbox-next-button"
            onClick={onNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-[#D8D3C9] hover:text-[#F4F1EA] hover:bg-white/5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#A88C62]"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Centered Image View */}
        <div className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center select-none">
          <motion.img
            key={currentImage.url}
            src={currentImage.url}
            alt={currentImage.caption || currentImage.title}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl"
          />

          {/* Caption & Title */}
          <div className="mt-4 text-center max-w-xl">
            <h4 className="font-display text-xl text-[#F4F1EA] font-light">
              {currentImage.title}
            </h4>
            <p className="text-xs font-sans text-[#D8D3C9]/80 mt-1 leading-relaxed">
              {currentImage.caption}
            </p>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase font-sans text-[#77746E]">
          Use as teclas de direção para navegar · Esc para fechar
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
