import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content';
import PricingTable from '../components/PricingTable';
import { cloudinaryMedia } from '../data/cloudinaryMedia';

const PlansPage: React.FC = () => {
    const { lang } = useLanguage();
    const t = content[lang];

    useEffect(() => {
        document.title = lang === 'en'
            ? 'Plans & Pricing – AnImiKind'
            : 'Planes y Precios – AnImiKind';
    }, [lang]);

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="py-16 bg-gradient-to-b from-[#1d4c73] to-[#1e2c29] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        {t.pricingModal.title}
                    </h1>
                    <p className="text-lg md:text-xl text-[#f1f4f4]/80 leading-relaxed max-w-3xl mx-auto">
                        {t.pricingModal.description}
                    </p>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2c29] tracking-tight mb-4">
                            {lang === 'en' ? 'Compare Our Plans' : 'Compara Nuestros Planes'}
                        </h2>
                        <p className="text-lg text-[#1d4c73]/70 max-w-2xl mx-auto">
                            {lang === 'en'
                                ? 'Choose the plan that best fits your school\'s safeguarding journey'
                                : 'Elige el plan que mejor se adapte al viaje de protección de tu escuela'}
                        </p>
                    </div>
                    <div className="bg-white rounded-[2rem] shadow-2xl border border-[#1d4c73]/10 p-6 md:p-10 overflow-hidden">
                        <PricingTable />
                    </div>
                </div>
            </section>

            {/* Pricing Images */}
            <section className="py-16 bg-[#f1f4f4]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e2c29] text-center mb-12">
                        {lang === 'en' ? 'Detailed Pricing' : 'Precios Detallados'}
                    </h2>
                    {[
                        cloudinaryMedia.pricing.core360Primary,
                        cloudinaryMedia.pricing.core360Secondary,
                        cloudinaryMedia.pricing.certificationPlusPage,
                        cloudinaryMedia.pricing.cpdSimulatorPage,
                    ].map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Pricing Plan ${idx + 1}`}
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#1e2c29] text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
                        {t.pricingModal.ctaText}
                    </p>
                    <Link
                        to="/demo/"
                        className="inline-block px-10 py-5 rounded-full bg-[#0dc383] text-white font-bold text-lg hover:bg-[#0bb075] transition-all shadow-lg hover:shadow-[#0dc383]/30 transform hover:-translate-y-0.5 active:scale-95"
                    >
                        {t.pricingModal.ctaButton}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PlansPage;
