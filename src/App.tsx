import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Pillars from './components/Pillars';
import VoiceWidget from './components/VoiceWidget';
import Support from './components/Support';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppBadge from './components/WhatsAppBadge';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Pillars />
        <VoiceWidget />
        <CallToAction />
        <Support />
      </main>
      <Footer />
      <WhatsAppBadge />
    </div>
  );
}
