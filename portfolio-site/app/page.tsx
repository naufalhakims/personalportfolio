import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-neutral-900">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
