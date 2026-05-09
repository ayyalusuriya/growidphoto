import {
  Globe,
  Mail,
  Instagram,
} from 'lucide-react';

import { motion } from 'framer-motion';
import logo from '../assets/LOGO YELLOW.png';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (

    <footer
      className="
        bg-zinc-950
        border-t
        border-white/5
        py-24
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
          gap-12
          px-8
          w-full
          max-w-7xl
          mx-auto
          text-center
        "
      >

        {/* LOGO */}
        <div
          className="
            flex
            items-center
            gap-0
            leading-none
          "
        >

          <img
            src={logo}
            alt="Growid Logo"
            className="
              w-40
              h-40
              md:w-42
              md:h-42
              object-contain
              -mr-16
            "
          />

          <span
            className="
              text-6xl
              md:text-4xl
              text-center
              font-extrabold 
              font-display
              tracking-[0.06em]
              text-white
              uppercase
            "
          >
            GROWID
          </span>

        </div>

        {/* NAVIGATION */}
        <nav
          className="
            flex
            flex-wrap
            justify-center
            gap-8
            md:gap-12
          "
        >

          <Link
            to="/"
            className="
              text-[10px]
              tracking-widest
              text-zinc-500
              hover:text-white
              transition-colors
              duration-300
              uppercase
            "
          >
            Home
          </Link>

          <a
            href="/#portfolio"
            className="
              text-[10px]
              tracking-widest
              text-zinc-500
              hover:text-white
              transition-colors
              duration-300
              uppercase
            "
          >
            Portfolio
          </a>

          <Link
            to="/contact"
            className="
              text-[10px]
              tracking-widest
              text-zinc-500
              hover:text-white
              transition-colors
              duration-300
              uppercase
            "
          >
            Contact
          </Link>

          <Link
            to="/book"
            className="
              text-[10px]
              tracking-widest
              text-zinc-500
              hover:text-white
              transition-colors
              duration-300
              uppercase
            "
          >
            Book Now
          </Link>

        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6">

          {/* WEBSITE */}
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="#"
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-zinc-500
              hover:text-primary-gold
              hover:border-primary-gold
              transition-all
              duration-300
            "
          >

            <Globe className="w-5 h-5" />

          </motion.a>

          {/* EMAIL */}
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="mailto:growid.official25@gmail.com"
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-zinc-500
              hover:text-primary-gold
              hover:border-primary-gold
              transition-all
              duration-300
            "
          >

            <Mail className="w-5 h-5" />

          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            href="https://www.instagram.com/stories_by.growid"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-zinc-500
              hover:text-primary-gold
              hover:border-primary-gold
              transition-all
              duration-300
            "
          >

            <Instagram className="w-5 h-5" />

          </motion.a>

        </div>

        {/* EMAIL TEXT */}
        <div
          className="
            flex
            flex-col
            gap-2
            text-center
          "
        >

          <a
            href="mailto:growid.official25@gmail.com"
            className="
              text-zinc-400
              hover:text-primary-gold
              transition-colors
              duration-300
              text-sm
            "
          >
            growid.official25@gmail.com
          </a>

          <a
            href="https://www.instagram.com/stories_by.growid"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-zinc-400
              hover:text-primary-gold
              transition-colors
              duration-300
              text-sm
            "
          >
            @growid
          </a>

        </div>

        {/* DIVIDER */}
        <div
          className="
            w-full
            h-px
            bg-white/5
            mt-4
          "
        />

        {/* COPYRIGHT */}
        <p
          className="
            text-[10px]
            tracking-widest
            text-zinc-600
            uppercase
          "
        >
          © 2026 GROWID Photography.
          All rights reserved.
        </p>

      </div>

    </footer>

  );
}