function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070A12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="text-xl font-black tracking-tight">
          Mood<span className="text-[#168BFF]">Shot</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#problema" className="transition hover:text-white">Pesquisa</a>
          <a href="#solucao" className="transition hover:text-white">Solução</a>
          <a href="#experiencia" className="transition hover:text-white">Experiência</a>
          <a href="#equipe" className="transition hover:text-white">Equipe</a>
        </div>

        <a
          href="#contato"
          className="rounded-full bg-[#168BFF] px-5 py-2.5 text-sm font-bold transition hover:bg-[#0874df]"
        >
          Conheça o MoodShot
        </a>
      </nav>
    </header>
  );
}

export default Navbar;