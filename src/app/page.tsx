import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    // <main className="bg-[url('/img/hero-pattern.svg')] w-full h-screen">
    // <main className="bg-hero-pattern w-full h-screen">
    <main className="">
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
