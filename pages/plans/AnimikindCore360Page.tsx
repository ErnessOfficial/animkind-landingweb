import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const AnimikindCore360Page: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es
            ? 'AnimiKind CORE 360º – Acceso Total – AnImiKind'
            : 'AnimiKind CORE 360° – Total Access – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
                @keyframes growBar { from { width:0%; } to { width:var(--bar-w); } }
                .bar-animate { animation: growBar 1.2s cubic-bezier(0.22,0.68,0,1.2) forwards; }
            `}</style>

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[480px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#1d4c73]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice">
                    {[[120, 90], [340, 200], [600, 80], [820, 230], [1050, 110], [200, 360], [700, 380], [980, 310], [450, 290], [150, 180]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="4" fill="#0dc383" />)}
                    {[[120, 90, 340, 200], [340, 200, 600, 80], [600, 80, 820, 230], [820, 230, 1050, 110], [120, 90, 600, 80], [200, 360, 700, 380], [700, 380, 980, 310], [450, 290, 700, 380], [150, 180, 340, 200]].map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="5 5" />)}
                </svg>
                <div className="absolute right-0 top-0 h-full flex items-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="ShieldCheck" color="green" size={460} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center w-full space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                        <BrandIcon name="ShieldCheck" color="green" size={13} weight="bold" />
                        {es ? 'Ecosistema SaaS Completo' : 'Complete SaaS Ecosystem'}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        {es ? <>AnimiKind™ <span className="text-[#0dc383]">CORE 360°</span><br /><span className="text-3xl md:text-4xl font-bold text-white/80">Acceso Total</span></> : <>AnimiKind™ <span className="text-[#0dc383]">CORE 360°</span><br /><span className="text-3xl md:text-4xl font-bold text-white/80">Total Access</span></>}
                    </h1>

                    <p className="text-white/75 text-lg leading-relaxed max-w-3xl mx-auto">
                        {es
                            ? 'La salvaguarda reactiva ya no es suficiente. Despliega el primer ecosistema Híbrido-Proactivo del Reino Unido para proteger a tus alumnos y empoderar a tu equipo docente.'
                            : 'Reactive safeguarding is no longer enough. Deploy the UK\'s first Hybrid-Proactive ecosystem to protect your students and empower your staff.'}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        {['OSA 2023', 'KCSIE 2026', 'Ofsted Ready', 'UK GDPR', 'CPD #788968', es ? 'Hasta 1.200 alumnos' : 'Up to 1,200 pupils'].map((t, i) => (
                            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Price pill */}
                    <div className="inline-flex items-center gap-3 mt-4 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="text-white/60 text-sm font-semibold">{es ? 'Precio anual por centro' : 'Annual price per school'}</span>
                        <span className="text-3xl font-extrabold text-[#0dc383]">£2,950</span>
                        <span className="text-white/60 text-sm">/yr</span>
                    </div>
                </div>
            </section>

            {/* ══ INTRO — The Silent Crisis ══ */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
                    <div className="animate-fadeSlideUp">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-5">
                            {es ? 'La Red de Seguridad Digital Completa' : 'The Complete Digital Safety Net'}
                        </span>
                        <p className="text-[#1d4c73]/80 text-lg leading-relaxed">
                            {es
                                ? 'El ecosistema AnimiKind™ Core SaaS es la red de seguridad emocional digital completa que ofrece un Sistema de Alerta Temprana con IA, diseñado para identificar señales tempranas de angustia, agilizar las operaciones de salvaguarda y garantizar una alineación del 100% con los estándares de Ofsted y KCSIE.'
                                : 'The AnimiKind™ Core SaaS Ecosystem is the complete digital emotional safety net, offering a full AI Early Warning System designed to identify early signs of distress, streamline your safeguarding operations, and ensure 100% alignment with Ofsted and KCSIE standards.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ══ SECTION 1 — PRICING IMAGE 01 ══ */}
            <section className="py-10 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.pricing.core360Primary}
                            alt="AnimiKind CORE 360° — Plan overview"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 2 — WHAT YOUR INVESTMENT INCLUDES ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14 animate-fadeSlideUp">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Tu Inversión Incluye' : 'What Your Investment Includes'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? <>Protección completa con una única <span className="text-[#0dc383]">licencia anual</span></> : <>Complete protection with a single <span className="text-[#0dc383]">annual licence</span></>}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Para un único centro educativo de hasta 1.200 alumnos, cobertura completa de extremo a extremo.'
                                : 'For a single school of up to 1,200 pupils — complete end-to-end protection.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'UsersThree' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Acceso para Alumnos' : 'Student Access',
                                value: es ? 'Ilimitado' : 'Unlimited',
                                body: es
                                    ? 'Acceso sin restricciones a la AnimiKind App para todos los alumnos matriculados. Un espacio seguro y confidencial disponible 24/7.'
                                    : 'Unlimited access to the AnimiKind App for all enrolled students — a secure, 24/7 non-judgmental space to express emotions and seek help.',
                            },
                            {
                                icon: 'PresentationChart' as const, color: 'navy' as const, accentHex: '#1d4c73',
                                title: es ? 'Acceso para Personal' : 'Staff Access',
                                value: '2 DSL',
                                body: es
                                    ? '2 cuentas de usuario incluidas para el Panel Escolar de AnimiKind (El Centro de Mando de Salvaguarda). Ampliable con add-ons.'
                                    : '2 User Accounts for the AnimiKind School Panel (The Safeguarding Command Centre). Expandable with add-ons.',
                            },
                            {
                                icon: 'Buildings' as const, color: 'green' as const, accentHex: '#0dc383',
                                title: es ? 'Capacidad del Centro' : 'School Capacity',
                                value: '1,200',
                                body: es
                                    ? 'Cobertura total para un centro de hasta 1.200 alumnos. Para comunidades educativas más grandes, consulta nuestros planes Enterprise.'
                                    : 'Full coverage for a school of up to 1,200 pupils. For larger educational communities, ask about our Enterprise plans.',
                            },
                        ].map((card, i) => (
                            <div key={i} className="group flex flex-col bg-[#f4f7fb] rounded-[1.75rem] border-2 border-transparent hover:border-[#0dc383]/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-7 animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm" style={{ background: `${card.accentHex}18`, border: `2px solid ${card.accentHex}33` }}>
                                        <BrandIcon name={card.icon} color={card.color} size={24} weight="duotone" />
                                    </div>
                                    <span className="text-3xl font-extrabold" style={{ color: card.accentHex }}>{card.value}</span>
                                </div>
                                <h3 className="text-base font-extrabold text-[#1e2c29] mb-2">{card.title}</h3>
                                <p className="text-[#1d4c73]/65 text-sm leading-relaxed">{card.body}</p>
                                <div className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: card.accentHex }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — KEY FEATURES ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Características y Ventajas Clave' : 'Key Features & Advantages'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            {es ? 'Por qué CORE 360° es diferente' : 'Why CORE 360° is different'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: 'Lock' as const, color: 'green' as const,
                                title: es ? 'El Puente Escolar Seguro' : 'The Secure School Bridge',
                                body: es
                                    ? 'Un enlace digital cifrado y dedicado que conecta los dispositivos de los alumnos directamente con tu equipo de salvaguarda. Sin brechas, sin silencio cuando un niño necesita ayuda.'
                                    : 'A dedicated, encrypted digital link connecting student devices directly to your safeguarding team. No gaps, no silence when a child needs help.',
                            },
                            {
                                icon: 'Brain' as const, color: 'gold' as const,
                                title: es ? 'Triaje IA Calibrado' : 'Calibrated AI Triage',
                                body: es
                                    ? 'Nuestro motor IA "Human-in-the-Loop" filtra automáticamente hasta el 40% de los falsos positivos, garantizando que tu equipo se centre en riesgos genuinos, no en ruido.'
                                    : 'Our "Human-in-the-Loop" AI engine automatically filters out up to 40% of false positives, ensuring your safeguarding team focuses on genuine risks, not just noise.',
                            },
                            {
                                icon: 'TrendUp' as const, color: 'green' as const,
                                title: es ? 'Inteligencia Accionable' : 'Actionable Intelligence',
                                body: es
                                    ? 'El Panel Escolar transforma los datos de los alumnos y las alertas de IA en un Mapa de Calor de Riesgo en tiempo real, permitiendo intervenciones tempranas antes de que el rendimiento escolar se vea afectado.'
                                    : 'The School Panel transforms raw student data and AI alerts into a real-time Risk Heatmap, enabling early interventions before a student\'s attendance or behaviour dips.',
                            },
                            {
                                icon: 'Network' as const, color: 'gold' as const,
                                title: es ? 'Integración MIS Completa' : 'Full MIS Integration',
                                body: es
                                    ? 'Despliegue sin fricción. El sistema se sincroniza con tus bases de datos escolares existentes (Wonde, SIMS, Arbor), sin introducción manual de datos — solo mapeo instantáneo y seguro de alumnos.'
                                    : 'Zero-friction deployment. The system syncs with your existing school databases (Wonde, SIMS, Arbor) — no manual data entry, just instant, secure student mapping.',
                            },
                        ].map((feat, i) => (
                            <div key={i} className="flex items-start gap-5 rounded-[1.75rem] p-7 border-2 border-white/10 hover:border-[#0dc383]/40 hover:shadow-xl transition-all duration-300 animate-fadeSlideUp" style={{ background: 'rgba(255,255,255,0.06)', animationDelay: `${i * 80}ms` }}>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name={feat.icon} color={feat.color} size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h3 className="text-base font-extrabold text-white mb-2">{feat.title}</h3>
                                    <p className="text-white/65 text-sm leading-relaxed">{feat.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — STAT CARDS ══ */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { val: '40%', label: es ? 'Falsos positivos filtrados por IA' : 'False positives filtered by AI', color: '#0dc383', bg: '#0dc38322', barW: '40%' },
                            { val: '£2,950', label: es ? 'Precio anual por centro (hasta 1.200 alumnos)' : 'Annual price per school (up to 1,200 pupils)', color: '#1d4c73', bg: '#1d4c7322', barW: '100%' },
                            { val: '< 6 wks', label: es ? 'Ciclo de adquisición — por debajo del umbral de £3.000' : 'Procurement cycle — below £3,000 threshold', color: '#b07d1f', bg: '#eec84322', barW: '65%' },
                        ].map((s, i) => (
                            <div key={i} className="bg-[#f4f7fb] rounded-[1.75rem] border border-[#e5eaf0] p-7 text-center animate-fadeSlideUp shadow-sm" style={{ animationDelay: `${i * 80}ms` }}>
                                <p className="text-4xl font-extrabold mb-2" style={{ color: s.color }}>{s.val}</p>
                                <p className="text-[#1d4c73]/65 text-sm leading-relaxed font-semibold">{s.label}</p>
                                <div className="mt-4 h-2 rounded-full" style={{ background: s.bg }}>
                                    <div className="h-full rounded-full bar-animate" style={{ '--bar-w': s.barW, width: s.barW, background: s.color, animationDelay: `${i * 300}ms` } as React.CSSProperties} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 5 — STRATEGIC PRICING ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left column */}
                        <div className="space-y-8 animate-fadeSlideUp">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-4">
                                    {es ? 'Precio Estratégico & Valor Comercial' : 'Strategic Pricing & Commercial Value'}
                                </span>
                                <h2 className="text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                                    {es ? 'Diseñado para superar las barreras de compra' : 'Designed to bypass procurement bottlenecks'}
                                </h2>
                            </div>

                            <div className="space-y-5">
                                {[
                                    {
                                        icon: 'Scales' as const, color: 'navy' as const,
                                        title: es ? 'Por debajo del umbral de £3.000' : 'Below the £3,000 threshold',
                                        body: es
                                            ? 'Precio deliberadamente por debajo del límite de autoridad delegada de £3.000, lo que permite a los directores aprobar la compra inmediatamente con presupuesto discrecional, reduciendo el ciclo de adquisición habitual de 9 meses a menos de 6 semanas.'
                                            : 'Deliberately priced just under the £3,000 delegated authority threshold — allowing Headteachers to sign off immediately using discretionary budget, reducing the typical 9-month procurement cycle to less than 6 weeks.',
                                    },
                                    {
                                        icon: 'Heart' as const, color: 'green' as const,
                                        title: es ? 'Asset de Retención de Alumnos' : 'Student Retention Asset',
                                        body: es
                                            ? 'Retener a un solo alumno que de otro modo habría abandonado debido a una angustia emocional no resuelta cubre completamente el coste de la licencia anual de AnimiKind — convirtiendo el gasto en una inversión con ROI positivo garantizado.'
                                            : 'Retaining just one student who would have otherwise left due to unresolved emotional distress completely covers the cost of your annual AnimiKind licence — turning the spend into a guaranteed positive-ROI investment.',
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

                        {/* Right — Add-ons card */}
                        <div className="animate-fadeSlideUp" style={{ animationDelay: '120ms' }}>
                            <div className="bg-white rounded-[2rem] shadow-2xl border border-[#e5eaf0] p-8">
                                <div className="flex items-center gap-4 mb-7">
                                    <IconBadge name="UsersThree" color="green" size="md" />
                                    <div>
                                        <h3 className="text-xl font-extrabold text-[#1e2c29]">{es ? 'Escalabilidad Flexible' : 'Flexible Scalability'}</h3>
                                        <p className="text-[#0dc383] text-sm font-semibold">{es ? '¿Necesitas más acceso del personal?' : 'Need more staff access?'}</p>
                                    </div>
                                </div>

                                {/* Base plan */}
                                <div className="mb-5 p-5 rounded-2xl bg-[#0dc383]/8 border border-[#0dc383]/25">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-extrabold text-[#1e2c29] text-base">AnimiKind CORE 360°</p>
                                            <p className="text-[#1d4c73]/60 text-xs mt-0.5">{es ? 'Incluye 2 usuarios del Panel Escolar' : 'Includes 2 School Panel users'}</p>
                                        </div>
                                        <span className="text-2xl font-extrabold text-[#0dc383]">£2,950<span className="text-sm font-semibold text-[#1d4c73]/50">/yr</span></span>
                                    </div>
                                </div>

                                {/* Add-ons */}
                                <p className="text-[#1d4c73]/50 text-xs font-bold tracking-widest uppercase mb-3">{es ? 'Add-ons opcionales' : 'Optional add-ons'}</p>
                                <div className="space-y-3">
                                    {[
                                        { label: es ? '+ 1 usuario adicional del Panel Escolar' : '+ 1 Additional School Panel User', price: '+£15/yr', highlight: false },
                                        { label: es ? 'Pack Equipo de Salvaguarda (5 usuarios adicionales)' : 'Safeguarding Team Pack (5 additional users)', price: '+£45/yr', highlight: true },
                                    ].map((addon, i) => (
                                        <div key={i} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${addon.highlight ? 'bg-[#eec843]/10 border-[#b07d1f]/30' : 'bg-[#f4f7fb] border-[#e5eaf0]'}`}>
                                            <div className="flex items-center gap-2">
                                                <BrandIcon name="CheckCircle" color={addon.highlight ? 'gold' : 'green'} size={15} weight="fill" />
                                                <span className="text-sm font-semibold text-[#1e2c29]">{addon.label}</span>
                                                {addon.highlight && <span className="px-2 py-0.5 rounded-full bg-[#b07d1f]/20 text-[#b07d1f] text-[10px] font-extrabold">{es ? 'Mejor Valor' : 'Best Value'}</span>}
                                            </div>
                                            <span className="font-extrabold text-sm" style={{ color: addon.highlight ? '#b07d1f' : '#0dc383' }}>{addon.price}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="mt-5 text-[#1d4c73]/45 text-xs text-center">
                                    {es ? 'Todos los precios en GBP. IVA no incluido. Licencias anuales por institución.' : 'All prices in GBP. VAT not included. Annual licences per institution.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ SECTION 6 — PRICING IMAGE 02 ══ */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.pricing.core360Secondary}
                            alt="AnimiKind CORE 360° — Detailed pricing breakdown"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 7 — CTA ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                        <div className="bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#1d4c73] px-10 pt-14 pb-20 text-center relative overflow-hidden">
                            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 900 260" preserveAspectRatio="xMidYMid slice">
                                {[[80, 60], [220, 130], [400, 50], [600, 130], [780, 70], [160, 210], [480, 190], [720, 230]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="4" fill="#0dc383" />)}
                                {[[80, 60, 220, 130], [220, 130, 400, 50], [400, 50, 600, 130], [600, 130, 780, 70], [160, 210, 480, 190], [480, 190, 720, 230]].map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="4 6" />)}
                            </svg>
                            <div className="flex justify-center mb-5 relative z-10">
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name="ShieldCheck" color="green" size={42} weight="duotone" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4 relative z-10">
                                {es ? '¿Listo para pasar de la gestión reactiva a la prevención proactiva?' : 'Ready to shift from reactive crisis management to proactive prevention?'}
                            </h2>
                            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto relative z-10">
                                {es
                                    ? 'Equipa a tus DSLs con un triaje inteligente y eficiente y garantiza que ningún alumno quede en el olvido. Contacta al KindTeam hoy para reservar una demo gratuita.'
                                    : 'Equip your DSLs with intelligent, time-saving triage and ensure no child falls through the gaps. Contact the KindTeam today to book a free demo.'}
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
                                {['CORE 360°', 'OSA 2023', 'KCSIE 2026', 'CPD #788968', 'UK GDPR', 'Ofsted Ready'].map((b, i) => (
                                    <span key={i} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f4f7fb] border border-[#e5eaf0] text-[#1d4c73] text-xs font-bold shadow-sm">
                                        <BrandIcon name="CheckCircle" color="green" size={12} weight="fill" />
                                        {b}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[#1d4c73]/35 text-xs text-center">
                                {es ? 'AnimiKind™ Core SaaS Ecosystem · £2,950/año · Por debajo del umbral de £3.000 de autoridad delegada · Ciclo de adquisición &lt; 6 semanas' : 'AnimiKind™ Core SaaS Ecosystem · £2,950/yr · Below £3,000 delegated authority threshold · Procurement cycle < 6 weeks'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AnimikindCore360Page;
