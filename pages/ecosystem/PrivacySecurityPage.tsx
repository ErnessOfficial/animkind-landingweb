import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const PrivacySecurityPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es
            ? 'Seguridad Digital: Privacidad y Seguridad – AnImiKind'
            : 'Digital Safety: Privacy & Security – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[460px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#1d4c73]" />

                {/* Animated floating nodes */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice">
                    {[[120, 90], [340, 200], [600, 80], [820, 230], [1050, 110], [200, 340], [700, 370], [980, 310]].map(([cx, cy], i) => (
                        <circle key={`n${i}`} cx={cx} cy={cy} r="5" fill="#0dc383" />
                    ))}
                    {[[120, 90, 340, 200], [340, 200, 600, 80], [600, 80, 820, 230], [820, 230, 1050, 110], [120, 90, 600, 80], [340, 200, 820, 230], [200, 340, 700, 370], [700, 370, 980, 310], [600, 80, 700, 370]].map(([x1, y1, x2, y2], i) => (
                        <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="5 5" />
                    ))}
                </svg>

                {/* Shield watermark */}
                <div className="absolute right-0 top-0 h-full w-[460px] flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="ShieldCheck" color="green" size={460} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6">
                        <BrandIcon name="ShieldCheck" color="green" size={13} weight="bold" />
                        {es ? 'Red de Seguridad Emocional Digital' : 'Digital Emotional Safety Net'}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                        {es
                            ? <><span className="text-[#0dc383]">Seguridad Digital</span><br />Privacidad y Protección</>
                            : <><span className="text-[#0dc383]">Digital Safety</span><br />Privacy & Protection</>}
                    </h1>
                    <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                        {es
                            ? 'No solo monitorizamos a los alumnos — los empoderamos. AnimiKind integra detección IA en tiempo real, comunicación automatizada con tutores y cumplimiento legal riguroso en una red de seguridad digital de 360°.'
                            : "We don't just monitor students — we empower them. AnimiKind integrates real-time AI detection, automated caregiver communication, and rigorous legal compliance into a 360° digital safety net."}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {(es
                            ? ['Safety by Design', 'GDPR · UK GDPR', 'OSA Compliance', 'KCSIE 2026', 'Cifrado de Acceso Cero']
                            : ['Safety by Design', 'GDPR · UK GDPR', 'OSA Compliance', 'KCSIE 2026', 'Zero-Access Encryption']
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
                @keyframes floatNode { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ══ SECTION 1 — CONTEXT: PARADIGM SHIFT ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-[#e5eaf0]">

                        {/* Left — dark panel */}
                        <div className="bg-[#1d4c73] p-12 lg:p-16 flex flex-col justify-center gap-7">
                            <div className="flex items-center gap-4">
                                <IconBadge name="ShieldCheck" color="green" size="lg" bg="rgba(13,195,131,0.15)" />
                                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                    {es ? 'El Cambio de Paradigma' : 'The Paradigm Shift'}
                                </h2>
                            </div>
                            <p className="text-white/80 text-lg leading-relaxed">
                                {es
                                    ? 'La seguridad digital dentro del ecosistema AnimiKind está diseñada alrededor del concepto de «Red de Seguridad Emocional Digital». Cambia fundamentalmente el modelo de gestión reactiva de crisis — donde las herramientas actúan como simples archivadores de daños ocurridos — a un modelo de prevención proactivo basado en datos.'
                                    : "AnimiKind's digital safety is architected around the concept of a \"Digital Emotional Safety Net.\" It fundamentally shifts the paradigm from reactive crisis management — where tools merely act as filing cabinets for harm already done — to proactive, data-driven prevention."}
                            </p>
                            <div className="rounded-2xl bg-[#0dc383]/15 border border-[#0dc383]/30 p-5">
                                <p className="text-white/90 text-sm leading-relaxed italic font-medium">
                                    {es
                                        ? '"AnimiKind no solo monitoriza a los alumnos: los empodera. Integra detección IA en tiempo real, comunicación automatizada con cuidadores y cumplimiento legal riguroso, creando una red de seguridad de 360° que previene la escalada del daño."'
                                        : '"AnimiKind does not just monitor students; it empowers them. By integrating real-time AI detection, automated caregiver communication, and rigorous legal compliance, it creates a 360° safety net that prevents harm from escalating."'}
                                </p>
                            </div>
                        </div>

                        {/* Right — stat cards */}
                        <div className="bg-[#f4f7fb] p-12 lg:p-16 flex flex-col justify-center gap-5">
                            <h3 className="text-xl font-bold text-[#1e2c29] mb-1">
                                {es ? 'Por qué Importa' : 'Why It Matters'}
                            </h3>
                            {[
                                { val: '20%', label: es ? 'del abuso online nunca se denuncia verbalmente' : 'of online abuse never verbally reported', icon: 'EyeSlash' as const, color: 'navy' as const },
                                { val: '25%+', label: es ? 'de alumnos RU reportan acoso (2024–25)' : 'of UK pupils report being bullied (2024–25)', icon: 'Warning' as const, color: 'green' as const },
                                { val: '100%', label: es ? 'alineación con KCSIE 2026 y OSA' : 'alignment with KCSIE 2026 & OSA', icon: 'ShieldCheck' as const, color: 'navy' as const },
                                { val: '40%', label: es ? 'capacidad del personal DSL recuperada' : 'DSL staff capacity reclaimed', icon: 'TrendUp' as const, color: 'green' as const },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-[#e5eaf0] shadow-sm hover:shadow-md transition-shadow animate-fadeSlideUp" style={{ animationDelay: `${i * 70}ms` }}>
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

            {/* ══ SECTION 2 — SAFETY BY DESIGN ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Cumplimiento Estatutario' : 'Statutory Compliance'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? '"Safety by Design" — Nativo en el Código' : '"Safety by Design" — Native to the Code'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'La seguridad digital en AnimiKind es intrínseca a su arquitectura, asegurando que las escuelas cumplan automáticamente con los marcos reguladores del Reino Unido.'
                                : 'Digital safety in AnimiKind is native to its architecture, ensuring schools automatically align with stringent UK regulatory frameworks.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'Scales' as const, color: 'green' as const,
                                accentHex: '#0dc383',
                                title: es ? 'Ley de Seguridad Online (OSA)' : 'Online Safety Act (OSA)',
                                subtitle: es ? 'Deber de Cuidado + Retirada y Notificación' : 'Duty of Care + Takedown & Reporting',
                                body: es
                                    ? 'El ecosistema cumple el deber de cuidado estatutario mitigando activamente los riesgos. La función de «Reporte con un Clic» (Comunikind) cumple el mandato de Retirada y Notificación de forma inmediata y sin fricción.'
                                    : 'The ecosystem fulfils the statutory Duty of Care by actively mitigating risks. The "One-Click Reporting" function (Comunikind) fulfils the Takedown & Reporting mandate instantly and without friction.',
                                tags: ['OSA 2023', es ? 'Un Clic' : 'One-Click', es ? 'Deber de Cuidado' : 'Duty of Care'],
                            },
                            {
                                icon: 'Certificate' as const, color: 'navy' as const,
                                accentHex: '#1d4c73',
                                title: es ? 'KCSIE y Preparación para Ofsted' : 'KCSIE & Ofsted Readiness',
                                subtitle: es ? 'Evidencia Digital Lista para Inspección' : 'Inspection-Ready Digital Evidence',
                                body: es
                                    ? 'Los motores de detección de riesgos y las herramientas de gestión de casos cronológicos están mapeados directamente a los requisitos de KCSIE, proporcionando las pistas de auditoría digital exactas que los inspectores de Ofsted necesitan para evaluar la provisión de salvaguarda.'
                                    : "The platform's risk-detection engines and chronological case management tools are mapped directly to KCSIE requirements, providing the exact digital audit trails Ofsted inspectors require to evaluate a school's safeguarding provision.",
                                tags: ['KCSIE 2026', 'Ofsted', es ? 'Auditoría Digital' : 'Digital Audit'],
                            },
                            {
                                icon: 'Lock' as const, color: 'green' as const,
                                accentHex: '#0dc383',
                                title: es ? 'Protección de Datos Estricta' : 'Strict Data Protection',
                                subtitle: es ? 'UK GDPR + Código de los Niños' : 'UK GDPR + The Children\'s Code',
                                body: es
                                    ? 'AnimiKind trata los datos de los alumnos como un tesoro sagrado. Emplea Cifrado de Acceso Cero (solo los «Adultos de Confianza» autorizados acceden a los expedientes) y aplica Minimización de Datos estricta conforme al Código de Diseño Apropiado para la Edad.'
                                    : 'AnimiKind treats student data as a sacred trust. It employs Zero-Access Encryption (only authorised "Trusted Adults" can access case files) and enforces strict Data Minimisation in compliance with the Age Appropriate Design Code.',
                                tags: ['UK GDPR', es ? 'Cifrado Cero' : 'Zero-Access', es ? 'Código de los Niños' : "Children's Code"],
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="group flex flex-col bg-white rounded-[1.75rem] border-2 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
                                style={{ borderColor: `${card.accentHex}44`, animationDelay: `${i * 100}ms` }}
                            >
                                <div className="flex items-center justify-center px-6 py-9" style={{ background: '#1d4c73' }}>
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                                        style={card.color === 'navy'
                                            ? { background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }
                                            : { background: `${card.accentHex}22`, border: `2px solid ${card.accentHex}55` }}
                                    >
                                        <BrandIcon name={card.icon} color={card.color === 'navy' ? 'white' : card.color} size={38} weight="duotone" />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 px-7 py-6">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase mb-2" style={{ color: card.accentHex }}>{card.subtitle}</span>
                                    <h3 className="text-lg font-extrabold text-[#1e2c29] mb-3 leading-snug">{card.title}</h3>
                                    <p className="text-[#1d4c73]/70 text-sm leading-relaxed flex-1 mb-5">{card.body}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {card.tags.map((tag, j) => (
                                            <span key={j} className="px-2.5 py-1 rounded-full text-[11px] font-bold border" style={{ color: card.accentHex, background: `${card.accentHex}12`, borderColor: `${card.accentHex}40` }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(to right, ${card.accentHex}, ${card.accentHex}44)` }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Image below Safety by Design ── */}
            <section className="py-10 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.ecosystem.privacyBelowSafetyByDesign}
                            alt="Safety by Design visual"
                            className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0]"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — PROACTIVE DETECTION VIA EAI ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text */}
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                                {es ? 'Detección Proactiva' : 'Proactive Detection'}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                                {es ? 'IA Emocional: "Robótica Empática"' : 'Emotional AI: "Empathetic Robotics"'}
                            </h2>
                            <p className="text-[#1d4c73]/75 leading-relaxed text-lg">
                                {es
                                    ? 'Las herramientas de seguridad digital tradicionales dependen de la vigilancia invasiva de palabras clave o requieren que el alumno inicie una queja formal. AnimiKind lo reemplaza con un compañero empático que detecta el sufrimiento antes de que lo haga el alumno.'
                                    : 'Traditional digital safety tools rely on invasive keyword surveillance or require the student to file a formal complaint. AnimiKind replaces this with an empathetic companion that detects distress before the student even articulates it.'}
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: 'Brain' as const, color: 'green' as const,
                                        title: es ? 'Detectando la «Crisis Silenciosa»' : 'Detecting the "Silent Crisis"',
                                        body: es
                                            ? '«Ani» analiza el sentimiento del alumno en tiempo real. Detecta señales de angustia de bajo nivel y riesgos asociados con el ciberacoso o daño emocional, incluso si el alumno intenta minimizar o normalizar su experiencia.'
                                            : '"Ani" analyses the pupil\'s sentiment in real-time. It detects low-level distress cues and risk signals associated with cyberbullying or emotional harm, even if the student attempts to minimise or normalise their experience.',
                                    },
                                    {
                                        icon: 'Heartbeat' as const, color: 'gold' as const,
                                        title: es ? 'Planes de Acción Inmediatos' : 'Immediate Action Plans',
                                        body: es
                                            ? 'Al detectar un riesgo, la IA genera un «Plan de Acción» personalizado: estrategias de regulación emocional si no hay riesgo severo, o orientación para una escalada segura y empática si el riesgo es significativo.'
                                            : 'Upon detecting a risk, the AI generates a personalised "Action Plan" — emotional regulation strategies if no severe risk, or guidance for a safe, empathetic management escalation if significant risk is present.',
                                    },
                                ].map((pt, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0] hover:shadow-md transition-shadow animate-fadeSlideUp" style={{ animationDelay: `${i * 100}ms` }}>
                                        <div className="flex-shrink-0">
                                            <IconBadge name={pt.icon} color={pt.color} size="sm" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#1e2c29] text-sm mb-1">{pt.title}</p>
                                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed">{pt.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual: floating shield with EAI nodes */}
                        <div className="relative flex items-center justify-center min-h-[360px]">
                            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#0dc383]/20 to-[#1d4c73]/10 border-2 border-[#0dc383]/30 flex items-center justify-center shadow-2xl">
                                <BrandIcon name="Brain" color="green" size={96} weight="duotone" />
                            </div>
                            {/* Orbiting labels */}
                            {[
                                { label: es ? 'Sentimiento' : 'Sentiment', top: '-10%', left: '50%', translateX: '-50%', delay: '0s' },
                                { label: es ? 'Riesgo' : 'Risk', top: '40%', left: '100%', translateX: '5%', delay: '0.4s' },
                                { label: es ? 'Intervención' : 'Intervention', top: '90%', left: '50%', translateX: '-50%', delay: '0.8s' },
                                { label: es ? 'Familia' : 'Family', top: '40%', left: '-5%', translateX: '-95%', delay: '1.2s' },
                            ].map((node, i) => (
                                <div
                                    key={i}
                                    className="absolute px-3 py-1.5 rounded-full bg-[#1d4c73] text-white text-xs font-bold shadow-lg animate-fadeSlideUp"
                                    style={{ top: node.top, left: node.left, transform: `translateX(${node.translateX})`, animationDelay: node.delay }}
                                >
                                    {node.label}
                                </div>
                            ))}
                            {/* Connector dots */}
                            {[0, 90, 180, 270].map((deg, i) => (
                                <div
                                    key={i}
                                    className="absolute w-3 h-3 rounded-full bg-[#0dc383] shadow-lg"
                                    style={{
                                        top: `calc(50% + ${Math.sin(deg * Math.PI / 180) * 110}px)`,
                                        left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 110}px)`,
                                        transform: 'translate(-50%, -50%)',
                                        animation: `floatNode ${2 + i * 0.3}s ease-in-out infinite`,
                                        animationDelay: `${i * 0.4}s`,
                                    }}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — TRI-APP ARCHITECTURE ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Arquitectura Tri-App Unificada' : 'Unified Tri-App Architecture'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Sin Silos. Sin Grietas. 360° de Protección.' : 'No Silos. No Gaps. 360° of Protection.'}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                num: '01', icon: 'DeviceMobile' as const, color: 'green' as const,
                                accentHex: '#0dc383', tileBg: 'rgba(13,195,131,0.18)', tileBorder: 'rgba(13,195,131,0.4)',
                                label: es ? 'El Guardián Personal' : 'The Personal Guardian',
                                title: 'AnimiKind App',
                                body: es
                                    ? 'Proporciona un espacio digital seguro y no punitivo para alumnos de 8 a 18 años donde registrar sus sentimientos con «Ani». El diario emocional y el chat son el punto de origen de toda la cadena de detección proactiva.'
                                    : 'Provides a secure, non-judgmental digital space for pupils aged 8–18 to log their feelings with "Ani." The emotional diary and chat are the origin point of the entire proactive detection chain.',
                                tags: es ? ['Alumnos 8–18', 'Espacio Seguro', 'Diario Emocional'] : ['Students 8–18', 'Safe Space', 'Emotional Diary'],
                            },
                            {
                                num: '02', icon: 'Network' as const, color: 'gold' as const,
                                accentHex: '#b07d1f', tileBg: 'rgba(238,200,67,0.18)', tileBorder: 'rgba(238,200,67,0.4)',
                                label: es ? 'Triangulación Automatizada' : 'Automated Triangulation',
                                title: 'Comunikind',
                                body: es
                                    ? 'Si se detecta un riesgo, este módulo activa el «Reporte con un Clic». La IA redacta y envía automáticamente un email contextualizado con la evaluación de riesgo y el resumen de incidentes al «Adulto de Confianza» registrado y a la escuela.'
                                    : 'If a risk is detected, this module enables "One-Click Reporting." The AI automatically drafts and sends a contextualised email with the risk assessment and incident summary to the registered "Trusted Adult" and the school.',
                                tags: es ? ['1-Clic', 'Email Auto-redactado', 'Triángulo Alumno-Familia-Escuela'] : ['One-Click', 'Auto-Drafted Email', 'Student-Family-School Triangle'],
                            },
                            {
                                num: '03', icon: 'PresentationChart' as const, color: 'white' as const,
                                accentHex: '#1d4c73', tileBg: 'rgba(255,255,255,0.12)', tileBorder: 'rgba(255,255,255,0.25)',
                                label: es ? 'La Torre de Control' : 'The Control Tower',
                                title: es ? 'Panel Escolar' : 'School Panel',
                                body: es
                                    ? 'Un panel SaaS B2B para los DSLs que traduce las alertas de la IA en inteligencia accionable: evaluaciones de riesgo objetivas, cronología de casos y análisis anónimos del clima emocional general de la escuela.'
                                    : 'A B2B SaaS dashboard for DSLs that translates AI alerts into actionable intelligence: objective risk assessments, case tracking, and anonymised analytics on the school\'s overall emotional climate.',
                                tags: ['B2B SaaS', 'DSL Dashboard', es ? 'Clima Escolar' : 'School Climate'],
                            },
                            {
                                num: '04', icon: 'Graduation' as const, color: 'gold' as const,
                                accentHex: '#b07d1f', tileBg: 'rgba(238,200,67,0.18)', tileBorder: 'rgba(238,200,67,0.4)',
                                label: es ? 'El Simulador de Aprendizaje IA' : 'The AI Learning Simulator',
                                title: 'AnimiKdemi',
                                body: es
                                    ? 'Pilar educativo proactivo que ofrece formación acreditada por CPD para el personal (Proveedor Aprobado #788968) y role-play simulado para alumnos, construyendo alfabetización en seguridad digital y resiliencia emocional en entornos virtuales realistas.'
                                    : 'A proactive educational pillar offering CPD-accredited training for staff (Approved Provider #788968) and simulated role-play for students, building digital safety literacy and emotional resilience in realistic virtual environments.',
                                tags: ['CPD #788968', es ? 'Simulación IA' : 'AI Simulation', es ? 'Personal + Alumnos' : 'Staff + Students'],
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="grid lg:grid-cols-[auto_1fr] gap-0 rounded-[2rem] overflow-hidden border-2 bg-white shadow-lg hover:shadow-2xl transition-shadow animate-fadeSlideUp"
                                style={{ borderColor: `${card.accentHex}33`, animationDelay: `${i * 80}ms` }}
                            >
                                <div className="flex flex-col items-center justify-center px-8 py-10 gap-3" style={{ background: '#1d4c73', minWidth: '160px' }}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: card.tileBg, border: `2px solid ${card.tileBorder}` }}>
                                        <BrandIcon name={card.icon} color={card.color} size={30} weight="duotone" />
                                    </div>
                                    <span className="font-extrabold text-2xl" style={{ color: card.accentHex === '#1d4c73' ? '#ffffff' : card.accentHex === '#b07d1f' ? '#eec843' : '#0dc383' }}>{card.num}</span>
                                </div>
                                <div className="p-7 lg:p-9">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase mb-1 block" style={{ color: card.accentHex }}>{card.label}</span>
                                    <h3 className="text-xl font-extrabold text-[#1e2c29] mb-3">{card.title}</h3>
                                    <p className="text-[#1d4c73]/70 text-sm leading-relaxed mb-4">{card.body}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {card.tags.map((tag, j) => (
                                            <span key={j} className="px-2.5 py-1 rounded-full text-[11px] font-bold border" style={{ color: card.accentHex, background: `${card.accentHex}12`, borderColor: `${card.accentHex}40` }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 5 — ETHICAL AI ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'IA Ética y el Factor Humano' : 'Ethical AI & The Human Factor'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? '"El Factor Humano es Irremplazable"' : '"The Human Factor is Irreplaceable"'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Un principio central del enfoque de AnimiKind para la seguridad digital es que la IA debe empoderar a los profesionales humanos, nunca reemplazarlos.'
                                : 'A core tenet of AnimiKind\'s approach to digital safety is that AI must empower human professionals — never replace them.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'UsersThree' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Aumentación de la Inteligencia' : 'Intelligence Augmentation',
                                body: es
                                    ? 'La IA está estrictamente programada para no tomar decisiones clínicas o disciplinarias. Su función es dotar a los profesionales y familias de mejores datos para que puedan intervenir eficazmente.'
                                    : 'The AI is strictly programmed not to make clinical or disciplinary decisions. Its role is to empower human professionals and families with better data so they can intervene effectively.',
                            },
                            {
                                icon: 'Scales' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Algoritmos No Discriminatorios' : 'Non-Discriminatory Algorithms',
                                body: es
                                    ? 'Para garantizar que la seguridad digital sea equitativa, los motores de IA son auditados continuamente para evitar sesgos de género, etnia o acento. La protección es para todos, sin excepción.'
                                    : 'To ensure digital safety is equitable, the AI engines are continuously audited to remain free from bias — such as gender, ethnicity, or accent disparities. Protection is for everyone.',
                            },
                            {
                                icon: 'Eye' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Transparencia Total' : 'Full Transparency',
                                body: es
                                    ? 'El ecosistema rechaza la tecnología de «Caja Negra». La forma en que los algoritmos evalúan los riesgos está documentada y es explicable a todas las partes interesadas: familias, escuelas y reguladores.'
                                    : 'The ecosystem rejects "Black Box" technology. The way algorithms assess risks is documented and explicable to all stakeholders — families, schools, and regulators alike.',
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-[1.75rem] bg-[#f4f7fb] border-2 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
                                style={{ borderColor: `${card.accentHex}33`, animationDelay: `${i * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <IconBadge name={card.icon} color={card.color} size="md" />
                                    <h3 className="text-lg font-extrabold text-[#1e2c29] leading-snug">{card.title}</h3>
                                </div>
                                <p className="text-[#1d4c73]/70 text-sm leading-relaxed">{card.body}</p>
                                <div className="mt-5 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: card.accentHex }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Image below Human Factor cards ── */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.ecosystem.privacyBelowHumanFactor}
                            alt="Human factor is irreplaceable visual"
                            className="w-full h-auto rounded-[2rem] shadow-2xl border border-[#e5eaf0]"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 6 — CTA ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">

                        {/* Top dark band */}
                        <div className="bg-gradient-to-br from-[#061529] via-[#0f2d50] to-[#1d4c73] px-10 pt-14 pb-20 text-center relative overflow-hidden">
                            {/* Background network dots */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 900 280" preserveAspectRatio="xMidYMid slice">
                                {[[80, 60], [220, 140], [400, 50], [600, 130], [780, 70], [160, 220], [480, 200], [720, 240]].map(([cx, cy], i) => (
                                    <circle key={i} cx={cx} cy={cy} r="4" fill="#0dc383" />
                                ))}
                                {[[80, 60, 220, 140], [220, 140, 400, 50], [400, 50, 600, 130], [600, 130, 780, 70], [80, 60, 400, 50], [220, 140, 600, 130], [160, 220, 480, 200], [480, 200, 720, 240]].map(([x1, y1, x2, y2], i) => (
                                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="4 6" />
                                ))}
                            </svg>

                            {/* Shield icon */}
                            <div className="flex justify-center mb-5 relative z-10">
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name="ShieldCheck" color="green" size={42} weight="duotone" />
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 relative z-10">
                                {es ? '¿Listo para una Protección Real de 360°?' : 'Ready for Real 360° Protection?'}
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto relative z-10">
                                {es
                                    ? 'Descubre cómo el ecosistema de seguridad digital de AnimiKind puede proteger a tus alumnos mientras cumple con todos los marcos reguladores del Reino Unido.'
                                    : "Discover how the AnimiKind digital safety ecosystem can protect your students while fulfilling all UK regulatory frameworks."}
                            </p>
                        </div>

                        {/* Bottom white band — buttons + compliance strips */}
                        <div className="bg-white px-10 pt-10 pb-12 flex flex-col items-center gap-8">
                            {/* Action buttons */}
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
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all transform hover:-translate-y-1 shadow-md"
                                >
                                    <BrandIcon name="Network" color="green" size={18} weight="bold" />
                                    {es ? 'Ver Protección Unificada' : 'View Unified Safeguarding'}
                                </Link>
                            </div>

                            {/* Compliance badges row */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {['UK GDPR', 'OSA 2023', 'KCSIE 2026', "Children's Code", 'CPD #788968', 'Ofsted Ready'].map((badge, i) => (
                                    <span key={i} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f4f7fb] border border-[#e5eaf0] text-[#1d4c73] text-xs font-bold shadow-sm">
                                        <BrandIcon name="CheckCircle" color="green" size={12} weight="fill" />
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <p className="text-[#1d4c73]/40 text-xs text-center">
                                {es ? 'AnimiKind — Red de Seguridad Emocional Digital · 360° · Diseñado para el sector educativo del RU' : 'AnimiKind — Digital Emotional Safety Net · 360° · Designed for the UK Education Sector'}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default PrivacySecurityPage;
