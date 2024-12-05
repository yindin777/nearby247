import { Settings, History, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex justify-around items-center py-3 px-4">
        <Button variant="ghost" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <History className="w-6 h-6" />
          <span className="text-xs mt-1">History</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <Star className="w-6 h-6" />
          <span className="text-xs mt-1">Favorite</span>
        </Button>
      </div>
    </div>
  );
};