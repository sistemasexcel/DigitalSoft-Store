import React from 'react';
import Icon from './Icon';
import { formatPrice, buildWhatsAppUrl, calculateDiscount } from '../utils/formatters';

export default function ProductDetailModal({ 
  product, 
  currency, 
  onClose 
}) {
  if (!product) return null;

  const currentPrice = currency === 'PEN' ? product.pricePEN : product.priceUSD;
  const oldPrice = currency === 'PEN' ? product.oldPricePEN : product.oldPriceUSD;
  const formattedPrice = formatPrice(currentPrice, currency);
  const formattedOldPrice = oldPrice ? formatPrice(oldPrice, currency) : null;
  const discountPercent = calculateDiscount(currentPrice, oldPrice);

  const whatsappUrl = buildWhatsAppUrl(product, currency, 'product');

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Cabecera del Modal */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="badge badge-tag">{product.brand}</span>
            <span className="modal-header-category">{product.edition || 'Software Digital'}</span>
          </div>
          <button 
            type="button"
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Cerrar modal de detalles"
          >
            <Icon name="x" size={22} />
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="modal-body">
          <div className="modal-grid">
            {/* Columna Izquierda: Imagen y Bloque Comercial */}
            <div className="modal-left-col">
              <div className="modal-image-wrapper">
                <img src={product.image} alt={product.name} className="modal-image" />
                {discountPercent && (
                  <span className="modal-badge-discount">
                    -{discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Caja de Precio y Compra */}
              <div className="modal-pricing-box">
                <div className="modal-price-header">
                  <span className="modal-price-label">
                    {currency === 'PEN' ? 'Precio oficial en Soles (PEN)' : 'Precio internacional en Dólares (USD)'}
                  </span>
                  <div className="modal-price-row">
                    <span className="modal-main-price">{formattedPrice}</span>
                    {formattedOldPrice && (
                      <span className="modal-old-price">{formattedOldPrice}</span>
                    )}
                  </div>
                  {/* Vista complementaria de moneda */}
                  <div className="modal-alt-price">
                    {currency === 'PEN' ? (
                      <small>Equivalente de referencia: {formatPrice(product.priceUSD, 'USD')}</small>
                    ) : (
                      <small>Equivalente en Perú: {formatPrice(product.pricePEN, 'PEN')}</small>
                    )}
                  </div>
                </div>

                <div className="modal-cta-buttons">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg modal-buy-btn"
                  >
                    <Icon name="whatsapp" size={20} />
                    <span>Consultar o comprar por WhatsApp</span>
                  </a>

                  {product.officialProductUrl && (
                    <a
                      href={product.officialProductUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm modal-official-btn"
                    >
                      <span>Ver ficha oficial en web de {product.brand}</span>
                      <Icon name="arrow-right" size={14} />
                    </a>
                  )}
                </div>

                <div className="modal-guarantee-note">
                  <Icon name="shield-check" size={16} color="#10b981" />
                  <span>Entrega digital de clave y soporte de activación garantizado.</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Especificaciones Técnicas y Condiciones */}
            <div className="modal-right-col">
              <h1 className="modal-product-title">{product.name}</h1>
              {product.edition && (
                <div className="modal-product-edition">{product.edition}</div>
              )}

              <p className="modal-full-description">
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Tabla de Ficha Técnica */}
              <div className="modal-section-card">
                <h3 className="modal-section-heading">
                  <Icon name="cpu" size={18} /> Ficha Técnica y Condiciones de Licencia
                </h3>
                <div className="modal-specs-table">
                  <div className="table-spec-item">
                    <span className="spec-name">Tipo de licencia:</span>
                    <span className="spec-val">{product.licenseType || 'No especificado'}</span>
                  </div>
                  <div className="table-spec-item">
                    <span className="spec-name">Duración:</span>
                    <span className="spec-val">{product.duration || 'Permanente'}</span>
                  </div>
                  <div className="table-spec-item">
                    <span className="spec-name">Dispositivos permitidos:</span>
                    <span className="spec-val">{product.devices || '1 PC'}</span>
                  </div>
                  <div className="table-spec-item">
                    <span className="spec-name">Compatibilidad:</span>
                    <span className="spec-val">{product.compatibility || 'Windows'}</span>
                  </div>
                  {product.requirements && (
                    <div className="table-spec-item">
                      <span className="spec-name">Requisitos mínimos:</span>
                      <span className="spec-val">{product.requirements}</span>
                    </div>
                  )}
                  {product.activationMethod && (
                    <div className="table-spec-item">
                      <span className="spec-name">Método de activación:</span>
                      <span className="spec-val">{product.activationMethod}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Funcionalidades Clave */}
              {product.features && product.features.length > 0 && (
                <div className="modal-section-card">
                  <h3 className="modal-section-heading">
                    <Icon name="sparkles" size={18} /> Características y Beneficios
                  </h3>
                  <ul className="modal-features-list">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="feature-item">
                        <Icon name="check" size={16} color="#2563eb" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preguntas frecuentes del producto si existen */}
              {product.faqs && product.faqs.length > 0 && (
                <div className="modal-section-card">
                  <h3 className="modal-section-heading">
                    <Icon name="help-circle" size={18} /> Preguntas Frecuentes sobre esta Licencia
                  </h3>
                  <div className="modal-product-faqs">
                    {product.faqs.map((faq, idx) => (
                      <div key={idx} className="product-faq-block">
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aviso legal de legitimidad */}
              <div className="modal-disclaimer">
                <Icon name="lock" size={14} />
                <span>
                  Información técnica orientativa para fines de compatibilidad. Para especificaciones completas de arquitectura y soporte oficial, revise el sitio del fabricante.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
