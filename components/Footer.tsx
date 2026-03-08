import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content';
import { cloudinaryMedia } from '../data/cloudinaryMedia';

const Footer: React.FC = () => {
    const { lang } = useLanguage();
    const t = content[lang];
    const legalNotice = '© 2026 AnimiKind Limited. All rights reserved. AnimiKind Limited is registered in the Companies House for England and Wales. Num: 16947887';

    return (
        <footer className="bg-[#1d4c73] text-[#f1f4f4]/60 py-16 border-t border-[#0dc383]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-1 gap-8 text-center mb-10">
                    {/* Logo and Brand */}
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <img
                            src={cloudinaryMedia.footer.brandLogo}
                            alt="AnimiKind Limited Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <span className="font-bold text-white text-2xl tracking-tight">AnImiKind Limited</span>
                    </div>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium text-[#f1f4f4]/90">
                        {t.footer.description}
                    </p>

                    {/* Contact */}
                    <p className="font-semibold text-[#0dc383] text-base md:text-lg tracking-wide">
                        {t.footer.contact}
                    </p>

                    {/* Social Media Links */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <a
                            href="https://www.facebook.com/animikindecosystem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#f1f4f4]/70 hover:bg-[#1877F2]/20 hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-all duration-300"
                            title="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="https://instagram.com/animikind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#f1f4f4]/70 hover:bg-[#E4405F]/20 hover:text-[#E4405F] hover:border-[#E4405F]/40 transition-all duration-300"
                            title="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/ernesto-mendoza-animikind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#f1f4f4]/70 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all duration-300"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Divider and Bottom Links */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <div className="opacity-80">
                        {legalNotice}
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 font-semibold uppercase tracking-wider">
                        <a
                            href="/Legal/GENDER EQUALITY PLAN (GEP) – ANIMIKIND LIMITED (2026-2028)_signed_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#f1f4f4]/90 hover:bg-[#0dc383]/20 hover:text-[#0dc383] hover:border-[#0dc383]/30 transition-all duration-300 text-xs normal-case tracking-normal font-semibold"
                        >
                            <img src={cloudinaryMedia.footer.brandLogo} alt="" className="w-4 h-4 object-contain" />
                            {t.footer.gepLink}
                        </a>
                        <a
                            href="https://www.iubenda.com/privacy-policy/52957714"
                            className="iubenda-white iubenda-noiframe iubenda-embed hover:text-[#0dc383] transition-colors hover:underline underline-offset-4"
                            title="Privacy Policy"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="https://www.iubenda.com/privacy-policy/52957714/cookie-policy"
                            className="iubenda-white iubenda-noiframe iubenda-embed hover:text-[#0dc383] transition-colors hover:underline underline-offset-4"
                            title="Cookie Policy"
                        >
                            Cookie Policy
                        </a>
                        <a
                            href="https://www.iubenda.com/terms-and-conditions/52957714"
                            className="iubenda-white iubenda-noiframe iubenda-embed hover:text-[#0dc383] transition-colors hover:underline underline-offset-4"
                            title="Terms and Conditions"
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href="/Legal/Purpose & Profit_signed.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#f1f4f4]/90 hover:bg-[#0dc383]/20 hover:text-[#0dc383] hover:border-[#0dc383]/30 transition-all duration-300 text-xs normal-case tracking-normal font-semibold"
                        >
                            <img src={cloudinaryMedia.footer.brandLogo} alt="" className="w-4 h-4 object-contain" />
                            Purpose &amp; Profit (Social Impact)
                        </a>
                    </div>
                </div>
                {/* Metricool Tracking Pixel */}
                <img src="https://tracker.metricool.com/c3po.jpg?hash=cb0ea0169a9f8b0126a612c8625b2348" alt="" className="hidden" />
            </div>
        </footer>
    );
};

export default Footer;
