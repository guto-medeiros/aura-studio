import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { StudioPage } from './pages/StudioPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col bg-[#F4F1EA] text-[#11110F] selection:bg-[#A88C62] selection:text-[#F4F1EA]">
        {/* Route scroll reset */}
        <ScrollToTop />

        {/* Custom cursor for desktop */}
        <CustomCursor />

        {/* Minimalist Context-Aware Header */}
        <Header />

        {/* Main Content View */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/projetos/:slug" element={<ProjectDetailPage />} />
            <Route path="/estudio" element={<StudioPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Minimalist Editorial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
