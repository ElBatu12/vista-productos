function Sidebar() {
  const navItems = [
    { icon: "home", label: "Inicio", active: true },
    { icon: "shopping_bag", label: "Productos", active: false },
    { icon: "design_services", label: "Servicios", active: false },
    { icon: "info", label: "Información", active: false },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon-box">
          <span className="material-icons-outlined">trending_up</span>
        </span>
        <span>CorpPortal</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`sidebar-nav-item ${item.active ? "active" : ""}`}
          >
            <span className="material-icons-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-user">
        <span className="material-icons-outlined">account_circle</span>
        <div>
          <p className="user-name">Admin User</p>
          <p className="user-plan">Standard Plan</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
