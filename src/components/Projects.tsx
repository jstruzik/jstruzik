import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Enterprise Platform Modernization",
    description: "Led the development of a scalable enterprise platform serving millions of users. Implemented microservices architecture and modern DevOps practices.",
    tags: ["Architecture", "Cloud", "Leadership"]
  },
  {
    title: "AI-Powered Analytics Suite",
    description: "Implemented machine learning solutions to optimize business processes. Resulted in 30% improvement in prediction accuracy and 25% cost reduction.",
    tags: ["AI/ML", "Python", "Innovation"]
  },
  {
    title: "Digital Transformation Initiative",
    description: "Spearheaded company-wide digital transformation initiative. Successfully migrated legacy systems to modern cloud architecture.",
    tags: ["Strategy", "Technology", "Change Management"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-purple-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Key Projects
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
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-purple-100 dark:border-purple-900">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium"
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