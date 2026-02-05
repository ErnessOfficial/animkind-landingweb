import React, { useState, useEffect } from 'react';
import {
  Shield,
  Users,
  Brain,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Globe,
  Activity,
  Lock,
  HeartHandshake,
  Play
} from 'lucide-react';
import { content } from './content';
import { Language } from './types';
import Chatbot from './components/Chatbot';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = content[lang];
  const BOOKING_URL = "https://calendar.app.google/9kvFWK6CgUiNe3ov5";

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  const IconMap: Record<string, React.ReactNode> = {
    "Shield": <Shield className="w-10 h-10 text-[#0dc383]" />,
    "Users": <Users className="w-10 h-10 text-[#eec843]" />,
    "Brain": <Brain className="w-10 h-10 text-[#1d4c73]" />,
  };

  // Helper to parse bold text from description (e.g., **Text**)
  const renderDescription = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i} className="block mb-2 text-balance">
        {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-[#1e2c29] font-bold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-[#f1f4f4] text-[#1e2c29] font-sans selection:bg-[#0dc383]/20 selection:text-[#1e2c29] antialiased">

      {/* Navigation - Standard Design */}
      <nav className="fixed w-full z-40 bg-white/95 backdrop-blur-xl shadow-md py-2 border-b border-gray-100">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Side: Logo + CPD */}
            <div className="flex items-center gap-6">
              {/* Main Logo */}
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0dc383] rounded-full blur opacity-20"></div>
                  <img
                    src="/icons/animikind-icon2.png"
                    alt="AnImiKind Logo"
                    className="w-20 h-20 object-contain relative z-10"
                  />
                </div>
              </div>

              {/* CPD Logo */}
              <div className="hidden md:block h-10 w-px bg-gray-300 mx-2"></div>
              <div className="hidden md:flex items-center gap-2">
                <img src="/images/cpd.png" alt="CPD Certified" className="h-12 w-auto object-contain" />
              </div>
            </div>

            {/* Desktop Nav - Standard Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Logo in Menu Bar */}
              <img src="/images/logoanimikind.png" alt="AnimiKind Logo" className="h-10 w-auto object-contain mr-4" />

              <div className="flex items-center gap-2">
                {[
                  { name: 'Emotional-AI', href: '#ai-section' },
                  { name: 'Our Ecosystem', href: '#ecosystem' },
                  { name: 'Impact & Value', href: '#impact' },
                  { name: 'Pricing / Plans', href: '#', onClick: () => setPricingModalOpen(true) },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={item.onClick}
                    className="
                      px-4 py-2 rounded-lg
                      bg-[#0dc383] text-white
                      font-bold text-sm whitespace-nowrap tracking-wide
                      hover:bg-[#0bb075] transition-all duration-300
                      shadow-sm hover:shadow-md
                    "
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Language & CTA */}
              <div className="flex items-center ml-4 gap-4">
                <button onClick={toggleLang} className="flex items-center gap-1 text-[#1d4c73] hover:text-[#0dc383] transition-colors font-bold">
                  <img
                    src={lang === 'en' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/es.png"}
                    alt={lang}
                    className="w-6 h-auto rounded-sm shadow-sm"
                  />
                  <span className="uppercase text-sm">{lang}</span>
                </button>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-[#2d3e50] text-white
                    px-5 py-2
                    font-bold text-xs uppercase tracking-wider
                    rounded-lg
                    hover:bg-[#1e2c29] transition-all
                    shadow-md hover:shadow-lg
                    flex items-center justify-center
                  "
                >
                  Book a Free Demo
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="text-[#1d4c73] font-bold uppercase text-sm border border-[#1d4c73]/20 px-2 py-1 rounded-md">
                {lang}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#1d4c73] p-1">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#1d4c73]/10 absolute w-full shadow-xl animate-fade-in-up">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#ai-section" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 border-b border-gray-100 text-base font-bold text-[#1d4c73]">{t.nav.about}</a>
              <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 border-b border-gray-100 text-base font-bold text-[#1d4c73]">{t.nav.ecosystem}</a>
              <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 border-b border-gray-100 text-base font-bold text-[#1d4c73]">{t.nav.contact}</a>
              <button onClick={() => { setPricingModalOpen(true); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-4 border-b border-gray-100 text-base font-bold text-[#1d4c73]">{t.nav.pricing}</button>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center mt-6 px-5 py-4 rounded-xl bg-[#0dc383] text-white font-bold shadow-lg active:scale-95 transition-transform"
              >
                {t.nav.getStarted}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Split Design */}
      <section className="relative w-full flex flex-col pt-24">
        {/* Top Image Section - Reduced Height */}
        <div className="relative w-full h-[35vh] min-h-[300px]">
          <img
            src="/images/animikindbanner.jpeg"
            alt="Office Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
        </div>

        {/* Bottom Text Section - Shaded Background */}
        <div className="w-full bg-[#f1f4f4] py-8 px-4 sm:px-6 lg:px-8 text-center shadow-inner relative z-10">
          <div className="max-w-7xl mx-auto animate-fade-in-up space-y-8">
            <div className="inline-block py-2 px-8 rounded-full bg-white border border-[#1d4c73]/10 text-[#1e2c29] text-xs md:text-sm font-bold tracking-[0.2em] uppercase shadow-sm">
              KIND INTELLIGENCE - TRUSTED TECHNOLOGY
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1d4c73] tracking-tight leading-tight">
              The “Emotional-AI” Powered Ecosystem
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0dc383] tracking-tight">
              TO EMPOWER YOUG MINDS <span className="text-[#1e2c29]">& Protect Schools Well-being</span>
            </h2>

            <p className="text-lg md:text-xl text-[#1d4c73]/80 max-w-4xl mx-auto leading-relaxed font-medium text-balance">
              Discover AnImiKind, the pioneering digital ecosystem that harnesses Emotional-AI to enhance emotional literacy, detect risks early, and foster supportive environments for children, teenagers, parents, and school staff. Our interconnected tools empower young people to express themselves safely while providing educators with actionable insights for proactive intervention.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              {/* Primary Button */}
              <a href="#ai-section" className="px-8 py-4 rounded-full bg-[#0dc383] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center min-w-[280px]">
                Learn More About Our Emotional-AI
              </a>

              {/* Secondary Button */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="px-8 py-4 rounded-full bg-white text-[#1d4c73] font-bold text-lg border border-[#1d4c73]/10 hover:bg-[#f8fafc] hover:border-[#1d4c73]/30 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 min-w-[200px] group"
              >
                <Play className="w-5 h-5 fill-[#1d4c73] text-[#1d4c73]" />
                Watch a Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform transition-all scale-100">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full backdrop-blur-sm transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>
            <div className="aspect-video w-full">
              <video
                src="/videos/animikind.mp4"
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            </div>
          </div>
        </div>
      )}

      {/* Full Width Banner */}
      <div className="w-full">
        <img
          src="/images/segunda.png"
          alt="AnImiKind Banner"
          className="w-full h-auto object-cover shadow-md"
        />
      </div>

      {/* Pricing Modal Overlay */}
      {pricingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2c29]/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl ring-1 ring-[#1d4c73]/10 transform transition-all scale-100 p-8 md:p-12 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPricingModalOpen(false)}
              className="absolute top-4 right-4 text-[#1d4c73] hover:text-[#0dc383] z-10 bg-[#f1f4f4] hover:bg-[#eec843]/20 p-2 rounded-full transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e2c29] mb-6 leading-tight text-balance">
                {t.pricingModal.title}
              </h2>
              <p className="text-lg text-[#1d4c73] leading-relaxed font-medium text-balance mb-8">
                {t.pricingModal.description}
              </p>
              <div className="space-y-8">
                <img
                  src="/images/01pricing.png"
                  alt="Pricing Plan 1"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <img
                  src="/images/01pricing02.png"
                  alt="Pricing Plan 1 Extended"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <img
                  src="/images/02pricing.png"
                  alt="Pricing Plan 2"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <img
                  src="/images/03pricing.png"
                  alt="Pricing Plan 3"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <img
                  src="/images/04pricing.png"
                  alt="Pricing Plan 4"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 rounded-2xl bg-[#1e2c29] text-white text-center shadow-xl">
                <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
                  {t.pricingModal.ctaText}
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-full bg-[#0dc383] text-white font-bold text-lg hover:bg-[#0bb075] transition-all shadow-lg hover:shadow-[#0dc383]/30 transform hover:-translate-y-0.5 active:scale-95"
                >
                  {t.pricingModal.ctaButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Modal Overlay */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2c29]/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl ring-1 ring-[#1d4c73]/10 transform transition-all scale-100 p-8 md:p-12 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setAiModalOpen(false)}
              className="absolute top-4 right-4 text-[#1d4c73] hover:text-[#0dc383] z-10 bg-[#f1f4f4] hover:bg-[#eec843]/20 p-2 rounded-full transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>
            <div className="space-y-8">
              <img
                src="/images/iaweb.png"
                alt="AI Web Interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <img
                src="/images/globalapp.png"
                alt="Global App Interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Value Proposition - Enhanced Cards */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1d4c73]/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e2c29] mb-6 tracking-tight">{t.valueProp.title}</h2>
            <p className="max-w-4xl mx-auto text-[#1d4c73] text-lg md:text-xl leading-relaxed font-medium text-balance">
              {t.valueProp.intro}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {t.valueProp.items.map((item, idx) => (
              <div key={idx} className="group p-8 rounded-[2rem] bg-[#f8fafc] border border-[#1d4c73]/5 hover:bg-white hover:border-[#0dc383]/20 hover:shadow-2xl hover:shadow-[#0dc383]/10 hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md">
                  {IconMap[item.icon]}
                </div>
                <h3 className="text-2xl font-bold text-[#1e2c29] mb-4 group-hover:text-[#0dc383] transition-colors">{item.title}</h3>
                <p className="text-[#1d4c73]/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section - Visual Polish */}
      <section id="ai-section" className="py-24 bg-[#1e2c29] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-lg bg-[#0dc383]/20 text-[#0dc383] font-bold tracking-wider uppercase text-xs mb-4 border border-[#0dc383]/30">
                {t.aiSection.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight text-relief">{t.aiSection.title}</h2>
              <p className="text-[#f1f4f4]/80 text-lg md:text-xl mb-10 leading-relaxed font-light">
                {t.aiSection.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <ul className="space-y-6 flex-1">
                  {[t.aiSection.feature1, t.aiSection.feature2, t.aiSection.feature3].map((f, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="bg-[#0dc383]/20 p-2 rounded-xl group-hover:bg-[#0dc383] transition-colors duration-300">
                        <Activity className="w-6 h-6 text-[#0dc383] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-xl text-[#f1f4f4] group-hover:text-white transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>
                <img
                  src="/images/anicuerpo.png"
                  alt="Ani Character"
                  className="hidden sm:block h-80 w-auto object-contain drop-shadow-2xl animate-pulse-slow"
                />
              </div>
            </div>
            <div className="relative animate-fade-in-up delay-200 flex flex-col items-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0dc383] to-[#1d4c73] rounded-[2.5rem] blur-2xl opacity-40 animate-pulse"></div>
              <img
                src="/images/emotional-ai-app.png"
                alt="Emotional AI Analysis Dashboard"
                className="relative rounded-[2rem] shadow-2xl border border-white/10 w-full object-cover bg-[#1d4c73]/20 hover:scale-[1.02] transition-transform duration-500 mb-8"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = "bg-[#1d4c73]/40 backdrop-blur-sm border border-[#1d4c73] p-8 rounded-[2rem] relative h-full flex items-center justify-center text-white font-bold";
                    fallback.innerText = "Preview Image";
                    parent.appendChild(fallback);
                  }
                }}
              />
              <button
                onClick={() => setAiModalOpen(true)}
                className="relative z-10 px-8 py-3 rounded-full bg-[#0dc383] text-white font-bold text-lg hover:bg-[#0bb075] transition-all shadow-lg hover:shadow-[#0dc383]/30 transform hover:-translate-y-0.5 active:scale-95"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Breakdown - Modern Premium Design */}
      <section id="ecosystem" className="py-32 bg-gradient-to-b from-white via-[#f8fafc] to-[#f1f4f4] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0dc383]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1d4c73]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block py-2 px-6 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-sm font-bold tracking-wider uppercase mb-6">
              Complete Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e2c29] mb-6 tracking-tight">
              {t.ecosystem.title}
            </h2>
            <p className="text-xl md:text-2xl text-[#1d4c73]/80 font-medium max-w-3xl mx-auto leading-relaxed">
              {t.ecosystem.subtitle}
            </p>
          </div>

          {/* Ecosystem Structure Image */}
          <div className="mb-32 w-full p-6 md:p-10 bg-white/60 backdrop-blur-md rounded-[3rem] border-2 border-white shadow-2xl hover:shadow-[#0dc383]/10 transition-shadow duration-500">
            <img
              src="/images/structureanimikind.png"
              alt="AnImiKind Ecosystem Structure"
              className="w-full h-auto rounded-[2rem] shadow-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Products Section */}
          <div className="space-y-40">
            {t.ecosystem.products.map((product, idx) => {
              const isReversed = idx % 2 === 1;

              return (
                <div key={idx} className="relative">
                  {/* Product Card Container */}
                  <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-stretch`}>

                    {/* Content Side */}
                    <div className="flex-1 flex flex-col justify-center space-y-8 animate-fade-in-up">
                      {/* Tag Badge */}
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#0dc383]/10 to-[#0dc383]/5 text-[#0dc383] rounded-full text-sm font-bold tracking-wide uppercase border border-[#0dc383]/20 shadow-sm w-fit">
                        <div className="w-2 h-2 bg-[#0dc383] rounded-full animate-pulse"></div>
                        {product.tag}
                      </div>

                      {/* Logo */}
                      {product.logo && (
                        <div className="flex flex-col items-start gap-6">
                          <img
                            src={product.logo}
                            alt={`${product.name} Logo`}
                            className={`${idx === 0 ? 'h-52 md:h-64' : 'h-40 md:h-48'} w-auto object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300`}
                          />
                          {/* @ts-ignore */}
                          {product.cpdLogo && (
                            <img
                              /* @ts-ignore */
                              src={product.cpdLogo}
                              alt="CPD Certified"
                              className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                          )}
                        </div>
                      )}

                      {/* Tagline */}
                      {/* @ts-ignore */}
                      {product.tagline && (
                        <div className="relative">
                          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#0dc383] to-transparent rounded-full"></div>
                          {/* @ts-ignore */}
                          <p className="text-xl md:text-2xl font-bold text-[#1d4c73] leading-tight italic pl-4">
                            {/* @ts-ignore */}
                            "{product.tagline}"
                          </p>
                        </div>
                      )}

                      {/* Description */}
                      <div className="text-base md:text-lg text-[#1d4c73]/90 leading-relaxed space-y-4">
                        {renderDescription(product.description)}
                      </div>

                      {/* Features Grid - Default Layout for App & AnimiKdemi */}
                      {idx !== 1 && (
                        <div className="grid gap-3 pt-6">
                          {product.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="group flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-[#1d4c73]/5 hover:border-[#0dc383]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                              <div className="flex-shrink-0 mt-1">
                                <div className="bg-gradient-to-br from-[#0dc383]/20 to-[#0dc383]/10 p-2 rounded-xl group-hover:from-[#0dc383] group-hover:to-[#0bb075] transition-all duration-300">
                                  <CheckCircle2 className="w-5 h-5 text-[#0dc383] group-hover:text-white transition-colors" />
                                </div>
                              </div>
                              <span className="font-semibold text-[#1e2c29] text-base leading-snug">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* School Panel (idx === 1) - First Column Features (Right Side) */}
                      {idx === 1 && (
                        <div className="grid gap-3 pt-6">
                          {product.features.slice(0, 4).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="group flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-[#1d4c73]/5 hover:border-[#0dc383]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                              <div className="flex-shrink-0 mt-1">
                                <div className="bg-gradient-to-br from-[#0dc383]/20 to-[#0dc383]/10 p-2 rounded-xl group-hover:from-[#0dc383] group-hover:to-[#0bb075] transition-all duration-300">
                                  <CheckCircle2 className="w-5 h-5 text-[#0dc383] group-hover:text-white transition-colors" />
                                </div>
                              </div>
                              <span className="font-semibold text-[#1e2c29] text-base leading-snug">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Images Side */}
                    <div className="flex-1 flex flex-col gap-6 animate-fade-in-up delay-200">
                      {/* AnimiKind App (idx === 0) - 3 Images Vertically */}
                      {idx === 0 && (
                        <React.Fragment>
                          {/* Main Image */}
                          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0dc383]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                              src={product.image || `https://picsum.photos/seed/${idx + 10}/800/600`}
                              alt={product.name}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                          </div>

                          {/* Second Image */}
                          {product.image2 && (
                            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#1d4c73]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                              <img
                                src={product.image2}
                                alt={`${product.name} Secondary View`}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                          )}

                          {/* Third Image */}
                          {/* @ts-ignore */}
                          {product.image3 && (
                            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#0dc383]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                              {/* @ts-ignore */}
                              <img
                                src={product.image3}
                                alt={`${product.name} Third View`}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                          )}
                        </React.Fragment>
                      )}

                      {/* School Panel (idx === 1) - 2 Images + Second Features Column */}
                      {idx === 1 && (
                        <React.Fragment>
                          {/* Main Image */}
                          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0dc383]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                              src={product.image || `https://picsum.photos/seed/${idx + 10}/800/600`}
                              alt={product.name}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                          </div>

                          {/* Second Image */}
                          {product.image2 && (
                            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#1d4c73]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                              <img
                                src={product.image2}
                                alt={`${product.name} Secondary View`}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                          )}

                          {/* Second Column Features (from "Privacy & Security..." onwards) */}
                          <div className="grid gap-3">
                            {product.features.slice(4).map((feat, fIdx) => (
                              <div
                                key={fIdx + 4}
                                className="group flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-[#1d4c73]/5 hover:border-[#0dc383]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                              >
                                <div className="flex-shrink-0 mt-1">
                                  <div className="bg-gradient-to-br from-[#0dc383]/20 to-[#0dc383]/10 p-2 rounded-xl group-hover:from-[#0dc383] group-hover:to-[#0bb075] transition-all duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-[#0dc383] group-hover:text-white transition-colors" />
                                  </div>
                                </div>
                                <span className="font-semibold text-[#1e2c29] text-base leading-snug">
                                  {feat}
                                </span>
                              </div>
                            ))}
                          </div>
                        </React.Fragment>
                      )}

                      {/* AnimiKdemi (idx === 2) - 4 Images: 2 Vertical + 2 Horizontal */}
                      {idx === 2 && (
                        <React.Fragment>
                          {/* First Two Images Vertically */}
                          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0dc383]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                              src={product.image || `https://picsum.photos/seed/${idx + 10}/800/600`}
                              alt={product.name}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                          </div>

                          {product.image2 && (
                            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-[#1d4c73]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                              <img
                                src={product.image2}
                                alt={`${product.name} Secondary View`}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                          )}

                          {/* Third and Fourth Images Side by Side */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* @ts-ignore */}
                            {product.image3 && (
                              <div className="relative group overflow-hidden rounded-[2rem] shadow-lg border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0dc383]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                {/* @ts-ignore */}
                                <img
                                  src={product.image3}
                                  alt={`${product.name} Third View`}
                                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                              </div>
                            )}

                            {/* @ts-ignore */}
                            {product.image4 && (
                              <div className="relative group overflow-hidden rounded-[2rem] shadow-lg border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1d4c73]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                {/* @ts-ignore */}
                                <img
                                  src={product.image4}
                                  alt={`${product.name} Fourth View`}
                                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1e2c29]/60 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </div>

                  {/* Separator Line (except for last item) */}
                  {idx < t.ecosystem.products.length - 1 && (
                    <div className="mt-32 flex items-center justify-center">
                      <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#1d4c73]/20 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats - Modern Grid with New Structure */}
      <section id="impact" className="py-24 bg-[#1d4c73] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">{t.impact.title}</h2>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.impact.stats.map((stat, idx) => (
              <div key={idx} className="p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                {/* Title - Small Green */}
                <h3 className="text-sm md:text-base font-bold mb-4 text-[#0dc383] tracking-wider uppercase">
                  {stat.title}
                </h3>

                {/* Subtitle - White Bold */}
                <h4 className="text-xl md:text-2xl font-bold mb-6 text-white leading-tight">
                  {stat.subtitle}
                </h4>

                {/* Text - Light Color, Normal Size */}
                <p className="text-[#f1f4f4]/90 text-base md:text-lg leading-relaxed font-normal">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Demo Section - Card Lift */}
      <section id="contact" className="py-24 bg-[#f1f4f4] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#1d4c73]/5 hover:shadow-[#1d4c73]/10 transition-shadow duration-500">
            <div className="p-10 md:p-20 text-center">

              <h2 className="text-4xl md:text-5xl font-bold text-[#1d4c73] mb-10 tracking-tight">
                {t.demoSection.title}
              </h2>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-6 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0bb075] text-white text-xl font-bold hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all transform hover:-translate-y-1 active:scale-95 mb-12"
              >
                {t.demoSection.buttonText}
              </a>

              <div className="text-left bg-[#f8fafc] p-8 md:p-10 rounded-[2rem] border border-[#1d4c73]/5 shadow-inner">
                <div className="text-sm md:text-base text-[#1d4c73] leading-relaxed whitespace-pre-line font-medium">
                  {t.demoSection.description}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e2c29] text-[#f1f4f4]/60 py-16 border-t border-[#1d4c73]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8 text-center mb-10">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#0dc383] flex items-center justify-center shadow-lg shadow-[#0dc383]/20">
                <img src="/icons/animikind-icon.png" alt="AnImiKind Icon" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold text-white text-2xl tracking-tight">AnImiKind</span>
            </div>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium text-[#f1f4f4]/90">
              {t.footer.description}
            </p>

            {/* Contact */}
            <p className="font-semibold text-[#0dc383] text-base md:text-lg tracking-wide">
              {t.footer.contact}
            </p>
          </div>

          {/* Divider and Bottom Links */}
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="opacity-80">
              {t.footer.rights}
            </div>
            <div className="flex flex-wrap justify-center gap-8 font-semibold uppercase tracking-wider">
              {t.footer.links.map((link, i) => (
                <a key={i} href="#" className="hover:text-[#0dc383] transition-colors hover:underline underline-offset-4">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <Chatbot lang={lang} content={t.chat} />

    </div>
  );
}

export default App;