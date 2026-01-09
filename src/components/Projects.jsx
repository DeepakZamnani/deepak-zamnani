// import { useState } from 'react'

// export default function Projects() {
//   const [selectedCategory, setSelectedCategory] = useState('ALL')

//   const categories = ['ALL', 'WEB DESIGN', 'BRANDING', 'UI/UX', 'DEVELOPMENT']

//   const projects = [
//     {
//       id: 1,
//       title: "Lori's",
//       subtitle: "PIANO ACADEMY",
//       category: 'WEB DESIGN',
//       description: "LORI'S IS A CONCEPTUAL PROJECT FOR A CLASSICAL PRIVATE PIANO ACADEMY.",
//       details: "A soft lure, efficient UI web design",
//       year: '2024',
//       image: '/project1.jpg',
//       tags: ['Web Design', 'UI/UX', 'Branding']
//     },
//     {
//       id: 2,
//       title: "TechFlow",
//       subtitle: "STARTUP PLATFORM",
//       category: 'DEVELOPMENT',
//       description: "A MODERN SAAS PLATFORM FOR WORKFLOW AUTOMATION AND TEAM COLLABORATION.",
//       details: "Full-stack development with React and Node.js",
//       year: '2025',
//       image: '/project2.jpg',
//       tags: ['Development', 'UI/UX', 'SaaS']
//     },
//     {
//       id: 3,
//       title: "Bloom",
//       subtitle: "BEAUTY BRAND",
//       category: 'BRANDING',
//       description: "COMPLETE BRAND IDENTITY FOR A SUSTAINABLE BEAUTY PRODUCTS LINE.",
//       details: "Logo design, packaging, brand guidelines",
//       year: '2024',
//       image: '/project3.jpg',
//       tags: ['Branding', 'Design', 'Identity']
//     },
//     {
//       id: 4,
//       title: "Dashboard Pro",
//       subtitle: "ANALYTICS TOOL",
//       category: 'UI/UX',
//       description: "INTUITIVE DASHBOARD INTERFACE FOR DATA VISUALIZATION AND REPORTING.",
//       details: "User research, prototyping, interaction design",
//       year: '2025',
//       image: '/project4.jpg',
//       tags: ['UI/UX', 'Dashboard', 'Analytics']
//     },
//     {
//       id: 5,
//       title: "FoodHub",
//       subtitle: "DELIVERY APP",
//       category: 'DEVELOPMENT',
//       description: "MOBILE-FIRST FOOD DELIVERY PLATFORM WITH REAL-TIME TRACKING.",
//       details: "React Native, Firebase, Google Maps integration",
//       year: '2024',
//       image: '/project5.jpg',
//       tags: ['Mobile', 'Development', 'App']
//     },
//     {
//       id: 6,
//       title: "Zenith",
//       subtitle: "CREATIVE STUDIO",
//       category: 'WEB DESIGN',
//       description: "PORTFOLIO WEBSITE FOR A CREATIVE AGENCY WITH BOLD TYPOGRAPHY.",
//       details: "Interactive design, smooth animations",
//       year: '2025',
//       image: '/project6.jpg',
//       tags: ['Web Design', 'Portfolio', 'Creative']
//     }
//   ]

//   const filteredProjects = selectedCategory === 'ALL' 
//     ? projects 
//     : projects.filter(project => project.category === selectedCategory)

//   return (
//     <div className="h-max bg-[#1a1a1a] text-white relative  ">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 36px)',
//           backgroundSize: '100% 36px'
//         }}></div>
//       </div>

//       {/* Header Section */}
//       <div className="relative z-10 px-8 lg:px-16 pt-20 lg:pt-32 pb-12 lg:pb-20">
//         <div className="max-w-7xl mx-auto">
//           {/* Script Title */}
//           <div className="flex items-center justify-center gap-8 lg:gap-16 mb-8">
//             <span className="text-2xl lg:text-4xl text-[#E85D4E] opacity-50">✻</span>
//             <h1 
//               className="text-6xl lg:text-8xl text-[#E85D4E] opacity-90"
//               style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
//             >
//               Featured Works
//             </h1>
//             <span className="text-2xl lg:text-4xl text-[#E85D4E] opacity-50">✻</span>
//           </div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-6 lg:px-8 py-2 lg:py-3 text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
//                   selectedCategory === category
//                     ? 'bg-[#E85D4E] text-white'
//                     : 'bg-transparent text-[#E85D4E] border border-[#E85D4E] hover:bg-[#E85D4E] hover:text-white'
//                 } rounded-full`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Projects Count */}
//           <div className="text-center mb-16">
//             <p className="text-sm tracking-[0.3em] uppercase text-white opacity-60">
//               SHOWING {filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="relative z-10 px-8 lg:px-16 pb-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="space-y-32 lg:space-y-40">
//             {filteredProjects.map((project, index) => (
//               <div 
//                 key={project.id}
//                 className="relative opacity-0"
//                 style={{
//                   animation: `fadeInUp 0.8s ease ${index * 0.2}s forwards`
//                 }}
//               >
//                 {/* Project Card */}
//                 <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
//                   {/* Project Image/Preview */}
//                   <div className="w-full lg:w-1/2">
//                     <div className="relative group cursor-pointer">
//                       <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg   shadow-2xl">
//                         {/* Laptop Mockup */}
//                         <div className="w-full h-full flex items-center justify-center p-8 lg:p-12">
//                           <div className="w-full h-full bg-[#0a0a0a] rounded-lg border-4 border-[#2a2a2a] shadow-xl flex items-center justify-center relative  ">
//                             {/* Mock Content */}
//                             <div className="text-center p-6">
//                               <h3 
//                                 className="text-3xl lg:text-5xl text-white mb-2"
//                                 style={{fontFamily: "'Playfair Display', serif"}}
//                               >
//                                 {project.title}
//                               </h3>
//                               <p className="text-xs lg:text-sm tracking-[0.3em] uppercase text-white opacity-60">
//                                 {project.subtitle}
//                               </p>
//                             </div>
//                             {/* Overlay on hover */}
//                             <div className="absolute inset-0 bg-[#E85D4E] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Featured Badge */}
//                       <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
//                         <button className="bg-[#E85D4E] text-white px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg hover:bg-[#d94d3e] transition-all duration-300 hover:scale-105">
//                           VIEW PROJECT
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Project Info */}
//                   <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
//                     {/* Year */}
//                     <div className="flex items-center gap-4 mb-6">
//                       <span className="text-[#E85D4E] text-lg lg:text-xl font-bold">{project.year}</span>
//                       <div className="flex-1 h-px bg-[#E85D4E] opacity-30"></div>
//                       <span className="text-[#E85D4E] text-lg lg:text-xl font-bold">{project.year}</span>
//                     </div>

//                     {/* Script Title */}
//                     <h2 
//                       className="text-5xl lg:text-7xl text-[#E85D4E] mb-6"
//                       style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
//                     >
//                       {project.title}
//                     </h2>

//                     {/* Description */}
//                     <p className="text-[#E85D4E] text-sm lg:text-base font-semibold tracking-wide leading-relaxed mb-8">
//                       {project.description}
//                     </p>

//                     {/* Details */}
//                     <p className="text-white opacity-60 text-xs lg:text-sm tracking-wide mb-8">
//                       ✻ {project.details.toUpperCase()}
//                     </p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-3">
//                       {project.tags.map((tag) => (
//                         <span 
//                           key={tag}
//                           className="px-4 py-1.5 bg-transparent border border-[#E85D4E] text-[#E85D4E] text-xs tracking-wider rounded-full"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Large "ABOUT" or "PROJECT" Text */}
//                     <div className="mt-12 lg:mt-16">
//                       <h3 className="text-6xl lg:text-8xl font-black text-[#E85D4E] opacity-10 uppercase tracking-tight">
//                         PROJECT
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Divider Line */}
//                 {index < filteredProjects.length - 1 && (
//                   <div className="mt-32 lg:mt-40 w-full h-px bg-gradient-to-r from-transparent via-[#E85D4E] to-transparent opacity-20"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <div className="relative z-10 px-8 lg:px-16 py-20 lg:py-32">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 
//             className="text-5xl lg:text-7xl text-[#E85D4E] mb-8"
//             style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
//           >
//             Like what you see?
//           </h3>
//           <p className="text-white opacity-60 text-sm lg:text-base tracking-wide mb-12">
//             LET'S CREATE SOMETHING AMAZING TOGETHER
//           </p>
//           <button className="bg-[#E85D4E] text-white px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-xl hover:bg-[#d94d3e] transition-all duration-300 hover:scale-105">
//             START A PROJECT
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const scriptTitleRef = useRef(null);
  const filtersRef = useRef(null);
  const projectRefs = useRef([]);
  const ctaRef = useRef(null);
  const backgroundRef = useRef(null);
  const showAllBtnRef = useRef(null);

  const categories = ['ALL', 'WEB DESIGN', 'BRANDING', 'UI/UX', 'DEVELOPMENT'];

  // Luxury color schemes for each project
  const colorSchemes = [
    { bg: '#1a1a1a', accent: '#E85D4E', name: 'Crimson' }, // Dark charcoal + red
    { bg: '#1a1b2e', accent: '#818CF8', name: 'Royal Indigo' }, // Deep navy + indigo
    { bg: '#2a1f14', accent: '#FBBF24', name: 'Golden Amber' }, // Rich brown + gold
    { bg: '#0f2419', accent: '#34D399', name: 'Emerald' }, // Deep forest + emerald
    { bg: '#1e1429', accent: '#C084FC', name: 'Royal Purple' }, // Deep plum + purple
    { bg: '#0a1a1f', accent: '#22D3EE', name: 'Cyan Diamond' } // Deep teal + cyan
  ];

  const projects = [
    {
      id: 1,
      title: "Lori's",
      subtitle: "PIANO ACADEMY",
      category: 'WEB DESIGN',
      description: "LORI'S IS A CONCEPTUAL PROJECT FOR A CLASSICAL PRIVATE PIANO ACADEMY.",
      details: "A soft lure, efficient UI web design",
      year: '2024',
      colorScheme: 0,
      tags: ['Web Design', 'UI/UX', 'Branding']
    },
    {
      id: 2,
      title: "TechFlow",
      subtitle: "STARTUP PLATFORM",
      category: 'DEVELOPMENT',
      description: "A MODERN SAAS PLATFORM FOR WORKFLOW AUTOMATION AND TEAM COLLABORATION.",
      details: "Full-stack development with React and Node.js",
      year: '2025',
      colorScheme: 1,
      tags: ['Development', 'UI/UX', 'SaaS']
    },
    {
      id: 3,
      title: "Bloom",
      subtitle: "BEAUTY BRAND",
      category: 'BRANDING',
      description: "COMPLETE BRAND IDENTITY FOR A SUSTAINABLE BEAUTY PRODUCTS LINE.",
      details: "Logo design, packaging, brand guidelines",
      year: '2024',
      colorScheme: 2,
      tags: ['Branding', 'Design', 'Identity']
    },
    {
      id: 4,
      title: "Dashboard Pro",
      subtitle: "ANALYTICS TOOL",
      category: 'UI/UX',
      description: "INTUITIVE DASHBOARD INTERFACE FOR DATA VISUALIZATION AND REPORTING.",
      details: "User research, prototyping, interaction design",
      year: '2025',
      colorScheme: 3,
      tags: ['UI/UX', 'Dashboard', 'Analytics']
    },
    {
      id: 5,
      title: "FoodHub",
      subtitle: "DELIVERY APP",
      category: 'DEVELOPMENT',
      description: "MOBILE-FIRST FOOD DELIVERY PLATFORM WITH REAL-TIME TRACKING.",
      details: "React Native, Firebase, Google Maps integration",
      year: '2024',
      colorScheme: 4,
      tags: ['Mobile', 'Development', 'App']
    },
    {
      id: 6,
      title: "Zenith",
      subtitle: "CREATIVE STUDIO",
      category: 'WEB DESIGN',
      description: "PORTFOLIO WEBSITE FOR A CREATIVE AGENCY WITH BOLD TYPOGRAPHY.",
      details: "Interactive design, smooth animations",
      year: '2025',
      colorScheme: 5,
      tags: ['Web Design', 'Portfolio', 'Creative']
    }
  ];

  const filteredProjects = selectedCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Show only top 2 projects initially
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);
  const hasMoreProjects = filteredProjects.length > 2;

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
      // Initial page load animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Decorative line slides in from left
      tl.from(headerRef.current.querySelector('.header-line'), {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power2.out'
      }, 0.2);

      // "Selected" text fades in
      tl.from(headerRef.current.querySelector('.script-text'), {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, 0.5);

      // "WORKS" text slides in from right with impact
      tl.from(headerRef.current.querySelector('.works-text'), {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      }, 0.6);

      // Decorative star rotates in
      tl.from(headerRef.current.querySelector('.header-star'), {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(2)'
      }, 0.9);

      tl.from(filtersRef.current.children, {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(1.5)'
      }, 0.8);

      tl.from('.project-count', {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, 1.2);

      // Color transition on scroll for each project
      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        const project = displayedProjects[index];
        const colorScheme = colorSchemes[project.colorScheme];

        // Trigger color change when project enters viewport
        ScrollTrigger.create({
          trigger: projectRef,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(backgroundRef.current, {
              backgroundColor: colorScheme.bg,
              duration: 1.2,
              ease: 'power2.inOut'
            });
            setCurrentColorIndex(project.colorScheme);
          },
          onEnterBack: () => {
            gsap.to(backgroundRef.current, {
              backgroundColor: colorScheme.bg,
              duration: 1.2,
              ease: 'power2.inOut'
            });
            setCurrentColorIndex(project.colorScheme);
          }
        });

        const image = projectRef.querySelector('.project-image');
        const info = projectRef.querySelector('.project-info');
        const button = projectRef.querySelector('.view-button');
        const yearLine = projectRef.querySelector('.year-line');
        const tags = projectRef.querySelectorAll('.project-tag');
        const bigText = projectRef.querySelector('.big-text');

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
          rotation: index % 2 === 0 ? -3 : 3,
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

        projectTl.from(bigText, {
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, 0.5);

        gsap.to(image, {
          scrollTrigger: {
            trigger: projectRef,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          y: -50,
          ease: 'none'
        });
      });

      // CTA section
      gsap.from(ctaRef.current.children, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Show All button animation
      if (showAllBtnRef.current) {
        gsap.from(showAllBtnRef.current, {
          scrollTrigger: {
            trigger: showAllBtnRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.6)'
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [gsapLoaded, displayedProjects, showAll]);

  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return;
    
    const gsap = window.gsap;
    
    gsap.to('.project-card', {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        gsap.fromTo('.project-card', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.1,
            ease: 'power3.out'
          }
        );
      }
    });
  }, [selectedCategory, gsapLoaded]);

  const currentColor = colorSchemes[currentColorIndex].accent;

  return (
    <div ref={sectionRef} className="h-max text-white relative transition-colors duration-1000">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 transition-colors duration-1000" style={{ backgroundColor: colorSchemes[0].bg }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 36px)',
            backgroundSize: '100% 36px'
          }}></div>
        </div>
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="relative z-10 px-8 lg:px-16 pt-20 lg:pt-32 pb-12 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Modern Header with WORKS on Right */}
          <div className="flex items-center justify-between mb-16 lg:mb-20">
            {/* Left side - Decorative line */}
            <div className="header-line flex-1 h-px transition-colors duration-1000" style={{ backgroundColor: currentColor, opacity: 0.3 }}></div>
            
            {/* Center - Small script text */}
            <div className="px-8 lg:px-12">
              <span 
                className="script-text text-xl lg:text-2xl opacity-70 transition-colors duration-1000"
                style={{fontFamily: "'Allura', 'Dancing Script', cursive", color: currentColor}}
              >
                Selected
              </span>
            </div>
            
            {/* Right side - WORKS in bold sharp font */}
            <div className="flex items-center gap-6 lg:gap-8">
              <h1 
                className="works-text text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter transition-colors duration-1000"
                style={{ 
                  color: currentColor,
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  letterSpacing: '-0.05em',
                  textTransform: 'uppercase'
                }}
              >
                WORKS
              </h1>
              <span className="header-star text-3xl lg:text-5xl opacity-50 transition-colors duration-1000" style={{ color: currentColor }}>✦</span>
            </div>
          </div>

          {/* Category Filters */}
          <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 lg:px-8 py-2 lg:py-3 text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 rounded-full ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-transparent hover:text-white'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? currentColor : 'transparent',
                  color: selectedCategory === category ? 'white' : currentColor,
                  borderColor: currentColor,
                  borderWidth: selectedCategory === category ? '0' : '1px',
                  borderStyle: 'solid'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="text-center mb-16">
            <p className="project-count text-sm tracking-[0.3em] uppercase text-white opacity-60">
              SHOWING {displayedProjects.length} OF {filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32 lg:space-y-40">
            {displayedProjects.map((project, index) => {
              const projectColor = colorSchemes[project.colorScheme].accent;
              
              return (
                <div 
                  key={project.id}
                  ref={el => projectRefs.current[index] = el}
                  className="project-card relative"
                >
                  {/* Project Card */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                    
                    {/* Project Image/Preview */}
                    <div className="project-image w-full lg:w-1/2">
                      <div className="relative group cursor-pointer">
                        <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden">
                          {/* Laptop Mockup */}
                          <div className="w-full h-full flex items-center justify-center p-8 lg:p-12">
                            <div className="w-full h-full bg-[#0a0a0a] rounded-lg border-4 border-[#2a2a2a] shadow-xl flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105">
                              {/* Mock Content */}
                              <div className="text-center p-6">
                                <h3 
                                  className="text-3xl lg:text-5xl text-white mb-2"
                                  style={{fontFamily: "'Playfair Display', serif"}}
                                >
                                  {project.title}
                                </h3>
                                <p className="text-xs lg:text-sm tracking-[0.3em] uppercase text-white opacity-60">
                                  {project.subtitle}
                                </p>
                              </div>
                              {/* Overlay on hover */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-300" style={{ backgroundColor: projectColor }}></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Featured Badge */}
                        <div className="view-button absolute -bottom-6 left-1/2 -translate-x-1/2">
                          <button 
                            className="text-white px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                            style={{ backgroundColor: projectColor }}
                          >
                            VIEW PROJECT
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="project-info w-full lg:w-1/2 mt-8 lg:mt-0">
                      {/* Year */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-lg lg:text-xl font-bold transition-colors duration-1000" style={{ color: projectColor }}>{project.year}</span>
                        <div className="year-line flex-1 h-px opacity-30 transition-colors duration-1000" style={{ backgroundColor: projectColor }}></div>
                        <span className="text-lg lg:text-xl font-bold transition-colors duration-1000" style={{ color: projectColor }}>{project.year}</span>
                      </div>

                      {/* Script Title */}
                      <h2 
                        className="text-5xl lg:text-7xl mb-6 transition-colors duration-1000"
                        style={{fontFamily: "'Allura', 'Dancing Script', cursive", color: projectColor}}
                      >
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="text-sm lg:text-base font-semibold tracking-wide leading-relaxed mb-8 transition-colors duration-1000" style={{ color: projectColor }}>
                        {project.description}
                      </p>

                      {/* Details */}
                      <p className="text-white opacity-60 text-xs lg:text-sm tracking-wide mb-8">
                        ✻ {project.details.toUpperCase()}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="project-tag px-4 py-1.5 bg-transparent text-xs tracking-wider rounded-full transition-colors duration-1000"
                            style={{ 
                              borderColor: projectColor,
                              color: projectColor,
                              borderWidth: '1px',
                              borderStyle: 'solid'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Large "PROJECT" Text */}
                      <div className="mt-12 lg:mt-16">
                        <h3 className="big-text text-6xl lg:text-8xl font-black opacity-10 uppercase tracking-tight transition-colors duration-1000" style={{ color: projectColor }}>
                          PROJECT
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Divider Line */}
                  {index < displayedProjects.length - 1 && (
                    <div className="mt-32 lg:mt-40 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 transition-colors duration-1000" style={{ color: projectColor }}></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Show All Button */}
          {!showAll && hasMoreProjects && (
            <div ref={showAllBtnRef} className="mt-32 lg:mt-40 flex justify-center">
              <button 
                onClick={() => setShowAll(true)}
                className="group relative px-16 py-6 text-white text-sm font-bold tracking-[0.25em] uppercase rounded-full shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{ backgroundColor: currentColor }}
              >
                {/* Animated background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s ease' }}></div>
                
                <span className="relative z-10 flex items-center gap-4">
                  <span>SHOW ALL PROJECTS</span>
                  <span className="text-xl">↓</span>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div ref={ctaRef} className="relative z-10 px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            className="text-5xl lg:text-7xl mb-8 transition-colors duration-1000"
            style={{fontFamily: "'Allura', 'Dancing Script', cursive", color: currentColor}}
          >
            Like what you see?
          </h3>
          <p className="text-white opacity-60 text-sm lg:text-base tracking-wide mb-12">
            LET'S CREATE SOMETHING AMAZING TOGETHER
          </p>
          <button 
            className="text-white px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: currentColor }}
          >
            START A PROJECT
          </button>
        </div>
      </div>
    </div>
  );
}