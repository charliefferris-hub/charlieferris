import { Apps } from "@/components/sections/Apps";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Numbers } from "@/components/sections/Numbers";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Numbers />
        <Apps />
      </main>
      <Footer />
    </>
  );
}
