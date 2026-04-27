const base = import.meta.env.BASE_URL;

const links = [
  { label: "linkedin", href: "https://www.linkedin.com/in/jstruzik/" },
  { label: "github", href: "https://github.com/jstruzik/" },
  { label: "email", href: "mailto:jacobstruzik@gmail.com" },
];

const projects = [
  {
    name: "Coldrays",
    href: "https://coldrays.com",
    meta: "COO and founder",
    text: "Started and operated a climate tech business outside traditional software, including GTM, operations, product development, and energy data modeling.",
  },
  {
    name: "TravelGPT",
    href: "https://travelgpt.io",
    meta: "AI travel planning",
    text: "Built an AI-driven travel planning product with TypeScript and Next.js.",
  },
  {
    name: "Speek",
    href: "https://github.com/jstruzik/Speek",
    meta: "speech transcription",
    text: "Built a speech transcription app exploring practical voice-to-text workflows.",
  },
  {
    name: "Posit Package Manager",
    href: "https://posit.co",
    meta: "current role",
    text: "Leading engineering work on package infrastructure used by data science teams.",
  },
  {
    name: "OpenBeta",
    href: "https://openbeta.io",
    meta: "open source",
    text: "Contributed to an open source climbing guidebook application.",
  },
  {
    name: "Robin",
    href: "https://robinpowered.com",
    meta: "workplace SaaS",
    text: "Helped scale teams, systems, reliability, and product delivery across years of engineering leadership.",
  },
];

const history = [
  { label: "Senior Engineering Manager, Posit (RStudio)", current: true },
  { label: "COO and Founder, Coldrays" },
  { label: "Director of Engineering, Robin" },
  { label: "Staff Software Engineer, Robin" },
  { label: "Software Engineer, One Mighty Roar" },
];

const hobbies = [
  "professional dodgeball player",
  "rock climber",
  "hiker / mountaineer",
  "biker",
  "traveler",
  "Dota 2 player",
];

const outsidePhotos = [
  {
    src: `${base}rockclimb2.png`,
    alt: "Jake rock climbing",
  },
  {
    src: `${base}dodgeball2.png`,
    alt: "Jake playing dodgeball",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#151515]">
      <header className="border-b-4 border-[#151515] bg-[#fffbf0]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:py-10">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-normal text-[#42526b]">
              jake struzik / engineering leadership / ai adoption
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-black leading-[0.95] md:text-7xl">
              I help engineering teams adapt without losing their judgment.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-snug md:text-2xl">
              Engineering leader at Posit with 14+ years working across tech, startups,
              and even starting my own sustainable materials company. I build teams, systems,
              and operating habits for organizations moving into AI-assisted work.
            </p>
          </div>

          <div className="border-4 border-[#151515] bg-[#dce7f7] p-3">
            <img
              src={`${base}jake2.png`}
              alt="Jake Struzik"
              className="aspect-[4/5] w-full border-4 border-[#151515] object-cover"
            />
            <div className="mt-3 flex flex-wrap gap-3 font-mono text-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="border-2 border-[#151515] bg-[#fffbf0] px-2 py-1 underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl border-b-4 border-[#151515] px-4 py-10 md:grid-cols-[220px_1fr] md:px-6">
        <h2 className="font-mono text-lg uppercase">Work</h2>
        <div className="mt-5 md:mt-0">
          <p className="max-w-3xl font-serif text-3xl font-bold leading-tight md:text-5xl">
            I build teams that can change how they work.
          </p>
          <p className="mt-5 max-w-3xl text-xl leading-snug">
            My work has moved from writing systems, to leading teams, to helping engineering
            organizations adapt. Right now that means making AI practical across the org:
            shared habits, better review, faster feedback, and a culture where a working
            prototype beats another alignment meeting.
          </p>
          <ol className="mt-6 grid gap-2 font-mono text-sm">
            {history.map((item) => (
              <li
                key={item.label}
                className="border-l-4 border-[#151515] bg-white px-3 py-2"
              >
                {item.current ? <strong>{item.label}</strong> : item.label}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl border-b-4 border-[#151515] px-4 py-10 md:grid-cols-[220px_1fr] md:px-6">
        <h2 className="font-mono text-lg uppercase">Projects</h2>
        <div className="mt-5 border-4 border-[#151515] bg-[#fffbf0] md:mt-0">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid border-b-4 border-[#151515] p-4 text-[#151515] last:border-b-0 hover:bg-[#dce7f7] md:grid-cols-[190px_1fr]"
            >
              <p className="font-mono text-sm uppercase">{project.meta}</p>
              <div>
                <h3 className="font-serif text-3xl font-black leading-none underline">
                  {project.name}
                </h3>
                <p className="mt-2 text-lg leading-snug">{project.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl px-4 py-10 md:grid-cols-[220px_1fr] md:px-6">
        <h2 className="font-mono text-lg uppercase">Outside Work</h2>
        <div className="mt-5 md:mt-0">
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="border-4 border-[#151515] bg-[#e7e0d2] px-3 py-2 font-mono text-sm uppercase"
              >
                {hobby}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-xl leading-snug">
            I spend a lot of time outside: climbing, hiking, mountaineering, biking, and
            traveling. I also play professional dodgeball, which is exactly as unusual and
            competitive as it sounds.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {outsidePhotos.map((photo) => (
              <figure key={photo.src} className="border-4 border-[#151515] bg-[#fffbf0] p-3">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-[4/3] w-full border-4 border-[#151515] object-cover"
                />
              </figure>
            ))}
          </div>
          <p className="mt-10 font-mono text-sm uppercase">Seattle / currently</p>
        </div>
      </section>
    </main>
  );
};

export default Index;
