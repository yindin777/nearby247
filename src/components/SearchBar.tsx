import { Search } from "lucide-react";
import { useState } from "react";

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
      </div>
    </div>
  );
};