import React, { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactInfo = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-thai-gold/10 rounded-xl flex items-center justify-center">
        <Icon size={20} className="text-thai-gold" />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1 text-white">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="bg-thai-yellow/20 text-thai-gold px-4 py-2 rounded-lg text-sm font-medium">
            Où nous trouver
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3 text-white">
            Visitez Notre Restaurant
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Nous serions ravis de vous servir en personne. Visitez-nous ou commandez en ligne pour une livraison ou un retrait.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-thai-dark rounded-xl shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.9100335088414!2d1.9618133!3d48.767775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6925cee2baaaf%3A0x8ee0b97f29cf2582!2sSpecial%20Thaï!5e0!3m2!1sfr!2sfr!4v1713455120358!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-full"
              title="Emplacement du Restaurant"
            ></iframe>
          </div>

          <div className="bg-thai-dark rounded-xl shadow-md p-6 md:p-8 space-y-6">
            <ContactInfo icon={MapPin} title="Notre Adresse">
              <p className="text-gray-300">SPECIAL THAÏ</p>
              <p className="text-gray-300">B21 Résidence du Bois de l'Étang,</p>
              <p className="text-gray-300">78320 La Verrière</p>
            </ContactInfo>
            
            <ContactInfo icon={Clock} title="Horaires d'Ouverture">
              <p className="text-gray-300">Ouvert tous les jours</p>
              <p className="text-gray-300">11h00 - 14h00 et 18h00 - 22h30</p>
              <p className="text-gray-300">Fermé Vendredi midi et Dimanche midi</p>
            </ContactInfo>
            
            <ContactInfo icon={Phone} title="Coordonnées">
              <p className="text-gray-300">Téléphone: 01 30 62 71 51</p>
            </ContactInfo>
            
            <div className="pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="btn-primary w-full">
                    Commander en Ligne
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
