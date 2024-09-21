import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";

function MarketingPage() {
  return (
    <div className="container flex h-full flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 pb-[clamp(2rem,5vw,5rem)]">
        <Header />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
export default MarketingPage;
