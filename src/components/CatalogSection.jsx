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
  onSelectProduct,
  onAddToCart,
  cartItemIds = new Set()
}) {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
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
      // Filtro por término de búsqueda (nombre, edición, descripción, tags o marca)
      if (searchTerm && searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase().trim();
        const matchName = (product.name || '').toLowerCase().includes(query);
        const matchBrand = (product.brand || '').toLowerCase().includes(query);
        const matchEdition = (product.edition || '').toLowerCase().includes(query);
        const matchDesc = (product.shortDescription || '').toLowerCase().includes(query);
        const matchCategory = (product.category || '').toLowerCase().includes(query);
        const matchFeatures = (product.features || []).some(f => f.toLowerCase().includes(query));

        if (!matchName && !matchBrand && !matchEdition && !matchDesc && !matchCategory && !matchFeatures) {
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
        return (a.name || '').localeCompare(b.name || '');
      }

      // 'featured': Promociones primero
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
              Mostrando <strong>{filteredProducts.length}</strong> de {products.length} licencias disponibles
              {searchTerm && <span> para "{searchTerm}"</span>}
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

        {/* Barra de Filtros y Buscador Integrado */}
        <div className="catalog-filters-bar">
          {/* Buscador dentro del catálogo */}
          <div className="catalog-inline-search-wrap">
            <Icon name="search" size={18} className="inline-search-icon" />
            <input
              type="text"
              placeholder="Buscar en el catálogo (ej: Windows, Office 2024, ESET, Canva, AutoCAD)..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="catalog-inline-search-input"
            />
            {searchTerm && (
              <button 
                type="button" 
                className="catalog-search-clear"
                onClick={() => onSearchChange('')}
                title="Borrar búsqueda"
              >
                <Icon name="x" size={16} />
              </button>
            )}
          </div>

          {/* Filtro por Categoría en pestañas rápidas */}
          <div className="category-chips-scroll">
            <button
              type="button"
              className={`chip-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => onSelectCategory('all')}
            >
              Todas las licencias ({products.length})
            </button>
            {CATEGORIES.map((cat) => {
              const catCount = products.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`chip-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  {cat.name} ({catCount})
                </button>
              );
            })}
          </div>

          {/* Filtros secundarios: Fabricante y Promos */}
          <div className="catalog-secondary-filters">
            <div className="filter-select-wrapper">
              <span className="filter-mini-label">Marca / Desarrollador:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="filter-select"
              >
                <option value="all">Todas las marcas</option>
                {brandsList.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <label className="filter-checkbox-label">
              <input
                type="checkbox"
                checked={onlyPromos}
                onChange={(e) => setOnlyPromos(e.target.checked)}
              />
              <span>Sólo ofertas y promociones</span>
            </label>

            {(selectedCategory !== 'all' || selectedBrand !== 'all' || onlyPromos || (searchTerm && searchTerm.trim() !== '')) && (
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
                <span>Restablecer filtros</span>
              </button>
            )}
          </div>
        </div>

        {/* Cuadrícula Homogénea de Productos (Exactamente idéntica a las ofertas de arriba) */}
        {filteredProducts.length > 0 ? (
          <div className="catalog-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="offer-item-wrap">
                {product.promotion ? (
                  <div className="offer-terms-strip">
                    <Icon name="tag" size={14} />
                    <span>{product.promotion.badge || product.promotion.title}: {product.promotion.terms}</span>
                  </div>
                ) : (
                  <div className="standard-item-strip">
                    <Icon name="shield-check" size={14} color="#10b981" />
                    <span>Licencia Original Verificada</span>
                  </div>
                )}
                <ProductCard
                  product={product}
                  currency={currency}
                  onSelectProduct={onSelectProduct}
                  onAddToCart={onAddToCart}
                  isInCart={cartItemIds.has(product.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Estado sin resultados */
          <div className="empty-catalog-state">
            <div className="empty-state-icon">
              <Icon name="search" size={36} />
            </div>
            <h3 className="empty-state-title">No se encontraron productos</h3>
            <p className="empty-state-text">
              No hay licencias que coincidan con <strong>"{searchTerm}"</strong>. Intenta con otro término o limpia los filtros para ver todo.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                onSelectCategory('all');
                setSelectedBrand('all');
                setOnlyPromos(false);
                onSearchChange('');
              }}
            >
              Restablecer catálogo
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
