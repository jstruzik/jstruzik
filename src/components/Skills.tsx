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
    items: ["Salesforce", "Hubspot", "Apollo.io", "Google Ads", "SEO"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Core Competencies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="bg-blue-50 dark:bg-gray-900 rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 text-sm bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900"
                  >
                    {skill}
                  </motion.span>
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