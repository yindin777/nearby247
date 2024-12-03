import { SearchBar } from "@/components/SearchBar";
import { LocationCard } from "@/components/LocationCard";
import { Map } from "@/components/Map";

const Index = () => {
  const locations = [
    {
      title: "Coffee Shop",
      address: "123 Main St, City",
      distance: "0.5 miles",
      image: "/lovable-uploads/9455b9f2-e382-4598-a54f-3b53fe1cba37.png",
    },
    {
      title: "Restaurant Hub",
      address: "456 Oak St, City",
      distance: "0.8 miles",
      image: "/lovable-uploads/9455b9f2-e382-4598-a54f-3b53fe1cba37.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Find Places Near You
        </h1>
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
          <div className="lg:sticky lg:top-8 h-[calc(100vh-8rem)]">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;