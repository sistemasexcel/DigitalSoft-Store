import React, { useMemo, useState } from 'react';
import Icon from './Icon';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/config';

export default function CatalogSection({ 
  products, 
  currency, 
  selectedCategory, 
  onSelectCategory,
  searchTerm,
  onSearchChange,
  onSelectProduct 
}) {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortOption, setSortOption] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'name'
  const [onlyPromos, setOnlyPromos] = useState(false);

  // Obtener lista única de fabricantes para el filtro
  const brandsList = useMemo(() => {
    const brands = new Set();
    products.forEach((p) => {
      if (p.brand) brands.add(p.brand);
    });
    return Array.from(brands).sort();
  }, [products]);

  // Filtrado y ordenamiento en tiempo real
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filtro por término de búsqueda (nombre, edición, descripción o marca)
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchBrand = product.brand.toLowerCase().includes(query);
        const matchEdition = product.edition?.toLowerCase().includes(query);
        const matchDesc = product.shortDescription?.toLowerCase().includes(query);
        if (!matchName && !matchBrand && !matchEdition && !matchDesc) {
          return false;
        }
      }

      // Filtro por categoría
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Filtro por fabricante
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }

      // Filtro por promociones
      if (onlyPromos && !product.promotion) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      const priceA = currency === 'PEN' ? a.pricePEN : a.priceUSD;
      const priceB = currency === 'PEN' ? b.pricePEN : b.priceUSD;

      if (sortOption === 'price-asc') {
        // Enviar nulos al final
        if (priceA === null) return 1;
        if (priceB === null) return -1;
        return priceA - priceB;
      }

      if (sortOption === 'price-desc') {
        if (priceA === null) return 1;
        if (priceB === null) return -1;
        return priceB - priceA;
      }

      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      }

      // 'featured': Promociones primero y orden natural
      if (a.promotion && !b.promotion) return -1;
      if (!a.promotion && b.promotion) return 1;
      return 0;
    });
  }, [products, searchTerm, selectedCategory, selectedBrand, onlyPromos, sortOption, currency]);

  // Nombre de la categoría activa
  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <section id="catalogo" className="catalog-section">
      <div className="container">
        {/* Encabezado del catálogo */}
        <div className="catalog-header-row">
          <div>
            <h2 className="catalog-title">
              {selectedCategory === 'all' 
                ? 'Catálogo Completo de Software' 
                : activeCategoryObj?.name || 'Productos Filtrados'}
            </h2>
            <p className="catalog-count-text">
              Mostrando <strong>{filteredProducts.length}</strong> de {products.length} licencias digitales
            </p>
          </div>

          {/* Selector de ordenamiento */}
          <div className="catalog-sort-box">
            <label htmlFor="sort-select" className="sort-label">Ordenar por:</label>
            <select
              id="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="sort-dropdown"
            >
              <option value="featured">Destacados / Recomendados</option>
              <option value="price-asc">Precio: de menor a mayor</option>
              <option value="price-desc">Precio: de mayor a menor</option>
              <option value="name">Alfabético: A - Z</option>
            </select>
          </div>
        </div>

        {/* Barra de Filtros */}
        <div className="catalog-filters-bar">
          {/* Filtro por Categoría en pestañas rápidas */}
          <div className="category-chips-scroll">
            <button
              type="button"
              className={`chip-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => onSelectCategory('all')}
            >
              Todas
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`chip-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.shortName || cat.name}
              </button>
            ))}
          </div>

          <div className="filter-controls-row">
            {/* Filtro por Fabricante */}
            <div className="filter-select-wrapper">
              <span className="filter-mini-label">Fabricante:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="filter-select"
              >
                <option value="all">Todos los fabricantes</option>
                {brandsList.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Checkbox solo ofertas */}
            <label className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={onlyPromos}
                onChange={(e) => setOnlyPromos(e.target.checked)}
              />
              <span>Sólo promociones activas</span>
            </label>

            {/* Botón reset si hay filtros activos */}
            {(selectedCategory !== 'all' || selectedBrand !== 'all' || onlyPromos || searchTerm !== '') && (
              <button
                type="button"
                className="btn-reset-filters"
                onClick={() => {
                  onSelectCategory('all');
                  setSelectedBrand('all');
                  setOnlyPromos(false);
                  onSearchChange('');
                }}
              >
                <Icon name="x" size={14} />
                <span>Limpiar filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Cuadrícula de Productos */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          /* Estado sin resultados */
          <div className="no-results-box">
            <div className="no-results-icon">
              <Icon name="search" size={42} color="#94a3b8" />
            </div>
            <h3 className="no-results-title">No encontramos software con esos criterios</h3>
            <p className="no-results-desc">
              Prueba buscando con otro término, limpiando los filtros o consultando directamente por el producto que necesitas.
            </p>
            <div className="no-results-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  onSelectCategory('all');
                  setSelectedBrand('all');
                  setOnlyPromos(false);
                  onSearchChange('');
                }}
              >
                Ver todo el catálogo
              </button>
              <a
                href={`https://api.whatsapp.com/send?phone=51987654321&text=Hola,%20busco%20un%20software%20que%20no%20encuentro%20en%20el%20catálogo:%20${encodeURIComponent(searchTerm)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <Icon name="whatsapp" size={18} />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
