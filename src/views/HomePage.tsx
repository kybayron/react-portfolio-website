
import React from 'react';
import HeaderSection from '../components/HeaderSection';
import ContentSection from '../components/ContentSection';
import FooterSection from '../components/FooterSection';
import Card from '../components/Card';
import image from '../assets/self_photo.jpg'

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
                <Card>
                    <div className='intro-text-container'>
                        <p>Hi I&apos;m Karl</p>
                    </div>
                </Card>
            </ContentSection>
            <FooterSection/>
        </>
    )
}