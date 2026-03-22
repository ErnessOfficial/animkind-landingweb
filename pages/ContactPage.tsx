import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BrandIcon } from '../components/BrandIcon';

const BOOKING_URL = 'https://calendly.com/animikind/30min';
const PRIVACY_POLICY_URL = 'https://www.iubenda.com/privacy-policy/52957714';
const CONTACT_ENDPOINT = '/api/contact';

const SCHOOL_TYPE_OPTIONS = [
    'Primary',
    'Secondary',
    'Special Needs',
    'Multi-Phase/Combined',
    'International School',
] as const;

const SCHOOL_SIZE_OPTIONS = [
    '0-250',
    '251-500',
    '501-1000',
    '1001-1500',
    '1501-2000',
    '2001+',
] as const;

const CONTACT_METHOD_OPTIONS = ['Phone', 'Email', 'No Preference'] as const;

const MARKETING_CONSENT_VALUE = 'Yes, I would like to receive emails with updates, news and promotions from Animikind Ecosystem';
const PRIVACY_CONSENT_VALUE = 'Yes, I agree.';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFormState = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    schoolName: string;
    schoolType: string;
    schoolSize: string;
    contactMethod: string;
    message: string;
    marketingConsent: boolean;
    privacyConsent: boolean;
};

const initialFormState: ContactFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    schoolName: '',
    schoolType: '',
    schoolSize: '',
    contactMethod: '',
    message: '',
    marketingConsent: false,
    privacyConsent: false,
};

const fieldLabelClass = 'mb-2 block text-sm font-bold text-[#1e2c29]';
const fieldClass = 'w-full rounded-2xl border border-[#d7e2ea] bg-white px-4 py-3.5 text-sm text-[#1e2c29] shadow-sm outline-none transition-all placeholder:text-[#1d4c73]/35 focus:border-[#0dc383] focus:ring-4 focus:ring-[#0dc383]/12';
const checkboxClass = 'mt-1 h-5 w-5 rounded border border-[#c8d7e2] text-[#0dc383] focus:ring-[#0dc383]';

const ContactPage: React.FC = () => {
    const { lang } = useLanguage();
    const es = lang === 'es';
    const [formData, setFormData] = useState<ContactFormState>(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState('');

    useEffect(() => {
        document.title = es ? 'Contáctanos – AnImiKind' : 'Contact Us – AnImiKind';
    }, [lang]);

    const emailIsValid = useMemo(() => EMAIL_REGEX.test(formData.email.trim()), [formData.email]);

    const isFormComplete = useMemo(() => {
        return [
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.phoneNumber,
            formData.jobTitle,
            formData.schoolName,
            formData.schoolType,
            formData.schoolSize,
            formData.contactMethod,
            formData.message,
        ].every((value) => value.trim().length > 0)
            && formData.marketingConsent
            && formData.privacyConsent;
    }, [formData]);

    const canSubmit = isFormComplete && emailIsValid && !isSubmitting;

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
        setSubmitError('');
        setSubmitSuccess('');
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData((current) => ({ ...current, [name]: checked }));
        setSubmitError('');
        setSubmitSuccess('');
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!canSubmit) {
            setSubmitError(
                emailIsValid
                    ? 'Please complete all required fields and confirm both consent statements.'
                    : 'Please enter a valid email address before submitting.',
            );
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess('');

        try {
            const response = await fetch(CONTACT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    First_Name: formData.firstName.trim(),
                    Last_Name: formData.lastName.trim(),
                    Email: formData.email.trim(),
                    Phone_Number: formData.phoneNumber.trim(),
                    Job_Title: formData.jobTitle.trim(),
                    School_Name: formData.schoolName.trim(),
                    School_Type: formData.schoolType,
                    School_Size: formData.schoolSize,
                    Contact_Method: formData.contactMethod,
                    Your_Message: formData.message.trim(),
                    Publi_Consent: formData.marketingConsent ? MARKETING_CONSENT_VALUE : '',
                    Data_Privacy_Consent: formData.privacyConsent ? PRIVACY_CONSENT_VALUE : '',
                }),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || !result?.ok) {
                throw new Error(result?.error || 'Unable to submit the form right now.');
            }

            setSubmitSuccess('Thank you. Your message has been sent successfully.');
            setFormData(initialFormState);
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : 'Unable to submit the form right now.',
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-16">
            <style>{`
                @keyframes fadeSlideUp { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
                .animate-fadeSlideUp { animation: fadeSlideUp 0.55s cubic-bezier(0.22,0.68,0,1.2) both; }
            `}</style>

            <section className="relative w-full min-h-[280px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0f2d50] to-[#1d4c73]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
                    {[[120, 60], [360, 160], [620, 55], [860, 155], [1080, 70], [200, 230], [560, 215], [900, 240]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#0dc383" />
                    ))}
                </svg>
                <div className="absolute right-0 top-0 h-full flex items-center opacity-[0.05] pointer-events-none">
                    <BrandIcon name="Envelope" color="green" size={380} weight="duotone" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center w-full">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-5">
                        <BrandIcon name="Envelope" color="green" size={13} weight="bold" />
                        {es ? 'KindTeam' : 'KindTeam'}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {es ? 'Ponte en Contacto' : 'Get in Touch'}
                    </h1>
                    <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
                        {es
                            ? 'Ya seas líder escolar, responsable de salvaguarda o profesional de la educación — estamos aquí para ayudarte.'
                            : "Whether you're a school leader, safeguarding officer, or education professional — we're here to help."}
                    </p>
                </div>
            </section>

            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">
                        <div className="space-y-6 animate-fadeSlideUp">
                            <div className="bg-white rounded-[1.75rem] shadow-lg border border-[#e5eaf0] p-7 space-y-5">
                                <h2 className="text-lg font-extrabold text-[#1e2c29]">
                                    {es ? 'Información de contacto' : 'Contact information'}
                                </h2>
                                {[
                                    { icon: 'Envelope' as const, color: 'green' as const, label: es ? 'Email' : 'Email', value: 'hello@animikind.com' },
                                    { icon: 'MapPin' as const, color: 'navy' as const, label: es ? 'Ubicación' : 'Location', value: 'United Kingdom' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(13,195,131,0.12)', border: '1.5px solid rgba(13,195,131,0.3)' }}>
                                            <BrandIcon name={item.icon} color={item.color} size={16} weight="bold" />
                                        </div>
                                        <div>
                                            <p className="text-[#1d4c73]/50 text-xs font-semibold">{item.label}</p>
                                            <p className="text-[#1e2c29] text-sm font-bold mt-0.5">{item.value}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-3 border-t border-[#e5eaf0]">
                                    <p className="text-[#1d4c73]/40 text-xs font-semibold mb-3">{es ? 'Redes sociales' : 'Social media'}</p>
                                    <div className="flex gap-3">
                                        {[
                                            { href: 'https://www.facebook.com/animikindecosystem', label: 'Facebook', hoverBg: '#1877F2', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                                            { href: 'https://instagram.com/animikind', label: 'Instagram', hoverBg: '#E4405F', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" /></svg> },
                                            { href: 'https://linkedin.com/in/ernesto-mendoza-animikind', label: 'LinkedIn', hoverBg: '#0A66C2', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
                                        ].map((s, i) => (
                                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                                className="w-9 h-9 rounded-xl bg-[#f4f7fb] border border-[#e5eaf0] flex items-center justify-center text-[#1d4c73] hover:text-white transition-all"
                                                style={{ '--hover-bg': s.hoverBg } as React.CSSProperties}
                                                onMouseEnter={e => (e.currentTarget.style.background = s.hoverBg)}
                                                onMouseLeave={e => (e.currentTarget.style.background = '')}
                                            >
                                                {s.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#0b2340] to-[#1d4c73] rounded-[1.75rem] shadow-xl border border-white/10 p-7 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(13,195,131,0.2)', border: '1.5px solid rgba(13,195,131,0.4)' }}>
                                        <BrandIcon name="Calendar" color="green" size={18} weight="bold" />
                                    </div>
                                    <h3 className="text-base font-extrabold">{es ? 'Reserva una Demo Gratuita' : 'Book a Free Demo'}</h3>
                                </div>
                                <p className="text-white/65 text-sm leading-relaxed mb-5">
                                    {es
                                        ? 'Agenda una sesión personalizada de 30 min para ver el ecosistema AnimiKind en acción.'
                                        : 'Schedule a personalised 30-min session to see the AnimiKind ecosystem in action.'}
                                </p>
                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#0dc383]/40 transition-all hover:-translate-y-0.5 active:scale-95"
                                >
                                    {es ? 'Reservar Demo →' : 'Schedule Demo →'}
                                </a>
                                <p className="text-white/35 text-xs text-center mt-3">{es ? 'Gratis · 30 min · Sin compromiso' : 'Free · 30 min · No commitment'}</p>
                            </div>

                            <div className="bg-white rounded-[1.5rem] border border-[#e5eaf0] p-5">
                                <p className="text-[#1d4c73]/40 text-xs font-bold tracking-widest uppercase mb-3">{es ? 'Cumplimiento legal' : 'Legal compliance'}</p>
                                <div className="flex flex-wrap gap-2">
                                    {['UK GDPR', 'OSA 2023', 'KCSIE 2026', 'CPD #788968'].map((b, i) => (
                                        <span key={i} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#f4f7fb] border border-[#e5eaf0] text-[#1d4c73] text-[11px] font-bold">
                                            <BrandIcon name="CheckCircle" color="green" size={11} weight="fill" />
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] shadow-xl border border-[#e5eaf0] overflow-hidden animate-fadeSlideUp" style={{ animationDelay: '80ms' }}>
                            <div className="bg-gradient-to-r from-[#0b2340] to-[#1d4c73] px-8 py-5 flex items-center gap-3">
                                <BrandIcon name="Megaphone" color="green" size={20} weight="bold" />
                                <div>
                                    <h2 className="text-white font-extrabold text-base">{es ? 'Envíanos un mensaje' : 'Send us a message'}</h2>
                                    <p className="text-white/55 text-xs">{es ? 'Respondemos en menos de 24 horas' : 'We respond within 24 hours'}</p>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8 bg-[radial-gradient(circle_at_top,_rgba(13,195,131,0.08),_transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)]">
                                <div className="mb-8">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe7dd] bg-[#eff9f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0b8e60]">
                                        <BrandIcon name="CheckCircle" color="green" size={12} weight="fill" />
                                        Professional Contact Form
                                    </span>
                                    <h3 className="mt-4 text-2xl font-extrabold text-[#1e2c29]">Tell us about your school or organisation</h3>
                                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#1d4c73]/72">
                                        Share the key details below and the KindTeam will respond with the most relevant next step, whether that is a conversation, a demo, or more information about the ecosystem.
                                    </p>
                                </div>

                                {submitSuccess && (
                                    <div className="mb-6 rounded-2xl border border-[#b8ead3] bg-[#effbf4] px-4 py-3 text-sm font-medium text-[#156f4f]">
                                        {submitSuccess}
                                    </div>
                                )}

                                {submitError && (
                                    <div className="mb-6 rounded-2xl border border-[#f3c8c8] bg-[#fff6f6] px-4 py-3 text-sm font-medium text-[#b44747]">
                                        {submitError}
                                    </div>
                                )}

                                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="firstName">First Name</label>
                                            <input id="firstName" name="firstName" type="text" className={fieldClass} value={formData.firstName} onChange={handleInputChange} required />
                                        </div>
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="lastName">Last Name</label>
                                            <input id="lastName" name="lastName" type="text" className={fieldClass} value={formData.lastName} onChange={handleInputChange} required />
                                        </div>
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="email">Email</label>
                                            <input id="email" name="email" type="email" className={fieldClass} value={formData.email} onChange={handleInputChange} required aria-invalid={formData.email.length > 0 && !emailIsValid} />
                                            {formData.email.length > 0 && !emailIsValid && (
                                                <p className="mt-2 text-xs font-medium text-[#c05353]">Please enter a valid email address.</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="phoneNumber">Phone Number</label>
                                            <input id="phoneNumber" name="phoneNumber" type="tel" className={fieldClass} value={formData.phoneNumber} onChange={handleInputChange} required />
                                        </div>
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="jobTitle">Job Title</label>
                                            <input id="jobTitle" name="jobTitle" type="text" className={fieldClass} value={formData.jobTitle} onChange={handleInputChange} required />
                                        </div>
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="schoolName">School/Institution Name</label>
                                            <input id="schoolName" name="schoolName" type="text" className={fieldClass} value={formData.schoolName} onChange={handleInputChange} required />
                                        </div>
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="schoolType">School Type</label>
                                            <select id="schoolType" name="schoolType" className={fieldClass} value={formData.schoolType} onChange={handleInputChange} required>
                                                <option value="">Select school type</option>
                                                {SCHOOL_TYPE_OPTIONS.map((option) => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className={fieldLabelClass} htmlFor="schoolSize">School Size</label>
                                            <select id="schoolSize" name="schoolSize" className={fieldClass} value={formData.schoolSize} onChange={handleInputChange} required>
                                                <option value="">Select school size</option>
                                                {SCHOOL_SIZE_OPTIONS.map((option) => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className={fieldLabelClass} htmlFor="contactMethod">Preferred Contact Method</label>
                                        <select id="contactMethod" name="contactMethod" className={fieldClass} value={formData.contactMethod} onChange={handleInputChange} required>
                                            <option value="">Select a contact method</option>
                                            {CONTACT_METHOD_OPTIONS.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className={fieldLabelClass} htmlFor="message">How Can we help?</label>
                                        <textarea id="message" name="message" rows={6} className={`${fieldClass} resize-y min-h-[164px]`} value={formData.message} onChange={handleInputChange} required />
                                    </div>

                                    <div className="space-y-4 rounded-[1.6rem] border border-[#e1e8ee] bg-white/80 p-5">
                                        <label className="flex items-start gap-3">
                                            <input
                                                id="marketingConsent"
                                                name="marketingConsent"
                                                type="checkbox"
                                                className={checkboxClass}
                                                checked={formData.marketingConsent}
                                                onChange={handleCheckboxChange}
                                                required
                                            />
                                            <span className="text-sm leading-relaxed text-[#1d4c73]">
                                                Yes, I would like to receive emails with updates, news and promotions from Animikind Ecosystem
                                            </span>
                                        </label>

                                        <label className="flex items-start gap-3">
                                            <input
                                                id="privacyConsent"
                                                name="privacyConsent"
                                                type="checkbox"
                                                className={checkboxClass}
                                                checked={formData.privacyConsent}
                                                onChange={handleCheckboxChange}
                                                required
                                            />
                                            <span className="text-sm leading-relaxed text-[#1d4c73]">
                                                Yes, I agree to the processing of my personal data for the purpose of responding to my inquiry. I understand that my information will be handled in accordance with the{' '}
                                                <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-[#1d4c73] underline decoration-[#0dc383]/60 underline-offset-4">
                                                    Privacy Policy
                                                </a>
                                                {' '}and that I can request the deletion of my data at any time by contacting info@animikind.com.
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="text-xs leading-relaxed text-[#1d4c73]/55">
                                            The submit button will only activate once all required fields are complete, the email format is valid, and both consent statements are confirmed.
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={!canSubmit}
                                            className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all ${canSubmit
                                                ? 'bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white shadow-lg shadow-[#0dc383]/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0dc383]/35 active:scale-[0.99]'
                                                : 'cursor-not-allowed bg-[#d8e3ea] text-[#7e97aa]'
                                                }`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit'}
                                            <BrandIcon name="ArrowRight" color={canSubmit ? 'white' : '#7e97aa'} size={15} weight="bold" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
