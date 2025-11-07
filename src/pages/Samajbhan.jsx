import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Samajbhan = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const workItems = t.samajbhan.works.items || [];

  // Function to clean title by removing emojis and numbers
  const cleanTitle = (title) => {
    // Remove emojis (common emoji ranges)
    let cleaned = title.replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
                      .replace(/[\u{2600}-\u{26FF}]/gu, '')
                      .replace(/[\u{2700}-\u{27BF}]/gu, '')
                      .replace(/[\u{1F600}-\u{1F64F}]/gu, '')
                      .replace(/[\u{1F680}-\u{1F6FF}]/gu, '');
    // Remove leading numbers and dots
    cleaned = cleaned.replace(/^\d+\.\s*/, '').trim();
    return cleaned;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}></div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-sm md:text-base font-semibold">
                {language === 'marathi' ? 'समाजसेवा करणारा समुह' : 'A Social Service Group'}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg leading-tight">
              {t.samajbhan.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t.samajbhan.about.content}
            </p>
            {workItems.length > 0 && (
              <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold">{workItems.length}+</div>
                  <div className="text-sm md:text-base text-white/90 mt-1">
                    {language === 'marathi' ? 'केलेले काम' : 'Works Completed'}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold">2019</div>
                  <div className="text-sm md:text-base text-white/90 mt-1">
                    {language === 'marathi' ? 'पासून कार्यरत' : 'Since'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {t.samajbhan.mission.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.samajbhan.mission.content}
                </p>
              </div>
            </div>

            {/* Activities Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {t.samajbhan.activities.title}
                </h2>
                <div className="space-y-3">
                  {t.samajbhan.activities.content.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full"></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Done Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                {language === 'marathi' ? 'आमचे कार्य' : 'Our Work'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t.samajbhan.works.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t.samajbhan.works.content}
              </p>
            </div>

            {/* Work Items Timeline */}
            {workItems.length > 0 && (
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300"></div>
                
                <div className="space-y-8">
                  {workItems.map((work, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute left-6 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                      
                      <div className="ml-0 md:ml-20">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                              {cleanTitle(work.title)}
                            </h3>
                            <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold whitespace-nowrap">
                              {work.date}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Get Involved CTA Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'marathi' ? 'सहभाग' : 'Get Involved'}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {language === 'marathi' 
                  ? 'समाजभान समुहाच्या कार्यात सहभागी व्हा आणि समाजसेवेच्या कामात योगदान द्या. अधिक माहितीसाठी संपर्क करा.' 
                  : 'Join the Samajbhan group and contribute to social service work. Contact us for more information.'}
              </p>
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg md:text-xl font-semibold">
                  {t.home.contact}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Samajbhan;

