import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";
import { MapSection } from "@/components/MapSection";
import { ProviderList } from "@/components/ProviderList";
import { BottomNavigation } from "@/components/BottomNavigation";
import { providers } from "@/data/providers";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Bar - Fixed position */}
      <div className="fixed top-16 left-0 w-full z-50">
        <SearchBar />
      </div>

      {/* Map Section */}
      <MapSection />

      {/* Results Section - Scrollable */}
      <div className="mt-[calc(47vh+10.5rem)] container mx-auto max-w-6xl p-4 mb-16">
        <ProviderList providers={providers} />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;