import React from 'react';
import Icon from './Icon';
import { formatPrice, calculateDiscount } from '../utils/formatters';

export default function ProductCard({ 
  product, 
  currency, 
  onSelectProduct,
  onAddToCart,
  isInCart
}) {
  const currentPrice = currency === 'PEN' ? product.pricePEN : product.priceUSD;
  const oldPrice = currency === 'PEN' ? product.oldPricePEN : product.oldPriceUSD;
  const formattedPrice = formatPrice(currentPrice, currency);
  const formattedOldPrice = oldPrice ? formatPrice(oldPrice, currency) : null;
  const discountPercent = calculateDiscount(currentPrice, oldPrice);

  const handleCardClick = () => {
    onSelectProduct(product);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <article className="product-card" onClick={handleCardClick}>
      {/* 1. Portada Visual del Software */}
      <div className="product-media">
        <div className="product-img-wrapper">
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy"
            className="product-img" 
          />
        </div>

        {/* Badges Flotantes */}
        <div className="product-media-badges">
          {discountPercent && (
            <span className="media-badge badge-discount">
              -{discountPercent}%
            </span>
          )}
          {product.promotion?.badge && (
            <span className="media-badge badge-promo">
              <Icon name="tag" size={11} /> {product.promotion.badge}
            </span>
          )}
          {isInCart && (
            <span className="media-badge badge-in-cart">
              <Icon name="check" size={11} /> En el carrito
            </span>
          )}
        </div>

        {/* Overlay para ver detalles */}
        <div className="product-media-hover-overlay">
          <span>
            <Icon name="search" size={15} /> Ver detalles y opciones
          </span>
        </div>
      </div>

      {/* 2. Cuerpo Ordenado de la Tarjeta */}
      <div className="product-body">
        {/* Metadatos superiores */}
        <div className="product-meta-header">
          <span className="product-brand-tag">{product.brand}</span>
          <span className="product-device-tag">
            <Icon name="monitor" size={12} /> {product.devices || '1 PC'}
          </span>
        </div>

        {/* Título de software */}
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Edición */}
        {product.edition && (
          <div className="product-edition-sub">
            {product.edition}
          </div>
        )}

        {/* Chips de características rápidas */}
        <div className="product-quick-chips">
          {product.duration && (
            <span className="quick-chip">
              <Icon name="clock" size={11} /> {product.duration}
            </span>
          )}
          {product.licenseType && (
            <span className="quick-chip">
              <Icon name="shield-check" size={11} /> {product.licenseType.includes('Perpetua') ? 'Perpetua' : 'Original'}
            </span>
          )}
        </div>

        {/* 3. Bloque de Precios */}
        <div className="product-pricing-block">
          <div className="price-main-box">
            <span className="price-label-text">
              {currency === 'PEN' ? 'Precio en Soles:' : 'Precio en Dólares:'}
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
          
          <div className="price-secondary-info">
            {currency === 'PEN' ? (
              <span>Ref. {formatPrice(product.priceUSD, 'USD')}</span>
            ) : (
              <span>Ref. {formatPrice(product.pricePEN, 'PEN')}</span>
            )}
          </div>
        </div>

        {/* 4. Botones de Acción: Ver Detalles + Agregar al Carrito */}
        <div className="product-actions-grid-duo">
          <button 
            type="button"
            className="btn btn-view-modal"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            title="Ver ficha técnica completa y opciones"
          >
            <span>Ver detalles</span>
          </button>

          <button
            type="button"
            className={`btn btn-add-cart ${isInCart ? 'btn-added' : ''}`}
            onClick={handleAddToCartClick}
            title={isInCart ? 'Agregar otra unidad al carrito' : 'Agregar a mi carrito de compras'}
          >
            <Icon name={isInCart ? 'check' : 'shopping-cart'} size={16} />
            <span>{isInCart ? '+1' : 'Agregar'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
