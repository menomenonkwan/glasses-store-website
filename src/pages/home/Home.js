// components
import Hero from './hero/Hero';
import Shop from './shop/Shop';
import About from './about/About';
import Reviews from './reviews/Reviews';
import Contact from './contact/Contact';
import Updates from './updates/Updates';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className='home' id="home">
      <Hero />
      <Shop />
      <About />
      <Reviews />
      <Contact />
      <Updates />
      <Footer />
    </div>
  );
}
