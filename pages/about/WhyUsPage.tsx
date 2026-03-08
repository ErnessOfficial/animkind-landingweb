import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon } from '../../components/BrandIcon';
import type { IconName } from '../../components/BrandIcon';
import type { BrandColor } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

/* ────────── PillarCard (module-level component) ────────── */
interface PillarData {
    num: string;
    iconName: IconName;
    brandColor: BrandColor;
    accentHex: string;
    title: string;
    body: React.ReactNode;
    tags: string[];
}

const PillarCard: React.FC<{ pillar: PillarData }> = ({ pillar }) => (
    <div
        className="group flex flex-col bg-white rounded-[1.5rem] border-2 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full"
        style={{ borderColor: `${pillar.accentHex}55` }}
    >
        {/* Dark icon header */}
        <div
            className="flex items-center justify-center px-6 py-10"
            style={{ background: '#1d4c73' }}
        >
            <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
                style={pillar.brandColor === 'navy'
                    ? { background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }
                    : { background: `${pillar.accentHex}22`, border: `2px solid ${pillar.accentHex}55` }}
            >
                <BrandIcon
                    name={pillar.iconName}
                    color={pillar.brandColor === 'navy' ? 'white' : pillar.brandColor}
                    size={42} weight="duotone"
                />
            </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 px-7 py-6">
            <span
                className="text-[11px] font-extrabold tracking-widest uppercase mb-2"
                style={{ color: pillar.accentHex }}
            >
                {pillar.num}
            </span>

            <h3 className="text-lg font-extrabold text-[#1e2c29] mb-3 leading-snug">
                {pillar.title}
            </h3>

            <p className="text-[#1d4c73]/75 text-sm leading-relaxed flex-1 mb-5">
                {pillar.body}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {pillar.tags.map((tag, ti) => (
                    <span
                        key={ti}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold border"
                        style={{ color: pillar.accentHex, background: `${pillar.accentHex}12`, borderColor: `${pillar.accentHex}40` }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Hover accent bar */}
        <div
            className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            style={{ background: `linear-gradient(to right, ${pillar.accentHex}, ${pillar.accentHex}44)` }}
        />
    </div>
);

const WhyUsPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Por Qué Nosotros – AnImiKind' : 'Why Us – AnImiKind';
    }, [lang]);

    /* ── 5 Pillars data ── */
    const pillars = [
        {
            num: '01',
            iconName: 'Brain' as const,
            brandColor: 'green' as const,
            accentHex: '#0dc383',
            title: es ? 'Inteligencia Artificial Emocional Proactiva' : 'Proactive Emotional Artificial Intelligence (EAI)',
            body: es
                ? <>AnimiKind no es un sistema de informes de incidentes pasivos. Nuestra <strong>Inteligencia Artificial Emocional (EAI) Proactiva</strong> realiza un <strong>análisis de sentimientos en tiempo real</strong> de las interacciones digitales de los alumnos dentro del entorno educativo seguro de la plataforma, identificando los indicadores previos a la crisis <em>antes</em> de que ocurra el daño. Mientras que los competidores como Tootoot o Smoothwall ofrecen principalmente botones de denuncia o filtros de contenido, AnimiKind <strong>tiende un puente para la mayoría silenciosa</strong> que nunca denuncia nada.</>
                : <>AnimiKind is not a passive incident-reporting system. Our <strong>Proactive Emotional Artificial Intelligence (EAI)</strong> performs <strong>real-time sentiment analysis</strong> of pupils' digital interactions within the platform's secure educational environment, identifying pre-crisis indicators <em>before</em> harm occurs. Whilst competitors such as Tootoot or Smoothwall primarily offer report buttons or content filters, AnimiKind <strong>bridges the gap for the silent majority</strong> who never report anything.</>,
            tags: es
                ? ['Análisis de sentimientos', 'Pre-crisis', 'Intervención temprana']
                : ['Sentiment Analysis', 'Pre-crisis Detection', 'Early Intervention'],
        },
        {
            num: '02',
            iconName: 'Network' as const,
            brandColor: 'navy' as const,
            accentHex: '#1d4c73',
            title: es ? 'Un Ecosistema Unificado de 360 Grados' : 'A Unified, 360-Degree Ecosystem',
            body: es
                ? <>Los competidores venden herramientas aisladas. AnimiKind ofrece un <strong>Ecosistema de 360 Grados</strong> integrado y propietario, compuesto por tres pilares interconectados: la <em>Animikind App</em> (para alumnos), el <em>Animikind Panel</em> (para el personal) y el <em>Animikind Akademi</em>. Nuestra <strong>«Integración Tri-App Backend» propietaria</strong> garantiza un flujo de datos sin interrupciones y una visión holística del bienestar. Animikind Akademi ofrece <strong>formación acreditada por CPD (Proveedor Aprobado #788968)</strong>, que convierte al personal escolar en custodios del bienestar con competencia digital.</>
                : <>Competitors sell isolated tools. AnimiKind delivers an integrated, proprietary <strong>360-Degree Ecosystem</strong> composed of three interconnected pillars: the <em>Animikind App</em> (for pupils), the <em>Animikind Panel</em> (for staff), and <em>Animikind Akademi</em>. Our proprietary <strong>"Tri-App Backend Integration"</strong> ensures seamless data flow and a holistic view of well-being. Animikind Akademi provides <strong>CPD-accredited training (Approved Provider #788968)</strong>, converting school staff into digitally proficient well-being custodians.</>,
            tags: es
                ? ['App + Panel + Akademi', 'Backend unificado', 'CPD #788968']
                : ['App + Panel + Akademi', 'Unified Backend', 'CPD #788968'],
        },
        {
            num: '03',
            iconName: 'TrendUp' as const,
            brandColor: 'gold' as const,
            accentHex: '#eec843',
            title: es ? 'Eficiencia Operativa y ROI Comercial Incomparables' : 'Unrivalled Operational Efficiency and Commercial ROI',
            body: es
                ? <>AnimiKind transforma directamente el coste operativo de la salvaguarda. Nuestra EAI <strong>recupera hasta el 40% de la capacidad del personal</strong> al automatizar la documentación, el seguimiento de incidentes y la generación de informes estatutarios, <strong>ahorrando a los DSL hasta 10 horas a la semana</strong>. En la práctica, los costes de eficiencia derivados de nuestra plataforma en un solo semestre son suficientes para <strong>cubrir el coste de la licencia anual de AnimiKind</strong>, lo que convierte nuestra solución en una inversión que <em>paga sus propios costes</em>.</>
                : <>AnimiKind directly transforms the operational cost of safeguarding. Our EAI <strong>reclaims up to 40 per cent of staff capacity</strong> by automating documentation, incident tracking, and statutory reporting generation, <strong>saving DSLs up to 10 hours per week</strong>. In practice, the efficiency savings derived from our platform in a single term are sufficient to <strong>cover the cost of the annual AnimiKind licence</strong>, making our solution an investment that <em>pays for its own cost</em>.</>,
            tags: es
                ? ['40% capacidad recuperada', 'DSL ahorra 10h/semana', 'ROI comprobado']
                : ['40% Capacity Reclaimed', 'DSL Saves 10h/Week', 'Proven ROI'],
        },
        {
            num: '04',
            iconName: 'Certificate' as const,
            brandColor: 'navy' as const,
            accentHex: '#1d4c73',
            title: es ? 'Excelencia Regulatoria y Cumplimiento Normativo' : 'Regulatory Excellence and Statutory Compliance',
            body: es
                ? <>En un entorno regulatorio cada vez más exigente, AnimiKind ofrece <strong>Excelencia Regulatoria y Cumplimiento Normativo</strong>. Nuestra arquitectura está construida sobre los principios de <strong>Privacidad por Diseño</strong> y <strong>Cifrado de Acceso Cero</strong>, garantizando el pleno cumplimiento del <strong>UK GDPR</strong> y los estándares <strong>KCSIE 2026</strong>, la <strong>Ley de Seguridad Online (OSA)</strong> y los marcos Prevent y CEOP. Las escuelas que integran AnimiKind tienen una ventaja demostrativa para que Ofsted <strong>valore su disposición sobre desarrollo personal como «Sobresaliente»</strong>.</>
                : <>In an increasingly demanding regulatory environment, AnimiKind provides <strong>Regulatory Excellence and Statutory Compliance</strong>. Our architecture is built on the principles of <strong>Privacy by Design</strong> and <strong>Zero-Access Encryption</strong>, ensuring full compliance with <strong>UK GDPR</strong>, <strong>KCSIE 2026 standards</strong>, the <strong>Online Safety Act (OSA)</strong>, and Prevent and CEOP frameworks. Schools integrating AnimiKind gain a demonstrable advantage for Ofsted to <strong>rate a school's personal development provision as 'Outstanding'</strong>.</>,
            tags: es
                ? ['UK GDPR', 'KCSIE 2026', 'Ley de Seguridad Online', 'CEOP']
                : ['UK GDPR', 'KCSIE 2026', 'Online Safety Act', 'CEOP'],
        },
        {
            num: '05',
            iconName: 'Heart' as const,
            brandColor: 'green' as const,
            accentHex: '#0dc383',
            title: es ? 'Tecnología al Servicio de la Humanidad' : 'Technology in Service of Humanity',
            body: es
                ? <>AnimiKind rechaza la tecnología como sustituto y la abraza como habilitador. Nuestra filosofía fundamental de <strong>«Tecnología al Servicio de la Humanidad»</strong> está integrada en cada decisión de diseño. Creemos que <strong>«El Factor Humano es Insustituible»</strong>. Nuestra EAI funciona como <strong>«Aumento de Inteligencia»</strong>, empoderando al personal escolar, a las familias y a los especialistas con información accionable. De este modo, <em>AnimiKind preserva la confianza humana esencial</em> en el corazón de cada interacción de salvaguarda.</>
                : <>AnimiKind rejects technology as a replacement and embraces it as an enabler. Our foundational philosophy of <strong>"Technology in Service of Humanity"</strong> is embedded in every design decision. We believe that <strong>"The Human Factor is Irreplaceable"</strong>. Our EAI functions as <strong>Intelligence Augmentation</strong>, empowering school staff, families, and specialists with actionable insight. In this way, <em>AnimiKind preserves essential human trust</em> at the heart of every safeguarding interaction.</>,
            tags: es
                ? ['Aumento de Inteligencia', 'Factor Humano', 'Ética IA']
                : ['Intelligence Augmentation', 'Human Factor', 'Ethical AI'],
        },
    ];


    return (
        <div className="pt-16">

            {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO / STRATEGIC SHIFT
      ══════════════════════════════════════════════════════════ */}
            <section className="relative w-full min-h-[480px] flex items-center overflow-hidden">
                {/* Abstract data-network background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#0f2d50] to-[#1e2c29]" />

                {/* Subtle server-rack grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 12 }).map((_, col) =>
                        Array.from({ length: 7 }).map((_, row) => (
                            <rect key={`${col}-${row}`} x={col * 100 + 10} y={row * 64 + 10} width={80} height={44} rx={6}
                                fill="none" stroke="#0dc383" strokeWidth="0.8" />
                        ))
                    )}
                    {/* Horizontal data lines */}
                    {[96, 160, 224, 288, 352, 416].map((y, i) => (
                        <line key={i} x1={0} y1={y} x2={1200} y2={y} stroke="#1d4c73" strokeWidth="0.6" strokeDasharray="8 6" />
                    ))}
                </svg>

                {/* Shield watermark */}
                <div className="absolute right-0 top-0 h-full w-[520px] flex items-center justify-center opacity-[0.06] pointer-events-none">
                    <BrandIcon name="ShieldCheck" color="green" size={480} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1 text-white space-y-6 max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                            <BrandIcon name="Target" color="green" size={14} weight="bold" />
                            {es ? 'Por Qué AnimiKind' : 'Why AnimiKind'}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            {es
                                ? <>No Solo Software: Una <span className="text-[#0dc383]">Inversión Estratégica</span> en la Primera Red de Seguridad Emocional Digital del Reino Unido</>
                                : <>Not Just Software: A <span className="text-[#0dc383]">Strategic Investment</span> in the UK's First Digital Emotional Safety Net</>}
                        </h1>

                        <p className="text-white/80 text-lg leading-relaxed">
                            {es
                                ? <>La mayoría de las soluciones de salvaguarda escolar existentes no son más que <strong className="text-white">«archivadores digitales reactivos»</strong>; herramientas que documentan el daño <em>después</em> de que ocurre. AnimiKind es algo fundamentalmente diferente: la <strong className="text-[#0dc383]">primera «Red de Seguridad Emocional Digital» híbrida y proactiva del Reino Unido</strong>, diseñada explícitamente para desmantelar la <strong className="text-white">«Crisis Silenciosa»</strong> que afecta a millones de alumnos.</>
                                : <>Most existing school safeguarding solutions are little more than <strong className="text-white">"reactive digital filing cabinets"</strong> — tools that document harm <em>after</em> it occurs. AnimiKind is something fundamentally different: the United Kingdom's first hybrid-proactive <strong className="text-[#0dc383]">"Digital Emotional Safety Net"</strong>, designed explicitly to dismantle the <strong className="text-white">"Silent Crisis"</strong> affecting millions of pupils.</>}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            {(es
                                ? ['EAI Proactiva', 'Crisis Silenciosa', 'Ecosistema 360°', 'KCSIE 2026']
                                : ['Proactive EAI', 'Silent Crisis', '360° Ecosystem', 'KCSIE 2026']
                            ).map((tag, i) => (
                                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                    <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Ani mascot */}
                    <div className="hidden lg:block flex-shrink-0">
                        <img
                            src={cloudinaryMedia.about.mascot}
                            alt="Ani"
                            className="h-72 w-auto drop-shadow-2xl"
                            style={{ animation: 'floatWhyUs 4s ease-in-out infinite' }}
                        />
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes floatWhyUs { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
      `}</style>

            {/* ── BANNER IMAGE ── */}
            <div className="w-full">
                <img
                    src={cloudinaryMedia.about.whyUsBanner}
                    alt="Why AnimiKind"
                    className="w-full object-cover object-center block"
                    style={{ maxHeight: '420px' }}
                />
            </div>

            {/* ══════════════════════════════════════════════════════════
          SECTION 2 — THE 5 PILLARS
      ══════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Diferenciadores Clave' : 'Core Differentiators'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Los 5 Pilares que nos Distinguen' : 'The 5 Pillars That Set Us Apart'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Cinco razones irrefutables por las que AnimiKind es la única elección estratégica para las escuelas británicas modernas.'
                                : 'Five irrefutable reasons why AnimiKind is the only strategic choice for modern British schools.'}
                        </p>
                    </div>

                    {/* Row 1 — 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
                        {pillars.slice(0, 3).map((pillar, i) => (
                            <div key={i} className="animate-fadeSlideUp" style={{ animationDelay: `${i * 100}ms` }}>
                                <PillarCard pillar={pillar} />
                            </div>
                        ))}
                    </div>

                    {/* Row 2 — 2 cards centradas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-3xl mx-auto">
                        {pillars.slice(3).map((pillar, i) => (
                            <div key={i + 3} className="animate-fadeSlideUp" style={{ animationDelay: `${(i + 3) * 100}ms` }}>
                                <PillarCard pillar={pillar} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
          SECTION 3 — DEFINITIVE CONCLUSION + CTA
      ══════════════════════════════════════════════════════════ */}
            <section className="py-24 bg-gradient-to-br from-[#fdf8ef] via-[#fffbf0] to-[#fdf8ef]">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
                    {/* Top quote bar */}
                    <div className="flex justify-center mb-10">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#eec843]/15 border border-[#eec843]/40">
                            <BrandIcon name="Sparkle" color="gold" size={18} weight="duotone" />
                            <span className="text-[#1e2c29] font-bold text-sm tracking-wide">
                                {es ? 'La Conclusión Definitiva' : 'The Definitive Conclusion'}
                            </span>
                        </div>
                    </div>

                    {/* Main quote box */}
                    <div className="rounded-[2.5rem] border-2 border-[#eec843]/40 bg-white p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                        {/* Background watermark */}
                        <div className="absolute -right-16 -top-16 opacity-[0.04] pointer-events-none">
                            <BrandIcon name="ShieldCheck" color="gold" size={380} weight="duotone" />
                        </div>

                        <div className="relative z-10">
                            <blockquote className="text-xl md:text-2xl text-[#1e2c29] font-semibold leading-relaxed mb-4 italic">
                                {es
                                    ? '"En última instancia, la verdadera innovación no es solo inteligente; es Amable."'
                                    : '"Ultimately, true innovation isn\'t just intelligent; it is Kind."'}
                            </blockquote>

                            <p className="text-[#1d4c73]/80 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                                {es
                                    ? 'Elegir AnimiKind significa elegir un marco sólido, comercialmente sostenible y legalmente impecable. Es la solución definitiva para desmantelar el silencio en torno al abuso escolar y proteger a los adultos del mañana, hoy.'
                                    : 'Choosing AnimiKind means choosing a robust, commercially sustainable, and legally flawless framework. It is the definitive solution to dismantle the silence surrounding school-based abuse and protect the adults of tomorrow, today.'}
                            </p>

                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                                {[
                                    { val: '40%', label: es ? 'Capacidad recuperada' : 'Capacity reclaimed', icon: 'TrendUp' as const, color: 'green' as const },
                                    { val: '10h', label: es ? 'Ahorradas al DSL/semana' : 'Saved per DSL / week', icon: 'Clock' as const, color: 'navy' as const },
                                    { val: '1st', label: es ? 'Red emocional digital del RU' : 'UK digital emotional safety net', icon: 'Star' as const, color: 'gold' as const },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center p-4 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0]">
                                        <div className="flex justify-center mb-2">
                                            <BrandIcon name={stat.icon} color={stat.color} size={20} weight="duotone" />
                                        </div>
                                        <div className="text-2xl md:text-3xl font-extrabold text-[#1e2c29]">{stat.val}</div>
                                        <div className="text-xs text-[#1d4c73]/65 font-semibold leading-tight mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/demo/"
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all transform hover:-translate-y-1 active:scale-95"
                                >
                                    <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                                    {es ? 'Reservar Consulta Estratégica de Salvaguarda' : 'Book Your Strategic Safeguarding Consultation'}
                                </Link>
                                <Link
                                    to="/about/social-focusing/"
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1e2c29] text-white font-bold text-base hover:bg-[#1d4c73] hover:shadow-xl transition-all transform hover:-translate-y-1"
                                >
                                    <BrandIcon name="ArrowCircleRight" color="green" size={18} weight="bold" />
                                    {es ? 'Nuestro Enfoque Social' : 'Our Social Focus'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUsPage;
