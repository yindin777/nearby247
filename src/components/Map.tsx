import { useEffect, useRef } from "react";

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Map initialization will go here when we add the map provider
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] rounded-xl overflow-hidden shadow-lg animate-fade-in">
      <div ref={mapRef} className="w-full h-full bg-gray-100">
        {/* Map placeholder - we'll implement the actual map in the next iteration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Map loading...</p>
        </div>
      </div>
    </div>
  );
};