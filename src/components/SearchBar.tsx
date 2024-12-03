import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center h-14 bg-white rounded-full shadow-lg overflow-hidden animate-fade-in">
        <div className="flex items-center px-4 border-r border-gray-200 h-full">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search locations..."
          className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-400 bg-transparent outline-none"
        />
        <button className="px-6 h-full bg-primary hover:bg-primary/90 transition-colors">
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};