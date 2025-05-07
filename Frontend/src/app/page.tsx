import Navbar from "@/components/NavBar/Navbar";
import "@/icons/fontawesome";
import HomeComponent from "@/components/pages/Home/Home";
import AboutmeComponent from "@/components/pages/About/Aboutme";
import Project from "@/components/pages/Projects/Project";
import Contact from "@/components/pages/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <Navbar />
      <HomeComponent />
      <AboutmeComponent />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
