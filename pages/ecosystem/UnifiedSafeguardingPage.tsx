import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const UnifiedSafeguardingPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Protección Unificada – AnImiKind' : 'Unified Safeguarding – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">

            {/* ══ SECTION 1 — HERO ══ */}
            <section className="relative w-full min-h-[480px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#0f2d50] to-[#1d4c73]" />

                {/* Shield watermark */}
                <div className="absolute right-0 top-0 h-full w-[480px] flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="ShieldCheck" color="green" size={460} weight="duotone" />
                </div>

                {/* Connecting lines texture */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice">
                    {[[150, 100], [400, 220], [680, 120], [920, 260], [1100, 150]].map(([cx, cy], i) => (
                        <circle key={`n${i}`} cx={cx} cy={cy} r="5" fill="#0dc383" />
                    ))}
                    {[[150, 100, 400, 220], [400, 220, 680, 120], [680, 120, 920, 260], [920, 260, 1100, 150], [150, 100, 680, 120], [400, 220, 920, 260]].map(([x1, y1, x2, y2], i) => (
                        <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="6 4" />
                    ))}
                </svg>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6">
                            <BrandIcon name="LinkSimple" color="green" size={14} weight="bold" />
                            {es ? 'El Ecosistema AnimiKind' : 'The AnimiKind Ecosystem'}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                            {es
                                ? <><span className="text-[#0dc383]">Red de Seguridad</span><br />Emocional Digital<br />Unificada</>
                                : <><span className="text-[#0dc383]">Unified Digital</span><br />Emotional Safety Net</>}
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
                            {es
                                ? 'El primer sistema híbrido-proactivo del Reino Unido diseñado para eliminar la fragmentación de las herramientas de salvaguarda tradicionales, conectando la voz del alumno, el deber de cuidado de la escuela y la tranquilidad de la familia en un único flujo de datos cohesionado.'
                                : "The UK's first hybrid-proactive system designed to eliminate the fragmentation of traditional safeguarding tools — connecting the student's voice, the school's duty of care, and the family's peace of mind into a single, cohesive data flow."}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {(es
                                ? ['Integración Tri-App', 'Detección Proactiva', 'Sin Fragmentación', 'GDPR-Compliant']
                                : ['Tri-App Integration', 'Proactive Detection', 'Zero Fragmentation', 'GDPR-Compliant']
                            ).map((tag, i) => (
                                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                    <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ani mascot */}
                <div className="absolute right-10 bottom-0 z-10 hidden lg:flex items-end pointer-events-none">
                    <img
                        src={cloudinaryMedia.ecosystem.unifiedMascot}
                        alt="Ani — AnimiKind companion"
                        style={{ height: '22rem', animation: 'floatSafe 4s ease-in-out infinite' }}
                        className="drop-shadow-2xl"
                    />
                </div>
            </section>

            <style>{`
                @keyframes floatSafe { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ══ SECTION 2 — WHAT IS THE FRAMEWORK ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-[#e5eaf0]">

                        {/* Left — dark context panel */}
                        <div className="bg-[#1d4c73] p-12 lg:p-16 flex flex-col justify-center gap-8">
                            <div className="flex items-center gap-4">
                                <IconBadge name="LinkSimple" color="green" size="lg" bg="rgba(13,195,131,0.15)" />
                                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                    {es ? 'Integración Tri-App' : 'Tri-App Backend Integration'}
                                </h2>
                            </div>
                            <p className="text-white/75 text-lg leading-relaxed">
                                {es
                                    ? 'El ecosistema AnimiKind opera como la primera «Red de Seguridad Emocional Digital» híbrido-proactiva del Reino Unido, diseñada específicamente para eliminar la fragmentación de las herramientas de salvaguarda tradicionales.'
                                    : 'The AnimiKind ecosystem operates as the UK\'s first hybrid-proactive "Digital Emotional Safety Net," specifically designed to eliminate the fragmentation of traditional safeguarding tools.'}
                            </p>
                            <div className="flex flex-col gap-5">
                                {[
                                    {
                                        icon: 'DeviceMobile' as const, color: 'green' as const,
                                        title: es ? 'La Voz del Alumno' : "The Student's Voice",
                                        body: es ? 'Sentimientos seguros registrados en la app se transforman instantáneamente en expedientes de casos accionables.' : 'Hidden feelings logged in the app are instantly transformed into actionable case files.',
                                    },
                                    {
                                        icon: 'Buildings' as const, color: 'gold' as const,
                                        title: es ? 'El Deber de Cuidado de la Escuela' : "The School's Duty of Care",
                                        body: es ? 'El DSL recibe inteligencia objetiva y recomendaciones personalizadas de intervención, sin papel ni plataformas desconectadas.' : 'The DSL receives objective intelligence and tailored intervention recommendations — no paper, no disconnected platforms.',
                                    },
                                    {
                                        icon: 'House' as const, color: 'white' as const,
                                        title: es ? 'La Tranquilidad de la Familia' : "The Family's Peace of Mind",
                                        body: es ? 'Los padres se convierten en socios informados de la salvaguarda, no en observadores ansiosos.' : 'Parents become informed partners in safeguarding — not anxious outsiders.',
                                    },
                                ].map((pt, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <IconBadge name={pt.icon} color={pt.color} size="sm" bg="rgba(255,255,255,0.1)" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-sm mb-1">{pt.title}</p>
                                            <p className="text-white/65 text-sm leading-relaxed">{pt.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — stat panel */}
                        <div className="bg-[#f4f7fb] p-12 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-[#1e2c29] mb-8 tracking-tight">
                                {es ? '¿Por Qué Unificación?' : 'Why Unification?'}
                            </h3>
                            <div className="grid grid-cols-2 gap-5 mb-8">
                                {[
                                    { val: '25%+', label: es ? 'alumnos 7–13 víctimas de acoso' : 'pupils aged 7–13 bullied', icon: 'Warning' as const, color: 'navy' as const },
                                    { val: '20%', label: es ? 'del acoso online nunca se denuncia' : 'of online abuse unreported', icon: 'EyeSlash' as const, color: 'green' as const },
                                    { val: '3', label: es ? 'plataformas desconectadas en escuelas tipo' : 'disconnected platforms in typical schools', icon: 'Puzzle' as const, color: 'gold' as const },
                                    { val: '0', label: es ? 'niños vulnerables que caen por las grietas' : 'vulnerable children fall through gaps', icon: 'ShieldCheck' as const, color: 'navy' as const },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-5 border border-[#e5eaf0] shadow-sm hover:shadow-lg transition-shadow animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                        <div className="mb-3"><IconBadge name={s.icon} color={s.color} size="sm" /></div>
                                        <div className="text-2xl font-extrabold text-[#1e2c29] mb-1">{s.val}</div>
                                        <div className="text-xs text-[#1d4c73]/65 font-semibold leading-tight">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-2xl bg-[#0dc383]/10 border border-[#0dc383]/30 p-5">
                                <p className="text-[#1d4c73] text-sm leading-relaxed font-medium">
                                    {es
                                        ? '"A través de esta arquitectura interconectada, AnimiKind garantiza que el apoyo sea coherente en el hogar y en la escuela, cerrando el bucle de seguridad con mucha más eficacia que los sistemas heredados."'
                                        : '"Through this interconnected architecture, AnimiKind ensures that support is consistent at home and at school, closing the safety loop far more efficiently than legacy systems."'}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — THE FOUR PILLARS ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Los Cuatro Pilares del Ecosistema' : 'The Four Ecosystem Pillars'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Cómo Funciona la Red de Seguridad' : 'How the Safety Net Works'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Cada componente del ecosistema AnimiKind está interconectado a través de un backend compartido, eliminando silos y asegurando que ningún niño vulnerable quede desprotegido.'
                                : 'Each component of the AnimiKind ecosystem is interconnected through a shared backend, eliminating silos and ensuring no vulnerable child falls through the gaps.'}
                        </p>
                    </div>

                    <div className="space-y-8">

                        {/* Pillar 1 — AnimiKind App */}
                        <div className="grid lg:grid-cols-[auto_1fr] gap-0 rounded-[2rem] overflow-hidden border border-[#0dc383]/30 bg-white shadow-xl hover:shadow-2xl transition-shadow animate-fadeSlideUp" style={{ animationDelay: '0ms' }}>
                            <div className="flex flex-col items-center justify-center px-10 py-12 lg:py-16 gap-4" style={{ background: '#1d4c73', minWidth: '180px' }}>
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name="DeviceMobile" color="green" size={38} weight="duotone" />
                                </div>
                                <span className="text-[#0dc383] text-3xl font-extrabold">01</span>
                            </div>
                            <div className="p-9 lg:p-12">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#0dc383]">{es ? 'El Ancla del Alumno' : "The Student's Anchor"}</span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#1e2c29] mb-4">AnimiKind App{es ? ' — Detección Proactiva' : ' & Proactive Detection'}</h3>
                                <p className="text-[#1d4c73]/75 leading-relaxed mb-6">
                                    {es
                                        ? 'La base del ecosistema es la AnimiKind App, diseñada para alumnos de 8 a 18 años. Actúa como un espacio seguro y sin juicios donde los alumnos interactúan con «Ani», la compañera IA Emocional.'
                                        : 'The foundation of the ecosystem is the AnimiKind App, designed for students aged 8 to 18. It acts as a safe, non-judgmental space where students interact with "Ani," the Emotional AI companion.'}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: 'Brain' as const, color: 'green' as const,
                                            title: es ? 'Detección de Riesgo en Tiempo Real' : 'Real-Time Risk Detection',
                                            body: es ? 'La IA analiza proactivamente el diario emocional del alumno y sus conversaciones, detectando señales de angustia de bajo nivel (acoso, ciberacoso) incluso si el alumno intenta minimizar su experiencia.' : "The AI proactively analyses the student's emotional diary and chats, detecting low-level distress cues (bullying, cyberbullying) even if the student attempts to minimise their experience.",
                                        },
                                        {
                                            icon: 'Heart' as const, color: 'gold' as const,
                                            title: es ? 'Empoderamiento, No Vigilancia' : 'Empowerment over Surveillance',
                                            body: es ? 'En lugar de operar como una herramienta de espionaje, construye alfabetización emocional y empodera al alumno para participar activamente en su propia protección.' : 'Instead of operating as a surveillance tool that "spies" on students, it builds emotional literacy and empowers the student to actively participate in their own protection.',
                                        },
                                    ].map((pt, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0]">
                                            <BrandIcon name={pt.icon} color={pt.color} size={20} weight="duotone" />
                                            <div>
                                                <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                                <p className="text-[#1d4c73]/65 text-xs leading-relaxed">{pt.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {(es ? ['Diario Emocional', 'Chat con Ani', 'NLP en Tiempo Real', 'Alumnos 8–18 años'] : ['Emotional Diary', 'Chat with Ani', 'Real-Time NLP', 'Students 8–18']).map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-bold border border-[#0dc383]/40 text-[#0dc383] bg-[#0dc383]/10">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pillar 2 — Comunikind Bridge */}
                        <div className="grid lg:grid-cols-[auto_1fr] gap-0 rounded-[2rem] overflow-hidden border border-[#eec843]/30 bg-white shadow-xl hover:shadow-2xl transition-shadow animate-fadeSlideUp" style={{ animationDelay: '100ms' }}>
                            <div className="flex flex-col items-center justify-center px-10 py-12 lg:py-16 gap-4" style={{ background: '#1d4c73', minWidth: '180px' }}>
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(238,200,67,0.18)', border: '2px solid rgba(238,200,67,0.4)' }}>
                                    <BrandIcon name="Network" color="gold" size={38} weight="duotone" />
                                </div>
                                <span className="text-[#eec843] text-3xl font-extrabold">02</span>
                            </div>
                            <div className="p-9 lg:p-12">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#b07d1f]">{es ? 'El Puente de Comunicación' : 'THE COMMUNICATION BRIDGE'}</span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#1e2c29] mb-4">{es ? 'Rompiendo una Barrera | Función Reporte con Un Clic' : 'Breaking a Barrier | One-Click Reporting Feature'}</h3>
                                <p className="text-[#1d4c73]/75 leading-relaxed mb-6">
                                    {es
                                        ? 'El elemento más crítico que conecta a alumnos, familias y escuelas es el módulo Comunikind y su funcionalidad de «Reporte con un clic». Cuando la IA detecta un riesgo, cierra la brecha entre el alumno y su red de apoyo mediante triangulación automatizada.'
                                        : 'The most critical element connecting students, families, and schools is the Comunikind module and its "One-Click Reporting" functionality. When the AI detects a risk, it bridges the gap through automated triangulation.'}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: 'House' as const, color: 'gold' as const,
                                            title: es ? 'Conectando a la Familia' : 'Connecting the Family',
                                            body: es ? 'La IA redacta y envía automáticamente un email a la familia con un resumen del caso, evaluación de riesgo y un plan de acción de intervención temprana, transformando a los padres en socios informados.' : 'The AI automatically drafts and sends an email to the family with a case summary, risk assessment, and early intervention action plan — transforming parents into informed safeguarding partners.',
                                        },
                                        {
                                            icon: 'Buildings' as const, color: 'green' as const,
                                            title: es ? 'Conectando a la Escuela' : 'Connecting the School',
                                            body: es ? 'La función «Comunicar a la escuela» envía una notificación redactada por la IA directamente a la institución, resumiendo los incidentes y proporcionando recomendaciones iniciales para el DSL.' : 'The "Notify the school" feature sends an AI-drafted notification directly to the institution, summarising incidents and providing initial recommendations for the teacher or safeguarding lead.',
                                        },
                                    ].map((pt, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0]">
                                            <BrandIcon name={pt.icon} color={pt.color} size={20} weight="duotone" />
                                            <div>
                                                <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                                <p className="text-[#1d4c73]/65 text-xs leading-relaxed">{pt.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {(es ? ['Reporte 1-Clic', 'Email Auto-redactado', 'Triángulo Familia-Escuela-Alumno', 'Intervención Temprana'] : ['One-Click Reporting', 'Auto-Drafted Email', 'Family-School-Pupil Triangle', 'Early Intervention']).map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-bold border border-[#eec843]/40 text-[#b8962e] bg-[#eec843]/10">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Image between pillar 2 and 3 ── */}
                        <div className="animate-fadeSlideUp" style={{ animationDelay: '150ms' }}>
                            <img
                                src={cloudinaryMedia.ecosystem.unifiedEcosystemVisual}
                                alt="Unified Safeguarding — AnimiKind ecosystem visual"
                                className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0] hover:shadow-2xl transition-shadow"
                            />
                        </div>

                        {/* Pillar 3 — School Panel */}
                        <div className="grid lg:grid-cols-[auto_1fr] gap-0 rounded-[2rem] overflow-hidden border border-[#1d4c73]/30 bg-white shadow-xl hover:shadow-2xl transition-shadow animate-fadeSlideUp" style={{ animationDelay: '200ms' }}>
                            <div className="flex flex-col items-center justify-center px-10 py-12 lg:py-16 gap-4" style={{ background: '#1d4c73', minWidth: '180px' }}>
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }}>
                                    <BrandIcon name="PresentationChart" color="white" size={38} weight="duotone" />
                                </div>
                                <span className="text-white text-3xl font-extrabold">03</span>
                            </div>
                            <div className="p-9 lg:p-12">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#1d4c73]">{es ? 'El Hub Institucional' : 'The Institutional Hub'}</span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#1e2c29] mb-4">{es ? 'Panel Escolar AnimiKind — Código de Enlace Único' : 'AnimiKind School Panel — Unique Link-Code'}</h3>
                                <p className="text-[#1d4c73]/75 leading-relaxed mb-6">
                                    {es
                                        ? 'Mientras el alumno recibe apoyo empático y la familia recibe alertas, la escuela recibe la información a través del panel SaaS B2B conocido como School Panel — el cerebro operativo del ecosistema para los DSLs.'
                                        : 'While the student receives empathetic support and the family receives alerts, the school receives the information through the B2B SaaS dashboard known as the School Panel — the operational brain of the ecosystem for DSLs.'}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: 'ChartBar' as const, color: 'green' as const,
                                            title: es ? 'Inteligencia Accionable' : 'Actionable Intelligence',
                                            body: es ? 'Cuando un alumno escala un caso, el panel traduce las alertas de la IA en una evaluación de riesgo objetiva, una cronología de incidentes y recomendaciones de intervención personalizadas.' : 'When a pupil escalates a case, the panel translates AI alerts into an objective risk assessment, a chronological timeline of incidents, and tailored intervention recommendations.',
                                        },
                                        {
                                            icon: 'Eye' as const, color: 'gold' as const,
                                            title: es ? 'Visión Unificada' : 'Unified Oversight',
                                            body: es ? 'El DSL ve el «panorama general» del clima emocional de la escuela y gestiona casos eficazmente, sin el caos del reporting en papel o las plataformas desconectadas.' : 'The DSL sees the "big picture" of the school\'s emotional climate and manages cases effectively, without the friction of paper-based reporting or disconnected platforms.',
                                        },
                                    ].map((pt, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0]">
                                            <BrandIcon name={pt.icon} color={pt.color} size={20} weight="duotone" />
                                            <div>
                                                <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                                <p className="text-[#1d4c73]/65 text-xs leading-relaxed">{pt.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {(es ? ['SaaS B2B', 'Dashboard DSL', 'Clima Escolar', 'Casos Cronológicos'] : ['B2B SaaS', 'DSL Dashboard', 'School Climate', 'Chronological Cases']).map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-bold border border-[#1d4c73]/30 text-[#1d4c73] bg-[#1d4c73]/8">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pillar 4 — AnimiKdemi */}
                        <div className="grid lg:grid-cols-[auto_1fr] gap-0 rounded-[2rem] overflow-hidden border border-[#0dc383]/20 bg-white shadow-xl hover:shadow-2xl transition-shadow animate-fadeSlideUp" style={{ animationDelay: '300ms' }}>
                            <div className="flex flex-col items-center justify-center px-10 py-12 lg:py-16 gap-4" style={{ background: '#1d4c73', minWidth: '180px' }}>
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(238,200,67,0.18)', border: '2px solid rgba(238,200,67,0.4)' }}>
                                    <BrandIcon name="Graduation" color="gold" size={38} weight="duotone" />
                                </div>
                                <span className="text-[#eec843] text-3xl font-extrabold">04</span>
                            </div>
                            <div className="p-9 lg:p-12">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#b07d1f]">{es ? 'La Cultura Compartida de Prevención' : 'The Shared Culture of Prevention'}</span>
                                </div>
                                <h3 className="text-xl font-extrabold text-[#1e2c29] mb-4 leading-snug">{es ? 'Dos Caminos de Aprendizaje Reflexivo & Un Simulador con IA Emocional' : 'Two Reflective Learning Paths & One Emotional-AI powered Simulator'}</h3>
                                <p className="text-[#1d4c73]/75 leading-relaxed mb-6">
                                    {es
                                        ? 'El elemento final que une al ecosistema es AnimiKdemi, un simulador de aprendizaje reflexivo impulsado por EAI. Al formar tanto a alumnos como al personal dentro del mismo marco, AnimiKdemi garantiza que toda la comunidad desarrolle un lenguaje y una cultura de prevención compartidos.'
                                        : 'The final element that binds the ecosystem together is AnimiKdemi, a reflective learning simulator powered by EAI. By training both students and staff within the same framework, AnimiKdemi ensures that the entire community develops a shared language and culture of prevention.'}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: 'Student' as const, color: 'green' as const,
                                            title: es ? 'Para Alumnos' : 'For Students',
                                            body: es ? 'Simulaciones interactivas y contenido gamificado para desarrollar autoconciencia, empatía y resiliencia emocional en un entorno seguro.' : 'Interactive simulations and gamified content to build self-awareness, empathy, and emotional resilience in a safe environment.',
                                        },
                                        {
                                            icon: 'Certificate' as const, color: 'gold' as const,
                                            title: es ? 'Para Educadores (CPD Acreditado)' : 'For Educators (CPD-Accredited)',
                                            body: es ? 'Formación acreditada por CPD (Proveedor Aprobado #788968) en salud mental, seguridad digital y protocolos de salvaguarda.' : 'CPD-accredited training (Approved Provider #788968) on mental health, digital safety, and safeguarding protocols.',
                                        },
                                    ].map((pt, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0]">
                                            <BrandIcon name={pt.icon} color={pt.color} size={20} weight="duotone" />
                                            <div>
                                                <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                                <p className="text-[#1d4c73]/65 text-xs leading-relaxed">{pt.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {(es ? ['CPD #788968', 'Gamificación', 'Toda la Comunidad', 'Simulación EAI'] : ['CPD #788968', 'Gamification', 'Whole Community', 'EAI Simulation']).map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-bold border border-[#eec843]/40 text-[#b8962e] bg-[#eec843]/10">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — DATA FLOW LOOP ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5">
                        {es ? 'El Flujo de Datos Unificado' : 'The Unified Data Flow'}
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#1e2c29] mb-4 tracking-tight">
                        {es ? 'Un Sentimiento Oculto Se Convierte en Acción' : 'A Hidden Feeling Becomes Action'}
                    </h2>
                    <p className="text-[#1d4c73]/70 max-w-2xl mx-auto mb-12">
                        {es
                            ? 'Los datos fluyen de forma segura a través de todo el ecosistema, eliminando silos y garantizando que ningún niño vulnerable quede desprotegido.'
                            : 'Data flows securely across the entire ecosystem, eliminating silos and ensuring that no vulnerable child falls through the gaps.'}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
                        {[
                            { label: es ? 'Alumno registra sentimiento' : 'Student logs feeling', icon: 'PencilSimple' as const, color: '#0dc383', bg: '#f4fdf9', border: '#0dc383' },
                            { label: null, icon: 'ArrowRight' as const, color: '#0dc383', bg: 'transparent', border: 'transparent' },
                            { label: es ? 'Ani detecta señal de riesgo' : 'Ani detects risk signal', icon: 'Brain' as const, color: '#0dc383', bg: '#f4fdf9', border: '#0dc383' },
                            { label: null, icon: 'ArrowRight' as const, color: '#eec843', bg: 'transparent', border: 'transparent' },
                            { label: es ? 'Comunikind triangula' : 'Comunikind triangulates', icon: 'Network' as const, color: '#eec843', bg: '#fffdf0', border: '#eec843' },
                            { label: null, icon: 'ArrowRight' as const, color: '#1d4c73', bg: 'transparent', border: 'transparent' },
                            { label: es ? 'Familia + Escuela reciben alerta' : 'Family + School alerted', icon: 'Bell' as const, color: '#1d4c73', bg: '#f0f5fb', border: '#1d4c73' },
                            { label: null, icon: 'ArrowRight' as const, color: '#1d4c73', bg: 'transparent', border: 'transparent' },
                            { label: es ? 'DSL activa intervención' : 'DSL activates intervention', icon: 'ShieldCheck' as const, color: '#1d4c73', bg: '#f0f5fb', border: '#1d4c73' },
                        ].map((step, i) =>
                            step.label === null ? (
                                <BrandIcon key={i} name={step.icon} color={step.color === '#0dc383' ? 'green' : step.color === '#eec843' ? 'gold' : 'navy'} size={22} weight="bold" />
                            ) : (
                                <div key={i} className="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border-2 shadow-sm min-w-[130px] animate-fadeSlideUp" style={{ background: step.bg, borderColor: `${step.border}40`, animationDelay: `${i * 60}ms` }}>
                                    <BrandIcon name={step.icon} color={step.color === '#0dc383' ? 'green' : step.color === '#eec843' ? 'gold' : 'navy'} size={22} weight="duotone" />
                                    <span className="font-bold text-xs text-[#1e2c29] text-center leading-tight">{step.label}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 5 — CTA ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <IconBadge name="ShieldCheck" color="green" size="lg" bg="rgba(13,195,131,0.15)" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
                        {es ? '¿Listo para Cerrar el Bucle de Seguridad?' : 'Ready to Close the Safety Loop?'}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Descubre cómo el ecosistema unificado de AnimiKind puede transformar la estrategia de salvaguarda de tu institución.'
                            : "Discover how AnimiKind's unified ecosystem can transform your institution's safeguarding strategy."}
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
                            {es ? 'Conocer la IA Emocional' : 'Learn About Emotional AI'}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UnifiedSafeguardingPage;
