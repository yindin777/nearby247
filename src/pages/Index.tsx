import { SearchBar } from "@/components/SearchBar";
import { Map } from "@/components/Map";
import { ServiceProviderCard } from "@/components/ServiceProviderCard";
import { useState } from "react";
import { Settings, History, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const providers = [
    {
      name: "Dr. Sarah Johnson",
      profession: "Dentist",
      address: "123 Medical Center Dr",
      distance: "0.5 miles",
      image: "/lovable-uploads/9455b9f2-e382-4598-a54f-3b53fe1cba37.png",
      nextAvailable: "Today at 2:00 PM",
      rating: 4.8,
    },
    {
      name: "Robert Smith, Esq.",
      profession: "Lawyer",
      address: "456 Legal Plaza",
      distance: "0.8 miles",
      image: "/lovable-uploads/9455b9f2-e382-4598-a54f-3b53fe1cba37.png",
      nextAvailable: "Tomorrow at 10:00 AM",
      rating: 4.9,
    },
    {
      name: "Dr. Michael Brown",
      profession: "Dentist",
      address: "789 Health Ave",
      distance: "1.2 miles",
      image: "/lovable-uploads/9455b9f2-e382-4598-a54f-3b53fe1cba37.png",
      nextAvailable: "Tomorrow at 2:30 PM",
      rating: 4.7,
    },
    {
      name: "Emily White, DDS",
      profession: "Dentist",
      address: "321 Dental St",
      distance: "1.5 miles",
      image: "/lovable-uploads/9455b9f2-e382-4598-a54f-3b53fe1cba37.png",
      nextAvailable: "Friday at 11:00 AM",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Fixed */}
      <header className="bg-primary text-white py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/60e3683e-408d-4ae1-b42d-9803e6219e5d.png"
              alt="Profile"
              className="w-10 h-10 rounded-full bg-white/20"
            />
            <div className="flex flex-col">
              <span className="font-medium">Robert Doe</span>
              <span className="text-xs opacity-80">robert@example.com</span>
            </div>
          </div>
          <Button variant="ghost" className="hover:bg-white/20">
            Sign up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col pt-16">
        {/* Search Bar - Now at the top */}
        <div className="fixed top-16 left-0 w-full z-50">
          <SearchBar />
        </div>

        {/* Map Section */}
        <div className="fixed top-[calc(4rem+6.5rem)] left-0 w-full h-[47vh] bg-gray-100 z-40">
          <Map />
        </div>

        {/* Results Section - Scrollable */}
        <div className="mt-[calc(47vh+10.5rem)] container mx-auto max-w-6xl p-4 mb-16">
          <div className="space-y-4">
            {providers.map((provider, index) => (
              <ServiceProviderCard key={index} {...provider} />
            ))}
          </div>
        </div>

        {/* Bottom Menu - Fixed */}
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
      </div>
    </div>
  );
};

export default Index;