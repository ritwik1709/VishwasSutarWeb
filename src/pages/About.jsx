import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-shadow">
            {t.about.title}
          </h1>
          <p className="text-xl text-primary-600">
            {t.about.subtitle}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.about.sections.introduction.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.sections.introduction.content}
            </p>
          </section>

          {/* Education */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.about.sections.education.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.sections.education.content}
            </p>
          </section>

          {/* Music */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.about.sections.music.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.sections.music.content}
            </p>
          </section>

          {/* Writing */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.about.sections.writing.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.sections.writing.content}
            </p>
          </section>

          {/* Social Service */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.about.sections.social.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.sections.social.content}
            </p>
          </section>

          {/* Achievements */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t.about.sections.achievements.title}
            </h2>
            <ul className="space-y-4">
              {t.about.sections.achievements.content.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {achievement}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

