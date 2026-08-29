import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import FilterSidebar from "./components/FilterSidebar";
import ProductList from "./components/ProductList";
import FeatureHighlight from "./components/FeatureHighlight";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <TopBar />

        <header className="products-header">
          <div>
            <h1>Nuestros Productos</h1>
            <p>Soluciones diseñadas para impulsar el crecimiento de su empresa.</p>
          </div>
          <button className="new-product-btn">
            <span className="material-icons-outlined">add</span> Nuevo Producto
          </button>
        </header>

        <div className="products-body">
          <FilterSidebar />
          <ProductList />
        </div>

        <FeatureHighlight />
      </main>
    </div>
  );
}

export default App;
