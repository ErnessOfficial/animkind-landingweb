import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const NotFoundPage: React.FC = () => {
  const { lang } = useLanguage();
  const isSpanish = lang === 'es';

  useEffect(() => {
    document.title = isSpanish ? 'Página no encontrada – AnImiKind' : 'Page Not Found – AnImiKind';
  }, [isSpanish]);

  return (
    <section className="min-h-[70vh] pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#f1f4f4] flex items-center">
      <div className="max-w-3xl mx-auto w-full text-center bg-white rounded-[2rem] p-10 md:p-14 border border-[#1d4c73]/10 shadow-xl">
        <p className="text-sm font-bold tracking-[0.2em] text-[#0dc383] uppercase mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1d4c73] mb-4">
          {isSpanish ? 'No encontramos esta página' : 'We could not find this page'}
        </h1>
        <p className="text-[#1d4c73]/75 leading-relaxed max-w-xl mx-auto">
          {isSpanish
            ? 'La URL no existe o fue movida. Puedes volver al inicio o reservar una demo.'
            : 'The URL does not exist or has moved. You can go back home or book a demo.'}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1d4c73] text-white font-bold hover:bg-[#0f2d50] transition-colors"
          >
            {isSpanish ? 'Ir al inicio' : 'Go Home'}
          </Link>
          <Link
            to="/demo/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0dc383] text-white font-bold hover:bg-[#0bb075] transition-colors"
          >
            {isSpanish ? 'Reservar demo' : 'Book a Demo'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
