// Menu.jsx - WITH NAVIGATION SUPPORT

export default function Menu({ isOpen, onClose, onNavigate }) {
  const handleMenuClick = (page) => {
    // Map menu items to page names
    const pageMap = {
      'HOME': 'home',
      'ABOUT': 'about',
      'WORKS': 'works'
    }
    
    if (onNavigate) {
      onNavigate(pageMap[page])
    }
  }

  return (
    <div className={`fixed inset-0 bg-[#1a1a1a] z-[999] flex flex-col transition-opacity duration-400 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Menu Top Bar */}
      <div className="flex justify-between items-center px-8 lg:px-12 py-6">
        <div className="font-semibold text-xs lg:text-sm tracking-wider text-white">
          ● DEEPAK ZAMNANI
        </div>
        
        <button 
          onClick={onClose}
          className="text-xs lg:text-sm font-medium tracking-widest uppercase text-white hover:opacity-60 transition-opacity duration-300 bg-transparent border-none cursor-pointer">
          ( CLOSE )
        </button>
        
        <div className="font-semibold text-xs lg:text-sm tracking-wider text-white">
          START A PROJECT ●
        </div>
      </div>

      {/* Menu Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Portfolio Script Text with Asterisks */}
        <div className="flex items-center gap-8 lg:gap-16 mb-4 lg:mb-6">
          <span className="text-3xl lg:text-5xl text-white opacity-50">✻</span>
          <h2 
            className="text-6xl lg:text-8xl text-white opacity-90"
            style={{fontFamily: "'Allura', 'Dancing Script', cursive"}}
          >
            Portfolio
          </h2>
          <span className="text-3xl lg:text-5xl text-white opacity-50">✻</span>
        </div>

        {/* Pages Label */}
        <div className="text-xs lg:text-sm font-medium tracking-[0.3em] uppercase text-white opacity-60 mb-8 lg:mb-12">
          PAGES
        </div>

        {/* Dotted Line */}
        <div 
          className="absolute left-0 right-0 h-px mb-8"
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, white, white 4px, transparent 4px, transparent 8px)',
            opacity: 0.3,
            top: '45%'
          }}
        />

        {/* Menu Items - NOW CLICKABLE FOR NAVIGATION */}
        <div className="flex flex-col items-center gap-2 lg:gap-3 relative z-10">
          {['HOME', 'ABOUT', 'WORKS'].map((item, index) => (
            <div 
              key={item}
              onClick={() => handleMenuClick(item)}
              className={`text-7xl lg:text-9xl font-black text-white uppercase tracking-tight cursor-pointer hover:opacity-70 transition-all duration-300 leading-[0.9] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                animation: isOpen ? `menuItemFadeIn 0.6s ease ${0.15 * (index + 1)}s forwards` : 'none',
                letterSpacing: '-0.02em'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Menu Footer */}
      <div className="flex justify-between items-end px-8 lg:px-12 py-6">
        <div className="flex flex-col gap-1">
          <div className="text-xs font-semibold tracking-wider uppercase text-white opacity-60">
            SOCIALS
          </div>
          <div className="text-xs font-medium tracking-wider uppercase text-white opacity-80">
            INSTAGRAM / BEHANCE / LINKEDIN
          </div>
        </div>
        
        <div className="text-xs font-medium tracking-wider text-white opacity-60">
          2026©
        </div>
      </div>
    </div>
  )
}