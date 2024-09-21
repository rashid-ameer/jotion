import Navbar from "./_components/navbar";

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full">
      <Navbar />
      <main className="min-h-full pt-[clamp(6rem,10vw+0.5rem,9rem)]">
        {children}
      </main>
    </div>
  );
}
export default MarketingLayout;
