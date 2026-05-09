import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left image panel */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden order-2 md:order-1">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2SczK6D6hkxPnvIYdmpNJfi4Ah8lyaE_HqS8du4K4mIIV8ZD2peMU7N9By44epabqKCbQePnFxyCbLlAT5BXBtkQpO3Lsqzz7W3X4giU_NLwHEaXsIfFc0bOC3rMQe7lvn7efiTb8ziZ3N2q-f4_Inud25kRWapd62TTTD7CCFgZWvWPwc1QvWAla2dHnbQAiaMK2EPT4_bLIhnj7TCHGA4zF2-hRZdHmjgXamu4bAmR_UP6NGYNGBfaTJuI9jd70Z8ktaDM-1G_v"
          alt="Luxury professional camera on tripod"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/20 to-transparent"></div>

        {/* Animated shimmer overlay */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 2.5, delay: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
        />
      </div>

      {/* Right text panel — pt-20 ensures header clearance on mobile */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-12 md:py-0 order-1 md:order-2">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-mono text-primary-gold mb-6 block tracking-[0.2em] text-xs uppercase"
          >
            PREMIUM PHOTOGRAPHY
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white mb-8 leading-[1.1] uppercase font-black"
          >
            CAPTURING <br />
            <span className="italic font-extralight text-white/80">ETERNITY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-zinc-400 text-base md:text-lg lg:text-xl mb-12 max-w-md leading-relaxed font-sans"
          >
            Bespoke visual storytelling for those who demand world-class artistry and
            uncompromising quality in every frame.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="flex flex-wrap gap-6"
          >
            <Link to="/book" className="luxury-button-primary">
              Book Now
            </Link>
            <Link to="/contact" className="luxury-button-outline">
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-primary-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
