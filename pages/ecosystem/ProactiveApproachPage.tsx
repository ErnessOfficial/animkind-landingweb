import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const ProactiveApproachPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Nuestro Enfoque Proactivo – AnImiKind' : 'Our Proactive Approach – AnImiKind';
    }, [lang]);

    // ── Reactive vs Proactive comparison rows ──────────────────────────────
    const compRows = [
        {
            area: es ? 'Modelo de Detección' : 'Detection Model',
            reactive: {
                icon: 'Warning' as const,
                text: es
                    ? 'Post-incidente. Documenta el daño después de que ha ocurrido o espera una crisis visible.'
                    : 'Post-incident. Documents damage only after it has occurred or waits for a visible crisis.',
            },
            proactive: {
                icon: 'Brain' as const,
                text: es
                    ? 'Análisis de sentimiento en tiempo real. La EAI detecta señales de angustia de bajo nivel incluso antes de que el alumno las reconozca conscientemente.'
                    : 'Real-time sentiment analysis. EAI detects low-level distress cues even before the student consciously recognises them.',
            },
        },
        {
            area: es ? 'Casos No Reportados' : 'Unreported Cases',
            reactive: {
                icon: 'EyeSlash' as const,
                text: es
                    ? 'Ignora la «mayoría silenciosa». El 20% de los niños que sufren abusos online nunca lo reportan verbalmente — el modelo reactivo no los ve.'
                    : 'Ignores the "silent majority." 20% of children experiencing online abuse never verbally report it — the reactive model never sees them.',
            },
            proactive: {
                icon: 'Eye' as const,
                text: es
                    ? 'Cero puntos ciegos. La EAI detecta cambios de tono y señales de alerta incluso si el alumno intenta minimizar o normalizar su experiencia.'
                    : 'Zero blind spots. EAI detects tone shifts and warning signals even if the student attempts to downplay or normalise their experience.',
            },
        },
        {
            area: es ? 'Rol del Alumno' : 'Student Role',
            reactive: {
                icon: 'Lock' as const,
                text: es
                    ? 'Pasivo o bajo vigilancia invasiva. El alumno debe iniciar activamente una queja, o la plataforma simplemente espía palabras clave.'
                    : 'Passive or under invasive surveillance. The student must actively file a complaint, or the platform simply spies on keywords.',
            },
            proactive: {
                icon: 'Heart' as const,
                text: es
                    ? 'Empoderado y acompañado. «Ani» ofrece un espacio seguro y no punitivo que construye alfabetización emocional y fomenta la participación activa en la propia protección.'
                    : '"Ani" offers a safe, non-judgmental space that builds emotional literacy and encourages active participation in one\'s own protection.',
            },
        },
        {
            area: es ? 'Carga Administrativa DSL' : 'DSL Admin Burden',
            reactive: {
                icon: 'Warning' as const,
                text: es
                    ? 'Cuello de botella burocrático. El DSL queda atrapado en un ciclo de reporting fragmentado en papel y gestión de crisis agotadora.'
                    : 'Bureaucratic bottleneck. The DSL is trapped in a cycle of fragmented paper-based reporting and exhausting crisis management.',
            },
            proactive: {
                icon: 'TrendUp' as const,
                text: es
                    ? 'Hasta el 40% de la capacidad del personal recuperada. La documentación automatizada libera al DSL hasta 10 horas semanales para la intervención real.'
                    : 'Up to 40% of staff capacity reclaimed. Automated case documentation frees the DSL up to 10 hours per week for actual intervention.',
            },
        },
        {
            area: es ? 'Integración del Ecosistema' : 'Ecosystem Integration',
            reactive: {
                icon: 'Network' as const,
                text: es
                    ? 'Plataformas fragmentadas. Las escuelas deben adquirir e integrar múltiples sistemas desconectados, creando silos de datos y frustración.'
                    : 'Fragmented platforms. Schools must procure and integrate multiple disconnected systems, creating data silos and user frustration.',
            },
            proactive: {
                icon: 'Network' as const,
                text: es
                    ? 'Ecosistema unificado 360°. Una sola integración Tri-App backend conecta al alumno, la familia y la escuela en un flujo de datos cohesionado sin silos.'
                    : 'Unified 360° ecosystem. A single Tri-App backend integration connects the student, family, and school in a cohesive, silo-free data flow.',
            },
        },
        {
            area: es ? 'Cumplimiento Normativo' : 'Regulatory Compliance',
            reactive: {
                icon: 'Warning' as const,
                text: es
                    ? 'Cumplimiento manual y frágil. Los registros de papel o los sistemas desconectados no generan las pistas de evidencia digital que exigen Ofsted y KCSIE.'
                    : 'Manual, fragile compliance. Paper records or disconnected systems don\'t generate the digital evidence trails demanded by Ofsted and KCSIE.',
            },
            proactive: {
                icon: 'ShieldCheck' as const,
                text: es
                    ? '«Safety by Design» nativo. Cumple automáticamente el deber de cuidado de la OSA y proporciona las pistas de evidencia exactas para inspecciones Ofsted y KCSIE 2026.'
                    : '"Safety by Design" built-in. Automatically fulfils the OSA Duty of Care and provides the exact evidence trails for Ofsted inspections and KCSIE 2026 compliance.',
            },
        },
    ];

    return (
        <div className="pt-16">

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[440px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#0f2d50] to-[#1d4c73]" />

                {/* Grid dot texture */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 440" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, col) =>
                        Array.from({ length: 5 }).map((_, row) => (
                            <circle key={`${col}-${row}`} cx={col * 170 + 60} cy={row * 110 + 55} r="3" fill="#0dc383" />
                        ))
                    )}
                </svg>

                {/* Brain watermark */}
                <div className="absolute right-0 top-0 h-full w-[400px] flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Brain" color="green" size={400} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6">
                        <BrandIcon name="Brain" color="green" size={13} weight="bold" />
                        {es ? 'Modelo Bio-Psico-Social Híbrido' : 'Bio-Psycho-Social Hybrid Model'}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                        {es
                            ? <><span className="text-[#0dc383]">Enfoque</span> Proactivo</>
                            : <><span className="text-[#0dc383]">Our</span> Proactive Approach</>}
                    </h1>
                    <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                        {es
                            ? 'De la gestión reactiva de crisis a la prevención basada en datos. Un cambio de paradigma fundamental en la salvaguarda educativa del siglo XXI.'
                            : 'From reactive crisis management to data-driven prevention. A fundamental paradigm shift in 21st-century educational safeguarding.'}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {(es
                            ? ['Detección Temprana', 'IA No Invasiva', 'Prevención vs Reacción', 'Cumplimiento KCSIE 2026']
                            : ['Early Detection', 'Non-Invasive AI', 'Prevention vs Reaction', 'KCSIE 2026 Compliance']
                        ).map((tag, i) => (
                            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                                {tag}
                            </span>
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

            {/* ══ SECTION 1 — INTRO ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-[#e5eaf0]">

                        {/* Left — dark context */}
                        <div className="bg-[#1d4c73] p-12 lg:p-16 flex flex-col justify-center gap-7">
                            <div className="flex items-center gap-4">
                                <IconBadge name="Brain" color="green" size="lg" bg="rgba(13,195,131,0.15)" />
                                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                    {es ? 'El Cambio de Paradigma' : 'The Paradigm Shift'}
                                </h2>
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed">
                                {es
                                    ? 'La implementación de un modelo híbrido proactivo como el ecosistema AnimiKind representa un cambio fundamental: de la «gestión reactiva de crisis» a la «prevención basada en datos» en el sector educativo.'
                                    : 'Implementing a proactive hybrid model like the AnimiKind ecosystem represents a fundamental shift — from "reactive crisis management" to "data-driven prevention" in the education sector.'}
                            </p>
                            <p className="text-white/70 leading-relaxed">
                                {es
                                    ? 'Las diferencias entre estos dos enfoques son profundas: afectan cómo se detectan los riesgos con antelación, cómo se apoya a los alumnos y cómo las escuelas gestionan sus obligaciones de salvaguarda.'
                                    : 'The differences between these two implementations are profound — affecting how early risks are detected, how students are supported, and how schools manage their safeguarding duties.'}
                            </p>
                            {/* Key quote */}
                            <div className="rounded-2xl bg-[#0dc383]/15 border border-[#0dc383]/30 p-5 mt-2">
                                <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                                    {es
                                        ? '"El 20% del ciberacoso nunca se denuncia. Los sistemas reactivos fallan precisamente porque no pueden ver lo que está oculto."'
                                        : '"20% of online bullying goes unreported. Reactive systems fail precisely because they cannot see what is hidden."'}
                                </p>
                            </div>
                        </div>

                        {/* Right — 3 key stats */}
                        <div className="bg-[#f4f7fb] p-12 lg:p-16 flex flex-col justify-center gap-6">
                            <h3 className="text-xl font-bold text-[#1e2c29] tracking-tight mb-2">
                                {es ? 'El Problema del Modelo Reactivo' : 'The Reactive Model Problem'}
                            </h3>
                            {[
                                { val: '25%+', label: es ? 'de alumnos del RU reportan acoso (2024–25)' : 'of UK pupils report being bullied (2024–25)', icon: 'Warning' as const, color: 'navy' as const },
                                { val: '20%', label: es ? 'del abuso online nunca se reporta verbalmente' : 'of online abuse is never verbally reported', icon: 'EyeSlash' as const, color: 'green' as const },
                                { val: '3+', label: es ? 'plataformas desconectadas en una escuela típica' : 'disconnected platforms in a typical school', icon: 'Network' as const, color: 'gold' as const },
                                { val: '40%', label: es ? 'de capacidad DSL recuperada con AnimiKind' : 'of DSL capacity reclaimed with AnimiKind', icon: 'TrendUp' as const, color: 'green' as const },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#e5eaf0] shadow-sm hover:shadow-md transition-shadow animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                    <IconBadge name={s.icon} color={s.color} size="sm" />
                                    <div>
                                        <span className="text-2xl font-extrabold text-[#1e2c29]">{s.val}</span>
                                        <p className="text-xs text-[#1d4c73]/65 font-semibold leading-tight mt-0.5">{s.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Proactive image ── */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.ecosystem.proactiveFirstImage}
                            alt="AnimiKind — Our Proactive Approach"
                            className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0]"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 2 — VISUAL COMPARATIVE DIAGRAM ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                    {/* Section label */}
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Análisis Comparativo' : 'Comparative Analysis'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Reactivo vs Proactivo: Cada Diferencia Importa' : 'Reactive vs Proactive: Every Difference Matters'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Un análisis detallado de cómo el modelo AnimiKind redefine cada dimensión de la salvaguarda educativa.'
                                : 'A detailed breakdown of how the AnimiKind model redefines every dimension of educational safeguarding.'}
                        </p>
                    </div>

                    {/* Column headers */}
                    <div className="grid grid-cols-[1fr_2fr_2fr] gap-4 mb-4 px-2">
                        <div />
                        <div className="rounded-2xl bg-[#e85d5d]/10 border-2 border-[#e85d5d]/30 px-6 py-3 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <BrandIcon name="Warning" color="red" size={18} weight="duotone" />
                                <span className="font-extrabold text-[#e85d5d] text-sm tracking-wide uppercase">
                                    {es ? 'Modelo Reactivo' : 'Reactive Model'}
                                </span>
                            </div>
                            <p className="text-[#e85d5d]/70 text-xs mt-1 font-medium">
                                {es ? 'CPOMS · MyConcern · Tootoot' : 'CPOMS · MyConcern · Tootoot'}
                            </p>
                        </div>
                        <div className="rounded-2xl bg-[#0dc383]/10 border-2 border-[#0dc383]/40 px-6 py-3 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <BrandIcon name="ShieldCheck" color="green" size={18} weight="duotone" />
                                <span className="font-extrabold text-[#0dc383] text-sm tracking-wide uppercase">
                                    {es ? 'AnimiKind Proactivo' : 'AnimiKind Proactive'}
                                </span>
                            </div>
                            <p className="text-[#0dc383]/70 text-xs mt-1 font-medium">
                                {es ? 'Modelo Híbrido Bio-Psico-Social' : 'Bio-Psycho-Social Hybrid Model'}
                            </p>
                        </div>
                    </div>

                    {/* Comparison rows */}
                    <div className="space-y-4">
                        {compRows.map((row, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-[1fr_2fr_2fr] gap-4 items-stretch animate-fadeSlideUp"
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                {/* Area label */}
                                <div className="flex items-center justify-center text-center px-4 py-5 rounded-2xl bg-[#1d4c73] shadow-md">
                                    <span className="text-white font-extrabold text-sm leading-tight">{row.area}</span>
                                </div>

                                {/* Reactive cell */}
                                <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border-2 border-[#e85d5d]/20 hover:border-[#e85d5d]/40 transition-colors shadow-sm">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(232,93,93,0.12)' }}>
                                            <BrandIcon name={row.reactive.icon} color="red" size={16} weight="duotone" />
                                        </div>
                                    </div>
                                    <p className="text-[#1d4c73]/70 text-sm leading-relaxed">{row.reactive.text}</p>
                                </div>

                                {/* Proactive cell */}
                                <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border-2 border-[#0dc383]/25 hover:border-[#0dc383]/50 transition-colors shadow-sm">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(13,195,131,0.12)' }}>
                                            <BrandIcon name={row.proactive.icon} color="green" size={16} weight="duotone" />
                                        </div>
                                    </div>
                                    <p className="text-[#1e2c29] text-sm leading-relaxed font-medium">{row.proactive.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — TRI-APP PILLARS ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Integración Tri-App Backend' : 'Tri-App Backend Integration'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'La Ventaja Última: Escenarios Completos Cubiertos' : 'The Ultimate Advantage: All Scenarios Covered'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'DeviceMobile' as const, color: 'green' as const,
                                accentHex: '#0dc383', tileBg: 'rgba(13,195,131,0.18)', tileBorder: 'rgba(13,195,131,0.4)',
                                label: es ? 'Para el Alumno' : 'For the Student',
                                title: 'AnimiKind App',
                                subtitle: es ? '"El Centinela del Alumno"' : '"The Student Sentinel"',
                                body: es
                                    ? 'Empodera a los jóvenes (8–18 años) para expresarse con seguridad. El módulo Comunikind de «Reporte con un Clic» permite al alumno notificar instantáneamente a un adulto de confianza y a la escuela, rompiendo las barreras de comunicación.'
                                    : 'Empowers young people (aged 8–18) to express themselves safely. The Comunikind "One-Click Reporting" module enables the student to instantly notify a trusted adult and the school, breaking communication barriers.',
                                href: '/components/animikind-app/',
                                tags: es ? ['Diario Emocional', 'Chat con Ani', '1-Clic'] : ['Emotional Diary', 'Chat with Ani', 'One-Click'],
                            },
                            {
                                icon: 'PresentationChart' as const, color: 'white' as const,
                                accentHex: '#b07d1f', tileBg: 'rgba(255,255,255,0.12)', tileBorder: 'rgba(255,255,255,0.28)',
                                label: es ? 'Para Educadores' : 'For Educators',
                                title: es ? 'Panel Escolar' : 'School Panel',
                                subtitle: es ? '"El Centro de Mando DSL"' : '"The Safeguarding Command Centre"',
                                body: es
                                    ? 'Transforma las alertas de la IA en evaluaciones de riesgo objetivas, expedientes de casos cronológicos y análisis predictivos del clima emocional de la escuela. Convierte los datos brutos en inteligencia accionable.'
                                    : 'Transforms AI alerts into objective risk assessments, chronologically structured case files, and predictive analytics on the school\'s emotional climate. Turns raw data into actionable intelligence.',
                                href: '/components/school-panel/',
                                tags: es ? ['Dashboard DSL', 'Casos Cronológicos', 'Analítica Predictiva'] : ['DSL Dashboard', 'Chronological Cases', 'Predictive Analytics'],
                            },
                            {
                                icon: 'Graduation' as const, color: 'gold' as const,
                                accentHex: '#b07d1f', tileBg: 'rgba(238,200,67,0.18)', tileBorder: 'rgba(238,200,67,0.4)',
                                label: es ? 'Para toda la Comunidad' : 'For the Whole Community',
                                title: 'AnimiKdemi',
                                subtitle: es ? '"El Simulador de Aprendizaje Reflexivo"' : '"The Reflective Learning Simulator"',
                                body: es
                                    ? 'Plataforma CPD acreditada (Proveedor Aprobado #788968) que utiliza simulaciones de voz y texto impulsadas por IA. Forma al personal en protocolos estatutarios y a los alumnos en resiliencia emocional en entornos virtuales realistas.'
                                    : 'CPD-accredited platform (Approved Provider #788968) using AI-driven voice and text simulations. Trains staff in statutory protocols and students in emotional resilience in realistic virtual environments.',
                                href: '/components/animikdemi/',
                                tags: es ? ['CPD #788968', 'Simulación IA', 'Alumnos + Personal'] : ['CPD #788968', 'AI Simulation', 'Students + Staff'],
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="group flex flex-col bg-white rounded-[1.75rem] border-2 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
                                style={{ borderColor: `${card.accentHex}44`, animationDelay: `${i * 110}ms` }}
                            >
                                <div className="flex flex-col items-center justify-center px-6 py-9 gap-3" style={{ background: '#1d4c73' }}>
                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: card.tileBg, border: `2px solid ${card.tileBorder}` }}>
                                        <BrandIcon name={card.icon} color={card.color} size={38} weight="duotone" />
                                    </div>
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-white/60">{card.label}</span>
                                </div>
                                <div className="flex flex-col flex-1 px-7 py-6">
                                    <h3 className="text-xl font-extrabold text-[#1e2c29] mb-1">{card.title}</h3>
                                    <p className="text-sm italic font-medium mb-3" style={{ color: card.accentHex }}>{card.subtitle}</p>
                                    <p className="text-[#1d4c73]/70 text-sm leading-relaxed flex-1 mb-5">{card.body}</p>
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {card.tags.map((tag, j) => (
                                            <span key={j} className="px-2.5 py-1 rounded-full text-[11px] font-bold border" style={{ color: card.accentHex, background: `${card.accentHex}12`, borderColor: `${card.accentHex}40` }}>{tag}</span>
                                        ))}
                                    </div>
                                    <Link
                                        to={card.href}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                                        style={{ color: card.accentHex, borderColor: `${card.accentHex}44`, background: `${card.accentHex}10` }}
                                    >
                                        <BrandIcon name="ArrowCircleRight" color={card.color === 'white' ? 'gold' : card.color} size={16} weight="duotone" />
                                        {es ? 'Saber Más' : 'Learn More'}
                                    </Link>
                                </div>
                                <div className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(to right, ${card.accentHex}, ${card.accentHex}44)` }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Image below "All Scenarios Covered" ── */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.ecosystem.proactiveAfterScenariosImage}
                            alt="AnimiKind proactive scenarios visual"
                            className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0]"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — CTA ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <IconBadge name="ShieldCheck" color="green" size="lg" bg="rgba(13,195,131,0.15)" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
                        {es ? '¿Listo para Cambiar de Paradigma?' : 'Ready to Make the Paradigm Shift?'}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Descubre cómo la IA Emocional de AnimiKind puede transformar la estrategia de salvaguarda proactiva de tu institución.'
                            : "Discover how AnimiKind's Emotional AI can transform your institution's proactive safeguarding strategy."}
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
                            to="/ecosystem/emotional-ai/"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all transform hover:-translate-y-1"
                        >
                            <BrandIcon name="Brain" color="green" size={18} weight="bold" />
                            {es ? 'Explorar la IA Emocional' : 'Explore Emotional AI'}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProactiveApproachPage;
