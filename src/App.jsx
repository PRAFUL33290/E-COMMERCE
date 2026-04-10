import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import Contact from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback routes */}
        <Route path="/about" element={<div className="min-h-[50vh] flex items-center justify-center pt-24"><h1 className="text-3xl font-serif">À propos (Work in Progress)</h1></div>} />
      </Routes>
    </Layout>
  );
}

export default App;
