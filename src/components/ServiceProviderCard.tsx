import { MapPin, Star, Clock, User } from "lucide-react";
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
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
        <User className="w-8 h-8 text-gray-400" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
            <p className="text-xs text-gray-600">{profession}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="ml-1 text-xs font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-0.5 text-gray-600 text-xs">
          <MapPin className="w-3 h-3 mr-1" />
          <p>{address}</p>
        </div>
        <div className="flex items-center mt-0.5 text-gray-600 text-xs">
          <Clock className="w-3 h-3 mr-1" />
          <p>{nextAvailable}</p>
        </div>
      </div>
      <Button size="sm" className="text-xs px-2 py-1 h-7">Book</Button>
    </div>
  );
};