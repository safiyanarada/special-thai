import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">
              SPECIAL<span className="text-thai-gold">THAÏ</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Découvrez les saveurs thaïlandaises authentiques. Nos plats sont préparés avec des ingrédients frais et des épices traditionnelles.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/specialthai78/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-thai-gold/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/special_thai/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-thai-gold/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-thai-gold/80 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-thai-gold transition-colors">Accueil</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-thai-gold transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-thai-gold transition-colors">À Propos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-thai-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Horaires d'Ouverture</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Ouvert tous les jours</li>
              <li className="text-white font-medium">11h00 - 14h00 et 18h00 - 22h30</li>
              <li className="text-gray-300 mt-4">Fermé</li>
              <li className="text-white font-medium">Vendredi midi et Dimanche midi</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contactez-Nous Visitez Notre Restaurant</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">SPECIAL THAÏ</li>
              <li className="text-gray-300">B21 Résidence du Bois de l'Étang,</li>
              <li className="text-gray-300">78320 La Verrière</li>
              <li className="text-gray-300">01 30 62 71 51</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 mb-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SPECIAL THAÏ. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
