import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import { STORE_CONFIG } from '../data/config';
import { buildWhatsAppUrl } from '../utils/formatters';

export default function Header({ 
  currency, 
  onCurrencyChange, 
  searchTerm, 
  onSearchChange, 
  activeView, 
  onNavigate,
  cartCount = 0,
  onOpenCart
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const generalWhatsAppUrl = buildWhatsAppUrl(null, currency, 'general');

  // Enfocar el input cuando se abre el buscador
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Si hacen clic fuera y el input está vacío, cerrar el buscador
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current && 
        !searchContainerRef.current.contains(event.target) &&
        !searchTerm
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen, searchTerm]);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo de Software' },
    { id: 'ofertas', label: 'Ofertas del Mes' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    if (isSearchOpen && !searchTerm) {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
      // Si estamos en otra vista que no sea catálogo o inicio, ir a catálogo para ver resultados
      if (activeView !== 'catalogo' && activeView !== 'inicio') {
        onNavigate('catalogo');
      }
    }
  };

  return (
    <header className="site-header">
      {/* Top Bar informativa */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-info">
            <span className="info-item">
              <Icon name="shield-check" size={15} color="#10b981" /> Licencias 100% verificadas y garantizadas
            </span>
            <span className="info-separator">•</span>
            <span className="info-item">
              <Icon name="clock" size={15} /> Entrega digital inmediata por WhatsApp / Correo
            </span>
          </div>

          <div className="top-bar-actions">
            {/* Indicador de Moneda oficial PEN (S/) */}
            <div className="currency-selector" title="Moneda oficial del catálogo: Soles Peruanos">
              <span className="currency-label">Moneda:</span>
              <button 
                className="currency-btn active"
                onClick={() => onCurrencyChange && onCurrencyChange('PEN')}
                type="button"
                aria-label="Moneda Soles Peruanos"
              >
                PEN (S/)
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

          {/* Botones de Cabecera: Buscador Popup/Expandible + Carrito + WhatsApp */}
          <div className="header-cta-group">
            {/* Buscador Desplegable con Lupa */}
            <div className={`header-search-collapsible ${isSearchOpen ? 'open' : ''}`} ref={searchContainerRef}>
              <button
                type="button"
                className={`btn-search-toggle ${isSearchOpen ? 'active' : ''}`}
                onClick={toggleSearch}
                title={isSearchOpen ? 'Cerrar buscador' : 'Buscar software'}
                aria-label="Buscar software"
              >
                <Icon name={isSearchOpen && !searchTerm ? 'x' : 'search'} size={19} />
                <span className="search-btn-label">Buscar</span>
              </button>

              <div className="search-expandable-box">
                <Icon name="search" size={17} className="expandable-search-icon" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Buscar Windows, Office, antivirus, diseño..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button 
                    type="button"
                    className="search-clear-btn"
                    onClick={() => {
                      onSearchChange('');
                      searchInputRef.current?.focus();
                    }}
                    title="Limpiar búsqueda"
                  >
                    <Icon name="x" size={14} />
                  </button>
                )}
              </div>
            </div>
            {/* BOTÓN DEL CARRITO DE COMPRAS */}
            <button 
              type="button"
              className="btn btn-header-cart"
              onClick={onOpenCart}
              title="Ver mi carrito de compras"
              aria-label="Carrito de compras"
            >
              <Icon name="shopping-cart" size={20} />
              <span className="header-cart-label">Carrito</span>
              {cartCount > 0 && (
                <span className="header-cart-badge">{cartCount}</span>
              )}
            </button>

            <a 
              href={generalWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-sm header-whatsapp-btn"
              title="Iniciar consulta en WhatsApp"
            >
              <Icon name="whatsapp" size={18} />
              <span>WhatsApp</span>
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

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-link ${activeView === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="mobile-nav-link mobile-cart-link"
            >
              <Icon name="shopping-cart" size={18} />
              <span>Ver Carrito ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
