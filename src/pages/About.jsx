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
          {/* Personal Information */}
          <section className="glass rounded-2xl p-8 shadow-xl bg-gradient-to-br from-primary-50 to-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t.about.sections.personalInfo.title}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="text-xl font-semibold text-gray-800 mb-1">
                    {t.about.sections.personalInfo.fullName}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <p className="text-lg text-gray-700">
                    {t.about.sections.personalInfo.qualifications}
                  </p>
                  <p className="text-lg text-gray-700 mt-1">
                    {t.about.sections.personalInfo.musicQualification}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg text-gray-700">
                  {t.about.sections.personalInfo.dateOfBirth}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg text-gray-700">
                  {t.about.sections.personalInfo.birthplace}
                </p>
              </div>
            </div>
          </section>

          {/* Family Background */}
          <section className="glass rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t.about.sections.familyBackground.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.sections.familyBackground.content}
            </p>
          </section>

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

          {/* Awards */}
          <section className="glass rounded-2xl p-8 shadow-xl bg-gradient-to-br from-accent-50 to-white">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t.about.sections.awards.title}
            </h2>
            <ul className="space-y-4">
              {t.about.sections.awards.content.map((award, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {award}
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

