import React from 'react';
import Icon from './Icon';
import { STORE_CONFIG, CATEGORIES } from '../data/config';
import { buildWhatsAppUrl } from '../utils/formatters';

export default function Footer({ onSelectCategory, onNavigate }) {
  const generalWhatsAppUrl = buildWhatsAppUrl(null, 'PEN', 'general');

  return (
    <footer id="contacto" className="site-footer">
      <div className="container">
        {/* Banner de soporte directo / contacto rápido */}
        <div className="footer-support-banner">
          <div className="support-banner-content">
            <div className="support-banner-icon">
              <Icon name="whatsapp" size={32} color="#ffffff" />
            </div>
            <div className="support-banner-text">
              <h3 className="support-banner-title">¿Tienes dudas o buscas una licencia especial?</h3>
              <p className="support-banner-sub">
                Atendemos al instante por WhatsApp para resolver tus preguntas, asesorarte y asistirte en la activación.
              </p>
            </div>
          </div>
          <a 
            href={generalWhatsAppUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-footer-support-wa"
          >
            <Icon name="whatsapp" size={20} />
            <span>Chatear con un asesor</span>
          </a>
        </div>

        {/* Bloque principal del footer */}
        <div className="footer-main-grid">
          {/* Columna 1: Marca y descripción */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <div className="brand-logo-pill">
                <Icon name="cpu" size={22} color="#ffffff" />
              </div>
              <span className="footer-brand-title">{STORE_CONFIG.storeName}</span>
            </div>
            <p className="footer-description">
              Tu tienda online de confianza especializada en licencias oficiales, sistemas operativos, suites de oficina y antivirus permanentes con entrega digital garantizada.
            </p>
            
            <div className="footer-badges-strip">
              <span className="footer-mini-badge">
                <Icon name="shield-check" size={14} color="#10b981" /> Garantía oficial
              </span>
              <span className="footer-mini-badge">
                <Icon name="zap" size={14} color="#38bdf8" /> Entrega inmediata
              </span>
            </div>
          </div>

          {/* Columna 2: Categorías de productos */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <Icon name="grid" size={16} /> Software Destacado
            </h4>
            <ul className="footer-links-list">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button 
                    type="button" 
                    className="footer-link-btn"
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onNavigate('catalogo');
                    }}
                  >
                    <Icon name="chevron-right" size={13} className="link-arrow" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enlaces de navegación */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <Icon name="compass" size={16} /> Navegación
            </h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onNavigate('inicio')}>
                  <Icon name="chevron-right" size={13} className="link-arrow" />
                  <span>Página de Inicio</span>
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onNavigate('catalogo')}>
                  <Icon name="chevron-right" size={13} className="link-arrow" />
                  <span>Catálogo de Programas</span>
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onNavigate('ofertas')}>
                  <Icon name="chevron-right" size={13} className="link-arrow" />
                  <span>Promociones del Mes</span>
                </button>
              </li>
              <li>
                <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="footer-link-btn">
                  <Icon name="chevron-right" size={13} className="link-arrow" />
                  <span>Contacto Directo</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Medios de atención */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">
              <Icon name="message-square" size={16} /> Contacto y Atención
            </h4>
            
            <div className="footer-contact-card">
              <div className="contact-card-item">
                <div className="contact-icon-wrap wa-color">
                  <Icon name="whatsapp" size={18} />
                </div>
                <div>
                  <span className="contact-item-label">WhatsApp Directo</span>
                  <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="contact-item-value highlight">
                    {STORE_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-wrap">
                  <Icon name="clock" size={18} />
                </div>
                <div>
                  <span className="contact-item-label">Horario de Soporte</span>
                  <span className="contact-item-value">{STORE_CONFIG.schedule}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador con degradado */}
        <div className="footer-gradient-divider"></div>

        {/* Aviso Legal de Marcas */}
        <div className="footer-legal-box">
          <Icon name="info" size={16} className="legal-icon" />
          <p>{STORE_CONFIG.legalNotice}</p>
        </div>

        {/* Barra inferior de créditos */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>{STORE_CONFIG.storeName}</strong>. Licencias Digitales Oficiales y Seguras.
          </p>
          <div className="footer-bottom-badges">
            <span className="bottom-pill">Pago 100% Seguro</span>
            <span className="bottom-pill">Soporte Remoto Garantizado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
