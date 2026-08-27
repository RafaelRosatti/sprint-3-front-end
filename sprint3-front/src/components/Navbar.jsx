function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070A12]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#inicio" className="shrink-0 text-xl font-black tracking-tight">
          Mood <span className="text-[#168BFF]">Shot</span>
        </a>

        <div className="hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-slate-300 md:flex lg:gap-8">
          <a href="#problema" className="transition hover:text-white">
            Pesquisa
          </a>
         <a href="#solucao" style={{ color: "white", overflow: "visible", whiteSpace: "nowrap" }}>
            Solução
            </a>
          <a href="#experiencia" className="transition hover:text-white">
            Experiência
          </a>
          <a href="#equipe" className="transition hover:text-white">
            Equipe
          </a>
        </div>

        <a
          href="#contato"
          className="shrink-0 rounded-full bg-[#168BFF] px-4 py-2.5 text-sm font-bold whitespace-nowrap transition hover:bg-[#0874df] sm:px-5"
        >
          Conheça o MoodShot
        </a>
      </nav>
    </header>
  );
}

export default Navbar;