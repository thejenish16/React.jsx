const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="space-y-8">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-wide leading-tight">
                BURGER<br />WEEK
              </h1>
              <div className="absolute -top-8 -right-16 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center transform rotate-12 shadow-xl">
                <div className="text-center">
                  <p className="text-white font-bold text-2xl">35%</p>
                  <p className="text-white text-sm font-semibold">OFF</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg max-w-md leading-relaxed">
              Indulge in our premium selection of gourmet burgers crafted with the finest ingredients. 
              Experience the perfect blend of flavors that will satisfy your cravings.
            </p>
            
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg">
              ORDER NOW
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop" 
                alt="Delicious Burger" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
