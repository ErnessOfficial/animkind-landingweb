import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BrandIcon } from '../components/BrandIcon';

const BOOKING_URL = 'https://calendar.app.google/9kvFWK6CgUiNe3ov5';

const ContactPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Contáctanos – AnImiKind' : 'Contact Us – AnImiKind';
    }, [lang]);

    // Load Tally embed script once
    useEffect(() => {
        const w = 'https://tally.so/widgets/embed.js';
        if (document.querySelector(`script[src="${w}"]`)) {
            // @ts-ignore
            if (typeof Tally !== 'undefined') { (window as any).Tally.loadEmbeds(); }
            return;
        }
        const s = document.createElement('script');
        s.src = w;
        s.onload = () => { (window as any).Tally?.loadEmbeds(); };
        s.onerror = () => {
            document.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])').forEach(e => {
                e.src = e.dataset.tallySrc || '';
            });
        };
        document.body.appendChild(s);
    }, []);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[280px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0f2d50] to-[#1d4c73]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
                    {[[120, 60], [360, 160], [620, 55], [860, 155], [1080, 70], [200, 230], [560, 215], [900, 240]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#0dc383" />
                    ))}
                </svg>
                <div className="absolute right-0 top-0 h-full flex items-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Envelope" color="green" size={380} weight="duotone" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center w-full">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5">
                        <BrandIcon name="Envelope" color="green" size={13} weight="bold" />
                        {es ? 'KindTeam' : 'KindTeam'}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {es ? 'Ponte en Contacto' : 'Get in Touch'}
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
                        {es
                            ? 'Ya seas líder escolar, responsable de salvaguarda o profesional de la educación — estamos aquí para ayudarte.'
                            : "Whether you're a school leader, safeguarding officer, or education professional — we're here to help."}
                    </p>
                </div>
            </section>

            {/* ══ MAIN — Side info + Tally form ══ */}
            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">

                        {/* ── Left sidebar: info + demo ── */}
                        <div className="space-y-6 animate-fadeSlideUp">

                            {/* Contact info */}
                            <div className="bg-white rounded-[1.75rem] shadow-lg border border-[#e5eaf0] p-7 space-y-5">
                                <h2 className="text-lg font-extrabold text-[#1e2c29]">
                                    {es ? 'Información de contacto' : 'Contact information'}
                                </h2>
                                {[
                                    { icon: 'Envelope' as const, color: 'green' as const, label: es ? 'Email' : 'Email', value: 'hello@animikind.com' },
                                    { icon: 'MapPin' as const, color: 'navy' as const, label: es ? 'Ubicación' : 'Location', value: 'United Kingdom' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(13,195,131,0.12)', border: '1.5px solid rgba(13,195,131,0.3)' }}>
                                            <BrandIcon name={item.icon} color={item.color} size={16} weight="bold" />
                                        </div>
                                        <div>
                                            <p className="text-[#1d4c73]/50 text-xs font-semibold">{item.label}</p>
                                            <p className="text-[#1e2c29] text-sm font-bold mt-0.5">{item.value}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Social links */}
                                <div className="pt-3 border-t border-[#e5eaf0]">
                                    <p className="text-[#1d4c73]/40 text-xs font-semibold mb-3">{es ? 'Redes sociales' : 'Social media'}</p>
                                    <div className="flex gap-3">
                                        {[
                                            { href: 'https://www.facebook.com/animikindecosystem', label: 'Facebook', hoverBg: '#1877F2', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                                            { href: 'https://instagram.com/animikind', label: 'Instagram', hoverBg: '#E4405F', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg> },
                                            { href: 'https://linkedin.com/in/ernesto-mendoza-animikind', label: 'LinkedIn', hoverBg: '#0A66C2', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
                                        ].map((s, i) => (
                                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                                className="w-9 h-9 rounded-xl bg-[#f4f7fb] border border-[#e5eaf0] flex items-center justify-center text-[#1d4c73] hover:text-white transition-all"
                                                style={{ '--hover-bg': s.hoverBg } as React.CSSProperties}
                                                onMouseEnter={e => (e.currentTarget.style.background = s.hoverBg)}
                                                onMouseLeave={e => (e.currentTarget.style.background = '')}
                                            >
                                                {s.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Book a Demo card */}
                            <div className="bg-gradient-to-br from-[#0b2340] to-[#1d4c73] rounded-[1.75rem] shadow-xl border border-white/10 p-7 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(13,195,131,0.2)', border: '1.5px solid rgba(13,195,131,0.4)' }}>
                                        <BrandIcon name="Calendar" color="green" size={18} weight="bold" />
                                    </div>
                                    <h3 className="text-base font-extrabold">{es ? 'Reserva una Demo Gratuita' : 'Book a Free Demo'}</h3>
                                </div>
                                <p className="text-white/65 text-sm leading-relaxed mb-5">
                                    {es
                                        ? 'Agenda una sesión personalizada de 30 min para ver el ecosistema AnimiKind en acción.'
                                        : 'Schedule a personalised 30-min session to see the AnimiKind ecosystem in action.'}
                                </p>
                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all hover:-translate-y-0.5 active:scale-95"
                                >
                                    {es ? 'Reservar Demo →' : 'Schedule Demo →'}
                                </a>
                                <p className="text-white/35 text-xs text-center mt-3">{es ? 'Gratis · 30 min · Sin compromiso' : 'Free · 30 min · No commitment'}</p>
                            </div>

                            {/* Compliance mini-badges */}
                            <div className="bg-white rounded-[1.5rem] border border-[#e5eaf0] p-5">
                                <p className="text-[#1d4c73]/40 text-xs font-bold tracking-widest uppercase mb-3">{es ? 'Cumplimiento legal' : 'Legal compliance'}</p>
                                <div className="flex flex-wrap gap-2">
                                    {['UK GDPR', 'OSA 2023', 'KCSIE 2026', 'CPD #788968'].map((b, i) => (
                                        <span key={i} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#f4f7fb] border border-[#e5eaf0] text-[#1d4c73] text-[11px] font-bold">
                                            <BrandIcon name="CheckCircle" color="green" size={11} weight="fill" />
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Tally form ── */}
                        <div className="bg-white rounded-[2rem] shadow-xl border border-[#e5eaf0] overflow-hidden animate-fadeSlideUp" style={{ animationDelay: '80ms' }}>
                            <div className="bg-gradient-to-r from-[#0b2340] to-[#1d4c73] px-8 py-5 flex items-center gap-3">
                                <BrandIcon name="Megaphone" color="green" size={20} weight="bold" />
                                <div>
                                    <h2 className="text-white font-extrabold text-base">{es ? 'Envíanos un mensaje' : 'Send us a message'}</h2>
                                    <p className="text-white/55 text-xs">{es ? 'Respondemos en menos de 24 horas' : 'We respond within 24 hours'}</p>
                                </div>
                            </div>
                            <div className="p-2">
                                <iframe
                                    data-tally-src="https://tally.so/embed/yPlbLX?transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                                    loading="lazy"
                                    width="100%"
                                    height="735"
                                    frameBorder={0}
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Get in Touch"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
