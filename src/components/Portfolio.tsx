import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MediaModal from './MediaModal';

// ================= WEDDING IMAGES =================
import wedding3 from '../assets/weddings/wedding3.jpeg';
import wedding2 from '../assets/weddings/wedding2.jpeg';
import wedding1 from '../assets/weddings/wedding1.jpeg';
import wedding4 from '../assets/weddings/wedding4.jpeg';
import wedding5 from '../assets/weddings/wedding5.jpeg';
import wedding6 from '../assets/weddings/wedding6.jpeg';
import wedding7 from '../assets/weddings/wedding7.jpeg';
import wedding8 from '../assets/weddings/wedding8.jpeg';
import wedding9 from '../assets/weddings/wedding9.jpeg';
import wedding10 from '../assets/weddings/wedding10.jpeg';
import wedding11 from '../assets/weddings/wedding11.jpeg';
import wedding12 from '../assets/weddings/wedding12.jpeg';
import wedding13 from '../assets/weddings/wedding13.jpeg';
import wedding14 from '../assets/weddings/wedding14.jpeg';
import wedding15 from '../assets/weddings/wedding15.jpeg';

// ================= CONCERT IMAGES =================
import concert1 from '../assets/concerts/image-1.jpg';
import concert2 from '../assets/concerts/image-2.jpg';
import concert3 from '../assets/concerts/image-3.jpg';
import concert4 from '../assets/concerts/image-4.jpg';
import concert5 from '../assets/concerts/image-5.jpg';
import concert6 from '../assets/concerts/image-6.jpg';
import concert7 from '../assets/concerts/image-7.jpg';
import concert8 from '../assets/concerts/image-8.jpg';
import concert9 from '../assets/concerts/image-9.jpg';
import onam from '../assets/concerts/Onam.jpg';
import onam25 from '../assets/concerts/onam25.jpg';
import vizag from '../assets/concerts/vizag.jpg';

// ================= TYPE =================
type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  image: string;
  gridClass: string;
};

// ================= PORTFOLIO ITEMS =================
const portfolioItems: PortfolioItem[] = [

  // ================= WEDDINGS =================
  {
    id: 1,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding3,
    gridClass: 'md:col-span-8 md:row-span-4',
  },
  {
    id: 2,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding2,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 3,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding1,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 4,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding4,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 5,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding5,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 6,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding6,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 7,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding7,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 8,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding8,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 9,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding9,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 10,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding10,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 11,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding11,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 12,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding12,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 13,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding13,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 14,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding14,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 15,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding15,
    gridClass: 'md:col-span-4 md:row-span-2',
  },

  // ================= CONCERTS =================
  {
    id: 16,
    category: 'CONCERTS',
    title: 'LIVE CONCERT',
    image: concert1,
    gridClass: 'md:col-span-8 md:row-span-4',
  },
  {
    id: 17,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert2,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 18,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert3,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 19,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert4,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 20,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert5,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 21,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert6,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 22,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert7,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 23,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert8,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 24,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: concert9,
    gridClass: 'md:col-span-8 md:row-span-4',
  },
  {
    id: 25,
    category: 'CONCERTS',
    title: 'ONAM EVENT',
    image: onam,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 26,
    category: 'CONCERTS',
    title: 'ONAM 2025',
    image: onam25,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 27,
    category: 'CONCERTS',
    title: 'Aarambam 2k26',
    image: vizag,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
];

const categoryLabels: Record<string, string> = {
  ALL: 'All Work',
  WEDDINGS: 'Weddings',
  CONCERTS: 'Concerts',
};

export default function Portfolio() {

  const [filter, setFilter] = useState('ALL');

  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'image' | 'mp4' | 'video';
    src: string;
  } | null>(null);

  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['ALL', 'WEDDINGS', 'CONCERTS'];

  const filteredItems =
    filter === 'ALL'
      ? portfolioItems
      : portfolioItems.filter(
          item => item.category === filter
        );

  const displayedItems =
    filteredItems.slice(0, visibleCount);

  const handleItemClick = (
    item: PortfolioItem
  ) => {

    setSelectedMedia({
      type: 'image',
      src: item.image,
    });

  };

  return (
    <section
      id="portfolio"
      className="
        relative
        py-24
        md:py-40
        bg-zinc-950
        overflow-hidden
      "
    >

      <MediaModal
        isOpen={!!selectedMedia}
        onClose={() =>
          setSelectedMedia(null)
        }
        type={
          selectedMedia?.type || 'image'
        }
        src={selectedMedia?.src || ''}
      />

      {/* HEADER */}
      <div
        className="
          px-6
          md:px-16
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          items-end
          gap-8
          mb-16
        "
      >

        <motion.div>

          <span
            className="
              block
              mb-4
              text-primary-gold
              text-xs
              uppercase
              tracking-[0.35em]
              font-mono
            "
          >
            THE ARCHIVE
          </span>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              text-white
              uppercase
              leading-none
            "
          >
            Featured Portfolio
          </h2>

        </motion.div>

        {/* FILTERS */}
        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(6);
              }}
              className={`
                px-5
                py-2.5
                rounded-full
                border
                text-[11px]
                uppercase
                tracking-[0.25em]
                transition-all
                duration-300
                ${
                  filter === cat
                    ? 'bg-primary-gold text-black border-primary-gold'
                    : 'border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-400'
                }
              `}
            >
              {categoryLabels[cat]}
            </button>

          ))}

        </div>

      </div>

      {/* GRID */}
      <div
        className="
          relative
          px-6
          md:px-16
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-12
          gap-5
          auto-rows-[260px]
        "
      >

        <AnimatePresence mode="popLayout">

          {displayedItems.map((item, index) => (

            <motion.div
              key={item.id}
              layout="position"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              onClick={() =>
                handleItemClick(item)
              }
              className={`
                ${item.gridClass}
                relative
                overflow-hidden
                rounded-3xl
                group
                cursor-pointer
                bg-black
              `}
            >

              {/* IMAGE */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  flex
                  items-end
                  p-6
                "
              >

                <div>

                  <span
                    className="
                      text-primary-gold
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                    "
                  >
                    {item.category}
                  </span>

                  <h4
                    className="
                      text-white
                      text-2xl
                      font-bold
                      mt-2
                    "
                  >
                    {item.title}
                  </h4>

                </div>

              </div>

            </motion.div>

          ))}

        </AnimatePresence>

      </div>

      {/* LOAD MORE */}
      {visibleCount <
        filteredItems.length && (

        <div
          className="
            mt-20
            flex
            justify-center
          "
        >

          <button
            onClick={() =>
              setVisibleCount(
                prev => prev + 3
              )
            }
            className="
              px-8
              py-3
              rounded-full
              border
              border-primary-gold
              text-primary-gold
              uppercase
              tracking-[0.25em]
              text-xs
              transition-all
              duration-300
              hover:bg-primary-gold
              hover:text-black
            "
          >
            Discover More
          </button>

        </div>

      )}
{/* ================= CINEMATIC CTA SECTION ================= */}
<motion.div
  initial={{
    opacity: 0,
    y: 100,
    scale: 0.95,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 1,
    ease: [0.16, 1, 0.3, 1],
  }}
  viewport={{ once: true }}
  className="
    relative
    mt-32
    mx-6
    md:mx-16
    overflow-hidden
    rounded-[40px]
    border
    border-zinc-800
    bg-gradient-to-br
    from-zinc-900
    via-black
    to-zinc-900
  "
>

  {/* CINEMATIC GLOW */}
  <div
    className="
      absolute
      inset-0
      opacity-40
      bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.25),transparent_55%)]
    "
  />

  {/* ANIMATED LIGHT */}
  <motion.div
    animate={{
      x: ['-100%', '120%'],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'linear',
    }}
    className="
      absolute
      top-0
      left-0
      w-1/3
      h-full
      bg-white/10
      blur-3xl
      rotate-12
    "
  />

  <div
    className="
      relative
      z-10
      py-24
      px-8
      md:px-20
      flex
      flex-col
      items-center
      text-center
    "
  >

    {/* SMALL TEXT */}
    <motion.span
      initial={{
        opacity: 0,
        letterSpacing: '0.6em',
      }}
      whileInView={{
        opacity: 1,
        letterSpacing: '0.35em',
      }}
      transition={{
        delay: 0.2,
        duration: 1,
      }}
      viewport={{ once: true }}
      className="
        text-primary-gold
        uppercase
        text-xs
        tracking-[0.35em]
        mb-6
        font-mono
      "
    >
      Growid Visual Archive
    </motion.span>

    {/* HEADING */}
    <motion.h2
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.3,
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="
        text-4xl
        md:text-7xl
        font-bold
        text-white
        leading-tight
        max-w-5xl
      "
    >
      To Know More About
      <span className="block text-primary-gold mt-2">
        GROWID Works
      </span>
    </motion.h2>

    {/* SUBTEXT */}
    <motion.p
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.45,
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="
        mt-8
        text-zinc-400
        max-w-2xl
        text-sm
        md:text-base
        leading-relaxed
      "
    >
      Explore cinematic storytelling, luxury wedding films,
      concerts, destination visuals, and timeless memories
      crafted through the Growid creative lens.
    </motion.p>

    {/* BUTTON */}
    <motion.a
      href="https://growid-showcase-glow-o57d.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
        mt-12
        px-10
        py-4
        rounded-full
        bg-primary-gold
        text-black
        uppercase
        tracking-[0.25em]
        text-xs
        font-semibold
        transition-all
        duration-300
        hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]
      "
    >
      View Portfolio
    </motion.a>

  </div>

</motion.div>
    </section>
  );
}