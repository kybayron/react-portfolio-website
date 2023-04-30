
import React from 'react';
import HeaderSection from '../components/HeaderSection';
import ContentSection from '../components/ContentSection';
import FooterSection from '../components/FooterSection';
import image from '../assets/self_photo.jpg'
import SectionTitle from '../components/SectionTitle';
import ClickableCard from '../components/ClickableCard';
import linkedinLogo from '../assets/linkedin_logo.png'
import apiGatewayLogo from '../assets/api_gateway_logo.svg'
import cloudFrontLogo from '../assets/cloudfront_logo.jpg'
import cloudWatchLogo from '../assets/cloudwatch_logo.png'
import lambdaLogo from '../assets/lambda_logo.png'
import s3Logo from '../assets/s3_logo.png'
import snsLogo from '../assets/sns_logo.png'
import sqsLogo from '../assets/sqs_logo.png'
import stepFunctionsLogo from '../assets/step_functions_logo.svg'
import wafLogo from '../assets/waf_logo.png'
import dynamoDbLogo from '../assets/dynamo_logo.png'
import githubLogo from '../assets/github_logo.png'
import LabeledCard from '../components/LabeledCard';

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
                <SectionTitle text='Projects'/>
                <div>
                    <h1>Coming Soon!</h1>
                </div>
                <SectionTitle text='Tech Stack'/>
                <div className='tech-stack-container'>
                    <h1>AWS Services</h1>
                    <div className='services-container'>
                        <LabeledCard imageSrc={lambdaLogo} label='Lambda'/>
                        <LabeledCard imageSrc={apiGatewayLogo} label='API Gateway'/>
                        <LabeledCard imageSrc={s3Logo} label='S3'/>
                        <LabeledCard imageSrc={dynamoDbLogo} label='DynamoDB'/>
                        <LabeledCard imageSrc={cloudFrontLogo} label='CloudFront'/>
                        <LabeledCard imageSrc={snsLogo} label='SNS'/>
                        <LabeledCard imageSrc={sqsLogo} label='SQS'/>
                        <LabeledCard imageSrc={cloudWatchLogo} label='CloudWatch'/>
                        <LabeledCard imageSrc={stepFunctionsLogo} label='Step Functions'/>
                        <LabeledCard imageSrc={wafLogo} label='AWS WAF'/>

                    </div>
                </div>
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