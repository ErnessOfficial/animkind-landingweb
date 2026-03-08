import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const CpdAccreditationPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Nuestra Acreditación CPD – AnImiKind' : 'Our CPD Accreditation – AnImiKind';
    }, [lang]);

    const features = [
        {
            iconName: 'Flag' as const,
            brandColor: 'navy' as const,
            accentHex: '#1d4c73',
            title: es ? 'Alineación KCSIE 2026' : 'KCSIE 2026 Alignment',
            body: es
                ? 'Contenido preparado para el futuro, alineado con los estándares KCSIE 2026 anticipados y todos los marcos de salvaguarda vigentes del Reino Unido, incluidos Prevent y CEOP.'
                : 'Future-proofed content aligned with anticipated KCSIE 2026 standards and all current UK safeguarding frameworks, including Prevent and CEOP.',
        },
        {
            iconName: 'Certificate' as const,
            brandColor: 'green' as const,
            accentHex: '#0dc383',
            title: es ? 'Certificación Individual del Personal' : 'Individual Staff Certification',
            body: es
                ? 'Se emiten certificados CPD individuales a todos los miembros del personal participantes, verificables y reconocidos en todo el sector educativo del Reino Unido.'
                : 'Individual CPD certificates issued to all participating staff members — verifiable and recognised across the entire UK education sector.',
        },
        {
            iconName: 'Star' as const,
            brandColor: 'gold' as const,
            accentHex: '#eec843',
            title: es ? 'Certificación Oro Escolar' : 'Gold School Certification',
            body: es
                ? 'Reconocimiento institucional oficial para las escuelas que completen el programa completo, con un sello de excelencia distintivo de AnimiKind Akademi.'
                : 'Official institutional recognition for schools completing the full programme — with a distinctive AnimiKind Akademi seal of excellence.',
        },
        {
            iconName: 'Brain' as const,
            brandColor: 'navy' as const,
            accentHex: '#1d4c73',
            title: es ? 'Fundamentos de Ciencia del Comportamiento' : 'Behavioural Science Foundations',
            body: es
                ? 'El currículo se basa en investigación de vanguardia sobre inteligencia emocional, ciencia del comportamiento y psicología educativa, garantizando una base académica sólida.'
                : 'The curriculum is grounded in cutting-edge research on emotional intelligence, behavioural science, and educational psychology — ensuring a robust academic foundation.',
        },
        {
            iconName: 'Laptop' as const,
            brandColor: 'green' as const,
            accentHex: '#0dc383',
            title: es ? 'Formación Flexible e Híbrida' : 'Flexible Hybrid Delivery',
            body: es
                ? 'Módulos disponibles en modalidad presencial y en línea, diseñados para encajar en el horario de las escuelas sin interrumpir el tiempo de enseñanza ni sobrecargar al personal.'
                : 'Modules available in-person and online, designed to fit around school timetables without interrupting teaching time or overwhelming staff schedules.',
        },
        {
            iconName: 'TrendUp' as const,
            brandColor: 'gold' as const,
            accentHex: '#eec843',
            title: es ? 'Impacto Medible y Demostrable' : 'Measurable & Demonstrable Impact',
            body: es
                ? 'Las escuelas que completan nuestro programa obtienen una ventaja demostrativa para que Ofsted valore su disposición sobre desarrollo personal como «Sobresaliente».'
                : "Schools completing our programme gain a demonstrable advantage for Ofsted to rate their personal development provision as 'Outstanding'.",
        },
    ];

    return (
        <div className="pt-16">

            {/* ══ SECTION 1 — HERO ══ */}
            <section className="relative w-full min-h-[480px] flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f3a] via-[#1d4c73] to-[#1e2c29]" />

                {/* Subtle grid texture */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 10 }).map((_, col) =>
                        Array.from({ length: 6 }).map((_, row) => (
                            <rect key={`${col}-${row}`}
                                x={col * 120 + 12} y={row * 72 + 12} width={96} height={48} rx={8}
                                fill="none" stroke="#eec843" strokeWidth="0.6"
                            />
                        ))
                    )}
                    {[80, 152, 224, 296, 368, 440].map((y, i) => (
                        <line key={i} x1={0} y1={y} x2={1200} y2={y} stroke="#0dc383" strokeWidth="0.5" strokeDasharray="10 8" />
                    ))}
                </svg>

                {/* Certificate watermark */}
                <div className="absolute right-0 top-0 h-full w-[480px] flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Certificate" color="gold" size={440} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-14">
                    {/* Left: text */}
                    <div className="flex-1 text-white space-y-6 max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eec843]/20 border border-[#eec843]/40 text-[#eec843] text-xs font-bold tracking-widest uppercase">
                            <BrandIcon name="Certificate" color="gold" size={14} weight="bold" />
                            {es ? 'Proveedor Aprobado #788968' : 'Approved Provider #788968'}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            {es
                                ? <>Akademi AnimiKind: Formación<br /><span className="text-[#eec843]">Certificada por CPD</span> para Escuelas Británicas</>
                                : <>AnimiKind Akademi: <span className="text-[#eec843]">CPD-Certified</span><br />Training for British Schools</>}
                        </h1>

                        <p className="text-white/80 text-lg leading-relaxed">
                            {es
                                ? 'Nuestros programas de formación están oficialmente acreditados por el Servicio de Certificación CPD, asegurando los más altos estándares de desarrollo profesional para el personal escolar. El contenido está alineado con KCSIE y los estándares profesionales de todo el sector educativo del Reino Unido.'
                                : 'Our training programmes are officially accredited by the CPD Certification Service, ensuring the highest standards of professional development for school staff. Content is aligned with KCSIE and professional standards across the UK education sector.'}
                        </p>

                        <div className="flex flex-wrap gap-3 pt-1">
                            {(es
                                ? ['KCSIE 2026', 'Prevent & CEOP', 'Orientación Ofsted', 'Proveedor #788968']
                                : ['KCSIE 2026', 'Prevent & CEOP', 'Ofsted-Ready', 'Provider #788968']
                            ).map((tag, i) => (
                                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                    <BrandIcon name="CheckCircle" color="gold" size={13} weight="fill" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: CPD badge + number */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-6">
                        {/* CPD logo in a styled frame */}
                        <div className="relative w-52 h-52 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full bg-white/5 border-2 border-[#eec843]/30 animate-pulse" />
                            <div className="absolute inset-3 rounded-full bg-white/8 border border-[#eec843]/20" />
                            <img
                                src={cloudinaryMedia.header.cpdLogo}
                                alt="CPD Certified Logo"
                                className="relative z-10 h-32 w-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                        {/* Provider badge */}
                        <div className="bg-[#eec843]/15 border border-[#eec843]/40 rounded-2xl px-6 py-3 text-center">
                            <p className="text-[#eec843] text-xs font-bold tracking-widest uppercase">{es ? 'Proveedor Aprobado' : 'Approved Provider'}</p>
                            <p className="text-white text-3xl font-extrabold tracking-tight">#788968</p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes floatCpd { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      `}</style>

            <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
      `}</style>

            {/* ══ SECTION 2 — WHAT CPD MEANS ══ */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-[#e5eaf0]">
                        {/* Left — dark panel */}
                        <div className="bg-[#1d4c73] p-12 lg:p-16 flex flex-col justify-center gap-8">
                            <div className="flex items-center gap-4">
                                <IconBadge name="BookOpen" color="gold" size="lg" bg="rgba(238,200,67,0.15)" />
                                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                                    {es ? '¿Qué significa la acreditación CPD?' : 'What Does CPD Accreditation Mean?'}
                                </h2>
                            </div>
                            <p className="text-white/75 text-lg leading-relaxed">
                                {es
                                    ? 'El Continuing Professional Development (CPD) es el proceso mediante el cual los profesionales mantienen, mejoran y amplían sus conocimientos y habilidades a lo largo de su carrera. La acreditación CPD de nuestros programas garantiza que el contenido ha sido evaluado de forma independiente y cumple los más altos estándares de rigor pedagógico y relevancia práctica.'
                                    : 'Continuing Professional Development (CPD) is the process by which professionals maintain, improve, and broaden their knowledge and skills throughout their careers. CPD accreditation of our programmes guarantees that the content has been independently evaluated and meets the highest standards of pedagogical rigour and practical relevance.'}
                            </p>
                            <div className="flex flex-col gap-4 mt-2">
                                {(es
                                    ? ['Evaluado de forma independiente por el Servicio de Certificación CPD', 'Alineado con los requisitos de KCSIE y la Ley de Seguridad Online', 'Reconocido en todo el sector educativo del Reino Unido']
                                    : ['Independently evaluated by the CPD Certification Service', 'Aligned with KCSIE and Online Safety Act requirements', 'Recognised across the entire UK education sector']
                                ).map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <BrandIcon name="CheckCircle" color="gold" size={20} weight="fill" />
                                        <span className="text-white/85 text-sm leading-relaxed font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — light panel with stats */}
                        <div className="bg-[#f4f7fb] p-12 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-[#1e2c29] mb-8 tracking-tight">
                                {es ? 'Nuestros Programas en Cifras' : 'Our Programme at a Glance'}
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { val: '#788968', label: es ? 'Número de Proveedor Aprobado' : 'Approved Provider Number', icon: 'Certificate' as const, color: 'navy' as const },
                                    { val: '5+', label: es ? 'Módulos de Formación CPD' : 'CPD Training Modules', icon: 'BookOpen' as const, color: 'green' as const },
                                    { val: '10h', label: es ? 'Horas de DSL ahorradas / semana' : 'DSL Hours Saved / Week', icon: 'Clock' as const, color: 'gold' as const },
                                    { val: '100%', label: es ? 'Alineación con KCSIE 2026' : 'KCSIE 2026 Alignment', icon: 'ShieldCheck' as const, color: 'navy' as const },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white rounded-2xl p-5 border border-[#e5eaf0] shadow-sm hover:shadow-lg transition-shadow animate-fadeSlideUp" style={{ animationDelay: `${i * 100}ms` }}>
                                        <div className="mb-3">
                                            <IconBadge name={stat.icon} color={stat.color} size="sm" />
                                        </div>
                                        <div className="text-2xl font-extrabold text-[#1e2c29] mb-1 tabular-nums">{stat.val}</div>
                                        <div className="text-xs text-[#1d4c73]/65 font-semibold leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ SECTION 3 — 6 FEATURES GRID ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Lo Que Incluye' : 'What Is Included'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Un Programa de Formación Completo' : 'A Complete Training Programme'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Seis pilares de excelencia que hacen de Animikind Akademi el estándar definitivo en formación de salvaguarda escolar.'
                                : 'Six pillars of excellence that make Animikind Akademi the definitive standard in school safeguarding training.'}
                        </p>
                    </div>

                    {/* 3 + 2 + 1 grid — 3 top, 3 bottom */}
                    <div className="grid md:grid-cols-3 gap-7">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="group flex flex-col bg-white rounded-[1.75rem] border-2 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeSlideUp"
                                style={{ borderColor: `${item.accentHex}44`, animationDelay: `${i * 90}ms` }}
                            >
                                {/* Dark icon header */}
                                <div className="flex items-center justify-center px-6 py-9" style={{ background: '#1d4c73' }}>
                                    <div
                                        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                                        style={item.brandColor === 'navy'
                                            ? { background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }
                                            : { background: `${item.accentHex}22`, border: `2px solid ${item.accentHex}55` }}
                                    >
                                        <BrandIcon
                                            name={item.iconName}
                                            color={item.brandColor === 'navy' ? 'white' : item.brandColor}
                                            size={38} weight="duotone"
                                        />
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col flex-1 px-7 py-6">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase mb-2" style={{ color: item.accentHex }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-lg font-extrabold text-[#1e2c29] mb-3 leading-snug">{item.title}</h3>
                                    <p className="text-[#1d4c73]/75 text-sm leading-relaxed flex-1">{item.body}</p>
                                </div>

                                {/* Hover accent bar */}
                                <div
                                    className="h-[3px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                    style={{ background: `linear-gradient(to right, ${item.accentHex}, ${item.accentHex}44)` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — CTA ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <IconBadge name="Sparkle" color="gold" size="lg" bg="rgba(238,200,67,0.15)" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">
                        {es ? '¿Listo para Certificar a Tu Equipo?' : 'Ready to Certify Your Team?'}
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Descubre cómo el programa CPD de AnimiKind Akademi puede transformar la capacidad de salvaguarda de tu escuela y preparar a tu personal para los estándares KCSIE 2026.'
                            : "Discover how AnimiKind Akademi's CPD programme can transform your school's safeguarding capacity and prepare your staff for KCSIE 2026 standards."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/demo/"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#eec843] to-[#d4af37] text-[#1e2c29] font-bold text-base hover:shadow-2xl hover:shadow-[#eec843]/30 transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            <BrandIcon name="Calendar" color="dark" size={18} weight="bold" />
                            {es ? 'Reservar Consulta de Formación' : 'Book a Training Consultation'}
                        </Link>
                        <Link
                            to="/about/why-us/"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all transform hover:-translate-y-1"
                        >
                            <BrandIcon name="ArrowCircleRight" color="green" size={18} weight="bold" />
                            {es ? 'Por Qué AnimiKind' : 'Why AnimiKind'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CpdAccreditationPage;
