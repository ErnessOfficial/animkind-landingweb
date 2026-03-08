import React from 'react';
import { CheckCircle2, X as XIcon } from 'lucide-react';
import { plans, features, featureTranslations, PlanFeature } from '../data/pricingData';
import { useLanguage } from '../contexts/LanguageContext';

const PricingTable: React.FC = () => {
    const { lang } = useLanguage();

    // Group features by category
    const categories = features.reduce<Record<string, PlanFeature[]>>((acc, f) => {
        const cat = lang === 'es' && featureTranslations[f.feature] ? featureTranslations[f.feature].category : f.category;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(f);
        return acc;
    }, {});

    const getFeatureText = (f: PlanFeature) => {
        if (lang === 'es' && featureTranslations[f.feature]) {
            return featureTranslations[f.feature].feature;
        }
        return f.feature;
    };

    const renderCell = (value: boolean | string) => {
        if (typeof value === 'string') {
            return <span className="text-sm font-semibold text-[#1d4c73]">{value}</span>;
        }
        if (value) {
            return (
                <div className="flex items-center justify-center">
                    <div className="bg-[#0dc383]/20 p-1.5 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-[#0dc383]" />
                    </div>
                </div>
            );
        }
        return (
            <div className="flex items-center justify-center">
                <div className="bg-gray-100 p-1.5 rounded-full">
                    <XIcon className="w-4 h-4 text-gray-300" />
                </div>
            </div>
        );
    };

    return (
        <div className="w-full overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[700px] border-separate border-spacing-0">
                {/* Header */}
                <thead>
                    <tr>
                        <th className="sticky left-0 z-10 bg-white text-left p-4 w-[40%] border-b-2 border-[#1d4c73]/10">
                            <span className="text-sm font-bold text-[#1d4c73]/60 uppercase tracking-wider">
                                {lang === 'en' ? 'Features' : 'Características'}
                            </span>
                        </th>
                        {plans.map((plan) => (
                            <th
                                key={plan.id}
                                className={`p-4 text-center border-b-2 w-[20%] ${plan.highlighted
                                        ? 'bg-gradient-to-b from-[#0dc383]/10 to-transparent border-[#0dc383]/30'
                                        : 'border-[#1d4c73]/10'
                                    }`}
                            >
                                {plan.highlighted && (
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#0dc383] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                                        {lang === 'en' ? 'Recommended' : 'Recomendado'}
                                    </div>
                                )}
                                <div className="text-lg font-bold text-[#1e2c29]">
                                    {lang === 'es' ? plan.nameEs : plan.name}
                                </div>
                                <div className="text-xs text-[#1d4c73]/60 mt-1 font-medium">
                                    {lang === 'es' ? plan.taglineEs : plan.tagline}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {Object.entries(categories).map(([category, catFeatures]) => (
                        <React.Fragment key={category}>
                            {/* Category Header */}
                            <tr>
                                <td
                                    colSpan={4}
                                    className="py-4 px-4 text-sm font-bold uppercase tracking-wider text-[#1d4c73] bg-[#f8fafc] border-y border-[#1d4c73]/10"
                                >
                                    {category}
                                </td>
                            </tr>
                            {/* Feature Rows */}
                            {catFeatures.map((f, idx) => (
                                <tr
                                    key={`${f.feature}-${idx}`}
                                    className="group hover:bg-[#0dc383]/5 transition-colors"
                                >
                                    <td className="sticky left-0 z-10 bg-white group-hover:bg-[#0dc383]/5 p-4 text-sm font-medium text-[#1e2c29] border-b border-gray-100 transition-colors">
                                        {getFeatureText(f)}
                                    </td>
                                    <td className={`p-4 text-center border-b border-gray-100 ${plans[0].highlighted ? 'bg-[#0dc383]/5' : ''}`}>
                                        {renderCell(f.coreSaas)}
                                    </td>
                                    <td className={`p-4 text-center border-b border-gray-100 ${plans[1].highlighted ? 'bg-[#0dc383]/5' : ''}`}>
                                        {renderCell(f.animikdemiPlus)}
                                    </td>
                                    <td className={`p-4 text-center border-b border-gray-100 ${plans[2].highlighted ? 'bg-[#0dc383]/5' : ''}`}>
                                        {renderCell(f.cpdEdition)}
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PricingTable;
