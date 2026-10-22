import React from 'react';
import Icon from './Icon';
import { STORE_CONFIG, CATEGORIES } from '../data/config';
import { buildWhatsAppUrl } from '../utils/formatters';

export default function Footer({ onSelectCategory, onNavigate }) {
  const generalWhatsAppUrl = buildWhatsAppUrl(null, 'PEN', 'general');

  return (
    <footer id="contacto" className="site-footer">
      <div className="container">
        {/* Bloque superior del footer */}
        <div className="footer-top-grid">
          {/* Columna 1: Marca y descripción */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="logo-badge">
                <Icon name="cpu" size={22} color="#ffffff" />
              </div>
              <span className="footer-brand-title">{STORE_CONFIG.storeName}</span>
            </div>
            <p className="footer-description">
              {STORE_CONFIG.shortDescription}
            </p>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <Icon name="whatsapp" size={16} color="#25d366" />
                <span>Atención directa: <strong>{STORE_CONFIG.whatsappDisplay}</strong></span>
              </div>
              <div className="footer-contact-row">
                <Icon name="clock" size={16} />
                <span>{STORE_CONFIG.schedule}</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Categorías de productos */}
          <div className="footer-col">
            <h4 className="footer-col-title">Categorías</h4>
            <ul className="footer-links-list">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button 
                    type="button" 
                    className="footer-link-btn"
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onNavigate('catalogo');
                    }}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Navegación e información */}
          <div className="footer-col">
            <h4 className="footer-col-title">Información</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onNavigate('inicio')}>
                  Inicio
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onNavigate('catalogo')}>
                  Catálogo Completo
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onNavigate('ofertas')}>
                  Promociones del Mes
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onNavigate('faqs')}>
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="footer-link-btn">
                  Atención por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Garantías y Transparencia */}
          <div className="footer-col">
            <h4 className="footer-col-title">Garantía y Entrega</h4>
            <div className="footer-guarantee-card">
              <div className="guarantee-mini-item">
                <Icon name="shield-check" size={18} color="#10b981" />
                <span><strong>Licencias Legítimas:</strong> Activación en servidores oficiales del fabricante.</span>
              </div>
              <div className="guarantee-mini-item">
                <Icon name="clock" size={18} color="#2563eb" />
                <span><strong>Entrega Rápida:</strong> Canje digital sin costos ni demoras físicas.</span>
              </div>
              <div className="guarantee-mini-item">
                <Icon name="lock" size={18} color="#7c3aed" />
                <span><strong>Soporte Técnico:</strong> Acompañamiento en la activación de cada producto.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="footer-divider"></div>

        {/* Aviso Legal de Marcas y Responsabilidad */}
        <div className="footer-legal-notice">
          <p>{STORE_CONFIG.legalNotice}</p>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.storeName}. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <span className="legal-tag">Términos del Servicio</span>
            <span className="legal-tag">Política de Privacidad</span>
            <span className="legal-tag">Políticas de Garantía</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
