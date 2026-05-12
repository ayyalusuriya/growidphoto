import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  Variants,
} from 'framer-motion';

import {
  Mail,
  Phone,
  Instagram,
  MapPin,
  Heart,
  Music,
  Briefcase,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

// ✅ IMPORT LOCAL IMAGES
import jeyavelImg from '../assets/ceo/jeyavel.jpeg';
import ayyaluImg from '../assets/ceo/ayyaluphoto.png';

// TEAM MEMBERS
const teamMembers = [
  {
    name: 'JEYAVEL',
    role: 'CEO of GROWID',
    photo: jeyavelImg,
  },

  {
    name: 'AYYALUSAMY',
    role: 'CO-FOUNDER',
    photo: ayyaluImg,
  },

  {
    name: 'ARUN PRABBU',
    role: 'CO-FOUNDER',
  },
];

// STORY TYPES
const storyTypes = [
  {
    id: 'Weddings',
    label: 'Eternal Stories',
    subtitle: 'Weddings',
    icon: Heart,
    description:
      'Your love story, told in extraordinary frames.',
  },

  {
    id: 'Concert',
    label: 'Vibrant Rhythms',
    subtitle: 'Concerts / Events',
    icon: Music,
    description:
      'Energy, emotion, and every electrifying moment frozen in time.',
  },

  {
    id: 'Corporate Event',
    label: 'Legacy Builds',
    subtitle: 'Corporate / Commercial',
    icon: Briefcase,
    description:
      'Premium visuals that elevate your brand and define your legacy.',
  },
];

// ANIMATION VARIANTS
const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function ContactPage() {
  const [showModal, setShowModal] =
    useState(false);

  const navigate = useNavigate();

  const handleStorySelect = (
    eventTypeId: string
  ) => {
    setShowModal(false);

    navigate(
      `/book?eventType=${encodeURIComponent(
        eventTypeId
      )}`
    );
  };

  return (
    <div
      className="
        min-h-screen
        bg-dark-bg
        flex
        flex-col
        overflow-hidden
      "
    >
      <Header />

      <main
        className="
          flex-grow
          pt-32
          pb-24
          px-4
          sm:px-6
          md:px-8
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            lg:gap-24
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 md:space-y-16"
          >
            <motion.div variants={itemVariants}>
              <span
                className="
                  font-mono
                  text-primary-gold
                  mb-4
                  block
                  tracking-[0.15em]
                  text-xs
                  sm:text-sm
                  uppercase
                "
              >
                GET IN TOUCH
              </span>

              <h1
                className="
                 font-display
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  text-white
                  font-black
                    text-white/40
                    italic
                "
              >
                STORIES BY <br />

                <span
                  className="
                  font-display
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  text-white
                  font-black
                  uppercase
                  tracking-tighter
                  mb-6
                  md:mb-8
                  leading-none
                  break-words
                  "
                >
                  GROWID
                </span>
              </h1>

              <p
                className="
                  text-zinc-400
                  text-base
                  sm:text-lg
                  font-sans
                  max-w-md
                  leading-relaxed
                "
              >
                Framing emotions,
                light, and memories
                into cinematic art.
              </p>
            </motion.div>

            {/* CONTACT PANEL */}
            <motion.div
              variants={itemVariants}
              className="
                glass-panel
                p-5
                sm:p-6
                md:p-12
                rounded-3xl
                border
                border-white/5
                space-y-8
                md:space-y-10
                overflow-hidden
              "
            >
              {/* PHONE */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
                className="
                  flex
                  items-start
                  gap-4
                  md:gap-6
                "
              >
                <div
                  className="
                    min-w-[48px]
                    w-12
                    h-12
                    bg-primary-gold/10
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Phone
                    className="
                      text-primary-gold
                      w-5
                      h-5
                    "
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      font-mono
                      text-[10px]
                      text-zinc-500
                      uppercase
                      tracking-widest
                      mb-1
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      text-white
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-display
                      font-bold
                      break-words
                    "
                  >
                    +91 8072559071
                  </p>
                </div>
              </motion.div>

              {/* INSTAGRAM */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
                className="
                  flex
                  items-start
                  gap-4
                  md:gap-6
                "
              >
                <div
                  className="
                    min-w-[48px]
                    w-12
                    h-12
                    bg-primary-gold/10
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Instagram
                    className="
                      text-primary-gold
                      w-5
                      h-5
                    "
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      font-mono
                      text-[10px]
                      text-zinc-500
                      uppercase
                      tracking-widest
                      mb-1
                    "
                  >
                    Instagram
                  </p>

                  <a
                    href="https://www.instagram.com/stories_by.growid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-white
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-display
                      font-bold
                      hover:text-primary-gold
                      break-all
                      transition-colors
                      duration-300
                    "
                  >
                    @stories_by.growid
                  </a>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
                className="
                  flex
                  items-start
                  gap-4
                  md:gap-6
                "
              >
                <div
                  className="
                    min-w-[48px]
                    w-12
                    h-12
                    bg-primary-gold/10
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mail
                    className="
                      text-primary-gold
                      w-5
                      h-5
                    "
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      font-mono
                      text-[10px]
                      text-zinc-500
                      uppercase
                      tracking-widest
                      mb-1
                    "
                  >
                    Email
                  </p>

                  <a
                    href="mailto:growid.official25@gmail.com"
                    className="
                      text-white
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-display
                      font-bold
                      hover:text-primary-gold
                      break-all
                      transition-colors
                      duration-300
                    "
                  >
                    growid.official25@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                }}
                className="
                  flex
                  items-start
                  gap-4
                  md:gap-6
                "
              >
                <div
                  className="
                    min-w-[48px]
                    w-12
                    h-12
                    bg-primary-gold/10
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin
                    className="
                      text-primary-gold
                      w-5
                      h-5
                    "
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      font-mono
                      text-[10px]
                      text-zinc-500
                      uppercase
                      tracking-widest
                      mb-1
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      text-white
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-display
                      font-bold
                      break-words
                    "
                  >
                    Tamil Nadu, India
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 md:space-y-12"
          >
            <motion.div
              variants={itemVariants}
              className="
                flex
                items-center
                justify-between
              "
            >
              <h2
                className="
                  font-display
                  text-xl
                  sm:text-2xl
                  text-white
                  font-bold
                  uppercase
                  tracking-widest
                  whitespace-nowrap
                "
              >
                THE VISIONARIES
              </h2>

              <div
                className="
                  h-px
                  flex-grow
                  mx-4
                  md:mx-8
                  bg-white/10
                "
              />
            </motion.div>

            {/* TEAM */}
            <div
              className="
                grid
                grid-cols-1
                gap-6
                md:gap-8
              "
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="
                    group
                    relative
                    rounded-2xl
                    glass-panel
                    border
                    border-white/5
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    p-6
                    gap-6
                  "
                >
                  <div
                    className="
                      w-28
                      h-28
                      sm:w-32
                      sm:h-32
                      overflow-hidden
                      rounded-xl
                      flex-shrink-0
                    "
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <h3
                      className="
                        font-display
                        text-xl
                        sm:text-2xl
                        text-white
                        font-black
                        uppercase
                        break-words
                      "
                    >
                      {member.name}
                    </h3>

                    <p
                      className="
                        font-mono
                        text-xs
                        text-primary-gold
                        uppercase
                        mt-2
                      "
                    >
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}