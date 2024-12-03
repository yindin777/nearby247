import { Search, MapPin, Briefcase, Mic, Bot } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [isAiEnabled, setIsAiEnabled] = useState(false);

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <div className="relative flex items-center h-14 bg-white rounded-full shadow-lg overflow-hidden animate-fade-in">
        <div className="flex items-center px-4 border-r border-gray-200 h-full flex-1">
          <Briefcase className="w-5 h-5 text-primary" />
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="Profession (e.g., Dentist)"
            className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-400 bg-transparent outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsAiEnabled(!isAiEnabled)}
            className={isAiEnabled ? "text-primary" : "text-gray-400"}
          >
            <Bot className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mic className="w-5 h-5" />
          </Button>
          <Button className="rounded-full">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};