import { Link } from "react-router-dom";

export default function Category() {
  return (
    <main className="pt-24 min-h-screen bg-surface">
      {/* Sub-navigation Tabs */}
      <div className="bg-surface-container-low w-full border-b border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto px-8 flex justify-center space-x-8 py-4 overflow-x-auto">
          <Link to="/category" className="text-orange-700 font-semibold border-b border-orange-700 pb-1 text-sm tracking-wide whitespace-nowrap">
            Sacs
          </Link>
          <Link to="/category" className="text-on-surface-variant hover:text-primary transition-colors text-sm tracking-wide whitespace-nowrap">
            Bijoux
          </Link>
          <Link to="/category" className="text-on-surface-variant hover:text-primary transition-colors text-sm tracking-wide whitespace-nowrap">
            Décoration
          </Link>
          <Link to="/category" className="text-on-surface-variant hover:text-primary transition-colors text-sm tracking-wide whitespace-nowrap">
            Textiles
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden py-24 bg-surface">
        <div className="absolute inset-0 mandala-bg-category"></div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="text-[10px] tracking-widest font-label uppercase text-secondary font-bold mb-4 block">Héritage Artisanal</span>
            <h1 className="text-6xl md:text-8xl font-headline tracking-tight text-on-surface leading-tight">
              Sacs <br /> <span className="italic text-primary">& Besaces</span>
            </h1>
            <p className="mt-8 text-lg text-on-surface-variant max-w-lg leading-relaxed font-body">
              Chaque sac est une œuvre d'art unique, brodée à la main par des artisans du Rajasthan. Alliez tradition séculaire et style contemporain.
            </p>
            <div className="mt-10 h-[2px] w-12 bg-tertiary-container mx-auto md:mx-0"></div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-sm overflow-hidden transform rotate-2 shadow-2xl relative z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrkWZYXIoMQUNQJSvvIdf8GfcqF7CpPjmeyvpVtCFfcewNQ4eN3jIDq1v0KW23OcCj4VOfymZgQGjkqS5PeVsUyZz6iGXn0gHLnAan0fcn78uK6RM06niZ-linNR7HtI3r71HQOT2h7q8VwR02bWqJEyTo8MNJoEGwtOKvFSdDsXXrs1MY_dYWg39bhL6OiB3LLmXKgzlRQtPF8zCV6ZIoowlQFnLJef66J107vgBdeqiqXMGQ4P4cAllad6RfSmNFFILg4KJP_rA"
                alt="Luxury embroidered bag"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Saffron & Turquoise elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </header>

      {/* Product Grid (Bento Style & Asymmetric) */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Product Card 1: Large Featured */}
          <Link to="/product/1" className="md:col-span-8 group cursor-pointer block">
            <div className="relative bg-surface-container-high aspect-[16/9] overflow-hidden rounded-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnGcgwodWRXH5Y73Zk3Brxz8f0_mKgw-1tXPKHjoiCVuPskwRxhsW05PinpR2gBcIsNxBHHdd1pW1PAHssXGb0pi5HvJJyqe3WGZEdyzqz4iQuBAB0PYNSQ5SAy3K39gjeJ8nR0wfhWzypANz8r2JRul2dFZI6kXw4FhVGQzu9lw90zqLz7C9ZQkcfOEyhTF4TqwA_MfMIr_Yo8We1ouJRM19ynv63pvOCqZkI_ejYTiYCM_8B9XnLIaK_sgZA_yOBW6wjIqgpHq8"
                alt="Traditional Tote Bag"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 p-8 bg-surface-container-lowest/90 backdrop-blur shadow-xl border-l-4 border-primary">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] tracking-widest font-label uppercase text-secondary font-bold">Pièce Signature</span>
                    <h3 className="text-2xl mt-2 font-serif text-stone-900">Le Grand Tote Jaipur</h3>
                    <p className="text-on-surface-variant text-sm mt-1">Coton bio, Broderies or</p>
                  </div>
                  <span className="text-xl font-bold text-primary">185€</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Product Card 2: Vertical */}
          <Link to="/product/2" className="md:col-span-4 group cursor-pointer mt-12 md:mt-0 block">
            <div className="relative bg-surface-container-high aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADPXfGGHi3kJF1LDahzGgZWWABB9TyDKhECEDWU6k3efLcuPDAKMFYsdvR_MuEGaIvoyM0NxSLEytpetPZTJhtniq9D08-G4_jUQwc99F_8ezyyKWluyjIFidZGIgjLwZdEpCuRruPLHSURfRSwR-AhdrGiTgWTHTXZKpR-swVSevuKFyuxlJjMZlLqxqnu6v-JSwN5BSpAaJtGW8MJJgDUK0Y9UTVBxWXQkS59nxOZYGvzV-EnUxDdRlbFnsgCe0gYnI-dFOkKnQ"
                alt="Pochette brodée"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-serif text-stone-900">Pochette Paon</h3>
                <p className="text-sm text-on-surface-variant">Travail de perles & Velours</p>
              </div>
              <span className="text-primary font-semibold">95€</span>
            </div>
          </Link>

          {/* Product Card 3 */}
          <Link to="/product/3" className="md:col-span-4 group cursor-pointer block">
            <div className="relative bg-surface-container-high aspect-square overflow-hidden rounded-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6nW_5UFsTSiNtz9TNU-lp64pM7Z_NIIIHVKxUhwUHumo7AitSVbt-uAz2aSKB6ApytKTXGHSg57zJgFXdFyg0H-CgHa94bSYBk7_ucepVuOv6-MoKsdEX1JDe9kWdbxwXC-5fLsIiSkIkOQZe8h83Uy3Llods2wvJu9YJ-8p9OsdzsVkxl7K_h8x4a4Utz7_obwkeAOYg702Ta1KOu5TGo-7A486wTdvugPE_upLV5G7DN_N5XKuMUBe5BvM4ZnsbUSjnu4RUGR8"
                alt="Sac bandoulière"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-serif text-stone-900">Besace Nomade</h3>
              <p className="text-primary font-semibold">120€</p>
            </div>
          </Link>

          {/* Product Card 4 */}
          <Link to="/product/4" className="md:col-span-4 group cursor-pointer mt-8 block">
            <div className="relative bg-surface-container-high aspect-square overflow-hidden rounded-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhp7OJ-Eg6oUj3JRRorFYIt068GxuLVxKyYAHRWe0sFLLe1sC0omEVGvamMP5myfXDO9kYm9Mu6VWdRRhNNIT0Nh6qqJoaxjtyg4A0fj_XsxqjDoGJDYRXkTtuudWqkZ1Yy-Bsz6btGdrAqwhLyEa0raQvoAhSKlmOrXWNMdnK3MsPwyO1esEhb_4HciHuKDrZUNzXODbLjK-zKPs839Qmnh5jruF0Lldlsuhn7TjpBsV7a5uIWQ9rDkcb6in_JGCLtjP-m4nqh7o"
                alt="Sac Ikat"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-serif text-stone-900">Sac de Jour Ikat</h3>
              <p className="text-primary font-semibold">75€</p>
            </div>
          </Link>

          {/* Product Card 5: Horizontal Accent */}
          <Link to="/product/5" className="md:col-span-4 group cursor-pointer block">
            <div className="relative bg-surface-container-high aspect-[3/4] overflow-hidden rounded-sm transform md:-translate-y-12">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeGxaqcZuprDPlJ_uJzeVKJv9IoY5I858L9BYhbshLO7SXza_Ht-BsNKqZjbsEnDmiIIEgjOkbH_8SX22R4VlcqsS5DHRttUAA2m6TZ-fH8e05GQ1SLgYmysknn_VmBgdhK3OFVPKlmukyEf4LKzqphP2geNXaIpuxpzaHGoNdrE2eL5wPyNqjjkacyZFNsvruwlnrb0C2aaKEl0vRU8iovjfA61EHT7hd3ehkPtALWYOmlZiiOi6AzAnK-EvlrjBCq9bAepS8dig"
                alt="Bourse en soie"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 text-[10px] tracking-widest font-bold uppercase rounded-sm">Nouveauté</div>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-serif text-stone-900">Bourse Royale</h3>
              <p className="text-primary font-semibold">65€</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter / Quote Section */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div className="absolute inset-0 mandala-bg opacity-5"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10 px-8">
          <span className="material-symbols-outlined text-primary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          <h2 className="text-4xl mb-8 leading-tight italic font-serif">"L'artisanat indien n'est pas seulement un produit, c'est une histoire tissée dans chaque fibre."</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Rejoignez le cercle des collectionneurs"
              className="flex-1 bg-surface border-none border-b border-outline-variant focus:ring-0 text-sm py-4 px-6 outline-none shadow-sm"
            />
            <button className="bg-primary text-on-primary px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-primary-container transition-all shadow-lg rounded-sm">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
