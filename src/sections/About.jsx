import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe"; // ✅ lowercase 'g'
import { Frameworks } from "../components/Frameworks"; // ✅ lowercase 'f'

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Us</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 - Founders Intro */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, We are Klyrovia Analytics</p>
            <p className="subtext">
              Founded by <a href="https://www.linkedin.com/in/aman-tripathi27/" className="underline text-blue-400" target="_blank">Aman Tripathi</a> and <a href="https://www.linkedin.com/in/varnica-sharma/" className="underline text-pink-300" target="_blank">Varnica Sharma</a>, we are a futuristic AI & Data Consulting firm committed to delivering intelligent, scalable, and ethical data-driven solutions for real-world problems.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Values */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-3xl font-bold text-white mb-4">What We Value</p>
            <ul className="text-neutral-300 list-disc list-inside text-center">
              <li>Explainable AI</li>
              <li>Outcome-Oriented Design</li>
              <li>Ethical & Secure Data Use</li>
              <li>Interdisciplinary Thinking</li>
            </ul>
          </div>
        </div>

        {/* Grid 3 - Time Zone */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in India 🇮🇳, open to remote work and global collaborations 🌍
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - LinkedIn CTA */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Ready to collaborate on impactful data solutions?
            </p>
            <a
              href="https://www.linkedin.com/company/klyrovia-analytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all font-medium"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              We work with Python, R Studio, Streamlit, Power BI, Scikit-learn, MySql and other cutting-edge tools to build scalable and intelligent solutions.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
