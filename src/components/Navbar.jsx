import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-primary-700 transition-colors tracking-tight">
            {language === 'marathi' ? 'डॉ. विश्वास सुतार' : 'Dr. Vishwas Sutar'}
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.about}
              </Link>
              <Link
                to="/books"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/books') 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.books}
              </Link>
              <Link
                to="/samajbhan"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive('/samajbhan') 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.samajbhan}
              </Link>
            </div>
            
            <button
              onClick={toggleLanguage}
              className="px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              {language === 'marathi' ? 'English' : 'मराठी'}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-primary-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-700 hover:bg-primary-100'
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/about') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-700 hover:bg-primary-100'
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              to="/books"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/books') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-700 hover:bg-primary-100'
              }`}
            >
              {t.nav.books}
            </Link>
            <Link
              to="/samajbhan"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/samajbhan') 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-700 hover:bg-primary-100'
              }`}
            >
              {t.nav.samajbhan}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

