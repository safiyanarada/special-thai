import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Hero = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleOrderClick = () => {
    setOrderModalOpen(true);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-thai-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8">
            <div className="inline-block bg-thai-yellow/20 rounded-lg px-4 py-2 mb-4">
              <span className="text-thai-gold font-medium">Cuisine thaïlandaise authentique</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Special Thai : <span className="text-thai-gold">authentique street food</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Découvrez l'authentique goût de la Thaïlande. Nos plats sont préparés avec des ingrédients frais et des épices traditionnelles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
                <DialogTrigger asChild>
                  <button className="btn-primary flex items-center" onClick={handleOrderClick}>
                    Commander <ArrowRight size={20} className="ml-2" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none">
                  <iframe 
                    src="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=c9bab295-9748-4049-80d3-6b24e7ef4411&restaurant_uid=7d35227a-a624-4e2c-a33a-fd08de309b03&facebook=true" 
                    className="w-full h-[80vh] rounded-lg"
                    title="Commander en ligne"
                  />
                </DialogContent>
              </Dialog>
              <button 
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-thai-dark transition-colors"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorer le Menu
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/cc4ae6ed-226b-4f41-b289-8bca967c0a6d.png"
                alt="Plat thaïlandais Special Thaï"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-thai-gold/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Badge flottant */}
            <div className="absolute -top-10 -right-10 md:top-8 md:-right-16 bg-thai-dark rounded-xl shadow-lg p-4 z-20 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="bg-thai-gold text-white p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Bien Noté</p>
                  <p className="text-xs text-gray-300">4.3/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Éléments d'arrière-plan */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-thai-yellow/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-thai-teal/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
