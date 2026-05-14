import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-24 md:py-40 px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}   
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-white/5 p-12 md:p-32 text-center relative overflow-hidden group rounded-3xl"
      >
        {/* Background glow — pulses on hover */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-gold blur-[140px] pointer-events-none"
        />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-gold/5 blur-[120px] group-hover:bg-primary-gold/10 transition-all duration-1000 pointer-events-none"></div>

        {/* Animated corner lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-8 left-8 w-12 h-px bg-primary-gold/40 origin-left"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute top-8 left-8 w-px h-12 bg-primary-gold/40 origin-top"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-8 right-8 w-12 h-px bg-primary-gold/40 origin-right"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute bottom-8 right-8 w-px h-12 bg-primary-gold/40 origin-bottom"
        />

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-8xl text-white mb-10 uppercase font-black tracking-tight"
          >
            Let's Create <br />
            <span className="italic font-extralight text-white/50">Magic Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-zinc-400 text-lg md:text-xl mb-16 max-w-xl mx-auto font-sans leading-relaxed"
          >
            Crafting cinematic stories
            with emotion, elegance,
            and timeless visuals...BOOK NOW..!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              to="/book"
              className="bg-primary-gold text-zinc-950 px-12 md:px-20 py-5 md:py-7 font-display font-black uppercase tracking-[0.3em] text-xs md:text-sm hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(254,201,3,0.3)] hover:shadow-[0_0_50px_rgba(254,201,3,0.5)] inline-block rounded-sm"
            >
              Book Your Event
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
