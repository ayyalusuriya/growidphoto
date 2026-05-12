import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-zinc-950/20 overflow-hidden">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p
            className="
              text-primary-gold
              uppercase
              tracking-[0.3em]
              text-xs
              md:text-sm
              mb-4
            "
          >
            Testimonials
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              text-white
              uppercase
              tracking-tight
            "
          >
            Words From <br />

            <span className="text-white/40 italic">
              Our Clients
            </span>
          </h2>
        </motion.div>

        {/* TESTIMONIAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            glass-panel
            p-8
            md:p-16
            relative
            rounded-3xl
            max-w-4xl
            mx-auto
            overflow-hidden
          "
        >
          {/* BIG QUOTE ICON */}
          <Quote
            className="
              text-primary-gold/10
              w-24
              h-24
              absolute
              top-6
              right-6
              md:w-32
              md:h-32
            "
          />

          {/* TESTIMONIAL TEXT */}
          <p
            className="
              text-zinc-200
              font-san-serif
              text-lg
              md:text-2xl
              leading-relaxed
              font-light
              relative
              z-10
              max-w-3xl
            "
          >
            “Delivering high-quality visual 
             experiences on a low budget
             without compromising the final output.”
          </p>

          {/* CLIENT INFO */}
          <div className="mt-10 relative z-10">

            <h4
              className="
                text-white
                text-xl
                md:text-2xl
                font-extrabold
                font-display
                mb-2
                uppercase
                tracking-wide
              "
            >
              Madhesh
            </h4>

            <p
              className="
                text-primary-gold
                uppercase
                tracking-[0.2em]
                text-xs
                mt-2
              "
            >
              Wedding Client
            </p>

          </div>

          {/* GLOW EFFECT */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-primary-gold/5
              to-transparent
              pointer-events-none
            "
          />
        </motion.div>

      </div>
    </section>
  );
}