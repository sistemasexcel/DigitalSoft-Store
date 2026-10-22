import React from 'react';
import Icon from './Icon';
import { STORE_CONFIG } from '../data/config';
import { formatPrice, buildWhatsAppUrl, calculateDiscount } from '../utils/formatters';

export default function ProductCard({ 
  product, 
  currency, 
  onSelectProduct 
}) {
  const currentPrice = currency === 'PEN' ? product.pricePEN : product.priceUSD;
  const oldPrice = currency === 'PEN' ? product.oldPricePEN : product.oldPriceUSD;
  const formattedPrice = formatPrice(currentPrice, currency);
  const formattedOldPrice = oldPrice ? formatPrice(oldPrice, currency) : null;
  const discountPercent = calculateDiscount(currentPrice, oldPrice);

  const whatsappUrl = buildWhatsAppUrl(product, currency, 'product');

  return (
    <article className="product-card">
      {/* Badges superiores */}
      <div className="product-badges">
        {product.promotion?.badge && (
          <span className="badge badge-sale">
            <Icon name="tag" size={12} /> {product.promotion.badge}
          </span>
        )}
        {discountPercent && (
          <span className="badge badge-sale">
            -{discountPercent}%
          </span>
        )}
        {product.licenseType && (
          <span className="badge badge-tag">
            {product.licenseType.includes('Perpetua') ? 'Perpetua' : 'Suscripción'}
          </span>
        )}
      </div>

      {/* Imagen / Visual del Software */}
      <div className="product-media" onClick={() => onSelectProduct(product)}>
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="product-img" 
        />
        <div className="product-media-overlay">
          <span>Ver especificaciones completas</span>
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="product-body">
        {/* Fabricante y Categoría */}
        <div className="product-meta-header">
          <span className="product-brand">{product.brand}</span>
          <span className="product-device-badge">
            <Icon name="monitor" size={13} /> {product.devices || '1 Dispositivo'}
          </span>
        </div>

        {/* Título y Edición */}
        <h3 className="product-title" onClick={() => onSelectProduct(product)}>
          {product.name}
        </h3>
        
        {product.edition && (
          <div className="product-edition">
            {product.edition}
          </div>
        )}

        <p className="product-description">
          {product.shortDescription}
        </p>

        {/* Atributos técnicos clave */}
        <div className="product-specs-list">
          <div className="spec-row">
            <span className="spec-label">Licencia:</span>
            <span className="spec-value">{product.licenseType || 'Configurable'}</span>
          </div>
          {product.duration && (
            <div className="spec-row">
              <span className="spec-label">Duración:</span>
              <span className="spec-value">{product.duration}</span>
            </div>
          )}
          {product.compatibility && (
            <div className="spec-row">
              <span className="spec-label">Compatibilidad:</span>
              <span className="spec-value spec-compat">{product.compatibility}</span>
            </div>
          )}
        </div>

        {/* Precios */}
        <div className="product-pricing-block">
          <div className="price-main-box">
            <span className="price-label-text">
              {currency === 'PEN' ? 'Precio en soles:' : 'Precio internacional:'}
            </span>
            <div className="price-row">
              <span className={`price-amount ${formattedPrice === 'Consultar precio' ? 'price-consult' : ''}`}>
                {formattedPrice}
              </span>
              {formattedOldPrice && (
                <span className="price-old">{formattedOldPrice}</span>
              )}
            </div>
          </div>
          
          {/* Segunda moneda informativa para transparencia */}
          <div className="price-secondary-info">
            {currency === 'PEN' ? (
              <span>Ref. USD: {formatPrice(product.priceUSD, 'USD')}</span>
            ) : (
              <span>Ref. PEN: {formatPrice(product.pricePEN, 'PEN')}</span>
            )}
          </div>
        </div>

        {/* Acciones */}
        <div className="product-actions-grid">
          <button 
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onSelectProduct(product)}
            title="Ver detalles completos del producto"
          >
            Ver detalles
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            title="Consultar disponibilidad o comprar por WhatsApp"
          >
            <Icon name="whatsapp" size={16} />
            <span>Consultar o comprar</span>
          </a>
        </div>
      </div>
    </article>
  );
}
