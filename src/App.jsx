import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CatalogSection from './components/CatalogSection';
import OffersSection from './components/OffersSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import Icon from './components/Icon';

import { STORE_CONFIG } from './data/config';
import { PRODUCTS, GENERAL_FAQS } from './data/products';
import { buildWhatsAppUrl } from './utils/formatters';

import './App.css';

const CART_STORAGE_KEY = 'digitalsoft_cart_items_v1';

export default function App() {
  // Estado global de moneda: 'PEN' o 'USD'
  const [currency, setCurrency] = useState(STORE_CONFIG.defaultCurrency || 'PEN');

  // Estado de navegación activa y filtros
  const [activeView, setActiveView] = useState('inicio');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (newVal) => {
    setSearchTerm(newVal);
    if (newVal && newVal.trim().length > 0) {
      const catalogEl = document.getElementById('catalogo');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Modal de detalles (disponible para CADA producto)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Estado del Carrito de Compras con persistencia en LocalStorage
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error cargando carrito de localStorage:', e);
    }
    return [];
  });

  // Guardar en localStorage cada vez que cartItems cambia
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error guardando carrito en localStorage:', e);
    }
  }, [cartItems]);

  // Manejo de agregar al carrito
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemKey = product.selectedVersion 
        ? `${product.id}-${product.selectedVersion}` 
        : product.id;

      const existingIndex = prevItems.findIndex(
        (item) => (item.cartItemId || item.id) === itemKey
      );

      if (existingIndex > -1) {
        // Incrementar cantidad
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      } else {
        // Nuevo producto en carrito
        return [
          ...prevItems,
          {
            ...product,
            cartItemId: itemKey,
            quantity: 1
          }
        ];
      }
    });

    // Abrir automáticamente el carrito para dar confirmación visual al usuario
    setIsCartOpen(true);
  };

  // Actualizar cantidad en carrito
  const handleUpdateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(cartItemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        (item.cartItemId || item.id) === cartItemId
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Quitar un producto del carrito
  const handleRemoveFromCart = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => (item.cartItemId || item.id) !== cartItemId)
    );
  };

  // Vaciar carrito
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Conjunto de IDs de productos en el carrito para feedback visual en tarjetas
  const cartItemIds = useMemo(() => {
    return new Set(cartItems.map((item) => item.id));
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Manejo de navegación suave por secciones
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
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = `${STORE_CONFIG.storeName} | Software, Licencias Digitales y Herramientas`;
  }, []);

  const floatingWhatsAppUrl = buildWhatsAppUrl(null, currency, 'general');

  return (
    <div className="digitalsoft-app">
      {/* 1. Encabezado con Botón de Carrito con Contador */}
      <Header
        currency={currency}
        onCurrencyChange={setCurrency}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        activeView={activeView}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* 2. Portada Principal (Hero) */}
        <HeroSection
          onExplore={() => handleNavigate('catalogo')}
          onOffers={() => handleNavigate('ofertas')}
        />

        {/* 3. Sección de Ofertas y Promociones Reales */}
        <OffersSection
          products={PRODUCTS}
          currency={currency}
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* 4. Catálogo Completo con Buscador y Filtros */}
        <CatalogSection
          products={PRODUCTS}
          currency={currency}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onSelectProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* 5. Preguntas Frecuentes Desplegables */}
        <FaqSection faqs={GENERAL_FAQS} />
      </main>

      {/* 6. Pie de Página */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigate={handleNavigate}
      />

      {/* 7. Modal de Detalles Técnicos del Producto (Para CADA producto) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          currency={currency}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          isInCart={cartItemIds.has(selectedProduct.id)}
        />
      )}

      {/* 8. Panel Lateral / Drawer del Carrito de Compras */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* 9. Botón Flotante Permanente de Carrito si tiene ítems */}
      {totalCartCount > 0 && (
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="floating-cart-btn"
          title="Ver carrito de compras"
        >
          <Icon name="shopping-cart" size={24} />
          <span className="floating-cart-count">{totalCartCount}</span>
          <span className="floating-cart-text">Ver Pedido</span>
        </button>
      )}

      {/* 10. Botón Flotante Permanente de WhatsApp */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Consultar por WhatsApp con un asesor"
      >
        <Icon name="whatsapp" size={26} />
        <span>¿Ayuda con tu licencia?</span>
      </a>
    </div>
  );
}
