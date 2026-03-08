import React, { Suspense } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../content';

const Chatbot = React.lazy(() => import('./Chatbot'));

const Layout: React.FC = () => {
    const location = useLocation();
    const { lang } = useLanguage();
    const t = content[lang];

    const isHome = location.pathname === '/' || location.pathname === '';

    // Scroll to top on route change
    React.useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const el = document.querySelector(location.hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-[#f1f4f4] text-[#1e2c29] font-sans selection:bg-[#0dc383]/20 selection:text-[#1e2c29] antialiased">
            <Header />
            <main>
                <Outlet />
            </main>
            {/* ── Back to Home strip — visible on every page except home ── */}
            {!isHome && (
                <div className="w-full bg-[#0b2340] py-2.5 flex items-center justify-center gap-3 sticky bottom-0 z-40 shadow-lg">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0dc383] text-white font-bold text-sm hover:bg-[#0bb075] hover:shadow-lg transition-all active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        {lang === 'en' ? 'Back to Home' : 'Volver al Inicio'}
                    </Link>
                    <span className="text-white/50 text-xs hidden sm:inline">
                        {lang === 'en' ? 'AnImiKind – The Ecosystem' : 'AnImiKind – El Ecosistema'}
                    </span>
                </div>
            )}
            <Footer />
            <Suspense fallback={null}>
                <Chatbot lang={lang} content={t.chat} />
            </Suspense>
        </div>
    );
};

export default Layout;
