import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import MediaModal from './MediaModal';

export default function FeaturedPhoto() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const imageSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuCQQwUj6EVX-9WfTBsjBGwyK4iy52WgW0yHM25UI_St3pW_QxkXQXt-IZgfE449tf0pgarxJWD11f8Y5zRmboAkS23Xn-D9MYbW-YvjCQyng7_ihvov56iYt3gUdoyhSDyoNlrMVWcZG92hg0Q2XuooRaBe4w8DBfNK5bIpMTH44ygemK8h0fjpK9rl75IfK3u770doG5to9EnukaskucNMo-x_WFrqAj6bJ4wygR9fHla-uoKLeWP2ctEq03GWed77AnbU7TnrQ7ja";

  return (
    <section 
      ref={ref} 
      className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden flex items-center justify-center cursor-pointer interactive-target"
      onClick={() => setIsPhotoOpen(true)}
    >
      <MediaModal 
        isOpen={isPhotoOpen} 
        onClose={() => setIsPhotoOpen(false)} 
        type="image" 
        src={imageSrc} 
      />

      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          className="w-full h-full object-cover scale-125" 
          src={imageSrc}
          alt="Ethereal scene at dusk"
        />
        <div className="absolute inset-0 bg-zinc-950/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-8 pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-4xl md:text-6xl lg:text-8xl text-white mb-8 max-w-4xl mx-auto uppercase font-black tracking-tighter"
        >
          Beyond the <br /> 
          <span className="text-primary-gold italic font-light">visible spectrum</span>
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-px bg-primary-gold mx-auto"
        />
      </div>
    </section>
  );
}
