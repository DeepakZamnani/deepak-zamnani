import React, { useState, useEffect, useRef } from 'react';

export default function Hero({ onNavigateToProjects }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const heroRef = useRef(null);
  const deepakRef = useRef(null);
  const zamnaniRef = useRef(null);
  // const imageRef = useRef(null);
  const taglineRef = useRef(null);
  const decorLineRef = useRef(null);
  const aboutLabelRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutDescRef = useRef(null);
  const learnMoreRef = useRef(null);
  const worksHeaderRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const projectRefs = useRef([]);

  // Top 2 featured projects
  const featuredProjects = [
    {
      id: 1,
      title: "Vellora",
      subtitle: "LUXURY FASHION",
      category: 'BRANDING',
      description: "A PREMIUM FASHION BRAND IDENTITY THAT BLENDS MODERN ELEGANCE WITH TIMELESS SOPHISTICATION.",
      details: "Brand strategy, visual identity, digital presence",
      year: '2025',
      color: '#FF6B6B',
      tags: ['Branding', 'Fashion', 'Luxury']
    },
    {
      id: 2,
      title: "Nexus",
      subtitle: "FINTECH APP",
      category: 'UI/UX',
      description: "AN INNOVATIVE FINANCIAL PLATFORM DESIGNED TO SIMPLIFY INVESTMENTS AND WEALTH MANAGEMENT.",
      details: "User experience design, interface design, prototyping",
      year: '2024',
      color: '#FF6B6B',
      tags: ['UI/UX', 'Fintech', 'Mobile']
    }
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      if (window.gsap) {
        setGsapLoaded(true);
        return;
      }

      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      gsapScript.async = true;

      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      scrollTriggerScript.async = true;

      document.head.appendChild(gsapScript);

      gsapScript.onload = () => {
        document.head.appendChild(scrollTriggerScript);
        scrollTriggerScript.onload = () => {
          setGsapLoaded(true);
        };
      };
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Decorative line animation
      tl.from(decorLineRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.inOut'
      }, 0.4);

      // // Image container - dramatic entrance
      // tl.from(imageRef.current, {
      //   y: 150,
      //   opacity: 0,
      //   scale: 0.8,
      //   rotationX: -15,
      //   duration: 1.4,
      //   ease: 'power4.out'
      // }, 0.6);

      // Image inner glow effect
      // tl.from(imageRef.current.querySelector('.image-inner'), {
      //   scale: 0.9,
      //   opacity: 0,
      //   duration: 1,
      //   ease: 'back.out(1.7)'
      // }, 1);

      // Tagline with stagger
      tl.from(taglineRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      }, 1.2);

      // Name split animation
      tl.from(deepakRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, 1.4);

      tl.from(zamnaniRef.current, {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, 1.4);

      // About section animations
      tl.from(aboutLabelRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 2);

      tl.from(aboutTitleRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power4.out'
      }, 2.2);

      tl.from(aboutDescRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 2.6);

      tl.from(learnMoreRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, 2.8);

      // Scroll-triggered exit animations
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          gsap.to(deepakRef.current, {
            x: -window.innerWidth * progress * 1.5,
            opacity: 1 - progress * 2,
            duration: 0
          });

          gsap.to(zamnaniRef.current, {
            x: window.innerWidth * progress * 1.5,
            opacity: 1 - progress * 2,
            duration: 0
          });

          // gsap.to([imageRef.current, taglineRef.current], {
          //   opacity: 1 - progress * 1.5,
          //   scale: 1 - progress * 0.3,
          //   y: -100 * progress,
          //   duration: 0
          // });

          gsap.to([aboutLabelRef.current, aboutTitleRef.current, aboutDescRef.current, learnMoreRef.current], {
            opacity: 1 - progress * 0.8,
            y: -30 * progress,
            duration: 0
          });
        }
      });

      // Works header animation
      gsap.from(worksHeaderRef.current.querySelector('.header-line'), {
        scrollTrigger: {
          trigger: worksHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from(worksHeaderRef.current.querySelector('.script-text'), {
        scrollTrigger: {
          trigger: worksHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3
      });

      gsap.from(worksHeaderRef.current.querySelector('.works-text'), {
        scrollTrigger: {
          trigger: worksHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.4
      });

      gsap.from(worksHeaderRef.current.querySelector('.header-star'), {
        scrollTrigger: {
          trigger: worksHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(2)',
        delay: 0.7
      });

      // Projects animations
      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        const image = projectRef.querySelector('.project-image');
        const info = projectRef.querySelector('.project-info');
        const button = projectRef.querySelector('.view-button');
        const yearLine = projectRef.querySelector('.year-line');
        const tags = projectRef.querySelectorAll('.project-tag');

        const projectTl = gsap.timeline({
          scrollTrigger: {
            trigger: projectRef,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        });

        projectTl.from(image, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: 'power3.out'
        }, 0);

        projectTl.from(info, {
          x: index % 2 === 0 ? 100 : -100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        }, 0.2);

        projectTl.from(yearLine, {
          scaleX: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, 0.4);

        projectTl.from(tags, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, 0.6);

        projectTl.from(button, {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)'
        }, 0.8);
      });

      // View All button animation
      gsap.from('.view-all-projects-btn', {
        scrollTrigger: {
          trigger: '.view-all-projects-btn',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.6)'
      });

    }, heroRef);

    return () => ctx.revert();
  }, [gsapLoaded]);

  return (
    <>
      {/* Hero Section - TRANSPARENT BACKGROUND */}
      <div ref={heroRef} className="min-h-[200vh] w-screen relative">
        <div className="h-max w-screen flex flex-col sticky top-0 overflow-hidden">
          {/* Dotted Line Decoration */}
        

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-8 lg:py-12">
            {/* Image Container */}
        

            {/* Tagline */}
            <h2 
              ref={taglineRef}
              className="text-2xl lg:text-3xl font-normal text-center leading-relaxed text-[#1a1a1a] max-w-3xl mb-8 lg:mb-12" 
              style={{fontFamily: "'Playfair Display', serif"}}
            >
              <span className="inline-block">Crafting </span>
              <strong className="inline-block font-['playfairdisplay']">digital experiences</strong>
              <br />
              <span className="inline-block">that inspire and engage.</span>
            </h2>

            {/* Name Title */}
            <div className="w-full mb-12 lg:mb-16">
              <h1 className="font-['Brixton'] font-black text-[14vw] lg:text-[18vw] uppercase tracking-tighter text-[#1a1a1a] leading-[0.85] text-center">
                <span ref={deepakRef} className="inline-block">DEEPAK </span>
                <span ref={zamnaniRef} className="inline-block">ZAMNANI</span>
              </h1>
            </div>

            {/* About Section */}
            <div className="w-full max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
              <div ref={aboutLabelRef}>
                <p className="text-[10px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-[#1a1a1a] opacity-60">
                  ABOUT ME
                </p>
              </div>

              <h2 
                ref={aboutTitleRef}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight text-[#1a1a1a]"
                style={{fontFamily: "'Playfair Display', serif"}}
              >
                <span className="inline-block">A bespoke web designer on a </span>
                <span className="inline-block">mission to elevate value </span>
                <span className="inline-block">driven brands.</span>
              </h2>

              <p 
                ref={aboutDescRef}
                className="text-sm lg:text-base text-[#1a1a1a] opacity-70 max-w-2xl mx-auto leading-relaxed font-medium"
              >
                I create strategic assets that elevate your brand, engaging your audience, amplifying your presence, and differentiate you from the crowd.
              </p>

              <div ref={learnMoreRef} className="pt-6 lg:pt-8">
                <div className="flex items-center justify-center gap-4">
                  <div 
                    className="flex-1 h-px max-w-[200px]" 
                    style={{
                      backgroundImage: 'repeating-linear-gradient(to right, #1a1a1a, #1a1a1a 3px, transparent 3px, transparent 6px)',
                    }}
                  />
                  <button className="group flex items-center gap-3 text-[#1a1a1a] font-bold text-sm lg:text-base tracking-[0.15em] uppercase hover:opacity-60 transition-all duration-300 bg-transparent border-none cursor-pointer">
                    <span>LEARN MORE</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                  <div 
                    className="flex-1 h-px max-w-[200px]" 
                    style={{
                      backgroundImage: 'repeating-linear-gradient(to right, #1a1a1a, #1a1a1a 3px, transparent 3px, transparent 6px)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Works Section - TRANSPARENT BACKGROUND */}
      <div className="min-h-max w-screen py-20 lg:py-32">
        {/* Works Header */}
        <div ref={worksHeaderRef} className="w-full max-w-7xl mx-auto px-8 lg:px-16 mb-20 lg:mb-24">
          <div className="text-center space-y-6">
            <div className="script-text text-xl lg:text-2xl opacity-50 text-[#1a1a1a]"
              style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
            >
              Handpicked
            </div>
            
            <div className="flex items-center justify-center gap-8">
              <div className="header-line w-24 lg:w-32 h-px bg-[#1a1a1a] opacity-30"></div>
              <h1 
                className="works-text text-7xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter text-[#1a1a1a]"
                style={{ 
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  letterSpacing: '-0.05em',
                  textTransform: 'uppercase'
                }}
              >
                WORKS
              </h1>
              <div className="header-line w-24 lg:w-32 h-px bg-[#1a1a1a] opacity-30"></div>
            </div>
            
            <div className="header-star text-2xl opacity-30 text-[#1a1a1a]">✦ ✦ ✦</div>
          </div>
        </div>

        {/* Featured Projects */}
        <div ref={projectsSectionRef} className="w-full max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  
                  {/* Project Image */}
                  <div className="project-image relative aspect-[16/10] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center p-8">
                      <div className="w-[85%] h-[85%] bg-[#0a0a0a] rounded-lg border-2 border-[#2a2a2a] flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105">
                        <div className="text-center">
                          <h3 
                            className="text-2xl lg:text-4xl text-white mb-1"
                            style={{fontFamily: "'Playfair Display', serif"}}
                          >
                            {project.title}
                          </h3>
                          <p className="text-[10px] tracking-[0.3em] uppercase text-white opacity-50">
                            {project.subtitle}
                          </p>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: project.color }}></div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-white" style={{ backgroundColor: project.color }}>
                      {project.category}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="project-info p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <h2 
                        className="text-4xl lg:text-5xl"
                        style={{fontFamily: "'Allura', 'Dancing Script', cursive", color: project.color}}
                      >
                        {project.title}
                      </h2>
                      <span className="text-sm font-bold mt-2" style={{ color: project.color }}>{project.year}</span>
                    </div>

                    <p className="text-sm text-[#1a1a1a] opacity-70 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="year-line w-full h-px mb-6" style={{ backgroundColor: project.color, opacity: 0.2 }}></div>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="project-tag px-3 py-1 bg-transparent text-[10px] tracking-wider rounded-full font-semibold"
                            style={{ 
                              borderColor: project.color,
                              color: project.color,
                              borderWidth: '1px',
                              borderStyle: 'solid'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        className="view-button text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:scale-105 border-none cursor-pointer"
                        style={{ backgroundColor: project.color }}
                      >
                        VIEW →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center view-all-projects-btn">
          <button 
            onClick={onNavigateToProjects}
            className="group relative px-16 py-6 bg-[#1a1a1a] text-white text-sm font-bold tracking-[0.25em] uppercase rounded-full shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border-none cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s ease' }}></div>
            
            <span className="relative z-10 flex items-center gap-4">
              <span>EXPLORE ALL PROJECTS</span>
              <span className="text-xl">→</span>
            </span>
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-[rgba(26,26,26,0.95)] z-[999] flex items-center justify-center transition-opacity duration-400 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 lg:top-8 right-8 lg:right-12 text-[#f5f5f0] text-2xl lg:text-3xl hover:opacity-60 transition-opacity duration-300 bg-transparent border-none cursor-pointer">
          ✕
        </button>
        
        <div className="flex flex-col gap-6 lg:gap-8 items-center">
          {['Work', 'About', 'Services', 'Contact'].map((item, index) => (
            <div 
              key={item}
              className={`text-3xl lg:text-5xl font-semibold text-[#f5f5f0] uppercase tracking-wide cursor-pointer hover:translate-x-2 hover:opacity-70 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{
                transitionDelay: isMenuOpen ? `${0.1 * (index + 1)}s` : '0s'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// import React, { useState, useEffect, useRef } from 'react';

// export default function Hero({ onNavigateToProjects }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [gsapLoaded, setGsapLoaded] = useState(false);
//   const heroRef = useRef(null);
//   const deepakRef = useRef(null);
//   const zamnaniRef = useRef(null);
//   const imageRef = useRef(null);
//   const taglineRef = useRef(null);
//   const decorLineRef = useRef(null);
//   const aboutLabelRef = useRef(null);
//   const aboutTitleRef = useRef(null);
//   const aboutDescRef = useRef(null);
//   const learnMoreRef = useRef(null);
//   const worksHeaderRef = useRef(null);
//   const projectsSectionRef = useRef(null);
//   const projectRefs = useRef([]);

//   // Top 2 featured projects
//   const featuredProjects = [
//     {
//       id: 1,
//       title: "Vellora",
//       subtitle: "LUXURY FASHION",
//       category: 'BRANDING',
//       description: "A PREMIUM FASHION BRAND IDENTITY THAT BLENDS MODERN ELEGANCE WITH TIMELESS SOPHISTICATION.",
//       details: "Brand strategy, visual identity, digital presence",
//       year: '2025',
//       color: '#FF6B6B',
//       tags: ['Branding', 'Fashion', 'Luxury']
//     },
//     {
//       id: 2,
//       title: "Nexus",
//       subtitle: "FINTECH APP",
//       category: 'UI/UX',
//       description: "AN INNOVATIVE FINANCIAL PLATFORM DESIGNED TO SIMPLIFY INVESTMENTS AND WEALTH MANAGEMENT.",
//       details: "User experience design, interface design, prototyping",
//       year: '2024',
//       color: '#FF6B6B',
//       tags: ['UI/UX', 'Fintech', 'Mobile']
//     }
//   ];

//   useEffect(() => {
//     const loadGSAP = async () => {
//       if (window.gsap) {
//         setGsapLoaded(true);
//         return;
//       }

//       const gsapScript = document.createElement('script');
//       gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
//       gsapScript.async = true;

//       const scrollTriggerScript = document.createElement('script');
//       scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
//       scrollTriggerScript.async = true;

//       document.head.appendChild(gsapScript);

//       gsapScript.onload = () => {
//         document.head.appendChild(scrollTriggerScript);
//         scrollTriggerScript.onload = () => {
//           setGsapLoaded(true);
//         };
//       };
//     };

//     loadGSAP();
//   }, []);

//   useEffect(() => {
//     if (!gsapLoaded || !window.gsap) return;

//     const gsap = window.gsap;
//     const ScrollTrigger = window.ScrollTrigger;
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

//       // Decorative line animation
//       tl.from(decorLineRef.current, {
//         scaleX: 0,
//         opacity: 0,
//         duration: 1.2,
//         ease: 'power4.inOut'
//       }, 0.4);

//       // Image container - dramatic entrance
//       tl.from(imageRef.current, {
//         y: 150,
//         opacity: 0,
//         scale: 0.8,
//         rotationX: -15,
//         duration: 1.4,
//         ease: 'power4.out'
//       }, 0.6);

//       // Image inner glow effect
//       tl.from(imageRef.current.querySelector('.image-inner'), {
//         scale: 0.9,
//         opacity: 0,
//         duration: 1,
//         ease: 'back.out(1.7)'
//       }, 1);

//       // Tagline with stagger
//       tl.from(taglineRef.current.children, {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: 'power3.out'
//       }, 1.2);

//       // Name split animation
//       tl.from(deepakRef.current, {
//         x: -200,
//         opacity: 0,
//         duration: 1.2,
//         ease: 'power4.out'
//       }, 1.4);

//       tl.from(zamnaniRef.current, {
//         x: 200,
//         opacity: 0,
//         duration: 1.2,
//         ease: 'power4.out'
//       }, 1.4);

//       // About section animations
//       tl.from(aboutLabelRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         ease: 'power3.out'
//       }, 2);

//       tl.from(aboutTitleRef.current.children, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.05,
//         ease: 'power4.out'
//       }, 2.2);

//       tl.from(aboutDescRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 0.8,
//         ease: 'power3.out'
//       }, 2.6);

//       tl.from(learnMoreRef.current, {
//         scaleX: 0,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out'
//       }, 2.8);

//       // Scroll-triggered exit animations
//       ScrollTrigger.create({
//         trigger: heroRef.current,
//         start: 'top top',
//         end: 'bottom top',
//         scrub: 1,
//         onUpdate: (self) => {
//           const progress = self.progress;
          
//           gsap.to(deepakRef.current, {
//             x: -window.innerWidth * progress * 1.5,
//             opacity: 1 - progress * 2,
//             duration: 0
//           });

//           gsap.to(zamnaniRef.current, {
//             x: window.innerWidth * progress * 1.5,
//             opacity: 1 - progress * 2,
//             duration: 0
//           });

//           gsap.to([imageRef.current, taglineRef.current], {
//             opacity: 1 - progress * 1.5,
//             scale: 1 - progress * 0.3,
//             y: -100 * progress,
//             duration: 0
//           });

//           gsap.to([aboutLabelRef.current, aboutTitleRef.current, aboutDescRef.current, learnMoreRef.current], {
//             opacity: 1 - progress * 0.8,
//             y: -30 * progress,
//             duration: 0
//           });
//         }
//       });

//       // Works header animation
//       gsap.from(worksHeaderRef.current.querySelector('.header-line'), {
//         scrollTrigger: {
//           trigger: worksHeaderRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse'
//         },
//         scaleX: 0,
//         transformOrigin: 'left',
//         duration: 1,
//         ease: 'power2.out'
//       });

//       gsap.from(worksHeaderRef.current.querySelector('.script-text'), {
//         scrollTrigger: {
//           trigger: worksHeaderRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse'
//         },
//         opacity: 0,
//         y: 20,
//         duration: 0.8,
//         delay: 0.3
//       });

//       gsap.from(worksHeaderRef.current.querySelector('.works-text'), {
//         scrollTrigger: {
//           trigger: worksHeaderRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse'
//         },
//         x: 100,
//         opacity: 0,
//         duration: 1,
//         ease: 'power4.out',
//         delay: 0.4
//       });

//       gsap.from(worksHeaderRef.current.querySelector('.header-star'), {
//         scrollTrigger: {
//           trigger: worksHeaderRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse'
//         },
//         scale: 0,
//         rotation: 180,
//         opacity: 0,
//         duration: 0.8,
//         ease: 'back.out(2)',
//         delay: 0.7
//       });

//       // Projects animations
//       projectRefs.current.forEach((projectRef, index) => {
//         if (!projectRef) return;

//         const image = projectRef.querySelector('.project-image');
//         const info = projectRef.querySelector('.project-info');
//         const button = projectRef.querySelector('.view-button');
//         const yearLine = projectRef.querySelector('.year-line');
//         const tags = projectRef.querySelectorAll('.project-tag');

//         const projectTl = gsap.timeline({
//           scrollTrigger: {
//             trigger: projectRef,
//             start: 'top 80%',
//             end: 'top 20%',
//             toggleActions: 'play none none reverse'
//           }
//         });

//         projectTl.from(image, {
//           x: index % 2 === 0 ? -100 : 100,
//           opacity: 0,
//           scale: 0.9,
//           duration: 1,
//           ease: 'power3.out'
//         }, 0);

//         projectTl.from(info, {
//           x: index % 2 === 0 ? 100 : -100,
//           opacity: 0,
//           duration: 1,
//           ease: 'power3.out'
//         }, 0.2);

//         projectTl.from(yearLine, {
//           scaleX: 0,
//           duration: 0.8,
//           ease: 'power2.out'
//         }, 0.4);

//         projectTl.from(tags, {
//           scale: 0,
//           opacity: 0,
//           duration: 0.4,
//           stagger: 0.1,
//           ease: 'back.out(2)'
//         }, 0.6);

//         projectTl.from(button, {
//           scale: 0,
//           opacity: 0,
//           duration: 0.6,
//           ease: 'elastic.out(1, 0.5)'
//         }, 0.8);
//       });

//       // View All button animation
//       gsap.from('.view-all-projects-btn', {
//         scrollTrigger: {
//           trigger: '.view-all-projects-btn',
//           start: 'top 85%',
//           toggleActions: 'play none none reverse'
//         },
//         scale: 0,
//         opacity: 0,
//         duration: 0.8,
//         ease: 'elastic.out(1, 0.6)'
//       });

//     }, heroRef);

//     return () => ctx.revert();
//   }, [gsapLoaded]);

//   return (
//     <>
//       {/* Hero Section - TRANSPARENT BACKGROUND */}
//       <div ref={heroRef} className="min-h-[200vh] w-screen relative">
//         <div className="h-max w-screen flex flex-col sticky top-0 overflow-hidden">
//           {/* Dotted Line Decoration */}
        

//           {/* Main Content */}
//           <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-8 lg:py-12">
//             {/* Photo Container */}
//             <div 
//               ref={imageRef}
//               className="w-[85vw] lg:w-[50vw] max-w-[700px] h-[22vh] lg:h-[24vh] relative mb-6 lg:mb-8"
//               style={{ perspective: '1000px' }}
//             >
//               <div className="image-inner w-full h-full relative flex items-center justify-center">
                
//                 {/* 3D Photo */}
//                 <div 
//                   className="relative w-[240px] h-[150px] lg:w-[360px] lg:h-[200px] photo-3d"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                   }}
//                 >
//                   <img 
//                     src="src/assets/ChatGPT_Image_Sep_26__2025__02_40_03_AM-removebg-preview.png"
//                     alt="Deepak Zamnani"
//                     className="w-full h-full object-cover rounded-xl"
//                     style={{
//                       boxShadow: '0 30px 60px rgba(0,0,0,0.2), 0 15px 30px rgba(0,0,0,0.15)',
//                     }}
//                   />
                  
//                   {/* Reflection */}
//                   <div 
//                     className="absolute top-full left-0 w-full h-full rounded-xl overflow-hidden opacity-20"
//                     style={{
//                       transform: 'rotateX(180deg) translateY(10px)',
//                       maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 50%)',
//                       WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 50%)',
//                     }}
//                   >
//                     <img 
//                       src="/your-photo.jpg"
//                       alt=""
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//               </div>

//               <style>{`
//                 .photo-3d {
//                   animation: photo3dFloat 6s ease-in-out infinite;
//                 }
                
//                 @keyframes photo3dFloat {
//                   0%, 100% { 
//                     transform: rotateX(8deg) rotateY(-8deg) translateY(0); 
//                   }
//                   50% { 
//                     transform: rotateX(8deg) rotateY(8deg) translateY(-10px); 
//                   }
//                 }
//               `}</style>
//             </div>

//             {/* Tagline */}
//             <h2 
//               ref={taglineRef}
//               className="text-2xl lg:text-3xl font-normal text-center leading-relaxed text-[#1a1a1a] max-w-3xl mb-8 lg:mb-12" 
//               style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
//             >
//               <span className="inline-block">Crafting    </span>
//               <span></span>
//               <strong className="inline-block font-['playfairdisplay']">  digital experiences</strong>
//               <br />
//               <span className="inline-block">that inspire and engage.</span>
//             </h2>

//             {/* Name Title */}
//             <div className="w-full mb-12 lg:mb-16">
//               <h1 className="font-['Brixton'] font-black text-[14vw] lg:text-[18vw] uppercase tracking-tighter text-[#1a1a1a] leading-[0.85] text-center">
//                 <span ref={deepakRef} className="inline-block">DEEPAK </span>
//                 <span ref={zamnaniRef} className="inline-block">ZAMNANI</span>
//               </h1>
//             </div>

//             {/* About Section */}
//             <div className="w-full max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
//               <div ref={aboutLabelRef}>
//                 <p className="text-[10px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-[#1a1a1a] opacity-60">
//                   ABOUT ME
//                 </p>
//               </div>

//               <h2 
//                 ref={aboutTitleRef}
//                 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight text-[#1a1a1a]"
//                 style={{fontFamily: "'Playfair Display', serif"}}
//               >
//                 <span className="inline-block">A bespoke web designer on a </span>
//                 <span className="inline-block">mission to elevate value </span>
//                 <span className="inline-block">driven brands.</span>
//               </h2>

//               <p 
//                 ref={aboutDescRef}
//                 className="text-sm lg:text-base text-[#1a1a1a] opacity-70 max-w-2xl mx-auto leading-relaxed font-medium"
//               >
//                 I create strategic assets that elevate your brand, engaging your audience, amplifying your presence, and differentiate you from the crowd.
//               </p>

//               <div ref={learnMoreRef} className="pt-6 lg:pt-8">
//                 <div className="flex items-center justify-center gap-4">
//                   <div 
//                     className="flex-1 h-px max-w-[200px]" 
//                     style={{
//                       backgroundImage: 'repeating-linear-gradient(to right, #1a1a1a, #1a1a1a 3px, transparent 3px, transparent 6px)',
//                     }}
//                   />
//                   <button className="group flex items-center gap-3 text-[#1a1a1a] font-bold text-sm lg:text-base tracking-[0.15em] uppercase hover:opacity-60 transition-all duration-300 bg-transparent border-none cursor-pointer">
//                     <span>LEARN MORE</span>
//                     <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
//                   </button>
//                   <div 
//                     className="flex-1 h-px max-w-[200px]" 
//                     style={{
//                       backgroundImage: 'repeating-linear-gradient(to right, #1a1a1a, #1a1a1a 3px, transparent 3px, transparent 6px)',
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Featured Works Section - TRANSPARENT BACKGROUND */}
//       <div className="min-h-max w-screen py-20 lg:py-32">
//         {/* Works Header */}
//         <div ref={worksHeaderRef} className="w-full max-w-7xl mx-auto px-8 lg:px-16 mb-20 lg:mb-24">
//           <div className="text-center space-y-6">
//             <div className="script-text text-xl lg:text-2xl opacity-50 text-[#1a1a1a]"
//               style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
//             >
//               Handpicked
//             </div>
            
//             <div className="flex items-center justify-center gap-8">
//               <div className="header-line w-24 lg:w-32 h-px bg-[#1a1a1a] opacity-30"></div>
//               <h1 
//                 className="works-text text-7xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter text-[#1a1a1a]"
//                 style={{ 
//                   fontFamily: "'Impact', 'Arial Black', sans-serif",
//                   letterSpacing: '-0.05em',
//                   textTransform: 'uppercase'
//                 }}
//               >
//                 WORKS
//               </h1>
//               <div className="header-line w-24 lg:w-32 h-px bg-[#1a1a1a] opacity-30"></div>
//             </div>
            
//             <div className="header-star text-2xl opacity-30 text-[#1a1a1a]">✦ ✦ ✦</div>
//           </div>
//         </div>

//         {/* Featured Projects */}
//         <div ref={projectsSectionRef} className="w-full max-w-7xl mx-auto px-8 lg:px-16">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
//             {featuredProjects.map((project, index) => (
//               <div 
//                 key={project.id}
//                 ref={el => projectRefs.current[index] = el}
//                 className="group relative"
//               >
//                 {/* Card Container */}
//                 <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  
//                   {/* Project Image */}
//                   <div className="project-image relative aspect-[16/10] overflow-hidden">
//                     <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center p-8">
//                       <div className="w-[85%] h-[85%] bg-[#0a0a0a] rounded-lg border-2 border-[#2a2a2a] flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105">
//                         <div className="text-center">
//                           <h3 
//                             className="text-2xl lg:text-4xl text-white mb-1"
//                             style={{fontFamily: "'Playfair Display', serif"}}
//                           >
//                             {project.title}
//                           </h3>
//                           <p className="text-[10px] tracking-[0.3em] uppercase text-white opacity-50">
//                             {project.subtitle}
//                           </p>
//                         </div>
//                         <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: project.color }}></div>
//                       </div>
//                     </div>
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-6 right-6 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-white" style={{ backgroundColor: project.color }}>
//                       {project.category}
//                     </div>
//                   </div>

//                   {/* Project Info */}
//                   <div className="project-info p-8 lg:p-10">
//                     <div className="flex items-start justify-between mb-4">
//                       <h2 
//                         className="text-4xl lg:text-5xl"
//                         style={{fontFamily: "'Allura', 'Dancing Script', cursive", color: project.color}}
//                       >
//                         {project.title}
//                       </h2>
//                       <span className="text-sm font-bold mt-2" style={{ color: project.color }}>{project.year}</span>
//                     </div>

//                     <p className="text-sm text-[#1a1a1a] opacity-70 leading-relaxed mb-6">
//                       {project.description}
//                     </p>

//                     <div className="year-line w-full h-px mb-6" style={{ backgroundColor: project.color, opacity: 0.2 }}></div>

//                     <div className="flex items-center justify-between flex-wrap gap-4">
//                       <div className="flex flex-wrap gap-2">
//                         {project.tags.slice(0, 2).map((tag) => (
//                           <span 
//                             key={tag}
//                             className="project-tag px-3 py-1 bg-transparent text-[10px] tracking-wider rounded-full font-semibold"
//                             style={{ 
//                               borderColor: project.color,
//                               color: project.color,
//                               borderWidth: '1px',
//                               borderStyle: 'solid'
//                             }}
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
                      
//                       <button 
//                         className="view-button text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:scale-105 border-none cursor-pointer"
//                         style={{ backgroundColor: project.color }}
//                       >
//                         VIEW →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* View All Projects Button */}
//         <div className="flex justify-center view-all-projects-btn">
//           <button 
//             onClick={onNavigateToProjects}
//             className="group relative px-16 py-6 bg-[#1a1a1a] text-white text-sm font-bold tracking-[0.25em] uppercase rounded-full shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden border-none cursor-pointer"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s ease' }}></div>
            
//             <span className="relative z-10 flex items-center gap-4">
//               <span>EXPLORE ALL PROJECTS</span>
//               <span className="text-xl">→</span>
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Menu Overlay */}
//       <div className={`fixed inset-0 bg-[rgba(26,26,26,0.95)] z-[999] flex items-center justify-center transition-opacity duration-400 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
//         <button 
//           onClick={() => setIsMenuOpen(false)}
//           className="absolute top-6 lg:top-8 right-8 lg:right-12 text-[#f5f5f0] text-2xl lg:text-3xl hover:opacity-60 transition-opacity duration-300 bg-transparent border-none cursor-pointer">
//           ✕
//         </button>
        
//         <div className="flex flex-col gap-6 lg:gap-8 items-center">
//           {['Work', 'About', 'Services', 'Contact'].map((item, index) => (
//             <div 
//               key={item}
//               className={`text-3xl lg:text-5xl font-semibold text-[#f5f5f0] uppercase tracking-wide cursor-pointer hover:translate-x-2 hover:opacity-70 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
//               style={{
//                 transitionDelay: isMenuOpen ? `${0.1 * (index + 1)}s` : '0s'
//               }}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }