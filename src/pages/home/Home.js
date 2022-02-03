// components
import Hero from './hero/Hero';
import Shop from './shop/Shop';
import Reviews from './reviews/Reviews';
import Contact from './contact/Contact';
import Footer from '../../components/Footer';
import About from './about/About';

export default function Home() {
  return (
    <div className='home' id="home">
      <Hero />
      <Shop />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
