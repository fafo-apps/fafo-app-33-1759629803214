export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Rustic Spoon
          </a>
          <ul className="hidden gap-6 text-sm md:flex">
            <li>
              <a className="hover:underline underline-offset-4" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline underline-offset-4" href="#visit">
                Visit
              </a>
            </li>
          </ul>
          <a
            href="tel:+11234567890"
            className="ml-4 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Call to Reserve
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_10%_10%,rgba(251,191,36,.35),transparent_60%),radial-gradient(80%_60%_at_90%_10%,rgba(245,158,11,.25),transparent_60%)] dark:bg-[radial-gradient(80%_60%_at_10%_10%,rgba(255,255,255,.06),transparent_60%),radial-gradient(80%_60%_at_90%_10%,rgba(255,255,255,.04),transparent_60%)]" />
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              Neighborhood Bistro
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
              Wood‑Fired Comfort. Seasonal Flavor.
            </h1>
            <p className="mt-4 text-base text-black/70 dark:text-white/70 sm:text-lg">
              Join us for dinner and drinks in a warm, lively space. Fresh ingredients,
              thoughtful plates, and good company every night.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-amber-600 text-white px-5 py-3 text-sm font-medium hover:bg-amber-700"
              >
                View Menu
              </a>
              <a
                href="#visit"
                className="rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
              >
                Hours & Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Menu Highlights</h2>
        <p className="mt-2 text-black/70 dark:text-white/70">
          A few favorites from our kitchen. Ask about nightly specials.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Wood‑Fired Margherita Pizza",
              desc: "San Marzano tomato, basil, fresh mozzarella",
              price: "$14",
            },
            {
              name: "Truffle Mushroom Risotto",
              desc: "Cremini, porcini, parmesan, white truffle oil",
              price: "$18",
            },
            {
              name: "Citrus Herb Salmon",
              desc: "Charred lemon, farro, fennel, dill yogurt",
              price: "$22",
            },
            {
              name: "House Caesar",
              desc: "Little gems, sourdough crumbs, pecorino",
              price: "$10",
            },
            {
              name: "Caprese Skewers",
              desc: "Heirloom tomato, basil, balsamic glaze",
              price: "$9",
            },
            {
              name: "Molten Chocolate Cake",
              desc: "Sea salt, vanilla bean gelato",
              price: "$8",
            },
          ].map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold leading-6 tracking-tight">
                  {item.name}
                </h3>
                <span className="shrink-0 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300 px-3 py-1 text-xs font-semibold">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Story</h2>
            <p className="mt-4 text-black/70 dark:text-white/70">
              Rustic Spoon started as a backyard pizza pop‑up and grew into the bistro we
              always wanted in our neighborhood: warm, welcoming, and seasonally inspired.
              We cook over flame, pour thoughtfully, and make room at the table for everyone.
            </p>
            <p className="mt-3 text-black/70 dark:text-white/70">
              Vegetarian, vegan, and gluten‑free options available daily.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
            <h3 className="text-lg font-semibold tracking-tight">Hours</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Mon–Thu: 5:00 PM – 10:00 PM</li>
              <li>Fri: 5:00 PM – 11:00 PM</li>
              <li>Sat: 4:00 PM – 11:00 PM</li>
              <li>Sun: 4:00 PM – 9:00 PM</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold tracking-tight">Contact</h3>
            <p className="mt-2 text-sm">
              <a className="underline underline-offset-4" href="tel:+11234567890">
                (123) 456‑7890
              </a>
              {" "}•{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:hello@rusticspoon.example"
              >
                hello@rusticspoon.example
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Visit Us</h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            123 Market Street, Suite 4 • Your City, YC 12345
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-amber-600 text-white px-5 py-3 text-sm font-medium hover:bg-amber-700"
              href="https://www.google.com/maps/search/?api=1&query=123+Market+Street+Your+City"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
            </a>
            <a
              className="rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
              href="mailto:hello@rusticspoon.example?subject=Reservation%20Request"
            >
              Request a Reservation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/70 dark:text-white/70 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rustic Spoon. All rights reserved.</p>
          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
