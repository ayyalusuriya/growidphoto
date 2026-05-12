/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence } from 'framer-motion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import PageTransition from './components/PageTransition';

// Inner component so we can call useLocation() inside Router
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />

        <Route
          path="/book"
          element={
            <PageTransition>
              <BookingPage />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      {/* NORMAL CURSOR ENABLED */}
      <div className="relative min-h-screen cursor-auto">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}