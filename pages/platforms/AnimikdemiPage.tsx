import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../content';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const AnimikdemiPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';
    const t = content[lang];
    const product = t.ecosystem.products[2];

    useEffect(() => {
        document.title = es
            ? 'AnimiKdemi – Simulador de Aprendizaje Reflexivo – AnImiKind'
            : 'AnimiKdemi – Reflective Learning Simulator – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
                @keyframes floatMascot { 0%,100% { transform:translateY(0px) rotate(-2deg);} 50% { transform:translateY(-14px) rotate(2deg);} }
                .float-mascot { animation: floatMascot 5s ease-in-out infinite; }
                @keyframes growBar { from { width:0%; } to { width:var(--bar-w); } }
                .bar-animate { animation: growBar 1.2s cubic-bezier(0.22,0.68,0,1.2) forwards; }
            `}</style>

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[500px] flex items-center overflow-hidden">
                {/* Background: deep navy-green — contrasts well with AnimiKdemi logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#040f1e] via-[#0b2340] to-[#0a3d28]" />
                {/* Dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, c) => Array.from({ length: 6 }).map((_, r) => (
                        <circle key={`${c}-${r}`} cx={c * 175 + 80} cy={r * 90 + 50} r="3" fill="#0dc383" />
                    )))}
                    {[[80, 50, 255, 140], [255, 140, 430, 60], [430, 60, 605, 150], [605, 150, 780, 70], [780, 70, 955, 160], [160, 410, 430, 360], [430, 360, 700, 420], [700, 420, 970, 370]].map(([x1, y1, x2, y2], i) => (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="5 8" />
                    ))}
                </svg>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-14 w-full">

                    {/* Left: text */}
                    <div className="flex-1 space-y-6 text-white max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eec843]/20 border border-[#eec843]/40 text-[#eec843] text-xs font-bold tracking-widest uppercase">
                            <div className="w-1.5 h-1.5 bg-[#eec843] rounded-full animate-pulse" />
                            {es ? 'El Simulador de Aprendizaje Reflexivo · EAI' : 'The Reflective Learning Simulator · EAI'}
                        </span>


                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            <span className="text-[#eec843]" style={{ textShadow: '0 0 40px rgba(238,200,67,0.25)' }}>AnimiKdemi™</span>
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            {es
                                ? '"La Base del Conocimiento por AnimiKind" — La plataforma educativa de vanguardia que transforma el paradigma de la salvaguarda, pasando de la mera reacción a la prevención proactiva, impulsada por la Inteligencia Artificial Emocional (EAI).'
                                : '"The Knowledge Foundation by AnimiKind" — The cutting-edge educational platform that shifts the safeguarding paradigm from mere reaction to proactive prevention, powered by Emotional Artificial Intelligence (EAI).'}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {(es
                                ? ['Personal & DSLs', 'Alumnos', 'CPD #788968', 'KCSIE 2026', 'Ofsted Ready']
                                : ['Staff & DSLs', 'Students', 'CPD #788968', 'KCSIE 2026', 'Ofsted Ready']
                            ).map((tag, i) => (
                                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                    <BrandIcon name="CheckCircle" color="gold" size={13} weight="fill" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/demo/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b07d1f] to-[#eec843] text-white font-bold hover:shadow-2xl hover:shadow-[#eec843]/40 transition-all hover:-translate-y-0.5">
                                <BrandIcon name="Calendar" color="white" size={16} weight="bold" />
                                {es ? 'Reservar Demo' : 'Book a Demo'}
                            </Link>
                            <Link to="/plans/animikdemi-cpd/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5">
                                <BrandIcon name="ArrowRight" color="gold" size={16} weight="bold" />
                                {es ? 'Ver Planes' : 'See Plans'}
                            </Link>
                        </div>
                    </div>

                    {/* Right: mascot + CPD badge floating */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full lg:w-auto max-w-[320px]">
                        {/* Mascot */}
                        <div className="relative flex items-end justify-center">
                            {/* Glow behind mascot */}
                            <div className="absolute bottom-0 w-60 h-60 rounded-full opacity-20 blur-3xl" style={{ background: '#eec843' }} />
                            <img
                                src={cloudinaryMedia.about.mascot}
                                alt="Ani — AnimiKdemi mascot"
                                className="relative z-10 h-64 w-auto object-contain drop-shadow-2xl float-mascot"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                        {/* CPD badge — white card matching reference */}
                        {product.cpdLogo && (
                            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-2xl border border-white/30">
                                <img
                                    src={product.cpdLogo}
                                    alt="CPD Certified #788968"
                                    className="h-12 w-auto object-contain"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                                <div>
                                    <p className="text-[#b07d1f] text-xs font-extrabold tracking-widest uppercase">CPD Certified</p>
                                    <p className="text-[#1d4c73] text-xs font-semibold">{es ? 'Proveedor Aprobado #788968' : 'Approved Provider #788968'}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 2 — INNOVATION INTRO ══ */}
            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center animate-fadeSlideUp">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-5">
                        {es ? 'La Innovación: CPD & Simulación impulsados por EAI' : 'The Innovation: EAI-Powered CPD & Simulation'}
                    </span>
                    <p className="text-[#1d4c73]/80 text-lg leading-relaxed">
                        {es
                            ? 'Durante décadas, la formación en salvaguarda en el RU ha dependido de diapositivas "click-through" pasivas que aportan conocimiento teórico pero no generan confianza práctica. AnimiKdemi interrumpe este modelo obsoleto con simulaciones EAI inmersivas y un bucle de retroalimentación instantáneo que garantiza la alineación con los protocolos de protección infantil.'
                            : 'For decades, safeguarding training in the UK has relied on passive "click-through" slides that deliver theoretical knowledge but fail to build practical confidence. AnimiKdemi disrupts this outdated model with immersive EAI-driven simulations and an instant feedback loop that ensures alignment with keeping children safe protocols.'}
                    </p>
                    {product.tagline && (
                        <p className="mt-6 text-xl font-bold text-[#1d4c73] italic">"{product.tagline}"</p>
                    )}
                </div>
            </section>

            {/* ══ SECTION 3 — DUAL LEARNING PATHS ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Dos Caminos de Aprendizaje' : 'Dual Learning Paths'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? <>Cambio Cultural de <span className="text-[#b07d1f]">Toda la Escuela</span></> : <>A <span className="text-[#b07d1f]">Whole-School Culture Change</span></>}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/65 max-w-xl mx-auto">
                            {es ? 'Dos caminos distintos, adaptados a la edad y el rol.' : 'Two distinct paths, adapted by age and role.'}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Staff CPD */}
                        <div className="bg-white rounded-[2rem] border-2 border-[#b07d1f]/35 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeSlideUp">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(238,200,67,0.15)', border: '2px solid rgba(238,200,67,0.4)' }}>
                                    <BrandIcon name="Graduation" color="gold" size={28} weight="duotone" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#b07d1f]">{es ? 'Camino 1 · Personal & DSLs' : 'Path 1 · Staff & DSLs'}</span>
                                    <h3 className="text-xl font-extrabold text-[#1e2c29]">{es ? 'Simulador CPD para Docentes' : 'The CPD Simulator'}</h3>
                                </div>
                            </div>
                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed mb-5">
                                {es
                                    ? 'Un programa exclusivo de Desarrollo Profesional Continuo (CPD) para docentes y DSLs. Como proveedor certificado (The CPD Group, Proveedor Aprobado #788968), el personal gana créditos reconocidos mientras practica el manejo de conversaciones difíciles de salvaguarda.'
                                    : 'An exclusive CPD programme for teachers and Designated Safeguarding Leads. As a fully certified provider (The CPD Group, Approved Provider #788968), staff earn officially recognised credits while practising how to handle difficult safeguarding conversations.'}
                            </p>
                            <ul className="space-y-2.5">
                                {(es ? [
                                    'Simulaciones de rol inmersivas impulsadas por IA',
                                    'Retroalimentación en tiempo real de "Academic Ani"',
                                    'Créditos CPD oficialmente acreditados (#788968)',
                                    'Alineado al 100% con KCSIE y políticas gubernamentales',
                                ] : [
                                    'Immersive AI-driven voice & text roleplay simulations',
                                    'Real-time feedback from "Academic Ani" mentor',
                                    'Officially accredited CPD credits (#788968)',
                                    '100% aligned with KCSIE and government mental health policies',
                                ]).map((f, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#1d4c73]/75 font-medium">
                                        <BrandIcon name="CheckCircle" color="gold" size={15} weight="fill" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Student Gamified */}
                        <div className="bg-white rounded-[2rem] border-2 border-[#0dc383]/35 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeSlideUp" style={{ animationDelay: '80ms' }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(13,195,131,0.15)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name="Sparkle" color="green" size={28} weight="duotone" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#0dc383]">{es ? 'Camino 2 · Alumnos' : 'Path 2 · Students'}</span>
                                    <h3 className="text-xl font-extrabold text-[#1e2c29]">{es ? 'El Viaje Gamificado' : 'The Gamified Journey'}</h3>
                                </div>
                            </div>
                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed mb-5">
                                {es
                                    ? 'Un plan de estudios atractivo y adaptado a la edad, alineado con los estándares RSHE del RU. Módulos interactivos sobre acoso, ciberacoso, seguridad digital y resiliencia emocional, enseñando a los alumnos empatía y autorregulación.'
                                    : 'An engaging, age-appropriate syllabus aligned with UK RSHE standards. Interactive modules on Bullying, Cyberbullying, Digital Safety, and Emotional Resilience, teaching students empathy and self-regulation.'}
                            </p>
                            <ul className="space-y-2.5">
                                {(es ? [
                                    'Módulos gamificados sobre acoso y ciberacoso',
                                    'Educación en seguridad digital alineada con RSHE',
                                    'Resiliencia emocional y autorregulación',
                                    'Seguimiento del progreso individual del alumno',
                                ] : [
                                    'Gamified modules on bullying & cyberbullying',
                                    'Digital safety education aligned with RSHE standards',
                                    'Emotional resilience & self-regulation',
                                    'Individual student progress tracking',
                                ]).map((f, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#1d4c73]/75 font-medium">
                                        <BrandIcon name="CheckCircle" color="green" size={15} weight="fill" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3B — animikdemi01.png (Dual Routes visual) ══ */}
            <section className="py-10 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase">
                            {es ? 'Las dos rutas del simulador' : 'The two simulator routes'}
                        </span>
                    </div>
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.platforms.animikdemiDualRoutes}
                            alt="AnimiKdemi — Staff CPD & Student Gamified learning paths"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — 9.png ══ */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.platforms.animikdemiPillarThree}
                            alt="AnimiKdemi — Platform overview"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 5 — ECO INTERACTION (navy) ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#eec843]/20 border border-[#eec843]/40 text-[#eec843] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Rol en el Ecosistema' : 'Role Within the Ecosystem'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            {es ? <>AnimiKdemi: el <span className="text-[#eec843]">motor de educación y prevención</span></> : <>AnimiKdemi: the <span className="text-[#eec843]">engine of education & prevention</span></>}
                        </h2>
                        <p className="mt-3 text-white/65 max-w-2xl mx-auto">
                            {es
                                ? 'Completa la "Integración Backend Tri-App" sin operar de forma aislada.'
                                : 'AnimiKdemi completes the "Tri-App Backend Integration" without operating in isolation.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {[
                            {
                                icon: 'DeviceMobile' as const, color: 'green' as const,
                                title: es ? '↔ AnimiKind App (Soporte Emocional en Tiempo Real)' : '↔ AnimiKind App (Real-Time Emotional Support)',
                                body: es
                                    ? 'Mientras la App gestiona el apoyo emocional en tiempo real y la detección temprana de riesgos, y el School Panel gestiona el seguimiento legal y administrativo de los casos, AnimiKdemi es el motor de educación y prevención que construye la "musculatura emocional" de toda la comunidad escolar.'
                                    : 'While the AnimiKind App handles real-time emotional support and early risk detection, and the School Panel manages legal and administrative case tracking, AnimiKdemi is the engine of education and prevention that builds "emotional muscle" across the entire school community.',
                            },
                            {
                                icon: 'PresentationChart' as const, color: 'gold' as const,
                                title: es ? '↔ School Panel (Sinergia Basada en Datos)' : '↔ School Panel (Data-Driven Synergy)',
                                body: es
                                    ? 'Las tendencias y riesgos institucionales identificados a través del School Panel informan directamente las simulaciones específicas y los módulos de formación que el personal necesita completar en AnimiKdemi, asegurando que la formación del centro siempre responda a su clima emocional real.'
                                    : 'The institutional trends and risks identified through the School Panel directly inform the specific simulations and training modules staff need to complete in AnimiKdemi — ensuring the school\'s training always responds to its actual emotional climate.',
                            },
                        ].map((card, i) => (
                            <div key={i} className="flex items-start gap-5 rounded-[1.75rem] p-7 border-2 border-white/10 hover:border-[#eec843]/40 hover:shadow-xl transition-all duration-300 animate-fadeSlideUp" style={{ background: 'rgba(255,255,255,0.07)', animationDelay: `${i * 100}ms` }}>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'rgba(238,200,67,0.18)', border: '2px solid rgba(238,200,67,0.4)' }}>
                                    <BrandIcon name={card.icon} color={card.color} size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h3 className="text-base font-extrabold text-white mb-2">{card.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary quote */}
                    <div className="max-w-3xl mx-auto text-center p-8 rounded-[2rem] border border-white/15" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <p className="text-white/80 text-base leading-relaxed italic">
                            {es
                                ? '"AnimiKdemi no es solo un módulo de formación; es un modelo preventivo que construye capacidad institucional. Combinando simulaciones EAI con CPD acreditado, asegura que cada miembro de la comunidad escolar esté equipado para proteger a los adultos del mañana, hoy."'
                                : '"AnimiKdemi is not just a training module; it is a preventative model that builds institutional capacity. By combining EAI simulations with accredited CPD, it ensures that every member of the school community is equipped to protect the adults of tomorrow, today."'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ══ SECTION 6 — screenshots 2 + 3 & 4 ══ */}
            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
                    {product.image && (
                        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                            <img src={product.image} alt="AnimiKdemi — view 1" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    )}
                    {product.image2 && (
                        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                            <img src={product.image2} alt="AnimiKdemi — view 2" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    )}
                    {product.image3 && product.image4 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="overflow-hidden rounded-[2rem] shadow-xl border border-[#e5eaf0] animate-fadeSlideUp" style={{ animationDelay: '80ms' }}>
                                <img src={product.image3} alt="AnimiKdemi — view 3" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                            </div>
                            <div className="overflow-hidden rounded-[2rem] shadow-xl border border-[#e5eaf0] animate-fadeSlideUp" style={{ animationDelay: '160ms' }}>
                                <img src={product.image4} alt="AnimiKdemi — view 4" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ══ SECTION 7 — STAKEHOLDER BENEFITS ══ */}
            <section className="relative py-20 bg-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cloudinaryMedia.platforms.stakeholderBackground})` }}
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-white/75" aria-hidden="true" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Beneficios para los Stakeholders' : 'Benefits for Stakeholders'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? <>Valor real para <span className="text-[#0dc383]">toda la institución</span></> : <>Real value for <span className="text-[#0dc383]">every stakeholder</span></>}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'ChartBar' as const, color: 'green' as const, accentHex: '#0dc383',
                                who: es ? 'Directores' : 'Headteachers',
                                title: es ? 'Salvaguarda sistémica e informes de impacto' : 'Systemic safeguarding & impact reporting',
                                body: es
                                    ? 'Transforma la salvaguarda de una responsabilidad individual en una práctica institucional sistémica, con informes completos de impacto para medir las tasas de finalización en todos los grupos.'
                                    : 'Transforms safeguarding from an individual responsibility into a systemic institutional practice, with comprehensive impact reporting to track completion rates across cohorts.',
                            },
                            {
                                icon: 'Certificate' as const, color: 'gold' as const, accentHex: '#b07d1f',
                                who: es ? 'Centros Educativos' : 'Schools',
                                title: es ? 'Estatus de Escuela Certificada AnimiKind' : 'AnimiKind Certified School Status',
                                body: es
                                    ? 'Los centros pueden obtener el "AnimiKind Certified School Status" (Certificación Gold). Mostrar esta insignia demuestra el compromiso proactivo con la excelencia en bienestar a padres e inspectores de Ofsted.'
                                    : 'Schools can upgrade to earn the "AnimiKind Certified School Status" (Gold Wellbeing & Safeguarding Certification). Displaying this badge demonstrates proactive commitment to wellbeing excellence to parents and Ofsted.',
                            },
                            {
                                icon: 'Heart' as const, color: 'green' as const, accentHex: '#0dc383',
                                who: es ? 'DSLs & Docentes' : 'DSLs & Teachers',
                                title: es ? 'Confianza práctica y copiloto de IA' : 'Practical confidence & AI co-pilot',
                                body: es
                                    ? 'Construye competencia práctica y confianza. Los docentes están capacitados para manejar revelaciones sensibles eficazmente, con una alineación del 100% con las políticas de salud mental recomendadas por el gobierno.'
                                    : 'Builds practical competence and confidence. Teachers are empowered to handle sensitive disclosures effectively, with 100% alignment with government-recommended mental health policies.',
                            },
                        ].map((s, i) => (
                            <div key={i} className="group flex flex-col bg-[#f4f7fb] rounded-[1.75rem] border-2 border-transparent hover:border-[#0dc383]/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7 animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.accentHex}18`, border: `2px solid ${s.accentHex}33` }}>
                                        <BrandIcon name={s.icon} color={s.color} size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-extrabold tracking-widest uppercase" style={{ color: s.accentHex }}>{s.who}</p>
                                        <p className="text-[#1e2c29] font-bold text-sm leading-tight">{s.title}</p>
                                    </div>
                                </div>
                                <p className="text-[#1d4c73]/65 text-sm leading-relaxed">{s.body}</p>
                                <div className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: s.accentHex }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 8 — COMMERCIAL VALUE ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6 animate-fadeSlideUp">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-4">
                                    {es ? 'Valor Comercial en el Mercado del RU' : 'Commercial Value in the UK Market'}
                                </span>
                                <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                                    {es ? 'Un activo estratégico en EdHealthTech & SafetyTech' : 'A strategic asset in EdHealthTech & SafetyTech'}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: 'Target' as const, color: 'gold' as const,
                                        title: es ? 'Estrategia "Caballo de Troya" GTM' : '"Trojan Horse" Go-To-Market Strategy',
                                        body: es
                                            ? 'Vender SaaS completo a MATs implica ciclos de aprobación de 6–9 meses. AnimiKdemi, con su precio de entrada reducido, actúa como puerta de entrada que establece a AnimiKind como proveedor de confianza y acreditado dentro del centro, desde donde se puede escalar al ecosistema completo.'
                                            : 'Selling comprehensive SaaS to Multi-Academy Trusts involves complex 6–9 month cycles. AnimiKdemi\'s lower entry price establishes AnimiKind as a trusted, accredited vendor within the school — acting as the gateway to seamlessly upsell the full high-margin ecosystem.',
                                    },
                                    {
                                        icon: 'Scales' as const, color: 'green' as const,
                                        title: es ? 'Excelencia Regulatoria a Prueba de Balas' : 'Bulletproof Regulatory Excellence',
                                        body: es
                                            ? 'Con la evolución de la Online Safety Act (OSA) y el enfoque de Ofsted en un "Whole School Approach", AnimiKdemi proporciona la evidencia exacta de formación proactiva del personal y educación en alfabetización digital necesaria para lograr una calificación de "Outstanding".'
                                            : 'With the evolving demands of OSA and Ofsted\'s focus on a "Whole School Approach", AnimiKdemi provides the exact evidence of proactive staff training and digital literacy education required to achieve an \'Outstanding\' rating.',
                                    },
                                ].map((pt, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#e5eaf0] hover:shadow-md transition-shadow animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                        <IconBadge name={pt.icon} color={pt.color} size="sm" />
                                        <div>
                                            <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed">{pt.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Mascot + CTA card */}
                        <div className="animate-fadeSlideUp" style={{ animationDelay: '100ms' }}>
                            <div className="bg-gradient-to-br from-[#1a1200] via-[#2d2200] to-[#1d4c73] rounded-[2rem] shadow-2xl overflow-hidden">
                                {/* Mascot cameo */}
                                <div className="flex justify-center pt-8">
                                    <img
                                        src={cloudinaryMedia.about.mascot}
                                        alt="Ani mascot"
                                        className="h-40 w-auto object-contain drop-shadow-2xl float-mascot"
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                    />
                                </div>
                                <div className="px-8 pb-8 pt-4 text-white text-center">
                                    <p className="text-[#eec843] font-extrabold text-lg mb-2">AnimiKdemi™</p>
                                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                                        {es
                                            ? 'El tercer pilar vital del ecosistema AnimiKind. Completa el bucle de salvaguarda construyendo la musculatura emocional de toda la comunidad escolar.'
                                            : 'The third vital pillar of the AnimiKind ecosystem. Completes the safeguarding loop by building the emotional muscle of the entire school community.'}
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <Link to="/plans/animikdemi-cpd/" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b07d1f] to-[#eec843] text-white font-bold hover:shadow-2xl transition-all hover:-translate-y-0.5">
                                            <BrandIcon name="Graduation" color="white" size={16} weight="bold" />
                                            {es ? 'Ver Plan CPD (Solo Personal)' : 'See CPD Plan (Staff Only)'}
                                        </Link>
                                        <Link to="/plans/animikdemi-cert-plus/" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5">
                                            <BrandIcon name="Certificate" color="gold" size={16} weight="bold" />
                                            {es ? 'Ver Certification Plus' : 'See Certification Plus'}
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-2 mt-5">
                                        {['CPD #788968', 'KCSIE 2026', 'OSA', 'RSHE'].map((b, i) => (
                                            <span key={i} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[11px] font-bold">
                                                <BrandIcon name="CheckCircle" color="gold" size={11} weight="fill" />
                                                {b}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                        <div className="bg-gradient-to-br from-[#1a1000] via-[#2d2200] to-[#1d4c73] px-10 pt-14 pb-20 text-center relative overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 900 260" preserveAspectRatio="xMidYMid slice">
                                {[[80, 60], [220, 130], [400, 50], [600, 130], [780, 70], [160, 210], [480, 190], [720, 230]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="4" fill="#eec843" />)}
                            </svg>
                            <div className="flex justify-center mb-5 relative z-10">
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: 'rgba(238,200,67,0.18)', border: '2px solid rgba(238,200,67,0.4)' }}>
                                    <BrandIcon name="Graduation" color="gold" size={42} weight="duotone" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4 relative z-10">
                                {es ? '¿Listo para construir la musculatura emocional de tu escuela?' : "Ready to build your school's emotional muscle?"}
                            </h2>
                            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto relative z-10">
                                {es
                                    ? 'Contacta al KindTeam hoy y descubre cómo AnimiKdemi puede equipar a toda tu comunidad escolar para proteger a los adultos del mañana.'
                                    : 'Contact the KindTeam today and discover how AnimiKdemi can equip your entire school community to protect the adults of tomorrow.'}
                            </p>
                        </div>
                        <div className="bg-white px-10 pt-10 pb-12 flex flex-col items-center gap-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/demo/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#b07d1f] to-[#eec843] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#eec843]/40 transition-all hover:-translate-y-0.5">
                                    <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                                    {es ? 'Reservar Demo Gratuita' : 'Book a Free Demo'}
                                </Link>
                                <Link to="/contact/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all shadow-md hover:-translate-y-0.5">
                                    <BrandIcon name="Envelope" color="green" size={18} weight="bold" />
                                    {es ? 'Contactar al KindTeam' : 'Contact the KindTeam'}
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['CPD #788968', 'KCSIE 2026', 'OSA', 'RSHE', es ? 'Certificación Gold' : 'Gold Certification'].map((b, i) => (
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

export default AnimikdemiPage;
