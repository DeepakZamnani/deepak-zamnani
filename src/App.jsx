// App.jsx - WITH ROUTING (Complete Example)

import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Projects from './components/Projects'
import About from './components/About'
import Plasma from './components/Plasma'
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home') // 'home' or 'works'

  const handleNavigate = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false) // Close menu after navigation
  }

  return (
    <>
   <div className="fixed inset-0 z-0 pointer-events-none">
        <Plasma 
          color="#E85D4E"      // Matches your brand color
          speed={0.5}           // Slower, more subtle
          opacity={0.15}        // Very subtle so content is readable
          mouseInteractive={false} // Disable interaction so it doesn't interfere
        />
      </div>
      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <div className="h-screen w-screen  flex flex-col relative  ">
          {/* Dotted Line Decoration */}
          <div 
            className="absolute left-0 right-0 top-20 h-px opacity-0" 
            style={{
              backgroundImage: 'repeating-linear-gradient(to right, #1a1a1a, #1a1a1a 4px, transparent 4px, transparent 8px)',
              animation: 'fadeIn 1s ease 0.9s forwards'
            }}
          />

          {/* Navigation */}
          <Navigation onMenuOpen={() => setIsMenuOpen(true)} />

          {/* Hero Section */}
          <Hero />
          
          {/* Menu Overlay with Navigation */}
          <Menu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)}
            onNavigate={handleNavigate}
          />
          {/* <Projects/> */}
          <About/>
        </div>
      )}

      {/* PROJECTS/WORKS PAGE */}
      {currentPage === 'works' && (
        <div className="relative">
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage('home')}
            className="fixed top-8 left-8 z-50 bg-[#E85D4E] text-white px-6 py-3 text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#d94d3e] transition-all duration-300 hover:scale-105"
          >
            ← BACK TO HOME
          </button>

          {/* Projects Component */}
          <Projects />
        </div>
      )}
    </>
  )
}

export default App