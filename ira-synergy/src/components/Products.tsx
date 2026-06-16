import { ArrowRight, Box } from "lucide-react";

const allProducts = [
  "Cyclone Safe Zone Shelter", "Air Purifier Indoor & Outdoor", "Smart Pole", 
  "Smart Bus Stop Shelter", "Solar Smart Bench", "Portable Library", 
  "Portable Kitchen Cabinet", "Health Open Gym for Adults", "Atal Tinkering Labs", 
  "Science Kit Lab", "Earthquake Safety Lab", "AI Robotics Lab", "Solar Tree", 
  "Water ATM", "Kids Fitness Station", "Integrated School & Sports Development Solutions", 
  "Dead Animal & Solid Waste 2 in 1 Incinerator", "Self Cleaning Smart Toilet", 
  "PET Bottle Crusher", "Medical Waste Incinerator", "Cloth Bag Vending Machine", 
  "Snacks & Beverage Vending Machine", "Sanitary Napkins Incinerator & Vending Machine", 
  "Fuel Free Solid Waste Incinerator", "Organic Food Waste Compost Machine", 
  "Screening Machine", "Shredding Machine", "Gasifier", "Bio Gas Plant", 
  "Food Trolly", "E Cart for Garbage", "Smart Dust Bin", "Waste Processing", 
  "Recycling and Special Purpose Machinery Solutions"
];

// Grouping them roughly for better UI
const productCategories = [
  {
    title: "Shelter & Infrastructure",
    items: ["Cyclone Safe Zone Shelter", "Smart Bus Stop Shelter", "Smart Pole", "Solar Smart Bench", "Solar Tree", "Water ATM"]
  },
  {
    title: "Waste Management & Incinerators",
    items: ["Dead Animal & Solid Waste 2 in 1 Incinerator", "Medical Waste Incinerator", "Fuel Free Solid Waste Incinerator", "Organic Food Waste Compost Machine", "PET Bottle Crusher", "Smart Dust Bin", "Waste Processing"]
  },
  {
    title: "Education & Labs",
    items: ["Atal Tinkering Labs", "Science Kit Lab", "Earthquake Safety Lab", "AI Robotics Lab", "Portable Library"]
  },
  {
    title: "Health, Fitness & Sanitation",
    items: ["Health Open Gym for Adults", "Kids Fitness Station", "Self Cleaning Smart Toilet", "Sanitary Napkins Incinerator & Vending Machine", "Air Purifier Indoor & Outdoor"]
  },
  {
    title: "Vending & Specialized Machinery",
    items: ["Cloth Bag Vending Machine", "Snacks & Beverage Vending Machine", "Screening Machine", "Shredding Machine", "Gasifier", "Bio Gas Plant", "Recycling and Special Purpose Machinery Solutions"]
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Products & Equipment</h2>
            <div className="w-20 h-1.5 bg-ira-secondary"></div>
          </div>
          <button className="text-ira-secondary font-semibold flex items-center gap-2 hover:text-ira-primary transition-colors group">
            View All Products 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {productCategories.map((category, idx) => (
            <div key={idx} className="group">
              <div className="border-b-2 border-gray-200 pb-4 mb-6 flex items-center gap-3 group-hover:border-ira-secondary transition-colors">
                <Box className="text-gray-400 group-hover:text-ira-secondary transition-colors" size={24} />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a href="#" className="text-gray-600 hover:text-ira-secondary hover:underline flex items-start gap-2">
                      <span className="text-ira-accent mt-1.5 text-xs">■</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              {category.items.length < allProducts.filter(p => category.title.includes('Waste') ? true : false).length && (
                 <a href="#" className="inline-block mt-4 text-sm font-medium text-ira-primary hover:underline">Explore More +</a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
