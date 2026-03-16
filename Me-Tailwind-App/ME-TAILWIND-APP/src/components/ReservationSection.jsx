const ReservationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">BOOK YOUR TABLE</h2>
          <p className="text-gray-600 text-lg">Reserve your spot for an unforgettable dining experience</p>
        </div>

        <form className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Time</label>
              <input 
                type="time" 
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-400 focus:border-transparent outline-none transition">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            RESERVE NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
