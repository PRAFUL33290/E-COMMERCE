export default function CartDrawer({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed right-0 top-0 h-full w-96 z-[60] bg-stone-50 dark:bg-stone-900 shadow-2xl flex flex-col p-8 transition-transform duration-500 border-l border-stone-200/20 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="font-serif text-2xl text-stone-900 dark:text-stone-100">Mon Panier</h2>
          <p className="text-stone-500 text-sm font-sans">Crafted items awaiting your home</p>
        </div>
        <button onClick={onClose} className="text-stone-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex-grow space-y-6 overflow-y-auto pr-2">
        {/* Cart Items Sample */}
        <div className="flex gap-4 group">
          <div className="w-20 h-24 bg-surface-container-high overflow-hidden rounded-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsY38vaWCCkdnh75I1O3I4uUPKFTLGi7A6WQj-R0CwoZucSkBwNfQi6LhtZ1_emWPJ4tc6_tlJ817u4VuiH5WnAjWBE16dvWIrGxalk_duhVsscJe2-3R8idcfUpuFGrM98H9fP-vdBB3ntNPbLUdPIogDtXmyQ-CdF4GOYSPRN6UExGdEYT0bntOVUAh3i0r3Sdgzz8qg-uvdOBBzb6vM6QJYOia9YI3pdnh2kJ_jvXrly9v6dvS4bU4MFN0o4WpGoro60Bb3etE"
              alt="Coussin Indigo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">Coussin Indigo Artisan</span>
              <span className="text-sm font-bold text-stone-900 dark:text-stone-100">45€</span>
            </div>
            <p className="text-xs text-stone-500 mt-1">Textiles • Fait main</p>
            <div className="flex items-center gap-3 mt-3">
              <button className="text-xs border px-2 py-1 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">-</button>
              <span className="text-xs text-stone-900 dark:text-stone-100">1</span>
              <button className="text-xs border px-2 py-1 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">+</button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 group">
          <div className="w-20 h-24 bg-surface-container-high overflow-hidden rounded-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1q9dq-uEVTLia-SqhEY9Zj8deabcoFe4kKdQjqOIOSGFZQa9T-4uPSiOhKuGD8TFj8kwoz-G664TGXhNITno8htDZUXXcz2Wz_i8uWDua53VvbGnh02sgjGGyma7IBs936_RmoSh5ap-MxVYWuEvQfWKYJra5DBgXUTCNDxJHoFvzFY2b_FpA3AwTjQ9tRC8VeVaQSmFQUi6KlvvkVzcjIYr7kPzh-z0IRb7eSja9jZ_AHb169YeJIXpuMMaa86CRrf3XXQkkdIc"
              alt="Bol en Laiton"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-stone-900 dark:text-stone-100">Bol en Laiton Martelé</span>
              <span className="text-sm font-bold text-stone-900 dark:text-stone-100">32€</span>
            </div>
            <p className="text-xs text-stone-500 mt-1">Décoration • Édition limitée</p>
            <div className="flex items-center gap-3 mt-3">
              <button className="text-xs border px-2 py-1 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">-</button>
              <span className="text-xs text-stone-900 dark:text-stone-100">1</span>
              <button className="text-xs border px-2 py-1 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-700">
        <div className="flex justify-between items-center mb-6">
          <span className="text-stone-600 dark:text-stone-400 font-medium">Subtotal</span>
          <span className="text-2xl font-serif text-primary">77€</span>
        </div>
        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 font-semibold text-sm uppercase tracking-widest rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
          Passer à la caisse
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </aside>
  );
}
