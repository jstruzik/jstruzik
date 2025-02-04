import { motion } from "framer-motion";
import { Building2, Code2, Laptop, Rocket, Users } from "lucide-react";

const experiences = [
  {
    title: "COO and Founder",
    company: "Coldrays",
    companyUrl: "https://coldrays.com",
    period: "2024 - Present",
    description: "Launched a technology-driven startup, leveraging automation and scalable solutions to address environmental challenges. Developed cross-functional strategies to align product development with business goals, driving adoption of innovative materials across diverse markets.",
    icon: Rocket
  },
  {
    title: "Software Engineering Consultant",
    company: "PineCode LLC",
    companyUrl: "https://pinecode.me",
    period: "2024 - Present",
    description: "Founder of a consulting agency specializing in designing, testing, and delivering software products that meet and exceed client expectations. Partner with clients to identify user needs, implement efficient solutions, and ensure successful product launches.",
    icon: Laptop
  },
  {
    title: "Director of Engineering",
    company: "Robinpowered",
    companyUrl: "https://robinpowered.com",
    period: "2023 - 2024",
    description: "Led and scaled an engineering organization of five cross-functional teams, driving multi-million dollar ARR growth, post-acquisition integration, and AI adoption while improving system reliability and team execution.",
    icon: Building2
  },
  {
    title: "Senior Engineering Manager",
    company: "Robinpowered",
    companyUrl: "https://robinpowered.com",
    period: "2019 - 2023",
    description: "Managed and mentored 10+ engineers, driving team transformation, hiring strategy, and cross-functional collaboration while fostering innovation through leadership meetups and hackathons.",
    icon: Users
  },
  {
    title: "Staff Software Engineer",
    company: "Robinpowered",
    companyUrl: "https://robinpowered.com",
    period: "2015 - 2023",
    description: "Led backend engineering, mentoring junior engineers, improving architecture alignment, and delivering 50+ API features across multiple programming languages to scale core infrastructure.",
    icon: Code2
  },
  {
    title: "Software Engineer",
    company: "One Mighty Roar",
    companyUrl: "https://onemightyroar.com",
    period: "2013 - 2015",
    description: "Worked for several agency clients at once delivering modernized web applications and hardware implementations in Node, AngularJS, and PHP to help the company approach its first $1M in annual revenue.",
    icon: Code2
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
              className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2 shadow-lg" />
              <div className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">{exp.period}</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
              </div>
              <a 
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-2 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <exp.icon className="w-4 h-4" />
                {exp.company}
              </a>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;