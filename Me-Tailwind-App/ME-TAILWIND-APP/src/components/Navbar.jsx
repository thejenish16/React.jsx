const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">BurgerHouse</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-800 hover:text-red-500 transition font-medium">Home</a>
            <a href="#menu" className="text-gray-800 hover:text-red-500 transition font-medium">Menu</a>
            <a href="#offers" className="text-gray-800 hover:text-red-500 transition font-medium">Offers</a>
            <a href="#about" className="text-gray-800 hover:text-red-500 transition font-medium">About</a>
            <a href="#contact" className="text-gray-800 hover:text-red-500 transition font-medium">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:text-red-500 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
