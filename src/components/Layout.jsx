import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

export default function Layout({ children }) {
  // For the sake of the demo, we'll keep it closed by default.
  // In a real app, this state would likely be in a context or global store.
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      {/*
        This div wraps the main content and grows to push the footer down.
        Also, we add an overlay for the cart if needed, but the cart itself handles positioning.
      */}
      <div className="flex-grow flex flex-col w-full">
        {children}
      </div>

      <Footer />

      {/* Background overlay for CartDrawer, optional but good for UX */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[55] backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
