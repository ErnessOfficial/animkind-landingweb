import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content';
import { cloudinaryMedia } from '../data/cloudinaryMedia';

const EcosystemPage: React.FC = () => {
    const { lang } = useLanguage();
    const t = content[lang];

    useEffect(() => {
        document.title = lang === 'en'
            ? 'The Ecosystem – AnImiKind Emotional-AI'
            : 'El Ecosistema – AnImiKind IA-Emocional';
    }, [lang]);

    return (
        <div className="pt-24">
            {/* AI Section */}
            <section className="py-24 bg-[#1e2c29] text-white overflow-hidden relative">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')" }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in-up">
                            <span className="inline-block py-1 px-3 rounded-lg bg-[#0dc383]/20 text-[#0dc383] font-bold tracking-wider uppercase text-xs mb-4 border border-[#0dc383]/30">
                                {t.aiSection.subtitle}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight text-relief">
                                {t.aiSection.title}
                            </h1>
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
                                    src={cloudinaryMedia.about.mascot}
                                    alt="Ani Character"
                                    className="hidden sm:block h-80 w-auto object-contain drop-shadow-2xl animate-pulse-slow"
                                />
                            </div>
                        </div>
                        <div className="relative animate-fade-in-up delay-200 flex flex-col items-center">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#0dc383] to-[#1d4c73] rounded-[2.5rem] blur-2xl opacity-40 animate-pulse"></div>
                            <img
                                src={cloudinaryMedia.ecosystem.emotionalAiBanner}
                                alt="Emotional AI Analysis Dashboard"
                                className="relative rounded-[2rem] shadow-2xl border border-white/10 w-full object-cover bg-[#1d4c73]/20 hover:scale-[1.02] transition-transform duration-500 mb-8"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Detail Images (migrated from modal) */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <img src={cloudinaryMedia.ecosystem.emotionalAiInterfacePrimary} alt="AI Web Interface" className="w-full h-auto rounded-xl shadow-lg" />
                    <img src={cloudinaryMedia.ecosystem.emotionalAiInterfaceSecondary} alt="Global App Interface" className="w-full h-auto rounded-xl shadow-lg" />
                </div>
            </section>

            {/* Ecosystem Overview */}
            <section className="py-32 bg-gradient-to-b from-white via-[#f8fafc] to-[#f1f4f4] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0dc383]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1d4c73]/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <div className="inline-block py-2 px-6 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-sm font-bold tracking-wider uppercase mb-6">
                            {lang === 'en' ? 'Complete Ecosystem' : 'Ecosistema Completo'}
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e2c29] mb-6 tracking-tight">
                            {t.ecosystem.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-[#1d4c73]/80 font-medium max-w-3xl mx-auto leading-relaxed">
                            {t.ecosystem.subtitle}
                        </p>
                    </div>

                    {/* Ecosystem Structure Image */}
                    <div className="mb-16 w-full p-6 md:p-10 bg-white/60 backdrop-blur-md rounded-[3rem] border-2 border-white shadow-2xl hover:shadow-[#0dc383]/10 transition-shadow duration-500">
                        <img
                            src={cloudinaryMedia.ecosystem.structureInterconnectedOverview}
                            alt="AnImiKind Ecosystem Structure"
                            className="w-full h-auto rounded-[2rem] shadow-xl"
                        />
                    </div>

                    {/* Platform Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {t.ecosystem.products.map((product, idx) => {
                            const hrefs = ['/platforms/animikind-app/', '/platforms/school-panel/', '/platforms/animikdemi/'];
                            return (
                                <Link
                                    key={idx}
                                    to={hrefs[idx]}
                                    className="group p-8 rounded-[2rem] bg-white border border-[#1d4c73]/5 hover:border-[#0dc383]/20 hover:shadow-2xl hover:shadow-[#0dc383]/10 hover:-translate-y-2 transition-all duration-300"
                                >
                                    {product.logo && (
                                        <img src={product.logo} alt={product.name} className="h-20 w-auto object-contain mb-6 group-hover:scale-105 transition-transform" />
                                    )}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0dc383]/10 text-[#0dc383] rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                                        <div className="w-2 h-2 bg-[#0dc383] rounded-full animate-pulse"></div>
                                        {product.tag}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e2c29] mb-3 group-hover:text-[#0dc383] transition-colors">{product.name}</h3>
                                    {product.tagline && (
                                        <p className="text-[#1d4c73]/70 italic font-medium mb-4">"{product.tagline}"</p>
                                    )}
                                    <span className="inline-flex items-center gap-2 text-[#0dc383] font-bold text-sm group-hover:gap-3 transition-all">
                                        {lang === 'en' ? 'View Details' : 'Ver Detalles'} <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section id="impact" className="py-24 bg-[#1d4c73] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">{t.impact.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {t.impact.stats.map((stat, idx) => (
                            <div key={idx} className="p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group">
                                <h3 className="text-sm md:text-base font-bold mb-4 text-[#0dc383] tracking-wider uppercase">{stat.title}</h3>
                                <h4 className="text-xl md:text-2xl font-bold mb-6 text-white leading-tight">{stat.subtitle}</h4>
                                <p className="text-[#f1f4f4]/90 text-base md:text-lg leading-relaxed font-normal">{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#f1f4f4]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e2c29] mb-6">
                        {lang === 'en' ? 'See Our Plans & Pricing' : 'Ver Nuestros Planes y Precios'}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/solutions/plans/"
                            className="px-8 py-4 rounded-full bg-[#0dc383] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all transform hover:-translate-y-1"
                        >
                            {lang === 'en' ? 'View Plans' : 'Ver Planes'}
                        </Link>
                        <Link
                            to="/demo/"
                            className="px-8 py-4 rounded-full bg-[#1e2c29] text-white font-bold text-lg hover:bg-[#1d4c73] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                        >
                            {lang === 'en' ? 'Book a Demo' : 'Reservar Demo'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcosystemPage;
