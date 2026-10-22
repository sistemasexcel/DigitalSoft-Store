/**
 * Catálogo central de productos digitales.
 *
 * Estructura de campos:
 * - id: Identificador único tipo slug
 * - name: Nombre comercial
 * - brand: Fabricante o desarrollador
 * - category: ID de la categoría (vinculada con CATEGORIES en config.js)
 * - edition: Versión, edición o tipo de release
 * - shortDescription: Resumen breve para tarjetas
 * - fullDescription: Explicación detallada para la vista de producto
 * - image: URL o ruta de la imagen / ilustración técnica
 * - features: Lista de funcionalidades destacadas
 * - licenseType: 'Perpetua (ESD / Retail)', 'Suscripción anual', 'Suscripción mensual', o configurable
 * - duration: Tiempo de validez (ej. 'De por vida', '1 año', 'Configurable')
 * - devices: Número de equipos permitidos (ej. '1 PC / Mac', 'Hasta 5 dispositivos')
 * - compatibility: Sistemas compatibles (ej. 'Windows 10 / 11, macOS')
 * - requirements: Requisitos mínimos o notas de sistema
 * - activationMethod: Instrucciones de activación oficial
 * - pricePEN: Importe numérico en Soles o null si está por cotizar
 * - priceUSD: Importe numérico en Dólares o null si está por cotizar
 * - oldPricePEN: Precio anterior en Soles (para ofertas reales)
 * - oldPriceUSD: Precio anterior en Dólares (para ofertas reales)
 * - promotion: Objeto de promoción o null { title, badge, discountPercent, terms, endDate }
 * - availability: 'Disponible', 'Consultar disponibilidad', 'Bajo pedido'
 * - officialProductUrl: Enlace informativo de referencia
 * - faqs: Preguntas frecuentes específicas del producto
 */

export const PRODUCTS = [
  // --- OFICINA Y PRODUCTIVIDAD ---
  {
    id: "microsoft-office-home-business",
    name: "Microsoft Office",
    brand: "Microsoft",
    category: "oficina-productividad",
    edition: "Home & Business / Profesional (ESD)",
    shortDescription: "Suite completa de ofimática para empresas y profesionales independientes con aplicaciones clásicas de escritorio.",
    fullDescription: "La solución de productividad por excelencia diseñada para profesionales, autónomos y pequeñas empresas que requieren herramientas fiables de escritorio sin tarifas mensuales recurrentes. Incluye las aplicaciones tradicionales que potencian tu flujo de trabajo diario con alta compatibilidad entre documentos.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    features: [
      "Aplicaciones clásicas de Word, Excel, PowerPoint y Outlook",
      "Instalación directa en una sola computadora (PC o Mac según la edición)",
      "Compatibilidad total con documentos estándar .docx, .xlsx y .pptx",
      "Soporte para trabajo offline sin necesidad de conexión continua",
      "Actualizaciones de seguridad y estabilidad del fabricante"
    ],
    licenseType: "Perpetua (Un solo pago)",
    duration: "Permanente para el equipo asignado",
    devices: "1 PC con Windows o 1 Mac (según versión adquirida)",
    compatibility: "Windows 10, Windows 11 o las tres versiones más recientes de macOS",
    requirements: "Procesador de 1.6 GHz o más rápido, 4 GB de RAM, 4 GB de espacio disponible en disco",
    activationMethod: "Canje oficial mediante cuenta asociada en el portal del fabricante o clave digital verificada.",
    pricePEN: 149.00,
    priceUSD: 39.00,
    oldPricePEN: 189.00,
    oldPriceUSD: 49.00,
    promotion: {
      badge: "Más Vendido",
      title: "Descuento por temporada",
      terms: "Válido para licencias de activación única en equipos compatibles.",
      endDate: "30 de Noviembre"
    },
    availability: "Disponible",
    officialProductUrl: "https://www.microsoft.com/es-es/microsoft-365/buy/compare-all-microsoft-365-products",
    faqs: [
      {
        question: "¿Es una suscripción o un pago único?",
        answer: "Esta edición es de pago único (licencia perpetua), lo que significa que no tendrás cobros mensuales ni anuales por el uso de esa versión."
      },
      {
        question: "¿Puedo transferirla si cambio de computadora?",
        answer: "Las licencias tipo Retail vinculadas a cuenta permiten ser transferidas a un nuevo equipo desinstalándola previamente del anterior, de acuerdo con las condiciones del fabricante."
      }
    ]
  },
  {
    id: "microsoft-365-personal-family",
    name: "Microsoft 365",
    brand: "Microsoft",
    category: "oficina-productividad",
    edition: "Personal / Familia (Suscripción)",
    shortDescription: "La suite en la nube con las versiones más actualizadas, almacenamiento OneDrive y aplicaciones colaborativas.",
    fullDescription: "Accede a las aplicaciones premium de productividad siempre actualizadas con las últimas funciones de inteligencia artificial, plantillas avanzadas y 1 TB de almacenamiento seguro en la nube por usuario. Ideal para usuarios que trabajan desde múltiples dispositivos (computadora, tablet y smartphone).",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    features: [
      "Versiones prémium y siempre actualizadas de Word, Excel, PowerPoint y OneNote",
      "1 TB de almacenamiento en la nube de OneDrive con seguridad de detección de ransomware",
      "Uso en múltiples dispositivos simultáneamente (PC, Mac, iPhone, iPad y Android)",
      "Funciones de edición inteligente con Microsoft Editor y diseñador impulsado por IA",
      "Soporte técnico continuo mientras la suscripción esté activa"
    ],
    licenseType: "Suscripción anual o mensual",
    duration: "1 año (renovable)",
    devices: "Hasta 5 dispositivos en simultáneo por cuenta",
    compatibility: "Windows, macOS, iOS y Android",
    requirements: "Conexión a internet para activación, descarga e inicio periódico de sesión",
    activationMethod: "Activación en la cuenta oficial del usuario a través de enlace o código de suscripción.",
    pricePEN: 199.00,
    priceUSD: 52.00,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Disponible",
    officialProductUrl: "https://www.microsoft.com/es-es/microsoft-365",
    faqs: [
      {
        question: "¿Qué ocurre con mis archivos si no renuevo la suscripción?",
        answer: "Tus archivos permanecen en OneDrive en modo de solo lectura para que puedas descargarlos o respaldarlos sin riesgo de pérdida inmediata."
      }
    ]
  },

  // --- SISTEMAS OPERATIVOS ---
  {
    id: "windows-11-pro",
    name: "Windows 11 Pro",
    brand: "Microsoft",
    category: "sistemas-operativos",
    edition: "Professional 64-bit (ESD / OEM / Retail)",
    shortDescription: "El sistema operativo moderno y seguro para entornos de trabajo, productividad empresarial y gaming avanzado.",
    fullDescription: "Windows 11 Pro ofrece un espacio moderno y creativo donde perseguir tus pasiones en un entorno renovado. Incluye herramientas avanzadas para empresas como cifrado de dispositivos BitLocker, virtualización Hyper-V, acceso a escritorio remoto y políticas de grupo para entornos corporativos.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    features: [
      "Cifrado de disco completo con BitLocker para máxima seguridad corporativa",
      "Integración de Windows Copilot y multitarea con diseños de acoplamiento (Snap Layouts)",
      "Soporte para Escritorio Remoto nativo para conectarte desde cualquier lugar",
      "Sandboxing de Windows y Hyper-V para ejecución segura y virtualización",
      "Compatibilidad con hardware moderno de última generación y DirectStorage"
    ],
    licenseType: "Digital ESD / Retail",
    duration: "De por vida para la placa madre del equipo",
    devices: "1 PC",
    compatibility: "Equipos compatibles con requisitos de Windows 11 (TPM 2.0 y Secure Boot)",
    requirements: "Procesador de 1 GHz o más rápido con 2 o más núcleos en procesador de 64 bits compatible, 4 GB RAM, 64 GB almacenamiento, UEFI con inicio seguro y TPM 2.0",
    activationMethod: "Clave digital alfanumérica de 25 caracteres para canje en Configuración > Sistema > Activación.",
    pricePEN: 79.00,
    priceUSD: 21.00,
    oldPricePEN: 99.00,
    oldPriceUSD: 26.00,
    promotion: {
      badge: "Oferta Destacada",
      title: "Actualización a Windows 11",
      terms: "Licencia individual legítima para instalación limpia o actualización desde Win 10/11 Home.",
      endDate: "Hasta agotar cupos"
    },
    availability: "Disponible",
    officialProductUrl: "https://www.microsoft.com/es-es/windows/windows-11-pro",
    faqs: [
      {
        question: "¿Sirve para actualizar desde Windows 11 Home?",
        answer: "Sí, puedes ingresar la clave de Windows 11 Pro directamente en tu sistema Windows 11 Home y el sistema desbloqueará las funciones avanzadas sin formatear."
      },
      {
        question: "¿La clave expira en algún momento?",
        answer: "No, las licencias perpetuas de sistema operativo no tienen fecha de vencimiento."
      }
    ]
  },
  {
    id: "windows-11-home",
    name: "Windows 11 Home",
    brand: "Microsoft",
    category: "sistemas-operativos",
    edition: "Home 64-bit",
    shortDescription: "Sistema operativo ágil, intuitivo y optimizado para el hogar, estudiantes y creadores de contenido.",
    fullDescription: "Diseñado para el uso personal diario, navegación rápida, streaming en alta definición y videojuegos de última generación con soporte para Auto HDR y DirectX 12 Ultimate.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Interfaz moderna centrada con navegación simplificada",
      "Control parental y funciones de bienestar digital",
      "Optimizaciones para gaming con soporte Auto HDR y Xbox Game Bar",
      "Seguridad integrada de Windows Defender sin costos adicionales",
      "Asistente Copilot para responder preguntas y automatizar tareas"
    ],
    licenseType: "Digital ESD",
    duration: "De por vida",
    devices: "1 PC",
    compatibility: "PC compatible con especificaciones de Windows 11",
    requirements: "CPU 64-bit compatible, 4 GB RAM, 64 GB disco, TPM 2.0 habilitado",
    activationMethod: "Activación directa en línea mediante clave de producto legítima.",
    pricePEN: 69.00,
    priceUSD: 18.00,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Disponible",
    officialProductUrl: "https://www.microsoft.com/es-es/windows/windows-11",
    faqs: [
      {
        question: "¿Qué diferencia tiene con Windows 11 Pro?",
        answer: "La versión Home está pensada para uso personal; no incluye BitLocker ni la unión a dominios de red de empresas ni escritorio remoto de recepción."
      }
    ]
  },

  // --- ANTIVIRUS Y SEGURIDAD ---
  {
    id: "eset-internet-security",
    name: "ESET Internet Security",
    brand: "ESET",
    category: "antivirus-seguridad",
    edition: "Multi-Device Security",
    shortDescription: "Protección integral legendaria, ultraligera y confiable para tus operaciones bancarias y navegación diaria.",
    fullDescription: "Protege tu vida digital con la galardonada tecnología de ciberseguridad europea de ESET. Su motor de detección heurística multipremiado ofrece protección contra ransomware, protección para banca y pagos en línea, y un escudo antispam con un impacto mínimo en los recursos de tu ordenador.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    features: [
      "Protección para banca y compras online con navegador protegido",
      "Escudo contra ransomware y bloqueo de exploits en tiempo real",
      "Firewall inteligente y protección de red doméstica e IoT",
      "Consumo mínimo de memoria RAM y CPU; ideal para gamers y profesionales",
      "Soporte multiplataforma para Windows, macOS y Android"
    ],
    licenseType: "Suscripción oficial",
    duration: "1 año de protección continua",
    devices: "1 Dispositivo (Opciones para 3 y 5 dispositivos a consultar)",
    compatibility: "Windows 10/11, macOS 12+, Android 8.0+",
    requirements: "Conexión a internet estable para actualizaciones diarias de firmas",
    activationMethod: "Registro de clave de licencia en la aplicación oficial o portal ESET HOME.",
    pricePEN: 65.00,
    priceUSD: 17.50,
    oldPricePEN: 85.00,
    oldPriceUSD: 23.00,
    promotion: {
      badge: "Recomendado",
      title: "Protección Total para PC",
      terms: "Licencia original garantizada con soporte de activación.",
      endDate: "Disponible hasta fin de mes"
    },
    availability: "Disponible",
    officialProductUrl: "https://www.eset.com/es/hogar/internet-security/",
    faqs: [
      {
        question: "¿Ralentiza la computadora al jugar o trabajar?",
        answer: "ESET es mundialmente reconocido por su huella mínima en el rendimiento del equipo, incluyendo un modo juego automático que suspende notificaciones."
      }
    ]
  },
  {
    id: "kaspersky-standard",
    name: "Kaspersky Standard",
    brand: "Kaspersky",
    category: "antivirus-seguridad",
    edition: "Security Suite",
    shortDescription: "Seguridad esencial contra virus, spyware, phishing y herramientas para mejorar el rendimiento del equipo.",
    fullDescription: "El plan de seguridad básico de Kaspersky combina tecnología galardonada de antivirus y optimización de rendimiento para mantener tus equipos veloces y a salvo de ataques modernos de phishing y filtración de contraseñas.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Antivirus en tiempo real y detección proactiva de malware",
      "Protección contra phishing y páginas web fraudulentas",
      "Herramientas de limpieza y puesta a punto del sistema",
      "Protección de pagos y transacciones bancarias",
      "Bloqueador de anuncios maliciosos y rastreo digital"
    ],
    licenseType: "Suscripción anual",
    duration: "1 año",
    devices: "1 Dispositivo (PC / Mac / Android)",
    compatibility: "Windows 11 / 10, macOS 11+, Android 5.0+",
    requirements: "2.7 GB de espacio en disco, procesador de 1 GHz, 2 GB RAM",
    activationMethod: "Canje en el software oficial ingresando el código de activación alfanumérico.",
    pricePEN: 59.00,
    priceUSD: 16.00,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Disponible",
    officialProductUrl: "https://www.kaspersky.es/standard",
    faqs: [
      {
        question: "¿Cómo se activa la licencia?",
        answer: "Instalas la versión oficial desde el portal del fabricante e introduces el código digital provisto en la sección de activación."
      }
    ]
  },
  {
    id: "bitdefender-total-security",
    name: "Bitdefender Total Security",
    brand: "Bitdefender",
    category: "antivirus-seguridad",
    edition: "Total Security Multi-Device",
    shortDescription: "Protección máxima 4 en 1 para Windows, macOS, iOS y Android con mínimo impacto en la batería.",
    fullDescription: "Bitdefender Total Security te brinda la mejor protección contra amenazas de internet en los principales sistemas operativos sin ralentizar tus dispositivos. Incluye herramientas completas de privacidad, control parental y VPN básica.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Protección completa e impecable contra amenazas digitales",
      "Protección multicapa contra ransomware para mantener tus archivos a salvo",
      "Control parental para vigilar las actividades de menores en línea",
      "Herramientas antirrobo y de privacidad para dispositivos móviles",
      "Optimizador de rendimiento con un solo clic"
    ],
    licenseType: "Suscripción anual",
    duration: "1 año",
    devices: "Hasta 3 o 5 dispositivos",
    compatibility: "Windows, macOS, iOS, Android",
    requirements: "Conexión a internet y cuenta Bitdefender Central",
    activationMethod: "Activación en el portal Bitdefender Central mediante código de suscripción.",
    pricePEN: 85.00,
    priceUSD: 23.00,
    oldPricePEN: 110.00,
    oldPriceUSD: 29.00,
    promotion: {
      badge: "Oferta Familiar",
      title: "Protección Integral Multidispositivo",
      terms: "Válido para renovaciones o cuentas nuevas en Bitdefender Central.",
      endDate: "Hasta fin de existencias"
    },
    availability: "Disponible",
    officialProductUrl: "https://www.bitdefender.es/solutions/total-security.html",
    faqs: []
  },
  {
    id: "norton-360-deluxe",
    name: "Norton 360",
    brand: "NortonLifeLock",
    category: "antivirus-seguridad",
    edition: "Deluxe Multi-Device",
    shortDescription: "Múltiples capas de protección para tus dispositivos, privacidad en línea con Secure VPN y copia de seguridad en la nube.",
    fullDescription: "Norton 360 Deluxe proporciona una potente protección para tus dispositivos móviles y ordenadores frente a virus, malware y amenazas en internet, complementado con copia de seguridad para PC en la nube y gestor de contraseñas.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    features: [
      "Seguridad del dispositivo contra malware y spywares",
      "Secure VPN para navegar de manera privada y anónima en redes Wi-Fi públicas",
      "50 GB de almacenamiento para copia de seguridad segura de PC en la nube",
      "Gestor de contraseñas integrado para generar y almacenar credenciales",
      "SafeCam para PC que avisa sobre accesos no autorizados a tu cámara"
    ],
    licenseType: "Suscripción anual",
    duration: "1 año",
    devices: "Hasta 3 o 5 dispositivos",
    compatibility: "Windows, macOS, Android, iOS",
    requirements: "Cuenta Norton y conexión permanente a internet",
    activationMethod: "Activación directa en my.norton.com con clave de producto.",
    pricePEN: 79.00,
    priceUSD: 21.00,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Disponible",
    officialProductUrl: "https://es.norton.com/products/norton-360-deluxe",
    faqs: []
  },

  // --- HERRAMIENTAS PDF Y DISEÑO ---
  {
    id: "adobe-acrobat-pro",
    name: "Adobe Acrobat Pro",
    brand: "Adobe",
    category: "herramientas-pdf",
    edition: "Document Cloud (Consultar opciones de plan)",
    shortDescription: "El estándar de oro para crear, convertir, firmar, proteger y editar documentos PDF en cualquier plataforma.",
    fullDescription: "La solución de PDF integral más avanzada del mundo. Te permite transformar documentos escaneados en archivos editables con reconocimiento óptico de caracteres (OCR), combinar múltiples tipos de archivo, solicitar firmas digitales legalmente vinculantes y proteger datos sensibles.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    features: [
      "Edición completa de texto e imágenes dentro de archivos PDF",
      "Conversión impecable de PDF a Word, Excel, PowerPoint y viceversa",
      "Reconocimiento óptico de caracteres (OCR) de alta precisión en más de 20 idiomas",
      "Firma electrónica segura y seguimiento de solicitudes de firma",
      "Cifrado y protección con contraseñas de alta seguridad"
    ],
    licenseType: "Suscripción oficial de fabricante",
    duration: "Configurable según el plan solicitado",
    devices: "PC / Mac y aplicaciones móviles",
    compatibility: "Windows 10/11, macOS v11 o superior",
    requirements: "Procesador Intel o AMD compatible de 1.5 GHz, 2 GB RAM, 4.5 GB espacio en disco",
    activationMethod: "Vía cuenta Adobe ID autorizada según los términos vigentes.",
    pricePEN: null, // Sin precio fijo establecido para obligar a consultar
    priceUSD: null,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Consultar disponibilidad",
    officialProductUrl: "https://www.adobe.com/es/acrobat/acrobat-pro.html",
    faqs: [
      {
        question: "¿Por qué figura 'Consultar precio'?",
        answer: "Debido a las variaciones de planes de suscripción de Adobe y disponibilidad según el tipo de usuario (educativo, profesional o empresarial), cotizamos el plan a medida vía WhatsApp."
      }
    ]
  },
  {
    id: "wondershare-pdfelement",
    name: "PDFelement Pro",
    brand: "Wondershare",
    category: "herramientas-pdf",
    edition: "Professional Edition",
    shortDescription: "La alternativa robusta, intuitiva y accesible para leer, editar, anotar y convertir documentos PDF.",
    fullDescription: "Una de las herramientas más elogiadas para gestión integral de PDFs. Con interfaz limpia similar a las aplicaciones de oficina, facilita la edición fluida de textos, formularios interactivos y compresión de archivos pesados.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Edición visual de texto, imágenes y páginas en PDF",
      "Conversor por lotes ultrarrápido a múltiples formatos",
      "Reconocimiento OCR para digitalizar documentos físicos",
      "Creación y rellenado de formularios interactivos",
      "Reducción y compresión de peso de archivos sin perder calidad"
    ],
    licenseType: "Licencia perpetua o suscripción",
    duration: "De por vida (versión mayor) o 1 año",
    devices: "1 Equipo",
    compatibility: "Windows 11 / 10 / 8.1, macOS 10.15+",
    requirements: "1 GHz procesador, 512 MB RAM, 500 MB espacio en disco",
    activationMethod: "Registro de cuenta en Wondershare con código de producto.",
    pricePEN: 129.00,
    priceUSD: 34.00,
    oldPricePEN: 159.00,
    oldPriceUSD: 42.00,
    promotion: {
      badge: "Alternativa Recomendada",
      title: "Calidad profesional a menor costo",
      terms: "Licencia válida para uso en 1 computador personal o de trabajo.",
      endDate: "Vigente"
    },
    availability: "Disponible",
    officialProductUrl: "https://pdf.wondershare.es/",
    faqs: []
  },
  {
    id: "coreldraw-graphics-suite",
    name: "CorelDRAW Graphics Suite",
    brand: "Corel / Alludo",
    category: "diseno-edicion",
    edition: "Commercial / Standard",
    shortDescription: "Suite profesional de ilustración vectorial, diseño editorial, maquetación y tipografía para creativos.",
    fullDescription: "Diseñada para diseñadores gráficos, profesionales de rotulación e imprenta. Proporciona herramientas potentes para ilustración de vectores, edición de fotos y preparación de artes finales para impresión de gran formato.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Ilustración vectorial avanzada y trazado de mapas de bits a vectores con IA",
      "Herramientas avanzadas de tipografía y maquetación para catálogos y folletos",
      "Edición no destructiva de fotografías con Corel PHOTO-PAINT",
      "Gestión de fuentes con Corel Font Manager",
      "Compatibilidad con formatos industriales AI, PSD, PDF, EPS y SVG"
    ],
    licenseType: "Suscripción o licencia perpetua según disponibilidad",
    duration: "1 año o permanente según edición",
    devices: "1 PC con Windows",
    compatibility: "Windows 11 / 10 de 64 bits",
    requirements: "Intel Core i3/5/7/9 o AMD Ryzen, 8 GB RAM, 5.5 GB espacio en disco",
    activationMethod: "Activación mediante cuenta oficial de Corel.",
    pricePEN: null,
    priceUSD: null,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Consultar disponibilidad",
    officialProductUrl: "https://www.coreldraw.com/es/",
    faqs: []
  },

  // --- UTILIDADES PARA PC Y SOFTWARE EMPRESARIAL ---
  {
    id: "aomei-backupper-pro",
    name: "AOMEI Backupper Pro",
    brand: "AOMEI",
    category: "utilidades-pc",
    edition: "Professional Edition",
    shortDescription: "Software confiable para copias de seguridad de Windows, clonación de discos duros y recuperación del sistema.",
    fullDescription: "Protege los datos de tu computadora contra fallos de disco duro, virus o ataques de ransomware. Permite clonar tu disco mecánico a un SSD ultrarrápido sin reinstalar Windows ni perder ningún archivo o configuración.",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=800&q=80",
    features: [
      "Copia de seguridad del sistema, discos, particiones y carpetas específicas",
      "Clonación de disco a disco para migración sencilla a unidades SSD NVMe",
      "Programación automática de respaldos diarios, semanales o por eventos",
      "Creación de medios de arranque USB para rescate en caso de que Windows no inicie",
      "Sincronización en tiempo real de archivos a discos externos o almacenamiento en red"
    ],
    licenseType: "Licencia de por vida (Lifetime upgrades)",
    duration: "De por vida",
    devices: "1 o 2 PCs",
    compatibility: "Windows 11, 10, 8.1/8, 7",
    requirements: "500 MHz procesador, 256 MB RAM, 300 MB espacio en disco",
    activationMethod: "Activación mediante clave de registro oficial en el software instalado.",
    pricePEN: 89.00,
    priceUSD: 24.00,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Disponible",
    officialProductUrl: "https://www.ubackup.com/es/professional.html",
    faqs: [
      {
        question: "¿Puedo migrar mi Windows de un HDD a un SSD?",
        answer: "Sí, es una de sus funciones principales: clona el sistema tal cual sin necesidad de reinstalar programas ni controladores."
      }
    ]
  },
  {
    id: "easeus-partition-master",
    name: "EaseUS Partition Master Pro",
    brand: "EaseUS",
    category: "utilidades-pc",
    edition: "Professional",
    shortDescription: "Administrador integral de particiones de disco, optimización de espacio y conversión de discos MBR a GPT.",
    fullDescription: "La herramienta líder para redimensionar particiones de disco sin pérdida de datos, extender la unidad C cuando se queda sin espacio, y convertir tablas de partición MBR a GPT para cumplir con los requisitos de Windows 11.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Redimensionamiento, movimiento y fusión de particiones sin pérdida de archivos",
      "Conversión MBR a GPT sin formatear para compatibilidad con UEFI",
      "Clonación de partición de sistema y asignación inteligente de espacio",
      "Limpieza de archivos basura y optimización de velocidad de lectura de discos",
      "Herramienta de creación de USB de arranque WinPE"
    ],
    licenseType: "Licencia oficial",
    duration: "1 año o de por vida según elección",
    devices: "1 PC",
    compatibility: "Windows 11/10/8/7",
    requirements: "CPU 500 MHz, 512 MB RAM, 100 MB espacio",
    activationMethod: "Registro de código de activación en la barra de menús del programa.",
    pricePEN: 75.00,
    priceUSD: 20.00,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Disponible",
    officialProductUrl: "https://es.easeus.com/partition-manager/",
    faqs: []
  },
  {
    id: "windows-server-standard",
    name: "Windows Server Standard",
    brand: "Microsoft",
    category: "software-empresarial",
    edition: "2022 / 2025 Standard (16 Cores)",
    shortDescription: "Sistema operativo para servidores corporativos, virtualización ligera y gestión de infraestructura de red.",
    fullDescription: "Conecta entornos locales con servicios en la nube híbrida de Azure, agregando capas adicionales de seguridad y ayudando a modernizar tus aplicaciones e infraestructura informática.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    features: [
      "Seguridad multicapa avanzada con servidor con núcleo protegido",
      "Compatibilidad para contenedores de Windows y Kubernetes",
      "Gestión simplificada a través de Windows Admin Center",
      "Soporte para virtualización con hasta 2 entornos operativos aislados (Oщением)",
      "Capacidades de almacenamiento híbrido con Azure Arc"
    ],
    licenseType: "Digital ESD Core Licensing",
    duration: "Perpetua para el servidor configurado",
    devices: "1 Servidor físico (Licencia base de 16 núcleos)",
    compatibility: "Hardware certificado para Windows Server",
    requirements: "Procesador de 64 bits a 1.4 GHz, 2 GB RAM con ECC, 32 GB espacio en disco",
    activationMethod: "Activación telefónica o mediante clave de producto oficial en servidor.",
    pricePEN: null,
    priceUSD: null,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Bajo pedido / Consultar",
    officialProductUrl: "https://www.microsoft.com/es-es/windows-server",
    faqs: [
      {
        question: "¿Incluye licencias de acceso de cliente (CALs)?",
        answer: "Las CALs de usuario o dispositivo se cotizan por separado según el número de clientes que accederán a los servicios del servidor."
      }
    ]
  },
  {
    id: "visual-studio-professional",
    name: "Visual Studio Professional",
    brand: "Microsoft",
    category: "otras-licencias",
    edition: "Professional Edition",
    shortDescription: "Entorno de desarrollo integrado (IDE) completo para desarrolladores de aplicaciones modernas web, móviles y de escritorio.",
    fullDescription: "Potencia tu productividad de programación con un IDE robusto, depuración avanzada de código, herramientas de pruebas unitarias y colaboración en equipo fluida para .NET, C++, Python, JavaScript y TypeScript.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Editor de código de última generación con IntelliSense y sugerencias por IA",
      "Depurador y creador de perfiles de rendimiento multiplataforma",
      "Integración nativa con repositorios Git y GitHub",
      "Diseñador de interfaz para Windows Presentation Foundation (WPF) y MAUI",
      "Herramientas de pruebas y diagnóstico de errores en tiempo de compilación"
    ],
    licenseType: "Licencia digital comercial",
    duration: "Suscripción o licencia perpetua según requerimiento",
    devices: "1 Desarrollador",
    compatibility: "Windows 11 / 10 de 64 bits",
    requirements: "Procesador de 1.8 GHz de cuatro núcleos, 8 GB RAM, disco SSD recomendado",
    activationMethod: "Vinculación de cuenta de desarrollador o clave de producto.",
    pricePEN: null,
    priceUSD: null,
    oldPricePEN: null,
    oldPriceUSD: null,
    promotion: null,
    availability: "Consultar disponibilidad",
    officialProductUrl: "https://visualstudio.microsoft.com/es/vs/professional/",
    faqs: []
  }
];

export const GENERAL_FAQS = [
  {
    question: "¿Cómo recibo mi licencia después de comprar?",
    answer: "Una vez verificado el pago, la entrega de tu licencia digital (clave de activación o enlace de suscripción oficial) se realiza de forma inmediata o en pocos minutos a través de WhatsApp o correo electrónico, acompañada de instrucciones detalladas de descarga e instalación paso a paso."
  },
  {
    question: "¿Qué diferencia existe entre una licencia perpetua y una suscripción?",
    answer: "Una licencia perpetua (pago único) te permite utilizar esa versión específica del software de manera indefinida sin pagos recurrentes. Una suscripción (mensual o anual) te da acceso continuo a las versiones más actualizadas, almacenamiento en la nube y soporte activo mientras la membresía se encuentre vigente."
  },
  {
    question: "¿En cuántos dispositivos puedo utilizar el producto?",
    answer: "Depende de las condiciones de cada producto. Por ejemplo, licencias estándar de Windows o Office ESD están autorizadas para 1 PC o Mac; mientras que suites familiares o de seguridad como Bitdefender o Microsoft 365 admiten de 3 a 5 dispositivos en simultáneo. Toda la información está claramente descrita en la ficha de cada producto."
  },
  {
    question: "¿Cómo se activa el software?",
    answer: "Todas las activaciones se realizan a través de los canales oficiales de cada fabricante: ya sea ingresando la clave alfanumérica dentro del menú de configuración del software original previamente descargado, o vinculando el código directamente a tu cuenta oficial (por ejemplo en el portal de Microsoft, ESET HOME o Norton)."
  },
  {
    question: "¿Qué sucede si necesito ayuda durante la activación?",
    answer: "Brindamos asesoría y soporte técnico personalizado a través de WhatsApp para guiarte en el proceso de descarga, instalación y activación hasta que tu software quede 100% operativo y validado en los servidores oficiales."
  },
  {
    question: "¿Puedo comprar desde otro país fuera de Perú?",
    answer: "Sí. Ofrecemos cotización y soporte en Dólares Estadounidenses (USD) para clientes internacionales. Al ser productos 100% digitales, la entrega se realiza por canales electrónicos sin demoras de aduana ni costos de flete físico."
  },
  {
    question: "¿Qué métodos de pago están disponibles?",
    answer: "Para Perú aceptamos transferencias bancarias directas (BCP, BBVA, Interbank), Yape, Plin y transferencias interbancarias. Para clientes internacionales coordinamos opciones digitales o pasarelas autorizadas vía WhatsApp."
  }
];
