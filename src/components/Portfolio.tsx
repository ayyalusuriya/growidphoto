import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MediaModal from './MediaModal';

// IMAGES
import wedding1 from '../assets/weddings/wedding1.jpeg';
import wedding2 from '../assets/weddings/wedding2.jpeg';
import wedding3 from '../assets/weddings/wedding3.jpeg';
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

// TYPE
type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  image: string;
  gridClass: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding1,
    gridClass: 'md:col-span-8 md:row-span-4',
  },
  {
    id: 2,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding5,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 3,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding6,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 4,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding2,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 5,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding3,
    gridClass: 'md:col-span-4 md:row-span-2',
  },
  {
    id: 6,
    category: 'WEDDINGS',
    title: 'GROWID WEDDINGS',
    image: wedding4,
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

  // OPEN FULLSCREEN
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

      {/* MODAL */}
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

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
        >

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
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {categories.map((cat, i) => (

            <motion.button
              key={cat}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.05,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
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
            </motion.button>

          ))}

        </motion.div>

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
              style={{
                position: 'relative',
              }}
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

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="
            mt-20
            flex
            justify-center
          "
        >

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
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
          </motion.button>

        </motion.div>

      )}

    </section>
  );
}