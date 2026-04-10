import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 bg-stone-100 dark:bg-stone-950 z-10 relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-screen-2xl mx-auto border-t border-stone-200/20">
        <div className="flex flex-col gap-6">
          <div className="text-xl font-serif text-stone-800 dark:text-stone-200">Parvati India Crafts</div>
          <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
            L'excellence de l'artisanat indien livrée chez vous avec soin et transparence. Préserver l'héritage artisanal indien à travers des créations contemporaines éthiques et durables.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 border border-stone-200 hover:border-orange-700 hover:text-orange-700 transition-all">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 border border-stone-200 hover:border-orange-700 hover:text-orange-700 transition-all">
              <span className="material-symbols-outlined">camera</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-orange-700 dark:text-orange-400 mb-2">Service Client</h4>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-teal-700 transition-colors text-sm">Shipping Policy</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-teal-700 transition-colors text-sm">Returns</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-teal-700 transition-colors text-sm">Privacy Policy</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-orange-700 dark:text-orange-400 mb-2">Découvrir</h4>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-teal-700 transition-colors text-sm">Artisan Stories</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-teal-700 transition-colors text-sm">Wholesale</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-teal-700 transition-colors text-sm">Nos Collections</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-orange-700 dark:text-orange-400 mb-2">Newsletter</h4>
          <p className="text-[10px] tracking-widest font-sans uppercase text-stone-500 dark:text-stone-400 mb-2">Inscrivez-vous pour nos lancements</p>
          <div className="flex border-b border-stone-300 dark:border-stone-700 pb-2">
            <input type="email" placeholder="Votre email" className="bg-transparent border-none focus:ring-0 text-sm w-full p-0 outline-none" />
            <button className="text-orange-700 dark:text-orange-400">
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-12 py-8 border-t border-stone-200/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
        <p className="text-[10px] tracking-widest font-sans uppercase text-stone-400">© 2024 Parvati India Crafts. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-stone-400 text-xl hover:text-primary cursor-pointer transition-colors" data-icon="eco">eco</span>
          <span className="material-symbols-outlined text-stone-400 text-xl hover:text-primary cursor-pointer transition-colors" data-icon="thumb_up">thumb_up</span>
        </div>
      </div>
    </footer>
  );
}
