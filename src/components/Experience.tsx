import { motion } from "framer-motion";

const experiences = [
  {
    title: "Engineering Director",
    company: "Tech Innovation Corp",
    period: "2020 - Present",
    description: "Leading multiple engineering teams, driving technical strategy, and fostering innovation culture."
  },
  {
    title: "Engineering Manager",
    company: "Software Solutions Inc",
    period: "2017 - 2020",
    description: "Managed cross-functional teams, implemented agile methodologies, and improved delivery processes."
  },
  {
    title: "Senior Software Engineer",
    company: "Digital Ventures",
    period: "2014 - 2017",
    description: "Led technical implementations, mentored junior developers, and architected scalable solutions."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l border-gray-200"
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-2" />
              <div className="mb-1 text-sm text-gray-500">{exp.period}</div>
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <div className="text-gray-600 mb-2">{exp.company}</div>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;