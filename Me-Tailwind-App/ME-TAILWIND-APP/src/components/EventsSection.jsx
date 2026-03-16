const EventsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">UPCOMING EVENTS</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Join us for exclusive tasting events, live music nights, and special celebrations. 
              Experience the perfect combination of great food, amazing atmosphere, and unforgettable moments.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every Friday and Saturday night, enjoy live performances while savoring our signature dishes. 
              Book your spot now and be part of something special!
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition transform hover:scale-105 shadow-lg">
              View All Events
            </button>
          </div>

          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop" 
                alt="Events"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-6xl font-bold tracking-wider">DISCOVER</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
