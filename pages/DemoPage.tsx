import React, { useEffect } from 'react';
import { Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content';
import { cloudinaryMedia } from '../data/cloudinaryMedia';

const BOOKING_URL = 'https://calendar.app.google/9kvFWK6CgUiNe3ov5';

const DemoPage: React.FC = () => {
    const { lang } = useLanguage();
    const t = content[lang];

    useEffect(() => {
        document.title = lang === 'en'
            ? 'Book a Demo – AnImiKind'
            : 'Reservar Demo – AnImiKind';
    }, [lang]);

    // Load Typeform embed script
    useEffect(() => {
        const existingScript = document.querySelector('script[src*="embed.typeform.com"]');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = '//embed.typeform.com/next/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="pt-24">
            {/* Demo Section */}
            <section className="py-24 bg-[#f1f4f4] relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#1d4c73]/5 hover:shadow-[#1d4c73]/10 transition-shadow duration-500">
                        <div className="p-10 md:p-20 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#1d4c73] mb-10 tracking-tight">
                                {t.demoSection.title}
                            </h1>

                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-6 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0bb075] text-white text-xl font-bold hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all transform hover:-translate-y-1 active:scale-95 mb-12"
                            >
                                {t.demoSection.buttonText}
                            </a>

                            <div className="text-left bg-[#f8fafc] p-8 md:p-10 rounded-[2rem] border border-[#1d4c73]/5 shadow-inner">
                                <div className="text-sm md:text-base text-[#1d4c73] leading-relaxed whitespace-pre-line font-medium">
                                    {t.demoSection.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e2c29] mb-8 text-center">
                        {lang === 'en' ? 'Watch Our Introduction' : 'Mira Nuestra Introducción'}
                    </h2>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#1d4c73]/10">
                        <div className="aspect-video w-full">
                            <video
                                src={cloudinaryMedia.components.overviewVideo}
                                className="w-full h-full object-contain bg-black"
                                controls
                                preload="metadata"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Survey Contest Section (migrated from modal) */}
            <section className="py-16 bg-gradient-to-b from-white to-[#f1f4f4]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2rem] shadow-2xl ring-1 ring-[#eec843]/30 overflow-hidden">
                        {/* Header with Golden Gradient */}
                        <div className="bg-gradient-to-r from-[#eec843] via-[#f5d76e] to-[#eec843] p-8 md:p-12 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                                <Gift className="w-10 h-10 text-[#eec843]" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#1e2c29] mb-4 leading-tight">
                                {t.surveyContest.modalTitle}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 space-y-8">
                            <p className="text-lg md:text-xl text-[#1d4c73] leading-relaxed font-medium text-center">
                                {t.surveyContest.modalIntro}
                            </p>
                            <p className="text-base md:text-lg text-[#1e2c29]/80 leading-relaxed text-center">
                                {t.surveyContest.modalDescription}
                            </p>

                            {/* Prize Info Card */}
                            <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f4f4] p-6 md:p-8 rounded-2xl border-2 border-[#eec843]/30 shadow-inner">
                                <h3 className="text-lg md:text-xl font-bold text-[#0dc383] mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🏆</span> {t.surveyContest.prizeTitle}
                                </h3>
                                <p className="text-[#1e2c29] font-semibold text-base md:text-lg mb-4">
                                    {t.surveyContest.prizeDescription}
                                </p>
                                <div className="flex items-center justify-center gap-4 py-4">
                                    <span className="text-4xl md:text-5xl font-bold text-[#eec843]">≈ £700</span>
                                    <span className="text-sm text-[#1d4c73]/70 font-medium">VALUE</span>
                                </div>
                            </div>

                            {/* Deadline */}
                            <div className="text-center p-4 bg-[#1e2c29] rounded-xl">
                                <p className="text-white font-semibold text-base md:text-lg flex items-center justify-center gap-2">
                                    <span className="text-xl">⏰</span> {t.surveyContest.deadline}
                                </p>
                            </div>

                            {/* Typeform Embed */}
                            <div className="w-full min-h-[500px] rounded-2xl overflow-hidden border border-[#1d4c73]/10 shadow-lg">
                                <div data-tf-live="01KGZDR1GZK5EC93HKW24GP1HJ"></div>
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-[#1d4c73]/60 mt-4">
                                    {lang === 'en'
                                        ? 'Scroll down in the form above or click Start to begin the survey'
                                        : 'Desplázate hacia abajo en el formulario o haz clic en Inicio para comenzar la encuesta'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DemoPage;
