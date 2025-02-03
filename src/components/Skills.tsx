import { motion } from "framer-motion";

const skills = [
  "Technical Leadership",
  "Team Management",
  "System Architecture",
  "Agile Methodologies",
  "Cloud Computing",
  "Strategic Planning",
  "Full Stack Development",
  "DevOps",
  "Project Management",
  "Mentoring"
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;