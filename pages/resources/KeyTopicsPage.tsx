import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BrandIcon } from '../../components/BrandIcon';

const videoCards = [
    {
        titleEn: 'A tour of the Animikind Ecosystem',
        titleEs: 'Un recorrido por el Ecosistema AnimiKind',
        video: 'https://res.cloudinary.com/djybwowo6/video/upload/v1772965529/animikind_ziqjrt.mp4',
        thumb: 'https://res.cloudinary.com/djybwowo6/video/upload/so_1,w_1280,c_fill/v1772965529/animikind_ziqjrt.jpg',
    },
    {
        titleEn: 'The Video-guide you need about the Mental Health Act 2025 implementation for schools.',
        titleEs: 'The Video-guide you need about the Mental Health Act 2025 implementation for schools.',
        video: 'https://res.cloudinary.com/djybwowo6/video/upload/v1773061509/e503e0c2-f41d-4e9c-8e37-430a9e83a935_svq5o6.mp4',
        thumb: 'https://res.cloudinary.com/djybwowo6/video/upload/so_1,w_1280,c_fill/v1773061509/e503e0c2-f41d-4e9c-8e37-430a9e83a935_svq5o6.jpg',
    },
];

const visualReportCards = [
    {
        titleEn: 'KCSIE 2026 Compliance Brief',
        titleEs: 'Resumen de Cumplimiento KCSIE 2026',
        pdf: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975907/KCSIE_2026_Compliance_rub7ct.pdf',
        thumb: 'https://res.cloudinary.com/djybwowo6/image/upload/pg_1,f_png/v1772975907/KCSIE_2026_Compliance_rub7ct.pdf',
    },
    {
        titleEn: 'Mental Health Act 2025 - AnimiKind Briefing',
        titleEs: 'Mental Health Act 2025 - Informe AnimiKind',
        pdf: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772974526/Mental_Health_Act_2025_-_AnimiKind_Briefing_compressed_qozzq3.pdf',
        thumb: 'https://res.cloudinary.com/djybwowo6/image/upload/pg_1,f_png/v1772974526/Mental_Health_Act_2025_-_AnimiKind_Briefing_compressed_qozzq3.pdf',
    },
];

const infoCards = [
    {
        titleEn: 'Mental Health Act 2025: All what you need to know for your school',
        titleEs: 'Mental Health Act 2025: todo lo que tu centro debe conocer',
        pdf: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975479/infographMentalhealt_ouhz7u.pdf',
        thumb: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975479/infographMentalhealt_ouhz7u.png',
    },
    {
        titleEn: 'Putting the student voice first',
        titleEs: 'Poniendo primero la voz del estudiante',
        pdf: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975479/studentswellbeinginfogr_xuagtk.pdf',
        thumb: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975479/studentswellbeinginfogr_xuagtk.png',
    },
    {
        titleEn: 'New statutory obligations for schools on the Mental Health Act 2025',
        titleEs: 'Nuevas obligaciones estatutarias escolares en Mental Health Act 2025',
        pdf: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975477/thementalhealthact-infogra_cvgh3m.pdf',
        thumb: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975477/thementalhealthact-infogra_cvgh3m.png',
    },
    {
        titleEn: 'AnimiKind Ecosystem: the 360 digital emotional safety net',
        titleEs: 'Ecosistema AnimiKind: la red emocional digital 360',
        pdf: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975473/AnimikindEcoInfogra_ckznwq.pdf',
        thumb: 'https://res.cloudinary.com/djybwowo6/image/upload/v1772975473/AnimikindEcoInfogra_ckznwq.png',
    },
];

const KeyTopicsPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es ? 'Resúmenes de Temas Clave – AnImiKind' : 'Key Topic Briefs – AnImiKind';
    }, [es]);

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
                html { scroll-behavior: smooth; }
            `}</style>

            <section className="relative w-full min-h-[400px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#0a3d28]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
                    {Array.from({ length: 8 }).map((_, c) => Array.from({ length: 4 }).map((_, r) => (
                        <circle key={`${c}-${r}`} cx={c * 175 + 80} cy={r * 100 + 50} r="3" fill="#0dc383" />
                    )))}
                    {[[80, 50, 250, 140], [250, 140, 430, 60], [430, 60, 610, 150], [610, 150, 790, 80], [790, 80, 960, 170], [170, 320, 430, 260], [430, 260, 690, 320]].map(([x1, y1, x2, y2], i) => (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1" strokeDasharray="5 8" />
                    ))}
                </svg>

                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6 animate-fadeSlideUp">
                        <BrandIcon name="Article" color="green" size={13} weight="bold" />
                        {es ? 'Centro de Recursos Estratégicos' : 'Strategic Knowledge Hub'}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5 animate-fadeSlideUp" style={{ animationDelay: '70ms' }}>
                        {es ? <>Key Topic <span className="text-[#0dc383]">Briefs</span></> : <>Key Topic <span className="text-[#0dc383]">Briefs</span></>}
                    </h1>

                    <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto animate-fadeSlideUp" style={{ animationDelay: '140ms' }}>
                        {es
                            ? 'Encuentra recursos clave en tres formatos: reportes visuales (PDF), infografías temáticas y presentaciones en video para apoyar decisiones de salvaguarda y bienestar emocional.'
                            : 'Find strategic resources in three formats: visual reports (PDF), thematic infographics, and video presentations to support safeguarding and emotional wellbeing decisions.'}
                    </p>
                </div>
            </section>

            <section className="py-10 bg-white border-b border-[#e5eaf0]">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid md:grid-cols-3 gap-4">
                    {[
                        { id: 'visual-reports', icon: 'Article' as const, labelEn: 'Visual Reports (PDF)', labelEs: 'Reportes Visuales (PDF)' },
                        { id: 'thematic-infographics', icon: 'ChartBar' as const, labelEn: 'Thematic Infographics', labelEs: 'Infografías Temáticas' },
                        { id: 'video-presentations', icon: 'Lightning' as const, labelEn: 'Video Presentations', labelEs: 'Presentaciones en Video' },
                    ].map((item, i) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="group flex items-center gap-3 p-4 rounded-2xl bg-[#f4f7fb] border border-[#e5eaf0] hover:border-[#0dc383]/35 hover:shadow-lg transition-all animate-fadeSlideUp"
                            style={{ animationDelay: `${i * 90}ms` }}
                        >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0dc383]/15 border border-[#0dc383]/30">
                                <BrandIcon name={item.icon} color="green" size={18} weight="duotone" />
                            </div>
                            <span className="text-sm font-bold text-[#1e2c29] group-hover:text-[#0dc383] transition-colors">
                                {es ? item.labelEs : item.labelEn}
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            <section id="visual-reports" className="py-16 bg-[#f4f7fb]">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-10 animate-fadeSlideUp">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Visual Reports (PDF format)' : 'Visual Reports (PDF format)'}
                        </span>
                        <p className="text-[#1d4c73]/70 max-w-3xl mx-auto">
                            {es
                                ? 'Accede a los reportes visuales en formato PDF mediante miniaturas individuales.'
                                : 'Access visual reports in PDF format through individual thumbnails.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {visualReportCards.map((item, idx) => (
                            <a
                                key={item.pdf}
                                href={item.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-white rounded-[1.75rem] border border-[#e5eaf0] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all animate-fadeSlideUp"
                                style={{ animationDelay: `${idx * 90}ms` }}
                            >
                                <div className="aspect-[16/10] bg-[#dfe7ef]">
                                    <img
                                        src={item.thumb}
                                        alt={es ? item.titleEs : item.titleEn}
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-[#1e2c29] font-extrabold leading-snug mb-2">
                                        {es ? item.titleEs : item.titleEn}
                                    </h3>
                                    <p className="inline-flex items-center gap-2 text-sm font-bold text-[#1d4c73] group-hover:text-[#0dc383] transition-colors">
                                        <BrandIcon name="ArrowRight" color="green" size={14} weight="bold" />
                                        {es ? 'Abrir reporte' : 'Open report'}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="thematic-infographics" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-10 animate-fadeSlideUp">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#0dc383]/10 border border-[#0dc383]/20 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Thematic Infographics' : 'Thematic Infographics'}
                        </span>
                        <p className="text-[#1d4c73]/70 max-w-3xl mx-auto">
                            {es
                                ? 'Miniaturas para acceder rápidamente a infografías estratégicas en formato PDF.'
                                : 'Thumbnails for quick access to strategic infographics in PDF format.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {infoCards.map((item, idx) => (
                            <a
                                key={item.pdf}
                                href={item.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="group bg-[#f4f7fb] rounded-[1.75rem] border border-[#e5eaf0] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all animate-fadeSlideUp"
                                style={{ animationDelay: `${idx * 90}ms` }}
                            >
                                <div className="aspect-[16/10] bg-[#dfe7ef]">
                                    <img
                                        src={item.thumb}
                                        alt={es ? item.titleEs : item.titleEn}
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-[#1e2c29] font-extrabold leading-snug mb-2">
                                        {es ? item.titleEs : item.titleEn}
                                    </h3>
                                    <p className="inline-flex items-center gap-2 text-sm font-bold text-[#1d4c73] group-hover:text-[#0dc383] transition-colors">
                                        <BrandIcon name="ArrowRight" color="green" size={14} weight="bold" />
                                        {es ? 'Abrir infografía' : 'Open infographic'}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="video-presentations" className="py-16 bg-[#f4f7fb]">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-10 animate-fadeSlideUp">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1d4c73]/10 border border-[#1d4c73]/20 text-[#1d4c73] text-xs font-bold tracking-widest uppercase mb-4">
                            {es ? 'Video Presentations' : 'Video Presentations'}
                        </span>
                        <p className="text-[#1d4c73]/70 max-w-3xl mx-auto">
                            {es
                                ? 'Miniaturas para acceder a presentaciones audiovisuales del ecosistema.'
                                : 'Thumbnails to access audiovisual presentations of the ecosystem.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {videoCards.map((item, idx) => (
                            <a
                                key={item.video}
                                href={item.video}
                                target="_blank"
                                rel="noreferrer"
                                className="group block rounded-[2rem] overflow-hidden border border-[#dfe6ee] bg-white shadow-xl hover:shadow-2xl transition-all animate-fadeSlideUp"
                                style={{ animationDelay: `${idx * 90}ms` }}
                            >
                                <div className="aspect-video relative">
                                    <img
                                        src={item.thumb}
                                        alt={es ? item.titleEs : item.titleEn}
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-[#061529]/35 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                                            <BrandIcon name="ArrowRight" color="green" size={22} weight="bold" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 md:p-6">
                                    <h3 className="text-[#1e2c29] text-xl font-extrabold mb-1">
                                        {es ? item.titleEs : item.titleEn}
                                    </h3>
                                    <p className="text-[#1d4c73]/70 text-sm">
                                        {es ? 'Haz clic para abrir el video en Cloudinary.' : 'Click to open the video on Cloudinary.'}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KeyTopicsPage;
