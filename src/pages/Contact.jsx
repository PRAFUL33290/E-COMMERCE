export default function Contact() {
  return (
    <main className="pt-24 min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="mandala-bg-contact py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="label-sm text-sm uppercase tracking-[0.1em] text-secondary font-semibold mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-on-surface mb-8">
              Let’s Start a <br /><span className="italic text-primary">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed font-body">
              Whether you are looking for a bespoke piece or wish to visit our workshop in Jaipur, we are here to bridge the distance between heritage and your home.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-sm shadow-[0_12px_32px_-4px_rgba(88,66,55,0.06)] transform rotate-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALX16eSkU7dJqWzBuKhQ3BaVR_xnXHYr9sll5tWtFkAopgZTA6-UvM2NTJ8hrr6qkTG-7jcCJEpthilyaZbfq9OruwjkQKmxBVhRBvyakUZjs2tARhPChrKGzwtloEb49-3vWTPsw23p8VR3VG5i2QhU7V4lbhczTE5cbEksKfCd4EET-7thvMXFIWaiuYs8oFmHxNXTbHRY-I_zlhXpQnsdOcORmCYwlWy_fTD0GXuxr8VXiTdxvIlpC6i_DKTGyCLBg13kIa7zs"
                alt="Artisan hands working"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Content Section: Form & Info */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-serif text-on-surface mb-8">Our Presence</h2>
              <div className="space-y-12">
                <div className="group">
                  <p className="label-sm text-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2">The Workshop</p>
                  <p className="text-xl font-serif leading-relaxed">
                    H-24, Industrial Area, Mansarovar,<br />Jaipur, Rajasthan 302020
                  </p>
                  <div className="mt-4 w-10 h-[2px] bg-tertiary-container"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="label-sm text-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2">Inquiries</p>
                    <a href="mailto:hello@parvatiindia.com" className="text-lg hover:text-primary transition-colors font-serif">
                      hello@parvatiindia.com
                    </a>
                  </div>
                  <div>
                    <p className="label-sm text-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2">Socials</p>
                    <div className="flex gap-4 font-serif">
                      <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                      <span className="text-outline-variant">/</span>
                      <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-10 rounded-sm relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-4">Visit Us in Jaipur</h3>
                <p className="text-on-surface-variant mb-6 font-body">
                  Experience the rhythm of the loom and the scent of natural dyes. Private workshop tours available by appointment.
                </p>
                <button className="text-secondary font-semibold flex items-center gap-2 group font-sans">
                  Book a Workshop Tour
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
              <span className="absolute -right-8 -bottom-8 material-symbols-outlined text-9xl text-on-surface/5 rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container-lowest p-8 md:p-12 shadow-[0_12px_32px_-4px_rgba(88,66,55,0.06)] border border-surface-container rounded-sm">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <label className="block label-md text-sm text-on-surface-variant mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Aarav Sharma"
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-lg placeholder-stone-300"
                />
              </div>
              <div className="relative">
                <label className="block label-md text-sm text-on-surface-variant mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="aarav@example.com"
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-lg placeholder-stone-300"
                />
              </div>
              <div className="relative">
                <label className="block label-md text-sm text-on-surface-variant mb-2 font-medium">Subject</label>
                <select className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-lg appearance-none cursor-pointer outline-none text-stone-900">
                  <option>General Inquiry</option>
                  <option>Bespoke Commission</option>
                  <option>Workshop Visit</option>
                  <option>Press & Media</option>
                </select>
              </div>
              <div className="relative">
                <label className="block label-md text-sm text-on-surface-variant mb-2 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors text-lg resize-none placeholder-stone-300 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 px-8 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold tracking-widest uppercase text-sm rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 flex justify-center items-center gap-3"
              >
                Send Message
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Visual (Map Placeholder) */}
      <section className="px-8 mb-24 max-w-7xl mx-auto">
        <div className="w-full h-[400px] bg-surface-container rounded-sm overflow-hidden grayscale contrast-125 opacity-80 relative group cursor-crosshair">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1wB07qf2fkLuUrzUKI2PjhzSOMLbFwmRFZfSRejO7srAZI_uG6H6p_RP8t9FG9XZqTKGC20upcLyr_2rAPqzR0VlG_b777ZTt71BJCLuO6azxDWgw1K9QuMcq3_aL0DmCjO3j-UqtIjW6zZlrL49NhZKx168PzwCwKtOdE-eZHx2KJP4nc92_tcmbBVbAPU9wXoXyDMmyVBdbqmbNy9fJXK8bmEzQXGpnwmtytaNucS1y4Ni6LzqhKembsATYdDDy3MJ9WvRUCjs"
            alt="Map of Jaipur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-surface p-4 shadow-xl rounded-full">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
