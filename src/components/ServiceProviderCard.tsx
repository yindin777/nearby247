import { MapPin, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceProviderCardProps {
  name: string;
  profession: string;
  address: string;
  distance: string;
  image: string;
  nextAvailable: string;
  rating: number;
}

export const ServiceProviderCard = ({
  name,
  profession,
  address,
  distance,
  image,
  nextAvailable,
  rating,
}: ServiceProviderCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{profession}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">{address}</p>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          <p className="text-sm">{nextAvailable}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-primary font-medium">{distance} away</span>
          <Button size="sm">Book Now</Button>
        </div>
      </div>
    </div>
  );
};