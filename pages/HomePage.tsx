import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Brain, Play, Gift, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content';
import { BrandIcon } from '../components/BrandIcon';
import { cloudinaryMedia } from '../data/cloudinaryMedia';

const HomePage: React.FC = () => {
    const { lang } = useLanguage();
    const t = content[lang];

    useEffect(() => {
        document.title = lang === 'en'
            ? 'AnImiKind – The Emotional-AI Powered Ecosystem'
            : 'AnImiKind – El Ecosistema Impulsado por IA-Emocional';
    }, [lang]);

    const IconMap: Record<string, React.ReactNode> = {
        Shield: <Shield className="w-10 h-10 text-[#0dc383]" />,
        Users: <Users className="w-10 h-10 text-[#eec843]" />,
        Brain: <Brain className="w-10 h-10 text-[#1d4c73]" />,
    };

    return (
        <>
            {/* ══ HERO ══ */}
            <section className="relative w-full flex flex-col pt-16">
                {/* Full-width banner image */}
                <div className="relative w-full" style={{ height: 'clamp(260px, 38vh, 420px)' }}>
                    <img
                        src={cloudinaryMedia.home.banner}
                        alt="AnImiKind Office"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
                </div>

                {/* Hero content block */}
                <div className="w-full bg-[#f1f4f4] py-10 px-4 sm:px-6 lg:px-8 text-center shadow-inner relative z-10">
                    <div className="max-w-5xl mx-auto space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 py-2 px-7 rounded-full bg-white border border-[#1d4c73]/15 text-[#1e2c29] text-xs md:text-sm font-bold tracking-[0.2em] uppercase shadow-sm">
                            {lang === 'en' ? 'Kind Intelligence - Trusted Technology' : 'Inteligencia Amable · Tecnología de Confianza'}
                        </div>

                        {/* LTHYH.svg brand mark */}
                        <div className="flex justify-center">
                            <img
                                src={cloudinaryMedia.home.lthyh}
                                alt="Lovely To Have You Here"
                                className="h-20 w-auto object-contain"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1d4c73] tracking-tight leading-tight">
                            {lang === 'en'
                                ? <>The UK&apos;s First Hybrid-Proactive{' '}<span className="text-[#0dc383]">Schools Wellbeing &amp; Safeguarding Ecosystem</span>{' '}Powered with Emotional-AI</>
                                : <>El Primer Ecosistema Híbrido-Proactivo del RU para{' '}<span className="text-[#0dc383]">el Bienestar y Salvaguarda Escolar</span>{' '}impulsado por IA Emocional</>}
                        </h1>

                        {/* Sub-paragraph */}
                        <p className="text-base md:text-lg text-[#1d4c73]/80 max-w-4xl mx-auto leading-relaxed font-medium">
                            {lang === 'en'
                                ? 'At AnimiKind, we believe that no child should have to navigate the complexities of bullying or emotional distress alone. Our purpose is to transform the safeguarding paradigm from reactive crisis management to proactive, empathetic prevention. By integrating cutting-edge Emotional Artificial Intelligence (EAI) with human-centric care, we provide educational institutions with the "Digital Emotional Safety Net" required to identify risks before they escalate. Discover AnImiKind, to enhance emotional literacy, detect risks early, and foster supportive environments for children, teenagers, parents, and school staff.'
                                : 'En AnimiKind creemos que ningún niño debería tener que enfrentarse solo a las complejidades del acoso o el malestar emocional. Nuestra misión es transformar el paradigma de la salvaguarda de la gestión reactiva de crisis a la prevención proactiva y empática. Integrando IA Emocional de vanguardia con una atención centrada en las personas, proporcionamos a las instituciones educativas la red de seguridad emocional digital necesaria para identificar riesgos antes de que se agraven.'}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                            <Link
                                to="/ecosystem/emotional-ai/"
                                className="px-8 py-4 rounded-full bg-[#0dc383] text-white font-bold text-base hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <BrandIcon name="Brain" color="white" size={18} weight="bold" />
                                {lang === 'en' ? 'Learn More About Emotional-AI' : 'Conocer la IA Emocional'}
                            </Link>
                            <Link
                                to={{
                                    pathname: '/resources/key-topics/',
                                    search: '?autoplay=tour',
                                    hash: '#video-presentations',
                                }}
                                className="px-8 py-4 rounded-full bg-white text-[#1d4c73] font-bold text-base border border-[#1d4c73]/15 hover:bg-[#f8fafc] hover:border-[#1d4c73]/30 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Play className="w-4 h-4 fill-[#1d4c73] text-[#1d4c73]" />
                                {lang === 'en' ? 'Watch a Video' : 'Ver un Vídeo'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ BULLYING STATS PARAGRAPH ══ */}
            <section className="py-10 bg-white border-b border-[#e5eaf0]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-base md:text-lg text-[#1d4c73] leading-relaxed font-medium">
                        {lang === 'en' ? (
                            <>
                                <strong className="text-[#1e2c29] font-bold">Bullying and cyberbullying are currently a serious and complex social issue that affects the emotional and mental well-being of young people every day.</strong>{' '}
                                AnimiKind Ecosystem is the solution to a social urgency driven by a shocking reality: According to the latest report from the Department for Education{' '}
                                <strong className="text-[#1e2c29] font-bold">"more than 25% of UK pupils aged between 7 and 13 report being victims of bullying, while almost 20% of online abuse in schools goes completely unreported".</strong>
                            </>
                        ) : (
                            <>
                                <strong className="text-[#1e2c29] font-bold">El acoso y ciberacoso son actualmente un problema social grave y complejo que afecta el bienestar emocional y mental de los jóvenes cada día.</strong>{' '}
                                El Ecosistema AnimiKind es la solución a una urgencia social impulsada por una realidad alarmante: según el último informe del Departamento de Educación{' '}
                                <strong className="text-[#1e2c29] font-bold">"más del 25% del alumnado del RU entre 7 y 13 años reporta haber sido víctima de acoso, mientras que casi el 20% del abuso online en las escuelas permanece completamente sin denunciar".</strong>
                            </>
                        )}
                    </p>
                </div>
            </section>

            {/* ══ WHY ANIMIKIND? + FULL REPORT DOWNLOAD ══ */}
            <section className="py-16 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1d4c73]/10 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">

                        {/* Left: Why AnimiKind? */}
                        <div className="flex flex-col items-center text-center bg-[#f8fafc] rounded-[2rem] border border-[#1d4c73]/5 p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1e2c29] mb-5 tracking-tight">
                                {lang === 'en' ? 'Why AnimiKind ?' : '¿Por qué AnimiKind ?'}
                            </h2>
                            <div className="overflow-hidden rounded-2xl border border-[#e5eaf0] shadow-md mb-5 w-full max-w-xs">
                                <img
                                    src={cloudinaryMedia.home.whyAnimikind}
                                    alt="AnimiKind ecosystem overview"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                            </div>
                            <p className="text-[#1d4c73] font-bold italic text-base mb-2">
                                {lang === 'en'
                                    ? '"Ultimately, true innovation isn\'t just intelligent; it is Kind."'
                                    : '"En definitiva, la verdadera innovación no es solo inteligente; es Amable."'}
                            </p>
                            <p className="text-[#1d4c73]/75 text-sm leading-relaxed mb-6 flex-1">
                                {lang === 'en'
                                    ? 'AnimiKind is the definitive solution to dismantle the silence surrounding school-based abuse and to offer a future of full well-being to children and adolescents.'
                                    : 'AnimiKind es la solución definitiva para desmantelar el silencio que rodea el abuso escolar y ofrecer un futuro de bienestar pleno para niños y adolescentes.'}
                            </p>
                            <div className="mt-auto">
                                <Link
                                    to="/about/why-us/"
                                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0dc383] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#0dc383]/30 transition-all hover:-translate-y-0.5"
                                >
                                    {lang === 'en' ? 'READ MORE' : 'LEER MÁS'}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Right: Full Report Download */}
                        <div className="flex flex-col items-center text-center bg-[#f8fafc] rounded-[2rem] border border-[#1d4c73]/5 p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1e2c29] mb-1 tracking-tight">
                                {lang === 'en' ? 'Full Report Download' : 'Descarga del Informe Completo'}
                            </h2>
                            {/* UK GOV logo */}
                            <div className="flex items-center justify-center mb-5">
                                <img
                                    src={cloudinaryMedia.home.ukGovernment}
                                    alt="UK Government"
                                    className="h-16 w-auto object-contain"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                            </div>
                            <div className="w-28 h-28 rounded-full flex items-center justify-center shadow-xl mb-5" style={{ background: 'linear-gradient(135deg, #eec843, #b07d1f)' }}>
                                <BrandIcon name="FilePdf" color="white" size={48} weight="duotone" />
                            </div>
                            <div className="w-12 h-1 rounded-full bg-[#0dc383] mb-5" />
                            <p className="text-[#1e2c29] font-semibold text-sm leading-relaxed mb-6 max-w-xs flex-1">
                                {lang === 'en'
                                    ? 'Read and Download (.pdf) the latest National Behaviour Survey (NBS) 2024 to 2025, published by the UK Department for Education (DfE) in November 2025.'
                                    : 'Lee y Descarga (.pdf) la última Encuesta Nacional de Comportamiento (NBS) 2024-2025, publicada por el Departamento de Educación del RU (DfE) en noviembre de 2025.'}
                            </p>
                            <div className="mt-auto">
                                <a
                                    href="https://www.gov.uk/government/publications/national-behaviour-survey-report-2024-to-2025-academic-year#:~:text=Survey%20findings%20on%20behaviour%20in,Education%20Published%2020%20November%202025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-bold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
                                    style={{ background: 'linear-gradient(135deg, #b07d1f, #eec843)' }}
                                >
                                    {lang === 'en' ? 'DOWNLOAD' : 'DESCARGAR'}
                                    <BrandIcon name="Download" color="white" size={16} weight="bold" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ VALUE PROPOSITION CARDS (3 cards — unchanged) ══ */}
            <section className="pb-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {t.valueProp.items.map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-[2rem] bg-[#f8fafc] border border-[#1d4c73]/5 hover:bg-white hover:border-[#0dc383]/20 hover:shadow-2xl hover:shadow-[#0dc383]/10 hover:-translate-y-2 transition-all duration-300">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md">
                                    {IconMap[item.icon]}
                                </div>
                                <h3 className="text-2xl font-bold text-[#1e2c29] mb-4 group-hover:text-[#0dc383] transition-colors">{item.title}</h3>
                                <p className="text-[#1d4c73]/80 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ══ FOMA — Find out More About AnimiKind ══ */}
            <section className="py-16 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* FOMA heading */}
                    <div className="flex justify-center mb-10">
                        <img
                            src={cloudinaryMedia.home.foma}
                            alt="Find out More About AnimiKind"
                            className="h-16 w-auto object-contain"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                    </div>

                    {/* Two cards */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Left: Purposeful Mindset */}
                        <div className="bg-white rounded-[2rem] border-2 border-[#1d4c73]/10 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                            {/* GearSix icon */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full border-2 border-[#0dc383] flex items-center justify-center">
                                    <BrandIcon name="GearSix" color="green" size={30} weight="duotone" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-extrabold text-[#1e2c29] text-center mb-5 tracking-tight">
                                {lang === 'en' ? 'Purposeful Mindset' : 'Mentalidad con Propósito'}
                            </h3>
                            <p className="text-[#1d4c73]/75 text-sm leading-relaxed mb-5 text-center">
                                {lang === 'en' ? (
                                    <><strong className="text-[#1e2c29]">AnimiKind Limited</strong> is a pioneering London-based EdHealthTech company operating at the vital intersection of <strong className="text-[#1e2c29]">behavioural sciences, advanced health technology, and regulatory compliance,</strong> focused on developing digital tools to assist schools in the effective management of <strong className="text-[#1e2c29]">safeguarding and school emotional wellbeing.</strong></>
                                ) : (
                                    <><strong className="text-[#1e2c29]">AnimiKind Limited</strong> es una empresa EdHealthTech pionera con sede en Londres que opera en la intersección vital de las <strong className="text-[#1e2c29]">ciencias conductuales, la tecnología sanitaria avanzada y el cumplimiento normativo,</strong> enfocada en desarrollar herramientas digitales para ayudar a las escuelas en la gestión eficaz de la <strong className="text-[#1e2c29]">salvaguarda y el bienestar emocional escolar.</strong></>
                                )}
                            </p>
                            <div className="flex justify-center mb-4">
                                <Link
                                    to="/about/social-focusing/"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1d4c73] text-white font-bold text-xs hover:bg-[#0b2340] transition-all hover:shadow-md"
                                >
                                    {lang === 'en' ? 'READ MORE' : 'LEER MÁS'} <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    { label: lang === 'en' ? '⚙ Who We Are' : '⚙ Quiénes Somos', href: '/about/origins/' },
                                    { label: lang === 'en' ? '⚙ Our Social Focusing' : '⚙ Nuestro Enfoque Social', href: '/about/social-focusing/' },
                                    { label: lang === 'en' ? '⚙ Our CPD Accreditation' : '⚙ Nuestra Acreditación CPD', href: '/platforms/animikdemi/' },
                                ].map((lnk, i) => (
                                    <Link
                                        key={i}
                                        to={lnk.href}
                                        className="px-4 py-2 rounded-full border-2 border-[#0dc383]/30 text-[#0dc383] text-xs font-bold hover:bg-[#0dc383] hover:text-white transition-all"
                                    >
                                        {lnk.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right: From Reactive to Proactive */}
                        <div className="bg-white rounded-[2rem] border-2 border-[#1d4c73]/10 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {/* Shield-check icon */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full border-2 border-[#0dc383] flex items-center justify-center">
                                    <BrandIcon name="ShieldCheck" color="green" size={30} weight="duotone" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-extrabold text-[#1e2c29] text-center mb-5 tracking-tight">
                                {lang === 'en' ? 'From Reactive to Proactive' : 'De lo Reactivo a lo Proactivo'}
                            </h3>
                            <p className="text-[#1d4c73]/75 text-sm leading-relaxed mb-5 text-center">
                                {lang === 'en' ? (
                                    <>Implementing a <strong className="text-[#1e2c29]">proactive hybrid model</strong> like the AnimiKind ecosystem represents a fundamental shift — from <strong className="text-[#1e2c29]">"reactive crisis management"</strong> to <strong className="text-[#1e2c29]">"data-driven prevention"</strong> in the education sector.</>
                                ) : (
                                    <>Implementar un <strong className="text-[#1e2c29]">modelo híbrido proactivo</strong> como el ecosistema AnimiKind representa un cambio fundamental: de la <strong className="text-[#1e2c29]">"gestión reactiva de crisis"</strong> a la <strong className="text-[#1e2c29]">"prevención basada en datos"</strong> en el sector educativo.</>
                                )}
                            </p>
                            <div className="flex justify-center mb-4">
                                <Link
                                    to="/ecosystem/proactive-approach/"
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1d4c73] text-white font-bold text-xs hover:bg-[#0b2340] transition-all hover:shadow-md"
                                >
                                    {lang === 'en' ? 'READ MORE' : 'LEER MÁS'} <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                            <p className="text-[#0dc383] font-bold text-sm text-center mb-4">
                                {lang === 'en' ? 'Learn more about...' : 'Aprende más sobre...'}
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    { label: lang === 'en' ? '⚙ Emotional-AI' : '⚙ IA Emocional', href: '/ecosystem/emotional-ai/' },
                                    { label: lang === 'en' ? '⚙ Unified Safeguarding' : '⚙ Salvaguarda Unificada', href: '/ecosystem/unified-safeguarding/' },
                                    { label: lang === 'en' ? '⚙ Digital Safety' : '⚙ Seguridad Digital', href: '/ecosystem/privacy-security/' },
                                ].map((lnk, i) => (
                                    <Link
                                        key={i}
                                        to={lnk.href}
                                        className="px-4 py-2 rounded-full border-2 border-[#0dc383]/30 text-[#0dc383] text-xs font-bold hover:bg-[#0dc383] hover:text-white transition-all"
                                    >
                                        {lnk.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ BANNER HOME3 ══ */}
            <div className="w-full">
                <img
                    src={cloudinaryMedia.home.bannerSecondary}
                    alt="AnimiKind"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Explore CTA Cards */}
            <section className="py-24 bg-gradient-to-b from-white to-[#f1f4f4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2c29] tracking-tight">
                            {lang === 'en' ? 'Explore Our Solutions' : 'Explora Nuestras Soluciones'}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'AnImiKind App', desc: lang === 'en' ? 'Proactive safeguarding for students & families' : 'Protección proactiva para estudiantes y familias', href: '/platforms/animikind-app/', img: cloudinaryMedia.home.animikindAppLogo },
                            { name: 'School Panel', desc: lang === 'en' ? 'Complete wellbeing management for schools' : 'Gestión completa de bienestar para escuelas', href: '/platforms/school-panel/', img: cloudinaryMedia.home.schoolPanelLogo },
                            { name: 'AnimiKdemi', desc: lang === 'en' ? 'Reflective learning simulator & CPD training' : 'Simulador de aprendizaje reflexivo y formación CPD', href: '/platforms/animikdemi/', img: cloudinaryMedia.home.animikdemiLogo },
                        ].map((card, idx) => (
                            <Link
                                key={idx}
                                to={card.href}
                                className="group p-8 rounded-[2rem] bg-white border border-[#1d4c73]/5 hover:border-[#0dc383]/20 hover:shadow-2xl hover:shadow-[#0dc383]/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <img src={card.img} alt={card.name} className="h-24 w-auto object-contain mb-6 group-hover:scale-105 transition-transform" />
                                <h3 className="text-xl font-bold text-[#1e2c29] mb-3 group-hover:text-[#0dc383] transition-colors">{card.name}</h3>
                                <p className="text-[#1d4c73]/70 font-medium mb-4">{card.desc}</p>
                                <span className="inline-flex items-center gap-2 text-[#0dc383] font-bold text-sm group-hover:gap-3 transition-all">
                                    {lang === 'en' ? 'Learn More' : 'Saber Más'} <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Commitment Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#0dc383]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1d4c73]/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8 animate-fade-in-up">
                            <blockquote className="text-2xl md:text-3xl font-bold text-[#0dc383] leading-tight italic border-l-4 border-[#0dc383] pl-6">
                                "{t.socialCommitment.quote}"
                            </blockquote>
                            <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white ring-1 ring-[#1d4c73]/10 hover:ring-[#0dc383]/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0dc383]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                <img src={cloudinaryMedia.home.socialCommitmentImage} alt="AnimiKind Social Commitment" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                        </div>

                        <div className="space-y-8 animate-fade-in-up delay-200">
                            <div className="inline-block py-2 px-6 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-sm font-bold tracking-wider uppercase">
                                {t.socialCommitment.badge}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1d4c73] tracking-tight leading-tight">
                                {t.socialCommitment.title}
                            </h2>
                            <p className="text-lg md:text-xl text-[#1e2c29]/80 leading-relaxed">
                                {t.socialCommitment.description}
                            </p>
                            <div className="space-y-6">
                                {t.socialCommitment.principles.map((principle, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0dc383]/20 to-[#0dc383]/10 flex items-center justify-center group-hover:from-[#0dc383] group-hover:to-[#0bb075] transition-all duration-300">
                                                <svg className="w-6 h-6 text-[#0dc383] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 2L12 22M12 2C8 2 8 6 8 8M12 2C16 2 16 6 16 8M8 8L16 8M8 8C6 8 6 10 6 12M16 8C18 8 18 10 18 12M6 12L18 12M6 12C6 14 6 16 8 16M18 12C18 14 18 16 16 16M8 16L16 16M8 16C8 18 8 22 12 22M16 16C16 18 16 22 12 22" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-[#f5a623] mb-2 tracking-wide">{principle.title}</h3>
                                            <p className="text-[#1e2c29]/70 leading-relaxed">{principle.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-4">
                                <a
                                    href="/Legal/Purpose & Profit_signed.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full lg:w-auto px-8 py-4 rounded-full bg-[#1e2c29] text-white font-bold text-base hover:bg-[#1d4c73] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 text-center"
                                >
                                    {t.socialCommitment.ctaButton}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Knowledge Hub Section */}
            <section className="py-20 bg-[#f4f7fb] border-t border-[#e5eaf0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight mb-3">
                            Empowering School Communities: The AnimiKind Knowledge Hub
                        </h2>
                        <p className="text-lg md:text-xl font-semibold text-[#1d4c73] mb-4">
                            Evidence-Based Insights for a Proactive Safeguarding Culture
                        </p>
                        <p className="text-[#1d4c73]/80 leading-relaxed max-w-5xl mx-auto">
                            Stay at the forefront of educational well-being with our curated selection of professional resources. Designed specifically for Headteachers, Designated Safeguarding Leads (DSLs), and Educators, this section bridges the gap between academic research and daily school life. Our commitment to improving the emotional climate in UK schools is delivered through various formats.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {[
                                { label: 'TheKindBlog', href: 'https://www.animikind.com/resources/blog/' },
                                { label: 'Key Topic Briefs', href: 'https://www.animikind.com/resources/key-topics/' },
                                { label: 'The Kind-Kit', href: 'https://www.animikind.com/resources/support-tools/' },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="px-4 py-2 rounded-full bg-white border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-wide hover:bg-[#1d4c73] hover:text-white transition-all"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
                        {/* Left big panel */}
                        <div className="bg-white rounded-[2rem] border border-[#1d4c73]/10 p-7 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-extrabold text-[#1e2c29] tracking-tight mb-3">
                                Expert Perspectives: TheKindBlog by AnimiKind
                            </h3>
                            <p className="text-[#1d4c73]/80 leading-relaxed mb-6">
                                In-depth blog articles featuring evidence-based reflections on the latest safeguarding trends and emotional well-being research.
                            </p>
                            <div className="rounded-2xl overflow-hidden border border-[#e5eaf0] shadow-md mb-6">
                                <img
                                    src="https://res.cloudinary.com/djybwowo6/image/upload/v1773149447/blog-miniatura_pzdkpf.png"
                                    alt="TheKindBlog resources preview"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://www.animikind.es/about-thekindblog"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0dc383] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#0dc383]/30 transition-all hover:-translate-y-0.5"
                                >
                                    Learn more about TheKindBlog
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.animikind.es/published-articles"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d4c73] text-white font-bold text-sm hover:bg-[#0b2340] transition-all hover:-translate-y-0.5"
                                >
                                    Go to the Post List
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Right split panels */}
                        <div className="grid grid-rows-2 gap-6">
                            {/* Right top */}
                            <div className="bg-white rounded-[2rem] border border-[#1d4c73]/10 p-7 shadow-sm hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-extrabold text-[#1e2c29] tracking-tight mb-3">Key Topic Brief</h3>
                                <p className="text-[#1d4c73]/80 text-sm leading-relaxed mb-5">
                                    Visual Essentials: Clear, high-impact visual reports (PDF), thematic infographics, and video presentations that break down complex behavioural patterns into actionable classroom insights.
                                </p>
                                <div className="rounded-xl overflow-hidden border border-[#e5eaf0] mb-5">
                                    <img
                                        src="https://res.cloudinary.com/djybwowo6/image/upload/v1773152817/resourses02_oemu8n.png"
                                        alt="Key Topic Brief visual essentials"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.animikind.com/resources/key-topics/"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0dc383] text-white font-bold text-xs hover:shadow-lg hover:shadow-[#0dc383]/30 transition-all"
                                    >
                                        See all Topics
                                    </a>
                                    <a
                                        href="https://www.animikind.com/resources/key-topics/?autoplay=tour#video-presentations"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1d4c73] text-white font-bold text-xs hover:bg-[#0b2340] transition-all"
                                    >
                                        Watch video
                                    </a>
                                </div>
                            </div>

                            {/* Right bottom */}
                            <div className="bg-white rounded-[2rem] border border-[#1d4c73]/10 p-7 shadow-sm hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-extrabold text-[#1e2c29] tracking-tight mb-3">The Kind Kit by AnimiKind</h3>
                                <p className="text-[#1d4c73]/80 text-sm leading-relaxed mb-5">
                                    Access the interactive emotional wellbeing ecosystem from here, with smooth navigation and an experience consistent with the rest of the site.
                                </p>
                                <div className="rounded-xl border border-[#e5eaf0] bg-[#f8fafc] p-4 mb-5 flex items-center justify-center">
                                    <img
                                        src="https://res.cloudinary.com/djybwowo6/image/upload/v1772859589/kindkit-logo_zcrtn7.png"
                                        alt="The Kind-Kit by AnimiKind"
                                        className="h-24 w-auto object-contain"
                                    />
                                </div>
                                <a
                                    href="https://www.animikind.com/resources/support-tools/"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0dc383] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#0dc383]/30 transition-all"
                                >
                                    Take a look Now
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-[#1e2c29]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {lang === 'en' ? "Ready to Transform Your School's Wellbeing?" : '¿Listo para Transformar el Bienestar de tu Escuela?'}
                    </h2>
                    <p className="text-[#f1f4f4]/80 text-lg mb-8 max-w-2xl mx-auto">
                        {lang === 'en'
                            ? 'Book a free, personalised demo to see how AnImiKind can support your institution.'
                            : 'Reserva una demo personalizada y gratuita para ver cómo AnImiKind puede apoyar a tu institución.'}
                    </p>
                    <Link
                        to="/demo/"
                        className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0bb075] text-white text-xl font-bold hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all transform hover:-translate-y-1 active:scale-95"
                    >
                        {t.demoSection.buttonText}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
