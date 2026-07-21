function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <h1 className="text-2xl font-bold tracking-wide text-white">
        Astera
      </h1>

      <div className="flex items-center gap-8 text-gray-300">
        <a href="#">Features</a>
        <a href="#">Security</a>
        <a href="#">About</a>

        <button className="rounded-xl bg-amber-400 px-5 py-2 font-medium text-black transition hover:bg-amber-300">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;