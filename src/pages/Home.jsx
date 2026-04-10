import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative pt-24">
      {/* Mandatory Mandala Texture Layer */}
      <div className="fixed inset-0 mandala-bg z-0"></div>

      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden z-10">
        <div className="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 z-20">
            <div className="inline-block px-3 py-1 mb-6 bg-secondary-container/30 border border-secondary/20 rounded-sm">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary">Édition Limitée</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl leading-tight tracking-tight text-on-surface mb-8">
              Artisanat <br /><span className="italic">Indien Moderne</span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-md mb-12 leading-relaxed">
              Une collection curated de sacs, bijoux et textiles faits main, alliant héritage séculaire et design contemporain.
            </p>
            <div className="flex items-center gap-8">
              <Link to="/shop" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-sm font-medium tracking-wide shadow-lg hover:saturate-150 transition-all duration-300">
                Découvrir la boutique
              </Link>
              <div className="h-[2px] w-12 bg-tertiary-container"></div>
            </div>
          </div>
          <div className="md:col-span-6 relative h-[600px] md:h-[800px]">
            <div className="absolute inset-0 bg-surface-container-high rounded-sm translate-x-8 translate-y-8"></div>
            <div className="absolute inset-0 z-10 overflow-hidden rounded-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAihKYsMG6QsgDRbvEqPCWnUtYD7dcu-4Yh7GEPAma0UyQZ7oRF-LCHzqnbDsg1OaqM2Z8jUBGbytWxuv_bq_1bt9BdJEce8IOUCqKJzF7r2RMYcVi8aL4RGcea7ravClQvLBgUSr7zTj8CPxlUL9XHv3zB-hII3zegDbW_DGW6vCmiQOvZr_BdabSw3cpKIt3sDBlaUN4n_7ONpVflYUkaPIzx1lEtc_YD3vCdDuTs5ujea3LRr6zTAl2SqXz0tvf07_GsZY7IClo"
                alt="Artisan indien"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 shadow-[0_12px_32px_-4px_rgba(88,66,55,0.06)] z-20 hidden lg:block">
              <span className="font-headline text-2xl italic text-primary block mb-2">Heritage Soul</span>
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">100% Durable & Éthique</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase: "Nos Coups de Cœur" */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <div className="w-12 h-[2px] bg-tertiary-container mb-6"></div>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface">Nos Coups de Cœur</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-body italic">
              Des pièces uniques sélectionnées pour leur caractère exceptionnel et la finesse de leur réalisation.
            </p>
          </div>

          {/* Bento-inspired Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high relative overflow-hidden mb-6 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7b-MGH0xz6DVI7Ykj0r1d7GoTDhCpoepjLX_Fj_l5of8rUxIhgT6Lj4gx2EvBeIArtBFFL2ZLWAjKYVhH_v6p1i09vJsxBJMnmEnh8xykKLGX5Q248Xnz3XsKRiP_6CAl3BzscgKp5s88dHbnvoTI_rxrOSdb9rf_lHuXk6JssqfOKjSUF9nmvKPqIem3puPE-5cMfDjtJ9nKnNyBvy8j37zcQjxEQkZmBhx905WKrAHWXHcYLoT9w_L6I-1R5R7vYoIFyFwJpnQ"
                  alt="Écharpe Neelima"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase">Soie Naturelle</span>
                </div>
              </div>
              <h3 className="font-headline text-xl mb-1 text-on-surface">Écharpe Neelima</h3>
              <p className="text-on-surface-variant font-body text-sm mb-4">Broderie Zardosi à la main</p>
              <span className="text-primary font-semibold">125,00 €</span>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer lg:translate-y-12">
              <div className="aspect-[3/4] bg-surface-container-high relative overflow-hidden mb-6 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_xl-Er_n1NByLTwzHiLLHv6B6lQx7XSWadfFYKC7dbg6yRNpOmxh_oapW7cCY4GC8j2dSluko9NMZeSOMl7wC7HF1yVO5C-KizkciZKN1-AihrExEzN9GhzaemTR7xtQuIGtw9vi-wiTqXQJWOEzoVahWzFSfwFdT7D1JHyV8RpGRZpXWzMSBXVqWHAhYJazgBwoLqX_WzGEZTZ4PQgzL6l6CUEPTFi7C7UbLign5wIvqv6ADRZnQSiQ0FzmRH6SnQUyOm_QH8g"
                  alt="Sac Jaipuri"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-headline text-xl mb-1 text-on-surface">Sac Jaipuri</h3>
              <p className="text-on-surface-variant font-body text-sm mb-4">Cuir repoussé artisanal</p>
              <span className="text-primary font-semibold">240,00 €</span>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-high relative overflow-hidden mb-6 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCqsR2uE3wbT0g8cXYjS8_iJpDRpcwBDND562h97i9QoP4B7bq39uv1vahWXLDJB6-cIFRVknTg2dev2k-gelBLs8EphXM8YhPxVYmzEdoswGBZGoQI0boxf_OzKVYAFrfHBsmjJ5DgLY037iswpmwloNtbnVR_CyC-MAelyfzybK2viQ-LgtLKWAHuCb-QWyNnoc_z_ZwYy_sLz_dMfK6jAQMlqEvDZJyzh1OO5bwGS0yfAvZ0pFQpsbiq5gaW-Qi1BFTTOOPIOs"
                  alt="Vase Jodhpur"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-secondary text-white px-3 py-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase">Nouveauté</span>
                </div>
              </div>
              <h3 className="font-headline text-xl mb-1 text-on-surface">Vase Jodhpur</h3>
              <p className="text-on-surface-variant font-body text-sm mb-4">Céramique émaillée</p>
              <span className="text-primary font-semibold">85,00 €</span>
            </div>

            {/* Product 4 */}
            <div className="group cursor-pointer lg:translate-y-12">
              <div className="aspect-[3/4] bg-surface-container-high relative overflow-hidden mb-6 rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-X8wE_puvgipd309UUck6wr-RtsR9JoZjKNrkCvxLUzKim1QDyBzYgCE0kRXfTCGq3BSTox1zzaPRQUA5ClXA_UCJVr0e-tu_1LxjBwCV1gDutZKElUNX7YvFL7qu7Y-ifzenn61VzMuDqMpGrSCt4WozkMA2O6hgAzdyRgr5Y0pN92XhGVz7537TchhnMEy2SRiaQM6h2NLlQ94ci62EOCKJFYjyKJsjmU40rz-ikL07WX__VwkHjzFS2dYLOpiZxCWdXAeA2QI"
                  alt="Collier Maya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-headline text-xl mb-1 text-on-surface">Collier Maya</h3>
              <p className="text-on-surface-variant font-body text-sm mb-4">Laiton doré à l'or fin</p>
              <span className="text-primary font-semibold">160,00 €</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Telling Section */}
      <section className="py-32 bg-surface-container-low relative overflow-hidden z-10">
        <div className="container mx-auto px-8 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-secondary font-bold block mb-8">L'Âme de Parvati</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-10 leading-snug">Chaque objet raconte une histoire de patience, de tradition et de beauté.</h2>
            <p className="text-lg text-on-surface-variant font-body leading-loose mb-12">
              Nous travaillons directement avec des coopératives d'artisans à travers l'Inde pour préserver des techniques ancestrales tout en créant des pièces qui s'intègrent parfaitement dans un intérieur moderne. Pas d'intermédiaires, juste de l'art pur.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 text-on-surface font-semibold hover:text-primary transition-colors border-b border-on-surface pb-1 group">
              Découvrir nos histoires d'artisans
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
