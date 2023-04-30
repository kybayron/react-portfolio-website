
import React from 'react';
import HeaderSection from '../components/HeaderSection';
import ContentSection from '../components/ContentSection';
import FooterSection from '../components/FooterSection';
import image from '../assets/self_photo.jpg'
import SectionTitle from '../components/SectionTitle';
import ClickableCard from '../components/ClickableCard';
import linkedinLogo from '../assets/linkedin_logo.png'
import githubLogo from '../assets/github_logo.png'

export default function HomePage() {
    return (
        <>
            <HeaderSection>
                <div className='intro-container'>
                    <div className='img-self-container'>
                        <img className='img-self' src={ image } alt='self'/>
                    </div>
                    <div className='intro-text-container'>
                        <h1 className='intro-title'> Hi I&apos;m Karl!</h1>
                        <p className='intro-body'>As a software engineer, I am passionate about writing clean, readable, and testable code. With extensive experience in NodeJS, Typescript, React, Redux, and AWS Services, I am well-equipped to tackle even the most complex software development projects.</p>
                    </div>
                </div>
            </HeaderSection>
            <ContentSection>
                <SectionTitle text='Socials'/>
                <div className='socials-container'>
                    <ClickableCard imageSrc={linkedinLogo} url="https://www.linkedin.com/in/karl-edward-bayron/" label="LinkedIn"/>
                    <ClickableCard imageSrc={githubLogo} url="https://github.com/kybayron" label="GitHub"/>
                </div>
            </ContentSection>
            <FooterSection/>
        </>
    )
}