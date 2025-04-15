import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center text-2xl font-heading font-bold text-white">
            <img 
              src="/logos/specialthai-logo.png" 
              alt="Special Thaï Logo" 
              className="h-28 w-auto mr-2"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-white hover:text-thai-gold transition-colors">
              Accueil
            </a>
            <a href="#menu" className="font-medium text-white hover:text-thai-gold transition-colors">
              Menu
            </a>
            <a href="#about" className="font-medium text-white hover:text-thai-gold transition-colors">
              À propos
            </a>
            <a href="#contact" className="font-medium text-white hover:text-thai-gold transition-colors">
              Infos
            </a>
            <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
              <DialogTrigger asChild>
                <button className="btn-primary">Commander</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none">
                <iframe 
                  src="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=c9bab295-9748-4049-80d3-6b24e7ef4411&restaurant_uid=7d35227a-a624-4e2c-a33a-fd08de309b03&facebook=true" 
                  className="w-full h-[80vh] rounded-lg"
                  title="Commander en ligne"
                />
              </DialogContent>
            </Dialog>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black rounded-md shadow-md animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#" 
                className="font-medium text-white hover:text-thai-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="#menu" 
                className="font-medium text-white hover:text-thai-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#about" 
                className="font-medium text-white hover:text-thai-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#contact" 
                className="font-medium text-white hover:text-thai-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Infos
              </a>
              <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
                <DialogTrigger asChild>
                  <button className="btn-primary self-start">Commander</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none">
                  <iframe 
                    src="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=c9bab295-9748-4049-80d3-6b24e7ef4411&restaurant_uid=7d35227a-a624-4e2c-a33a-fd08de309b03&facebook=true" 
                    className="w-full h-[80vh] rounded-lg"
                    title="Commander en ligne"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
