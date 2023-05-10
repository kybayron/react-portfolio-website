
import React from 'react';
import HeaderSection from '../components/HeaderSection';
import ContentSection from '../components/ContentSection';
import FooterSection from '../components/FooterSection';
import TechStackSection from './sections/TechStackSection';
import ProjectsSection from './sections/ProjectsSection';
import IntroSection from './sections/IntroSection';
import SocialsSection from './sections/SocialsSection';

export default function HomePage() {
    return (
        <>
            <HeaderSection>
               <IntroSection />
            </HeaderSection>
            <ContentSection>
                <ProjectsSection />
                <TechStackSection />
                <SocialsSection />
            </ContentSection>
            <FooterSection/>
        </>
    )
}