export const Header = () => {
  return (
    <header className="bg-[#222222] text-white py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold" style={{ fontSize: "calc(1.5rem * 1.33)" }}>NearBy</h1>
        <p className="text-[#F97316] mt-1 text-sm font-medium tracking-wide">[ Realtime Booking ]</p>
      </div>
    </header>
  );
};