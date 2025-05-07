import Navbar from "@/components/NavBar/Navbar";
import "@/icons/fontawesome";
import HomeComponent from "@/components/Home/Home";
import AboutmeComponent from "@/components/About/Aboutme";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <Navbar />
      <HomeComponent />
      <AboutmeComponent />
    </main>
  );
}
