import { ServiceProviderCard } from "./ServiceProviderCard";

interface Provider {
  name: string;
  profession: string;
  address: string;
  distance: string;
  image: string;
  nextAvailable: string;
  rating: number;
}

export const ProviderList = ({ providers }: { providers: Provider[] }) => {
  return (
    <div className="space-y-4">
      {providers.map((provider, index) => (
        <ServiceProviderCard key={index} {...provider} />
      ))}
    </div>
  );
};