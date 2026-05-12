import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrbanLiving from './components/UrbanLiving';
import SpaceToLive from './components/SpaceToLive';
import LifestyleWellness from './components/LifestyleWellness';
import BackedByExperience from './components/BackedByExperience';
import YourCity from './components/YourCity';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <UrbanLiving />
        <SpaceToLive />
        <LifestyleWellness />
        <BackedByExperience />
        <YourCity />
      </main>
      <Footer />
    </div>
  );
}
