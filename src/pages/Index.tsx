import { SearchBar } from "@/components/SearchBar";
import { LocationCard } from "@/components/LocationCard";
import { Map } from "@/components/Map";
import { ServiceProviderCard } from "@/components/ServiceProviderCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Find Professional Services Near You
        </h1>
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {providers.map((provider, index) => (
                <ServiceProviderCard key={index} {...provider} />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md"
              />
            </div>
            <div className="sticky top-8">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;