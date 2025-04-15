import React, { useState } from "react";
import { Phone, ShoppingBag, ExternalLink, MessageSquare, Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const OrderOptions = () => {
  const [takeawayInfoModalOpen, setTakeawayInfoModalOpen] = useState(false);
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je souhaite passer une commande à emporter chez SPECIAL THAÏ.");
    window.open(`https://wa.me/33130627151?text=${message}`, "_blank");
  };

  return (
    <section id="options-commande" className="py-16 bg-[#363636]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Comment <span className="text-thai-gold">commander</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Plusieurs options s'offrent à vous pour déguster nos délicieux plats thaïlandais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Option À Emporter */}
          <div className="bg-black p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
            <div>
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <ShoppingBag className="text-black h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">À Emporter</h3>
              <p className="text-gray-300 text-center text-sm mb-4">
                Commandez en ligne ou par téléphone/WhatsApp et récupérez au restaurant.
              </p>
            </div>
            <div className="mt-4 text-center space-y-2">
              <Dialog open={orderModalOpen} onOpenChange={setOrderModalOpen}>
                <DialogTrigger asChild>
                  <button className="btn-primary w-full">
                    Commander en ligne
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] h-[80vh] p-0 bg-gray-900/95 border-none">
                  <iframe 
                    src="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=c9bab295-9748-4049-80d3-6b24e7ef4411&restaurant_uid=7d35227a-a624-4e2c-a33a-fd08de309b03&facebook=true" 
                    className="w-full h-full rounded-lg"
                    title="Commander en ligne"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Option Livraison */}
          <div className="bg-black p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
             <div>
                <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                    <Truck className="text-black h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">Livraison</h3>
                <p className="text-gray-300 text-center text-sm mb-4">
                    Commandez en ligne ou par téléphone et faites-vous livrer.
                </p>
            </div>
            <div className="mt-4 text-center">
                <Dialog open={deliveryModalOpen} onOpenChange={setDeliveryModalOpen}>
                    <DialogTrigger asChild>
                        <button className="btn-primary w-full">
                            Options de livraison
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-black text-white border border-thai-gold rounded-lg">
                        <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-2xl text-thai-gold">
                            <Truck className="h-6 w-6" />
                            Commander en livraison
                        </DialogTitle>
                        <DialogDescription className="text-gray-300">
                            Commandez en ligne via notre partenaire ou appelez-nous.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                        <a 
                            href="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=c9bab295-9748-4049-80d3-6b24e7ef4411&restaurant_uid=7d35227a-a624-4e2c-a33a-fd08de309b03&facebook=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full block text-center"
                        >
                            Commander en ligne (via FoodBooking)
                        </a>

                        <div className="text-center my-4">
                          <span className="text-gray-400">— OU —</span>
                        </div>
                        
                        <div className="bg-black p-4 rounded-lg border border-gray-700">
                            <h4 className="font-medium text-lg mb-2 flex items-center gap-2 text-white">
                            <span className="bg-thai-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                            Appelez-nous pour commander
                            </h4>
                            <p className="text-gray-300 mb-2">
                            Contactez-nous par téléphone pour passer votre commande et organiser la livraison :
                            </p>
                            <a href="tel:0130627151" className="flex items-center gap-2 text-thai-gold font-medium text-lg hover:underline">
                            <Phone className="h-5 w-5" /> 01 30 62 71 51
                            </a>
                        </div>
                        <div className="bg-black p-4 rounded-lg border border-gray-700">
                            <h4 className="font-medium text-lg mb-2 flex items-center gap-2 text-white">
                            <span className="bg-thai-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                            Vérifier la zone de livraison
                            </h4>
                            <p className="text-gray-300">
                            Nous livrons principalement aux alentours de La Verrière. Appelez-nous pour confirmer si votre adresse est desservie.
                            </p>                    
                        </div>
                        </div>
                        <div className="flex justify-end">
                        <DialogClose asChild>
                            <button className="btn-primary">Fermer</button>
                        </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderOptions;
