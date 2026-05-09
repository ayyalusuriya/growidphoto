import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    text: "GROWID didn't just photograph our wedding; they captured the invisible tension and joy of the day. The results are nothing short of a masterpiece. It's high-art in wedding form.",
    author: "MADHESH",
    location: "GROWID WEDDINGS"
  },
  {
    text: "The most professional team I've ever worked with. The lighting, the composition, and the final delivery were all world-class. Highly recommended for any premium brand.",
    author: "ALWAR BALAJI",
    location: "IPHONE Shooter"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] as any } },
    exit: (d: number) => ({ opacity: 0, x: d * -40, transition: { duration: 0.35 } }),
  };

  return (
    <section className="py-24 md:py-40 bg-zinc-950/20 overflow-hidden">
      <div className="px-8 md:px-16 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 md:mb-24 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-primary-gold text-xs uppercase tracking-[0.2em] mb-2 block">
              CLIENT PRAISE
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold uppercase">
              THE WORDS
            </h2>
          </motion.div>

          {/* NAV BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex gap-4"
          >
            <motion.button
              onClick={prev}
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-primary-gold hover:text-primary-gold transition-all"
            >
              <span className="sr-only">Previous testimonial</span>
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={next}
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-primary-gold hover:text-primary-gold transition-all"
            >
              <span className="sr-only">Next testimonial</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass-panel p-10 md:p-16 relative rounded-2xl max-w-4xl"
            >
              {/* BIG QUOTE ICON */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Quote className="text-primary-gold/10 w-24 h-24 absolute top-8 right-8 md:w-32 md:h-32" />
              </motion.div>

              {/* TEXT */}
              <p className="font-sans text-lg md:text-2xl lg:text-3xl text-white mb-10 italic leading-relaxed font-light relative z-10">
                "{testimonials[index].text}"
              </p>

              {/* AUTHOR */}
              <div className="flex items-center gap-4">
                <div className="w-px h-8 bg-primary-gold/40" />
                <div>
                  <h5 className="font-display font-bold text-white uppercase tracking-[0.2em] text-sm md:text-base">
                    {testimonials[index].author}
                  </h5>
                  <span className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-widest mt-1 block">
                    {testimonials[index].location}
                  </span>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                    aria-label={`Testimonial ${i + 1}`}
                    animate={{ width: i === index ? 24 : 8, backgroundColor: i === index ? '#fec903' : 'rgba(255,255,255,0.2)' }}
                    transition={{ duration: 0.3 }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}