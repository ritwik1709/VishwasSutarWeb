import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import LazyImage from '../components/LazyImage';
import booksData from '../data/books.json';

// Import images
import sanvidhan from '../assets/sanvidhan.jpeg';
import tukaram from '../assets/tukaram.jpeg';
import basvanna from '../assets/basvanna.jpeg';
import nal from '../assets/nal.jpeg';
import vidrohiTukaram from '../assets/vidrohi-tukaram.jpeg';
import hindi from '../assets/hindi.jpeg';
import bahuvidh from '../assets/bahuvidh.jpeg';
import lavateSir from '../assets/lavateSir.jpeg';
import mulasPatra from '../assets/mulas-patra.jpeg';
import amritmanthan from '../assets/amritmanthan.jpeg';
import khalilvani from '../assets/khalilvani.jpeg';
import lavateVimarsh from '../assets/lavate_vimarsh.jpeg';

const imageMap = {
  '/src/assets/sanvidhan.jpeg': sanvidhan,
  '/src/assets/tukaram.jpeg': tukaram,
  '/src/assets/basvanna.jpeg': basvanna,
  '/src/assets/nal.jpeg': nal,
  '/src/assets/vidrohi-tukaram.jpeg': vidrohiTukaram,
  '/src/assets/hindi.jpeg': hindi,
  '/src/assets/bahuvidh.jpeg': bahuvidh,
  '/src/assets/lavateSir.jpeg': lavateSir,
  '/src/assets/mulas-patra.jpeg': mulasPatra,
  '/src/assets/amritmanthan.jpeg': amritmanthan,
  '/src/assets/khalilvani.jpeg': khalilvani,
  '/src/assets/lavate_vimarsh.jpeg': lavateVimarsh,
};

const Books = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const getImageSrc = (coverPath) => {
    return imageMap[coverPath] || coverPath;
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
              {t.books.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto px-4">
              {t.books.subtitle}
            </p>
          </div>

          {/* Books Grid */}
          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {books.map((book, index) => (
                <div
                  key={book.id}
                  onClick={() => handleBookClick(book)}
                  className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    {/* Book Cover Container */}
                    <div className="relative overflow-hidden rounded-lg book-shadow group-hover:book-shadow-hover transition-all duration-500">
                      <div className="aspect-[2/3] bg-gray-100">
                        <LazyImage
                          src={getImageSrc(book.cover)}
                          alt={book.title[language] || book.title.marathi}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-xs sm:text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {language === 'marathi' ? 'क्लिक करा अधिक माहितीसाठी' : 'Click for more details'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="mt-4 sm:mt-6 space-y-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-primary-700 transition-colors duration-300">
                        {book.title[language] || book.title.marathi}
                      </h3>
                      
                      {book.brief && (
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2">
                          {book.brief[language] || book.brief.marathi}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between pt-2">
                        {book.price && typeof book.price === 'number' && (
                          <span className="text-base sm:text-lg font-bold text-gray-900">
                            ₹{book.price}
                          </span>
                        )}
                        {book.pages && (
                          <span className="text-xs sm:text-sm text-gray-500 font-medium">
                            {book.pages} {language === 'marathi' ? 'पाने' : 'pages'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="max-w-md mx-auto">
                <svg className="w-32 h-32 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-2xl text-gray-500 font-light">
                  {t.books.noBooks}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
            <div 
              className="bg-white rounded-xl sm:rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform animate-scaleIn mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex justify-between items-start z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight pr-4 sm:pr-8">
                  {selectedBook.title[language] || selectedBook.title.marathi}
                </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8">
                  {/* Book Cover */}
                  <div className="flex justify-center">
                    <div className="book-shadow rounded-lg overflow-hidden max-w-sm">
                      <LazyImage
                        src={getImageSrc(selectedBook.cover)}
                        alt={selectedBook.title[language] || selectedBook.title.marathi}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Book Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-200">
                        {language === 'marathi' ? 'पुस्तक माहिती' : 'Book Information'}
                      </h3>
                      <div className="space-y-4">
                        {selectedBook.price && (
                          <div className="flex items-baseline gap-3">
                            <span className="font-semibold text-gray-700 text-lg">
                              {language === 'marathi' ? 'किंमत:' : 'Price:'}
                            </span>
                            <span className="text-2xl font-bold text-primary-600">
                              {typeof selectedBook.price === 'number' 
                                ? `₹${selectedBook.price}` 
                                : selectedBook.price}
                            </span>
                          </div>
                        )}
                        {selectedBook.pages && (
                          <div className="flex items-baseline gap-3">
                            <span className="font-semibold text-gray-700 text-lg">
                              {language === 'marathi' ? 'पाने:' : 'Pages:'}
                            </span>
                            <span className="text-xl text-gray-700">{selectedBook.pages}</span>
                          </div>
                        )}
                        {selectedBook.publisher && (
                          <div>
                            <span className="font-semibold text-gray-700 text-lg block mb-2">
                              {language === 'marathi' ? 'प्रकाशक:' : 'Publisher:'}
                            </span>
                            <span className="text-lg text-gray-700 leading-relaxed">
                              {selectedBook.publisher[language] || selectedBook.publisher.marathi}
                            </span>
                          </div>
                        )}
                        {selectedBook.release && selectedBook.release.length > 0 && (
                          <div>
                            <span className="font-semibold text-gray-700 text-lg block mb-2">
                              {language === 'marathi' ? 'प्रकाशन तारीख:' : 'Release Date:'}
                            </span>
                            <div className="text-lg text-gray-700 space-y-1">
                              {selectedBook.release.map((date, idx) => (
                                <div key={idx}>
                                  {typeof date === 'object' && date !== null
                                    ? (date[language] || date.marathi || date.english)
                                    : date}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brief */}
                {selectedBook.brief && (
                  <div className="mb-8 pb-8 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === 'marathi' ? 'संक्षिप्त परिचय' : 'Brief'}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {selectedBook.brief[language] || selectedBook.brief.marathi}
                    </p>
                  </div>
                )}

                {/* Synopsis */}
                {selectedBook.synopsis && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === 'marathi' ? 'सारांश' : 'Synopsis'}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                      {selectedBook.synopsis[language] || selectedBook.synopsis.marathi}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Books;
