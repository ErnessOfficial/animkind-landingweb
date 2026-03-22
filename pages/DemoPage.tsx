import React, { useEffect } from 'react';
import { BrandIcon } from '../components/BrandIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { cloudinaryMedia } from '../data/cloudinaryMedia';

const BOOKING_URL = 'https://calendly.com/animikind/30min';

const featureCards = [
    {
        title: 'Live Platform Tour',
        description: 'A real-time look at the School Panel dashboard to visualise how risk alerts and emotional insights are presented to your team.',
        icon: 'ChartLine' as const,
    },
    {
        title: 'AnImiKind Academy Preview',
        description: 'A walkthrough of our digital training hub, including CPD-aligned resources for staff and gamified emotional literacy courses for students.',
        icon: 'Graduation' as const,
    },
    {
        title: 'Workflow Demonstration',
        description: 'How the student app securely connects with your safeguarding system to bridge communication gaps.',
        icon: 'Network' as const,
    },
    {
        title: 'Q&A',
        description: 'A dedicated space to discuss integration, data privacy (GDPR), and alignment with KCSIE requirements.',
        icon: 'HandshakeSimple' as const,
    },
];

const DemoPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = lang === 'en'
            ? 'Learn More - Free Demo – AnImiKind'
            : 'Más Información - Demo Gratuita – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-16">
            <section className="relative w-full min-h-[360px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#1d4c73]" />
                <div className="absolute inset-0 opacity-[0.08]">
                    <svg className="w-full h-full" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice">
                        {[[70, 90, 260, 140], [260, 140, 470, 70], [470, 70, 690, 150], [690, 150, 920, 80], [920, 80, 1120, 170], [160, 280, 420, 230], [420, 230, 690, 290]].map(([x1, y1, x2, y2], i) => (
                            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1.2" strokeDasharray="6 10" />
                        ))}
                        {[[70, 90], [260, 140], [470, 70], [690, 150], [920, 80], [1120, 170], [160, 280], [420, 230], [690, 290]].map(([cx, cy], i) => (
                            <circle key={i} cx={cx} cy={cy} r="3.5" fill="#0dc383" />
                        ))}
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 w-full">
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                        <div className="text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6">
                                <BrandIcon name="Calendar" color="green" size={13} weight="bold" />
                                {es ? 'Sesión Guiada' : 'Guided Session'}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5">
                                {es ? 'Learn More - Free Demo' : 'Learn More - Free Demo'}
                            </h1>
                            <p className="text-white/78 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {es
                                    ? 'Reserva una sesión personalizada para recorrer el ecosistema AnImiKind y entender cómo apoya la detección temprana, la salvaguarda y el bienestar emocional escolar.'
                                    : 'Book a personalised session to explore the AnImiKind ecosystem and see how it supports early identification, safeguarding, and emotional wellbeing in schools.'}
                            </p>
                        </div>

                        <div className="relative flex justify-center lg:justify-end">
                            <div className="absolute inset-0 blur-3xl bg-[#0dc383]/15 rounded-full scale-75" />
                            <img
                                src={cloudinaryMedia.demo.heroImage}
                                alt="Learn More - Free Demo"
                                className="relative z-10 w-full max-w-[460px] rounded-[2rem] border border-white/10 shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="bg-white rounded-[2.2rem] border border-[#dfe6ee] shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-12 text-center">
                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-base shadow-lg shadow-[#0dc383]/25 hover:shadow-xl hover:shadow-[#0dc383]/35 transition-all hover:-translate-y-0.5"
                            >
                                <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                                {es ? 'Book a free demo' : 'Book a free demo'}
                            </a>

                            <p className="mt-8 text-[#1d4c73]/80 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                                Book a personalised walkthrough of the AnImiKind ecosystem-the proactive safeguarding solution powered by ethical AI. In this screen-sharing session, we will explore how our platform helps schools identify early signs of emotional distress and bullying, ensuring robust support for your students while reducing administrative workload.
                            </p>

                            <div className="mt-8 rounded-[2rem] overflow-hidden border border-[#dfe6ee] shadow-lg">
                                <img
                                    src={cloudinaryMedia.demo.walkthroughImage}
                                    alt="Book a free demo"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1d4c73] text-white font-bold text-base hover:bg-[#0b2340] transition-all hover:-translate-y-0.5"
                            >
                                <BrandIcon name="Calendar" color="white" size={18} weight="bold" />
                                {es ? 'Book a free demo' : 'Book a free demo'}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 bg-[#f4f7fb]">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="mb-8 text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1d4c73]/12 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            <BrandIcon name="Eye" color="navy" size={13} weight="bold" />
                            {es ? 'During this demo, you will see:' : 'During this demo, you will see:'}
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {featureCards.map((card, index) => (
                            <div
                                key={card.title}
                                className="bg-white rounded-[1.8rem] border border-[#dfe6ee] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: index % 2 === 0 ? 'rgba(13,195,131,0.12)' : 'rgba(29,76,115,0.1)', border: `1.5px solid ${index % 2 === 0 ? 'rgba(13,195,131,0.3)' : 'rgba(29,76,115,0.2)'}` }}>
                                    <BrandIcon name={card.icon} color={index % 2 === 0 ? 'green' : 'navy'} size={24} weight="duotone" />
                                </div>
                                <h3 className="text-xl font-extrabold text-[#1e2c29] mb-3">{card.title}</h3>
                                <p className="text-sm leading-relaxed text-[#1d4c73]/78">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DemoPage;
