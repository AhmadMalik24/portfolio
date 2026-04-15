import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bg flex flex-col relative overflow-x-hidden">
        <SocialSidebar />
        <Navbar />
        
        <main className="flex-grow px-4 md:px-16 lg:px-32 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
