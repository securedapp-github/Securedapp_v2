import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './sections/home-hero';
import Why from './sections/why';
import OurSolutions from './sections/solutions';
import HowItWorks from './sections/how-it-works';
import Services from './sections/services';
import Testimonials from './sections/testimonials';
import FAQs from './sections/FAQs';
import CTA from './sections/CTA';
import Footer from './sections/footer';

function App({theme}) {
  return (
    <div className="secure-dapp-container">
        <Navbar/>
        <Hero/>
        <Why/>
        <OurSolutions/>
        <HowItWorks/>
        <Services/>
        <Testimonials/>
        <FAQs/>
        <CTA/>
        <Footer/>
    </div>
);
}

export default App;
