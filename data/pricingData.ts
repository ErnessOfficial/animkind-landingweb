export interface PlanFeature {
    category: string;
    feature: string;
    coreSaas: boolean | string;
    animikdemiPlus: boolean | string;
    cpdEdition: boolean | string;
}

export interface PricingPlan {
    id: string;
    name: string;
    nameEs: string;
    tagline: string;
    taglineEs: string;
    highlighted?: boolean;
}

export const plans: PricingPlan[] = [
    {
        id: 'core-saas',
        name: 'Core SaaS',
        nameEs: 'Core SaaS',
        tagline: 'Essential safeguarding and emotional wellbeing',
        taglineEs: 'Protección esencial y bienestar emocional',
    },
    {
        id: 'animikdemi-plus',
        name: 'Animikdemi Plus',
        nameEs: 'Animikdemi Plus',
        tagline: 'Full ecosystem with training simulator',
        taglineEs: 'Ecosistema completo con simulador de formación',
        highlighted: true,
    },
    {
        id: 'cpd-edition',
        name: 'CPD Edition',
        nameEs: 'Edición CPD',
        tagline: 'Complete package with certified CPD training',
        taglineEs: 'Paquete completo con formación certificada CPD',
    },
];

export const features: PlanFeature[] = [
    // AnImiKind App
    { category: 'AnImiKind App', feature: 'EAI-powered emotional chat for students', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'AnImiKind App', feature: 'Intelligent case detection & risk signals', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'AnImiKind App', feature: 'One-Click Reporting function', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'AnImiKind App', feature: 'Secure School Bridge (MySchool-LinkCode)', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'AnImiKind App', feature: 'Multiplatform accessibility (iOS, Android, Web)', coreSaas: true, animikdemiPlus: true, cpdEdition: true },

    // School Panel
    { category: 'School Panel', feature: 'Real-time alert dashboard', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'School Panel', feature: 'Case tracking & escalation', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'School Panel', feature: 'EAI-assisted intervention plans', coreSaas: false, animikdemiPlus: true, cpdEdition: true },
    { category: 'School Panel', feature: 'Anonymous quantitative statistics', coreSaas: false, animikdemiPlus: true, cpdEdition: true },
    { category: 'School Panel', feature: 'Emotional climate monitoring', coreSaas: false, animikdemiPlus: true, cpdEdition: true },

    // AnimiKdemi
    { category: 'AnimiKdemi', feature: 'Reflective learning simulator (EAI)', coreSaas: false, animikdemiPlus: true, cpdEdition: true },
    { category: 'AnimiKdemi', feature: 'Age & role-adapted learning paths', coreSaas: false, animikdemiPlus: true, cpdEdition: true },
    { category: 'AnimiKdemi', feature: 'Selectable simulation cases', coreSaas: false, animikdemiPlus: true, cpdEdition: true },
    { category: 'AnimiKdemi', feature: 'Gamification layer', coreSaas: false, animikdemiPlus: true, cpdEdition: true },

    // CPD & Certification
    { category: 'CPD & Certification', feature: 'CPD-certified staff training programme', coreSaas: false, animikdemiPlus: false, cpdEdition: true },
    { category: 'CPD & Certification', feature: 'KCSIE 2026 alignment modules', coreSaas: false, animikdemiPlus: false, cpdEdition: true },
    { category: 'CPD & Certification', feature: 'Gold School Wellbeing & Safeguarding Certification', coreSaas: false, animikdemiPlus: false, cpdEdition: true },
    { category: 'CPD & Certification', feature: 'Mandatory professional training programmes', coreSaas: false, animikdemiPlus: false, cpdEdition: true },

    // Support & Compliance
    { category: 'Support & Compliance', feature: 'GDPR-compliant data handling', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'Support & Compliance', feature: 'Privacy-first anonymisation', coreSaas: true, animikdemiPlus: true, cpdEdition: true },
    { category: 'Support & Compliance', feature: 'Dedicated onboarding support', coreSaas: false, animikdemiPlus: true, cpdEdition: true },
    { category: 'Support & Compliance', feature: 'Priority support channel', coreSaas: false, animikdemiPlus: false, cpdEdition: true },
];

// Spanish translations for features
export const featureTranslations: Record<string, { category: string; feature: string }> = {
    'EAI-powered emotional chat for students': { category: 'AnImiKind App', feature: 'Chat emocional con IAE para estudiantes' },
    'Intelligent case detection & risk signals': { category: 'AnImiKind App', feature: 'Detección inteligente de casos y señales de riesgo' },
    'One-Click Reporting function': { category: 'AnImiKind App', feature: 'Función de reporte con un solo clic' },
    'Secure School Bridge (MySchool-LinkCode)': { category: 'AnImiKind App', feature: 'Puente Escolar Seguro (Código-MiEscuela)' },
    'Multiplatform accessibility (iOS, Android, Web)': { category: 'AnImiKind App', feature: 'Accesibilidad multiplataforma (iOS, Android, Web)' },
    'Real-time alert dashboard': { category: 'School Panel', feature: 'Panel de alertas en tiempo real' },
    'Case tracking & escalation': { category: 'School Panel', feature: 'Seguimiento y escalado de casos' },
    'EAI-assisted intervention plans': { category: 'School Panel', feature: 'Planes de intervención asistidos por IAE' },
    'Anonymous quantitative statistics': { category: 'School Panel', feature: 'Estadísticas cuantitativas anónimas' },
    'Emotional climate monitoring': { category: 'School Panel', feature: 'Monitoreo del clima emocional' },
    'Reflective learning simulator (EAI)': { category: 'AnimiKdemi', feature: 'Simulador de aprendizaje reflexivo (IAE)' },
    'Age & role-adapted learning paths': { category: 'AnimiKdemi', feature: 'Rutas de aprendizaje adaptadas a edad y rol' },
    'Selectable simulation cases': { category: 'AnimiKdemi', feature: 'Casos seleccionables para simulaciones' },
    'Gamification layer': { category: 'AnimiKdemi', feature: 'Capa de gamificación' },
    'CPD-certified staff training programme': { category: 'CPD y Certificación', feature: 'Programa de formación certificado por CPD' },
    'KCSIE 2026 alignment modules': { category: 'CPD y Certificación', feature: 'Módulos de alineación KCSIE 2026' },
    'Gold School Wellbeing & Safeguarding Certification': { category: 'CPD y Certificación', feature: 'Certificación Oro de Bienestar y Protección Escolar' },
    'Mandatory professional training programmes': { category: 'CPD y Certificación', feature: 'Programas de formación profesional obligatorios' },
    'GDPR-compliant data handling': { category: 'Soporte y Cumplimiento', feature: 'Manejo de datos conforme al GDPR' },
    'Privacy-first anonymisation': { category: 'Soporte y Cumplimiento', feature: 'Anonimización con privacidad primero' },
    'Dedicated onboarding support': { category: 'Soporte y Cumplimiento', feature: 'Soporte de incorporación dedicado' },
    'Priority support channel': { category: 'Soporte y Cumplimiento', feature: 'Canal de soporte prioritario' },
};
