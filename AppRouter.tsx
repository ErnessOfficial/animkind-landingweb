import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import EcosystemPage from './pages/EcosystemPage';
import PlansPage from './pages/PlansPage';
import DemoPage from './pages/DemoPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// About Us
import OriginsPage from './pages/about/OriginsPage';
import SocialFocusingPage from './pages/about/SocialFocusingPage';
import CpdAccreditationPage from './pages/about/CpdAccreditationPage';
import WhyUsPage from './pages/about/WhyUsPage';

// Ecosystem subsections
import UnifiedSafeguardingPage from './pages/ecosystem/UnifiedSafeguardingPage';
import EcosystemStructurePage from './pages/ecosystem/EcosystemStructurePage';
import ProactiveApproachPage from './pages/ecosystem/ProactiveApproachPage';
import EmotionalAiPage from './pages/ecosystem/EmotionalAiPage';
import PrivacySecurityPage from './pages/ecosystem/PrivacySecurityPage';

// Components (formerly Platforms)
import ComponentsOverviewPage from './pages/components/ComponentsOverviewPage';
import AnimikindAppPage from './pages/platforms/AnimikindAppPage';
import SchoolPanelPage from './pages/platforms/SchoolPanelPage';
import AnimikdemiPage from './pages/platforms/AnimikdemiPage';

// Resources
import BlogPage from './pages/resources/BlogPage';
import KeyTopicsPage from './pages/resources/KeyTopicsPage';
import SupportToolsPage from './pages/resources/SupportToolsPage';

// Plans & Pricing
import AnimikdemiCpdPage from './pages/plans/AnimikdemiCpdPage';
import AnimikdemiCertPlusPage from './pages/plans/AnimikdemiCertPlusPage';
import AnimikindCore360Page from './pages/plans/AnimikindCore360Page';

const AppRouter: React.FC = () => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        {/* Home */}
                        <Route path="/" element={<HomePage />} />

                        {/* About Us */}
                        <Route path="/about" element={<Navigate to="/about/origins/" replace />} />
                        <Route path="/about/" element={<Navigate to="/about/origins/" replace />} />
                        <Route path="/about/social" element={<Navigate to="/about/social-focusing/" replace />} />
                        <Route path="/about/social/" element={<Navigate to="/about/social-focusing/" replace />} />
                        <Route path="/about/origins" element={<OriginsPage />} />
                        <Route path="/about/origins/" element={<OriginsPage />} />
                        <Route path="/about/social-focusing" element={<SocialFocusingPage />} />
                        <Route path="/about/social-focusing/" element={<SocialFocusingPage />} />
                        <Route path="/about/cpd-accreditation" element={<CpdAccreditationPage />} />
                        <Route path="/about/cpd-accreditation/" element={<CpdAccreditationPage />} />
                        <Route path="/about/why-us" element={<WhyUsPage />} />
                        <Route path="/about/why-us/" element={<WhyUsPage />} />

                        {/* The Ecosystem */}
                        <Route path="/ecosystem" element={<EcosystemPage />} />
                        <Route path="/ecosystem/" element={<EcosystemPage />} />
                        <Route path="/ecosystem/unified-safeguarding" element={<UnifiedSafeguardingPage />} />
                        <Route path="/ecosystem/unified-safeguarding/" element={<UnifiedSafeguardingPage />} />
                        <Route path="/ecosystem/structure" element={<EcosystemStructurePage />} />
                        <Route path="/ecosystem/structure/" element={<EcosystemStructurePage />} />
                        <Route path="/ecosystem/proactive-approach" element={<ProactiveApproachPage />} />
                        <Route path="/ecosystem/proactive-approach/" element={<ProactiveApproachPage />} />
                        <Route path="/ecosystem/emotional-ai" element={<EmotionalAiPage />} />
                        <Route path="/ecosystem/emotional-ai/" element={<EmotionalAiPage />} />
                        <Route path="/ecosystem/digital-safety" element={<Navigate to="/ecosystem/privacy-security/" replace />} />
                        <Route path="/ecosystem/digital-safety/" element={<Navigate to="/ecosystem/privacy-security/" replace />} />
                        <Route path="/ecosystem/privacy-security" element={<PrivacySecurityPage />} />
                        <Route path="/ecosystem/privacy-security/" element={<PrivacySecurityPage />} />

                        {/* Components (new URL structure) */}
                        <Route path="/components/overview" element={<ComponentsOverviewPage />} />
                        <Route path="/components/overview/" element={<ComponentsOverviewPage />} />
                        <Route path="/components/animikind-app" element={<AnimikindAppPage />} />
                        <Route path="/components/animikind-app/" element={<AnimikindAppPage />} />
                        <Route path="/components/school-panel" element={<SchoolPanelPage />} />
                        <Route path="/components/school-panel/" element={<SchoolPanelPage />} />
                        <Route path="/components/animikdemi" element={<AnimikdemiPage />} />
                        <Route path="/components/animikdemi/" element={<AnimikdemiPage />} />

                        {/* Legacy platform routes (redirect support) */}
                        <Route path="/platforms/animikind-app" element={<AnimikindAppPage />} />
                        <Route path="/platforms/animikind-app/" element={<AnimikindAppPage />} />
                        <Route path="/platforms/school-panel" element={<SchoolPanelPage />} />
                        <Route path="/platforms/school-panel/" element={<SchoolPanelPage />} />
                        <Route path="/platforms/animikdemi" element={<AnimikdemiPage />} />
                        <Route path="/platforms/animikdemi/" element={<AnimikdemiPage />} />

                        {/* Resources */}
                        <Route path="/resources/blog" element={<BlogPage />} />
                        <Route path="/resources/blog/" element={<BlogPage />} />
                        <Route path="/resources/key-topics" element={<KeyTopicsPage />} />
                        <Route path="/resources/key-topics/" element={<KeyTopicsPage />} />
                        <Route path="/resources/support-tools" element={<SupportToolsPage />} />
                        <Route path="/resources/support-tools/" element={<SupportToolsPage />} />

                        {/* Plans & Pricing */}
                        <Route path="/plans/animikdemi-cpd" element={<AnimikdemiCpdPage />} />
                        <Route path="/plans/animikdemi-cpd/" element={<AnimikdemiCpdPage />} />
                        <Route path="/plans/animikdemi-cert-plus" element={<AnimikdemiCertPlusPage />} />
                        <Route path="/plans/animikdemi-cert-plus/" element={<AnimikdemiCertPlusPage />} />
                        <Route path="/plans/animikind-core-360" element={<AnimikindCore360Page />} />
                        <Route path="/plans/animikind-core-360/" element={<AnimikindCore360Page />} />

                        {/* Solutions & Demo */}
                        <Route path="/solutions/plans" element={<PlansPage />} />
                        <Route path="/solutions/plans/" element={<PlansPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/demo/" element={<DemoPage />} />

                        {/* Contact */}
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/contact/" element={<ContactPage />} />

                        {/* Fallback */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
};

export default AppRouter;
