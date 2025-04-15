import React from "react";
import { Check } from "lucide-react";

const About = () => {
  const features = [
    "Recettes thaïlandaises authentiques",
    "Ingrédients frais d'origine locale",
    "Préparation sur commande pour une fraîcheur maximale",
    "Options végétariennes et sans gluten disponibles",
  ];

  return (
    <section id="about" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/public/lovable-uploads/44acf564-4c29-4fb4-8846-05b2bccc5bff.png"
                alt="Plats thaïlandais authentiques - brochettes et soupe"
                className="w-full h-auto rounded-tl-3xl rounded-br-3xl shadow-xl object-cover"
              />
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-thai-teal rounded-tl-3xl z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-thai-gold rounded-br-3xl z-0"></div>
            
            {/* Badge d'expérience */}
            {/* <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-16 bg-black rounded-xl shadow-lg p-4 z-20">
              <div className="text-center">
                <p className="text-3xl font-bold text-thai-gold">10+</p>
                <p className="text-sm text-white font-medium">Années d'Expérience</p>
              </div>
            </div> */}
          </div>
          
          <div>
            <span className="bg-thai-pink/20 text-thai-pink px-4 py-2 rounded-lg text-sm font-medium">
              À Propos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-white">
              Nous Apportons la Street Food Thaï<br />À Votre Porte
            </h2>
            <p className="text-gray-300 mb-6">
              SPECIAL THAÏ a été fondé avec une mission simple : apporter les saveurs authentiques de la street food thaïlandaise aux amateurs de cuisine. Nous combinons des recettes thaïlandaises traditionnelles avec des techniques culinaires modernes pour créer des plats inoubliables.
            </p>
            <p className="text-gray-300 mb-8">
              Nos chefs sont formés en Thaïlande et apportent leur expertise à chaque plat qu'ils préparent. Nous nous approvisionnons en ingrédients les plus frais localement tout en important des épices thaïlandaises authentiques pour assurer cet équilibre parfait des saveurs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-thai-teal/20 flex items-center justify-center mr-3">
                    <Check size={14} className="text-thai-teal" />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
            
            {/* <button className="btn-primary">En Savoir Plus</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
