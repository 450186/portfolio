import HeroSection from "@/components/home/Hero/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects/FeaturedProjects";
import About from "@/components/home/About/About";
import Contact from "@/components/home/Contact/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <div className={styles.lastRow}>
        <About />
        <Contact />
      </div>
    </main>
  );
}