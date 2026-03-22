import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandIcon } from '../components/BrandIcon';
import { useLanguage } from '../contexts/LanguageContext';

const DemoConfirmationPage: React.FC = () => {
    const { lang } = useLanguage();
    const location = useLocation();
    const es = lang === 'es';

    useEffect(() => {
        document.title = es
            ? 'Confirmación de Demo – AnImiKind'
            : 'Demo Confirmation – AnImiKind';
    }, [es]);

    const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

    const eventName = params.get('event_type_name') || params.get('event_name') || '';
    const inviteeName = params.get('invitee_full_name') || params.get('name') || '';
    const inviteeEmail = params.get('invitee_email') || params.get('email') || '';
    const startTime = params.get('event_start_time') || params.get('start_time') || '';
    const endTime = params.get('event_end_time') || params.get('end_time') || '';
    const timezone = params.get('timezone') || params.get('invitee_timezone') || '';

    const extraAnswers = useMemo(() => {
        return Array.from(params.entries())
            .filter(([key, value]) => /^answer_\d+$/i.test(key) && value.trim().length > 0)
            .map(([key, value]) => ({ key, value }));
    }, [params]);

    const hasCalendlyDetails = Boolean(eventName || inviteeName || inviteeEmail || startTime || endTime || extraAnswers.length);

    const formatDateTime = (value: string) => {
        if (!value) return '';

        const parsed = new Date(value);
        if (Number.isNaN(parsed.getTime())) return value;

        return parsed.toLocaleString(es ? 'es-ES' : 'en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: timezone || undefined,
        });
    };

    const detailCards = [
        { labelEn: 'Booked by', labelEs: 'Reservado por', value: inviteeName || '-' },
        { labelEn: 'Email', labelEs: 'Email', value: inviteeEmail || '-' },
        { labelEn: 'Event', labelEs: 'Evento', value: eventName || '-' },
        { labelEn: 'Start time', labelEs: 'Hora de inicio', value: startTime ? formatDateTime(startTime) : '-' },
        { labelEn: 'End time', labelEs: 'Hora de fin', value: endTime ? formatDateTime(endTime) : '-' },
        { labelEn: 'Timezone', labelEs: 'Zona horaria', value: timezone || '-' },
    ].filter((item) => item.value !== '-');

    return (
        <div className="pt-16">
            <section className="relative w-full min-h-[320px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#061529] via-[#0b2340] to-[#1d4c73]" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice">
                    {[[90, 80], [260, 140], [460, 70], [690, 150], [910, 90], [1080, 170], [170, 250], [470, 240], [760, 260]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#0dc383" />
                    ))}
                    {[[90, 80, 260, 140], [260, 140, 460, 70], [460, 70, 690, 150], [690, 150, 910, 90], [170, 250, 470, 240], [470, 240, 760, 260]].map(([x1, y1, x2, y2], i) => (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0dc383" strokeWidth="1.2" strokeDasharray="6 9" />
                    ))}
                </svg>

                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0dc383]/20 border border-[#0dc383]/40 text-[#0dc383] text-xs font-bold tracking-widest uppercase mb-6">
                        <BrandIcon name="CheckCircle" color="green" size={13} weight="fill" />
                        {es ? 'Reserva Confirmada' : 'Booking Confirmed'}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                        {es ? 'Tu demo ha sido confirmada' : 'Your demo has been confirmed'}
                    </h1>
                    <p className="text-white/78 text-lg leading-relaxed max-w-3xl mx-auto">
                        {es
                            ? 'Gracias por reservar una sesión con AnImiKind. A continuación puedes revisar los detalles que Calendly ha enviado a esta página.'
                            : 'Thank you for booking a session with AnImiKind. Below you can review the details Calendly passed to this page.'}
                    </p>
                </div>
            </section>

            <section className="py-16 bg-[#f4f7fb]">
                <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="bg-white rounded-[2.2rem] border border-[#dfe6ee] shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            {hasCalendlyDetails ? (
                                <>
                                    <div className="text-center mb-10">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#eff9f4] border border-[#cfe7dd] mb-5">
                                            <BrandIcon name="Calendar" color="green" size={28} weight="duotone" />
                                        </div>
                                        <h2 className="text-3xl font-extrabold text-[#1e2c29] mb-3">
                                            {es ? 'Detalles del evento' : 'Event details'}
                                        </h2>
                                        <p className="text-[#1d4c73]/76 leading-relaxed max-w-3xl mx-auto">
                                            {es
                                                ? 'Hemos recibido correctamente los datos del evento programado. Utiliza esta pantalla como confirmación visual de tu reserva.'
                                                : 'We have successfully received the details of the scheduled event. Use this screen as a visual confirmation of your booking.'}
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        {detailCards.map((item) => (
                                            <div key={item.labelEn} className="rounded-[1.6rem] border border-[#dfe6ee] bg-[#fbfcfd] p-5 shadow-sm">
                                                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#1d4c73]/45 mb-2">
                                                    {es ? item.labelEs : item.labelEn}
                                                </p>
                                                <p className="text-[#1e2c29] text-base font-bold leading-relaxed break-words">
                                                    {item.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {extraAnswers.length > 0 && (
                                        <div className="mt-8 rounded-[1.8rem] border border-[#dfe6ee] bg-[#fbfcfd] p-6">
                                            <h3 className="text-xl font-extrabold text-[#1e2c29] mb-4">
                                                {es ? 'Respuestas adicionales' : 'Additional answers'}
                                            </h3>
                                            <div className="grid gap-3">
                                                {extraAnswers.map((item, index) => (
                                                    <div key={item.key} className="rounded-2xl bg-white border border-[#e7edf2] px-4 py-3">
                                                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1d4c73]/45 mb-1">
                                                            {es ? `Respuesta ${index + 1}` : `Answer ${index + 1}`}
                                                        </p>
                                                        <p className="text-[#1d4c73] text-sm leading-relaxed break-words">{item.value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f8fafc] border border-[#dfe6ee] mb-5">
                                        <BrandIcon name="Info" color="navy" size={28} weight="duotone" />
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-[#1e2c29] mb-3">
                                        {es ? 'No se recibieron detalles del evento' : 'No event details were received'}
                                    </h2>
                                    <p className="text-[#1d4c73]/76 leading-relaxed max-w-3xl mx-auto">
                                        {es
                                            ? 'La reserva puede haberse completado correctamente, pero esta página no recibió parámetros desde Calendly. Aun así, puedes volver al sitio o reservar otra sesión si lo necesitas.'
                                            : 'The booking may still have completed successfully, but this page did not receive parameters from Calendly. You can still return to the site or book another session if needed.'}
                                    </p>
                                </div>
                            )}

                            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1d4c73] text-white font-bold hover:bg-[#0b2340] transition-all"
                                >
                                    {es ? 'Volver al inicio' : 'Back to Home'}
                                </Link>
                                <Link
                                    to="/contact/"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0dc383] to-[#0aa872] text-white font-bold hover:shadow-xl hover:shadow-[#0dc383]/30 transition-all"
                                >
                                    {es ? 'Contactar con el equipo' : 'Contact the team'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DemoConfirmationPage;
