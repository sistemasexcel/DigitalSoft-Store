import React, { useState } from 'react';
import Icon from './Icon';
import { formatPrice } from '../utils/formatters';
import { STORE_CONFIG } from '../data/config';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  if (!isOpen) return null;

  // Calcular totales
  const totalAmount = cartItems.reduce((acc, item) => {
    const price = currency === 'PEN' ? item.pricePEN : item.priceUSD;
    if (price && typeof price === 'number') {
      return acc + (price * item.quantity);
    }
    return acc;
  }, 0);

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Formatear mensaje para WhatsApp con todo el pedido
  const handleSendOrder = () => {
    if (cartItems.length === 0) return;

    const cleanNumber = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    const currencyLabel = currency === 'PEN' ? 'S/' : 'US$';

    let orderList = '';
    cartItems.forEach((item, index) => {
      const price = currency === 'PEN' ? item.pricePEN : item.priceUSD;
      const formattedItemPrice = price ? `${currencyLabel} ${price.toFixed(2)}` : 'Por consultar';
      const versionText = item.selectedVersion ? ` [${item.selectedVersion}]` : '';
      const subtotal = price ? ` = ${currencyLabel} ${(price * item.quantity).toFixed(2)}` : '';
      
      orderList += `${index + 1}. *${item.name}*${versionText} (x${item.quantity}) - ${formattedItemPrice}${subtotal}\n`;
    });

    const nameText = customerName.trim() ? `\n👤 *Cliente:* ${customerName.trim()}` : '';
    const noteText = customerNote.trim() ? `\n📝 *Nota:* ${customerNote.trim()}` : '';
    const totalText = totalAmount > 0 ? `\n💰 *TOTAL ESTIMADO:* ${currencyLabel} ${totalAmount.toFixed(2)}` : '';

    const message = `👋 ¡Hola ${STORE_CONFIG.storeName}! Deseo confirmar el siguiente pedido de mi carrito de compras:\n${nameText}${noteText}\n\n📦 *PRODUCTOS:* \n${orderList}${totalText}\n\nQuedo atento(a) a los métodos de pago y pasos de entrega digital. ¡Muchas gracias!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="cart-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Cabecera del Carrito */}
        <div className="cart-header">
          <div className="cart-header-title">
            <div className="cart-header-icon-box">
              <Icon name="shopping-cart" size={20} />
            </div>
            <div>
              <h3>Mi Carrito de Compras</h3>
              <span className="cart-count-badge">
                {totalItemsCount} {totalItemsCount === 1 ? 'producto' : 'productos'} seleccionados
              </span>
            </div>
          </div>
          <button 
            type="button" 
            className="cart-close-btn" 
            onClick={onClose}
            aria-label="Cerrar carrito"
          >
            <Icon name="x" size={20} />
          </button>
        </div>

        {/* Lista de productos en el carrito */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">
                <Icon name="shopping-cart" size={48} />
              </div>
              <h4>Tu carrito está vacío</h4>
              <p>Agrega los programas o licencias que necesitas para realizar un solo pedido.</p>
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={onClose}
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => {
                const price = currency === 'PEN' ? item.pricePEN : item.priceUSD;
                const formattedPrice = formatPrice(price, currency);

                return (
                  <div key={item.cartItemId || item.id} className="cart-item-card">
                    <div className="cart-item-img-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.name}</h4>
                      {item.selectedVersion && (
                        <span className="cart-item-version-tag">
                          {item.selectedVersion}
                        </span>
                      )}
                      <span className="cart-item-edition">{item.edition || item.brand}</span>
                      <div className="cart-item-price-unit">{formattedPrice} c/u</div>

                      {/* Controles de cantidad */}
                      <div className="cart-item-actions-row">
                        <div className="quantity-controls">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId || item.id, item.quantity - 1)}
                            className="qty-btn"
                            title="Disminuir cantidad"
                          >
                            <Icon name="minus" size={14} />
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartItemId || item.id, item.quantity + 1)}
                            className="qty-btn"
                            title="Aumentar cantidad"
                          >
                            <Icon name="plus" size={14} />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-btn"
                          onClick={() => onRemoveItem(item.cartItemId || item.id)}
                          title="Quitar producto"
                        >
                          <Icon name="trash" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer y Checkout si hay productos */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Campos opcionales para personalizar el pedido */}
            <div className="cart-customer-fields">
              <input
                type="text"
                placeholder="Tu nombre (opcional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="cart-input"
              />
              <input
                type="text"
                placeholder="¿Alguna nota o consulta específica?"
                value={customerNote}
                onChange={(e) => setCustomerNote(e.target.value)}
                className="cart-input"
              />
            </div>

            {/* Resumen Total */}
            <div className="cart-total-box">
              <div className="cart-total-row">
                <span>Subtotal ({totalItemsCount} ítems):</span>
                <strong>{formatPrice(totalAmount, currency)}</strong>
              </div>
              <div className="cart-delivery-tag">
                <Icon name="clock" size={14} color="#10b981" />
                <span>Entrega digital inmediata por WhatsApp / Correo</span>
              </div>
            </div>

            {/* Botón Principal: Enviar todo el pedido por WhatsApp */}
            <button
              type="button"
              className="btn btn-whatsapp btn-send-order"
              onClick={handleSendOrder}
            >
              <Icon name="whatsapp" size={22} />
              <span>Enviar pedido completo por WhatsApp</span>
            </button>

            <button
              type="button"
              className="cart-clear-all-btn"
              onClick={onClearCart}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
