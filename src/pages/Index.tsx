import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";
import { MapSection } from "@/components/MapSection";
import { ProviderList } from "@/components/ProviderList";
import { BottomNavigation } from "@/components/BottomNavigation";
import { providers } from "@/data/providers";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Header />
      
      {/* Search Bar - Fixed position directly under header */}
      <div className="fixed top-14 left-0 w-full z-50">
        <SearchBar />
      </div>

      {/* Map Section */}
      <MapSection />

      {/* Results Section - Scrollable */}
      <div className="mt-[calc(47vh+10.5rem)] pb-20">
        <div className="px-4">
          <ProviderList providers={providers} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;