import CardService from "@/components/card/card-service";
import { CarouselPlugin } from "@/components/carousel/carousel";
import Navbar from "@/components/navbar/nav-bar";
import BackgroundHero from "@/public/img/hero.png";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section className="text-white pad-x flex items-center my-4">
        <CarouselPlugin />
      </section>

      <section className="pad-x py-12">
        <div className="space-y-8">
          <div className="max-w-lg space-y-2">
            <h1 className="text-3xl text-primary font-semibold">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg">
              Our services at Sea Salon offer luxurious treatments to enhance
              your beauty.
            </p>
          </div>
          <div className="w-full">
            <div className="lg:grid lg:grid-cols-3 md:gap-4 block md:grid md:grid-cols-2 lg:grid gap-4">
              <CardService />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
