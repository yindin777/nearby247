import { Map } from "./Map";

export const MapSection = () => {
  return (
    <div className="fixed top-[calc(4rem+6.5rem)] left-0 w-full h-[47vh] bg-gray-100 z-40">
      <Map />
    </div>
  );
};