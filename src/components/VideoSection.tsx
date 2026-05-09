import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import MediaModal from './MediaModal';

// ✅ Direct Cloudinary MP4 URL
const SHOWREEL_URL = 'https://res.cloudinary.com/dlhudsqax/video/upload/v1777982482/madhesh_crfdoa.mp4';

// Cloudinary auto-generates a thumbnail by replacing the extension
const THUMBNAIL_URL = 'https://res.cloudinary.com/dlhudsqax/video/upload/so_0,w_900,q_auto,f_jpg/v1777982482/madhesh_crfdoa.jpg';

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 md:py-40 px-8 md:px-16 max-w-7xl mx-auto">
      <MediaModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        type="mp4"
        src={SHOWREEL_URL}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-primary-gold mb-6 block tracking-[0.15em] text-sm uppercase"
          >
            MOTION PICTURES
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 font-bold uppercase leading-tight">
            CINEMATIC STORYTELLING
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
            We don't just record video; we craft visual legacies. Every frame is
            color-graded with Hollywood-level precision to ensure your story feels timeless.
          </p>
          <motion.button
            onClick={() => setIsVideoOpen(true)}
            whileHover={{ x: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center gap-4 text-primary-gold font-display font-bold tracking-[0.2em] uppercase text-xs group cursor-none"
          >
            View Showreel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* RIGHT — video thumbnail with play button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          onClick={() => setIsVideoOpen(true)}
          className="relative aspect-video glass-panel overflow-hidden group interactive-target rounded-2xl cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          {/* Thumbnail — Cloudinary auto-generated JPG from first frame */}
          <img
            src={THUMBNAIL_URL}
            alt="GROWID Showreel Thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            onError={(e) => {
              // Fallback: show a dark gradient if thumbnail fails to load
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />

          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-gold/20 backdrop-blur-md flex items-center justify-center border border-primary-gold/40 group-hover:bg-primary-gold/40 transition-all duration-500 shadow-[0_0_50px_rgba(254,201,3,0.35)]"
            >
              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                className="absolute w-full h-full rounded-full border border-primary-gold/40 pointer-events-none"
              />
              <Play className="text-primary-gold w-8 h-8 md:w-10 md:h-10 fill-primary-gold ml-1" />
            </motion.div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              Click to play
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
