import React from 'react';
import Icon from './Icon';

export default function CategoryGrid({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) {
  return (
    <section id="categorias" className="categories-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-pill">
            <Icon name="briefcase" size={14} /> Explorar Catálogo
          </span>
          <h2 className="section-title">Categorías de Software y Licencias</h2>
          <p className="section-subtitle">
            Encuentra la solución informática exacta para tu computador, hogar o entorno empresarial.
          </p>
        </div>

        <div className="categories-grid">
          {/* Opción para Ver Todas */}
          <button
            type="button"
            className={`category-card ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => onSelectCategory('all')}
          >
            <div className="category-icon-box">
              <Icon name="sparkles" size={26} />
            </div>
            <div className="category-info">
              <h3 className="category-name">Todas las categorías</h3>
              <p className="category-desc">Ver todo el catálogo completo disponible</p>
            </div>
            <div className="category-arrow">
              <Icon name="arrow-right" size={16} />
            </div>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-card ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="category-icon-box">
                <Icon name={cat.icon} size={26} />
              </div>
              <div className="category-info">
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
              </div>
              <div className="category-arrow">
                <Icon name="arrow-right" size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
