import { useState } from "react";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectDetails";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);
  const [modalData, setModalData] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <h2 className="text-heading">Our Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
          setModalData={setModalData}
        />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover rounded-xl shadow-xl pointer-events-none h-72 md:h-96 w-[32rem] md:w-[42rem]"
          src={preview}
          style={{ x: springX, y: springY }}
          alt="Project Preview"
        />
      )}

      {modalData && (
        <ProjectModal project={modalData} onClose={() => setModalData(null)} />
      )}
    </section>
  );
};

export default Projects;
