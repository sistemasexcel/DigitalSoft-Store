/**
 * Configuración general y comercial de la tienda
 * Permite cambiar el nombre, contactos, redes sociales y monedas fácilmente
 */
export const STORE_CONFIG = {
  // Identidad de marca
  storeName: "DigitalSoft Store",
  tagline: "Software, licencias originales y herramientas informáticas",
  shortDescription: "Tu catálogo confiable de software digital, licencias originales y herramientas de productividad para profesionales y empresas.",
  
  // Canales de contacto
  whatsappNumber: "+51931212564", // Número de WhatsApp oficial
  whatsappDisplay: "+51 931 212 564",
  emailContact: "contacto@digitalsoftstore.com",
  schedule: "Lunes a Sábado: 8:00 AM - 8:00 PM (Hora Perú - GMT-5)",
  location: "Lima, Perú — Envíos digitales a todo el mundo",
  
  // Moneda por defecto: 'PEN' o 'USD'
  defaultCurrency: "PEN",

  // Redes sociales (editables)
  socialLinks: {
    facebook: "https://facebook.com/digitalsoftstore",
    instagram: "https://instagram.com/digitalsoftstore",
    telegram: "https://t.me/digitalsoftstore",
    linkedin: "https://linkedin.com/company/digitalsoftstore"
  },

  // Políticas e información comercial (100% editables)
  legalNotice: "DigitalSoft Store es un comercio independiente de distribución y asesoría en soluciones de software y licencias digitales. Todas las marcas registradas, nombres de software y logotipos pertenecen a sus respectivos propietarios y se mencionan exclusivamente con fines identificativos y de compatibilidad según las normas de uso legítimo.",
  deliveryPolicy: "La entrega de licencias se efectúa por correo electrónico o mensajería WhatsApp autorizada tras confirmar el comprobante de pago.",
  guaranteeNotice: "Todas nuestras licencias cuentan con soporte de activación y garantía según las políticas y términos oficiales de cada fabricante."
};

export const CATEGORIES = [
  {
    id: "oficina-productividad",
    name: "Suites de oficina y productividad",
    shortName: "Oficina y Productividad",
    icon: "briefcase",
    description: "Herramientas esenciales para procesar textos, hojas de cálculo, presentaciones y colaboración en equipo."
  },
  {
    id: "sistemas-operativos",
    name: "Sistemas operativos",
    shortName: "Sistemas Operativos",
    icon: "cpu",
    description: "Sistemas estables y modernos para optimizar el rendimiento y seguridad de tus equipos informáticos."
  },
  {
    id: "antivirus-seguridad",
    name: "Antivirus y seguridad informática",
    shortName: "Seguridad y Antivirus",
    icon: "shield-check",
    description: "Protección integral contra malware, ransomware, phishing y amenazas digitales en tiempo real."
  },
  {
    id: "diseno-edicion",
    name: "Programas de diseño y edición",
    shortName: "Diseño y Creatividad",
    icon: "palette",
    description: "Software para creación visual, retoque fotográfico, ilustración vectorial y producción multimedia."
  },
  {
    id: "herramientas-pdf",
    name: "Herramientas PDF",
    shortName: "Herramientas PDF",
    icon: "file-text",
    description: "Soluciones para crear, editar, firmar, convertir y comprimir documentos digitales en formato PDF."
  },
  {
    id: "utilidades-pc",
    name: "Utilidades para PC",
    shortName: "Utilidades para PC",
    icon: "tool",
    description: "Herramientas de optimización, diagnóstico de hardware, particionamiento y mantenimiento del sistema."
  },
  {
    id: "software-empresarial",
    name: "Software empresarial",
    shortName: "Software Empresarial",
    icon: "building",
    description: "Soluciones para gestión, bases de datos, servidores y entornos corporativos."
  },
  {
    id: "otras-licencias",
    name: "Otras licencias digitales",
    shortName: "Otras Licencias",
    icon: "key",
    description: "Licencias de desarrollo, servidores virtuales, complementos y utilidades especializadas."
  }
];
