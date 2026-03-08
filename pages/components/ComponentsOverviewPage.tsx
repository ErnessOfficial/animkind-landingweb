import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../content';
import { BrandIcon } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const ComponentsOverviewPage: React.FC = () => {
    const { lang } = useLanguage();
    const t = content[lang];

    useEffect(() => {
        document.title = lang === 'en' ? 'Components Overview – AnImiKind' : 'Visión General de Componentes – AnImiKind';
    }, [lang]);

    const productHrefs = ['/platforms/animikind-app/', '/platforms/school-panel/', '/platforms/animikdemi/'];

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(24px);} to { opacity:1; transform:translateY(0);} }
                .animate-fsu { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ══ HERO BANNER — aligned with site style ══ */}
            <section className="relative w-full min-h-[340px] flex items-center overflow-hidden">
                {/* Background gradient: navy → green, same pattern as platform pages */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#0a3d28]" />

                {/* Subtle dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 340" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, c) => Array.from({ length: 4 }).map((_, r) => (
                        <circle key={`${c}-${r}`} cx={c * 175 + 80} cy={r * 90 + 50} r="3" fill="#0dc383" />
                    )))}
                    {[[80, 50, 255, 140], [255, 140, 430, 60], [430, 60, 605, 150], [605, 150, 780, 70], [780, 70, 955, 160], [160, 290, 430, 240], [430, 240, 700, 300]].map(([x1, y1, x2, y2], i) => (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="5 8" />
                    ))}
                </svg>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 text-center w-full">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5 animate-fsu">
                        <div className="w-1.5 h-1.5 bg-[#0dc383] rounded-full animate-pulse" />
                        {lang === 'en' ? 'The Tri-App Ecosystem' : 'El Ecosistema Tri-App'}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 animate-fsu" style={{ animationDelay: '60ms' }}>
                        {lang === 'en'
                            ? <><span className="text-[#0dc383]">Components</span> Overview</>
                            : <>Visión General de <span className="text-[#0dc383]">Componentes<br /></span></>}
                    </h1>

                    <p className="text-white/75 text-lg max-w-3xl mx-auto leading-relaxed animate-fsu" style={{ animationDelay: '120ms' }}>
                        {t.ecosystem.subtitle}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-6 animate-fsu" style={{ animationDelay: '180ms' }}>
                        {(lang === 'en'
                            ? ['AnimiKind App · Students', 'School Panel · Staff', 'AnimiKdemi · CPD Training']
                            : ['AnimiKind App · Alumnos', 'School Panel · Personal', 'AnimiKdemi · Formación CPD']
                        ).map((tag, i) => (
                            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-xs font-semibold">
                                <BrandIcon name="CheckCircle" color="green" size={12} weight="fill" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ UNIFIED.PNG — below banner ══ */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fsu">
                        <img
                            src={cloudinaryMedia.components.overviewImagePrimary}
                            alt={lang === 'en' ? 'Unified AnimiKind Ecosystem' : 'Ecosistema AnimiKind Unificado'}
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                    </div>
                </div>
            </section>

            {/* ══ THREE PRODUCT CARDS ══ */}
            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                            {lang === 'en' ? <>The <span className="text-[#0dc383]">Three Pillars</span> of the Ecosystem</> : <>Los <span className="text-[#0dc383]">Tres Pilares</span> del Ecosistema</>}
                        </h2>
                        <p className="mt-2 text-[#1d4c73]/60 max-w-xl mx-auto text-sm">
                            {lang === 'en' ? 'Each component is built for a distinct audience but shares the same EAI backbone.' : 'Cada componente está diseñado para un público distinto pero comparte el mismo núcleo EAI.'}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {t.ecosystem.products.map((product, idx) => (
                            <Link
                                key={idx}
                                to={productHrefs[idx]}
                                className="group p-8 rounded-[2rem] bg-white border-2 border-[#1d4c73]/5 hover:border-[#0dc383]/25 hover:shadow-2xl hover:shadow-[#0dc383]/10 hover:-translate-y-2 transition-all duration-300 flex flex-col animate-fsu"
                                style={{ animationDelay: `${idx * 80}ms` }}
                            >
                                {product.logo && (
                                    <img
                                        src={product.logo}
                                        alt={product.name}
                                        className="h-24 w-auto object-contain mb-6 group-hover:scale-105 transition-transform"
                                    />
                                )}
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0dc383]/10 text-[#0dc383] rounded-full text-xs font-bold tracking-wide uppercase mb-4 w-fit">
                                    <div className="w-2 h-2 bg-[#0dc383] rounded-full animate-pulse" />
                                    {product.tag}
                                </div>
                                <h3 className="text-xl font-extrabold text-[#1e2c29] mb-3 group-hover:text-[#0dc383] transition-colors">{product.name}</h3>
                                {product.tagline && (
                                    <p className="text-[#1d4c73]/70 italic font-medium mb-4 text-sm">"{product.tagline}"</p>
                                )}
                                <p className="text-[#1d4c73]/75 text-sm leading-relaxed mb-6 flex-1">
                                    {product.description.substring(0, 200)}…
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#0dc383] font-bold text-sm group-hover:gap-3 transition-all mt-auto">
                                    {lang === 'en' ? 'Learn More' : 'Saber Más'} <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ ECOSYSTEM STRUCTURE DIAGRAM ══ */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                            {lang === 'en' ? 'Emotional-AI Powered' : 'Impulsado por IA Emocional'}
                        </span>
                    </div>
                    <div className="p-4 md:p-8 bg-[#f4f7fb] rounded-[3rem] border border-[#e5eaf0] shadow-xl">
                        <img
                            src={cloudinaryMedia.components.overviewEmotionalAiPowered}
                            alt="AnImiKind Emotional-AI powered overview"
                            className="w-full h-auto rounded-[2rem] shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ══ VIDEO PLAYER ══ */}
            <section className="py-20 bg-[#0b2340]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            <BrandIcon name="Lightning" color="green" size={13} weight="fill" />
                            {lang === 'en' ? 'Watch it in Action' : 'Míralo en Acción'}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            {lang === 'en' ? 'See AnImiKind in Action' : 'Ve AnImiKind en Acción'}
                        </h2>
                        <p className="mt-2 text-white/60 max-w-xl mx-auto text-sm">
                            {lang === 'en'
                                ? 'Discover how our ecosystem transforms emotional wellbeing in schools.'
                                : 'Descubre cómo nuestro ecosistema transforma el bienestar emocional en las escuelas.'}
                        </p>
                    </div>

                    {/* Real video player — same as DemoPage */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/15">
                        <div className="aspect-video w-full">
                            <video
                                src={cloudinaryMedia.components.overviewVideo}
                                className="w-full h-full object-contain bg-black"
                                controls
                                preload="metadata"
                            />
                        </div>
                    </div>

                    {/* CTA below video */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Link
                            to="/demo/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0dc383] text-white font-bold hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all hover:-translate-y-0.5"
                        >
                            <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                            {lang === 'en' ? 'Book a Free Demo' : 'Reservar Demo Gratuita'}
                        </Link>
                        <Link
                            to="/ecosystem/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5"
                        >
                            <ArrowRight className="w-4 h-4" />
                            {lang === 'en' ? 'Explore the Ecosystem' : 'Explorar el Ecosistema'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentsOverviewPage;
