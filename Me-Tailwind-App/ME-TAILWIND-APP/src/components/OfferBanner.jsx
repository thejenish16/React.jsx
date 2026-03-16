const OfferBanner = () => {
  return (
    <section id="offers" className="relative h-80 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1600&h=400&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          NEW MENU AVAILABLE
        </h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl">
          Discover our latest culinary creations and seasonal specials
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-xl">
          EXPLORE MENU
        </button>
      </div>
    </section>
  );
};

export default OfferBanner;
