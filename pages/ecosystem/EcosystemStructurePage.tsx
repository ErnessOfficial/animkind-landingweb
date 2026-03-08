import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const EcosystemStructurePage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Estructura del Ecosistema – AnImiKind' : 'Ecosystem Structure – AnImiKind';
    }, [lang]);

    interface AppCard {
        num: string;
        logo: string;
        logoAlt: string;
        tag: string;
        tagEs: string;
        name: string;
        nameEs: string;
        tagline: string;
        taglineEs: string;
        href: string;
        accentHex: string;
        iconName: 'DeviceMobile' | 'PresentationChart' | 'Graduation';
        iconColor: 'green' | 'white' | 'gold';
        tileBg: string;
        tileBorder: string;
        learnColor: string;
        borderColor: string;
    }

    const apps: AppCard[] = [
        {
            num: '01',
            logo: cloudinaryMedia.home.animikindAppLogo,
            logoAlt: 'AnimiKind App',
            tag: 'Kind Intelligence for Students',
            tagEs: 'Inteligencia Amable para Alumnos',
            name: 'AnimiKind App',
            nameEs: 'AnimiKind App',
            tagline: 'The Non-Invasive Early Detector & a safe student support for a more effective safeguarding and youngest wellbeing.',
            taglineEs: 'El detector temprano no invasivo y un soporte seguro para el alumno orientado a una salvaguarda más efectiva y al bienestar de los más jóvenes.',
            href: '/components/animikind-app/',
            accentHex: '#0dc383',
            iconName: 'DeviceMobile',
            iconColor: 'green',
            tileBg: 'rgba(13,195,131,0.18)',
            tileBorder: 'rgba(13,195,131,0.45)',
            learnColor: '#0dc383',
            borderColor: '#0dc383',
        },
        {
            num: '02',
            logo: cloudinaryMedia.home.schoolPanelLogo,
            logoAlt: 'AnimiKind School Panel',
            tag: 'A Route For Everyone',
            tagEs: 'Un Camino Para Todos',
            name: es ? 'Panel Escolar' : 'School Panel',
            nameEs: 'Panel Escolar',
            tagline: es
                ? 'El cerebro operativo del ecosistema para DSLs y equipos de salvaguarda.'
                : 'The operational brain of the ecosystem for DSLs and safeguarding teams.',
            taglineEs: 'El cerebro operativo del ecosistema para DSLs y equipos de salvaguarda.',
            href: '/components/school-panel/',
            accentHex: '#ffffff',
            iconName: 'PresentationChart',
            iconColor: 'white',
            tileBg: 'rgba(255,255,255,0.12)',
            tileBorder: 'rgba(255,255,255,0.28)',
            learnColor: '#b07d1f',
            borderColor: '#1d4c73',
        },
        {
            num: '03',
            logo: cloudinaryMedia.home.animikdemiLogo,
            logoAlt: 'AnimiKdemi',
            tag: 'A Route For Everyone',
            tagEs: 'Un Camino Para Todos',
            name: 'AnimiKdemi',
            nameEs: 'AnimiKdemi',
            tagline: es
                ? 'Simulador de aprendizaje reflexivo impulsado por IA Emocional para alumnos y educadores.'
                : 'Emotional-AI powered reflective learning simulator for students and educators alike.',
            taglineEs: 'Simulador de aprendizaje reflexivo impulsado por IA Emocional para alumnos y educadores.',
            href: '/components/animikdemi/',
            accentHex: '#eec843',
            iconName: 'Graduation',
            iconColor: 'gold',
            tileBg: 'rgba(238,200,67,0.18)',
            tileBorder: 'rgba(238,200,67,0.45)',
            learnColor: '#b07d1f',
            borderColor: '#b07d1f',
        },
    ];

    return (
        <div className="pt-16">

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[420px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#0f2d50] to-[#1d4c73]" />

                {/* Grid dot texture */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, col) =>
                        Array.from({ length: 5 }).map((_, row) => (
                            <circle key={`${col}-${row}`} cx={col * 170 + 60} cy={row * 105 + 52} r="3" fill="#0dc383" />
                        ))
                    )}
                </svg>

                {/* Network watermark */}
                <div className="absolute right-0 top-0 h-full w-[380px] flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Network" color="green" size={380} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6">
                        <BrandIcon name="Network" color="green" size={13} weight="bold" />
                        {es ? 'El Ecosistema AnimiKind' : 'The AnimiKind Ecosystem'}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                        {es
                            ? <><span className="text-[#0dc383]">Estructura</span> del Ecosistema</>
                            : <><span className="text-[#0dc383]">Ecosystem</span> Structure</>}
                    </h1>

                    <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                        {es
                            ? 'Tres aplicaciones interconectadas. Un motor de IA Emocional. Una red de seguridad digital de 360° que conecta a alumnos, familias y escuelas en un único flujo de datos cohesionado.'
                            : 'Three interconnected applications. One Emotional AI engine. A 360° digital safety net connecting students, families, and schools in a single, cohesive data flow.'}
                    </p>

                    {/* 3-app mini icon strip */}
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        {[
                            { icon: 'DeviceMobile' as const, color: 'green' as const, label: 'AnimiKind App' },
                            { icon: 'PresentationChart' as const, color: 'white' as const, label: es ? 'Panel Escolar' : 'School Panel' },
                            { icon: 'Graduation' as const, color: 'gold' as const, label: 'AnimiKdemi' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/20">
                                <BrandIcon name={item.icon} color={item.color} size={18} weight="duotone" />
                                <span className="text-white/90 font-semibold text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ── Banner below hero ── */}
            <section className="bg-white">
                <img
                    src={cloudinaryMedia.ecosystem.structureBannerBelowHero}
                    alt="Ecosystem banner"
                    className="w-full h-auto object-cover object-center block"
                />
            </section>

            {/* ══ STRUCTURE DIAGRAM ══ */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="p-6 md:p-10 bg-[#f4f7fb] rounded-[3rem] border border-[#e5eaf0] shadow-xl">
                        <img
                            src={cloudinaryMedia.ecosystem.structureInterconnectedOverview}
                            alt="AnImiKind Ecosystem Structure Diagram"
                            className="w-full h-auto rounded-[2rem] shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ══ THREE APP CARDS ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Las Tres Aplicaciones' : 'The Three Applications'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Cada App, Un Propósito. Un Solo Ecosistema.' : 'Each App, One Purpose. One Ecosystem.'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {apps.map((app, i) => (
                            <div
                                key={i}
                                className="group flex flex-col bg-white rounded-[1.75rem] border-2 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
                                style={{ borderColor: `${app.borderColor}44`, animationDelay: `${i * 110}ms` }}
                            >
                                {/* Dark icon header */}
                                <div className="flex flex-col items-center justify-center px-6 py-10 gap-5" style={{ background: '#1d4c73' }}>
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                                        style={{ background: app.tileBg, border: `2px solid ${app.tileBorder}` }}
                                    >
                                        <BrandIcon name={app.iconName} color={app.iconColor} size={38} weight="duotone" />
                                    </div>
                                    {/* Logo */}
                                    <img
                                        src={app.logo}
                                        alt={app.logoAlt}
                                        className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                    />
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col flex-1 px-7 py-6">
                                    {/* Green/coloured tag */}
                                    <div className="inline-flex items-center gap-1.5 mb-4">
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: app.accentHex }} />
                                        <span className="text-[11px] font-extrabold tracking-widest uppercase" style={{ color: app.accentHex }}>
                                            {es ? app.tagEs : app.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-[#1e2c29] mb-3 leading-snug group-hover:text-[#1d4c73] transition-colors">
                                        {es ? app.nameEs : app.name}
                                    </h3>

                                    <p className="text-[#1d4c73]/70 text-sm leading-relaxed flex-1 mb-6">
                                        {es ? app.taglineEs : app.tagline}
                                    </p>

                                    {/* Learn More link */}
                                    <Link
                                        to={app.href}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 mt-auto"
                                        style={{
                                            color: app.learnColor,
                                            borderColor: `${app.learnColor}44`,
                                            background: `${app.learnColor}10`,
                                        }}
                                    >
                                        <BrandIcon name="ArrowCircleRight" color={app.iconColor === 'white' ? 'gold' : app.iconColor} size={16} weight="duotone" />
                                        {es ? 'Saber Más' : 'Learn More'}
                                    </Link>
                                </div>

                                {/* Hover accent bar */}
                                <div
                                    className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                    style={{ background: `linear-gradient(to right, ${app.accentHex}, ${app.accentHex}44)` }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* ── Ecosystem diagram image below the cards ── */}
                    <div className="mt-14 animate-fadeSlideUp" style={{ animationDelay: '380ms' }}>
                        <img
                            src={cloudinaryMedia.ecosystem.structureBelowCards}
                            alt="AnimiKind Ecosystem — interconnected overview"
                            className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0] hover:shadow-2xl transition-shadow"
                        />
                    </div>
                </div>
            </section>

            {/* ── Product logos strip ── */}
            <section className="py-10 bg-[#f4f7fb]">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="grid grid-cols-3 gap-6 items-center">
                        {[cloudinaryMedia.home.animikindAppLogo, cloudinaryMedia.home.schoolPanelLogo, cloudinaryMedia.home.animikdemiLogo].map((logoSrc, i) => (
                            <div key={i} className="rounded-2xl bg-white border border-[#e5eaf0] shadow-sm p-4 flex items-center justify-center">
                                <img
                                    src={logoSrc}
                                    alt="AnimiKind product logo"
                                    className="h-10 sm:h-12 w-auto object-contain opacity-95"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <IconBadge name="Sparkle" color="gold" size="lg" bg="rgba(238,200,67,0.15)" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
                        {es ? '¿Listo para Explorar el Ecosistema?' : 'Ready to Explore the Ecosystem?'}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Reserva una demo gratuita y descubre cómo las tres aplicaciones trabajan juntas para proteger a tus alumnos.'
                            : 'Book a free demo and discover how the three applications work together to safeguard your students.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/demo/"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                            {es ? 'Reservar Demo Gratuita' : 'Book a Free Demo'}
                        </Link>
                        <Link
                            to="/ecosystem/unified-safeguarding/"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all transform hover:-translate-y-1"
                        >
                            <BrandIcon name="ShieldCheck" color="green" size={18} weight="bold" />
                            {es ? 'Protección Unificada' : 'Unified Safeguarding'}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EcosystemStructurePage;
