import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import CatalogSection from './components/CatalogSection';
import OffersSection from './components/OffersSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import Icon from './components/Icon';

import { STORE_CONFIG, CATEGORIES } from './data/config';
import { PRODUCTS, GENERAL_FAQS } from './data/products';
import { buildWhatsAppUrl } from './utils/formatters';

import './App.css';

export default function App() {
  // Estado global de moneda: 'PEN' o 'USD' (configurable por defecto en config.js)
  const [currency, setCurrency] = useState(STORE_CONFIG.defaultCurrency || 'PEN');

  // Estado de navegación activa y filtros
  const [activeView, setActiveView] = useState('inicio');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Modal de detalles de producto
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Manejo de navegación por secciones
  const handleNavigate = (sectionId) => {
    setActiveView(sectionId);

    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Manejo de clic en categoría
  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    // Desplazar automáticamente al catálogo
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Actualizar el título de la pestaña según el nombre de la tienda
  useEffect(() => {
    document.title = `${STORE_CONFIG.storeName} | Software, Licencias Digitales y Herramientas`;
  }, []);

  const floatingWhatsAppUrl = buildWhatsAppUrl(null, currency, 'general');

  return (
    <div className="digitalsoft-app">
      {/* 1. Encabezado y Navegación */}
      <Header
        currency={currency}
        onCurrencyChange={setCurrency}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      <main>
        {/* 2. Portada Principal (Hero) */}
        <HeroSection
          onExplore={() => handleNavigate('catalogo')}
          onOffers={() => handleNavigate('ofertas')}
        />

        {/* 3. Categorías del Catálogo */}
        <CategoryGrid
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. Sección de Ofertas y Promociones Reales */}
        <OffersSection
          products={PRODUCTS}
          currency={currency}
          onSelectProduct={setSelectedProduct}
        />

        {/* 5. Catálogo Completo con Buscador y Filtros */}
        <CatalogSection
          products={PRODUCTS}
          currency={currency}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelectProduct={setSelectedProduct}
        />

        {/* 6. Preguntas Frecuentes Desplegables */}
        <FaqSection faqs={GENERAL_FAQS} />
      </main>

      {/* 7. Pie de Página */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigate={handleNavigate}
      />

      {/* 8. Modal de Detalles Técnicos del Producto */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          currency={currency}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* 9. Botón Flotante Permanente de WhatsApp */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Consultar por WhatsApp con un asesor"
      >
        <Icon name="whatsapp" size={26} />
        <span>¿Necesitas ayuda con tu licencia?</span>
      </a>
    </div>
  );
}
