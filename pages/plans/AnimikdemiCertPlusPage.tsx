import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon, IconBadge } from '../../components/BrandIcon';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const AnimikdemiCertPlusPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es
            ? 'AnimiKdemi – Certification Plus – AnImiKind'
            : 'AnimiKdemi – Certification Plus – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[460px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0f2d50] to-[#0a3d28]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 7 }).map((_, c) => Array.from({ length: 5 }).map((_, r) => (
                        <circle key={`${c}-${r}`} cx={c * 200 + 80} cy={r * 100 + 50} r="3" fill="#0dc383" />
                    )))}
                    {[[80, 50, 280, 150], [280, 150, 500, 60], [500, 60, 700, 160], [700, 160, 900, 70], [160, 350, 460, 310], [460, 310, 760, 360]].map(([x1, y1, x2, y2], i) => (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="5 6" />
                    ))}
                </svg>
                <div className="absolute right-0 top-0 h-full flex items-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Certificate" color="green" size={440} weight="duotone" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center w-full space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase">
                        <BrandIcon name="Certificate" color="green" size={13} weight="bold" />
                        {es ? 'Personal + Alumnos · Certificación Escolar Completa' : 'Staff + Students · Full School Certification'}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        AnimiKdemi™<br />
                        <span className="text-[#0dc383]">Certification Plus</span>
                    </h1>

                    <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
                        {es
                            ? 'No solo formes a tu personal — educa a tus alumnos. Un enfoque verdaderamente proactivo requiere una estrategia unificada que involucre a toda la comunidad escolar.'
                            : "Don't just train your staff — educate your students. A truly proactive approach to prevention requires a unified strategy that involves the entire school community."}
                    </p>

                    <div className="mx-auto w-full max-w-[220px] sm:max-w-[260px] rounded-[1.25rem] overflow-hidden border border-white/25 shadow-2xl">
                        <img
                            src={cloudinaryMedia.pricing.certificationHeroSupportImage}
                            alt="AnimiKdemi Certification Plus visual"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        {['CPD #788968', 'KCSIE 2026', 'OSA', es ? 'Personal + Alumnos' : 'Staff + Students', 'Ofsted Ready'].map((t, i) => (
                            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold">
                                <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Price pill */}
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="text-white/60 text-sm font-semibold">{es ? 'Licencia anual por centro' : 'Annual full-school licence'}</span>
                        <span className="text-3xl font-extrabold text-[#0dc383]">£1,450</span>
                        <span className="text-white/60 text-sm">/yr</span>
                    </div>
                </div>
            </section>

            {/* ══ INTRO ══ */}
            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center animate-fadeSlideUp">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5">
                        {es ? 'Paquete de Certificación Escolar Completa' : 'Comprehensive School Certification Package'}
                    </span>
                    <p className="text-[#1d4c73]/80 text-lg leading-relaxed">
                        {es
                            ? 'El plan Plus de AnimiKdemi™ es nuestro paquete integral de "Certificación Escolar". Cierra la brecha entre el cumplimiento del personal y la alfabetización emocional del alumnado, combinando el Desarrollo Profesional Continuo (CPD) acreditado para docentes con un aprendizaje inmersivo y gamificado para alumnos.'
                            : 'The AnimiKdemi™ Plus plan is our comprehensive "School Certification" package. It bridges the gap between staff compliance and student emotional literacy by combining accredited CPD for teachers with immersive, gamified learning for pupils.'}
                    </p>
                </div>
            </section>

            {/* ══ DUAL LEARNING PATH ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'El Doble Camino de Aprendizaje' : 'The Dual Learning Path'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {es ? <>Dos flujos, <span className="text-[#0dc383]">una comunidad más segura</span></> : <>Two streams, <span className="text-[#0dc383]">one safer community</span></>}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/65 max-w-xl mx-auto">
                            {es ? 'Acceso completo al centro en nuestra plataforma educativa impulsada por IA.' : 'Full school access to our AI-driven educational platform.'}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Path 1 — Staff */}
                        <div className="bg-white rounded-[2rem] border-2 border-[#b07d1f]/30 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeSlideUp">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(238,200,67,0.15)', border: '2px solid rgba(238,200,67,0.4)' }}>
                                    <BrandIcon name="Graduation" color="gold" size={28} weight="duotone" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#b07d1f]">{es ? 'Camino 1 · Personal' : 'Path 1 · Staff'}</span>
                                    <h3 className="text-xl font-extrabold text-[#1e2c29]">{es ? 'CPD Simulator para Docentes' : 'Staff CPD Simulator'}</h3>
                                </div>
                            </div>
                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed mb-5">
                                {es
                                    ? 'Tus educadores y DSLs reciben acceso completo al simulador de rol impulsado por IA. El personal gana créditos CPD oficialmente acreditados mientras practica de forma segura cómo manejar conversaciones difíciles y sensibles de salvaguarda.'
                                    : 'Your educators and DSLs receive full access to the AI-driven roleplay simulator. Staff earn officially accredited CPD credits while safely practising how to handle difficult and sensitive safeguarding conversations.'}
                            </p>
                            <ul className="space-y-2.5">
                                {(es ? [
                                    'Simulaciones de rol con IA para DSLs',
                                    'Créditos CPD oficialmente acreditados (#788968)',
                                    'Retroalimentación IA en tiempo real alineada al KCSIE',
                                    'Certificación por niveles: Foundational · Advanced · Expert',
                                ] : [
                                    'AI-driven roleplay simulations for DSLs',
                                    'Officially accredited CPD credits (#788968)',
                                    'Real-time AI feedback aligned to KCSIE',
                                    'Tiered certification: Foundational · Advanced · Expert',
                                ]).map((f, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#1d4c73]/75 font-medium">
                                        <BrandIcon name="CheckCircle" color="gold" size={15} weight="fill" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Path 2 — Students */}
                        <div className="bg-white rounded-[2rem] border-2 border-[#0dc383]/30 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fadeSlideUp" style={{ animationDelay: '80ms' }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'rgba(13,195,131,0.15)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name="Users" color="green" size={28} weight="duotone" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#0dc383]">{es ? 'Camino 2 · Alumnos' : 'Path 2 · Students'}</span>
                                    <h3 className="text-xl font-extrabold text-[#1e2c29]">{es ? 'Aprendizaje Gamificado para Alumnos' : 'Student Gamified Learning'}</h3>
                                </div>
                            </div>
                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed mb-5">
                                {es
                                    ? 'Los alumnos disponen de módulos educativos atractivos y adaptados a su edad, centrados en el Acoso, el Ciberacoso y la Resiliencia Emocional. Creemos que la verdadera prevención empieza con una educación que empodera.'
                                    : 'Students are equipped with engaging, age-appropriate educational modules focused on Bullying, Cyberbullying, and Emotional Resilience. True prevention starts with empowering education.'}
                            </p>
                            <ul className="space-y-2.5">
                                {(es ? [
                                    'Módulos gamificados sobre acoso y ciberacoso',
                                    'Educación en resiliencia emocional adaptada a la edad',
                                    'Seguimiento individual del progreso del alumno',
                                    'Integrado con el panel DSL del centro',
                                ] : [
                                    'Gamified modules on bullying & cyberbullying',
                                    'Age-appropriate emotional resilience education',
                                    'Individual student progress tracking',
                                    'Integrated with school DSL dashboard',
                                ]).map((f, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#1d4c73]/75 font-medium">
                                        <BrandIcon name="CheckCircle" color="green" size={15} weight="fill" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 03PRICING IMAGE ══ */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#e5eaf0] animate-fadeSlideUp">
                        <img
                            src={cloudinaryMedia.pricing.certificationPlusPage}
                            alt="AnimiKdemi Certification Plus — Plan overview"
                            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* ══ KEY ADVANTAGES — 3 cards ══ */}
            <section className="py-20 bg-[#1d4c73]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Ventajas Clave & Valor Comercial' : 'Key Advantages & Commercial Value'}
                        </span>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            {es ? 'Por qué Certification Plus marca la diferencia' : 'Why Certification Plus makes the difference'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'Certificate' as const, color: 'gold' as const,
                                title: es ? 'Estatus de Escuela Certificada AnimiKind' : 'AnimiKind Certified School Status',
                                body: es
                                    ? 'Al implementarlo, tu institución obtiene la exclusiva insignia digital y certificación "Certified Safe School". Mostrarla en el sitio web y el prospecto del centro demuestra a padres e inspectores de Ofsted tu compromiso con la excelencia proactiva en bienestar.'
                                    : 'Upon implementation, your institution earns the exclusive "Certified Safe School" digital badge and certification — a powerful demonstration to parents and Ofsted inspectors of your commitment to proactive wellbeing excellence.',
                            },
                            {
                                icon: 'ChartBar' as const, color: 'green' as const,
                                title: es ? 'Informes de Impacto Completos' : 'Comprehensive Impact Reporting',
                                body: es
                                    ? 'La plataforma proporciona datos accionables que permiten a tu equipo directivo hacer un seguimiento de las tasas de finalización y los niveles de comprensión tanto en los cohortes de personal como de alumnos.'
                                    : 'The platform provides actionable data, allowing your leadership team to track completion rates and comprehension levels across both staff and student cohorts.',
                            },
                            {
                                icon: 'Scales' as const, color: 'gold' as const,
                                title: es ? 'Alineación Estratégica de Presupuesto' : 'Strategic Budget Alignment',
                                body: es
                                    ? 'A £1.450 al año por licencia de sitio completo, este plan de nivel medio está perfectamente alineado con los presupuestos de PSHE y Salvaguarda, ideales para centros que necesitan demostrar salvaguarda proactiva y "Confianza y Cumplimiento" a Ofsted.'
                                    : 'Priced at £1,450 per year, this mid-tier plan is perfectly aligned for PSHE and Safeguarding budgets — designed for schools needing to demonstrate proactive safeguarding and "Trust & Compliance" to Ofsted.',
                            },
                        ].map((card, i) => (
                            <div key={i} className="flex flex-col rounded-[1.75rem] p-7 border-2 border-white/10 hover:border-[#0dc383]/40 hover:shadow-xl transition-all duration-300 animate-fadeSlideUp"
                                style={{ background: 'rgba(255,255,255,0.07)', animationDelay: `${i * 80}ms` }}>
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                                    style={{ background: 'rgba(13,195,131,0.18)', border: '2px solid rgba(13,195,131,0.4)' }}>
                                    <BrandIcon name={card.icon} color={card.color} size={24} weight="duotone" />
                                </div>
                                <h3 className="text-base font-extrabold text-white mb-3">{card.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ PRICING CARD ══ */}
            <section className="py-20 bg-[#f4f7fb]">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-[#e5eaf0] p-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                            <div className="flex items-center gap-4">
                                <IconBadge name="Certificate" color="green" size="md" bg="rgba(13,195,131,0.15)" />
                                <div>
                                    <h3 className="text-2xl font-extrabold text-[#1e2c29]">AnimiKdemi™ Plus</h3>
                                    <p className="text-[#0dc383] text-sm font-semibold">{es ? 'Certification Plus · Personal + Alumnos' : 'Certification Plus · Staff + Students'}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[#1d4c73]/45 text-xs font-semibold mb-1">{es ? 'Licencia anual completa' : 'Annual full-school licence'}</p>
                                <div className="flex items-end gap-1 justify-end">
                                    <span className="text-5xl font-extrabold text-[#1e2c29]">£1,450</span>
                                    <span className="text-[#1d4c73]/50 text-sm mb-1">{es ? '/año' : '/yr'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8 mx-auto w-full max-w-[220px] sm:max-w-[260px] rounded-[1.25rem] overflow-hidden border border-[#e5eaf0] shadow-lg">
                            <img
                                src={cloudinaryMedia.pricing.certificationHeroSupportImage}
                                alt="AnimiKdemi Certification Plus pricing visual"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 mb-8">
                            <div className="p-5 rounded-2xl" style={{ background: 'rgba(238,200,67,0.08)', border: '1.5px solid rgba(184,125,31,0.25)' }}>
                                <p className="text-[#b07d1f] text-xs font-extrabold tracking-widest uppercase mb-3">{es ? 'Personal' : 'Staff'}</p>
                                {(es ? ['CPD Simulator completo', 'Créditos CPD acreditados', 'Retroalimentación IA KCSIE', 'Certificación por niveles'] : ['Full CPD Simulator', 'Accredited CPD credits', 'KCSIE AI feedback', 'Tiered certification']).map((f, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-[#1d4c73]/70 font-medium mb-2">
                                        <BrandIcon name="CheckCircle" color="gold" size={14} weight="fill" />{f}
                                    </div>
                                ))}
                            </div>
                            <div className="p-5 rounded-2xl" style={{ background: 'rgba(13,195,131,0.08)', border: '1.5px solid rgba(13,195,131,0.25)' }}>
                                <p className="text-[#0dc383] text-xs font-extrabold tracking-widest uppercase mb-3">{es ? 'Alumnos' : 'Students'}</p>
                                {(es ? ['Módulos gamificados', 'Alfabetización en seguridad digital', 'Resiliencia emocional', 'Seguimiento del progreso'] : ['Gamified modules', 'Digital safety literacy', 'Emotional resilience', 'Progress tracking']).map((f, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-[#1d4c73]/70 font-medium mb-2">
                                        <BrandIcon name="CheckCircle" color="green" size={14} weight="fill" />{f}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certified School badge callout */}
                        <div className="flex items-center gap-4 p-5 rounded-2xl mb-8" style={{ background: 'linear-gradient(to right, rgba(13,195,131,0.08), rgba(29,76,115,0.06))', border: '1.5px solid rgba(13,195,131,0.25)' }}>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(13,195,131,0.15)', border: '1.5px solid rgba(13,195,131,0.35)' }}>
                                <BrandIcon name="Seal" color="green" size={20} weight="fill" />
                            </div>
                            <div>
                                <p className="text-[#1e2c29] font-extrabold text-sm">{es ? '🏅 Incluye: Insignia "Certified Safe School"' : '🏅 Includes: "Certified Safe School" Digital Badge'}</p>
                                <p className="text-[#1d4c73]/60 text-xs mt-0.5">{es ? 'Certificación digital exclusiva para el sitio web y prospecto del centro · Demostración a Ofsted' : 'Exclusive digital certification for school website & prospectus · Ofsted demonstration'}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link to="/contact/" className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all hover:-translate-y-0.5">
                                <BrandIcon name="Envelope" color="white" size={17} weight="bold" />
                                {es ? 'Contactar al KindTeam' : 'Contact the KindTeam'}
                            </Link>
                            <Link to="/demo/" className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all shadow-md hover:-translate-y-0.5">
                                <BrandIcon name="Calendar" color="green" size={17} weight="bold" />
                                {es ? 'Reservar Demo' : 'Book a Demo'}
                            </Link>
                        </div>
                        <p className="text-[#1d4c73]/35 text-xs text-center mt-4">
                            {es ? 'IVA no incluido · Alineado con presupuestos PSHE y Salvaguarda · Sin fricción burocrática' : 'VAT not included · Aligned with PSHE & Safeguarding budgets · No bureaucratic friction'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ══ CTA STRIP ══ */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center animate-fadeSlideUp">
                    <h2 className="text-2xl font-extrabold text-[#1e2c29] mb-4">
                        {es
                            ? '¿Listo para demostrar el compromiso de tu centro con el bienestar proactivo?'
                            : "Ready to demonstrate your school's commitment to proactive wellbeing?"}
                    </h2>
                    <p className="text-[#1d4c73]/65 leading-relaxed mb-8 max-w-2xl mx-auto">
                        {es
                            ? 'Sube de nivel a tu comunidad con AnimiKdemi™ Plus y gana tu certificación digital de Escuela Segura. Contacta al KindTeam hoy.'
                            : 'Upgrade your community to AnimiKdemi™ Plus and earn your digital Safe School certification. Contact the KindTeam today.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-base hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all hover:-translate-y-0.5">
                            <BrandIcon name="Envelope" color="white" size={18} weight="bold" />
                            {es ? 'Contactar al KindTeam' : 'Contact the KindTeam'}
                        </Link>
                        <Link to="/plans/animikind-core-360/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0f2d50] transition-all shadow-md hover:-translate-y-0.5">
                            <BrandIcon name="ArrowRight" color="green" size={18} weight="bold" />
                            {es ? 'Ver CORE 360° – Acceso Total' : 'See CORE 360° – Total Access'}
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {['CPD #788968', 'KCSIE 2026', 'Ofsted Ready', 'UK GDPR', es ? 'Certificación Escolar' : 'School Certification', '£1,450/yr'].map((b, i) => (
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
export default AnimikdemiCertPlusPage;
