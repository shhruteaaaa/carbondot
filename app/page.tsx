import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section
  id="home"
  className="relative h-screen overflow-hidden"
>

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* ORBIT RINGS */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-[500px] w-[500px] rounded-full border border-green-500/20" />
          <div className="absolute h-[800px] w-[800px] rounded-full border border-green-500/10" />
          <div className="absolute h-[1100px] w-[1100px] rounded-full border border-green-500/5" />
        </div>

        {/* FLOATING DOTS */}
        <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <div className="absolute left-[80%] top-[30%] h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <div className="absolute left-[25%] top-[75%] h-3 w-3 rounded-full bg-green-500 animate-pulse" />
        <div className="absolute left-[70%] top-[80%] h-3 w-3 rounded-full bg-green-500 animate-pulse" />
        <div className="absolute left-[40%] top-[20%] h-2 w-2 rounded-full bg-green-400 animate-pulse" />

        {/* NAVBAR */}
<nav className="fixed top-4 left-1/2 z-50 flex w-[90%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-white/15 px-5 py-1 backdrop-blur-3xl shadow-[0_0_30px_rgba(255,255,255,0.08)]">
          <a href="#home">
          <Image
            src="/logo.png"
            alt="CarbonDot"
            width={500}
            height={200}
className="h-20 md:h-15 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"          />
          </a>

          <div className="flex items-center gap-8 text-sm">
            <a
  href="#home"
  className="text-white/80 transition hover:text-green-400"
>
  Home
</a>

  <a
    href="#technology"
    className="text-white/80 transition hover:text-green-400"
  >
    Technology
  </a>

  <a
    href="#industries"
    className="text-white/80 transition hover:text-green-400"
  >
    Industries
  </a>

  <a
    href="#impact"
    className="text-white/80 transition hover:text-green-400"
  >
    Impact
  </a>

  <a
    href="#contact"
    className="rounded-full border border-green-500/40 px-4 py-2 text-green-400 transition hover:bg-green-500 hover:text-black"
  >
    Contact
  </a>

</div>

        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

          <div className="mb-6 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-0.5 text-sm text-green-400">
            CLEANING THE AIR
          </div>

          <h1 className="max-w-6xl text-6xl font-bold leading-tight md:text-8xl">
            Carbon Capture
            <br />
            <span className="text-green-500">
              Made Practical
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-300">
            Transforming industrial emissions into sustainable opportunities
            through innovative carbon capture and utilization technologies.
          </p>

          <div className="mt-10 flex gap-4">
            <a
  href="#technology"
  className="rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
>
  Explore Technology
</a>

            <a
  
  href="mailto:Carbondotpvtltd@gmail.com"
  className="inline-flex items-center justify-center rounded-full border border-green-500/40 px-8 py-4 font-semibold text-green-400 transition hover:bg-green-500 hover:text-black"
>
  Contact
</a>

          </div>

        </div>
      </section>
    

      {/* TECHNOLOGY SECTION */}
      <section id="technology" className="bg-black px-8 py-32">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-4 text-center text-5xl font-bold">
            How CarbonDot Works
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-center text-gray-400">
            Turning industrial emissions into valuable resources through
            advanced carbon capture technology.
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-4 text-4xl">01</div>

              <h3 className="mb-4 text-2xl font-bold text-green-400">
                Capture
              </h3>

              <p className="text-gray-400">
                CarbonDot captures CO₂ directly from industrial emission
                sources before it enters the atmosphere.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-4 text-4xl">02</div>

              <h3 className="mb-4 text-2xl font-bold text-green-400">
                Process
              </h3>

              <p className="text-gray-400">
                Captured carbon is purified and transformed into
                commercially valuable materials.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-4 text-4xl">03</div>

              <h3 className="mb-4 text-2xl font-bold text-green-400">
                Impact
              </h3>

              <p className="text-gray-400">
                Reduce emissions while generating economic value from
                captured carbon.
              </p>
            </div>

          </div>

        </div>

      </section>
      <section id="impact" className="relative overflow-hidden py-32">

  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/nature.mp4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-7xl px-8">

    <div className="max-w-3xl">
      <p className="mb-4 text-green-500">
        ENVIRONMENTAL IMPACT
      </p>

      <h2 className="mb-8 text-6xl font-bold">
        From Emissions
        <br />
        To Regeneration
      </h2>

      <p className="mb-12 text-xl text-gray-300">
        CarbonDot transforms industrial emissions into valuable resources
        while supporting a cleaner, greener future.
      </p>

      <div className="grid grid-cols-2 gap-10 max-w-2xl">

  <div>
    <h3 className="text-2xl font-bold text-green-500">
      Scalable Carbon Capture
    </h3>

    <p className="mt-2 text-gray-300">
      Designed for industrial-scale deployment.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-green-500">
      High Efficiency
    </h3>

    <p className="mt-2 text-gray-300">
      Focused on maximizing carbon separation.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-green-500">
      Industry Collaboration
    </h3>

    <p className="mt-2 text-gray-300">
      Built for partnerships across sectors.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-green-500">
      Economic Value
    </h3>

    <p className="mt-2 text-gray-300">
      Turning emissions into valuable resources.
    </p>
  </div>

</div> {/* closes grid */}

</div> {/* closes max-w-3xl */}

</div> {/* closes relative z-10 container */}

</section>

{/* INDUSTRIES SECTION */}
<section id="industries" className="bg-black px-8 py-32">

  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-center text-green-500">
      INDUSTRIES
    </p>

    <h2 className="mb-6 text-center text-5xl font-bold">
      Industries We Serve
    </h2>

    <p className="mx-auto mb-20 max-w-3xl text-center text-gray-400">
      CarbonDot helps high-emission industries reduce their carbon footprint
      while creating economic value from captured emissions.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {/* Steel */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">

        <div className="mb-4 text-5xl"></div>

        <h3 className="mb-4 text-2xl font-bold">
          Steel Plants
        </h3>

        <p className="text-gray-400">
          Capture emissions from blast furnaces and steel manufacturing
          processes.
        </p>

      </div>

      {/* Cement */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">

        <div className="mb-4 text-5xl"></div>

        <h3 className="mb-4 text-2xl font-bold">
          Cement Industry
        </h3>

        <p className="text-gray-400">
          Reduce CO₂ emissions generated during cement production.
        </p>

      </div>

      {/* Chemical */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">

        <div className="mb-4 text-5xl"></div>

        <h3 className="mb-4 text-2xl font-bold">
          Chemical Plants
        </h3>

        <p className="text-gray-400">
          Transform industrial emissions into commercially valuable products.
        </p>

      </div>

      {/* Energy */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">

        <div className="mb-4 text-5xl"></div>

        <h3 className="mb-4 text-2xl font-bold">
          Power Generation
        </h3>

        <p className="text-gray-400">
          Capture carbon from thermal power plants and energy facilities.
        </p>

      </div>

    </div>

  </div>

</section>
{/* TECHNOLOGY SECTION */}
<section id="technology" className="bg-black px-8 py-32">

  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-center text-green-500">
      TECHNOLOGY
    </p>

    <h2 className="mb-4 text-center text-5xl font-bold">
      How The Technology Works
    </h2>

    <p className="mx-auto mb-20 max-w-3xl text-center text-gray-400">
      Turning industrial emissions into valuable resources through a streamlined carbon utilization process.
    </p>

    <div className="mx-auto max-w-4xl space-y-6">

      {/* STEP 1 */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-3 text-3xl font-bold text-green-400">
          Industrial Emissions
        </h3>

        <p className="text-gray-400">
          CO₂-rich emissions are captured directly from industrial facilities.
        </p>
      </div>

      <div className="text-center text-5xl text-green-500">
        ↓
      </div>

      {/* STEP 2 */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-3 text-3xl font-bold text-green-400">
          Carbon Capture
        </h3>

        <p className="text-gray-400">
          Proprietary technology separates carbon efficiently from emissions.
        </p>
      </div>

      <div className="text-center text-5xl text-green-500">
        ↓
      </div>

      {/* STEP 3 */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-3 text-3xl font-bold text-green-400">
          Processing
        </h3>

        <p className="text-gray-400">
          Captured carbon is purified and prepared for utilization.
        </p>
      </div>

      <div className="text-center text-5xl text-green-500">
        ↓
      </div>

      {/* STEP 4 */}
      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-3 text-3xl font-bold text-green-400">
          Valuable Products
        </h3>

        <p className="text-gray-400">
          Carbon is transformed into commercially valuable materials.
        </p>
      </div>

    </div>

  </div>

</section>

{/* TRADITIONAL VS CARBONDOT */}
<section className="bg-black px-8 py-32">

  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-center text-green-500">
      COMPARISON CHART
    </p>

    <h2 className="mb-6 text-center text-5xl font-bold">
      Traditional vs CarbonDot
    </h2>

    <p className="mx-auto mb-20 max-w-3xl text-center text-gray-400">
      A new approach to carbon capture focused on value creation rather than just carbon storage.
    </p>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* LEFT */}
      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-10 backdrop-blur-xl">

        <h3 className="mb-8 text-3xl font-bold text-red-400">
          Traditional Solutions
        </h3>

        <div className="space-y-6">

          <div className="rounded-2xl border border-red-500/10 p-5">
            High Operating Cost
          </div>

          <div className="rounded-2xl border border-red-500/10 p-5">
            Carbon Storage Only
          </div>

          <div className="rounded-2xl border border-red-500/10 p-5">
            Limited Revenue Potential
          </div>

          <div className="rounded-2xl border border-red-500/10 p-5">
            Complex Deployment
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-10 backdrop-blur-xl">

        <h3 className="mb-8 text-3xl font-bold text-green-400">
          CarbonDot
        </h3>

        <div className="space-y-6">

          <div className="rounded-2xl border border-green-500/20 p-5">
           Lower Operating Cost
          </div>

          <div className="rounded-2xl border border-green-500/20 p-5">
            Carbon Utilization
          </div>

          <div className="rounded-2xl border border-green-500/20 p-5">
            Revenue Generation
          </div>

          <div className="rounded-2xl border border-green-500/20 p-5">
            Modular & Scalable
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* WBCC TECHNOLOGY */}
<section className="bg-black px-8 py-32">

  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-center text-green-500">
      OUR TECHNOLOGY
    </p>

    <h2 className="mb-6 text-center text-5xl font-bold">
      Water-Based Carbon Capturing (WBCC)
    </h2>

    <p className="mx-auto mb-20 max-w-3xl text-center text-gray-400">
      Our proprietary WBCC technology captures carbon dioxide using an
      innovative water-based process designed to reduce costs while improving scalability.
    </p>

    <div className="grid gap-10 lg:grid-cols-4">

      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-4 text-2xl font-bold text-green-400">
          Lower CAPEX
        </h3>

        <p className="text-gray-400">
          Reduced infrastructure and deployment costs.
        </p>
      </div>

      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-4 text-2xl font-bold text-green-400">
          Lower OPEX
        </h3>

        <p className="text-gray-400">
          Efficient operation with lower maintenance requirements.
        </p>
      </div>

      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-4 text-2xl font-bold text-green-400">
          Scalable Design
        </h3>

        <p className="text-gray-400">
          Suitable for facilities of all sizes.
        </p>
      </div>

      <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-300 hover:border-green-500/40 hover:bg-green-500/10">
        <h3 className="mb-4 text-2xl font-bold text-green-400">
          Patent Published
        </h3>

        <p className="text-gray-400">
          Built on innovative published intellectual property.
        </p>
      </div>

    </div>

  </div>

</section>
{/* CTA SECTION */}
<section id="contact" className="relative overflow-hidden bg-black px-8 py-40">

  {/* GREEN GLOW */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-5xl text-center">

    <p className="mb-4 text-green-500">
      GET STARTED
    </p>

    <h2 className="mb-8 text-6xl font-bold">
      Ready To Build
      <br />
      A Cleaner Future?
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-300">
      Partner with CarbonDot to accelerate industrial decarbonization
      and transform emissions into opportunities.
    </p>

    <div className="flex justify-center gap-4">

   <a
  href="mailto:Carbondotpvtltd@gmail.com"
  className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
>
  Contact Us
</a>
      <button className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10">
        Learn More
      </button>

    </div>

  </div>

</section>
{/* FOOTER */}
<footer className="border-t border-white/10 bg-black px-8 py-12">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

    <div>
      <h3 className="text-2xl font-bold">
        Carbon<span className="text-green-500">Dot</span>
      </h3>

      <p className="mt-2 text-gray-500">
        Cleaning The Air.
      </p>
    </div>

    <div className="flex gap-8 text-gray-400">

      <a href="#">Technology</a>

      <a href="#">Industries</a>

      <a href="#">Contact</a>

    </div>

  </div>

</footer>
    </main>
  );
}