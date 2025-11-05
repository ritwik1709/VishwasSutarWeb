import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Samajbhan = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-shadow">
            {t.samajbhan.title}
          </h1>
          <p className="text-xl text-primary-600">
            {t.samajbhan.subtitle}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* About Samajbhan */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.samajbhan.about.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.samajbhan.about.content}
            </p>
          </section>

          {/* Mission */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {t.samajbhan.mission.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.samajbhan.mission.content}
                </p>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t.samajbhan.activities.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.samajbhan.activities.content.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Work Done */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.samajbhan.works.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.samajbhan.works.content}
            </p>
          </section>

          {/* Contact/Support */}
          <section className="glass rounded-2xl p-8 shadow-xl bg-gradient-to-br from-primary-50 to-accent-50">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'marathi' ? 'सहभाग' : 'Get Involved'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {language === 'marathi' 
                ? 'समाजभान समुहाच्या कार्यात सहभागी व्हा आणि समाजसेवेच्या कामात योगदान द्या. अधिक माहितीसाठी संपर्क करा.' 
                : 'Join the Samajbhan group and contribute to social service work. Contact us for more information.'}
            </p>
            <div className="flex items-center gap-4 text-gray-700">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-semibold">
                {t.home.contact}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Samajbhan;

