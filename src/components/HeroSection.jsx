import React from 'react';
import Icon from './Icon';

export default function HeroSection({ onExplore, onOffers }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-shapes">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
      </div>

      <div className="container hero-container hero-container-single">
        <div className="hero-content hero-content-centered">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Catálogo Oficial de Software Digital & Licencias Originales</span>
          </div>

          <h1 className="hero-title">
            Todo el software que necesitas, <span className="hero-highlight">en un solo lugar</span>
          </h1>

          <p className="hero-description">
            Encuentra suites ofimáticas, sistemas operativos, antivirus y herramientas de diseño con entrega digital inmediata y soporte de activación 100% garantizado.
          </p>

          <div className="hero-buttons">
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={onExplore}
            >
              <Icon name="search" size={18} />
              <span>Explorar catálogo completo</span>
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-lg"
              onClick={onOffers}
            >
              <Icon name="tag" size={18} />
              <span>Ver promociones del mes</span>
            </button>
          </div>

          {/* Medidores de confianza */}
          <div className="hero-trust-row hero-trust-centered">
            <div className="trust-item">
              <Icon name="shield-check" size={18} color="#10b981" />
              <span>Licencias 100% legítimas</span>
            </div>
            <div className="trust-item">
              <Icon name="clock" size={18} color="#38bdf8" />
              <span>Entrega inmediata por WhatsApp / Correo</span>
            </div>
            <div className="trust-item">
              <Icon name="lock" size={18} color="#8b5cf6" />
              <span>Soporte de activación asistida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
