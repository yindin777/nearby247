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
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{profession}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-1 text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <p>{address}</p>
        </div>
        <div className="flex items-center mt-1 text-gray-600 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <p>{nextAvailable}</p>
        </div>
      </div>
      <Button size="sm">Book Now</Button>
    </div>
  );
};