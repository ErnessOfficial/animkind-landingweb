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
          tagline: "Intelligence + Emotions for a Kind Future",
          description: "The first UK's app powered with a secure EAI model (emotional artificial intelligence) to empowers young users, helping them to feel safe and confidents in the school.\n\nThis is one of the AnimiKind Ecosystem's Pilars. A proactive & multi-platforms guardian for young people (8-18 years old), designed to provide a comprehensive and secure emotional companion and safeguarding support for bullying and cyber bullying cases in schools environments.",
          features: [
            "Intelligent Case Detection identifying risk signals through ethic real time chat with EAI",
            "Multiplatform Accessibility",
            "100% Proactive Wellbeing & Safeguarding Support",
            "Privacy & Security Data Protection",
            "Empathic Emotional Accompaniment 'Non-Intrusive'",
            "One-Click-Reporting Function",
            "Secure School Bridge via 'MySchool-LinkCode'"
          ],
          image: "/images/screenapp.png",
          image2: "/images/screenapp2.png",
          image3: "/images/screenapp3.png",
          logo: "/images/aninikindapp-logo.png"
        },
        {
          name: "School Panel",
          tag: "For Education Leaders",
          tagline: "Total control of Wellbeing and safeguarding for a Kind & Healthy emotional climate in schools",
          description: "Another piece of the AnimiKind ecosystem that, on the one hand, enhances the features: the Secure School Bridge through 'MySchool-LinkCode' and the One-Click-Reporting Function of the AnimiKind -APP. This lets schools set up a safe control and management centre for bullying and cyberbullying, acting as a safe and direct line of communication between students and school staff who are there to intervene and protect everyone's well-being.\n\nOn the other hand, it's a platform that provides school staff responsible for safeguarding and well-being with smart support (using EAI) to ease the load of creating effective intervention plans, risk assessments and case follow-up. Plus, it lets school principals get real and anonymous quantitative data to keep an eye on the emotional climate of their school.",
          features: [
            "Real-Time Alerts",
            "Unique 'LinkCode' for the Secure School Bridge",
            "100% Proactive Wellbeing & Safeguarding Support",
            "Powered with EAI (Emotional Artificial Intelligence)",
            "Privacy & Security Data Protection",
            "Exclusive Professional Intervention Support",
            "Case Tracking and Escalation",
            "Quantitative Statistics with Real but Anonymous Data",
            "Total Control of the School Emotional Climate"
          ],
          image: "/images/screen-schoolpanel.png",
          image2: "/images/screen-schoolpanel2.png",
          logo: "/images/schoolpanel-logo.png"
        },
        {
          name: "AnimiKdemi",
          tag: "For Teachers & Staff",
          tagline: "Reflective Learning Simulator powered by EAI",
          description: "To enhance our predictive, reactive and support focus in the ecosystem, which address the shortcomings of the previous platforms, we have created AnimiKdemi. This is our cutting-edge 'Reflective Learning Simulator', powered by EAI, that offers a preventative model.\n\nIt not only trains everyone in the school environment to adhere to health, mental and emotional well-being rules set by the UK government, such as KCSIE compliance, but also strives to develop an immersive and unique reflective learning tool that fosters a strong and unified emotional culture in each school.",
          features: [
            "Learning Simulations supported by Emotional-AI",
            "Two learning paths are adapted to age and role",
            "An exclusive CPD-certified staff programme is aligned with government requirements",
            "Selectable cases for simulations are available",
            "A comprehensive gamification layer is included",
            "Lessons are intuitive and easy to access",
            "Available: 'Gold School Wellbeing & Safeguarding Certification' for institutions",
            "Mandatory professional training programmes are included"
          ],
          image: "/images/screen-animikdemi.png",
          image2: "/images/screen-animikdemi2.png",
          image3: "/images/screen-animikdemi3.png",
          image4: "/images/screen-animikdemi4.png",
          logo: "/images/animikind-logo.png",
          cpdLogo: "/images/cpd.png"
        },
      ],
    },
    impact: {
      title: "Impact & Value",
      stats: [
        {
          title: "OPERATIONAL EFFICIENCY",
          subtitle: "Reclaiming 40% of Staff Capacity",
          text: "We convert expensive administrative hours into high-value student support. Safeguarding Leads (DSLs) currently lose up to 10 hours per week on reactive crisis management and incident reporting. Animikind's 'Kind Intelligence' automates the detection and logging of emotional risks, reducing this administrative burden by 30–40%. By shifting from reactive paperwork to proactive intervention, your school recovers hundreds of hours of staff time annually, significantly lowering the hidden operational costs of wellbeing management."
        },
        {
          title: "FINANCIAL SUSTAINABILITY",
          subtitle: "The ROI of Retention",
          text: "Protecting your roll count is protecting your revenue. With 1 in 4 UK children reporting bullying, the correlation between hidden emotional distress and 'Persistent Absence' is the single biggest threat to student retention. Our ecosystem acts as an insurance policy against withdrawal. Commercially, retaining just one student who would otherwise leave due to unresolved anxiety covers the cost of the entire Animikind annual licence for your institution. We turn a cost centre into a retention asset."
        },
        {
          title: "REGULATORY EXCELLENCE",
          subtitle: "100% Alignment for 2026",
          text: "Future-proofing your Ofsted compliance before the rules change. As regulations tighten towards a holistic 'Whole School Approach', Animikind ensures your institution achieves 100% alignment with the anticipated Keeping Children Safe in Education (KCSIE) 2026 standards. While traditional methods miss the silent majority, our AI bridges the gap, connecting the 80% of students who never verbally report distress. We provide the quantifiable data and digital evidence trails that inspectors require to rate a school's personal development provision as 'Outstanding'."
        },
      ],
    },
    demoSection: {
      title: "Learn More - Free Demo",
      buttonText: "Book a Demo",
      description: "Book a personalised walkthrough of the AnImiKind ecosystem—the proactive safeguarding solution powered by ethical AI. In this screen-sharing session, we will explore how our platform helps schools identify early signs of emotional distress and bullying, ensuring robust support for your students while reducing administrative workload.\n\nDuring this demo, you will see:\n\nLive Platform Tour: A real-time look at the School Panel dashboard to visualise how risk alerts and emotional insights are presented to your team.\n\nAnImiKind Academy Preview: A walkthrough of our digital training hub, including CPD-aligned resources for staff and gamified emotional literacy courses for students.\n\nWorkflow Demonstration: How the student app securely connects with your safeguarding system to bridge communication gaps.\n\nQ&A: A dedicated space to discuss integration, data privacy (GDPR), and alignment with KCSIE requirements."
    },
    footer: {
      description: "AnImiKind – The Ecosystem with a Kind Intelligence and a Trusted Technology. Children and Adolescents Emotional Wellbeing, Bullying and cyberbullying in schools environments.",
      contact: "Contact: info@animikind.com",
      rights: "© 2025 AnImiKind. All rights reserved.",
      links: ["Privacy Policy", "Terms of Service"],
      gepLink: "Gender Equality Plan (GEP)",
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
          name: "AnImiKind App",
          tag: "Para Familias y Estudiantes",
          tagline: "Inteligencia + Emociones para un Futuro Amable",
          description: "La primera aplicación del Reino Unido impulsada con un modelo seguro de IAE (inteligencia artificial emocional) que empodera a los usuarios jóvenes, ayudándolos a sentirse seguros y confiados en la escuela.\n\nEste es uno de los pilares del Ecosistema AnimiKind. Un guardián proactivo y multiplataforma para jóvenes (8-18 años), diseñado para proporcionar un compañero emocional integral y seguro, y soporte de protección para casos de acoso y ciberacoso en entornos escolares.",
          features: [
            "Detección Inteligente de Casos identificando señales de riesgo a través de chat ético en tiempo real con IAE",
            "Accesibilidad Multiplataforma",
            "100% Soporte Proactivo de Bienestar y Protección",
            "Protección de Datos de Privacidad y Seguridad",
            "Acompañamiento Emocional Empático 'No Intrusivo'",
            "Función de Reporte con Un Solo Clic",
            "Puente Escolar Seguro vía 'Código-MiEscuela'"
          ],
          image: "/images/screenapp.png",
          image2: "/images/screenapp2.png",
          image3: "/images/screenapp3.png",
          logo: "/images/aninikindapp-logo.png"
        },
        {
          name: "School Panel",
          tag: "Para Líderes Educativos",
          tagline: "Control total del Bienestar y protección para un clima emocional Amable y Saludable en las escuelas",
          description: "Otra pieza del ecosistema AnimiKind que, por un lado, mejora las características: el Puente Escolar Seguro a través de 'Código-MiEscuela' y la Función de Reporte con Un Solo Clic de la APP-AnimiKind. Esto permite a las escuelas establecer un centro de control y gestión seguro para el acoso y ciberacoso, actuando como una línea de comunicación segura y directa entre estudiantes y el personal escolar que está ahí para intervenir y proteger el bienestar de todos.\n\nPor otro lado, es una plataforma que proporciona al personal escolar responsable de la protección y el bienestar un soporte inteligente (usando IAE) para aliviar la carga de crear planes de intervención efectivos, evaluaciones de riesgo y seguimiento de casos. Además, permite a los directores escolares obtener datos cuantitativos reales y anónimos para vigilar el clima emocional de su escuela.",
          features: [
            "Alertas en Tiempo Real",
            "'LinkCode' Único para el Puente Escolar Seguro",
            "100% Soporte Proactivo de Bienestar y Protección",
            "Impulsado con IAE (Inteligencia Artificial Emocional)",
            "Protección de Datos de Privacidad y Seguridad",
            "Soporte Profesional Exclusivo de Intervención",
            "Seguimiento y Escalado de Casos",
            "Estadísticas Cuantitativas con Datos Reales pero Anónimos",
            "Control Total del Clima Emocional Escolar"
          ],
          image: "/images/screen-schoolpanel.png",
          image2: "/images/screen-schoolpanel2.png",
          logo: "/images/schoolpanel-logo.png"
        },
        {
          name: "AnimiKdemi",
          tag: "Para Docentes y Personal",
          tagline: "Simulador de Aprendizaje Reflexivo impulsado por IAE",
          description: "Para mejorar nuestro enfoque predictivo, reactivo y de soporte en el ecosistema, que aborda las deficiencias de las plataformas anteriores, hemos creado AnimiKdemi. Este es nuestro 'Simulador de Aprendizaje Reflexivo' de vanguardia, impulsado por IAE, que ofrece un modelo preventivo.\n\nNo solo entrena a todos en el entorno escolar para cumplir con las reglas de salud, bienestar mental y emocional establecidas por el gobierno del Reino Unido, como el cumplimiento de KCSIE, sino que también se esfuerza por desarrollar una herramienta de aprendizaje reflexivo inmersiva y única que fomenta una cultura emocional fuerte y unificada en cada escuela.",
          features: [
            "Simulaciones de Aprendizaje respaldadas por IA-Emocional",
            "Dos rutas de aprendizaje adaptadas a la edad y el rol",
            "Un programa exclusivo para el personal certificado por CPD alineado con los requisitos gubernamentales",
            "Casos seleccionables para simulaciones disponibles",
            "Se incluye una capa integral de gamificación",
            "Lecciones intuitivas y de fácil acceso",
            "Disponible: 'Certificación Oro de Bienestar y Protección Escolar' para instituciones",
            "Se incluyen programas de formación profesional obligatorios"
          ],
          image: "/images/screen-animikdemi.png",
          image2: "/images/screen-animikdemi2.png",
          image3: "/images/screen-animikdemi3.png",
          image4: "/images/screen-animikdemi4.png",
          logo: "/images/animikind-logo.png",
          cpdLogo: "/images/cpd.png"
        },
      ],
    },
    impact: {
      title: "Impacto y Valor",
      stats: [
        {
          title: "EFICIENCIA OPERACIONAL",
          subtitle: "Recuperando el 40% de la Capacidad del Personal",
          text: "Convertimos costosas horas administrativas en apoyo estudiantil de alto valor. Los Líderes de Protección (DSLs) actualmente pierden hasta 10 horas por semana en manejo de crisis reactivo y reportes de incidentes. La 'Inteligencia Amable' de Animikind automatiza la detección y registro de riesgos emocionales, reduciendo esta carga administrativa en un 30–40%. Al pasar del papeleo reactivo a la intervención proactiva, su escuela recupera cientos de horas de tiempo del personal anualmente, reduciendo significativamente los costos operativos ocultos de la gestión del bienestar."
        },
        {
          title: "SOSTENIBILIDAD FINANCIERA",
          subtitle: "El ROI de la Retención",
          text: "Proteger su matrícula es proteger sus ingresos. Con 1 de cada 4 niños en el Reino Unido reportando acoso, la correlación entre angustia emocional oculta y 'Ausencia Persistente' es la mayor amenaza para la retención estudiantil. Nuestro ecosistema actúa como una póliza de seguro contra la deserción. Comercialmente, retener solo un estudiante que de otro modo se iría debido a ansiedad no resuelta cubre el costo de toda la licencia anual de Animikind para su institución. Convertimos un centro de costos en un activo de retención."
        },
        {
          title: "EXCELENCIA REGULATORIA",
          subtitle: "100% de Alineación para 2026",
          text: "Preparando su cumplimiento con Ofsted antes de que cambien las reglas. A medida que las regulaciones se endurecen hacia un 'Enfoque Integral de Toda la Escuela', Animikind asegura que su institución logre un 100% de alineación con los estándares anticipados de Keeping Children Safe in Education (KCSIE) 2026. Mientras que los métodos tradicionales pierden a la mayoría silenciosa, nuestra IA cierra la brecha, conectando al 80% de los estudiantes que nunca reportan verbalmente su angustia. Proporcionamos los datos cuantificables y las pistas de evidencia digital que los inspectores requieren para calificar la provisión de desarrollo personal de una escuela como 'Sobresaliente'."
        },
      ],
    },
    demoSection: {
      title: "Más Información - Demo Gratuita",
      buttonText: "Reservar una Demo",
      description: "Reserve un recorrido personalizado por el ecosistema AnImiKind, la solución de protección proactiva impulsada por IA ética. En esta sesión compartida, exploraremos cómo nuestra plataforma ayuda a las escuelas a identificar signos tempranos de angustia emocional y acoso, asegurando un apoyo sólido para sus estudiantes mientras reduce la carga administrativa.\n\nDurante esta demo, verá:\n\nRecorrido de la Plataforma en Vivo: Una mirada en tiempo real al panel escolar para visualizar cómo se presentan las alertas de riesgo y los insights emocionales a su equipo.\n\nVista Previa de AnImiKind Academy: Un recorrido por nuestro centro de formación digital, incluyendo recursos alineados con CPD para el personal y cursos gamificados de alfabetización emocional para estudiantes.\n\nDemostración del Flujo de Trabajo: Cómo la aplicación para estudiantes se conecta de forma segura con su sistema de protección para cerrar las brechas de comunicación.\n\nPreguntas y Respuestas: Un espacio dedicado para discutir la integración, la privacidad de datos (GDPR) y la alineación con los requisitos KCSIE."
    },
    footer: {
      description: "AnImiKind – El Ecosistema con una Inteligencia Amable y una Tecnología de Confianza. Bienestar Emocional de Niños y Adolescentes, Acoso y ciberacoso en entornos escolares.",
      contact: "Contacto: info@animikind.com",
      rights: "© 2025 AnImiKind. Todos los derechos reservados.",
      links: ["Política de Privacidad", "Términos de Servicio"],
      gepLink: "Plan de Igualdad de Género",
    },
    chat: {
      trigger: "Habla con Ani",
      placeholder: "Pregunta a Ani sobre bienestar emocional...",
      intro: "¡Hola! Soy Ani, el asistente IA de AnImiKind. Puedo explicarte nuestro ecosistema u ofrecer información general de bienestar. ¿En qué te ayudo?",
      error: "Lo siento, tengo problemas de conexión en este momento."
    }
  },
};