import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IconBadge, BrandIcon } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const PURPOSE_PDF = '/Legal/Purpose & Profit_signed.pdf';

/* ─── Animated counter hook ─────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, active = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start: number | null = null;
        const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, active]);
    return value;
}

/* ─── Intersection observer hook ────────────────────────────────── */
function useInView(threshold = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

/* ─── Donut mini chart ───────────────────────────────────────────── */
function Donut({ pct, color }: { pct: number; color: string }) {
    const r = 36, c = 2 * Math.PI * r;
    return (
        <svg width={90} height={90} viewBox="0 0 90 90" className="-rotate-90">
            <circle cx={45} cy={45} r={r} fill="none" stroke="#e5eaf0" strokeWidth={10} />
            <circle cx={45} cy={45} r={r} fill="none" stroke={color} strokeWidth={10}
                strokeDasharray={`${(pct / 100) * c} ${c}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 1.4s ease-out' }}
            />
        </svg>
    );
}

/* ─── Bar chart mini ─────────────────────────────────────────────── */
function MiniBar({ pct, color, label }: { pct: number; color: string; label: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-xs text-[#1d4c73]/60 w-20 shrink-0">{label}</span>
            <div className="flex-1 h-3 rounded-full bg-[#e5eaf0] overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: color }} />
            </div>
            <span className="text-xs font-bold text-[#1e2c29] w-8">{pct}%</span>
        </div>
    );
}

const SocialFocusingPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Nuestro Enfoque Social – AnImiKind' : 'Our Social Focusing – AnImiKind';
    }, [lang]);

    const { ref: statsRef, inView: statsVisible } = useInView();
    const identifications = useCountUp(1247, 2000, statsVisible);
    const silenceReduction = useCountUp(43, 1800, statsVisible);
    const wellbeingGain = useCountUp(67, 2000, statsVisible);

    const ripple = [
        { iconName: 'ShieldCheck' as const, brandColor: 'green' as const, role: es ? 'El Alumno' : 'The Pupil', desc: es ? 'Aprendizaje seguro y reducción de la ansiedad emocional.' : 'Safe learning environment and reduction in emotional anxiety.' },
        { iconName: 'House' as const, brandColor: 'navy' as const, role: es ? 'La Familia' : 'The Family', desc: es ? 'Tranquilidad y acceso a información accionable en tiempo real.' : 'Reassurance and access to actionable, real-time insights.' },
        { iconName: 'Graduation' as const, brandColor: 'gold' as const, role: es ? 'El Educador' : 'The Educator', desc: es ? 'Reducción del agotamiento profesional y foco en la enseñanza.' : 'Reduced staff burnout and renewed focus on quality teaching.' },
        { iconName: 'Buildings' as const, brandColor: 'navy' as const, role: es ? 'La Comunidad' : 'The Community', desc: es ? 'Salud social a largo plazo arraigada en comunidades más resilientes.' : 'Long-term societal health rooted in more resilient communities.' },
    ];

    const badges = [
        {
            iconName: 'Flag' as const, brandColor: 'navy' as const, accent: '#1d4c73',
            badge: es ? 'Cumplimiento Normativo' : 'Statutory Compliance',
            tags: ['KCSIE', 'Prevent', 'CEOP'],
            title: es ? 'Marcos Legales del Reino Unido' : 'UK Safeguarding Frameworks',
            body: es ? 'Nuestra EAI facilita y refuerza los marcos existentes de protección del Reino Unido, incluidos KCSIE, Prevent y CEOP, asegurando que cada escuela permanezca en plena conformidad.' : 'Our EAI facilitates and reinforces existing UK safeguarding frameworks including KCSIE, Prevent, and CEOP, ensuring every school remains in full statutory compliance.',
            showCpd: true,
        },
        {
            iconName: 'Lock' as const, brandColor: 'green' as const, accent: '#0dc383',
            badge: es ? 'Privacidad y GDPR' : 'Data Privacy & GDPR',
            tags: ['UK GDPR', 'ICO Registered', 'Privacy-First'],
            title: es ? 'Soberanía de Datos en el Reino Unido' : 'UK-Only Data Sovereignty',
            body: es ? 'Todos los datos se procesan y almacenan exclusivamente en el Reino Unido. Ningún dato de perfil de niño es monetizado jamás. Nuestra política ética de datos es absoluta e innegociable.' : 'All data is processed and stored exclusively in the UK. No child profile data is ever monetised. Our ethical data policy is absolute and non-negotiable.',
            showCpd: false,
        },
        {
            iconName: 'HandshakeSimple' as const, brandColor: 'gold' as const, accent: '#eec843',
            badge: es ? 'Alianzas Educativas' : 'Educational Partnership',
            tags: [es ? 'Ayuntamientos' : 'Local Councils', es ? 'Ed-Psych' : 'Educational Psychology', 'CPD'],
            title: es ? 'Colaboración con Instituciones' : 'Institutional Collaboration',
            body: es ? 'Trabajamos activamente con ayuntamientos locales y organismos de psicología educativa para garantizar que nuestra plataforma esté alineada con las realidades del aula.' : 'We actively collaborate with local councils and educational psychology bodies to ensure our platform is aligned with real-world classroom realities.',
            showCpd: false,
        },
    ];

    return (
        <div className="pt-16">

            {/* ══ SECTION 1 — HERO ══ */}
            <section className="relative w-full min-h-[460px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#1d4c73] to-[#1e2c29]" />

                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice">
                    {[[120, 80, 380, 180], [380, 180, 640, 100], [640, 100, 900, 220], [900, 220, 1080, 130], [380, 180, 420, 320], [640, 100, 660, 280], [900, 220, 860, 360], [120, 80, 200, 300], [200, 300, 420, 320], [420, 320, 660, 280], [660, 280, 860, 360], [860, 360, 1080, 130]].map(([x1, y1, x2, y2], i) => (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1.5" strokeDasharray="6 4" />
                    ))}
                    {[[120, 80], [380, 180], [640, 100], [900, 220], [1080, 130], [200, 300], [420, 320], [660, 280], [860, 360]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="5" fill="#0dc383" opacity="0.9" />
                    ))}
                </svg>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6">
                        {es ? 'Nuestro Enfoque Social' : 'Our Social Focusing'}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-4xl">
                        {es
                            ? <>Inteligencia Amable: Más Allá del Cumplimiento<br />hacia el <span className="text-[#0dc383]">Bienestar Comunitario Genuino</span></>
                            : <>Kind Intelligence: Beyond Compliance<br />towards <span className="text-[#0dc383]">Genuine Community Well-being</span></>}
                    </h1>
                    <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
                        {es
                            ? "Nuestro Enfoque Social no es una idea de último momento; es nuestro propósito fundacional. Operamos en la intersección de la innovación en IA y la responsabilidad social profunda, usando nuestra tecnología para abordar las vulnerabilidades emocionales sistémicas dentro del sistema educativo británico."
                            : "Our Social Focus isn't an afterthought; it is our foundational purpose. We operate at the intersection of AI innovation and profound social responsibility, using our technology to address systemic emotional vulnerabilities within the British education system."}
                    </p>
                </div>

                {/* Ani mascot */}
                <div className="absolute right-6 bottom-0 hidden lg:block pointer-events-none">
                    <img src={cloudinaryMedia.about.mascot} alt="Ani mascot" className="h-72 w-auto object-contain drop-shadow-2xl" style={{ animation: 'floatSocial 4s ease-in-out infinite' }} />
                </div>
            </section>

            <style>{`
        @keyframes floatSocial { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
      `}</style>

            {/* ══ SECTION 2 — RIPPLE EFFECT ══ */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Modelo de Impacto' : 'The Impact Model'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'El Efecto Ondulante de la Seguridad Emocional' : 'The Ripple Effect of Emotional Safety'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es ? 'La prevención proactiva en una escuela crea beneficios comunitarios que se extienden en círculos concéntricos.' : 'Proactive prevention in one school creates wider community benefits that ripple outward in concentric circles.'}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-stretch gap-0">
                        {ripple.map((level, i) => (
                            <React.Fragment key={i}>
                                <div
                                    className="group flex-1 relative flex flex-col items-center text-center p-8 bg-white rounded-none first:rounded-l-[2rem] last:rounded-r-[2rem] border border-[#e5eaf0] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
                                    style={{ borderLeft: i > 0 ? 'none' : undefined, animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="mb-5">
                                        <IconBadge name={level.iconName} color={level.brandColor} size="lg" />
                                    </div>
                                    <span className="text-xs font-extrabold tracking-widest uppercase mb-2 text-[#1d4c73]/50">Level {i + 1}</span>
                                    <h3 className="text-lg font-extrabold text-[#1e2c29] mb-3">{level.role}</h3>
                                    <p className="text-[#1d4c73]/75 text-sm leading-relaxed">{level.desc}</p>
                                </div>
                                {i < ripple.length - 1 && (
                                    <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0 z-10">
                                        <BrandIcon name="ArrowRight" color="green" size={20} weight="bold" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — UK STANDARDS ══ */}
            <section className="relative py-24 overflow-hidden bg-white">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${cloudinaryMedia.about.builtOnTrustBackground})`, opacity: 0.4 }}
                    aria-hidden="true"
                />
                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Confianza y Cumplimiento' : 'Commitment to British Standards'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Construido sobre la Confianza' : 'Built on Trust'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {badges.map((item, i) => (
                            <div
                                key={i}
                                className="group p-9 rounded-[2rem] border bg-[#f8fafc] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
                                style={{ borderColor: `${item.accent}33`, animationDelay: `${i * 120}ms` }}
                            >
                                <div className="mb-6">
                                    <IconBadge name={item.iconName} color={item.brandColor} size="xl" />
                                </div>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {item.tags.map((tag, ti) => (
                                        <span key={ti} className="px-2.5 py-0.5 rounded-full text-xs font-bold border" style={{ color: item.accent, background: `${item.accent}15`, borderColor: `${item.accent}40` }}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-extrabold mb-3" style={{ color: item.accent }}>{item.badge}</h3>
                                <h4 className="text-base font-bold text-[#1e2c29] mb-3">{item.title}</h4>
                                <p className="text-[#1d4c73]/75 text-sm leading-relaxed">{item.body}</p>
                                {item.showCpd && <img src={cloudinaryMedia.header.cpdLogo} alt="CPD Certified" className="h-10 w-auto mt-6 opacity-80" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — METRICS DASHBOARD ══ */}
            <section ref={statsRef} className="py-24 bg-[#0b1f3a] text-white relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0dc383]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1d4c73]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/30 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Métricas de Propósito' : 'Measuring Social Impact'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                            {es ? 'El Éxito va Más Allá del Beneficio' : 'Success Beyond Profit'}
                        </h2>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-semibold">
                            <BrandIcon name="Info" color="green" size={16} weight="duotone" />
                            {es ? 'Panel de demostración — datos anónimos y agregados. No se muestran datos individuales de ningún niño.' : 'Demonstration dashboard — anonymised aggregate data only. No individual child data is shown.'}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Metric A */}
                        <div className="p-9 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/8 transition-colors animate-fadeSlideUp" style={{ animationDelay: '0ms' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <IconBadge name="Bell" color="green" size="sm" bg="rgba(13,195,131,0.15)" />
                                <span className="text-[#0dc383] font-bold text-sm uppercase tracking-wider">{es ? 'Métrica A' : 'Metric A'}</span>
                            </div>
                            <div className="text-6xl font-extrabold text-white mb-2 tabular-nums">{identifications.toLocaleString()}</div>
                            <h3 className="text-lg font-bold text-white/90 mb-3">{es ? 'Identificaciones Tempranas' : 'Early Identifications'}</h3>
                            <p className="text-white/55 text-sm leading-relaxed">{es ? 'Posibles crisis emocionales señaladas proactivamente para intervención anticipada.' : 'Potential emotional crises flagged for proactive, early intervention.'}</p>
                            <div className="mt-6 flex items-end gap-1 h-10">
                                {[40, 55, 48, 62, 70, 66, 78, 85, 90, 95, 88, 100].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-sm bg-[#0dc383]/40" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>

                        {/* Metric B */}
                        <div className="p-9 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/8 transition-colors animate-fadeSlideUp" style={{ animationDelay: '120ms' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <IconBadge name="ChartBar" color="navy" size="sm" bg="rgba(29,76,115,0.3)" />
                                <span className="text-[#7eb8d9] font-bold text-sm uppercase tracking-wider">{es ? 'Métrica B' : 'Metric B'}</span>
                            </div>
                            <div className="text-6xl font-extrabold text-white mb-2 tabular-nums">{silenceReduction}%</div>
                            <h3 className="text-lg font-bold text-white/90 mb-3">{es ? 'Silencio Desmantelado' : 'Reported Silence Dismantled'}</h3>
                            <p className="text-white/55 text-sm leading-relaxed mb-6">{es ? 'Reducción de alumnos que no informarían a un adulto sobre acoso.' : 'Reduction in pupils who say they would not tell an adult about bullying.'}</p>
                            <div className="space-y-3">
                                <MiniBar pct={statsVisible ? 72 : 0} color="#7eb8d9" label={es ? 'Año 1' : 'Year 1'} />
                                <MiniBar pct={statsVisible ? 85 : 0} color="#4a90b8" label={es ? 'Año 2' : 'Year 2'} />
                                <MiniBar pct={statsVisible ? 91 : 0} color="#1d4c73" label={es ? 'Año 3' : 'Year 3'} />
                            </div>
                        </div>

                        {/* Metric C */}
                        <div className="p-9 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/8 transition-colors animate-fadeSlideUp" style={{ animationDelay: '240ms' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <IconBadge name="ChartDonut" color="gold" size="sm" bg="rgba(238,200,67,0.15)" />
                                <span className="text-[#eec843] font-bold text-sm uppercase tracking-wider">{es ? 'Métrica C' : 'Metric C'}</span>
                            </div>
                            <div className="text-6xl font-extrabold text-white mb-2 tabular-nums">{wellbeingGain}%</div>
                            <h3 className="text-lg font-bold text-white/90 mb-3">{es ? 'Mejora del Bienestar' : 'Improved Well-being Trends'}</h3>
                            <p className="text-white/55 text-sm leading-relaxed mb-6">{es ? 'Mejora en el clima emocional escolar basada en datos de estado de ánimo agregados y anónimos.' : 'Improvement in school-wide emotional climate based on aggregated, anonymised mood-check data.'}</p>
                            <div className="flex items-center gap-5">
                                <div className="relative w-[90px] h-[90px] shrink-0">
                                    <Donut pct={statsVisible ? wellbeingGain : 0} color="#eec843" />
                                    <span className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-white rotate-90">{wellbeingGain}%</span>
                                </div>
                                <div className="space-y-2 text-xs text-white/60">
                                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#eec843] inline-block" />{es ? 'Mejora' : 'Improved'}</div>
                                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-white/20 inline-block" />{es ? 'Línea base' : 'Baseline'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FOOTNOTE — MANIFEST COMMITMENT ══ */}
            <section className="py-16 bg-[#fdf8ef]">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="rounded-[2rem] border border-[#eec843]/40 bg-[#fffbf0] p-10 md:p-14 text-center shadow-xl animate-fadeSlideUp">
                        <div className="flex justify-center mb-6">
                            <IconBadge name="Leaf" color="gold" size="xl" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2c29] mb-5 tracking-tight">
                            {es ? 'Nuestro Compromiso Manifiesto' : 'Our Manifest Commitment'}
                        </h2>
                        <p className="text-[#1d4c73]/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                            {es
                                ? 'AnimiKind se compromete a destinar un porcentaje de nuestros ingresos directamente a apoyar iniciativas preventivas de salud mental y formación en escuelas británicas con menos recursos. El porcentaje exacto está pendiente de aprobación final.'
                                : 'AnimiKind commits a percentage of our proceeds directly back into supporting preventative mental health initiatives and training in underserved British schools. The exact percentage is a variable pending final sign-off.'}
                        </p>
                        <div className="flex justify-center">
                            <a
                                href={PURPOSE_PDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0dc383] hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
                            >
                                <BrandIcon name="FilePdf" color="green" size={18} weight="duotone" />
                                {es ? 'Conoce Nuestro Modelo Propósito & Beneficio (PDF)' : 'Learn More: Purpose & Profit Approach (PDF)'}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <style>{`
        @keyframes floatSocial { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
      `}</style>
        </div>
    );
};

export default SocialFocusingPage;
