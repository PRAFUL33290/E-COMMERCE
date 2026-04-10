import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto lg:pr-[420px] mandala-bg-shop">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-40 space-y-12">
            <section>
              <h3 className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-6">Catégories</h3>
              <ul className="space-y-4">
                <li>
                  <button className="flex items-center justify-between w-full text-left text-sm group">
                    <span className="text-primary font-semibold">Toutes les pièces</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">48</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center justify-between w-full text-left text-sm text-stone-600 hover:text-stone-900 transition-colors group">
                    <span>Sacs</span>
                    <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">12</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center justify-between w-full text-left text-sm text-stone-600 hover:text-stone-900 transition-colors group">
                    <span>Bijoux</span>
                    <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">18</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center justify-between w-full text-left text-sm text-stone-600 hover:text-stone-900 transition-colors group">
                    <span>Décoration</span>
                    <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">9</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center justify-between w-full text-left text-sm text-stone-600 hover:text-stone-900 transition-colors group">
                    <span>Textiles</span>
                    <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">9</span>
                  </button>
                </li>
              </ul>
            </section>

            <div className="h-px bg-stone-200/50 w-10"></div>

            <section>
              <h3 className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-6">Filtrer par prix</h3>
              <div className="px-2">
                <input className="w-full accent-primary h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" type="range" />
                <div className="flex justify-between mt-4 text-[11px] text-stone-500 font-medium">
                  <span>15€</span>
                  <span>500€</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-6">Matières</h3>
              <div className="flex flex-wrap gap-2">
                <button className="text-[10px] px-3 py-1 bg-surface-container border border-stone-200 uppercase tracking-tighter hover:border-primary transition-colors">Soie</button>
                <button className="text-[10px] px-3 py-1 bg-surface-container border border-stone-200 uppercase tracking-tighter hover:border-primary transition-colors">Laiton</button>
                <button className="text-[10px] px-3 py-1 bg-surface-container border border-stone-200 uppercase tracking-tighter hover:border-primary transition-colors">Coton</button>
                <button className="text-[10px] px-3 py-1 bg-surface-container border border-stone-200 uppercase tracking-tighter hover:border-primary transition-colors">Cuir</button>
              </div>
            </section>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <header className="mb-12 flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-serif tracking-tight text-stone-900 mb-2">Boutique</h1>
              <p className="text-stone-500 text-sm max-w-md">Découvrez notre collection de pièces uniques, façonnées par les mains expertes de nos artisans partenaires à travers l'Inde.</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-stone-400">
              <span>Trier par</span>
              <select className="bg-transparent border-none focus:ring-0 text-[10px] font-medium uppercase tracking-widest text-stone-900 p-0 cursor-pointer outline-none">
                <option>Nouveautés</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
              </select>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12">
            {/* Product Card 1 */}
            <Link to="/product/1" className="group flex flex-col cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden relative mb-4">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-1 text-primary">Fait main</span>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCinTiXxJ42hG9qch3Nq3xAutnj6RA0c5FrAE0vjzm6anCJ4_gfYbDqgA3JY69qaqtjhHHFYw74TGBs6CPrAqbR_d3TY_josM0-pJ1Zs0Araj5me88gqbEnfvXnp_y-VY_3n9UKwtwJjOmbJuhaKsy2wfRPUgxtsq2kjGKQzrpnpF0uhjT1MZ_iR3IteQBJZARwzNVEc60Y9Oyva6j8ZMEFWaV7WuQ9LxyM7pXsjzqgy94MFrod4q9io5aIWyeNhUEYcPQm5_qE14c"
                  alt="Cabas en Cuir"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/95 text-stone-900 py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ajouter au panier
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 group-hover:text-primary transition-colors">Cabas en Cuir 'Sahara'</h3>
                  <p className="text-xs text-stone-500 mt-1">Sacs</p>
                </div>
                <span className="text-sm font-bold">185€</span>
              </div>
            </Link>

            {/* Product Card 2 */}
            <Link to="/product/2" className="group flex flex-col cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden relative mb-4">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-1 text-secondary">Édition limitée</span>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLBRz6godPYHPsduxZvZkk11wl1b2e6CXkm-s4t3ssUXgzi347lmhPrZzDIaIRIJsuZaVtsmEeOgWwbOQcjMdOxPjqnDocmzscIKnmY_6_-Q-B-pC-CegOxhtrU176cpGfR9dK4cvdpBZtjOl77zVdpTSGENs2vi9prmf0GOJK2h3m-R9sM-X0rLrQMD06ag-l_Xh7xFmKF_vL6eOsENc9Xp1b5p1i84k96bzMXU2QPeKxaqcq6CZRfhIODb5CwqXO-CFgysOA-Jw"
                  alt="Collier Argent"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/95 text-stone-900 py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ajouter au panier
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 group-hover:text-primary transition-colors">Collier Argent Ciselé</h3>
                  <p className="text-xs text-stone-500 mt-1">Bijoux</p>
                </div>
                <span className="text-sm font-bold">120€</span>
              </div>
            </Link>

            {/* Product Card 3 */}
            <Link to="/product/3" className="group flex flex-col cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden relative mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW_VF8hpObvv5O-rLy8ovrqH7Ed3xpmSQqoH3BUE4VlAF9vyMUeyTO5O1sZO_6OW1P-OYOkwv7YOW7Ar1mj4_2hnN2fVo4qo-MOUFgyxi0-D1l63gfNcOf4z3OML--Pz9LJhD-FxWRrpWs6j26dGvIWmWeBfw3xn7vq4-a_d27wzM_4ybw3WLCghV7gxHOTjxuoVSCZwoZj41fB2UsRO_fHX2zy224Pm9U7Nmd_SLK5N-BSCTZurt3DHbrnPpHCsn_MAc5F0Im3fI"
                  alt="Vase Terre Cuite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/95 text-stone-900 py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ajouter au panier
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 group-hover:text-primary transition-colors">Vase Terre Cuite Peint</h3>
                  <p className="text-xs text-stone-500 mt-1">Décoration</p>
                </div>
                <span className="text-sm font-bold">55€</span>
              </div>
            </Link>

            {/* Product Card 4 */}
            <Link to="/product/4" className="group flex flex-col cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden relative mb-4">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-1 text-primary">Fait main</span>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFTP4rSvAEt027nE3GdY7LxMhPVp-FgJiFfVu_Eovt1qvCL9FCK_XG5VsAD-b8Sgit-raDD1GInaBr8ySXKr3BehRPeOktnyAax2hqk3keB-uX_2OiWts7ZdZvnO8QD0Ur-c65oSYXYGp6jlXN-C1v8X3x9dLw0jvtfumIx8u7_zxhmAGTTeOpUr26hhJH9xsbFOY52Km55yZgtUTd3SBpvEk8PqzRrid9zKUbrPf3ixbhn3R35dVKGj0iN_G7AIqf30WO5G2NM7g"
                  alt="Foulard Soie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/95 text-stone-900 py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ajouter au panier
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 group-hover:text-primary transition-colors">Foulard Soie Sauvage</h3>
                  <p className="text-xs text-stone-500 mt-1">Textiles</p>
                </div>
                <span className="text-sm font-bold">75€</span>
              </div>
            </Link>

            {/* Product Card 5 */}
            <Link to="/product/5" className="group flex flex-col cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden relative mb-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK6EKlPgd0zK2VQZ2-7G2joj5pLl9g13gZGSggB1oHqpHVUrsybeXd8EirkEA71OARP4qksUoa1aIbYq0nvOqHtt8LoGxxP_LoZjJ5NPX71vXdRweMEQC7doZAX1loUNVuFAV_MDhlA0EX47NvHeWcLHVziAZB-B8NfDtNrJNc2NDXVxU2nEtvra8C2rcPTBk_a8168aNEzTso1TF3CGi-PDYPZdXeN0bNkyhpE4v3Ayk_YUumU_owmLj4WRkkPppHCfCPww5JTtQ"
                  alt="Pochette Brodée"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/95 text-stone-900 py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ajouter au panier
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 group-hover:text-primary transition-colors">Pochette Brodée 'Jaipur'</h3>
                  <p className="text-xs text-stone-500 mt-1">Sacs</p>
                </div>
                <span className="text-sm font-bold">95€</span>
              </div>
            </Link>

            {/* Product Card 6 */}
            <Link to="/product/6" className="group flex flex-col cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high overflow-hidden relative mb-4">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-1 text-secondary">Édition limitée</span>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrHzaLWHD-wgSUBBKJ7sR7OxWBmE1C6j0p_SkOceP3DlMvWuXREl7ASDm3zbf2bWrnlU1vzyH3L-uGrfpjkA7ZAOXlmxvCjpDwS_EPV3sZwTBGBgLdtKeuTnXKNApTeIrUpnfgDE0iJ1idfIAyzZ3-psGS8uzRZQQcksCEM9jZ0J2LJOSeyV9eoutFh7mdc1HdA5xgBM919rPgk1WxcjIBwPAHRPlp6uk_O68nTci4QaUm6roquDWQ9hSve1M4e2aqOBUW7b5ArbQ"
                  alt="Lotus en Bois"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/95 text-stone-900 py-3 text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ajouter au panier
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 group-hover:text-primary transition-colors">Lotus en Bois Sculpté</h3>
                  <p className="text-xs text-stone-500 mt-1">Décoration</p>
                </div>
                <span className="text-sm font-bold">145€</span>
              </div>
            </Link>
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary px-3 py-1 border-b-2 border-primary">01</span>
            <button className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors px-3 py-1">02</button>
            <button className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors px-3 py-1">03</button>
            <button className="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
