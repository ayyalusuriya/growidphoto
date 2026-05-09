import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'image' | 'mp4' | 'video';
  src: string;
}

export default function MediaModal({
  isOpen,
  onClose,
  type,
  src,
}: MediaModalProps) {

  const videoRef = useRef<HTMLVideoElement>(null);

  // DISABLE BODY SCROLL
  useEffect(() => {

    document.body.style.overflow =
      isOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow =
        'unset';
    };

  }, [isOpen]);

  // STOP VIDEO ON CLOSE
  useEffect(() => {

    if (
      !isOpen &&
      videoRef.current
    ) {

      videoRef.current.pause();
      videoRef.current.currentTime = 0;

    }

  }, [isOpen]);

  // ESC CLOSE
  useEffect(() => {

    const handleKey = (
      e: KeyboardEvent
    ) => {

      if (e.key === 'Escape') {
        onClose();
      }

    };

    window.addEventListener(
      'keydown',
      handleKey
    );

    return () => {

      window.removeEventListener(
        'keydown',
        handleKey
      );

    };

  }, [onClose]);

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/95
            backdrop-blur-md
            overflow-hidden
            flex
            items-center
            justify-center
            p-2
            md:p-6
          "
        >

          {/* CLOSE BUTTON */}
          <motion.button
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            onClick={(e) => {

              e.stopPropagation();
              onClose();

            }}
            className="
              absolute
              top-4
              right-4
              md:top-6
              md:right-6
              z-50
              w-11
              h-11
              rounded-full
              bg-black/40
              backdrop-blur-md
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              hover:bg-primary-gold
              hover:text-black
              transition-all
              duration-300
            "
          >

            <X className="w-5 h-5" />

          </motion.button>

          {/* CONTENT */}
          <motion.div
            initial={{
              scale: 0.96,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.96,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
            "
          >

            {/* IMAGE */}
            {type === 'image' && src && (

              <motion.img
                src={src}
                alt="Fullscreen Preview"
                initial={{
                  scale: 0.96,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.96,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  max-w-[100vw]
                  max-h-[100vh]
                  object-contain
                  select-none
                  rounded-xl
                "
              />

            )}

            {/* MP4 VIDEO */}
            {type === 'mp4' && src && (

              <video
                ref={videoRef}
                src={src}
                autoPlay
                controls
                playsInline
                className="
                  max-w-[100vw]
                  max-h-[100vh]
                  object-contain
                  rounded-xl
                  bg-black
                "
              />

            )}

            {/* YOUTUBE */}
            {type === 'video' && src && (

              <div
                className="
                  w-full
                  max-w-6xl
                  aspect-video
                  rounded-xl
                  overflow-hidden
                  bg-black
                "
              >

                <iframe
                  className="
                    w-full
                    h-full
                  "
                  src={`https://www.youtube.com/embed/${src}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            )}

          </motion.div>

          {/* FOOTER */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.25,
            }}
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              text-white/30
              text-[10px]
              uppercase
              tracking-[0.35em]
              hidden
              md:block
              pointer-events-none
            "
          >
            Press ESC or click outside to close
          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}