import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { IconBadge, BrandIcon } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const OriginsPage: React.FC = () => {
    const { lang } = useLanguage();

    useEffect(() => {
        document.title = lang === 'en'
            ? 'Who We Are – AnImiKind'
            : 'Quiénes Somos – AnImiKind';
    }, [lang]);

    const es = lang === 'es';

    return (
        <div className="pt-16">

            {/* ── SECTION 1: HERO BANNER ── */}
            <section className="relative w-full min-h-[480px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cloudinaryMedia.about.whoWeAreHeroBanner})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/90 via-[#0b1f3a]/75 to-[#0b1f3a]/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-10">

                    {/* Ani mascot */}
                    <div className="flex-shrink-0 order-2 lg:order-1">
                        <img
                            src={cloudinaryMedia.about.mascot}
                            alt="Ani mascot"
                            className="w-48 md:w-64 lg:w-72 drop-shadow-2xl animate-float"
                        />
                    </div>

                    {/* Text block */}
                    <div className="order-1 lg:order-2 flex-1 text-white space-y-5 max-w-2xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                            {es ? 'Quiénes Somos' : 'Who We Are'}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            {es
                                ? <>{es ? 'Los Arquitectos de la' : 'The Architects of the'}<br /><span className="text-[#0dc383]">{es ? 'Primera Red de Seguridad' : "UK's First Digital"}</span><br />{es ? 'Emocional Digital del Reino Unido' : 'Emotional Safety Net'}</>
                                : <>The Architects of the<br /><span className="text-[#0dc383]">UK's First Digital</span><br />Emotional Safety Net</>}
                        </h1>

                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                            {es
                                ? 'AnimiKind Limited es una empresa pionera de EdHealthTech y SafetyTech con sede en Londres. Operamos en la intersección fundamental de la ciencia del comportamiento, la tecnología sanitaria avanzada y el cumplimiento normativo.'
                                : 'AnimiKind Limited is a London-based EdHealthTech and SafetyTech pioneer. We operate at the pivotal intersection of behavioural science, advanced health technology, and statutory compliance.'}
                        </p>

                        {/* Keyword pills with Phosphor icons */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {([
                                { icon: 'Robot' as const, label: es ? 'Plataforma EAI Proactiva' : 'Proactive EAI Platform' },
                                { icon: 'MagnifyingGlass' as const, label: es ? 'Identificando' : 'Identifying' },
                                { icon: 'Faders' as const, label: es ? 'Gestionando' : 'Managing' },
                                { icon: 'ShieldCheck' as const, label: es ? 'Previniendo el Acoso' : 'Preventing Bullying' },
                            ]).map((kw, i) => (
                                <span
                                    key={i}
                                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold backdrop-blur-sm"
                                >
                                    <BrandIcon name={kw.icon} color="green" size={14} weight="bold" />
                                    {kw.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: icon wheel */}
                    <div className="hidden lg:flex order-3 flex-shrink-0 flex-col items-center gap-4">
                        <div className="relative w-48 h-48">
                            <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#0dc383]/20 border-2 border-[#0dc383]/50 flex items-center justify-center">
                                <BrandIcon name="ShieldCheck" color="green" size={28} weight="duotone" />
                            </div>
                            {([
                                { top: '0%', left: '50%', icon: 'Brain' as const },
                                { top: '50%', left: '100%', icon: 'Shield' as const },
                                { top: '100%', left: '50%', icon: 'Certificate' as const },
                                { top: '50%', left: '0%', icon: 'Network' as const },
                            ]).map((node, i) => (
                                <div
                                    key={i}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1d4c73]/80 border-2 border-[#0dc383]/40 flex items-center justify-center shadow-xl"
                                    style={{ top: node.top, left: node.left }}
                                >
                                    <BrandIcon name={node.icon} color="green" size={20} weight="duotone" />
                                </div>
                            ))}
                            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 192 192">
                                <line x1="96" y1="24" x2="96" y2="96" stroke="#0dc383" strokeWidth="1.5" strokeDasharray="4 3" />
                                <line x1="168" y1="96" x2="96" y2="96" stroke="#0dc383" strokeWidth="1.5" strokeDasharray="4 3" />
                                <line x1="96" y1="168" x2="96" y2="96" stroke="#0dc383" strokeWidth="1.5" strokeDasharray="4 3" />
                                <line x1="24" y1="96" x2="96" y2="96" stroke="#0dc383" strokeWidth="1.5" strokeDasharray="4 3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: OUR STORY ── */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mb-12 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase">
                            {es ? 'Nuestra Historia' : 'Our Story'}
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Enfrentando la «Crisis Silenciosa»' : 'Confronting the "Silent Crisis"'}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl border border-[#1d4c73]/10">
                        {/* Left: photo with stats */}
                        <div className="relative min-h-[320px] lg:min-h-[480px]">
                            <img
                                src={cloudinaryMedia.about.whoWeAreConfrontingLeft}
                                alt="School corridor"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f4f7fb] lg:bg-none" />
                            <div className="absolute bottom-6 left-6 flex gap-3">
                                <div className="bg-[#0dc383] text-white rounded-2xl px-5 py-3 shadow-lg text-center">
                                    <span className="block text-3xl font-extrabold">25%+</span>
                                    <span className="text-xs font-semibold leading-tight block max-w-[90px]">{es ? 'alumnos víctimas de acoso' : 'pupils report being bullied'}</span>
                                </div>
                                <div className="bg-[#1d4c73] text-white rounded-2xl px-5 py-3 shadow-lg text-center">
                                    <span className="block text-3xl font-extrabold">20%</span>
                                    <span className="text-xs font-semibold leading-tight block max-w-[90px]">{es ? 'abuso online no reportado' : 'online abuse unreported'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: story points */}
                        <div className="bg-white p-10 lg:p-14 flex flex-col justify-center gap-8">
                            {([
                                {
                                    icon: 'Buildings' as const,
                                    color: 'navy' as const,
                                    boldLabel: es ? 'El Origen:' : 'The Origin:',
                                    text: es
                                        ? 'Fundada en enero de 2026 por Ernesto Mendoza Maldonado, AnimiKind nació de una misión única y urgente: desmantelar la «Crisis Silenciosa» dentro del sistema educativo británico.'
                                        : 'Founded in January 2026 by Ernesto Mendoza Maldonado, AnimiKind was born from a singular, urgent mission: to dismantle the "Silent Crisis" within the British education system.',
                                },
                                {
                                    icon: 'ChartBar' as const,
                                    color: 'navy' as const,
                                    boldLabel: es ? 'Las Estadísticas:' : 'The Statistics:',
                                    text: es
                                        ? 'Nuestra urgencia está impulsada por una realidad asombrosa: más del 25% de los alumnos del Reino Unido de 7 a 13 años afirman ser víctimas de acoso, mientras que casi el 20% del abuso en línea dentro de las escuelas no se denuncia en absoluto.'
                                        : 'Our urgency is driven by a staggering reality: over 25% of UK pupils aged 7–13 report being victims of bullying, while nearly 20% of online abuse within schools goes entirely unreported.',
                                },
                                {
                                    icon: 'TrendUp' as const,
                                    color: 'green' as const,
                                    boldLabel: es ? 'El Camino:' : 'The Journey:',
                                    text: es
                                        ? 'Evolucionamos de un concepto visionario a un ecosistema integrado y sólido diseñado para convertir los gritos de ayuda silenciosos en información procesable.'
                                        : 'We evolved from a visionary concept into a robust, integrated ecosystem designed to turn silent cries for help into actionable insights.',
                                    highlight: true,
                                },
                            ]).map((item, i) => (
                                <div key={i} className="flex gap-5 group animate-fadeSlideUp" style={{ animationDelay: `${i * 100}ms` }}>
                                    <IconBadge name={item.icon} color={item.color} size="md" />
                                    <div>
                                        <p className={`text-base leading-relaxed ${item.highlight ? 'text-[#1d4c73]' : 'text-[#1d4c73]/80'}`}>
                                            <strong className="text-[#1e2c29] font-bold">{item.boldLabel}</strong>{' '}{item.text}
                                        </p>
                                        {item.highlight && (
                                            <p className="mt-2 text-sm font-semibold text-[#0dc383] flex items-center gap-1.5">
                                                <BrandIcon name="ArrowCircleRight" color="green" size={16} weight="fill" />
                                                {es ? 'La Crisis Silenciosa se convierte en Información Procesable' : 'Silent Crisis is born to Actionable Insights'}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: MISSION / VISION / PURPOSE CARDS ── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                            {es ? 'Misión, Visión y Propósito' : 'Mission, Vision & Core Purpose'}
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'Nuestra Brújula' : 'Our Compass'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {([
                            {
                                color: 'from-[#0dc383]/10 to-[#0dc383]/5',
                                border: 'border-[#0dc383]/30',
                                accent: '#0dc383' as const,
                                brandColor: 'green' as const,
                                icon: 'Target' as const,
                                title: es ? 'Nuestra Misión' : 'Our Mission',
                                badge: es ? 'Acceso Democrático vía IA Ética' : 'Democratise Access via Ethical AI',
                                body: es
                                    ? 'Democratizar el acceso al bienestar emocional y la seguridad escolar mediante el uso ético de la Inteligencia Artificial, proporcionando herramientas proactivas que conectan a estudiantes, familias y escuelas en un ecosistema de protección integral.'
                                    : 'To democratise access to emotional well-being and school safety through the ethical use of Artificial Intelligence, providing proactive tools that connect students, families, and schools in a comprehensive protection ecosystem.',
                            },
                            {
                                color: 'from-[#1d4c73]/10 to-[#1d4c73]/5',
                                border: 'border-[#1d4c73]/30',
                                accent: '#1d4c73' as const,
                                brandColor: 'navy' as const,
                                icon: 'Globe' as const,
                                title: es ? 'Nuestra Visión' : 'Our Vision',
                                badge: es ? 'Estándar Global de Prevención del Acoso' : 'Global Standard for Bullying Prevention',
                                body: es
                                    ? 'Convertirnos en el estándar tecnológico global definitivo para la prevención del acoso y la gestión de la salud mental adolescente, eliminando las barreras de comunicación entre los niños y sus redes de apoyo.'
                                    : 'To become the definitive global technological standard for bullying prevention and adolescent mental health management, eliminating communication barriers between children and their support networks.',
                            },
                            {
                                color: 'from-[#eec843]/10 to-[#eec843]/5',
                                border: 'border-[#eec843]/40',
                                accent: '#eec843' as const,
                                brandColor: 'gold' as const,
                                icon: 'Heart' as const,
                                title: es ? 'Propósito Central' : 'Core Purpose',
                                badge: es ? 'Salvaguardar el Futuro Emocional' : 'Safeguard Emotional Future',
                                body: es
                                    ? 'Proteger el futuro emocional de la próxima generación desmantelando el silencio que rodea al abuso escolar a través de la Inteligencia Amable (Kind Intelligence).'
                                    : 'To safeguard the emotional future of the next generation by dismantling the silence surrounding school-based abuse through Kind Intelligence.',
                            },
                        ]).map((card, i) => (
                            <div
                                key={i}
                                className={`group relative p-9 rounded-[2rem] bg-gradient-to-br ${card.color} border ${card.border} hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 cursor-default animate-fadeSlideUp`}
                                style={{ animationDelay: `${i * 120}ms` }}
                            >
                                <div className="mb-5">
                                    <IconBadge name={card.icon} color={card.brandColor} size="lg" />
                                </div>
                                <span
                                    className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4"
                                    style={{ background: `${card.accent}22`, color: card.accent, border: `1px solid ${card.accent}55` }}
                                >
                                    {card.badge}
                                </span>
                                <h3 className="text-xl font-extrabold text-[#1e2c29] mb-4">{card.title}</h3>
                                <p className="text-[#1d4c73]/80 leading-relaxed text-sm">{card.body}</p>
                                <div
                                    className="absolute bottom-0 left-8 right-8 h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                                    style={{ background: card.accent }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: CORE PHILOSOPHY ── */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase">
                            {es ? 'Filosofía Central y Principios Rectores' : 'Core Philosophy & Guiding Principles'}
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? 'El Factor Humano es Insustituible' : 'The Human Factor is Irreplaceable'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {es
                                ? 'Tecnología y humanidad girando juntas — siempre al servicio de las personas.'
                                : 'Technology and humanity revolving together — always in service of people.'}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0dc383]/60 via-[#1d4c73]/40 to-[#eec843]/40 -translate-x-1/2" />

                        <div className="space-y-12">
                            {([
                                {
                                    side: 'left' as const,
                                    icon: 'GearSix' as const,
                                    brandColor: 'green' as const,
                                    accentHex: '#0dc383',
                                    title: es ? 'Tecnología al Servicio de la Humanidad' : 'Technology in Service of Humanity',
                                    body: es
                                        ? 'Diseñamos herramientas, no sustitutos. Creemos que el factor humano es insustituible; nuestra EAI sirve para empoderar a los educadores y responsables de protección a tomar decisiones mejores, más rápidas e informadas.'
                                        : 'We design tools, not replacements. We believe the human factor is irreplaceable; our EAI serves to empower educators and safeguarding leads to make better, faster, and more informed decisions.',
                                    diagram: (
                                        <div className="flex items-center gap-3 mt-5 flex-wrap">
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#0dc383]/30 text-sm font-bold text-[#1e2c29]">
                                                <BrandIcon name="Laptop" color="navy" size={14} weight="duotone" /> Technology
                                            </span>
                                            <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0dc383] text-white text-sm font-bold">
                                                <BrandIcon name="Brain" color="white" size={14} weight="duotone" /> EAI
                                            </span>
                                            <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#0dc383]/30 text-sm font-bold text-[#1e2c29]">
                                                <BrandIcon name="UsersThree" color="navy" size={14} weight="duotone" /> Human Capacity
                                            </span>
                                        </div>
                                    ),
                                },
                                {
                                    side: 'right' as const,
                                    icon: 'Shield' as const,
                                    brandColor: 'navy' as const,
                                    accentHex: '#1d4c73',
                                    title: es ? 'Prevención, No Solo Reacción' : 'Prevention, Not Just Reaction',
                                    body: es
                                        ? 'Rechazamos el modelo post-incidente. Nuestro foco está en la identificación temprana y la prevención proactiva y empática que protege el bienestar del niño en tiempo real.'
                                        : "We reject the post-incident model. Our focus is on early identification and proactive, empathetic prevention that protects the child's well-being in real-time.",
                                    diagram: (
                                        <div className="flex items-center gap-3 mt-5 flex-wrap">
                                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-sm font-bold text-[#1d4c73]">
                                                <BrandIcon name="Eye" color="navy" size={14} weight="duotone" />
                                                {es ? 'Detección Temprana' : 'Early Detection'}
                                            </span>
                                            <BrandIcon name="ArrowRight" color="navy" size={18} weight="bold" />
                                            <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1d4c73] text-white text-sm font-bold">
                                                <BrandIcon name="ShieldCheck" color="white" size={14} weight="duotone" />
                                                {es ? 'Prevención' : 'Prevention'}
                                            </span>
                                        </div>
                                    ),
                                },
                                {
                                    side: 'left' as const,
                                    icon: 'Scales' as const,
                                    brandColor: 'gold' as const,
                                    accentHex: '#eec843',
                                    title: es ? 'Beneficio con Integridad' : 'Profit With Integrity',
                                    body: es
                                        ? 'Nuestro modelo «Propósito y Beneficio» garantiza que el éxito comercial y el impacto social se refuerzan mutuamente. La viabilidad comercial es el motor de nuestra misión, proporcionando la sostenibilidad financiera necesaria para apoyar a las escuelas y autoridades locales a largo plazo.'
                                        : 'Our "Purpose & Profit" model ensures that commercial success and social impact are mutually reinforcing. Commercial viability is the engine of our mission, providing the financial sustainability required to support schools and local authorities over the long term.',
                                    diagram: (
                                        <div className="flex items-center gap-6 mt-5">
                                            <div className="text-center">
                                                <IconBadge name="Heart" color="gold" size="sm" />
                                                <span className="text-xs font-bold text-[#1e2c29] block mt-1">{es ? 'Propósito' : 'Purpose'}</span>
                                            </div>
                                            <div className="flex-1 h-px bg-gradient-to-r from-[#eec843] to-[#eec843]/50" />
                                            <div className="text-center">
                                                <IconBadge name="TrendUp" color="navy" size="sm" />
                                                <span className="text-xs font-bold text-[#1e2c29] block mt-1">{es ? 'Beneficio' : 'Profit'}</span>
                                            </div>
                                            <p className="text-xs text-[#1d4c73]/60 max-w-[120px] leading-tight">
                                                {es ? 'El éxito comercial refuerza el impacto social' : 'Commercial Success reinforces Social Impact'}
                                            </p>
                                        </div>
                                    ),
                                },
                            ]).map((principle, i) => (
                                <div
                                    key={i}
                                    className={`relative flex flex-col md:flex-row gap-0 items-stretch ${principle.side === 'right' ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="md:w-[calc(50%-2.5rem)] p-9 rounded-[2rem] bg-white border border-[#1d4c73]/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeSlideUp" style={{ animationDelay: `${i * 150}ms` }}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <IconBadge name={principle.icon} color={principle.brandColor} size="md" />
                                            <h3 className="text-xl font-extrabold text-[#1e2c29]">{principle.title}</h3>
                                        </div>
                                        <p className="text-[#1d4c73]/80 leading-relaxed text-sm">{principle.body}</p>
                                        {principle.diagram}
                                    </div>
                                    <div className="hidden md:flex w-20 items-center justify-center flex-shrink-0">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shadow-lg font-bold border-4 border-white z-10"
                                            style={{ background: principle.accentHex }}
                                        >
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 bg-[#1d4c73]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                        {es ? '¿Listo para Transformar Tu Escuela?' : 'Ready to Transform Your School?'}
                    </h2>
                    <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Descubre cómo AnImiKind puede apoyar la estrategia de bienestar y protección de tu institución.'
                            : "Discover how AnImiKind can support your institution's safeguarding and wellbeing strategy."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/demo/"
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0bb075] text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            <BrandIcon name="Calendar" color="white" size={20} weight="bold" />
                            {es ? 'Reservar Demo Gratuita' : 'Book a Free Demo'}
                        </Link>
                        <Link
                            to="/ecosystem/emotional-ai/"
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white/10 border border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1"
                        >
                            <BrandIcon name="ArrowCircleRight" color="green" size={20} weight="bold" />
                            {es ? 'Explorar el Ecosistema' : 'Explore the Ecosystem'}
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
      `}</style>
        </div>
    );
};

export default OriginsPage;
