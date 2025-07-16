import { Particles } from "../components/Particles";

const Contact = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[60vh] c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-6 p-10 mx-auto text-center border border-white/10 rounded-3xl shadow-lg bg-primary">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          Let's Collaborate
        </h2>

        <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
          Whether you have a project idea or just want to connect — we're always open to meaningful conversations that lead to impactful solutions.
        </p>

        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4 sm:flex-row">
          <a
            href="mailto:klyroviaanalytics@gmail.com"
            className="px-6 py-3 text-base font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-lavender to-royal shadow-md hover:scale-105 hover:shadow-indigo-500/30"
          >
            📧 Email Us
          </a>

          <a
            href="https://www.linkedin.com/in/klyrovia-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-base font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 shadow-md hover:scale-105 hover:shadow-purple-500/30"
          >
            💼 Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
