import { SearchBar } from "@/components/SearchBar";
import { Map } from "@/components/Map";
import { ServiceProviderCard } from "@/components/ServiceProviderCard";
import { Chat } from "@/components/Chat";
import { useState } from "react";
import { Home, Search, Calendar, User } from "lucide-react";

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
    // Adding more providers to demonstrate scrolling
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Fixed */}
      <header className="bg-white shadow-sm py-4 fixed top-0 w-full z-50">
        <h1 className="text-2xl font-bold text-center">NearBy</h1>
      </header>

      {/* Main Content - Starts below header */}
      <div className="flex flex-col pt-16">
        {/* Map Section - Fixed 47vh */}
        <div className="fixed top-16 left-0 w-full h-[47vh] bg-gray-100 z-40">
          <Map />
        </div>

        {/* Search and AI Section - Fixed below map */}
        <div className="fixed top-[calc(47vh+4rem)] left-0 w-full bg-white shadow-md z-30 p-4">
          <div className="container mx-auto max-w-6xl">
            <SearchBar />
            <div className="mt-4">
              <Chat />
            </div>
          </div>
        </div>

        {/* Results Section - Scrollable */}
        <div className="mt-[calc(47vh+20vh+4rem)] container mx-auto max-w-6xl p-4 mb-16">
          <div className="space-y-4">
            {providers.map((provider, index) => (
              <ServiceProviderCard key={index} {...provider} />
            ))}
          </div>
        </div>

        {/* Bottom Menu - Fixed */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex justify-around items-center py-3 px-4">
            <button className="flex flex-col items-center text-gray-600 hover:text-primary">
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-primary">
              <Search className="w-6 h-6" />
              <span className="text-xs mt-1">Search</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-primary">
              <Calendar className="w-6 h-6" />
              <span className="text-xs mt-1">Bookings</span>
            </button>
            <button className="flex flex-col items-center text-gray-600 hover:text-primary">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;