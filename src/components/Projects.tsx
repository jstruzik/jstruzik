import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Enterprise Platform",
    description: "Led the development of a scalable enterprise platform serving millions of users.",
    tags: ["Architecture", "Cloud", "Leadership"]
  },
  {
    title: "AI Integration",
    description: "Implemented machine learning solutions to optimize business processes.",
    tags: ["AI/ML", "Python", "Innovation"]
  },
  {
    title: "Digital Transformation",
    description: "Spearheaded company-wide digital transformation initiative.",
    tags: ["Strategy", "Technology", "Change Management"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;