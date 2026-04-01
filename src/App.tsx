import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft,
  Truck,
  RotateCcw,
  Headphones,
  CreditCard,
  Play,
  Gift,
  Phone,
  Mail,
  Star,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ApplyCredit from './pages/ApplyCredit';
import Contact from './pages/Contact';

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGiftsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#gift-form');
      // After navigation, we need to wait for the page to load and then scroll
      setTimeout(() => {
        document.getElementById('gift-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('gift-form')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-yellow-200">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/60 backdrop-blur-xl border-b border-gray-200/30 shadow-sm' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-20">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="https://i.ibb.co/hx5sNDQy/Whats-App-Image-2026-03-31-at-2-35-06-PM.jpg" 
                alt="MVP Traders Logo" 
                className="h-12 w-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-black tracking-tighter font-display hidden sm:block">MVP TRADERS</span>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Apply Credit', path: '/credit' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-xs font-black uppercase tracking-widest hover:text-[#F15A24] transition-colors ${location.pathname === link.path ? 'text-[#F15A24]' : 'text-gray-500'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={handleGiftsClick}
                className="text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
              >
                <Gift className="w-3 h-3" /> Gifts
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={handleGiftsClick}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-blue-100 transition-all border border-blue-100 shadow-sm"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Gifts</span>
            </button>
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className={`lg:hidden border-b border-gray-100 py-6 px-4 space-y-4 shadow-xl transition-all duration-500 ${
            isScrolled ? 'bg-white/70 backdrop-blur-xl' : 'bg-white'
          }`}>
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Apply Credit', path: '/credit' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-black uppercase tracking-widest py-2 ${location.pathname === link.path ? 'text-[#F15A24]' : 'text-gray-500'}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleGiftsClick}
              className="block w-full text-left text-sm font-black uppercase tracking-widest py-2 text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              <Gift className="w-4 h-4" /> Gifts
            </button>
          </div>
        )}
      </header>

      <main>
        {children}
      </main>

      {/* Floating Call Button */}
      <a 
        href="tel:+917559965029" 
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-600/40 transition-all hover:scale-110 active:scale-95 group"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 group-hover:animate-bounce" />
        <span className="absolute right-full mr-3 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Call Us
        </span>
      </a>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
              <img 
                src="https://i.ibb.co/hx5sNDQy/Whats-App-Image-2026-03-31-at-2-35-06-PM.jpg" 
                alt="MVP Traders Logo" 
                className="h-14 w-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
              <span className="text-3xl font-black tracking-tighter font-display">MVP TRADERS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8 font-sans">
              MVP Traders is your one-stop shop for high-quality power tools, hand tools, and construction materials in Mangalamkunnu.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 transition-all cursor-pointer"><Star className="w-4 h-4" /></div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 transition-all cursor-pointer"><Star className="w-4 h-4" /></div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 transition-all cursor-pointer"><Star className="w-4 h-4" /></div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase mb-8 tracking-widest font-display text-[#F15A24]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link to="/credit" className="hover:text-yellow-500 transition-colors">Apply Credit</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase mb-8 tracking-widest font-display text-[#F15A24]">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-6 font-sans">Subscribe to get latest updates and offers.</p>
            <div className="flex gap-2">
              <input className="bg-white/5 border border-white/10 rounded px-4 py-2 text-xs outline-none focus:ring-1 focus:ring-yellow-500 w-full text-white" placeholder="Email Address" />
              <button className="bg-yellow-500 p-2 rounded hover:bg-yellow-600 transition-all text-[#1A1A1A]"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-gray-500 uppercase tracking-widest font-mono">
          © {new Date().getFullYear()} MVP Traders. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/credit" element={<ApplyCredit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
