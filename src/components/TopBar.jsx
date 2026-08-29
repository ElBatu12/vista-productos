function TopBar() {
  return (
    <div className="topbar">
      <div className="search-box">
        <span className="material-icons-outlined">search</span>
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="topbar-icons">
        <span className="material-icons-outlined">notifications</span>
        <span className="material-icons-outlined">settings</span>
      </div>
    </div>
  );
}

export default TopBar;
