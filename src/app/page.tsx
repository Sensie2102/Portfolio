import Navbar from "@/components/NavBar/Navbar";
import "@/icons/fontawesome";
import HomeComponent from "@/components/Home/Home";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <Navbar />
      <HomeComponent />
    </main>
  );
}
