// Add these font imports to your index.html or main CSS file:
// <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Bebas+Neue&display=swap" rel="stylesheet">
// Or for Google Fonts API:
// <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Anton&display=swap" rel="stylesheet">

export default function About() {
  return (
    <div className="min-h-screen  pt-24 pb-16 flex items-center justify-center px-4">
      {/* Centered Content Box */}
      <div className="w-full max-w-4xl">
        
        {/* Main Content Box */}
        <div className="bg-[#3a3835] px-8 md:px-16 py-12 md:py-16 relative">
          
          {/* Dotted Line Separator - Top */}
          <div className="absolute top-0 left-0 right-0 border-t border-dotted border-[#8B7355] opacity-30"></div>
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-[#a89984] text-[10px] md:text-xs tracking-[0.3em] mb-3 font-light uppercase">ABOUT ME</p>
            <h1 className="font-['Great_Vibes'] text-[#d4c5a9] text-4xl md:text-5xl leading-tight mb-2 font-normal">
              Let's work together!
            </h1>
            <h2 className="text-[#d4c5a9] text-4xl md:text-5xl font-black tracking-[-0.05em] leading-none" style={{fontFamily: "'Bebas Neue', 'Anton', sans-serif"}}>
              DEEPAK ZAMNANI
            </h2>
          </div>

          {/* Dotted Line Separator - Middle */}
          <div className="w-full border-t border-dotted border-[#8B7355] opacity-30 my-10"></div>

          {/* Bio Section */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-[#d4c5a9] text-sm md:text-base leading-relaxed mb-4 text-center font-light">
              I'm a full-stack developer and designer passionate about creating elegant, 
              user-centered digital solutions. My approach combines technical expertise 
              with a refined aesthetic sensibility.
            </p>
            <p className="text-[#a89984] text-xs md:text-sm leading-relaxed text-center font-light">
              With a focus on modern web technologies and clean architecture, I build 
              experiences that are both beautiful and functional.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <h3 className="text-[#d4c5a9] text-sm md:text-base font-black mb-3 tracking-wider uppercase" style={{fontFamily: "'Bebas Neue', 'Anton', sans-serif"}}>
                FRONTEND
              </h3>
              <p className="text-[#a89984] text-xs leading-relaxed font-light">
                React · Next.js · TypeScript
                <br />Vue.js · Tailwind CSS
                <br />GSAP · Framer Motion
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-[#d4c5a9] text-sm md:text-base font-black mb-3 tracking-wider uppercase" style={{fontFamily: "'Bebas Neue', 'Anton', sans-serif"}}>
                BACKEND
              </h3>
              <p className="text-[#a89984] text-xs leading-relaxed font-light">
                Node.js · Express · Python
                <br />Django · PostgreSQL
                <br />MongoDB · REST APIs
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-[#d4c5a9] text-sm md:text-base font-black mb-3 tracking-wider uppercase" style={{fontFamily: "'Bebas Neue', 'Anton', sans-serif"}}>
                TOOLS
              </h3>
              <p className="text-[#a89984] text-xs leading-relaxed font-light">
                Git · Docker · AWS
                <br />Figma · Adobe Suite
                <br />Agile · CI/CD
              </p>
            </div>
          </div>

          {/* Dotted Line Separator - Bottom */}
          <div className="w-full border-t border-dotted border-[#8B7355] opacity-30 my-10"></div>

          {/* Contact CTA */}
          <div className="text-center">
            <p className="font-['Great_Vibes'] text-[#d4c5a9] text-3xl md:text-4xl mb-3 font-normal">
              Let's work together
            </p>
            <a 
              href="mailto:your.email@example.com" 
              className="inline-block text-[#d4c5a9] text-3xl md:text-5xl font-black tracking-[-0.05em] leading-none hover:text-[#8B7355] transition-colors duration-300"
              style={{fontFamily: "'Bebas Neue', 'Anton', sans-serif"}}
            >
              REACH OUT
            </a>
          </div>

          {/* Dotted Line Separator - Bottom Edge */}
          <div className="absolute bottom-0 left-0 right-0 border-b border-dotted border-[#8B7355] opacity-30"></div>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-[#a89984] text-[10px] md:text-xs gap-3">
          <div>
            <span className="opacity-60">Available for freelance — 2025</span>
          </div>
          <div className="flex gap-4 md:gap-5">
            <a href="#" className="hover:text-[#d4c5a9] transition-colors duration-200 tracking-wide">LINKEDIN</a>
            <a href="#" className="hover:text-[#d4c5a9] transition-colors duration-200 tracking-wide">GITHUB</a>
            <a href="#" className="hover:text-[#d4c5a9] transition-colors duration-200 tracking-wide">BEHANCE</a>
          </div>
        </div>
      </div>
    </div>
  );
}