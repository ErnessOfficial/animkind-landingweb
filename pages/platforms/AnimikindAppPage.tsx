import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../content';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const AnimikindAppPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';
    const t = content[lang];
    const product = t.ecosystem.products[0];

    useEffect(() => {
        document.title = es
            ? 'AnImiKind App – Protección para Estudiantes y Familias'
            : 'AnImiKind App – Safeguarding for Students & Families';
    }, [lang]);

    return (
        <div className="pt-16">

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[440px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#0f2d50] to-[#1d4c73]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 440" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, col) =>
                        Array.from({ length: 5 }).map((_, row) => (
                            <circle key={`${col}-${row}`} cx={col * 170 + 60} cy={row * 110 + 55} r="3" fill="#0dc383" />
                        ))
                    )}
                </svg>
                <div className="absolute right-0 top-0 h-full w-[400px] flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="DeviceMobile" color="green" size={400} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-12 w-full">
                    {/* Left text */}
                    <div className="flex-1 space-y-6 text-white max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                            <div className="w-1.5 h-1.5 bg-[#0dc383] rounded-full animate-pulse" />
                            {es ? 'El Centinela del Alumno' : 'The Student Sentinel'}
                        </span>

                        {/* App logo */}
                        {product.logo && (
                            <img
                                src={product.logo}
                                alt="AnimiKind App Logo"
                                className="h-32 w-auto object-contain drop-shadow-2xl"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        )}

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                            {es
                                ? <><span className="text-[#0dc383]">AnimiKind</span> App</>
                                : <><span className="text-[#0dc383]">AnimiKind</span> App</>}
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            {es
                                ? 'Un guardián personal para alumnos de 8 a 18 años. Detección proactiva de riesgos, acompañamiento empático con «Ani» y conexión directa con la escuela y la familia.'
                                : 'A personal guardian for students aged 8–18. Proactive risk detection, empathetic support with "Ani," and direct connection to school and family.'}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {(es
                                ? ['Alumnos 8–18', 'IA Emocional', 'Sin Vigilancia Invasiva', 'GDPR']
                                : ['Students 8–18', 'Emotional AI', 'No Invasive Surveillance', 'GDPR']
                            ).map((tag, i) => (
                                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                    <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/demo/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all hover:-translate-y-0.5">
                                <BrandIcon name="Calendar" color="white" size={16} weight="bold" />
                                {es ? 'Reservar Demo' : 'Book a Demo'}
                            </Link>
                            <Link to="/ecosystem/unified-safeguarding/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5">
                                <BrandIcon name="Network" color="green" size={16} weight="bold" />
                                {es ? 'Ver Ecosistema' : 'View Ecosystem'}
                            </Link>
                        </div>
                    </div>

                    {/* Right: hero screenshot */}
                    {product.image && (
                        <div className="flex-shrink-0 w-full lg:w-auto max-w-lg">
                            <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/20">
                                <img
                                    src={product.image}
                                    alt="AnimiKind App preview"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <style>{`
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
                @keyframes growBar { from { width: 0%; } to { width: var(--bar-w); } }
                .bar-animate { animation: growBar 1.2s cubic-bezier(0.22,0.68,0,1.2) forwards; }
            `}</style>

            {/* ══ SECTION 2 — CORE FEATURES ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Funciones Clave' : 'Core Features'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es
                                ? <>Características Clave de <span className="text-[#0dc383]">AnimiKind</span></>
                                : <>Core Features of <span className="text-[#0dc383]">AnimiKind</span></>}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Sustituyendo el reporting pasivo por un compromiso proactivo mediante tecnología de IA Emocional de vanguardia.'
                                : 'Replacing passive reporting with proactive engagement through cutting-edge Emotional AI technology.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'Heart' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Diario Emocional & Ani' : 'Emotional Diary & Ani',
                                body: es
                                    ? 'Los alumnos interactúan con Ani, un compañero empático de IA, mediante texto o chat de voz con análisis de sentimiento en tiempo real y PNL.'
                                    : 'Students interact with Ani, an empathetic AI companion, through text or voice chat using NLP and real-time sentiment analysis.',
                            },
                            {
                                icon: 'Warning' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Detección Proactiva de Riesgo' : 'Proactive Risk Detection',
                                body: es
                                    ? 'La EAI detecta activamente señales de angustia de bajo nivel y patrones de acoso o ciberacoso, incluso si los alumnos minimizan su experiencia.'
                                    : 'EAI actively detects low-level distress cues and patterns of bullying or cyberbullying, even if pupils minimise their experience.',
                            },
                            {
                                icon: 'Heartbeat' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Planes de Acción Personalizados' : 'Personalised Action Plans',
                                body: es
                                    ? 'La IA genera planes de acción a medida, ofreciendo estrategias de regulación emocional o guía de gestión segura según los niveles de riesgo.'
                                    : 'AI generates tailored action plans — offering emotional regulation strategies or safe management guidance based on risk levels.',
                            },
                            {
                                icon: 'ShieldCheck' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Reporte con Un Clic' : 'One-Click Reporting',
                                body: es
                                    ? 'La función Safe Link permite a los alumnos escalar casos a Adultos de Confianza o escuelas al instante con resúmenes contextuales redactados por IA.'
                                    : 'Safe Link feature allows students to escalate cases to Trusted Adults or schools instantly with AI-drafted contextual summaries.',
                            },
                            {
                                icon: 'Lock' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Filosofía de Espacio Seguro' : 'Safe Space Philosophy',
                                body: es
                                    ? 'Una «Zona Amable» digital no punitiva donde los jóvenes pueden expresar sus sentimientos libremente sin vigilancia invasiva.'
                                    : 'Non-judgmental digital "Kind Zone" where young people can safely express their feelings without invasive surveillance.',
                            },
                            {
                                icon: 'Brain' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Robótica Empática' : 'Empathetic Robotics',
                                body: es
                                    ? 'Construido sobre principios de «Kind Intelligence», proporciona apoyo emocional que fomenta la revelación incluso en quienes sufren en silencio.'
                                    : 'Built on "Kind Intelligence" principles, providing emotional support that encourages disclosure from silent sufferers.',
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="group flex flex-col bg-[#f4f7fb] rounded-[1.75rem] border-2 border-transparent hover:border-[#0dc383]/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 animate-fadeSlideUp"
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm" style={{ background: `${card.accentHex}18`, border: `2px solid ${card.accentHex}33` }}>
                                    <BrandIcon name={card.icon} color={card.color} size={24} weight="duotone" />
                                </div>
                                <h3 className="text-base font-extrabold text-[#1e2c29] mb-2 leading-snug">{card.title}</h3>
                                <p className="text-[#1d4c73]/65 text-sm leading-relaxed">{card.body}</p>
                                <div className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: card.accentHex }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — 7.png feature visual ══ */}
            <section className="py-12 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.platforms.appBelowCore}
                            alt="AnimiKind App — feature overview"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4A — SCREENSHOT 2 ══ */}
            {product.image2 && (
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                            <img src={product.image2} alt="AnimiKind App — view 2" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </div>
                </section>
            )}

            {/* ══ SECTION 4 — TRI-APP ECOSYSTEM ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Ecosistema Tri-App' : 'The Tri-App Ecosystem'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            {es
                                ? <>El Ecosistema <span className="text-[#0dc383]">Tri-App</span></>
                                : <>The <span className="text-[#0dc383]">Tri-App</span> Ecosystem</>}
                        </h2>
                        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
                            {es
                                ? 'La AnimiKind App es el primer pilar vital de la salvaguarda integrada, conectando a alumnos, escuelas y comunidades.'
                                : 'AnimiKind App is the vital first pillar of integrated safeguarding, connecting students, schools, and communities.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'DeviceMobile' as const, color: 'green' as const,
                                accentHex: '#0dc383', tileBg: 'rgba(13,195,131,0.22)', tileBorder: 'rgba(13,195,131,0.5)',
                                label: es ? 'El Guardián Personal' : 'The Personal Guardian',
                                title: 'AnimiKind App',
                                subtitle: es ? 'Centinela del Alumno · 8–18 años' : 'Student Sentinel · Ages 8–18',
                                features: es
                                    ? ['Apoyo emocional en tiempo real', 'Detección proactiva de riesgo', 'Reporte con un clic', 'Entorno de espacio seguro']
                                    : ['Real-time emotional support', 'Proactive risk detection', 'One-click reporting', 'Safe Space environment'],
                                isActive: true,
                            },
                            {
                                icon: 'PresentationChart' as const, color: 'white' as const,
                                accentHex: '#60a5fa', tileBg: 'rgba(255,255,255,0.12)', tileBorder: 'rgba(255,255,255,0.28)',
                                label: es ? 'La Torre de Control' : 'The Control Tower',
                                title: es ? 'Panel Escolar' : 'School Panel',
                                subtitle: es ? 'Inteligencia accionable para DSLs' : 'Actionable intelligence for DSLs',
                                features: es
                                    ? ['Expedientes de casos objetivos', 'Registros de incidentes cronológicos', 'Datos de evaluación de riesgo', 'Evidencia lista para Ofsted']
                                    : ['Objective case files', 'Chronological incident logs', 'Risk assessment data', 'Ofsted-ready evidence'],
                                isActive: false,
                            },
                            {
                                icon: 'Graduation' as const, color: 'gold' as const,
                                accentHex: '#eec843', tileBg: 'rgba(238,200,67,0.18)', tileBorder: 'rgba(238,200,67,0.42)',
                                label: es ? 'Simulador de Aprendizaje Reflexivo' : 'Reflective Learning Simulator',
                                title: 'AnimiKdemi',
                                subtitle: es ? 'Plataforma de formación acreditada por CPD' : 'CPD-accredited training platform',
                                features: es
                                    ? ['Formación en seguridad digital', 'Sinergia cultural', 'Educación comunitaria', 'Desarrollo profesional']
                                    : ['Digital safety training', 'Cultural synergy', 'Community education', 'Professional development'],
                                isActive: false,
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className={`group rounded-[1.75rem] border-2 overflow-hidden transition-all duration-300 animate-fadeSlideUp ${card.isActive ? 'border-[#0dc383]/60 shadow-2xl shadow-[#0dc383]/20 scale-[1.02]' : 'border-white/15 hover:border-white/30 hover:shadow-xl'}`}
                                style={{ background: 'rgba(255,255,255,0.05)', animationDelay: `${i * 110}ms` }}
                            >
                                <div className="flex flex-col items-start gap-3 px-7 py-8">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-1" style={{ background: card.tileBg, border: `2px solid ${card.tileBorder}` }}>
                                        <BrandIcon name={card.icon} color={card.color} size={28} weight="duotone" />
                                    </div>
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-white/50">{card.label}</span>
                                    <h3 className="text-xl font-extrabold text-white">{card.title}</h3>
                                    <p className="text-white/55 text-sm">{card.subtitle}</p>
                                    <ul className="mt-3 space-y-2 w-full">
                                        {card.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                                                <BrandIcon name="CheckCircle" color={card.color === 'white' ? 'green' : card.color} size={15} weight="fill" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Seamless Data Flow strip */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <div className="h-[2px] w-24 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #0dc383)' }} />
                        <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                        <span className="text-white/50 text-sm font-semibold tracking-wider uppercase">{es ? 'Flujo de Datos Unificado' : 'Seamless Data Flow'}</span>
                        <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                        <div className="h-[2px] w-24 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #0dc383)' }} />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 5 — SOLVING THE SILENT CRISIS ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <div className="space-y-8 animate-fadeSlideUp">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                                    {es ? 'El Problema Central' : 'The Core Problem'}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                                    {es ? 'Resolviendo la «Crisis Silenciosa»' : 'Solving the "Silent Crisis"'}
                                </h2>
                                <p className="mt-3 text-[#1d4c73]/70 leading-relaxed">
                                    {es
                                        ? 'El 20% de los jóvenes que experimentan ciberacoso nunca lo denuncian verbalmente. AnimiKind cambia eso.'
                                        : 'The nearly 20% of young people who experience cyberbullying but never verbally report it. AnimiKind changes that.'}
                                </p>
                            </div>

                            <div className="space-y-5">
                                {[
                                    {
                                        icon: 'UsersThree' as const, color: 'navy' as const,
                                        title: es ? 'Fomentando la Revelación' : 'Encouraging Disclosure',
                                        body: es
                                            ? 'El compromiso empático y conversacional con la IA anima a los alumnos que de otro modo permanecerían en silencio a buscar apoyo.'
                                            : 'Empathetic, conversational AI engagement encourages pupils who would otherwise remain silent to seek support.',
                                    },
                                    {
                                        icon: 'TrendUp' as const, color: 'green' as const,
                                        title: es ? 'Prevención Basada en Datos' : 'Data-Driven Prevention',
                                        body: es
                                            ? 'Cambiando la cultura escolar de la gestión reactiva de crisis a la intervención temprana y proactiva.'
                                            : 'Shifting school culture from reactive crisis management to early, proactive intervention.',
                                    },
                                    {
                                        icon: 'Network' as const, color: 'navy' as const,
                                        title: es ? 'Cerrando la Brecha' : 'Bridging the Gap',
                                        body: es
                                            ? 'Conectando las emociones ocultas del alumno con el apoyo institucional mediante la gestión inteligente de casos.'
                                            : "Connecting the student's hidden emotions with institutional support through intelligent case management.",
                                    },
                                ].map((pt, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0] hover:shadow-md transition-shadow animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                        <IconBadge name={pt.icon} color={pt.color} size="sm" />
                                        <div>
                                            <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed">{pt.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — visual stat card */}
                        <div className="animate-fadeSlideUp" style={{ animationDelay: '150ms' }}>
                            <div className="bg-white rounded-[2rem] shadow-2xl border border-[#e5eaf0] p-8">
                                <h3 className="text-xl font-extrabold text-[#1e2c29] mb-7 text-center">
                                    {es ? 'La Realidad de la Crisis Silenciosa' : 'The Silent Crisis Reality'}
                                </h3>

                                <div className="space-y-6">
                                    {[
                                        {
                                            label: es ? 'Alumnos que experimentan ciberacoso' : 'Students experiencing cyberbullying',
                                            val: '20%', barW: '20%', color: '#b07d1f', bg: '#eec84322',
                                        },
                                        {
                                            label: es ? 'Que nunca lo denuncian verbalmente' : 'Who never report it verbally',
                                            val: '100%', barW: '100%', color: '#e85d5d', bg: '#e85d5d22',
                                        },
                                        {
                                            label: es ? 'Tasa de revelación con AnimiKind' : 'AnimiKind disclosure rate',
                                            val: '85%+', barW: '85%', color: '#0dc383', bg: '#0dc38322',
                                        },
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[#1d4c73]/70 text-sm font-semibold">{stat.label}</span>
                                                <span className="font-extrabold text-sm" style={{ color: stat.color }}>{stat.val}</span>
                                            </div>
                                            <div className="h-2.5 rounded-full" style={{ background: stat.bg }}>
                                                <div
                                                    className="h-full rounded-full bar-animate"
                                                    style={{
                                                        '--bar-w': stat.barW,
                                                        width: stat.barW,
                                                        background: stat.color,
                                                        animationDelay: `${i * 300}ms`,
                                                    } as React.CSSProperties}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 rounded-2xl p-5 border" style={{ background: '#f4f7fb', borderColor: '#e5eaf0' }}>
                                    <p className="text-[#1d4c73]/80 text-sm leading-relaxed italic text-center">
                                        {es
                                            ? '"Al proporcionar un compañero digital seguro y empático, transformamos el sufrimiento silencioso en sanación apoyada."'
                                            : '"By providing a safe, empathetic digital companion, we transform silent suffering into supported healing."'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ SECTION 6 — SCREENSHOT 3 ══ */}
            {product.image3 && (
                <section className="py-12 bg-[#f4f7fb]">
                    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                            <img src={product.image3} alt="AnimiKind App — view 3" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </div>
                </section>
            )}

            {/* ══ SECTION 7 — CTA ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                        <div className="bg-gradient-to-br from-[#061529] via-[#0f2d50] to-[#1d4c73] px-10 pt-14 pb-20 text-center relative overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 900 260" preserveAspectRatio="xMidYMid slice">
                                {[[80, 60], [220, 130], [400, 50], [600, 130], [780, 70], [160, 210], [480, 190], [720, 230]].map(([cx, cy], i) => (
                                    <circle key={i} cx={cx} cy={cy} r="4" fill="#0dc383" />
                                ))}
                                {[[80, 60, 220, 130], [220, 130, 400, 50], [400, 50, 600, 130], [600, 130, 780, 70], [160, 210, 480, 190], [480, 190, 720, 230]].map(([x1, y1, x2, y2], i) => (
                                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="4 6" />
                                ))}
                            </svg>
                            <div className="flex justify-center mb-5 relative z-10">
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name="DeviceMobile" color="green" size={42} weight="duotone" />
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 relative z-10">
                                {es ? '¿Interesado en la AnimiKind App?' : 'Interested in the AnimiKind App?'}
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
                                {es
                                    ? 'Descubre cómo puede transformar la cultura de salvaguarda de tu institución educativa.'
                                    : "Discover how it can transform your educational institution's safeguarding culture."}
                            </p>
                        </div>
                        <div className="bg-white px-10 pt-10 pb-12 flex flex-col items-center gap-6">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/demo/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all transform hover:-translate-y-1">
                                    <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                                    {es ? 'Reservar Demo Gratuita' : 'Book a Free Demo'}
                                </Link>
                                <Link to="/ecosystem/structure/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all transform hover:-translate-y-1 shadow-md">
                                    <BrandIcon name="Network" color="green" size={18} weight="bold" />
                                    {es ? 'Ver Todos los Componentes' : 'View All Components'}
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['GDPR', 'KCSIE 2026', 'OSA', es ? 'CPD Acreditado' : 'CPD Accredited', es ? 'Alumnos 8–18' : 'Students 8–18'].map((b, i) => (
                                    <span key={i} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f4f7fb] border border-[#e5eaf0] text-[#1d4c73] text-xs font-bold shadow-sm">
                                        <BrandIcon name="CheckCircle" color="green" size={12} weight="fill" />
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AnimikindAppPage;
