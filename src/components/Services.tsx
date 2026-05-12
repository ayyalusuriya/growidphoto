import { Heart, Music, Sparkles, Video } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "For couples who want their wedding to feel straight out of a film.",
  },
  {
    icon: Music,
    title: "Concerts",
    description:
      "Where music, visuals, and atmosphere come together perfectly.",
  },
  {
    icon: Sparkles,
    title: "Events",
    description:
      "Making every event look as good as it felt in real life.",
  },
  {
    icon: Video,
    title: "Short Films",
    description:
      "Crafting high-end films with cinematic direction, clean visuals, and editorial-inspired grading.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-40 px-8 md:px-16 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <div className="text-center mb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary-gold mb-4 block tracking-[0.15em] text-sm uppercase"
        >
          THE EXPERTISE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-4xl md:text-5xl text-white uppercase font-bold"
        >
          CRAFTED SERVICES
        </motion.h2>

        {/* Decorative Gold Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="h-px w-24 bg-primary-gold mx-auto mt-6 origin-center"
        />
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{
              y: -14,
              transition: { duration: 0.35 },
            }}
            className="glass-panel p-10 flex flex-col gap-6 interactive-target group hover:border-primary-gold/30 transition-all duration-500 rounded-xl relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-primary-gold/0 group-hover:bg-primary-gold/5 transition-all duration-500 rounded-xl pointer-events-none" />

            {/* Icon */}
            <div className="w-12 h-12 bg-primary-gold/10 rounded-full flex items-center justify-center group-hover:bg-primary-gold transition-colors duration-500 z-10">
              <service.icon className="text-primary-gold w-6 h-6 group-hover:text-black transition-colors duration-500" />
            </div>

            {/* Title */}
            <h3 className="font-display text-white text-2xl uppercase font-bold z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed z-10">
              {service.description}
            </p>

            {/* Corner Accent */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary-gold/20 to-transparent rounded-tl-3xl pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}