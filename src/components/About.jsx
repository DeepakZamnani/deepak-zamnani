export default function About() {
  const skills = [
    'React & Next.js',
    'Node.js & Express',
    'UI/UX Design',
    'TypeScript',
    'Tailwind CSS',
    'MongoDB & PostgreSQL',
    'Figma & Adobe XD',
    'REST APIs',
    'Git & GitHub',
    'Responsive Design',
    'Performance Optimization',
    'Web Accessibility'
  ]

  const experience = [
    {
      year: '2025',
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      description: 'Leading development of scalable web applications, mentoring junior developers, and architecting solutions for enterprise clients.',
      highlights: ['React', 'Node.js', 'AWS']
    },
    {
      year: '2023',
      role: 'Full-Stack Developer',
      company: 'Creative Digital Studio',
      description: 'Built responsive web applications, designed intuitive user interfaces, and collaborated with cross-functional teams.',
      highlights: ['JavaScript', 'UI/UX', 'Agile']
    },
    {
      year: '2021',
      role: 'Frontend Developer',
      company: 'StartUp Ventures',
      description: 'Developed modern web interfaces, implemented design systems, and optimized application performance.',
      highlights: ['React', 'CSS', 'Design']
    }
  ]

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Dedication' }
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] relative overflow-y-auto">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, #1a1a1a 50px, #1a1a1a 51px)',
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-8 lg:px-16 pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Script Title */}
          <div className="flex items-center justify-center gap-8 lg:gap-16 mb-16 lg:mb-20">
            <span className="text-2xl lg:text-3xl text-[#D4AF37] opacity-40">✻</span>
            <h1 
              className="text-6xl lg:text-8xl text-[#D4AF37]"
              style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
            >
              About Me
            </h1>
            <span className="text-2xl lg:text-3xl text-[#D4AF37] opacity-40">✻</span>
          </div>

          {/* Main Content - Portrait + Bio */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
            {/* Portrait */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative">
                {/* Gold border ring */}
                <div className="absolute -inset-4 border-2 border-[#D4AF37] rounded-full opacity-30"></div>
                <div className="absolute -inset-2 border border-[#D4AF37] rounded-full opacity-50"></div>
                
                {/* Portrait placeholder */}
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#faf8f5] to-[#f0ede8] border border-[#D4AF37] shadow-xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-6xl lg:text-7xl font-black text-[#1a1a1a] opacity-10 mb-2">DZ</div>
                    <p className="text-xs text-[#D4AF37] tracking-[0.3em] uppercase">Portrait</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="w-full lg:w-3/5">
              {/* Small label */}
              <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-6">Introduction</p>
              
              {/* Name */}
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6 leading-tight">
                I'm Deepak<br/>Zamnani
              </h2>

              {/* Bio paragraphs */}
              <div className="space-y-4 mb-8">
                <p className="text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
                  A passionate full-stack developer and UI/UX designer crafting digital experiences that blend aesthetics with functionality. With over 5 years of experience, I transform ideas into elegant solutions.
                </p>
                <p className="text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
                  I believe in creating work that not only looks beautiful but also solves real problems. Every project is an opportunity to push boundaries and deliver excellence.
                </p>
              </div>

              {/* CTA Button */}
              <button className="px-8 py-3 border-2 border-[#D4AF37] text-[#1a1a1a] text-sm font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                View Resume
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <div className="flex-1 h-px" style={{
              backgroundImage: 'repeating-linear-gradient(to right, #D4AF37, #D4AF37 4px, transparent 4px, transparent 8px)',
              opacity: 0.3
            }}></div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">2025</span>
            <div className="flex-1 h-px" style={{
              backgroundImage: 'repeating-linear-gradient(to right, #D4AF37, #D4AF37 4px, transparent 4px, transparent 8px)',
              opacity: 0.3
            }}></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-3">
                  {stat.number}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">What I Do</p>
            <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tight text-[#1a1a1a] opacity-10 mb-8">
              EXPERTISE
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-[#fefdfb] border border-[#e8e6e3] hover:border-[#D4AF37] px-6 py-4 rounded-lg text-center transition-all duration-300 hover:shadow-md group"
              >
                <span className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#D4AF37] transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="relative z-10 px-8 lg:px-16 py-20 lg:py-32 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-6">My Journey</p>
            <h2 
              className="text-5xl lg:text-7xl text-[#D4AF37] mb-4"
              style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
            >
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-16 lg:space-y-20">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-start`}
              >
                {/* Year marker */}
                <div className="w-full lg:w-1/4 flex lg:justify-center">
                  <div className="relative">
                    <div className="text-6xl lg:text-7xl font-black text-[#1a1a1a] opacity-5">
                      {exp.year}
                    </div>
                    <div className="absolute top-1/2 left-0 w-3 h-3 bg-[#D4AF37] rounded-full -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/4">
                  <div className="bg-white border-l-4 border-[#D4AF37] rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-sm tracking-wide text-[#D4AF37] mb-4 uppercase">
                      {exp.company}
                    </p>
                    <p className="text-base leading-relaxed text-[#4a4a4a] mb-6">
                      {exp.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 border border-[#D4AF37] text-[#D4AF37] text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative z-10 px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl lg:text-7xl text-[#D4AF37] mb-8"
            style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
          >
            My Approach
          </h2>
          
          <p className="text-lg lg:text-xl leading-relaxed text-[#4a4a4a] mb-6">
            I believe in the power of <span className="text-[#D4AF37] font-semibold">simplicity</span> and <span className="text-[#D4AF37] font-semibold">thoughtful design</span>. Every line of code, every pixel matters. My goal is to create experiences that feel effortless yet deliver exceptional results.
          </p>
          
          <p className="text-base lg:text-lg leading-relaxed text-[#4a4a4a]">
            Collaboration, continuous learning, and attention to detail are the pillars of my work philosophy.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-8 lg:px-16 py-20 lg:py-32 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            className="text-5xl lg:text-7xl text-[#D4AF37] mb-6"
            style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
          >
            Let's create together
          </h3>
          <p className="text-sm tracking-[0.3em] uppercase text-[#1a1a1a] opacity-60 mb-12">
            Ready to bring your ideas to life?
          </p>
          <button className="px-12 py-4 border-2 border-[#D4AF37] text-[#1a1a1a] text-sm font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}