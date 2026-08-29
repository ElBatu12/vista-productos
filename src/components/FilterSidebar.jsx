function FilterSidebar() {
  const categories = [
    "Software CRM",
    "Infraestructura Cloud",
    "Análisis de Datos",
    "Seguridad IT",
  ];

  return (
    <aside className="filter-sidebar">
      <div className="filter-block">
        <h4>Categorías</h4>
        <ul className="category-list">
          {categories.map((cat, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`cat-${index}`}
                defaultChecked={index === 0}
              />
              <label htmlFor={`cat-${index}`}>{cat}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-block">
        <h4>Rango de Precio</h4>
        <div className="price-range">
          <input type="range" min="0" max="10000" defaultValue={4000} />
          <div className="price-range-labels">
            <span>$0</span>
            <span>$10k+</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
