import React from 'react';
import Icon from './Icon';

export default function HeroSection({ onExplore, onOffers }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-shapes">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Catálogo Oficial de Software & Soluciones Digitales</span>
          </div>

          <h1 className="hero-title">
            Todo el software que necesitas, <span className="hero-highlight">en un solo lugar</span>
          </h1>

          <p className="hero-description">
            Descubre software, herramientas digitales y licencias para mejorar tu productividad, proteger tus dispositivos y aprovechar al máximo tu computadora.
          </p>

          <div className="hero-buttons">
            <button 
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onExplore}
            >
              <Icon name="search" size={18} />
              <span>Explorar catálogo</span>
            </button>
            <button 
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={onOffers}
            >
              <Icon name="tag" size={18} />
              <span>Ver ofertas</span>
            </button>
          </div>

          {/* Medidores de confianza */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <Icon name="shield-check" size={18} color="#10b981" />
              <span>Licencias 100% verificadas</span>
            </div>
            <div className="trust-item">
              <Icon name="clock" size={18} color="#2563eb" />
              <span>Activación asistida</span>
            </div>
            <div className="trust-item">
              <Icon name="lock" size={18} color="#7c3aed" />
              <span>Garantía de activación</span>
            </div>
          </div>
        </div>

        {/* Composición Visual Tecnológica */}
        <div className="hero-visual">
          <div className="hero-card-stack">
            {/* Card 1: Ofimática */}
            <div className="floating-preview-card card-office">
              <div className="card-top-icon">
                <Icon name="briefcase" size={22} color="#2563eb" />
              </div>
              <div className="card-text">
                <span className="card-badge">Productividad</span>
                <h4>Suites de Oficina</h4>
                <p>Word, Excel, PowerPoint y nube</p>
              </div>
              <span className="status-indicator">Activación inmediata</span>
            </div>

            {/* Card 2: Sistemas Operativos */}
            <div className="floating-preview-card card-os">
              <div className="card-top-icon">
                <Icon name="cpu" size={22} color="#06b6d4" />
              </div>
              <div className="card-text">
                <span className="card-badge">Sistemas</span>
                <h4>Windows 11 Pro</h4>
                <p>Seguridad BitLocker & TPM 2.0</p>
              </div>
              <span className="status-indicator">ESD Original</span>
            </div>

            {/* Card 3: Ciberseguridad */}
            <div className="floating-preview-card card-security">
              <div className="card-top-icon">
                <Icon name="shield-check" size={22} color="#10b981" />
              </div>
              <div className="card-text">
                <span className="card-badge">Ciberseguridad</span>
                <h4>Antivirus & Escudo Web</h4>
                <p>Protección contra ransomware</p>
              </div>
              <span className="status-indicator">En tiempo real</span>
            </div>

            {/* Elemento central de software */}
            <div className="hero-digital-hub">
              <div className="hub-inner-core">
                <Icon name="lock" size={32} color="#2563eb" />
                <span>ESD / Digital Keys</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
