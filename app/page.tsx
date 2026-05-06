import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import Demo from "@/components/Demo";
import CTAFinal from "@/components/CTAFinal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Solucion />
      <Demo />
      <CTAFinal />
    </main>
  );
}
