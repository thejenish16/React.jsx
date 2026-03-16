import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MenuSection from '../components/MenuSection';
import EventsSection from '../components/EventsSection';
import ReservationSection from '../components/ReservationSection';
import OfferBanner from '../components/OfferBanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <EventsSection />
      <ReservationSection />
      <OfferBanner />
      <Footer />
    </div>
  );
};

export default Home;
