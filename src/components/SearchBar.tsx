import { Search, MapPin, Wifi, Calendar, Coffee, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const SearchBar = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="w-full bg-primary text-white p-4 rounded-b-xl">
      <div className="flex flex-col gap-4">
        {/* Search Input */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search location"
            className="w-full px-4 py-2 rounded-full text-black bg-white pl-10"
          />
          <Search className="absolute left-3 w-5 h-5 text-gray-400" />
        </div>

        {/* Current Location */}
        <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">YOUR LOCATION</span>
              <span className="text-xs">Coffee Shop</span>
              <span className="text-xs">2.3 km</span>
            </div>
          </div>
          <Button variant="ghost" className="hover:bg-white/20">
            <MapPin className="w-5 h-5" />
          </Button>
        </div>

        {/* Amenities */}
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="flex flex-col items-center hover:bg-white/20">
            <Wifi className="w-5 h-5" />
            <span className="text-xs mt-1">WiFi</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center hover:bg-white/20">
            <Calendar className="w-5 h-5" />
            <span className="text-xs mt-1">Events</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center hover:bg-white/20">
            <Coffee className="w-5 h-5" />
            <span className="text-xs mt-1">Coffee</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center hover:bg-white/20">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-xs mt-1">Shop</span>
          </Button>
        </div>
      </div>
    </div>
  );
};