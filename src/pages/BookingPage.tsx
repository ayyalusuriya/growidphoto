import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar,
  User,
  MapPin,
  Phone,
  ChevronRight,
  ChevronLeft,
  Mic
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ✅ TYPES
type FormData = {
  name: string;
  address: string;
  phone: string;
  date: string;
  eventType: string;
  description: string;
};

const EVENT_TYPES = ['Weddings', 'Corporate Event', 'Concert'];

// ✅ EASING
const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

// ✅ VARIANTS
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE
    }
  }
};

export default function BookingPage() {
  const [searchParams] = useSearchParams();

  const preselectedEvent = searchParams.get('eventType') || 'Weddings';
  const validEvent = EVENT_TYPES.includes(preselectedEvent)
    ? preselectedEvent
    : 'Weddings';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    phone: '',
    date: '',
    eventType: validEvent,
    description: ''
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, eventType: validEvent }));
  }, [validEvent]);

  const [isListening, setIsListening] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // 🎤 Speech Recognition
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
  }

  const startListening = () => {
    if (!recognition) {
      alert('Speech Recognition not supported');
      return;
    }

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setFormData(prev => ({
        ...prev,
        description: prev.description + ' ' + transcript
      }));
    };

    recognition.onend = () => setIsListening(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `📸 *GROWID BOOKING REQUEST*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📍 Address: ${formData.address}
📅 Date: ${formData.date}
🎉 Event: ${formData.eventType}
📝 Description: ${formData.description}`;

    const whatsappURL = `https://wa.me/9159005236?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  };

  const scrollSlider = (dir: 'left' | 'right') => {
    sliderRef.current?.scrollBy({
      left: dir === 'left' ? -200 : 200,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-center mb-16"
          >
            <span className="font-mono text-primary-gold text-sm uppercase tracking-[0.2em]">
              RESERVATION
            </span>

            <h1 className="font-display text-5xl md:text-7xl text-white font-black uppercase">
              Book Your Legacy
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="h-px w-20 bg-primary-gold mx-auto mt-6"
            />

            {searchParams.get('eventType') && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-4 py-2 rounded-full bg-primary-gold/10 border text-primary-gold text-xs"
              >
                {preselectedEvent} selected
              </motion.div>
            )}
          </motion.div>

          {/* FORM */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-16 rounded-3xl space-y-12"
          >

            {/* NAME */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="name" className="text-zinc-400 flex gap-2 mb-2">
                <User className="w-4 h-4 text-primary-gold" /> Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="input"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </motion.div>

            {/* ADDRESS */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="address" className="text-zinc-400 flex gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary-gold" /> Address
              </label>
              <input
                id="address"
                type="text"
                required
                placeholder="Enter event location"
                className="input"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </motion.div>

            {/* PHONE */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="phone" className="text-zinc-400 flex gap-2 mb-2">
                <Phone className="w-4 h-4 text-primary-gold" /> Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                className="input"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </motion.div>

            {/* DATE */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="date" className="text-zinc-400 flex gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary-gold" /> Date
              </label>
              <input
                id="date"
                type="date"
                required
                className="input"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </motion.div>

            {/* EVENT TYPE */}
            <motion.div variants={fieldVariants}>
              <div className="flex gap-3 overflow-x-auto" ref={sliderRef}>
                {EVENT_TYPES.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, eventType: type })
                    }
                    className={`chip ${
                      formData.eventType === type ? 'active' : ''
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* DESCRIPTION + VOICE */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="description" className="text-zinc-400 mb-2 block">
                Description
              </label>

              <textarea
                id="description"
                rows={4}
                placeholder="Describe your event..."
                className="input"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value
                  })
                }
              />

              <motion.button
                type="button"
                onClick={startListening}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-3 px-4 py-2 rounded-full text-xs ${
                  isListening
                    ? 'bg-red-500 text-white'
                    : 'bg-primary-gold text-black'
                }`}
              >
                <Mic className="w-4 h-4 inline mr-2" />
                {isListening ? 'Listening...' : 'Speak'}
              </motion.button>
            </motion.div>

            {/* SUBMIT */}
            <motion.button
              variants={fieldVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary-gold text-black py-5 font-bold rounded-xl"
            >
              Submit Booking Request
            </motion.button>

          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  );
}