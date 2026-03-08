import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { content } from '../../content';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const SchoolPanelPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';
    const t = content[lang];
    const product = t.ecosystem.products[1];

    useEffect(() => {
        document.title = es
            ? 'School Panel – El Centro de Mando de Salvaguarda – AnImiKind'
            : 'School Panel – The Safeguarding Command Centre – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
                @keyframes floatLogo { 0%,100% { transform:translateY(0px);} 50% { transform:translateY(-10px);} }
                .float-logo { animation: floatLogo 4s ease-in-out infinite; }
                @keyframes growBar { from { width:0%; } to { width:var(--bar-w); } }
                .bar-animate { animation: growBar 1.2s cubic-bezier(0.22,0.68,0,1.2) forwards; }
            `}</style>

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[460px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#1d4c73]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, col) => Array.from({ length: 5 }).map((_, row) => (
                        <circle key={`${col}-${row}`} cx={col * 160 + 60} cy={row * 100 + 50} r="3" fill="#0dc383" />
                    )))}
                    {[[60, 50, 220, 150], [220, 150, 420, 60], [420, 60, 640, 160], [640, 160, 860, 70], [160, 350, 460, 280], [460, 280, 700, 370], [700, 370, 980, 300]].map(([x1, y1, x2, y2], i) => (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="5 7" />
                    ))}
                </svg>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-14 w-full">
                    {/* Left: text */}
                    <div className="flex-1 space-y-6 text-white max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                            <div className="w-1.5 h-1.5 bg-[#0dc383] rounded-full animate-pulse" />
                            {es ? 'La Torre de Control · B2B SaaS' : 'The Control Tower · B2B SaaS'}
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                            {es ? <><span className="text-[#0dc383]">School</span> Panel</> : <><span className="text-[#0dc383]">School</span> Panel</>}
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            {es
                                ? 'El panel SaaS B2B que actúa como centro institucional del ecosistema AnimiKind. Transforma los datos emocionales brutos y las alertas de IA en inteligencia procesable basada en evidencias, llevando a las instituciones educativas de la gestión reactiva de crisis a la prevención proactiva.'
                                : 'The B2B SaaS dashboard that transforms raw emotional data and AI alerts into actionable, evidence-based intelligence — shifting schools from exhausted crisis management to proactive prevention.'}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {(es
                                ? ['DSLs & Directores', 'IA Emocional', 'KCSIE 2026', 'Tiempo Real', 'Ofsted Ready']
                                : ['DSLs & Headteachers', 'Emotional AI', 'KCSIE 2026', 'Real-Time', 'Ofsted Ready']
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
                            <Link to="/plans/animikind-core-360/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5">
                                <BrandIcon name="ArrowRight" color="green" size={16} weight="bold" />
                                {es ? 'Ver Planes' : 'See Plans'}
                            </Link>
                        </div>
                    </div>

                    {/* Right: floating logo + screenshot */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-6 w-full lg:w-auto max-w-md">
                        {product.logo && (
                            <img
                                src={product.logo}
                                alt="School Panel Logo"
                                className="h-28 w-auto object-contain drop-shadow-2xl float-logo"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        )}
                        {product.image && (
                            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/20 w-full">
                                <img
                                    src={product.image}
                                    alt="School Panel preview"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 2 — TAGLINE / APPROACH ══ */}
            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center animate-fadeSlideUp">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5">
                        {es ? 'El Enfoque: Augmentación de la Inteligencia' : 'The Approach: Intelligence Augmentation'}
                    </span>
                    <p className="text-[#1d4c73]/80 text-lg leading-relaxed">
                        {es
                            ? 'Bajo el estricto principio ético de "Human-in-the-Loop", la IA Emocional (EAI) encarnada en el avatar "Ani Profesional" actúa como un copiloto pedagógico. No reemplaza el juicio humano, sino que empodera a los educadores con los datos y recomendaciones necesarios para tomar decisiones mejores, más rápidas e informadas.'
                            : 'Under the strict ethical principle of "Intelligence Augmentation" (Human-in-the-Loop), the Emotional AI embodied in the "Professional Ani" avatar acts as a Pedagogical Co-pilot. It does not replace human judgement — it empowers educators with the data and recommendations to make better, faster, and more informed decisions.'}
                    </p>
                    {product.tagline && (
                        <p className="mt-6 text-xl md:text-2xl font-bold text-[#1d4c73] italic">
                            "{product.tagline}"
                        </p>
                    )}
                </div>
            </section>

            {/* ══ SECTION 3 — CORE FUNCTIONS (6 cards) ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Características y Funciones Clave' : 'Core Characteristics & Functions'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? <>Del papel al <span className="text-[#0dc383]">flujo digital inteligente</span></> : <>From paper to <span className="text-[#0dc383]">intelligent digital workflow</span></>}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/65 max-w-2xl mx-auto">
                            {es
                                ? 'El School Panel reemplaza los informes fragmentados en papel con un flujo de trabajo digital ágil.'
                                : 'The School Panel replaces fragmented, paper-based reporting with a streamlined digital workflow.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'Brain' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Triaje IA Calibrado' : 'Calibrated AI Triage',
                                body: es
                                    ? 'El motor filtra automáticamente hasta el 40% de los falsos positivos, asegurando que el personal dedique su tiempo a revisar riesgos genuinos en lugar de ruido.'
                                    : 'The engine automatically filters out up to 40% of false positives, ensuring staff spend their time reviewing genuine risks rather than just noise.',
                            },
                            {
                                icon: 'ChartBar' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Mapa de Calor de Riesgo en Tiempo Real' : 'Real-Time Risk Heatmap',
                                body: es
                                    ? 'Transforma datos brutos en un mapa visual del clima emocional del centro, permitiendo intervenciones tempranas antes de que la asistencia o el comportamiento desciendan.'
                                    : 'Transforms raw data into a visual heatmap of the school\'s emotional climate, enabling early interventions before attendance or behaviour dips.',
                            },
                            {
                                icon: 'Article' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Gestión de Casos Completa' : 'Comprehensive Case Management',
                                body: es
                                    ? 'Proporciona una línea de tiempo estructurada de incidentes, interacciones y evidencias de apoyo, creando expedientes de casos objetivos y cronológicos listos para Ofsted.'
                                    : 'Provides a structured timeline of incidents, interactions, and supporting evidence — creating objective, chronological case files ready for Ofsted.',
                            },
                            {
                                icon: 'ShieldCheck' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Planes de Intervención Asistidos por IA' : 'AI-Assisted Intervention Plans',
                                body: es
                                    ? 'Cuando se detecta un riesgo, la IA genera una evaluación del daño potencial y ofrece planes de acción sugeridos que el personal puede adoptar o adaptar.'
                                    : 'When a risk is detected, the AI generates a harm evaluation and offers suggested action plans that staff can adopt or adapt for their professional response.',
                            },
                            {
                                icon: 'ChartLine' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Analytics Cuantitativas Anonimizadas' : 'Anonymised Quantitative Analytics',
                                body: es
                                    ? 'Datos agregados en tiempo real sobre el clima emocional, protegiendo la privacidad individual del alumno mientras revelan tendencias sistémicas críticas.'
                                    : 'Real-time aggregated data on the institution\'s emotional climate, protecting individual pupil privacy whilst revealing critical systemic trends.',
                            },
                            {
                                icon: 'Network' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Integración MIS sin Fricción' : 'Zero-Friction MIS Integration',
                                body: es
                                    ? 'Se sincroniza con bases de datos escolares existentes (Wonde, SIMS, Arbor), permitiendo el mapeo instantáneo y seguro de alumnos sin introducción manual de datos.'
                                    : 'Seamlessly syncs with existing school databases (Wonde, SIMS, Arbor), allowing instant, secure student mapping with no manual data entry.',
                            },
                        ].map((card, i) => (
                            <div key={i} className="group flex flex-col bg-white rounded-[1.75rem] border-2 border-transparent hover:border-[#0dc383]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7 animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
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

            {/* ══ SECTION 4 — 8.png image ══ */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.platforms.schoolPanelBelowCore}
                            alt="School Panel — Dashboard overview"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 5 — TRI-APP ECOSYSTEM INTERACTION ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Rol en el Ecosistema' : 'Role Within the Ecosystem'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            {es ? <>El pilar central de la <span className="text-[#0dc383]">integración Tri-App</span></> : <>The central pillar of <span className="text-[#0dc383]">Tri-App integration</span></>}
                        </h2>
                        <p className="mt-3 text-white/65 max-w-2xl mx-auto">
                            {es
                                ? 'El School Panel cierra el bucle de salvaguarda gracias a su sinergia con los otros componentes.'
                                : 'The School Panel closes the safeguarding loop through its synergy with the other components.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: 'DeviceMobile' as const, color: 'green' as const,
                                title: es ? '↔ AnimiKind App (El Centinela del Alumno)' : '↔ AnimiKind App (The Student Sentinel)',
                                body: es
                                    ? 'El Panel conecta directamente con la App del alumno mediante un "MySchool-LinkCode" seguro. Cuando el compañero de IA detecta un riesgo alto, o un alumno utiliza "One-Click-Reporting" (Safe Link), la App envía automáticamente un informe contextualizado al Panel Escolar. Transforma un "sentimiento" oculto en un diario digital en un "caso" documentado para que el centro lo gestione.'
                                    : 'The Panel connects directly to the student App via a secure "MySchool-LinkCode". When the AI companion detects high risk, or a student uses "One-Click-Reporting" (Safe Link), the App instantly pushes a contextualised report to the School Panel — transforming a hidden "feeling" in a digital diary into a documented "case" for school management.',
                            },
                            {
                                icon: 'Graduation' as const, color: 'gold' as const,
                                title: es ? '↔ AnimiKdemi (El Simulador de Aprendizaje)' : '↔ AnimiKdemi (The Learning Simulator)',
                                body: es
                                    ? 'Los datos y tendencias identificados en el School Panel informan directamente la necesidad institucional de la formación acreditada por CPD proporcionada en AnimiKdemi, asegurando que el personal esté equipado para manejar las realidades emocionales específicas presentes en su centro.'
                                    : 'The data and trends identified in the School Panel directly inform the institutional need for the CPD-accredited training provided in AnimiKdemi, ensuring that staff are equipped to handle the specific emotional realities present in their school.',
                            },
                        ].map((card, i) => (
                            <div key={i} className="flex items-start gap-5 rounded-[1.75rem] p-7 border-2 border-white/10 hover:border-[#0dc383]/40 hover:shadow-xl transition-all duration-300 animate-fadeSlideUp" style={{ background: 'rgba(255,255,255,0.07)', animationDelay: `${i * 100}ms` }}>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name={card.icon} color={card.color} size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h3 className="text-base font-extrabold text-white mb-2">{card.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Data flow strip */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <div className="h-[2px] w-24 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #0dc383)' }} />
                        <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                        <span className="text-white/50 text-sm font-semibold tracking-wider uppercase">{es ? 'Bucle de Salvaguarda Cerrado' : 'Closed Safeguarding Loop'}</span>
                        <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                        <div className="h-[2px] w-24 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #0dc383)' }} />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 6 — screenshot 2 ══ */}
            {product.image2 && (
                <section className="py-10 bg-[#f4f7fb]">
                    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                            <img src={product.image2} alt="School Panel — view 2" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </div>
                </section>
            )}

            {/* ══ SECTION 7 — STAKEHOLDER VALUE (3 columns) ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Lo que ofrece a los stakeholders' : 'What it provides to stakeholders'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? <>Valor real para <span className="text-[#0dc383]">toda la institución</span></> : <>Real value for <span className="text-[#0dc383]">every stakeholder</span></>}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'Certificate' as const, color: 'green' as const, accentHex: '#0dc383',
                                who: es ? 'Equipo de Salvaguarda (DSLs)' : 'Safeguarding Team (DSLs)',
                                stat: es ? '30–40% más capacidad recuperada' : '30–40% staff capacity reclaimed',
                                body: es
                                    ? 'Automatizando la detección, el triaje y el registro de riesgos, ahorra a los DSLs hasta 10 horas semanales previamente perdidas en burocracia administrativa, permitiéndoles centrarse en el apoyo al alumno de alto valor.'
                                    : 'By automating detection, triage, and risk logging, it saves DSLs up to 10 hours per week previously lost to administrative bureaucracy — allowing them to focus on high-value student support.',
                            },
                            {
                                icon: 'BookOpen' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                who: es ? 'Docentes' : 'Teachers',
                                stat: es ? 'Copiloto IA de confianza' : 'Trusted AI co-pilot',
                                body: es
                                    ? 'Proporciona apoyo de IA guiado para aliviar la carga de crear planes de intervención efectivos y gestionar el seguimiento, operando como un copiloto fiable en situaciones sensibles.'
                                    : 'Provides guided AI support to ease the load of creating effective intervention plans and managing follow-ups — operating as a reliable co-pilot in sensitive situations.',
                            },
                            {
                                icon: 'ChartBar' as const, color: 'green' as const, accentHex: '#0dc383',
                                who: es ? 'Directores' : 'Headteachers',
                                stat: es ? 'Supervisión total del clima escolar' : 'Total school climate oversight',
                                body: es
                                    ? 'Otorga una visión estratégica completa del clima emocional del centro mediante datos cuantitativos. Permite tomar decisiones proactivas de política y recursos basadas en evidencias en tiempo real.'
                                    : 'Grants total oversight of the school\'s emotional climate through strategic quantitative data — enabling proactive policy and resource decisions based on real-time evidence rather than guesswork.',
                            },
                        ].map((s, i) => (
                            <div key={i} className="group flex flex-col bg-[#f4f7fb] rounded-[1.75rem] border-2 border-transparent hover:border-[#0dc383]/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7 animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.accentHex}18`, border: `2px solid ${s.accentHex}33` }}>
                                        <BrandIcon name={s.icon} color={s.color} size={20} weight="duotone" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-extrabold tracking-widest uppercase" style={{ color: s.accentHex }}>{s.who}</p>
                                        <p className="text-[#1e2c29] font-bold text-sm leading-tight">{s.stat}</p>
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
                        {/* Left */}
                        <div className="space-y-7 animate-fadeSlideUp">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-4">
                                    {es ? 'Valor Comercial en el Mercado del RU' : 'Commercial Value in the UK Market'}
                                </span>
                                <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                                    {es ? 'Directamente alineado con las obligaciones legales' : 'Directly aligned with statutory mandates'}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: 'Certificate' as const, color: 'green' as const,
                                        title: es ? 'Excelencia Ofsted & KCSIE' : 'Ofsted & KCSIE Excellence',
                                        body: es
                                            ? 'Los métodos tradicionales se pierden la "mayoría silenciosa". El School Panel proporciona los datos cuantificables y las pistas de auditoría digital exactas que los inspectores de Ofsted requieren para calificar la provisión de desarrollo personal y salvaguarda como "Sobresaliente", garantizando una alineación del 100% con KCSIE.'
                                            : 'Traditional methods miss the "silent majority". The School Panel provides the exact quantifiable data and digital audit trails that Ofsted inspectors require to rate personal development and safeguarding as \'Outstanding\', guaranteeing 100% KCSIE alignment.',
                                    },
                                    {
                                        icon: 'Scales' as const, color: 'navy' as const,
                                        title: es ? 'Cumplimiento de la Online Safety Act (OSA)' : 'Online Safety Act (OSA) Compliance',
                                        body: es
                                            ? 'La documentación de evaluación de riesgos del Panel incorpora nativamente la "Safety by Design", cumpliendo con las estrictas obligaciones legales de "Duty of Care" y "Takedown & Reporting" requeridas por la OSA.'
                                            : 'The Panel\'s risk assessment documentation natively embeds "Safety by Design", fulfilling the strict statutory "Duty of Care" and "Takedown & Reporting" mandates required by the OSA.',
                                    },
                                    {
                                        icon: 'TrendUp' as const, color: 'green' as const,
                                        title: es ? 'Sostenibilidad Financiera (ROI)' : 'Financial Sustainability (ROI)',
                                        body: es
                                            ? 'La angustia emocional oculta es la mayor amenaza para la retención de alumnos. Al equipar a las escuelas para intervenir temprano, el sistema convierte la salvaguarda de un centro de coste en un activo de retención. Retener a un solo alumno cubre íntegramente el coste de la licencia anual de £2.950.'
                                            : 'Hidden emotional distress is the single biggest threat to student retention. By equipping schools to intervene early, the system turns safeguarding from a cost centre into a retention asset. Retaining just one student completely covers the cost of the £2,950 annual licence.',
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

                        {/* Right — stat card */}
                        <div className="animate-fadeSlideUp" style={{ animationDelay: '120ms' }}>
                            <div className="bg-white rounded-[2rem] shadow-2xl border border-[#e5eaf0] p-8">
                                <h3 className="text-xl font-extrabold text-[#1e2c29] mb-7 text-center">
                                    {es ? 'El impacto en números' : 'The impact in numbers'}
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { label: es ? 'Falsos positivos filtrados por IA' : 'False positives filtered by AI', val: '40%', barW: '40%', color: '#0dc383', bg: '#0dc38322' },
                                        { label: es ? 'Capacidad DSL recuperada semanalmente' : 'DSL capacity reclaimed weekly', val: '30–40%', barW: '37%', color: '#1d4c73', bg: '#1d4c7322' },
                                        { label: es ? 'Ahorro en horas de burocracia/semana' : 'Hours of bureaucracy saved/week', val: '10h+', barW: '75%', color: '#b07d1f', bg: '#eec84322' },
                                        { label: es ? 'Alineación con KCSIE 2026' : 'KCSIE 2026 alignment', val: '100%', barW: '100%', color: '#0dc383', bg: '#0dc38322' },
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[#1d4c73]/70 text-sm font-semibold">{stat.label}</span>
                                                <span className="font-extrabold text-sm" style={{ color: stat.color }}>{stat.val}</span>
                                            </div>
                                            <div className="h-2.5 rounded-full" style={{ background: stat.bg }}>
                                                <div className="h-full rounded-full bar-animate" style={{ '--bar-w': stat.barW, width: stat.barW, background: stat.color, animationDelay: `${i * 250}ms` } as React.CSSProperties} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-7 p-5 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0]">
                                    <p className="text-[#1d4c73]/80 text-sm leading-relaxed italic text-center">
                                        {es
                                            ? '"Retener a un solo alumno en riesgo cubre íntegramente el coste de la licencia anual de AnimiKind — £2.950."'
                                            : '"Retaining just one at-risk student completely covers the cost of the annual AnimiKind licence — £2,950."'}
                                    </p>
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
                        <div className="bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#1d4c73] px-10 pt-14 pb-20 text-center relative overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 900 260" preserveAspectRatio="xMidYMid slice">
                                {[[80, 60], [220, 130], [400, 50], [600, 130], [780, 70], [160, 210], [480, 190], [720, 230]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="4" fill="#0dc383" />)}
                                {[[80, 60, 220, 130], [220, 130, 400, 50], [400, 50, 600, 130], [600, 130, 780, 70], [160, 210, 480, 190], [480, 190, 720, 230]].map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="4 6" />)}
                            </svg>
                            <div className="flex justify-center mb-5 relative z-10">
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name="PresentationChart" color="green" size={42} weight="duotone" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4 relative z-10">
                                {es ? '¿Listo para transformar la salvaguarda de tu centro?' : 'Ready to transform your school\'s safeguarding?'}
                            </h2>
                            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto relative z-10">
                                {es
                                    ? 'Descubre cómo el School Panel puede equipar a tus DSLs con triaje inteligente y evidencia lista para Ofsted. Contacta al KindTeam hoy.'
                                    : 'Discover how the School Panel can equip your DSLs with intelligent triage and Ofsted-ready evidence. Contact the KindTeam today.'}
                            </p>
                        </div>
                        <div className="bg-white px-10 pt-10 pb-12 flex flex-col items-center gap-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/demo/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all hover:-translate-y-0.5">
                                    <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                                    {es ? 'Reservar Demo Gratuita' : 'Book a Free Demo'}
                                </Link>
                                <Link to="/contact/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all shadow-md hover:-translate-y-0.5">
                                    <BrandIcon name="Envelope" color="green" size={18} weight="bold" />
                                    {es ? 'Contactar al KindTeam' : 'Contact the KindTeam'}
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['KCSIE 2026', 'OSA', 'UK GDPR', 'Ofsted Ready', '£2,950/yr'].map((b, i) => (
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

export default SchoolPanelPage;
