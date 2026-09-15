import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studio';

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residencial',
    location: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const projectTypes = [
    'Residencial',
    'Interiores',
    'Comercial',
    'Hospitality',
    'Outro',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Por favor, insira um e-mail válido para retorno.');
      return;
    }

    if (!formData.location.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, indique a cidade ou localização do projeto.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus('error');
      setErrorMessage('Por favor, compartilhe brevemente os detalhes ou expectativas do seu projeto.');
      return;
    }

    // Simulate sending with architectural loading pause
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residencial',
      location: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="pt-32 md:pt-44 pb-32 bg-[#F4F1EA] text-[#11110F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Heading */}
        <div className="border-b border-[#D8D3C9] pb-14 mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block mb-4">
            Inicie um Diálogo
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#11110F] leading-[1.08]">
                Vamos conversar sobre o seu próximo espaço.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="font-display text-xl sm:text-2xl text-[#77746E] font-light italic leading-relaxed">
                “Conte-nos sobre o projeto que você imagina. Queremos entender o contexto antes de começar a desenhar.”
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white/40 border border-[#D8D3C9] p-8 md:p-12">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="py-12 space-y-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#A88C62]/15 text-[#A88C62] flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#A88C62]">
                      Confirmação de Envio
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-light text-[#11110F]">
                      Recebemos sua mensagem.
                    </h3>
                    <p className="text-sm font-sans text-[#77746E] font-light leading-relaxed max-w-md mx-auto">
                      “Entraremos em contato em breve para entender melhor o projeto.”
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 border border-[#11110F] text-xs font-sans tracking-[0.2em] uppercase text-[#11110F] hover:bg-[#11110F] hover:text-[#F4F1EA] transition-colors"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-8"
                >
                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-4 bg-red-950/10 border border-red-800/30 text-red-900 text-xs font-sans flex items-center gap-3">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Nome Completo */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E]"
                    >
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Como podemos lhe chamar?"
                      required
                      className="w-full px-4 py-3.5 bg-transparent border border-[#D8D3C9] focus:border-[#11110F] focus:outline-none text-sm font-sans text-[#11110F] placeholder-[#77746E]/50 transition-colors"
                    />
                  </div>

                  {/* E-mail & Telefone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E]"
                      >
                        E-mail de contato *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@exemplo.com"
                        required
                        className="w-full px-4 py-3.5 bg-transparent border border-[#D8D3C9] focus:border-[#11110F] focus:outline-none text-sm font-sans text-[#11110F] placeholder-[#77746E]/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E]"
                      >
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+55 (11) 99999-9999"
                        className="w-full px-4 py-3.5 bg-transparent border border-[#D8D3C9] focus:border-[#11110F] focus:outline-none text-sm font-sans text-[#11110F] placeholder-[#77746E]/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Tipo de Projeto (Seleção) */}
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E]"
                    >
                      Tipo de projeto *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#F4F1EA] border border-[#D8D3C9] focus:border-[#11110F] focus:outline-none text-sm font-sans text-[#11110F] transition-colors cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Localização */}
                  <div className="space-y-2">
                    <label
                      htmlFor="location"
                      className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E]"
                    >
                      Localização do projeto (Cidade / Estado / País) *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Ex: São Paulo, SP ou Trancoso, BA"
                      required
                      className="w-full px-4 py-3.5 bg-transparent border border-[#D8D3C9] focus:border-[#11110F] focus:outline-none text-sm font-sans text-[#11110F] placeholder-[#77746E]/50 transition-colors"
                    />
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#77746E]"
                    >
                      Mensagem ou descrição inicial *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Compartilhe metragem aproximada, características do terreno, expectativas de prazo ou referências que lhe tocam."
                      required
                      className="w-full px-4 py-3.5 bg-transparent border border-[#D8D3C9] focus:border-[#11110F] focus:outline-none text-sm font-sans text-[#11110F] placeholder-[#77746E]/50 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button with Loading State */}
                  <div>
                    <button
                      type="submit"
                      id="submit-project-btn"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#11110F] text-[#F4F1EA] text-xs font-sans font-medium uppercase tracking-[0.2em] hover:bg-[#A88C62] disabled:opacity-70 transition-all duration-300"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Processando envio...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar projeto</span>
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Details & Atelier Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A88C62] block">
                Atelier Principal
              </span>
              <h3 className="font-display text-3xl font-light text-[#11110F]">
                São Paulo
              </h3>
              <div className="text-sm font-sans text-[#77746E] leading-relaxed font-light space-y-1">
                <p>{STUDIO_INFO.contact.address}</p>
                <p>{STUDIO_INFO.contact.city}</p>
                <p className="font-mono text-xs text-[#11110F]/70">{STUDIO_INFO.contact.postalCode}</p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#D8D3C9] space-y-4">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#77746E] block">
                Canais Diretos
              </span>
              <div className="space-y-2 text-sm font-sans">
                <p>
                  <span className="text-xs text-[#77746E] block">Projetos & Novos Clientes:</span>
                  <a
                    href={`mailto:${STUDIO_INFO.contact.email}`}
                    className="text-[#11110F] hover:text-[#A88C62] transition-colors underline underline-offset-4 decoration-[#A88C62]"
                  >
                    {STUDIO_INFO.contact.email}
                  </a>
                </p>
                <p className="pt-2">
                  <span className="text-xs text-[#77746E] block">Telefone:</span>
                  <a
                    href="tel:+551130882940"
                    className="text-[#11110F] hover:text-[#A88C62] transition-colors font-mono text-xs"
                  >
                    {STUDIO_INFO.contact.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#D8D3C9] space-y-3">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#77746E] block">
                Visitas & Reuniões
              </span>
              <p className="text-xs font-sans text-[#77746E] leading-relaxed font-light">
                Atendimentos presenciais ocorrem de segunda a sexta-feira mediante agendamento prévio, garantindo dedicação exclusiva da equipe diretiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
