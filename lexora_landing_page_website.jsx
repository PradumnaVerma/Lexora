export default function LexoraWebsite() {
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=com.prismstudio.lexora'

  const features = [
    {
      title: 'Advanced Vocabulary',
      description:
        'Learn powerful English words with meanings, examples, synonyms and antonyms.'
    },
    {
      title: 'Interactive Quizzes',
      description:
        'Practice daily using smart quizzes designed for strong word retention.'
    },
    {
      title: 'Vocabulary Wallpapers',
      description:
        'Learn new words directly from your lock screen and wallpapers.'
    },
    {
      title: 'CAT & IELTS Preparation',
      description:
        'Special vocabulary collections designed for competitive exams.'
    },
    {
      title: 'Daily Streaks & Rewards',
      description:
        'Stay motivated with streak tracking, XP and reward points.'
    },
    {
      title: 'Save Custom Words',
      description:
        'Create your own personalized vocabulary collections and revision lists.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#020B1C] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-sm mb-6">
              Lexora • Advanced English Vocabulary App
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Learn <span className="text-yellow-400">Advanced</span> English Smarter
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Master vocabulary for CAT, IELTS, GRE and daily communication using quizzes, streaks, idioms, wallpapers and gamified learning.
            </p>

            <div className="relative z-50 flex flex-wrap gap-4 mt-10">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition-transform"
              >
                Download on Google Play
              </a>

              <a
                href="#features"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                Explore Features
              </a>
            </div>

            <div className="flex flex-wrap gap-10 mt-12">
              <div>
                <p className="text-4xl font-black text-yellow-400">24K+</p>
                <p className="text-gray-400 mt-2">Advanced Words</p>
              </div>

              <div>
                <p className="text-4xl font-black text-yellow-400">1000+</p>
                <p className="text-gray-400 mt-2">Interactive Quizzes</p>
              </div>

              <div>
                <p className="text-4xl font-black text-yellow-400">CAT + IELTS</p>
                <p className="text-gray-400 mt-2">Focused Learning</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center z-20">
            <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />

            <div className="w-[330px] rounded-[42px] border border-white/10 bg-[#08152C] p-5 shadow-2xl">
              <div className="rounded-[30px] overflow-hidden bg-[#071225]">
                <div className="p-6 border-b border-white/5">
                  <p className="text-yellow-400 uppercase tracking-[0.25em] text-xs mb-3">
                    Word of the Day
                  </p>

                  <h2 className="text-5xl font-black text-yellow-400">
                    Aberration
                  </h2>

                  <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                    A departure from what is normal or expected.
                  </p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-[#112347] rounded-2xl p-4">
                    <p className="text-sm text-gray-400">Synonym</p>
                    <p className="font-semibold mt-1">Anomaly</p>
                  </div>

                  <div className="bg-[#112347] rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-gray-400">Quiz Progress</p>
                      <p className="text-yellow-400 font-bold">75%</p>
                    </div>

                    <div className="w-full h-3 rounded-full bg-black/20 overflow-hidden">
                      <div className="w-3/4 h-full bg-yellow-400 rounded-full" />
                    </div>
                  </div>

                  <div className="bg-[#112347] rounded-2xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Current Streak</p>
                      <p className="font-bold text-xl mt-1">18 Days</p>
                    </div>

                    <div className="text-3xl">🔥</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Features
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Everything You Need To Improve English
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#08152C] border border-white/10 rounded-3xl p-8 hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-2xl mb-6">
                  ✦
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Section */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-yellow-400/20 bg-gradient-to-br from-[#0A1730] to-[#12274F] p-10 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4 relative z-10">
            Lexora Pro
          </p>

          <h2 className="text-4xl md:text-6xl font-black relative z-10">
            Unlock Your Vocabulary Potential
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 relative z-10">
            Access unlimited quizzes, premium vocabulary packs, wallpaper learning and an ad-free experience.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-14 text-left relative z-10">
            {[
              '24,000+ Premium Words',
              'Unlimited Smart Quizzes',
              'Vocabulary Wallpapers',
              'CAT & IELTS Premium Packs',
              'Ad-Free Experience',
              'Unlimited Saved Words',
              'Premium Themes',
              'Faster XP & Rewards'
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold">
                  ✓
                </div>

                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="relative z-20 mt-12">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-yellow-400 text-black font-black text-lg hover:scale-105 transition-transform"
            >
              Download Lexora Now
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="px-6 py-24 md:px-16 lg:px-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Privacy Policy
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Your Privacy Matters
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="bg-[#08152C] border border-white/10 rounded-3xl p-8">
              Lexora may collect anonymous analytics, crash reports and advertising identifiers to improve app functionality and user experience.
            </div>

            <div className="bg-[#08152C] border border-white/10 rounded-3xl p-8">
              Lexora may display advertisements through Google AdMob and trusted advertising providers.
            </div>

            <div className="bg-[#08152C] border border-white/10 rounded-3xl p-8">
              We do not sell personal information. User data is protected using reasonable security measures.
            </div>

            <div className="bg-[#08152C] border border-white/10 rounded-3xl p-8">
              Contact: prismstudio.help@gmail.com
            </div>
          </div>
        </div>
      </section>

      {/* app-ads.txt */}
      <section className="px-6 pb-24 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto bg-[#08152C] border border-yellow-400/20 rounded-[32px] p-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4 relative z-10">
            app-ads.txt
          </p>

          <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
            Authorized Advertising Systems
          </h2>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6 relative z-10 overflow-x-auto">
            <code className="text-green-400 text-sm md:text-base break-all">
              google.com, pub-7112569004338666, DIRECT, f08c47fec0942fa0
            </code>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black text-yellow-400">
              LEXORA
            </h3>

            <p className="text-gray-400 mt-2">
              Advanced English Vocabulary Learning Platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a
              href="mailto:prismstudio.help@gmail.com"
              className="hover:text-white transition"
            >
              Contact
            </a>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:scale-105 transition-transform"
            >
              Get Lexora
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
