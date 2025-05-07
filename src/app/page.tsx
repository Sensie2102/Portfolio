import Navbar from "@/components/NavBar/Navbar";
import "@/icons/fontawesome";
import HomeComponent from "@/components/pages/Home/Home";
import AboutmeComponent from "@/components/pages/About/Aboutme";
import Project from "@/components/pages/Projects/Project";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <Navbar />
      <HomeComponent />
      <AboutmeComponent />
      <Project />
    </main>
  );
}
