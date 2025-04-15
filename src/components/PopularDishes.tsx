
import React from "react";
import { Star } from "lucide-react";

interface DishProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const dishes: DishProps[] = [
  {
    id: 1,
    name: "Pad Thaï",
    description: "Nouilles de riz sautées aux œufs, tofu, germes de soja et cacahuètes",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1617622733273-c414e32f5056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.9,
    category: "Nouilles"
  },
  {
    id: 2,
    name: "Curry Vert",
    description: "Curry à base de lait de coco avec pâte de piment vert, légumes et poulet",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.8,
    category: "Curry"
  },
  {
    id: 3,
    name: "Soupe Tom Yum",
    description: "Soupe aigre-douce à la citronnelle, feuilles de lime kaffir et crevettes",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    rating: 4.7,
    category: "Soupe"
  },
  {
    id: 4,
    name: "Riz Gluant à la Mangue",
    description: "Riz gluant sucré avec mangue fraîche et crème de coco",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80",
    rating: 4.9,
    category: "Dessert"
  }
];

const DishCard = ({ dish }: { dish: DishProps }) => {
  return (
    <div className="bg-thai-dark rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div className="absolute top-2 left-2 bg-thai-gold text-white px-2 py-1 rounded text-xs font-medium">
          {dish.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white">{dish.name}</h3>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-thai-yellow text-thai-yellow" />
            <span className="text-sm font-medium text-white">{dish.rating}</span>
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">{dish.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-thai-gold font-bold">{dish.price.toFixed(2)}€</span>
          <button className="bg-thai-gold text-black px-3 py-1 rounded-md text-sm hover:bg-thai-yellow transition-colors">
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDishes = () => {
  return (
    <section id="menu" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-thai-teal/20 text-thai-teal px-4 py-2 rounded-lg text-sm font-medium">
            Notre Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3 text-white">
            Plats Populaires
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Découvrez la sélection de notre chef des plats thaïlandais les plus appréciés, préparés avec des épices authentiques et des ingrédients frais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-secondary">
            Voir le Menu Complet
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
