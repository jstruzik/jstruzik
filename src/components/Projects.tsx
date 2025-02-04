import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Robin Office Management",
    description: "Led the development of a scalable enterprise office management platform serving millions of users.",
    tags: ["Architecture", "SaaS", "Leadership"],
    image: "/robin.jpeg",
    url: "https://robinpowered.com"
  },
  {
    title: "TravelGPT",
    description: "Developed an AI-driven platform using scalable backend systems to generate personalized travel itineraries, integrating APIs with reliable performance.",
    tags: ["AI", "Typescript", "NextJS"],
    image: "/travelgpt.png",
    url: "https://travelgpt.io"
  },
  {
    title: "Coldrays",
    description: "Led technology, website, and operations of our extreme-heat startup Coldrays.",
    tags: ["Energy Tech", "Startup", "Sustainability"],
    image: "/coldrays.jpg",
    url: "https://coldrays.com"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-blue-50 dark:bg-gray-900">
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
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-blue-100 dark:border-blue-900 hover:scale-[1.02]">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;