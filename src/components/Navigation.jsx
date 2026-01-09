export default function Navigation({ onMenuOpen }) {
  return (
    <nav className="flex justify-between items-center px-8 lg:px-12 py-4 lg:py-6 relative z-50 opacity-0" style={{animation: 'fadeInDown 0.8s ease forwards'}}>
      <div className="font-semibold text-xs lg:text-sm tracking-wider text-[#1a1a1a]">
        ● DEEPAK ZAMNANI
      </div>
      
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center gap-0.5">
        <span className="text-[10px] lg:text-xs font-medium tracking-widest uppercase text-[#1a1a1a]">Full-Stack Development</span>
        <span className="text-[10px] lg:text-xs font-medium tracking-widest uppercase text-[#1a1a1a]">UI/UX Design</span>
        <span className="text-[10px] lg:text-xs font-medium tracking-widest uppercase text-[#1a1a1a]">Creative Solutions</span>
      </div>
      
      <div className="flex items-center gap-4 lg:gap-8">
        <button 
          onClick={onMenuOpen}
          className="text-[10px] lg:text-xs font-medium tracking-widest uppercase text-[#1a1a1a] hover:opacity-60 transition-opacity duration-300 bg-transparent border-none cursor-pointer">
          ( MENU )
        </button>
        <button className="hidden md:block bg-[#1a1a1a] text-[#f5f5f0] px-4 lg:px-6 py-2 lg:py-3 text-[10px] lg:text-xs font-medium tracking-widest uppercase rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 border-none cursor-pointer">
          START PROJECT
        </button>
      </div>
    </nav>
  )
}