const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Burger",
      description: "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
      price: "$12.99"
    },
    {
      id: 2,
      name: "Cheese Deluxe",
      description: "Double cheese, crispy bacon, caramelized onions, and BBQ sauce",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop",
      price: "$14.99"
    },
    {
      id: 3,
      name: "Spicy Chicken",
      description: "Crispy chicken breast with jalapeños, pepper jack cheese, and chipotle mayo",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=400&fit=crop",
      price: "$13.99"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">CHOOSE & ENJOY</h2>
          <p className="text-gray-600 text-lg">Discover our signature burgers made with love</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition duration-300 border border-gray-100"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
              <p className="text-gray-600 mb-4 min-h-[60px]">{item.description}</p>
              <p className="text-3xl font-bold text-red-500 mb-4">{item.price}</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition w-full">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
