import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

/* ─── Module-level sub-component: value proposition card ─── */
interface VPCardProps {
    iconName: 'ShieldCheck' | 'TrendUp' | 'Megaphone';
    brandColor: 'green' | 'navy' | 'gold';
    accentHex: string;
    label: string;
    title: string;
    body: React.ReactNode;
    tags: string[];
    delay?: number;
}
const VPCard: React.FC<VPCardProps> = ({ iconName, brandColor, accentHex, label, title, body, tags, delay = 0 }) => (
    <div
        className="group flex flex-col bg-white rounded-[1.75rem] border-2 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
        style={{ borderColor: `${accentHex}44`, animationDelay: `${delay}ms` }}
    >
        <div className="flex items-center justify-center px-6 py-9" style={{ background: '#1d4c73' }}>
            <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                style={brandColor === 'navy'
                    ? { background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }
                    : { background: `${accentHex}22`, border: `2px solid ${accentHex}55` }}
            >
                <BrandIcon name={iconName} color={brandColor === 'navy' ? 'white' : brandColor} size={38} weight="duotone" />
            </div>
        </div>
        <div className="flex flex-col flex-1 px-7 py-6">
            <span className="text-[11px] font-extrabold tracking-widest uppercase mb-2" style={{ color: accentHex }}>{label}</span>
            <h3 className="text-lg font-extrabold text-[#1e2c29] mb-3 leading-snug">{title}</h3>
            <div className="text-[#1d4c73]/75 text-sm leading-relaxed flex-1 mb-5">{body}</div>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-bold border" style={{ color: accentHex, background: `${accentHex}12`, borderColor: `${accentHex}40` }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(to right, ${accentHex}, ${accentHex}44)` }} />
    </div>
);

const EmotionalAiPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Innovando: IA Emocional – AnImiKind' : 'Innovating: Emotional AI – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">

            {/* ══ SECTION 1 — HERO ══ */}
            <section className="relative w-full min-h-[500px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cloudinaryMedia.ecosystem.emotionalAiBanner})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a]/85 via-[#0f2d50]/75 to-[#1d4c73]/80" />

                {/* Neural network texture */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
                    {[[120, 80], [380, 180], [640, 100], [900, 220], [1080, 130], [200, 340], [460, 380], [700, 300], [950, 400], [1150, 320]].map(([cx, cy], i) => (
                        <circle key={`n${i}`} cx={cx} cy={cy} r="5" fill="#0dc383" />
                    ))}
                    {[[120, 80, 380, 180], [380, 180, 640, 100], [640, 100, 900, 220], [900, 220, 1080, 130], [120, 80, 200, 340], [380, 180, 460, 380], [640, 100, 700, 300], [900, 220, 950, 400], [1080, 130, 1150, 320], [200, 340, 460, 380], [460, 380, 700, 300], [700, 300, 950, 400], [950, 400, 1150, 320]].map(([x1, y1, x2, y2], i) => (
                        <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="6 4" />
                    ))}
                </svg>

                {/* Brain watermark */}
                <div className="absolute right-0 top-0 h-full w-[480px] flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Brain" color="green" size={460} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14">
                    {/* Text */}
                    <div className="flex-1 text-white space-y-6 max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                            <BrandIcon name="Robot" color="green" size={14} weight="bold" />
                            {es ? 'El Ecosistema AnimiKind' : 'The AnimiKind Ecosystem'}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            {es
                                ? <><span className="text-[#0dc383]">Inteligencia Amable:</span><br />IA Emocional al Servicio<br />de la Humanidad</>
                                : <><span className="text-[#0dc383]">Kind Intelligence:</span><br />Emotional AI in Service<br />of Humanity</>}
                        </h1>

                        <p className="text-white/80 text-lg leading-relaxed">
                            {es
                                ? 'La IA Emocional de AnimiKind no toma decisiones clínicas ni disciplinarias. Es una herramienta de «Aumento de Inteligencia» diseñada para empoderar a los profesionales humanos y convertir señales de angustia silenciosas en información accionable en tiempo real.'
                                : "AnimiKind's Emotional AI doesn't make clinical or disciplinary decisions. It is an Intelligence Augmentation tool designed to empower human professionals and turn silent distress signals into real-time actionable intelligence."}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-1">
                            {(es
                                ? ['Aumento de Inteligencia', 'Humano en el Bucle', 'Sin Caja Negra', 'Privacidad-First']
                                : ['Intelligence Augmentation', 'Human-in-the-Loop', 'No Black Box', 'Privacy-First']
                            ).map((tag, i) => (
                                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                    <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Ani + stat cards */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-5">
                        <img
                            src={cloudinaryMedia.about.mascot}
                            alt="Ani — AnimiKind AI companion"
                            className="h-68 w-auto drop-shadow-2xl"
                            style={{ animation: 'floatEai 4s ease-in-out infinite', height: '17rem' }}
                        />
                        <div className="grid grid-cols-2 gap-3 w-56">
                            {[
                                { val: '20%', label: es ? 'del acoso no se reporta' : 'of bullying unreported', color: '#0dc383' },
                                { val: '40%', label: es ? 'capacidad recuperada' : 'capacity reclaimed', color: '#eec843' },
                            ].map((s, i) => (
                                <div key={i} className="rounded-2xl p-3 text-center border border-white/20 bg-white/10 backdrop-blur-sm">
                                    <div className="text-2xl font-extrabold" style={{ color: s.color }}>{s.val}</div>
                                    <div className="text-white/60 text-[10px] font-semibold leading-tight mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes floatEai { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
      `}</style>

            {/* ── EAI Image ── */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.ecosystem.emotionalAiBelowBanner}
                            alt="Emotional AI — AnimiKind Kind Intelligence"
                            className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0]"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 2 — KIND INTELLIGENCE PHILOSOPHY ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-[#e5eaf0]">

                        {/* Left — dark philosophy panel */}
                        <div className="bg-[#1d4c73] p-12 lg:p-16 flex flex-col justify-center gap-8">
                            <div className="flex items-center gap-4">
                                <IconBadge name="Brain" color="green" size="lg" bg="rgba(13,195,131,0.15)" />
                                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                    {es ? '«Inteligencia Amable»' : '"Kind Intelligence"'}
                                </h2>
                            </div>
                            <p className="text-white/75 text-lg leading-relaxed">
                                {es
                                    ? 'Vender IA a escuelas y padres exige superar importantes barreras de confianza, privacidad y responsabilidad legal. AnimiKind resuelve esto mediante su filosofía fundamental de «Inteligencia Amable» y el principio estricto de que «El Factor Humano es Insustituible».'
                                    : 'Selling AI to schools and parents requires overcoming significant barriers of trust, privacy, and liability. AnimiKind resolves this through its core philosophy of "Kind Intelligence" and the strict principle that "The Human Factor is Irreplaceable".'}
                            </p>
                            <div className="flex flex-col gap-5 mt-2">
                                {[
                                    {
                                        icon: 'UsersThree' as const, color: 'green' as const,
                                        title: es ? 'Aumento de Inteligencia, No Reemplazo' : 'Intelligence Augmentation, Not Replacement',
                                        body: es ? 'Nuestra EAI está diseñada para empoderar a los profesionales humanos, no para sustituirlos.' : 'Our EAI is designed to empower human professionals — never to replace them.',
                                    },
                                    {
                                        icon: 'ShieldCheck' as const, color: 'gold' as const,
                                        title: es ? 'Mitigación de Riesgos y Confianza' : 'Risk Mitigation & Trust',
                                        body: es ? 'Al evitar la tecnología de «Caja Negra» y mantener un estricto Human-in-the-Loop, reducimos la responsabilidad institucional y garantizamos el cumplimiento normativo.' : 'By avoiding "Black Box" technology and maintaining Human-in-the-Loop architecture, we reduce institutional liability and ensure regulatory compliance.',
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

                        {/* Right — light stat panel */}
                        <div className="bg-[#f4f7fb] p-12 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-[#1e2c29] mb-8 tracking-tight">
                                {es ? 'El Problema que Resolvemos' : 'The Problem We Solve'}
                            </h3>
                            <div className="grid grid-cols-2 gap-5 mb-8">
                                {[
                                    { val: '25%+', label: es ? 'alumnos 7–13 años víctimas de acoso' : 'pupils 7–13 report bullying', icon: 'Warning' as const, color: 'navy' as const },
                                    { val: '20%', label: es ? 'del acoso online nunca se denuncia' : 'of online abuse unreported', icon: 'EyeSlash' as const, color: 'green' as const },
                                    { val: '10h', label: es ? 'del DSL ahorradas por semana' : 'saved per DSL / week', icon: 'Clock' as const, color: 'gold' as const },
                                    { val: '40%', label: es ? 'capacidad del personal recuperada' : 'staff capacity reclaimed', icon: 'TrendUp' as const, color: 'navy' as const },
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
                                        ? '"AnimiKind demuestra que el cumplimiento normativo riguroso, el impacto social medible y los rendimientos comerciales sólidos no son mutuamente excluyentes — se refuerzan mutuamente."'
                                        : '"AnimiKind proves that rigorous statutory compliance, measurable social impact, and robust commercial returns are not mutually exclusive — they are mutually reinforcing."'}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — TRI-APP BACKEND INTEGRATION ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Integración Backend Tri-App' : 'Tri-App Backend Integration'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Una Red de Seguridad Digital de 360°' : 'A 360° Digital Safety Net'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'A diferencia de las plataformas de legado fragmentadas que actúan como archivadores digitales reactivos, la EAI de AnimiKind busca activamente prevenir el daño antes de que ocurra.'
                                : 'Unlike fragmented legacy platforms acting as reactive digital filing cabinets, AnimiKind\'s EAI actively seeks to prevent harm before it occurs.'}
                        </p>
                    </div>

                    {/* 3 app pillars */}
                    <div className="grid md:grid-cols-3 gap-7">
                        {[
                            {
                                iconName: 'DeviceMobile' as const, brandColor: 'green' as const, accentHex: '#0dc383',
                                num: '01', label: 'AnimiKind APP',
                                title: es ? 'Detección Proactiva' : 'Proactive Detection',
                                body: es
                                    ? <><strong>La EAI actúa como «Ani»</strong>, un compañero empático que usa Procesamiento de Lenguaje Natural (NLP) en tiempo real para detectar señales de angustia de bajo nivel. Identifica señales de riesgo incluso cuando los alumnos intentan minimizar o normalizar sus experiencias, abordando directamente el <strong>20% de niños que nunca reportan el ciberacoso</strong>.</>
                                    : <>The EAI acts as <strong>"Ani"</strong>, an empathetic companion using real-time NLP to detect low-level distress cues. It identifies risk signals even when pupils attempt to minimise or normalise their experiences — directly addressing the <strong>20% of children who never report cyberbullying</strong>.</>,
                                tags: es ? ['NLP en Tiempo Real', 'Análisis de Sentimiento', 'Detección Silenciosa'] : ['Real-Time NLP', 'Sentiment Analysis', 'Silent Detection'],
                            },
                            {
                                iconName: 'PresentationChart' as const, brandColor: 'navy' as const, accentHex: '#1d4c73',
                                num: '02', label: es ? 'Panel Escolar' : 'School Panel',
                                title: es ? 'Inteligencia Accionable' : 'Actionable Intelligence',
                                body: es
                                    ? <>La EAI traduce automáticamente las interacciones de los alumnos en <strong>evaluaciones de riesgo objetivas y expedientes cronológicos</strong>. Genera «Planes de Acción» inmediatos y personalizados tanto para el alumno como para el DSL, <strong>cerrando la brecha entre el grito de ayuda y la intervención institucional</strong>.</>
                                    : <>The EAI automatically translates student interactions into <strong>objective risk assessments and chronological case files</strong>. It generates immediate, personalised "Action Plans" for both student and safeguarding staff, <strong>bridging the gap between a cry for help and institutional intervention</strong>.</>,
                                tags: es ? ['Evaluación de Riesgo', 'Planes de Acción', 'Informe con-un-clic'] : ['Risk Assessment', 'Action Plans', 'One-Click Reporting'],
                            },
                            {
                                iconName: 'Graduation' as const, brandColor: 'gold' as const, accentHex: '#eec843',
                                num: '03', label: 'AnimiKdemi',
                                title: es ? 'Aprendizaje Reflexivo' : 'Reflective Learning',
                                body: es
                                    ? <>La EAI impulsa <strong>simuladores avanzados de voz y texto</strong> que permiten a alumnos y personal representar situaciones y desarrollar resiliencia emocional en un entorno seguro y acreditado por CPD. Es el <strong>«Caballo de Troya» de nuestra estrategia Go-To-Market</strong>: accesible desde £695 con tarjeta de crédito discrecional de un director.</>
                                    : <>The EAI powers <strong>advanced voice and text learning simulators</strong>, allowing students and staff to role-play and develop emotional resilience in a safe, CPD-accredited environment. This is the <strong>"Trojan Horse" of our GTM strategy</strong> — accessible from £695 on a Headteacher's discretionary card.</>,
                                tags: ['CPD Certified', es ? 'Simulación de Voz' : 'Voice Simulation', es ? 'Desde £695' : 'From £695'],
                            },
                        ].map((app, i) => (
                            <VPCard key={i} {...app} delay={i * 110} />
                        ))}
                    </div>

                    {/* Flow diagram */}
                    <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
                        {[
                            { label: 'AnimiKind APP', color: '#0dc383', icon: 'DeviceMobile' as const },
                            null,
                            { label: es ? 'Panel Escolar' : 'School Panel', color: '#1d4c73', icon: 'PresentationChart' as const },
                            null,
                            { label: 'AnimiKdemi', color: '#eec843', icon: 'Graduation' as const },
                        ].map((step, i) => step === null
                            ? <BrandIcon key={i} name="ArrowRight" color="green" size={24} weight="bold" />
                            : (
                                <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border-2 shadow-sm" style={{ borderColor: `${step.color}44` }}>
                                    <BrandIcon name={step.icon} color={step.color === '#0dc383' ? 'green' : step.color === '#eec843' ? 'gold' : 'navy'} size={18} weight="duotone" />
                                    <span className="font-bold text-sm text-[#1e2c29]">{step.label}</span>
                                </div>
                            )
                        )}
                    </div>

                    {/* Image below 360° Digital Safety */}
                    <div className="mt-12 animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.ecosystem.emotionalAiBelow360}
                            alt="AnimiKind 360 digital safety ecosystem"
                            className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0]"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — UK VALUE PROPOSITION ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Propuesta de Valor en el Mercado del Reino Unido' : 'UK Market Value Proposition'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Diseñada para los MATs y el Mandato Estatutario Británico' : 'Built for UK MATs & Statutory Mandates'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'La propuesta de valor de AnimiKind está estratégicamente diseñada para alinear la rentabilidad comercial con los mandatos estatutarios urgentes del mercado educativo británico.'
                                : "AnimiKind's value proposition is strategically designed to align commercial profitability with urgent statutory mandates in the British education market."}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Compliance tile */}
                        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                            <div className="group p-10 rounded-[2rem] bg-gradient-to-br from-[#1d4c73]/8 to-[#1d4c73]/3 border-2 border-[#1d4c73]/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeSlideUp" style={{ animationDelay: '0ms' }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <IconBadge name="ShieldCheck" color="navy" size="lg" />
                                    <div>
                                        <span className="text-xs font-extrabold tracking-widest uppercase text-[#1d4c73]/60 block">A</span>
                                        <h3 className="text-xl font-extrabold text-[#1e2c29]">
                                            {es ? 'Cumplimiento Estatutario a Prueba de Balas' : 'Bulletproof Statutory Compliance'}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-[#1d4c73]/75 text-sm leading-relaxed mb-6">
                                    {es
                                        ? 'El mercado del Reino Unido está impulsado por regulaciones estrictas y en evolución. AnimiKind está explícitamente diseñado como un activo de cumplimiento normativo.'
                                        : 'The UK market is driven by strict, evolving regulations. AnimiKind is explicitly designed as a compliance asset.'}
                                </p>
                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: 'Scales' as const, color: 'navy' as const,
                                            title: es ? 'Ley de Seguridad Online (OSA)' : 'Online Safety Act (OSA)',
                                            body: es ? 'Cumple el deber de cuidado estatutario y los mandatos de retirada y notificación, detectando riesgos activamente y facilitando el reporte con un clic.' : 'Fulfils the strict statutory Duty of Care and Takedown & Reporting mandates by actively detecting risks and enabling one-click reporting.',
                                        },
                                        {
                                            icon: 'Certificate' as const, color: 'green' as const,
                                            title: es ? 'KCSIE y Preparación para Ofsted' : 'KCSIE & Ofsted Readiness',
                                            body: es ? 'La documentación automatizada de casos y los análisis del clima escolar anónimos proporcionan exactamente las pistas de evidencia digital que los inspectores de Ofsted requieren para puntuar la salvaguarda como «Sobresaliente».' : "Automated case documentation and anonymised school climate analytics provide the exact digital evidence trails Ofsted inspectors require to rate safeguarding as 'Outstanding'.",
                                        },
                                    ].map((pt, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#1d4c73]/10">
                                            <BrandIcon name={pt.icon} color={pt.color} size={20} weight="duotone" />
                                            <div>
                                                <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                                <p className="text-[#1d4c73]/65 text-xs leading-relaxed">{pt.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ROI tile */}
                            <div className="group p-10 rounded-[2rem] bg-gradient-to-br from-[#0dc383]/8 to-[#0dc383]/3 border-2 border-[#0dc383]/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeSlideUp" style={{ animationDelay: '120ms' }}>
                                <div className="flex items-center gap-4 mb-6">
                                    <IconBadge name="TrendUp" color="green" size="lg" />
                                    <div>
                                        <span className="text-xs font-extrabold tracking-widest uppercase text-[#0dc383]/70 block">B</span>
                                        <h3 className="text-xl font-extrabold text-[#1e2c29]">
                                            {es ? 'ROI Operacional Sin Rival' : 'Unrivalled Operational ROI'}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-[#1d4c73]/75 text-sm leading-relaxed mb-6">
                                    {es
                                        ? 'Las escuelas están abrumadas por cargas administrativas. Al automatizar la detección temprana, el triaje de riesgo y el reporting inicial, AnimiKind recupera hasta el 40% de la capacidad del personal de salvaguarda.'
                                        : "Schools are overwhelmed by administrative burdens. By automating early detection, risk triage, and initial case reporting, AnimiKind reclaims up to 40% of safeguarding staff capacity."}
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {[
                                        { val: '40%', label: es ? 'Capacidad del personal recuperada' : 'Staff capacity reclaimed', color: '#0dc383' },
                                        { val: '10h', label: es ? 'DSL ahorradas por semana' : 'DSL hours saved weekly', color: '#0dc383' },
                                        { val: '1-click', label: es ? 'Reporting de incidentes' : 'Incident reporting', color: '#1d4c73' },
                                        { val: 'Auto', label: es ? 'Documentación de casos' : 'Case documentation', color: '#1d4c73' },
                                    ].map((s, i) => (
                                        <div key={i} className="bg-white rounded-2xl p-4 border border-[#e5eaf0] text-center shadow-sm">
                                            <div className="text-2xl font-extrabold mb-1" style={{ color: s.color }}>{s.val}</div>
                                            <div className="text-xs text-[#1d4c73]/65 font-semibold leading-tight">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ══ SECTION 5 — APP SCREENSHOTS ══ */}
            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-3">
                            {es ? 'La Plataforma en Acción' : 'The Platform in Action'}
                        </span>
                        <h2 className="text-2xl font-extrabold text-[#1e2c29]">{es ? 'Interfaz e Integraciones' : 'Interface & Integrations'}</h2>
                    </div>
                    {[cloudinaryMedia.ecosystem.emotionalAiInterfacePrimary, cloudinaryMedia.ecosystem.emotionalAiInterfaceSecondary].map((src, i) => (
                        <div key={i} className="animate-fadeSlideUp" style={{ animationDelay: `${i * 150}ms` }}>
                            <img src={src} alt={`AnimiKind EAI interface ${i + 1}`} className="w-full h-auto rounded-[1.5rem] shadow-xl border border-[#e5eaf0] hover:shadow-2xl transition-shadow" />
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ SECTION 6 — CTA ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <IconBadge name="Sparkle" color="gold" size="lg" bg="rgba(238,200,67,0.15)" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
                        {es ? '¿Listo para Ver la EAI en Acción?' : 'Ready to See the EAI in Action?'}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Descubre cómo la Inteligencia Amable de AnimiKind puede transformar la estrategia de salvaguarda de tu institución y prepararte para los estándares KCSIE 2026.'
                            : "Discover how AnimiKind's Kind Intelligence can transform your institution's safeguarding strategy and prepare you for KCSIE 2026 standards."}
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
                            to="/about/cpd-accreditation/"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all transform hover:-translate-y-1"
                        >
                            <BrandIcon name="Certificate" color="gold" size={18} weight="bold" />
                            {es ? 'Acreditación CPD' : 'CPD Accreditation'}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EmotionalAiPage;
