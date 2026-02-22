import Footer from '@/sections/FooterSection'
import HeroSection from '@/sections/HeroSection'
import InformationSection from '@/sections/InformationSection'
import AboutGameSection from '@/sections/AboutGameSection'
import ObjectivesSection from '@/sections/ObjectivesSection'
import StoresSection from '@/sections/StoresSection'
export default function HomePage(){
    return(
        <div>
            <HeroSection />
            <InformationSection />
            <ObjectivesSection />
            <AboutGameSection />
            <StoresSection />
            <Footer/>
        </div>
    )
};