
import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Fred A.",
    rating: 5,
    comment: "Une vraie pépite ! Des plats savoureux, des portions généreuses et un super rapport qualité-prix. Mention spéciale aux serveurs, toujours accueillants et attentionnés. Vous pouvez y aller les yeux fermés !",
    date: "Il y a 2 mois"
  },
  {
    id: 2,
    name: "Philippe D.",
    rating: 5,
    comment: "Les meilleurs plats thaïlandais de la région. Tout est frais et préparé sur place. Je recommande vivement le Pad Thai et le poulet au curry vert !",
    date: "Il y a 3 mois"
  },
  {
    id: 3,
    name: "Sophie B.",
    rating: 5,
    comment: "Un vrai délice ! Les saveurs sont authentiques et le rapport qualité/prix est excellent. Je recommande particulièrement les Bo Bun et les brochettes de poulet satay.",
    date: "Il y a 1 mois"
  },
  {
    id: 4,
    name: "Thomas R.",
    rating: 4,
    comment: "Très bonne cuisine, fraîche et savoureuse. Le personnel est accueillant et le service est rapide. Parfait pour une pause déjeuner.",
    date: "Il y a 2 semaines"
  },
  {
    id: 5,
    name: "Léa M.",
    rating: 5,
    comment: "Restaurant au top ! Les produits sont frais et de qualité. La cuisine est savoureuse et l'accueil très sympa. Je recommande !",
    date: "Il y a 1 mois"
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-thai-gold text-thai-gold" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ce que nos clients <span className="text-thai-gold">disent de nous</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits qui reviennent régulièrement pour savourer nos plats thaïlandais authentiques.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-1">
                <Card className="h-full bg-thai-dark border-0">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 flex items-center justify-between">
                      <RatingStars rating={testimonial.rating} />
                      <span className="text-sm text-gray-400">{testimonial.date}</span>
                    </div>
                    <p className="text-gray-300 mb-4 flex-grow">"{testimonial.comment}"</p>
                    <div className="font-medium text-white">
                      {testimonial.name}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 text-white" />
          <CarouselNext className="right-0 text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
