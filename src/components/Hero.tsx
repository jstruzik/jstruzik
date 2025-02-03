import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 mb-6 text-sm tracking-wider uppercase bg-black/5 rounded-full"
        >
          Software Engineering Leader
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Building the future through technology and leadership
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 mb-8 leading-relaxed"
        >
          Software Engineering Director with expertise in building and leading high-performing teams, 
          driving technical innovation, and delivering impactful solutions.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;