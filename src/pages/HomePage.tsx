import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import FeaturedPhoto from '../components/FeaturedPhoto';
import VideoSection from '../components/VideoSection';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <FeaturedPhoto />
        <VideoSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
