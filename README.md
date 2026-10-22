# DigitalSoft Store — Tienda Web de Software y Licencias Digitales

Aplicación web comercial e informativa desarrollada con **React**, **HTML5 semántico** y **CSS3 puro** (sin Tailwind, Bootstrap ni librerías de estilos adicionales). Pensada para la venta y asesoría de licencias legítimas de software, sistemas operativos, antivirus y herramientas informáticas mediante atención directa por WhatsApp.

---

## 🚀 Características Principales

1. **Gestión Dual de Moneda (PEN / USD):**
   - Selector en la barra superior y móvil.
   - Alterna entre Soles Peruanos (`S/ 99.00`) y Dólares Estadounidenses (`US$ 29.00`).
   - Muestra *"Consultar precio"* si no se ha definido importe numérico. No realiza conversiones automáticas inventadas.

2. **Catálogo y Tarjetas Técnicas:**
   - Información completa: Marca/fabricante, edición, tipo de licencia (perpetua vs. suscripción), duración, cantidad de dispositivos y compatibilidad.
   - Botón directo de **«Ver detalles»** (abre modal con especificaciones completas) y **«Consultar o comprar»** (abre WhatsApp con mensaje personalizado).

3. **Buscador y Filtros en Tiempo Real:**
   - Búsqueda por nombre de producto, versión o fabricante.
   - Filtro por 8 categorías tecnológicas.
   - Filtro por fabricante / marca.
   - Ordenamiento por: Destacados, Precio (menor a mayor), Precio (mayor a menor) y Alfabético (A - Z).
   - Filtro de promociones activas.
   - Vista amigable de *"Sin resultados"* con botón para restablecer filtros o consultar por WhatsApp.

4. **Integración con WhatsApp:**
   - Mensaje inteligente precargado con el nombre de la licencia, edición y moneda seleccionada.
   - Botón flotante accesible en la esquina inferior derecha.

5. **Avisos Legales y Transparencia Comercial:**
   - Exclusión de marcas y declaración de uso legítimo de nombres comerciales.
   - Términos claros sobre activación oficial y entrega digital inmediata.

---

## 📁 Estructura del Proyecto

```text
src/
├── assets/          # Recursos estáticos
├── components/      # Componentes modulares reutilizables
│   ├── CategoryGrid.jsx        # Cuadrícula interactiva de categorías
│   ├── CatalogSection.jsx      # Catálogo con buscador, filtros y ordenamiento
│   ├── FaqSection.jsx          # Preguntas frecuentes con acordeón interactivo
│   ├── Footer.jsx              # Pie de página comercial y avisos legales
│   ├── Header.jsx              # Cabecera, selector PEN/USD, buscador y menú móvil
│   ├── HeroSection.jsx         # Portada principal con composición visual tecnológica
│   ├── Icon.jsx                # Iconos SVG puros integrados sin librerías pesadas
│   ├── OffersSection.jsx       # Sección de ofertas y promociones reales
│   ├── ProductCard.jsx         # Tarjeta de producto con precios y badges
│   └── ProductDetailModal.jsx  # Modal de especificaciones y condiciones
├── data/
│   ├── config.js               # Configuración comercial (Nombre, WhatsApp, Moneda)
│   └── products.js             # Catálogo de productos y FAQs
├── styles/
├── utils/
│   └── formatters.js           # Formato de precios PEN/USD y enlaces de WhatsApp
├── App.css                     # Estilos de componentes (CSS3 puro)
├── index.css                   # Variables de diseño, fuentes y reset
├── App.jsx                     # Componente principal y gestión de estado
└── main.jsx                    # Punto de entrada de React
```

---

## 🛠️ Cómo Configurar la Tienda

### 1. Cambiar el nombre de la tienda, número de WhatsApp o moneda por defecto
Abre el archivo [src/data/config.js](file:///c:/Users/JOE/Desktop/WEB_PROGRAMAS/src/data/config.js):

```javascript
export const STORE_CONFIG = {
  storeName: "DigitalSoft Store", // Cambia por tu marca final
  whatsappNumber: "+51987654321", // Coloca tu número con código de país (+51...)
  whatsappDisplay: "+51 987 654 321",
  defaultCurrency: "PEN",          // 'PEN' o 'USD'
  ...
};
```

### 2. Agregar o Modificar Productos del Catálogo
Abre el archivo [src/data/products.js](file:///c:/Users/JOE/Desktop/WEB_PROGRAMAS/src/data/products.js). Cada producto admite la siguiente estructura:

```javascript
{
  id: "mi-nuevo-software",
  name: "Nombre del Software",
  brand: "Fabricante",
  category: "oficina-productividad", // ID de una de las 8 categorías
  edition: "Professional 2025",
  shortDescription: "Descripción breve para la tarjeta.",
  fullDescription: "Explicación técnica detallada para la vista modal.",
  image: "URL de la imagen del producto",
  features: [
    "Funcionalidad 1",
    "Funcionalidad 2"
  ],
  licenseType: "Perpetua (Un solo pago)", // o "Suscripción anual"
  duration: "Permanente",
  devices: "1 PC",
  compatibility: "Windows 11 / 10",
  requirements: "4 GB RAM, 2 GB disco",
  activationMethod: "Clave digital alfanumérica en portal oficial",
  pricePEN: 99.00,        // o null si es por cotizar
  priceUSD: 26.00,        // o null si es por cotizar
  oldPricePEN: 129.00,    // Opcional: para promociones reales
  oldPriceUSD: 34.00,
  promotion: {            // Opcional o null
    badge: "Oferta",
    title: "Promoción de lanzamiento",
    terms: "Condiciones de activación",
    endDate: "30 de Noviembre"
  },
  availability: "Disponible",
  officialProductUrl: "https://web-oficial.com",
  faqs: [
    { question: "¿Pregunta técnica?", answer: "Respuesta clara." }
  ]
}
```

---

## 💻 Ejecución en Desarrollo y Producción

- **Iniciar servidor de desarrollo:**
  ```bash
  npm run dev
  ```
  Accede a `http://localhost:5173/`

- **Compilar para producción:**
  ```bash
  npm run build
  ```
