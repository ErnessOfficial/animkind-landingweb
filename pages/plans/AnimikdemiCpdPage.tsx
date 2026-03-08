import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const AnimikdemiCpdPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es
            ? 'AnimiKdemi – CPD Learning Simulator (Solo Personal) – AnImiKind'
            : 'AnimiKdemi – CPD Learning Simulator (Staff Only) – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[460px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1200] via-[#2d2000] to-[#1d4c73]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 7 }).map((_, c) => Array.from({ length: 5 }).map((_, r) => (
                        <circle key={`${c}-${r}`} cx={c * 200 + 80} cy={r * 100 + 50} r="3" fill="#eec843" />
                    )))}
                </svg>
                <div className="absolute right-0 top-0 h-full flex items-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Graduation" color="gold" size={440} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center w-full space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eec843]/20 border border-[#eec843]/40 text-[#eec843] text-xs font-bold tracking-widest uppercase">
                        <BrandIcon name="Certificate" color="gold" size={13} weight="bold" />
                        {es ? 'Solo Personal Docente & DSLs' : 'Staff Only Edition · DSLs & Teachers'}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        AnimiKdemi™<br />
                        <span className="text-[#eec843]">CPD Learning Simulator</span>
                    </h1>

                    <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
                        {es
                            ? 'Construye confianza, no solo cumplimiento. El primer simulador de IA inmersivo del RU diseñado específicamente para escenarios de salvaguarda educativa.'
                            : 'Build Confidence. Not Just Compliance. The UK\'s first immersive AI simulator designed specifically for safeguarding scenarios in education.'}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        {['CPD #788968', 'KCSIE 2026', 'OSA', es ? 'Solo Personal' : 'Staff Only', 'UK GDPR'].map((t, i) => (
                            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                <BrandIcon name="CheckCircle" color="gold" size={13} weight="fill" />
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Price pill */}
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="text-white/60 text-sm font-semibold">{es ? 'Licencia anual por centro' : 'Annual site licence per school'}</span>
                        <span className="text-3xl font-extrabold text-[#eec843]">£695</span>
                        <span className="text-white/60 text-sm">/yr</span>
                    </div>
                </div>
            </section>

            {/* ══ INTRO ══ */}
            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center animate-fadeSlideUp">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-5">
                        {es ? 'Más allá del cumplimiento' : 'Beyond compliance'}
                    </span>
                    <p className="text-[#1d4c73]/80 text-lg leading-relaxed">
                        {es
                            ? 'Es hora de ir más allá de las diapositivas de presentación pasivas. Equipa a tu equipo docente y a los DSLs con el primer simulador de IA inmersivo del RU, diseñado específicamente para escenarios de salvaguarda. El CPD Simulator de AnimiKdemi™ proporciona construcción práctica de habilidades que va más allá del conocimiento teórico, ofreciendo competencias aplicables para la salvaguarda en el mundo real.'
                            : "It is time to move beyond passive, \"click-through\" presentation slides. Equip your teaching staff and Designated Safeguarding Leads (DSLs) with practical skill-building that goes beyond theoretical knowledge, offering applicable competencies for real-world safeguarding."}
                    </p>
                </div>
            </section>

            {/* ══ WHY SCHOOLS CHOOSE THIS PLAN — 4 cards ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#b07d1f]/15 border border-[#b07d1f]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Por qué los centros eligen este plan' : 'Why Schools Choose This Plan'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? <>Formación que <span className="text-[#b07d1f]">transforma</span></> : <>Training that <span className="text-[#b07d1f]">transforms</span></>}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: 'Certificate' as const, color: 'gold' as const,
                                title: es ? 'Excelencia Acreditada' : 'Accredited Excellence',
                                body: es
                                    ? 'Formación certificada por The CPD Group (Proveedor Aprobado #788968). Tu personal ganará créditos CPD oficialmente reconocidos mientras aprende, alineándose directamente con los requisitos legislativos del RU y las políticas de salud mental recomendadas por el gobierno.'
                                    : 'Our training is fully certified by The CPD Group (Approved Provider #788968). Your staff will earn officially recognised CPD credits while they learn, directly aligning with UK legislative requirements and government-recommended mental health policies.',
                            },
                            {
                                icon: 'ShieldCheck' as const, color: 'green' as const,
                                title: es ? 'Práctica sin Riesgo' : 'Practice Without Peril',
                                body: es
                                    ? 'Proporcionamos un entorno "sandbox" seguro e impulsado por IA donde los docentes pueden practicar el manejo de revelaciones sensibles — como acoso o ansiedad — y aprender de los errores antes de que ocurran crisis reales.'
                                    : 'A safe, AI-driven "sandbox" environment where teachers can role-play handling sensitive disclosures — such as bullying or anxiety — and learn from mistakes before real-world crises occur.',
                            },
                            {
                                icon: 'Brain' as const, color: 'green' as const,
                                title: es ? 'Bucle de Retroalimentación Inmediata' : 'Instant Feedback Loop',
                                body: es
                                    ? 'La IA Emocional proporciona análisis en tiempo real de las respuestas del personal durante las simulaciones, asegurando que sus acciones se alineen estrictamente con los marcos de KCSIE y las políticas internas de tu centro.'
                                    : 'The Emotional AI provides real-time analysis of staff responses during the simulations, ensuring that their actions strictly align with KCSIE frameworks and your school\'s internal policies.',
                            },
                            {
                                icon: 'Lightning' as const, color: 'gold' as const,
                                title: es ? 'Despliegue sin Fricción' : 'Zero-Friction Deployment',
                                body: es
                                    ? 'Implementar la formación del personal no debería ser un dolor de cabeza técnico. Este plan no requiere integración compleja — concede acceso instantáneo a todo el equipo DSL y docente en el momento de la activación.'
                                    : 'Implementing staff training should not be a technical headache. This plan requires no complex integration — it grants instant access to your entire DSL and teaching team upon activation.',
                            },
                        ].map((card, i) => (
                            <div key={i} className="group flex items-start gap-5 bg-white rounded-[1.75rem] border-2 border-transparent hover:border-[#eec843]/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-7 animate-fadeSlideUp" style={{ animationDelay: `${i * 80}ms` }}>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                                    style={{ background: 'rgba(238,200,67,0.15)', border: '2px solid rgba(238,200,67,0.35)' }}>
                                    <BrandIcon name={card.icon} color={card.color} size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h3 className="text-base font-extrabold text-[#1e2c29] mb-2">{card.title}</h3>
                                    <p className="text-[#1d4c73]/65 text-sm leading-relaxed">{card.body}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-full bg-[#b07d1f]" style={{ position: 'static' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 02PRICING IMAGE ══ */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.pricing.cpdSimulatorPage}
                            alt="AnimiKdemi CPD Learning Simulator — Plan overview"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ STRATEGIC PRICING ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left — copy */}
                        <div className="space-y-7 animate-fadeSlideUp">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#eec843]/20 border border-[#eec843]/40 text-[#eec843] text-xs font-bold tracking-widest uppercase mb-4">
                                    {es ? 'Precio Estratégico & Ventaja Comercial' : 'Strategic Pricing & Commercial Advantage'}
                                </span>
                                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                    {es ? 'Diseñado para eliminar la fricción burocrática' : 'Designed to eliminate bureaucratic friction'}
                                </h2>
                            </div>
                            <p className="text-white/70 leading-relaxed">
                                {es
                                    ? 'A solo £695 al año por licencia de sitio escolar completo, este módulo de formación de cumplimiento KCSIE obligatorio puede comprarse instantáneamente con la tarjeta de crédito discrecional del director como gasto misceláneo. Esto evita las largas aprobaciones del consejo, reduciendo el ciclo de adquisición típico a menos de 30 días.'
                                    : 'At just £695 per year for a full school site licence, this mandatory KCSIE compliance training module can be instantly purchased via a Headteacher\'s discretionary credit card as a miscellaneous expense. This bypasses lengthy board approvals, reducing the typical procurement cycle to less than 30 days.'}
                            </p>

                            {/* Stat row */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { val: '< 30', unit: es ? 'días' : 'days', label: es ? 'Ciclo de adquisición' : 'Procurement cycle' },
                                    { val: '100%', unit: '', label: es ? 'Alineado con KCSIE 2026' : 'KCSIE 2026 aligned' },
                                ].map((s, i) => (
                                    <div key={i} className="rounded-2xl p-5 border border-white/15 text-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
                                        <p className="text-3xl font-extrabold text-[#eec843]">{s.val}<span className="text-lg ml-1">{s.unit}</span></p>
                                        <p className="text-white/55 text-xs font-semibold mt-1">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — pricing card */}
                        <div className="animate-fadeSlideUp" style={{ animationDelay: '100ms' }}>
                            <div className="bg-white rounded-[2rem] shadow-2xl p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <IconBadge name="Graduation" color="gold" size="md" bg="rgba(238,200,67,0.15)" />
                                    <div>
                                        <h3 className="text-xl font-extrabold text-[#1e2c29]">AnimiKdemi™ CPD Simulator</h3>
                                        <p className="text-[#b07d1f] text-sm font-semibold">{es ? 'Staff Only Edition' : 'Staff Only Edition'}</p>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="bg-[#f4f7fb] rounded-2xl p-5 mb-6 flex items-end justify-between">
                                    <div>
                                        <p className="text-[#1d4c73]/50 text-xs font-semibold mb-1">{es ? 'Precio anual' : 'Annual price'}</p>
                                        <div className="flex items-end gap-1">
                                            <span className="text-5xl font-extrabold text-[#1e2c29]">£695</span>
                                            <span className="text-[#1d4c73]/50 text-sm mb-1">{es ? '/año/centro' : '/yr/school'}</span>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1.5 rounded-full bg-[#0dc383]/15 border border-[#0dc383]/30 text-[#0dc383] text-xs font-extrabold">
                                        {es ? 'Licencia de Sitio' : 'Site Licence'}
                                    </span>
                                </div>

                                {/* Included */}
                                <p className="text-[#1d4c73]/50 text-xs font-bold tracking-widest uppercase mb-3">{es ? 'Incluye' : 'Includes'}</p>
                                <ul className="space-y-2.5 mb-7">
                                    {(es ? [
                                        'Acceso ilimitado para todo el personal docente y DSLs',
                                        'Módulos CPD acreditados por The CPD Group (#788968)',
                                        'Simulaciones con IA alineadas al KCSIE',
                                        'Certificados digitales oficiales al completar',
                                        'Bucle de retroalimentación IA en tiempo real',
                                        'Sin integración técnica requerida',
                                    ] : [
                                        'Unlimited access for all teaching staff & DSLs',
                                        'CPD-accredited modules by The CPD Group (#788968)',
                                        'AI-powered simulations aligned to KCSIE',
                                        'Official digital certificates upon completion',
                                        'Real-time AI feedback loop',
                                        'No technical integration required',
                                    ]).map((f, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#1d4c73]/75 font-medium">
                                            <BrandIcon name="CheckCircle" color="gold" size={16} weight="fill" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-col gap-3">
                                    <Link to="/contact/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#b07d1f] to-[#eec843] text-white font-bold text-base hover:shadow-2xl transition-all hover:-translate-y-0.5">
                                        <BrandIcon name="Envelope" color="white" size={17} weight="bold" />
                                        {es ? 'Contactar al KindTeam' : 'Contact the KindTeam'}
                                    </Link>
                                    <Link to="/demo/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all shadow-md hover:-translate-y-0.5">
                                        <BrandIcon name="Calendar" color="green" size={17} weight="bold" />
                                        {es ? 'Reservar Demo' : 'Book a Demo'}
                                    </Link>
                                </div>
                                <p className="text-[#1d4c73]/35 text-xs text-center mt-4">
                                    {es ? 'IVA no incluido · Tarjeta discrecional · Sin aprobación de consejo' : 'VAT not included · Discretionary card · No board approval needed'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ CTA STRIP ══ */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center animate-fadeSlideUp">
                    <h2 className="text-2xl font-extrabold text-[#1e2c29] mb-4">
                        {es
                            ? '¿Listo para dotar a tu equipo de la confianza que necesita?'
                            : 'Ready to equip your staff with the confidence they need?'}
                    </h2>
                    <p className="text-[#1d4c73]/65 leading-relaxed mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Actualiza la formación de tu personal con una experiencia de aprendizaje acreditada e inmersiva. Contacta al KindTeam hoy.'
                            : 'Upgrade your staff training with an accredited, immersive learning experience. Contact the KindTeam today.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#b07d1f] to-[#eec843] text-white font-bold text-base hover:shadow-2xl transition-all hover:-translate-y-0.5">
                            <BrandIcon name="Envelope" color="white" size={18} weight="bold" />
                            {es ? 'Contactar al KindTeam' : 'Contact the KindTeam'}
                        </Link>
                        <Link to="/plans/animikdemi-cert-plus/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all shadow-md hover:-translate-y-0.5">
                            <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                            {es ? 'Ver Certification Plus' : 'See Certification Plus'}
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {['CPD #788968', 'KCSIE 2026', 'OSA', 'UK GDPR', es ? 'Solo Personal' : 'Staff Only', '£695/yr'].map((b, i) => (
                            <span key={i} className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f4f7fb] border border-[#e5eaf0] text-[#1d4c73] text-xs font-bold shadow-sm">
                                <BrandIcon name="CheckCircle" color="green" size={12} weight="fill" />
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AnimikdemiCpdPage;
