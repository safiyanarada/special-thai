import React, { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// Structure des données du menu avec des images mais sans prix
const menuCategories = [
  {
    id: "entrees",
    name: "Entrées",
    items: [
      { id: 1, name: "Nems au poulet", description: "À base de poulet haché, champignons noirs, vermicelles de soja, oignon, carotte et soja … Le Nem au poulet est un plat asiatique authentique et innové à la fois", image: "/lovable-uploads/nems-poulet.jpg" },
      { id: 2, name: "Nems aux crevettes", description: "Amateurs des recettes à base de crevettes ? Notre restaurant thaïlandais Spécial Thaï vous propose le Nems Crevette : une spécialité asiatique authentique incontournable.", image: "/lovable-uploads/nems-crevettes.jpg" },
      { id: 3, name: "Riz cantonnais", description: "Savoureux riz sauté aux légumes croquants, accompagné d'œufs fondants et de généreux morceaux de poulet doré. Un plat complet, parfumé et réconfortant.", image: "/lovable-uploads/rizcantonnais.jpg" },
      { id: 4, name: "Soupe au choux", description: "Soupe aux choux parfumée au bouillon thaï, mariant chou tendre, légumes croquants et herbes fraîches. Un classique revisité avec une touche d'Asie. Réconfortante et pleine de saveurs.", image: "/lovable-uploads/soupechoux.jpg" }
    ]
  },
  {
    id: "bo-bun",
    name: "Bo Bun Thaï",
    items: [
      { id: 5, name: "Bo Bun au poulet", description: "Vermicelles de riz, poulet, légumes, sauce thaï", image: "/lovable-uploads/bobun-poulet.jpg" },
      { id: 6, name: "Bo Bun au bœuf", description: "Vermicelles de riz, bœuf, légumes, sauce thaï", image: "/lovable-uploads/bobun-boeuf.jpg" },
      { id: 7, name: "Bo Bun aux crevettes", description: "Vermicelles de riz, crevettes, légumes, sauce thaï", image: "/lovable-uploads/bobun-crevettes.jpg" },
    ]
  },
  {
    id: "riz",
    name: "Kao Pat (Riz Thaï)",
    items: [
      { id: 8, name: "Kao Pat au poulet", description: "Riz thaï sauté au poulet et légumes", image: "/lovable-uploads/kaopat-poulet.jpg" },
      { id: 9, name: "Kao Pat au bœuf", description: "Riz thaï sauté au bœuf et légumes", image: "/lovable-uploads/kaopat-boeuf.jpg" },
      { id: 10, name: "Kao Pat aux crevettes", description: "Riz thaï sauté aux crevettes et légumes", image: "/lovable-uploads/kaopat-crevettes.jpg" },
    ]
  },
  {
    id: "pad-thai",
    name: "Pad Thaï",
    items: [
      { id: 11, name: "Pad Thaï au poulet", description: "Nouilles de riz sautées au poulet, œuf et cacahuètes", image: "/lovable-uploads/padthai-poulet.jpg" },
      { id: 12, name: "Pad Thaï au bœuf", description: "Nouilles de riz sautées au bœuf, œuf et cacahuètes", image: "/lovable-uploads/padthai-boeuf.jpg" },
      { id: 13, name: "Pad Thaï aux crevettes", description: "Nouilles de riz sautées aux crevettes, œuf et cacahuètes", image: "/lovable-uploads/padthai-crevettes.jpg" },
    ]
  },
  {
    id: "curry",
    name: "Les Curry",
    items: [
      { id: 14, name: "Curry vert au poulet", description: "Poulet au curry vert, lait de coco et légumes", image: "/lovable-uploads/curryvert-poulet.jpg" },
      { id: 15, name: "Curry rouge au bœuf", description: "Bœuf au curry rouge, lait de coco et légumes", image: "lovable-uploads/curryrouge-boeuf.jpg" },
      { id: 16, name: "Curry jaune aux crevettes", description: "Crevettes au curry jaune, lait de coco et légumes", image: "/lovable-uploads/curryjaune-crevette.jpg" },
    ]
  },
  {
    id: "wok",
    name: "Wok",
    items: [
      { id: 17, name: "Poulet Basilic Thai", description: "Poulet sauté au basilic thaï et légumes", image: "lovable-uploads/wokpoulet.jpg" },
      { id: 18, name: "Lok Lak Boeuf", description: "Bœuf mariné sauté, servi avec riz et œuf", image: "lovable-uploads/wokboeuf.jpg" },
      { id: 19, name: "Riz Thai Crevette Ananas", description: "Riz sauté aux crevettes, ananas et légumes", image: "lovable-uploads/rizcrevettes.jpg" },
    ]
  }
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <section id="menu" className="py-16 bg-black text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre <span className="text-thai-gold">Menu</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez nos spécialités thaïlandaises préparées avec des ingrédients frais et authentiques
          </p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <div className="overflow-x-auto pb-2">
            <TabsList className="mb-8 w-full justify-start bg-thai-dark/50">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="px-4 py-2 whitespace-nowrap text-white data-[state=active]:bg-thai-gold data-[state=active]:text-black"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow bg-thai-dark">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="w-full md:w-1/3 h-32 md:h-auto">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full md:w-2/3 p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-lg text-white">{item.name}</h3>
                          </div>
                          <p className="text-gray-300 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-gray-400 italic mb-8">
            * Les prix peuvent varier. Menu non contractuel.
          </p>
          <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
            <DialogTrigger asChild>
              <button className="btn-primary">
                Commander
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] h-[80vh] p-0 bg-transparent border-none">
              <iframe 
                src="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=c9bab295-9748-4049-80d3-6b24e7ef4411&restaurant_uid=7d35227a-a624-4e2c-a33a-fd08de309b03&facebook=true" 
                className="w-full h-full rounded-lg"
                title="Commander en ligne"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Menu;
