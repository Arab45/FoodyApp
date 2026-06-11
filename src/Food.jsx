const foods = [
  {
    name: "Apple",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    name: "Mango",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
  },
  {
    name: "Water Melon",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa",
  },
];

function Food() {
  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-4xl font-bold mb-3 text-blue-900">
        Fresh & Healthy Fruits 🍎
      </h2>

      <p className="text-gray-700 mb-8">
        Enjoy delicious fruits packed with vitamins and natural goodness.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div
            key={food.name}
            className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="text-2xl font-semibold mt-4 text-blue-800">
              {food.name}
            </h3>

            <p className="text-gray-600 mt-2">
              Fresh, juicy and perfect for a healthy lifestyle.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Food;