import { STORE_CONFIG } from '../data/config';

/**
 * Formatea un precio numérico según la moneda seleccionada.
 * Si el precio es null o undefined, retorna "Consultar precio".
 * 
 * @param {number|null} price - Importe numérico
 * @param {string} currency - 'PEN' o 'USD'
 * @returns {string} Precio formateado con símbolo oficial
 */
export function formatPrice(price, currency = 'PEN') {
  if (price === null || price === undefined || isNaN(price) || price === '') {
    return 'Consultar precio';
  }

  const num = Number(price);

  if (currency === 'PEN') {
    return `S/ ${num.toFixed(2)}`;
  } else if (currency === 'USD') {
    return `US$ ${num.toFixed(2)}`;
  }

  return `${currency} ${num.toFixed(2)}`;
}

/**
 * Genera el enlace de WhatsApp con el mensaje preformateado para consulta o compra.
 * 
 * @param {Object} product - Objeto del producto
 * @param {string} currency - 'PEN' o 'USD'
 * @param {string} type - 'product' o 'general'
 * @returns {string} URL completa de api.whatsapp.com
 */
export function buildWhatsAppUrl(product = null, currency = 'PEN', type = 'product') {
  const cleanNumber = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  let message = '';

  if (type === 'general' || !product) {
    message = `Hola ${STORE_CONFIG.storeName}, deseo consultar información y disponibilidad sobre su catálogo de software y licencias digitales.`;
  } else {
    const priceVal = currency === 'PEN' ? product.pricePEN : product.priceUSD;
    const formattedPrice = formatPrice(priceVal, currency);
    
    let priceText = '';
    if (formattedPrice !== 'Consultar precio') {
      priceText = ` con precio de catálogo de ${formattedPrice}`;
    }

    const editionText = product.edition ? ` (Edición: ${product.edition})` : '';

    message = `Hola ${STORE_CONFIG.storeName}, deseo consultar la disponibilidad y condiciones de la licencia de "${product.name}"${editionText}${priceText} que aparece en su catálogo.`;
  }

  return `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`;
}

/**
 * Calcula el porcentaje de descuento si existen precios anteriores reales
 */
export function calculateDiscount(currentPrice, oldPrice) {
  if (!currentPrice || !oldPrice || oldPrice <= currentPrice) return null;
  const discount = Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
  return discount > 0 ? discount : null;
}
