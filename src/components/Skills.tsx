import { motion } from "framer-motion";

const skills = [
  {
    category: "Leadership",
    items: ["Technical Leadership", "Team Management", "Strategic Planning", "Mentoring", "Hiring", "Onboarding"]
  },
  {
    category: "Technical",
    items: ["System Architecture", "Agile Methodologies", "Design Review", "Incident Management"]
  },
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Golang", "PHP"]
  },
  {
    category: "Data",
    items: ["MySQL", "Postgres", "Redis", "Elasticsearch", "Kafka"]
  },
  {
    category: "APIs",
    items: ["REST", "GraphQL", "gRPC", "SOAP"]
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "GCP", "Kubernetes", "Datadog", "Jenkins"]
  },
  {
    category: "Sales Engineering",
    items: ["Salesforce", "Hubspot", "Apollo.io", "Google Ads", "SEO",]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Core Competencies
        </motion.h2>
        <div className="space-y-12">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2 }}
              className="bg-purple-50 dark:bg-gray-900 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 dark:border-purple-900"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;