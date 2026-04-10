import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function Navbar({ onCartClick }) {
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md shadow-[0_12px_32px_-4px_rgba(88,66,55,0.06)]">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-serif tracking-tighter text-stone-900 dark:text-stone-50">
          Parvati India Crafts
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={clsx(
              "text-xs font-medium uppercase tracking-widest font-sans transition-colors",
              isCurrent("/")
                ? "text-orange-700 dark:text-orange-500 border-b-2 border-orange-700 dark:border-orange-500 pb-1"
                : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            )}
          >
            Accueil
          </Link>
          <Link
            to="/shop"
            className={clsx(
              "text-xs font-medium uppercase tracking-widest font-sans transition-colors",
              isCurrent("/shop")
                ? "text-orange-700 dark:text-orange-500 border-b-2 border-orange-700 dark:border-orange-500 pb-1"
                : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            )}
          >
            Boutique
          </Link>
          <Link
            to="/category"
            className={clsx(
              "text-xs font-medium uppercase tracking-widest font-sans transition-colors",
              isCurrent("/category")
                ? "text-orange-700 dark:text-orange-500 border-b-2 border-orange-700 dark:border-orange-500 pb-1"
                : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            )}
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="text-xs font-medium uppercase tracking-widest font-sans text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className={clsx(
              "text-xs font-medium uppercase tracking-widest font-sans transition-colors",
              isCurrent("/contact")
                ? "text-orange-700 dark:text-orange-500 border-b-2 border-orange-700 dark:border-orange-500 pb-1"
                : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            )}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-stone-600 dark:text-stone-400 hover:text-orange-600 transition-all duration-300 relative group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" data-icon="search">search</span>
          </button>
          <button
            onClick={onCartClick}
            className="text-stone-600 dark:text-stone-400 hover:text-orange-600 transition-all duration-300 relative group"
          >
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" data-icon="shopping_bag">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
