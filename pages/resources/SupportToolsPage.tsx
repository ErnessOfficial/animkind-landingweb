import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { BrandIcon, IconName } from '../../components/BrandIcon';
import { useLanguage } from '../../contexts/LanguageContext';
import { cloudinaryMedia } from '../../data/cloudinaryMedia';

const RESOURCES_URL = 'https://animikind-resources.vercel.app';

type Tool = {
    id: string;
    title: { en: string; es: string };
    description: { en: string; es: string };
    icon: IconName;
};

const TOOLS: Tool[] = [
    {
        id: 'breathing',
        title: { en: 'Breathing Coach', es: 'Guia de Respiracion' },
        description: {
            en: 'Guided breathing sessions to regulate stress and recover calm quickly.',
            es: 'Sesiones guiadas para regular el estres y recuperar la calma rapidamente.',
        },
        icon: 'Heartbeat',
    },
    {
        id: 'scenarios',
        title: { en: 'Scenario Simulator', es: 'Simulador de Escenarios' },
        description: {
            en: 'Practice real-life wellbeing and anti-bullying decisions in a safe environment.',
            es: 'Practica decisiones reales de bienestar y antiacoso en un entorno seguro.',
        },
        icon: 'PresentationChart',
    },
    {
        id: 'quiz',
        title: { en: 'Safety Quiz', es: 'Quiz de Seguridad' },
        description: {
            en: 'Interactive questions to reinforce emotional safety and healthy digital behaviour.',
            es: 'Preguntas interactivas para reforzar la seguridad emocional y habitos digitales saludables.',
        },
        icon: 'CheckCircle',
    },
    {
        id: 'emotion-lab',
        title: { en: 'Emotion Lab', es: 'Laboratorio Emocional' },
        description: {
            en: 'Identify, label, and track feelings to improve emotional self-awareness.',
            es: 'Identifica, nombra y registra emociones para mejorar tu autoconocimiento emocional.',
        },
        icon: 'Brain',
    },
    {
        id: 'guides',
        title: { en: 'Practical Guides', es: 'Guias Practicas' },
        description: {
            en: 'Actionable cards with strategies for wellbeing, prevention, and support.',
            es: 'Tarjetas accionables con estrategias de bienestar, prevencion y apoyo.',
        },
        icon: 'BookOpen',
    },
    {
        id: 'goals',
        title: { en: 'Personal Goals', es: 'Metas Personales' },
        description: {
            en: 'Set daily goals for wellbeing and monitor your progress over time.',
            es: 'Define metas diarias de bienestar y monitorea tu progreso en el tiempo.',
        },
        icon: 'Target',
    },
    {
        id: 'confidence-map',
        title: { en: 'Confidence Map', es: 'Mapa de Confianza' },
        description: {
            en: 'Visual tools to understand confidence patterns and build resilience habits.',
            es: 'Herramientas visuales para entender patrones de confianza y construir resiliencia.',
        },
        icon: 'ChartLine',
    },
    {
        id: 'validation-echo',
        title: { en: 'Validation Echo', es: 'Validation Echo' },
        description: {
            en: 'Reflective prompts that help students feel heard and emotionally supported.',
            es: 'Prompts reflexivos que ayudan al alumnado a sentirse escuchado y acompanado.',
        },
        icon: 'Lifebuoy',
    },
    {
        id: 'kindness-kite',
        title: { en: 'Kindness Kite', es: 'Cometa de Amabilidad' },
        description: {
            en: 'Micro-activities that promote empathy, kindness, and positive peer culture.',
            es: 'Microactividades para promover empatia, amabilidad y cultura positiva entre pares.',
        },
        icon: 'Confetti',
    },
];

const SupportToolsPage: React.FC = () => {
    const { lang } = useLanguage();
    const isSpanish = lang === 'es';
    const resourcesBaseUrl = `${RESOURCES_URL}/?lang=${lang}`;
    const buildToolUrl = (toolId: string) => `${RESOURCES_URL}/?lang=${lang}&tool=${toolId}`;

    useEffect(() => {
        document.title = isSpanish
            ? 'The Kind-Kit by AnimiKind - AnImiKind'
            : 'The Kind-Kit by AnimiKind - AnImiKind';
    }, [isSpanish]);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes kindkitFadeUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes kindkitFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes kindkitGlow {
                    0%, 100% { opacity: 0.35; }
                    50% { opacity: 0.55; }
                }
                .kindkit-fade-up { animation: kindkitFadeUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
                .kindkit-float { animation: kindkitFloat 6s ease-in-out infinite; }
                .kindkit-glow { animation: kindkitGlow 5s ease-in-out infinite; }
            `}</style>

            <section className="relative py-16 bg-gradient-to-br from-[#061529] via-[#0f2d50] to-[#1d4c73] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(13,195,131,0.25),transparent_45%)] kindkit-glow" />
                <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[#0dc383]/10 blur-3xl kindkit-float" />
                <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#0dc383]/10 blur-3xl kindkit-float" style={{ animationDelay: '1.2s' }} />
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, c) => Array.from({ length: 5 }).map((__, r) => (
                        <circle key={`${c}-${r}`} cx={c * 175 + 80} cy={r * 80 + 40} r="3" fill="#0dc383" />
                    )))}
                </svg>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center kindkit-fade-up">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5">
                        <BrandIcon name="Toolbox" color="green" size={14} weight="bold" />
                        {isSpanish ? 'Recursos Interactivos' : 'Interactive Resources'}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight">
                        The Kind-Kit <span className="text-[#0dc383]">by AnimiKind</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#f1f4f4]/80 leading-relaxed max-w-4xl mx-auto">
                        {isSpanish
                            ? 'Accede al ecosistema interactivo de bienestar emocional desde aqui, con navegacion fluida y una experiencia consistente con el resto del sitio.'
                            : 'Access the interactive emotional wellbeing ecosystem from here, with smooth navigation and an experience consistent with the rest of the site.'}
                    </p>
                </div>
            </section>

            <section className="py-14 bg-white border-b border-[#e5eaf0]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[2rem] border border-[#1d4c73]/10 bg-[#f8fafc] p-8 md:p-10 shadow-sm">
                        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-center">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2c29] tracking-tight mb-3">
                                    {isSpanish ? 'Abrir plataforma The Kind-Kit' : 'Launch The Kind-Kit Platform'}
                                </h2>
                                <p className="text-[#1d4c73]/80 leading-relaxed">
                                    {isSpanish
                                        ? 'Esta seccion se integra con la app productiva de recursos para mantener una sola fuente de verdad, despliegues rapidos y mayor robustez.'
                                        : 'This section integrates with the production resources app to keep a single source of truth, faster releases, and stronger robustness.'}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a
                                        href={resourcesBaseUrl}
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all hover:-translate-y-0.5"
                                    >
                                        {isSpanish ? 'Entrar ahora' : 'Enter now'}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={resourcesBaseUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-[#1d4c73] border border-[#1d4c73]/20 font-bold shadow-sm hover:bg-[#f1f4f4] hover:border-[#1d4c73]/35 transition-all hover:-translate-y-0.5"
                                    >
                                        {isSpanish ? 'Open in new tab' : 'Open in new tab'}
                                    </a>
                                </div>
                            </div>
                            <div className="kindkit-float">
                                <div className="rounded-[1.5rem] bg-white border border-[#1d4c73]/10 shadow-xl p-6 md:p-7">
                                    <img
                                        src={cloudinaryMedia.resources.kindKitLogo}
                                        alt="The Kind-Kit Logo"
                                        className="w-full h-auto object-contain mx-auto"
                                    />
                                    <p className="mt-4 text-center text-sm text-[#1d4c73]/70 font-semibold">
                                        {isSpanish ? 'Herramientas interactivas de bienestar emocional' : 'Interactive emotional wellbeing tools'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c29] tracking-tight">
                            {isSpanish ? 'Herramientas disponibles' : 'Available Tools'}
                        </h2>
                        <p className="mt-3 text-[#1d4c73]/75 max-w-3xl mx-auto">
                            {isSpanish
                                ? 'Selecciona una herramienta para acceder directamente al ecosistema de recursos.'
                                : 'Select a tool to jump directly into the resources ecosystem.'}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TOOLS.map((tool) => (
                            <article
                                key={tool.id}
                                className="group bg-[#f8fafc] border border-[#1d4c73]/10 rounded-[1.5rem] p-6 hover:bg-white hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#0dc383]/15 border border-[#0dc383]/30 flex items-center justify-center mb-4">
                                    <BrandIcon name={tool.icon} color="green" size={22} weight="duotone" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1e2c29] mb-2">
                                    {tool.title[lang]}
                                </h3>
                                <p className="text-[#1d4c73]/75 leading-relaxed mb-5">
                                    {tool.description[lang]}
                                </p>
                                <a
                                    href={buildToolUrl(tool.id)}
                                    className="inline-flex items-center gap-2 text-[#0dc383] font-bold hover:gap-3 transition-all"
                                >
                                    {isSpanish ? 'Abrir herramienta' : 'Open tool'}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-[1.75rem] bg-white border border-[#1d4c73]/10 p-6 md:p-8">
                        <p className="text-sm md:text-base text-[#1d4c73]/75 leading-relaxed">
                            {isSpanish
                                ? 'Nota tecnica: estas herramientas se sirven desde una aplicacion especializada en produccion, mientras esta pagina actua como punto de acceso integrado.'
                                : 'Technical note: these tools are served from a specialised production application, while this page works as the integrated access hub.'}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportToolsPage;
