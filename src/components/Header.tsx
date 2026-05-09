import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO YELLOW.png';

// Nav link with animated underline + click ripple
function NavLink({
  to,
  href,
  children,
  isActive,
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  const baseClass =
    'relative font-display uppercase tracking-[0.2em] text-[10px] lg:text-xs transition-colors duration-300 group overflow-hidden px-1 py-0.5';
  const colorClass = isActive
    ? 'text-primary-gold'
    : 'text-zinc-400 hover:text-primary-gold';

  const inner = (
    <>
      {/* Text */}
      <span className="relative z-10">{children}</span>

      {/* Animated underline */}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px bg-primary-gold"
        initial={false}
        animate={{ width: isActive ? '100%' : '0%' }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      />
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-gold transition-all duration-300 group-hover:w-full" />

      {/* Click ripple */}
      <AnimatePresence>
        {ripple && (
          <motion.span
            key="ripple"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-primary-gold pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={`${baseClass} ${colorClass}`}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to!} onClick={handleClick} className={`${baseClass} ${colorClass}`}>
      {inner}
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-500 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-16 max-w-7xl mx-auto h-full">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-0 leading-none">
          <img
            src={logo}
            alt="Growid Logo"
            className="w-40 h-40 md:w-42 md:h-42 object-contain -mr-14"
          />
          <motion.span
            whileHover={{ letterSpacing: '0.12em' }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-extrabold font-display tracking-[0.05em] text-white uppercase"
          >
            GROWID
          </motion.span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
          <NavLink href="/#portfolio" isActive={false}>Portfolio</NavLink>
          <NavLink to="/contact" isActive={location.pathname === '/contact'}>Contact</NavLink>
        </nav>

        {/* BOOK NOW — animated outline button
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/book"
            className={`luxury-button-outline scale-90 md:scale-100 flex items-center justify-center relative overflow-hidden group ${
              location.pathname === '/book' ? 'border-primary-gold text-primary-gold' : ''
            }`}
          >
            {/* Hover fill sweep */}
            {/* <motion.span
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 bg-primary-gold/10 pointer-events-none"
            />
            <span className="relative z-10">Book Now</span>
          </Link>
        </motion.div> */} 

      </div>
    </motion.header>
  );
}