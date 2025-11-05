import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'marathi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    if (language === 'marathi') {
      document.body.classList.add('marathi');
    } else {
      document.body.classList.remove('marathi');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'marathi' ? 'english' : 'marathi');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

