import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cloudinaryMedia } from '../data/cloudinaryMedia';

interface NavChild {
    name: string;
    nameEs: string;
    href: string;
}

interface NavItem {
    name: string;
    nameEs: string;
    href?: string;
    children?: NavChild[];
}

interface SearchEntry {
    href: string;
    label: string;
    section: string;
}

const Header: React.FC = () => {
    const { lang, toggleLang } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close everything on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
        setMobileOpenDropdown(null);
        setSearchOpen(false);
        setSearchQuery('');
    }, [location.pathname]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const navItems: NavItem[] = [
        {
            name: 'About Us',
            nameEs: 'Sobre Nosotros',
            children: [
                { name: 'Who We Are', nameEs: 'Quiénes Somos', href: '/about/origins/' },
                { name: 'Our Social Focusing', nameEs: 'Nuestro Enfoque Social', href: '/about/social-focusing/' },
                { name: 'Our CPD Accreditation', nameEs: 'Nuestra Acreditación CPD', href: '/about/cpd-accreditation/' },
                { name: 'Why Us', nameEs: '¿Por Qué Nosotros?', href: '/about/why-us/' },
            ],
        },
        {
            name: 'The Ecosystem',
            nameEs: 'El Ecosistema',
            children: [
                { name: 'Unified Safeguarding', nameEs: 'Protección Unificada', href: '/ecosystem/unified-safeguarding/' },
                { name: 'Ecosystem Structure', nameEs: 'Estructura del Ecosistema', href: '/ecosystem/structure/' },
                { name: 'Our Proactive Approach', nameEs: 'Nuestro Enfoque Proactivo', href: '/ecosystem/proactive-approach/' },
                { name: 'Innovating: Emotional-AI', nameEs: 'Innovando: IA-Emocional', href: '/ecosystem/emotional-ai/' },
                { name: 'Digital Safety: Privacy & Security', nameEs: 'Seguridad Digital: Privacidad y Seguridad', href: '/ecosystem/privacy-security/' },
            ],
        },
        {
            name: 'Components',
            nameEs: 'Componentes',
            children: [
                { name: 'Overview', nameEs: 'Visión General', href: '/components/overview/' },
                { name: 'AnImiKind App', nameEs: 'AnImiKind App', href: '/components/animikind-app/' },
                { name: 'AnImiKind SchoolPanel', nameEs: 'AnImiKind SchoolPanel', href: '/components/school-panel/' },
                { name: 'AnimiKdemi: Learning Simulator', nameEs: 'AnimiKdemi: Simulador de Aprendizaje', href: '/components/animikdemi/' },
            ],
        },
        {
            name: 'Resources',
            nameEs: 'Recursos',
            children: [
                { name: 'TheKindBlog', nameEs: 'TheKindBlog', href: '/resources/blog/' },
                { name: 'Key Topic Briefs', nameEs: 'Resúmenes de Temas Clave', href: '/resources/key-topics/' },
                { name: 'The Kind-Kit', nameEs: 'The Kind-Kit', href: '/resources/support-tools/' },
            ],
        },
        {
            name: 'Plans & Pricing',
            nameEs: 'Planes y Precios',
            children: [
                { name: 'AnimiKdemi — CPD Learning Simulator', nameEs: 'AnimiKdemi — Simulador CPD (Solo Personal)', href: '/plans/animikdemi-cpd/' },
                { name: 'AnimiKdemi — Certification Plus', nameEs: 'AnimiKdemi — Certification Plus', href: '/plans/animikdemi-cert-plus/' },
                { name: 'AnimiKind CORE 360° — Total Access', nameEs: 'AnimiKind CORE 360° — Acceso Total', href: '/plans/animikind-core-360/' },
            ],
        },
        {
            name: 'Contact Us',
            nameEs: 'Contáctanos',
            href: '/contact/',
        },
    ];

    const toggleDropdown = (name: string) => {
        setOpenDropdown(prev => prev === name ? null : name);
    };

    const toggleMobileDropdown = (name: string) => {
        setMobileOpenDropdown(prev => prev === name ? null : name);
    };

    const getLabel = (item: { name: string; nameEs: string }) => lang === 'es' ? item.nameEs : item.name;

    // Returns true if the current path belongs to this nav group
    const isActiveSection = (item: NavItem): boolean => {
        if (item.href) return location.pathname === item.href || location.pathname.startsWith(item.href);
        return item.children?.some(c => location.pathname === c.href || location.pathname.startsWith(c.href)) ?? false;
    };

    const isActivePage = (href: string): boolean =>
        location.pathname === href || location.pathname.startsWith(href);

    const searchEntries = useMemo(() => {
        const entries: SearchEntry[] = [];
        for (const item of navItems) {
            const sectionLabel = getLabel(item);
            if (item.children?.length) {
                for (const child of item.children) {
                    entries.push({ href: child.href, label: getLabel(child), section: sectionLabel });
                }
            } else if (item.href) {
                entries.push({ href: item.href, label: sectionLabel, section: sectionLabel });
            }
        }
        return entries;
    }, [lang]);

    const filteredSearchResults = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return [];

        const seen = new Set<string>();
        return searchEntries
            .filter((entry) => {
                const isMatch = entry.label.toLowerCase().includes(query) || entry.section.toLowerCase().includes(query);
                if (!isMatch || seen.has(entry.href)) return false;
                seen.add(entry.href);
                return true;
            })
            .slice(0, 6);
    }, [searchEntries, searchQuery]);

    const closeSearch = () => {
        setSearchOpen(false);
        setSearchQuery('');
    };

    const handleSearchNavigate = (href: string) => {
        navigate(href);
        setSearchOpen(false);
        setSearchQuery('');
        setMobileMenuOpen(false);
    };

    const handleSearchSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();
        if (!searchQuery.trim()) return;

        const topResult = filteredSearchResults[0];
        if (topResult) {
            handleSearchNavigate(topResult.href);
        }
    };

    return (
        <nav className="fixed w-full z-40 bg-white/95 backdrop-blur-xl shadow-md py-1 border-b border-gray-100">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Left: Logo (links to Home) + CPD badge */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-2" title="Home">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#0dc383] rounded-full blur opacity-20"></div>
                                <img
                                    src={cloudinaryMedia.header.primaryLogo}
                                    alt="AnImiKind – Go to Home"
                                    className="h-14 w-auto object-contain relative z-10"
                                />
                            </div>
                        </Link>
                        <div className="hidden md:block h-8 w-px bg-gray-300"></div>
                        <div className="hidden md:flex items-center">
                            <img src={cloudinaryMedia.header.cpdLogo} alt="CPD Certified" className="h-10 w-auto object-contain" />
                        </div>
                    </div>

                    {/* Centre: Desktop navigation */}
                    <div className="hidden xl:flex items-center gap-1" ref={dropdownRef}>
                        {navItems.map((item) => (
                            item.children ? (
                                <div key={item.name} className="relative">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleDropdown(item.name); }}
                                        className={`px-3 py-2 rounded-lg text-sm font-bold tracking-wide whitespace-nowrap flex items-center gap-1 transition-all duration-200
                      ${openDropdown === item.name
                                                ? 'bg-[#0dc383] text-white shadow-md'
                                                : isActiveSection(item) && openDropdown !== item.name
                                                    ? 'text-[#0dc383] bg-[#0dc383]/8'
                                                    : 'text-[#1d4c73] hover:bg-[#0dc383]/10 hover:text-[#0dc383]'}`}
                                    >
                                        {getLabel(item)}
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === item.name && (
                                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                                            style={{ animation: 'fadeInUp 0.15s ease-out' }}>
                                            {item.children.map((child, cIdx) => (
                                                <Link
                                                    key={cIdx}
                                                    to={child.href}
                                                    className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors ${isActivePage(child.href)
                                                        ? 'text-[#0dc383] bg-[#0dc383]/8 font-bold'
                                                        : 'text-[#1d4c73] hover:bg-[#0dc383]/10 hover:text-[#0dc383]'
                                                        }`}
                                                >
                                                    {isActivePage(child.href) && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0dc383] flex-shrink-0" />
                                                    )}
                                                    {getLabel(child)}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href!}
                                    className={`px-3 py-2 rounded-lg text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-200 ${isActivePage(item.href!)
                                        ? 'text-[#0dc383] bg-[#0dc383]/8'
                                        : 'text-[#1d4c73] hover:bg-[#0dc383]/10 hover:text-[#0dc383]'
                                        }`}
                                >
                                    {getLabel(item)}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right: Book a Demo + Search + Language */}
                    <div className="hidden xl:flex items-center gap-3">
                        {/* Search */}
                        <div className="relative">
                            {searchOpen ? (
                                <>
                                    <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-[#f8fafc] rounded-lg border border-[#1d4c73]/10 px-3 py-1.5">
                                        <Search className="w-4 h-4 text-[#1d4c73]/50" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder={lang === 'en' ? 'Search pages...' : 'Buscar páginas...'}
                                            className="bg-transparent text-sm text-[#1d4c73] placeholder-[#1d4c73]/40 outline-none w-48"
                                            autoFocus
                                            onKeyDown={(e) => {
                                                if (e.key === 'Escape') closeSearch();
                                            }}
                                        />
                                        <button type="button" onClick={closeSearch} className="text-[#1d4c73]/40 hover:text-[#1d4c73]" aria-label="Close search">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </form>
                                    {searchQuery.trim() && (
                                        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                                            {filteredSearchResults.length > 0 ? (
                                                filteredSearchResults.map((result) => (
                                                    <button
                                                        key={result.href}
                                                        type="button"
                                                        onMouseDown={(e) => e.preventDefault()}
                                                        onClick={() => handleSearchNavigate(result.href)}
                                                        className="w-full text-left px-4 py-2.5 hover:bg-[#0dc383]/10 transition-colors"
                                                    >
                                                        <p className="text-sm font-semibold text-[#1d4c73]">{result.label}</p>
                                                        <p className="text-[11px] text-[#1d4c73]/50">{result.section}</p>
                                                    </button>
                                                ))
                                            ) : (
                                                <p className="px-4 py-2 text-sm text-[#1d4c73]/60">
                                                    {lang === 'en' ? 'No results found' : 'No hay resultados'}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <button
                                    onClick={() => setSearchOpen(true)}
                                    className="p-2 rounded-lg text-[#1d4c73] hover:bg-[#0dc383]/10 hover:text-[#0dc383] transition-all"
                                    title={lang === 'en' ? 'Search' : 'Buscar'}
                                    aria-label={lang === 'en' ? 'Open search' : 'Abrir búsqueda'}
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Book a Demo */}
                        <Link
                            to="/demo/"
                            className="bg-[#2d3e50] text-white px-5 py-2 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#1e2c29] transition-all shadow-md hover:shadow-lg"
                        >
                            {lang === 'en' ? 'Book a Demo' : 'Reservar Demo'}
                        </Link>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#1d4c73]/10 text-[#1d4c73] hover:border-[#0dc383]/30 hover:text-[#0dc383] transition-all"
                        >
                            <img
                                src={lang === 'en' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/es.png'}
                                alt={lang === 'en' ? 'English' : 'Español'}
                                className="w-5 h-auto rounded-sm shadow-sm"
                            />
                            <span className="uppercase text-xs font-bold">{lang === 'en' ? 'EN' : 'ES'}</span>
                        </button>
                    </div>

                    {/* Mobile: right controls */}
                    <div className="xl:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1 px-2 py-1 rounded-md border border-[#1d4c73]/20 text-[#1d4c73] text-sm font-bold"
                        >
                            <img
                                src={lang === 'en' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/es.png'}
                                alt={lang}
                                className="w-4 h-auto rounded-sm"
                            />
                            {lang.toUpperCase()}
                        </button>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#1d4c73] p-1">
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-[#1d4c73]/10 absolute w-full shadow-xl max-h-[80vh] overflow-y-auto"
                    style={{ animation: 'fadeInUp 0.15s ease-out' }}>
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {/* Home Link */}
                        <Link to="/" className="block px-3 py-3 border-b border-gray-100 text-base font-bold text-[#1d4c73]">
                            Home
                        </Link>

                        {navItems.map((item) => (
                            item.children ? (
                                <div key={item.name}>
                                    <button
                                        onClick={() => toggleMobileDropdown(item.name)}
                                        className={`flex items-center justify-between w-full px-3 py-3 border-b border-gray-100 text-base font-bold transition-colors ${isActiveSection(item) ? 'text-[#0dc383]' : 'text-[#1d4c73]'
                                            }`}
                                    >
                                        {getLabel(item)}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileOpenDropdown === item.name && (
                                        <div className="pl-6 space-y-0.5 py-1">
                                            {item.children.map((child, cIdx) => (
                                                <Link
                                                    key={cIdx}
                                                    to={child.href}
                                                    className={`flex items-center gap-2 px-3 py-2.5 text-sm font-semibold transition-colors ${isActivePage(child.href)
                                                        ? 'text-[#0dc383] font-bold'
                                                        : 'text-[#1d4c73]/80 hover:text-[#0dc383]'
                                                        }`}
                                                >
                                                    {isActivePage(child.href) && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0dc383] flex-shrink-0" />
                                                    )}
                                                    {getLabel(child)}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href!}
                                    className="block px-3 py-3 border-b border-gray-100 text-base font-bold text-[#1d4c73]"
                                >
                                    {getLabel(item)}
                                </Link>
                            )
                        ))}

                        {/* Mobile Search */}
                        <div className="px-3 py-3 border-b border-gray-100">
                            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 bg-[#f8fafc] rounded-lg border border-[#1d4c73]/10 px-3 py-2">
                                <Search className="w-4 h-4 text-[#1d4c73]/50" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={lang === 'en' ? 'Search pages...' : 'Buscar páginas...'}
                                    className="bg-transparent text-sm text-[#1d4c73] placeholder-[#1d4c73]/40 outline-none flex-1"
                                />
                            </form>
                            {searchQuery.trim() && (
                                <div className="mt-2 bg-white rounded-lg border border-gray-100 overflow-hidden">
                                    {filteredSearchResults.length > 0 ? (
                                        filteredSearchResults.map((result) => (
                                            <button
                                                key={`mobile-${result.href}`}
                                                type="button"
                                                onClick={() => handleSearchNavigate(result.href)}
                                                className="w-full text-left px-3 py-2.5 border-b border-gray-100 last:border-b-0"
                                            >
                                                <p className="text-sm font-semibold text-[#1d4c73]">{result.label}</p>
                                                <p className="text-[11px] text-[#1d4c73]/50">{result.section}</p>
                                            </button>
                                        ))
                                    ) : (
                                        <p className="px-3 py-2 text-sm text-[#1d4c73]/60">
                                            {lang === 'en' ? 'No results found' : 'No hay resultados'}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Mobile CTA */}
                        <Link
                            to="/demo/"
                            className="block w-full text-center mt-4 px-5 py-4 rounded-xl bg-[#0dc383] text-white font-bold shadow-lg active:scale-95 transition-transform"
                        >
                            {lang === 'en' ? 'Book a Demo' : 'Reservar Demo'}
                        </Link>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </nav>
    );
};

export default Header;
