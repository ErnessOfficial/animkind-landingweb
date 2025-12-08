import { LanguageContent } from './types';

export const content: Record<'en' | 'es', LanguageContent> = {
  en: {
    nav: {
      home: "Home",
      ecosystem: "The Ecosystem",
      about: "The Technology", // Changed from "Our Vision" to point to AI section
      pricing: "Pricing",
      contact: "Impact",
      getStarted: "Book a Demo",
    },
    pricingModal: {
      title: "✨ Pricing – Choose the Plan That Fits Your School’s Safeguarding Journey",
      description: "AnImiKind offers flexible, transparent and value-based pricing for families, schools and Multi-Academy Trusts. Whether you’re starting with emotional literacy or ready for full ecosystem adoption, we have a plan designed for your needs.",
      ctaText: "Do you have any questions? Book a free, no-obligation demo with one of our advisors and get all your questions answered.",
      ctaButton: "Book Free Demo"
    },
    hero: {
      badge: "Kind Intelligence - Trusted Technology",
      headline: [
        "The \"Emotional-AI\" powered Ecosystem",
        "to Empower Young minds &",
        "Protect Schools Wellbeing"
      ],
      subheadline: "Discover AnImiKind, the pioneering digital ecosystem that harnesses Emotional-AI to enhance emotional literacy, detect risks early, and foster supportive environments for children, teenagers, parents, and school staff. Our interconnected tools empower young people to express themselves safely while providing educators with actionable insights for proactive intervention.",
      ctaPrimary: "Learn More About Our Emotional-AI",
      ctaSecondary: "Watch a Video",
    },
    valueProp: {
      title: "Why AnImiKind?",
      intro: "At AnImiKind, our vision is to set the standard for preventing bullying and managing mental health in schools by breaking down communication barriers between children and their support networks. Our mission: To democratise access to emotional wellbeing and school safety via ethical AI, creating a comprehensive protection ecosystem that connects students, families, and schools seamlessly.",
      items: [
        {
          title: "Proactive Protection",
          desc: "We don't wait for a crisis. Our Emotional-AI identifies early signs of anxiety, bullying, and distress to enable timely intervention.",
          icon: "Shield",
        },
        {
          title: "Whole-School Approach",
          desc: "Connecting the dots between student apps, teacher dashboards, and family insights for a unified safety net.",
          icon: "Users",
        },
        {
          title: "Evidence-Informed",
          desc: "Built on psychological principles and aligned with UK safeguarding (KCSIE) and RSHE standards.",
          icon: "Brain",
        },
      ],
    },
    aiSection: {
      title: "Powered by Ethical Emotional-AI",
      subtitle: "Technology with a Heart",
      description: "Emotional-AI is at the heart of AnImiKind. It's advanced technology that interprets emotions from everyday language—think journal entries or chats—without invasive monitoring. Using secure, anonymised analysis (powered by calibrated engines like Google Gemini), it detects patterns of bullying, anxiety, or crisis, then triggers gentle alerts or recommendations. All while adhering to strict ethical standards, keeping data private and focused on positive outcomes.",
      feature1: "Real-time Sentiment Analysis",
      feature2: "Privacy-First Anonymisation",
      feature3: "Contextual Risk Detection",
    },
    ecosystem: {
      title: "Explore Our Ecosystem: Tailored Products for Every Need",
      subtitle: "AnImiKind is a connected suite of tools designed for holistic wellbeing.",
      products: [
        {
          name: "AnImiKind App",
          tag: "For Families & Students",
          description: "A personal guardian for children and teens, available on mobile, tablet, or web. It serves as an emotional diary and intelligent chat companion.\n\n- **Key Features**: Safe journaling, conversation prompts, personalised insights via Emotional-AI, risk pattern detection.\n- **Benefits**: Empowers young users to express emotions freely; sends automatic reports to parents for timely support, even without school involvement.",
          features: ["Emotional Journaling", "Safe Expression Chat", "Personalised Insights"],
          image: "/images/screenapp.png",
          image2: "/images/screenapp2.png",
          logo: "/images/aninikindapp-logo.png"
        },
        {
          name: "School Partnership Licence",
          tag: "For Education Leaders",
          description: "The complete control tower for educational institutions, integrating dashboards and analytics.\n\n- **Key Features**: Real-time alerts, emotional trend analytics, intervention management, secure student linking via codes.\n- **Benefits**: Provides clear metrics for decision-making, reduces bureaucracy, and enhances whole-school wellbeing.",
          features: ["Early-Warning Dashboards", "Wellbeing Analytics", "Incident Management"],
          image: "/images/screen-schoolpanel.png",
          image2: "/images/screen-schoolpanel2.png",
          logo: "/images/schoolpanel-logo.png"
        },
        {
          name: "AnImiKind Academy",
          tag: "For Teachers & Staff",
          description: "AnimiKdemí by AnimiKind delivers a CPD-Certified School Emotional Wellbeing Programme powered by an Emotional AI Gamified Learning Simulator. Fully aligned with the 2026 safeguarding and wellbeing expectations, the programme offers annual recertification with guaranteed updates to reflect future regulatory changes.\n\nOur structured learning pathways combine emotional intelligence training with immersive, age-appropriate simulations that adapt to each learner. Students and staff progress through modules that unlock sequentially, completing interactive missions guided by Emotional AI designed to strengthen reflective practice and real-world decision-making.\n\nThe platform integrates a comprehensive gamification layer—including badges, points, adaptive missions, configurable leaderboards and personalised recovery pathways—to promote sustained engagement, motivation and meaningful behavioural change.\n\nWith CPD accreditation, unlimited school-wide access and AI-powered experiential learning, AnimiKdemí represents a modern, future-ready approach to safeguarding, emotional literacy and wellbeing education.",
          features: ["“Safe School Stamp” certified by Animikind", "Data-informed, Flexible and scalable", "Intelligent Dual learning routes (Student & Teacher)"],
          image: "/images/screen-animikdemi.png",
          image2: "/images/screen-animikdemi2.png",
          logo: "/images/animikind-logo.png",
          cpdLogo: "/images/cpd.png"
        },
      ],
    },
    impact: {
      title: "Real Impact on School Life",
      stats: [
        { value: "Earlier", label: "Intervention in bullying cases" },
        { value: "100%", label: "GDPR & Privacy Compliant" },
        { value: "24/7", label: "Support access for students" },
      ],
    },
    demoSection: {
      title: "Learn More - Free Demo",
      buttonText: "Book a Demo",
      description: "Book a personalised walkthrough of the AnImiKind ecosystem—the proactive safeguarding solution powered by ethical AI. In this screen-sharing session, we will explore how our platform helps schools identify early signs of emotional distress and bullying, ensuring robust support for your students while reducing administrative workload.\n\nDuring this demo, you will see:\n\nLive Platform Tour: A real-time look at the School Panel dashboard to visualise how risk alerts and emotional insights are presented to your team.\n\nAnImiKind Academy Preview: A walkthrough of our digital training hub, including CPD-aligned resources for staff and gamified emotional literacy courses for students.\n\nWorkflow Demonstration: How the student app securely connects with your safeguarding system to bridge communication gaps.\n\nQ&A: A dedicated space to discuss integration, data privacy (GDPR), and alignment with KCSIE requirements."
    },
    footer: {
      description: "AnImiKind – The Ecosystem with a Kind Intelligence and a Trusted Technology. Children and Adolescents Emotional Wellbeing, Bullying and cyberbullying in schools environments.",
      contact: "Contact: info@animikind.com | +44 (0)20 1234 5678",
      rights: "© 2025 AnImiKind. All rights reserved.",
      links: ["Privacy Policy", "Terms of Service"],
    },
    chat: {
      trigger: "Chat with Ani",
      placeholder: "Ask Ani about emotional wellbeing...",
      intro: "Hi! I'm Ani, the AnImiKind AI assistant. I can explain how our ecosystem works or offer general wellbeing info. How can I help?",
      error: "Sorry, I'm having trouble connecting right now."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      ecosystem: "El Ecosistema",
      about: "La Tecnología", // Changed from "Nuestra Visión"
      pricing: "Precios",
      contact: "Impacto", // Changed from "Contacto"
      getStarted: "Solicitar Demo",
    },
    pricingModal: {
      title: "✨ Precios – Elige el Plan que se Adapte a tu Viaje de Protección Escolar",
      description: "AnImiKind ofrece precios flexibles, transparentes y basados en el valor para familias, escuelas y Multi-Academy Trusts. Ya sea que estés comenzando con la alfabetización emocional o listo para la adopción completa del ecosistema, tenemos un plan diseñado para tus necesidades.",
      ctaText: "¿Tienes alguna pregunta? Reserva una demostración gratuita y sin compromiso con uno de nuestros asesores y obtén respuesta a todas tus dudas.",
      ctaButton: "Reservar Demo Gratuita"
    },
    hero: {
      badge: "Inteligencia Amable - Tecnología de Confianza",
      headline: [
        "El Ecosistema impulsado por \"IA-Emocional\"",
        "para Empoderar Mentes Jóvenes &",
        "Proteger el Bienestar Escolar"
      ],
      subheadline: "Descubre AnImiKind, el ecosistema digital pionero que aprovecha la IA Emocional para mejorar la alfabetización emocional, detectar riesgos tempranamente y fomentar entornos de apoyo para niños, adolescentes, padres y personal escolar. Nuestras herramientas interconectadas empoderan a los jóvenes para expresarse de manera segura mientras brindan a los educadores información práctica para una intervención proactiva.",
      ctaPrimary: "Más sobre nuestra IA-Emocional",
      ctaSecondary: "Ver Video",
    },
    valueProp: {
      title: "¿Por qué AnImiKind?",
      intro: "En AnImiKind, nuestra visión es establecer el estándar para prevenir el acoso y gestionar la salud mental en las escuelas, rompiendo las barreras de comunicación entre los niños y sus redes de apoyo. Nuestra misión: Democratizar el acceso al bienestar emocional y la seguridad escolar a través de una IA ética, creando un ecosistema de protección integral que conecta a estudiantes, familias y escuelas sin fisuras.",
      items: [
        {
          title: "Protección Proactiva",
          desc: "No esperamos a que ocurra una crisis. Nuestra IA Emocional identifica signos tempranos de ansiedad, acoso y malestar para permitir una intervención oportuna.",
          icon: "Shield",
        },
        {
          title: "Enfoque Integral",
          desc: "Conectando puntos entre aplicaciones estudiantiles, paneles docentes y perspectivas familiares para una red de seguridad unificada.",
          icon: "Users",
        },
        {
          title: "Basado en Evidencia",
          desc: "Construido sobre principios psicológicos y alineado con los estándares de protección y desarrollo emocional (RSHE).",
          icon: "Brain",
        },
      ],
    },
    aiSection: {
      title: "Impulsado por IA Emocional Ética",
      subtitle: "Tecnología con Corazón",
      description: "La IA Emocional es el corazón de AnImiKind. Es tecnología avanzada que interpreta emociones del lenguaje cotidiano—como diarios o chats—sin monitoreo invasivo. Usando análisis seguro y anonimizado (impulsado por motores calibrados como Google Gemini), detecta patrones de acoso, ansiedad o crisis, y activa alertas o recomendaciones amables. Todo cumpliendo estrictos estándares éticos, manteniendo la privacidad de los datos y enfocándose en resultados positivos.",
      feature1: "Análisis de Sentimiento en Tiempo Real",
      feature2: "Anonimización y Privacidad Primero",
      feature3: "Detección de Riesgos Contextual",
    },
    ecosystem: {
      title: "Explora Nuestro Ecosistema: Productos Adaptados a Cada Necesidad",
      subtitle: "AnImiKind es un conjunto de herramientas conectadas diseñadas para el bienestar integral.",
      products: [
        {
          name: "App AnImiKind",
          tag: "Para Familias y Estudiantes",
          description: "Un guardián personal para niños y adolescentes, disponible en móvil, tablet o web. Sirve como diario emocional y compañero de chat inteligente.\n\n- **Características Clave**: Diario seguro, temas de conversación, insights personalizados vía IA-Emocional, detección de patrones de riesgo.\n- **Beneficios**: Empodera a los jóvenes para expresar emociones libremente; envía informes automáticos a los padres para apoyo oportuno, incluso sin participación escolar.",
          features: ["Diario Emocional", "Chat de Expresión Segura", "Insights Personalizados"],
          image: "/images/screenapp.png",
          image2: "/images/screenapp2.png",
          logo: "/images/aninikindapp-logo.png"
        },
        {
          name: "Licencia Escolar",
          tag: "Para Líderes Educativos",
          description: "La torre de control completa para instituciones educativas, integrando paneles y analíticas.\n\n- **Características Clave**: Alertas en tiempo real, análisis de tendencias emocionales, gestión de intervenciones, vinculación segura de estudiantes vía códigos.\n\n- **Beneficios**: Proporciona métricas claras para la toma de decisiones, reduce la burocracia y mejora el bienestar escolar integral.",
          features: ["Alertas Tempranas", "Analíticas de Bienestar", "Gestión de Incidentes"],
          image: "/images/screen-schoolpanel.png",
          image2: "/images/screen-schoolpanel2.png",
          logo: "/images/schoolpanel-logo.png"
        },
        {
          name: "Academia AnImiKind",
          tag: "Para Docentes y Personal",
          description: "Formación gamificada para capacitar al personal en alfabetización emocional y respuesta ante riesgos.\n\n- **Características Clave**: Módulos interactivos, seguimiento del progreso, certificación.\n\n- **Beneficios**: Aumenta la confianza del personal al manejar temas sensibles y asegura el cumplimiento de estándares de protección.",
          features: ["Formación Acreditada", "Simulaciones de Escenarios", "Biblioteca de Recursos"],
          image: "/images/screen-animikdemi.png",
          image2: "/images/screen-animikdemi2.png",
          logo: "/images/animikind-logo.png"
        },
      ],
    },
    impact: {
      title: "Impacto Real en la Vida Escolar",
      stats: [
        { value: "Temprana", label: "Intervención en casos de acoso" },
        { value: "100%", label: "Cumplimiento GDPR y Privacidad" },
        { value: "24/7", label: "Acceso a soporte para estudiantes" },
      ],
    },
    demoSection: {
      title: "Más Información - Demo Gratuita",
      buttonText: "Reservar una Demo",
      description: "Reserve un recorrido personalizado por el ecosistema AnImiKind, la solución de protección proactiva impulsada por IA ética. En esta sesión compartida, exploraremos cómo nuestra plataforma ayuda a las escuelas a identificar signos tempranos de angustia emocional y acoso, asegurando un apoyo sólido para sus estudiantes mientras reduce la carga administrativa.\n\nDurante esta demo, verá:\n\nRecorrido de la Plataforma en Vivo: Una mirada en tiempo real al panel escolar para visualizar cómo se presentan las alertas de riesgo y los insights emocionales a su equipo.\n\nVista Previa de AnImiKind Academy: Un recorrido por nuestro centro de formación digital, incluyendo recursos alineados con CPD para el personal y cursos gamificados de alfabetización emocional para estudiantes.\n\nDemostración del Flujo de Trabajo: Cómo la aplicación para estudiantes se conecta de forma segura con su sistema de protección para cerrar las brechas de comunicación.\n\nPreguntas y Respuestas: Un espacio dedicado para discutir la integración, la privacidad de datos (GDPR) y la alineación con los requisitos KCSIE."
    },
    footer: {
      description: "AnImiKind – El Ecosistema con una Inteligencia Amable y una Tecnología de Confianza. Bienestar Emocional de Niños y Adolescentes, Acoso y ciberacoso en entornos escolares.",
      contact: "Contacto: info@animikind.com | +44 (0)20 1234 5678",
      rights: "© 2025 AnImiKind. Todos los derechos reservados.",
      links: ["Política de Privacidad", "Términos de Servicio"],
    },
    chat: {
      trigger: "Habla con Ani",
      placeholder: "Pregunta a Ani sobre bienestar emocional...",
      intro: "¡Hola! Soy Ani, el asistente IA de AnImiKind. Puedo explicarte nuestro ecosistema u ofrecer información general de bienestar. ¿En qué te ayudo?",
      error: "Lo siento, tengo problemas de conexión en este momento."
    }
  },
};