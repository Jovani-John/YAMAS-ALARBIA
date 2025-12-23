import AboutSection from "@/components/home/AboutPreview";
import BrandsSlider from "@/components/home/BrandsSlider";
import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsPreview";
import ServicesSection from "@/components/home/ServiceSection";

export default function HomePage() {
  return (
<>
<HeroSection/>
<ServicesSection/>
<AboutSection/>
<ProjectsSection/>
<BrandsSlider/>
<CTASection/>
</>
  );
}