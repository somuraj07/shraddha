import AboutSection from "@/components/aboutus";
import Banner from "@/components/baneer";
import ExactNavbar from "@/components/navbar";
import BusinessServicesSection from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner/>
    <BusinessServicesSection/>
    <AboutSection/>
   </div>
  );
}
