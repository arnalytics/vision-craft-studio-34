import { motion } from "framer-motion";

const experiences = [
    { date: "2025 - present", title: "phd student @ ub-cvc" },
    { date: "2023 - present", title: "co-founder @ sinfon.ia" },
    { date: "2023 - 2024", title: "software developer @ seat" },
    { date: "2020 - present", title: "basketball coach" },
];

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center px-8 pb-32">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-text-muted mb-12 uppercase tracking-wide"
      >
        Experience
      </motion.h3>
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8 py-8 border-b border-foreground/10 hover:border-foreground/30 transition-colors duration-300">
            <span className="text-sm text-text-muted font-mono w-40 shrink-0 text-left">
              {exp.date}
            </span>
            <span className="text-xl md:text-2xl leading-snug text-foreground/80 hover:text-foreground transition-colors text-left max-w-2xl">
              {exp.title}
            </span>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;
