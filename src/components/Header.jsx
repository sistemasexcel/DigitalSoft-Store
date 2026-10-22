import React, { useState } from 'react';
import Icon from './Icon';
import { STORE_CONFIG } from '../data/config';
import { buildWhatsAppUrl } from '../utils/formatters';

export default function Header({ 
  currency, 
  onCurrencyChange, 
  searchTerm, 
  onSearchChange,
  activeView,
  onNavigate
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const generalWhatsAppUrl = buildWhatsAppUrl(null, currency, 'general');

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'categorias', label: 'Categorías' },
    { id: 'ofertas', label: 'Ofertas' },
    { id: 'faqs', label: 'Preguntas Frecuentes' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top Bar informativa */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-info">
            <span className="info-item">
              <Icon name="shield-check" size={15} color="#10b981" /> Licencias 100% legítimas y garantizadas
            </span>
            <span className="info-separator">•</span>
            <span className="info-item">
              <Icon name="clock" size={15} /> Entrega digital inmediata por WhatsApp / Correo
            </span>
          </div>

          <div className="top-bar-actions">
            {/* Selector de Moneda PEN / USD */}
            <div className="currency-selector" title="Seleccionar moneda del catálogo">
              <span className="currency-label">Moneda:</span>
              <button 
                className={`currency-btn ${currency === 'PEN' ? 'active' : ''}`}
                onClick={() => onCurrencyChange('PEN')}
                type="button"
                aria-label="Moneda Soles Peruanos"
              >
                PEN (S/)
              </button>
              <button 
                className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => onCurrencyChange('USD')}
                type="button"
                aria-label="Moneda Dólares Estadounidenses"
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="container navbar-container">
          {/* Logo e Identidad */}
          <div className="brand-logo" onClick={() => handleNavClick('inicio')} role="button" tabIndex={0}>
            <div className="logo-badge">
              <Icon name="cpu" size={24} color="#ffffff" />
            </div>
            <div className="brand-text">
              <span className="brand-name">{STORE_CONFIG.storeName}</span>
              <span className="brand-sub">Software & Licencias Digitales</span>
            </div>
          </div>

          {/* Buscador de productos */}
          <div className="header-search">
            <div className="search-input-wrapper">
              <Icon name="search" size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar software, Windows, Office, antivirus..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="search-clear-btn"
                  onClick={() => onSearchChange('')}
                  title="Limpiar búsqueda"
                >
                  <Icon name="x" size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Menú de Navegación de Escritorio */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${activeView === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botón WhatsApp de Acción Rápida */}
          <div className="header-cta-group">
            <a 
              href={generalWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-sm header-whatsapp-btn"
              title="Iniciar consulta en WhatsApp"
            >
              <Icon name="whatsapp" size={18} />
              <span>Consultar por WhatsApp</span>
            </a>

            {/* Hamburguesa móvil */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-content">
            <div className="mobile-search-box">
              <Icon name="search" size={18} />
              <input
                type="text"
                placeholder="Buscar licencias..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>

            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-item ${activeView === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-currency-row">
                <span>Moneda:</span>
                <div className="currency-selector">
                  <button 
                    className={`currency-btn ${currency === 'PEN' ? 'active' : ''}`}
                    onClick={() => onCurrencyChange('PEN')}
                  >
                    PEN (S/)
                  </button>
                  <button 
                    className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                    onClick={() => onCurrencyChange('USD')}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              <a 
                href={generalWhatsAppUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-block"
              >
                <Icon name="whatsapp" size={20} />
                <span>Atención en WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
