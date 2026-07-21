import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/hero";
import Features from "../components/features/Features";

function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}

export default LandingPage;