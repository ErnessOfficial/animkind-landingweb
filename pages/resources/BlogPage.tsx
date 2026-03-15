import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon } from '../../components/BrandIcon';

const BLOG_URL = 'https://www.animikind.es/about-thekindblog';

const TheKindBlogPage: React.FC = () => {
    const { lang } = useLanguage();

    useEffect(() => {
        document.title = lang === 'en'
            ? 'TheKindBlog – AnImiKind'
            : 'TheKindBlog – AnImiKind';
    }, [lang]);

    const topics = lang === 'en'
        ? [
            { icon: 'ShieldCheck', title: 'Safeguarding & Child Protection', desc: 'British safeguarding standards, statutory frameworks, and proactive pastoral care in schools.' },
            { icon: 'Heart', title: 'Emotional Wellbeing', desc: 'Building emotional resilience, fostering supportive environments, and nurturing mental health.' },
            { icon: 'Brain', title: 'Emotional-AI in Education', desc: 'How our proactive 360° protection—driven by sophisticated Emotional AI—is revolutionising early detection.' },
            { icon: 'UsersThree', title: 'School Community', desc: 'Supporting students, teachers, and families with practical strategies for a positive learning culture.' },
            { icon: 'Sparkle', title: 'Innovation & EdTech', desc: 'Exploring the intersection of behavioural sciences, health technology, and regulatory compliance.' },
            { icon: 'BookOpen', title: 'Reflective Insights', desc: 'Thought-provoking perspectives that challenge the status quo and move beyond reactive box-ticking.' },
        ]
        : [
            { icon: 'ShieldCheck', title: 'Salvaguarda y Protección', desc: 'Estándares británicos de salvaguarda, marcos legales y cuidado pastoral proactivo en las escuelas.' },
            { icon: 'Heart', title: 'Bienestar Emocional', desc: 'Construir resiliencia emocional, fomentar entornos de apoyo y cuidar la salud mental.' },
            { icon: 'Brain', title: 'IA Emocional en la Educación', desc: 'Cómo nuestra protección proactiva 360° impulsada por IA Emocional revoluciona la detección temprana.' },
            { icon: 'UsersThree', title: 'Comunidad Escolar', desc: 'Apoyo a estudiantes, docentes y familias con estrategias prácticas para una cultura de aprendizaje positiva.' },
            { icon: 'Sparkle', title: 'Innovación y EdTech', desc: 'Explorando la intersección de ciencias conductuales, tecnología sanitaria y cumplimiento normativo.' },
            { icon: 'BookOpen', title: 'Reflexiones', desc: 'Perspectivas que desafían el statu quo y van más allá del cumplimiento reactivo.' },
        ];

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(24px);} to { opacity:1; transform:translateY(0);} }
                .animate-fsu { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            {/* ══ HERO ══ */}
            <section className="relative w-full min-h-[380px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#0a3d28]" />

                {/* Dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, c) => Array.from({ length: 5 }).map((_, r) => (
                        <circle key={`${c}-${r}`} cx={c * 175 + 80} cy={r * 80 + 40} r="3" fill="#0dc383" />
                    )))}
                </svg>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center w-full">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5 animate-fsu">
                        <div className="w-1.5 h-1.5 bg-[#0dc383] rounded-full animate-pulse" />
                        {lang === 'en' ? 'AnimiKind Blog' : 'Blog de AnimiKind'}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 animate-fsu" style={{ animationDelay: '60ms' }}>
                        <span className="text-[#0dc383]">The</span>Kind<span className="text-[#eec843]">Blog</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-white/80 italic font-medium mb-4 animate-fsu" style={{ animationDelay: '100ms' }}>
                        {lang === 'en' ? '"A Sanctuary of Care"' : '"Un Santuario de Cuidado"'}
                    </p>

                    <p className="text-white/65 text-base md:text-lg max-w-3xl mx-auto leading-relaxed animate-fsu" style={{ animationDelay: '140ms' }}>
                        {lang === 'en'
                            ? 'Insights, research, and reflective perspectives on emotional wellbeing, safeguarding, and Emotional-AI in education. Written by Ernesto Mendoza, CEO & Founder of AnimiKind Limited.'
                            : 'Análisis, investigación y reflexiones sobre bienestar emocional, salvaguarda e IA Emocional en la educación. Escrito por Ernesto Mendoza, CEO y Fundador de AnimiKind Limited.'}
                    </p>

                    {/* CTA */}
                    <div className="mt-8 animate-fsu" style={{ animationDelay: '180ms' }}>
                        <a
                            href={BLOG_URL}
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#0dc383] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            {lang === 'en' ? 'Enter TheKindBlog' : 'Entrar a TheKindBlog'}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ══ ABOUT THE AUTHOR ══ */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
                        {/* Author avatar */}
                        <div className="flex justify-center">
                            <div className="w-[8.5rem] h-[8.5rem] rounded-full overflow-hidden border-2 border-white shadow-xl ring-2 ring-[#1d4c73]/10">
                                <img
                                    src="https://res.cloudinary.com/djybwowo6/image/upload/v1773593013/ernestoprifilepic_ceyp8f.png"
                                    alt="Ernesto Mendoza profile picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Author info */}
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-[#eec843]/15 border border-[#eec843]/30 text-[#b07d1f] text-xs font-bold tracking-widest uppercase mb-3">
                                {lang === 'en' ? 'About the Author' : 'Sobre el Autor'}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2c29] tracking-tight mb-4">
                                Ernesto Mendoza LLM MSc
                            </h2>
                            <p className="text-[#1d4c73]/80 leading-relaxed mb-4">
                                {lang === 'en'
                                    ? 'CEO & Founder of AnimiKind Limited. With foundational training as a Lawyer, a Master\'s in Behavioural Psychology, experience within HM Probation, and a Master\'s in Artificial Intelligence — his journey bridges the gap between legal frameworks, human behaviour, and proactive technology.'
                                    : 'CEO y Fundador de AnimiKind Limited. Con formación como Abogado, un Máster en Psicología Conductual, experiencia en HM Probation y un Máster en Inteligencia Artificial — su trayectoria conecta marcos legales, comportamiento humano y tecnología proactiva.'}
                            </p>
                            <p className="text-[#1d4c73]/65 text-sm leading-relaxed italic">
                                {lang === 'en'
                                    ? '"My goal was specific: to develop an Emotional AI that acts as a force multiplier for empathy, not a replacement for it."'
                                    : '"Mi objetivo era específico: desarrollar una IA Emocional que actúe como multiplicador de empatía, no como sustituto."'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ TOPICS COVERED ══ */}
            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-3">
                            {lang === 'en' ? 'What You\'ll Discover' : 'Lo Que Descubrirás'}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2c29] tracking-tight">
                            {lang === 'en' ? 'Topics & Insights' : 'Temas y Análisis'}
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, i) => (
                            <div
                                key={i}
                                className="group p-6 bg-white rounded-[1.5rem] border border-[#1d4c73]/5 hover:border-[#0dc383]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fsu"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#0dc383]/10 flex items-center justify-center mb-4 group-hover:bg-[#0dc383] transition-colors duration-300">
                                    <BrandIcon name={topic.icon as any} color="green" size={22} weight="duotone" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1e2c29] mb-2 group-hover:text-[#0dc383] transition-colors">{topic.title}</h3>
                                <p className="text-[#1d4c73]/70 text-sm leading-relaxed">{topic.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ FINAL CTA ══ */}
            <section className="py-20 bg-[#0b2340]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#0dc383]/20 flex items-center justify-center mx-auto mb-6">
                        <BrandIcon name="Article" color="green" size={36} weight="duotone" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
                        {lang === 'en' ? 'Ready to Explore?' : '¿Listo para Explorar?'}
                    </h2>
                    <p className="text-white/60 text-base mb-8 max-w-xl mx-auto">
                        {lang === 'en'
                            ? 'Pour a cup of tea, settle in, and discover our latest articles on emotional wellbeing and school safeguarding.'
                            : 'Sirve una taza de té, ponte cómodo y descubre nuestros últimos artículos sobre bienestar emocional y salvaguarda escolar.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={BLOG_URL}
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#0dc383] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all hover:-translate-y-1 active:scale-95"
                        >
                            {lang === 'en' ? 'Enter TheKindBlog' : 'Entrar a TheKindBlog'}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={BLOG_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/25 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5"
                        >
                            <BrandIcon name="ArrowCircleRight" color="white" size={18} weight="bold" />
                            {lang === 'en' ? 'Open in New Tab' : 'Abrir en otra pestaña'}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TheKindBlogPage;
