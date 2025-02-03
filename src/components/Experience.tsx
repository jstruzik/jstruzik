import { motion } from "framer-motion";

const experiences = [
  {
    title: "Engineering Director",
    company: "Tech Innovation Corp",
    period: "2020 - Present",
    description: "Leading multiple engineering teams, driving technical strategy, and fostering innovation culture. Responsible for architecture decisions and technology roadmap across multiple products."
  },
  {
    title: "Engineering Manager",
    company: "Software Solutions Inc",
    period: "2017 - 2020",
    description: "Managed cross-functional teams, implemented agile methodologies, and improved delivery processes. Reduced deployment time by 40% and increased team velocity by 25%."
  },
  {
    title: "Senior Software Engineer",
    company: "Digital Ventures",
    period: "2014 - 2017",
    description: "Led technical implementations, mentored junior developers, and architected scalable solutions. Implemented microservices architecture that improved system reliability by 99.9%."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800"
            >
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-2 shadow-lg" />
              <div className="mb-1 text-sm font-medium text-purple-600 dark:text-purple-400">{exp.period}</div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
              <div className="text-purple-700 dark:text-purple-300 mb-2 font-medium">{exp.company}</div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;