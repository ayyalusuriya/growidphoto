import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section
      className="
        py-24
        md:py-40
        bg-zinc-950/20
        overflow-hidden
        relative
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-primary-gold/5
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          px-6
          md:px-16
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >
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
              leading-none
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
          whileHover={{
            y: -6,
            scale: 1.01,
          }}
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
            border
            border-white/5
            group
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
              transition-all
              duration-500
              group-hover:text-primary-gold/20
            "
          />

          {/* STAR RATING */}
          <div
            className="
              flex
              items-center
              gap-1
              mb-8
              relative
              z-10
            "
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="
                  w-4
                  h-4
                  fill-primary-gold
                  text-primary-gold
                "
              />
            ))}
          </div>

          {/* TESTIMONIAL TEXT */}
          <p
            className="
              text-zinc-200
              font-sans
              text-lg
              md:text-2xl
              leading-relaxed
              font-light
              relative
              z-10
              max-w-3xl
            "
          >
            “The whole shoot felt really
            comfortable and easy, and honestly,
            the final photos turned out even
            better than we expected. Every
            picture looked so clean, classy,
            and beautifully edited.”
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
              MADHESH
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
              opacity-70
              pointer-events-none
            "
          />

          {/* HOVER LIGHT */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-gradient-to-tr
              from-primary-gold/10
              to-transparent
              pointer-events-none
            "
          />
        </motion.div>
      </div>
    </section>
  );
}