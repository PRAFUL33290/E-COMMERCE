import { Link } from "react-router-dom";

export default function ProductDetail() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex gap-2 items-center text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-label">
        <Link to="/shop" className="hover:text-primary">Boutique</Link>
        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
        <Link to="/category" className="hover:text-primary">Accessoires</Link>
        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
        <span className="text-primary font-bold">Pochette Brodée</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Product Gallery (Asymmetric) */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-4">
          <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-sm relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsKs1KkBNR7MGOAZtobxTkIE9rck7x3C85f_boJTEWpEbGLHFnZQOh2k7iXRAgEB_5OqD3fSWjefuS1Hk9x-GZc6uMWo0AbXt64BbxA7y88IIOR7N0YgoH8JjdEMixHXlCICbgmxAgbTdD4ftSXu3l3v3_hg1Ssag_UT9J6f8fk3WjH44IYCspQTl0UaM630SQF63e2Z_TqRiHWOFRqHPA8qzaE-Vk1vvlSnBVvvy5tDJjxRj4RHJWYc4ZlF_vhrsnpzVLc1OwhZU"
              alt="Pochette Brodée Artisanale"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="bg-surface-container-lowest/90 backdrop-blur-md text-[10px] font-medium uppercase tracking-widest py-1.5 px-4 text-on-surface shadow-sm">Fait main</span>
              <span className="bg-secondary-container/90 backdrop-blur-md text-[10px] font-medium uppercase tracking-widest py-1.5 px-4 text-on-secondary-container shadow-sm">Édition limitée</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square bg-surface-container-high cursor-pointer ring-1 ring-primary overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRVy3CILJbf_4YtwMedDEBEaH97_aVM9IMj7rqUmc153XoF_dPvIW9H5jlsKuY1gJBvSxN1BGdyh1sJyRuQcqk0XJyvosep2bn2g8BjJwkGi3SHnaH0OSpW6Qcl8cK8M5RjjuVoDcPtdftlOfk-xNRoeFZ_rlRLXR3aWU1JzRpHWPBIeIq6aNoLEKxDmjw-UYRk_aT2sqho2q_Fx7xxUjudPXr8b9GC8WbatTrg9FCyyIxdIUr_leN1yxRYaOZ3M1XOzNAkHYVjFM" alt="Pochette front" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-surface-container-high cursor-pointer hover:opacity-80 transition-opacity overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtJyGUB7nOAk6NkJcBVx4-heHnQn_8NIrMYukvQ7MDTrCpYixKfAi4xyZ3j-Lwym7E7KOlrqGOkBjnh2frFN_vVGmwXsALrQK9QTVK440-xrR5bfB493tWHU21xRk1Fqq-K1PtPdQZ5ESF7BqyStiiC-izewVTegFO0zd-FhtSCxeW6HpvHv5mH79qdZAm6s4PTWZpwr03mdXHBgqges4En7JlAxnExHVFy1ovPMx4PDYo9Xovln9eGH41ENKaU5DoedeUrtyz5vk" alt="Pochette detail" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-surface-container-high cursor-pointer hover:opacity-80 transition-opacity overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAry1z8GmEXdaKNDJFVXwFtCuguGozKksPM_N42ocDLKOzUR5jcgPiqy1KsXzkviGcBGGW6sSvEi9eSjLTHQ492shXgDRgx0HxiVJPu88lZ3jM6b0lZLRmTmX9aaurtaKUHUCGpGABHe56fEVFI3jKTD3SHW9BYX0IcNF7j6v0XntF15OdGG_crJhtaaUJDNHtlEsO0UG8CQg-9_SjVOYy2Zc0fw37Q6Y9vzBnL2HW9zUell_yzj5N14aHJO4pRkNH-ekt9RmNKYzU" alt="Pochette inside" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-surface-container-high cursor-pointer hover:opacity-80 transition-opacity overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYiMTQhZUOcJSL5XWFdmLUPFc7DTeuS5Qc2Z91AdyIGdM7xlZD4ATk7fF3vpk4I74dx1k3a7UVgWur0MIb32pK8x0xlAc4FQ9p-A6Wx-etQk9svESQMmMPRXfGDlzYov_GH_5XFhT7sui4oP-R5DHqWBy4fjDwKW1sYM_kiqxgFoi9BBXuJydVjZLWGm2BethPxfw_agrJt2FFID0LHZqzjJum4N-mcP7dXsjqgyn-VZlOdD43COIe-CpIuZRXf5pu4dWb2MkjyX4" alt="Pochette lifestyle" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-on-surface leading-tight mb-4">
            Pochette Brodée Artisanale
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-serif text-primary font-medium tracking-tighter">45,00 €</span>
            <div className="h-4 w-px bg-outline-variant/30"></div>
            <div className="flex items-center gap-1 text-secondary">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Livraison rapide</span>
            </div>
          </div>
          <div className="prose prose-stone mb-10">
            <p className="text-lg font-body text-on-surface-variant leading-relaxed">
              Chaque point de cette pochette raconte une histoire séculaire, héritée des artisans du Gujarat. Tissée sur un lin de première qualité, la broderie de soie dorée capture la lumière comme un soleil couchant sur les rives du Gange.
            </p>
            <p className="text-base font-body text-on-surface-variant/80 italic mt-4">
              "Une pièce d'exception où l'âme du créateur rencontre l'élégance du quotidien."
            </p>
          </div>
          <div className="space-y-8">
            {/* Gold Accent Divider */}
            <div className="h-[2px] w-10 bg-tertiary-container"></div>

            {/* Options */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Quantité</span>
                <div className="flex items-center border border-outline-variant/30 w-fit rounded-sm">
                  <button className="p-3 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="px-6 font-bold">1</span>
                  <button className="p-3 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined">shopping_basket</span>
                Ajouter au panier
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-surface-container-low rounded-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">eco</span>
                <span className="text-xs font-medium">Matériaux Durables</span>
              </div>
              <div className="p-4 bg-surface-container-low rounded-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-xs font-medium">Certificat d'Authenticité</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-outline-variant/10 pt-20">
        <div className="space-y-6">
          <h3 className="font-headline text-3xl font-bold">Savoir-faire Ancestral</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Nos broderies sont réalisées selon la technique "Zardosi", autrefois réservée à la royauté moghole. Chaque motif floral s'inspire des mandalas sacrés, symbolisant l'harmonie et l'éternité. Le montage est réalisé à la main dans notre atelier de Jaipur, garantissant une durabilité exceptionnelle.
          </p>
          <div className="grid grid-cols-2 gap-y-4 pt-4">
            <div className="text-xs uppercase tracking-widest text-on-surface-variant/60">Dimensions</div>
            <div className="text-xs font-bold">22cm x 15cm x 2cm</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant/60">Composition</div>
            <div className="text-xs font-bold">Lin bio, Soie sauvage, Laiton</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant/60">Entretien</div>
            <div className="text-xs font-bold">Nettoyage à sec uniquement</div>
          </div>
        </div>
        <div className="bg-surface-container-low aspect-video rounded-sm overflow-hidden mandala-bg-product flex items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx5xkNb6W-fjlhNW0IpbsMTpGhwL83IfLARoaN3E-ZiMiSBACqHNslXe2bqbnxwJrIPZZyQxC0MBIPJzq4mNBRwPdD5voIFm0CQ8RPUAeo_ObrcKlaMO0n29b0LRCCmJPiYXMLxMiNc_pUuxmBhE_z79v8tOTz9-Jho4FHoSoiGI17tc4nP4HBqJhT3GenQZhWq8WP4NzTFS6-bW7vXN9AS8CaTr4pgw51ukBQUdSzg7EctDZq5qgWGS_9nZnIBwocIHo5Ksuykyw"
            alt="Artisan detail"
            className="w-full h-full object-cover mix-blend-multiply opacity-80"
          />
        </div>
      </section>

      {/* Recommended Products */}
      <section className="mt-40">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Inspiration</span>
            <h2 className="font-headline text-4xl font-bold">Vous aimerez aussi</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-widest border-b border-primary text-primary pb-1 flex items-center gap-2">
            Voir la collection
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-sm mb-4 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvEuQV4ribXYbZJ0kARzlyPzw-qSzm8lieDRMwKLr6LlyzM9ghylUJiPePVNPlj_D-W_XZ3xj5x774lka--wnRN_TW3dKbAyZf7ZXoP5EA6pva5lGpqi2DqcPE0ftlKxbrmlqn7119QR4ja5VJ-UyLS8QEnjFufgp6jvqaQvX2TzHkUaPL7296r5WCec-crWKnfXq47BN41toD9uMf1tQpXLY6w7bgG2OiVZ_2ioULqIwGgq27-v20oFOoYBrhTgjDGJC60aNsNQY"
                alt="Écharpe en Soie Rawal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg rounded-full">
                <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
              </button>
            </div>
            <h4 className="font-headline text-lg font-bold mb-1">Écharpe en Soie Rawal</h4>
            <p className="text-primary font-serif font-medium">35,00 €</p>
          </div>
          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-sm mb-4 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChhkuMrh-Kq_0gz0MKCtqlC70kdgEf3bF8JNYm0C4wHMb4JWM8tkrwUkLjO0qb44yi6hiGv7-j-T5lfjXO_qXS2jOPeRIDKyt46EpgnZT8bBDiyjowgbBHm_dCBM6_S_aazSV-lFS32rNYbSXlVk4HImKv_fGm6cnnVqm-SVVgcL2jcOwevZnC9sxWhbHlQ1JwXD4q5EuIndT2KJh2_ENuelK9Uk-XwoDM5QkydzKYIMw-iDC_QOEax_RTAXHsEr9j7LxPczuleTM"
                alt="Collier Terre Sacrée"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg rounded-full">
                <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
              </button>
            </div>
            <h4 className="font-headline text-lg font-bold mb-1">Collier Terre Sacrée</h4>
            <p className="text-primary font-serif font-medium">58,00 €</p>
          </div>
          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-sm mb-4 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByoVlVq7MdeluCYHEKMvTCaZk2-iTPWDvxYVVTxH3l7yoqGTK2wwjoOuGkE3i71WZMGiUrANlG1xmCjKZjOeQDnYS9H6QoVjANEvz3B4oCY_Av2_2Q-p5nMQdgddULBn2qnsYFDNZk-nrRWyVHZ_Tr04_z7bSM-ga3JJnsMqmfmsl3Oupfv3ELiSAQ81tM0aN05OijNem5wRWSHOBR4lWfoezvYLAFLgDRTHKtXRFsDBd6vluJP84OecYDQSMCEOxxC_-VApNWD6I"
                alt="Pochette Indigo Blockprint"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg rounded-full">
                <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
              </button>
            </div>
            <h4 className="font-headline text-lg font-bold mb-1">Pochette Indigo Blockprint</h4>
            <p className="text-primary font-serif font-medium">28,00 €</p>
          </div>
          {/* Card 4 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded-sm mb-4 relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3_DNZrzz7t2BxZAMOXSz7ERLon-Gzk_ajWKlk2BTcEO4VsfKGMEOrJiDA0RDlaQEHMLFwGMvQgAGLLZoJvO0PxFtA7CrM4e6ck8zbXFuzh7L93SbeUnr8wDDh6_Lm3TT3AqO3VrZOfvriC929yV5KMYDAp19dnf1XPbc-L4ZGkUvMue8VboeGB8UhJMIc1U0kRj-Q5kTPy672N68pLHW3Dfe3HDxEHASmAD3jJXMgJ3liAlpqOQbEIM6EDgsuO-16xXl2KBOfN9M"
                alt="Bracelets Laiton Cisnelé"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-4 right-4 bg-surface-container-lowest p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg rounded-full">
                <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
              </button>
            </div>
            <h4 className="font-headline text-lg font-bold mb-1">Bracelets Laiton Cisnelé</h4>
            <p className="text-primary font-serif font-medium">42,00 €</p>
          </div>
        </div>
      </section>
    </main>
  );
}
