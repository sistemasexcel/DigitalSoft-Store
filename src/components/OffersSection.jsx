import React from 'react';
import Icon from './Icon';
import ProductCard from './ProductCard';
import { STORE_CONFIG } from '../data/config';

export default function OffersSection({ 
  products, 
  currency, 
  onSelectProduct 
}) {
  // Filtrar únicamente productos que tengan oferta real configurada
  const offerProducts = products.filter(
    (p) => p.promotion && (p.oldPricePEN || p.oldPriceUSD)
  );

  if (offerProducts.length === 0) return null;

  return (
    <section id="ofertas" className="offers-section">
      <div className="container">
        <div className="offers-banner-header">
          <div className="offers-badge">
            <Icon name="tag" size={16} />
            <span>Promociones del Mes</span>
          </div>
          <h2 className="section-title">Oportunidades y Precios Especiales</h2>
          <p className="section-subtitle">
            Licencias originales seleccionadas con descuento transparente sobre su precio habitual.
          </p>
        </div>

        <div className="offers-grid">
          {offerProducts.map((product) => (
            <div key={product.id} className="offer-item-wrap">
              <div className="offer-terms-strip">
                <Icon name="clock" size={14} />
                <span>{product.promotion.title}: {product.promotion.terms}</span>
                {product.promotion.endDate && (
                  <strong className="offer-date">({product.promotion.endDate})</strong>
                )}
              </div>
              <ProductCard
                product={product}
                currency={currency}
                onSelectProduct={onSelectProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
