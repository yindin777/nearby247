import { MapPin } from "lucide-react";

interface LocationCardProps {
  title: string;
  address: string;
  distance: string;
  image: string;
}

export const LocationCard = ({ title, address, distance, image }: LocationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <p className="text-sm">{address}</p>
        </div>
        <div className="mt-2 text-sm text-primary font-medium">{distance} away</div>
      </div>
    </div>
  );
};