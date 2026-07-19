import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
    </main>
  );
}

export default LandingPage;