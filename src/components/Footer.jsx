import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            {language === 'marathi' 
              ? 'डॉ. विश्वास सुतार' 
              : 'Dr. Vishwas Sutar'}
          </p>
          <p className="text-gray-300 mb-2">
            {language === 'marathi' 
              ? 'कोल्हापूर | संपर्क: ९४२०३५३४५२' 
              : 'Kolhapur | Contact: 9420353452'}
          </p>
          <p className="text-gray-400 text-sm">
            {language === 'marathi' 
              ? '© २०२४ सर्व हक्क राखीव' 
              : '© 2024 All Rights Reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

