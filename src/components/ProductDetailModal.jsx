import React, { useState } from 'react';
import Icon from './Icon';
import { formatPrice, calculateDiscount, buildWhatsAppUrl } from '../utils/formatters';
import { STORE_CONFIG } from '../data/config';

export default function ProductDetailModal({ 
  product, 
  currency, 
  onClose,
  onAddToCart,
  isInCart
}) {
  if (!product) return null;

  // Comprobar si el producto es Windows 10/11 para mostrar el selector de versión
  const isWindows = (product.id || '').toLowerCase().includes('windows-10') ||
                    (product.id || '').toLowerCase().includes('windows-11') ||
                    (product.name || '').toLowerCase().includes('windows 10') ||
                    (product.name || '').toLowerCase().includes('windows 11');

  const isHome = (product.name || '').toLowerCase().includes('home');
  const [selectedVersion, setSelectedVersion] = useState('win11'); // 'win10' o 'win11'
  const [addedAnimation, setAddedAnimation] = useState(false);

  const currentPrice = currency === 'PEN' ? product.pricePEN : product.priceUSD;
  const oldPrice = currency === 'PEN' ? product.oldPricePEN : product.oldPriceUSD;
  const formattedPrice = formatPrice(currentPrice, currency);
  const formattedOldPrice = oldPrice ? formatPrice(oldPrice, currency) : null;
  const discountPercent = calculateDiscount(currentPrice, oldPrice);

  // Datos dinámicos si es Windows
  const versionName = isWindows 
    ? (selectedVersion === 'win10' 
        ? (isHome ? 'Windows 10 Home' : 'Windows 10 Pro') 
        : (isHome ? 'Windows 11 Home' : 'Windows 11 Pro'))
    : product.name;

  const activeImage = isWindows
    ? (selectedVersion === 'win10'
        ? './images/products/WINDOWS 10 pro.jpg'
        : (product.edition?.toLowerCase().includes('oem') 
            ? './images/products/windows 11 𝘖𝘌𝘔.jpg' 
            : './images/products/windows 11 𝘙𝘦𝘵𝘢𝘪𝘭.jpg'))
    : product.image;

  // Agregar al carrito desde el modal
  const handleAdd = () => {
    onAddToCart({
      ...product,
      image: activeImage,
      selectedVersion: isWindows ? versionName : null
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  // Enlace directo WhatsApp individual por si desea comprar solo este producto
  const directWhatsappUrl = buildWhatsAppUrl(
    {
      ...product,
      name: isWindows ? versionName : product.name
    },
    currency,
    'product'
  );

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Cabecera del Modal */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="badge badge-brand-glow">
              <Icon name="cpu" size={14} /> {product.brand || 'Software Oficial'}
            </span>
            <span className="modal-header-category">{product.edition || 'Licencia Digital'}</span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <Icon name="x" size={20} />
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="modal-body">
          <div className="modal-grid">
            {/* Columna Izquierda: Portada y Compras */}
            <div className="modal-left-col">
              <div className="modal-image-wrapper">
                <img 
                  src={activeImage} 
                  alt={versionName} 
                  className="modal-image" 
                />
                {discountPercent && (
                  <span className="modal-badge-discount">
                    -{discountPercent}% OFF
                  </span>
                )}
                {isWindows && (
                  <div className="modal-version-tag-overlay">
                    {versionName}
                  </div>
                )}
              </div>

              {/* Caja de Precios y Acciones */}
              <div className="modal-pricing-box">
                <div className="modal-price-header">
                  <span className="modal-price-label">
                    {currency === 'PEN' ? 'Precio oficial en Soles' : 'Precio internacional en Dólares'}
                  </span>
                  <div className="modal-price-row">
                    <span className="modal-main-price">{formattedPrice}</span>
                    {formattedOldPrice && (
                      <span className="modal-old-price">{formattedOldPrice}</span>
                    )}
                  </div>
                  <div className="modal-alt-price">
                    {currency === 'PEN' ? (
                      <small>Ref. aproximada: {formatPrice(product.priceUSD, 'USD')}</small>
                    ) : (
                      <small>Equivalente Perú: {formatPrice(product.pricePEN, 'PEN')}</small>
                    )}
                  </div>
                </div>

                {/* Botones del Modal: Agregar al Carrito + Comprar Directo */}
                <div className="modal-cta-buttons-stack">
                  <button
                    type="button"
                    className={`btn btn-modal-add-cart ${addedAnimation ? 'btn-pulse' : ''}`}
                    onClick={handleAdd}
                  >
                    <Icon name={addedAnimation ? 'check' : 'shopping-cart'} size={20} />
                    <span>{addedAnimation ? '¡Agregado al Carrito!' : (isInCart ? 'Agregar otra unidad' : 'Agregar al Carrito de Compras')}</span>
                  </button>

                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-secondary-modal"
                    title="Comprar únicamente este producto"
                  >
                    <Icon name="whatsapp" size={18} />
                    <span>Comprar solo este por WhatsApp</span>
                  </a>
                </div>

                <div className="modal-guarantee-note">
                  <Icon name="shield-check" size={16} color="#10b981" />
                  <span>Entrega digital y soporte de activación 100% garantizado.</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Opciones y Especificaciones */}
            <div className="modal-right-col">
              <div className="modal-product-header-block">
                <h1 className="modal-product-title">{versionName}</h1>
                {product.edition && (
                  <div className="modal-product-edition-pill">{product.edition}</div>
                )}
              </div>

              {/* Si es Windows 10/11, mostrar selector interactivo de versión */}
              {isWindows && (
                <div className="modal-version-selector-section">
                  <div className="version-selector-label">
                    <Icon name="sliders" size={16} />
                    <span>Selecciona tu versión para computadora:</span>
                  </div>
                  
                  <div className="version-tabs-grid">
                    <button
                      type="button"
                      className={`version-tab-btn ${selectedVersion === 'win11' ? 'active' : ''}`}
                      onClick={() => setSelectedVersion('win11')}
                    >
                      <div className="version-tab-header">
                        <Icon name="monitor" size={18} />
                        <strong>{isHome ? 'Windows 11 Home' : 'Windows 11 Pro'}</strong>
                      </div>
                      <p className="version-tab-desc">
                        Interfaz moderna, Windows Copilot, TPM 2.0 y máxima seguridad para equipos nuevos.
                      </p>
                      <span className="version-tab-badge">Recomendado</span>
                    </button>

                    <button
                      type="button"
                      className={`version-tab-btn ${selectedVersion === 'win10' ? 'active' : ''}`}
                      onClick={() => setSelectedVersion('win10')}
                    >
                      <div className="version-tab-header">
                        <Icon name="monitor" size={18} />
                        <strong>{isHome ? 'Windows 10 Home' : 'Windows 10 Pro'}</strong>
                      </div>
                      <p className="version-tab-desc">
                        Ligero y ultra compatible con procesadores y computadoras anteriores.
                      </p>
                      <span className="version-tab-badge badge-alt">Ultra Compatible</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Descripción */}
              <p className="modal-full-description">
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Ficha Técnica */}
              <div className="modal-section-card">
                <h3 className="modal-section-heading">
                  <Icon name="cpu" size={17} /> Especificaciones de la Licencia
                </h3>
                <div className="modal-specs-table">
                  <div className="table-spec-item">
                    <span className="spec-name">Tipo de licencia:</span>
                    <span className="spec-val">{product.licenseType || 'Licencia Digital Oficial'}</span>
                  </div>
                  <div className="table-spec-item">
                    <span className="spec-name">Duración:</span>
                    <span className="spec-val">{product.duration || 'Permanente (De por vida)'}</span>
                  </div>
                  <div className="table-spec-item">
                    <span className="spec-name">Dispositivos:</span>
                    <span className="spec-val">{product.devices || '1 PC'}</span>
                  </div>
                  <div className="table-spec-item">
                    <span className="spec-name">Compatibilidad:</span>
                    <span className="spec-val">{product.compatibility || 'Windows'}</span>
                  </div>
                  {product.activationMethod && (
                    <div className="table-spec-item">
                      <span className="spec-name">Método de activación:</span>
                      <span className="spec-val">{product.activationMethod}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Beneficios */}
              {product.features && product.features.length > 0 && (
                <div className="modal-section-card">
                  <h3 className="modal-section-heading">
                    <Icon name="sparkles" size={17} /> Características principales
                  </h3>
                  <ul className="modal-features-list">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="feature-item">
                        <Icon name="check" size={15} color="#10b981" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
