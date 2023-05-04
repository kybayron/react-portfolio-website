
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
import lambdaLogo from '../assets/aws_lambda_logo.png'
import s3Logo from '../assets/s3_logo.png'
import snsLogo from '../assets/sns_logo.png'
import sqsLogo from '../assets/sqs_logo.png'
import stepFunctionsLogo from '../assets/step_functions_logo.svg'
import wafLogo from '../assets/waf_logo.png'
import dynamoDbLogo from '../assets/dynamo_logo.png'
import githubLogo from '../assets/github_logo.png'
import kotlinLogo from '../assets/kotlin_logo.png'
import nodeJsLogo from '../assets/nodejs_logo.png'
import reactLogo from '../assets/react_logo.png'
import typescriptLogo from '../assets/typescript_logo.png'
import androidLogo from '../assets/android_logo.png'
import terraformLogo from '../assets/terraform_logo.png'
import route53Logo from '../assets/route_53_logo.png'
import LabeledCard from '../components/LabeledCard';
import Card from '../components/Card';

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
                        <p className='intro-body'>Currently a Software Engineer at <a href='https://www.maya.ph/'>Maya Philippines, Inc.</a></p>
                    </div>
                </div>
            </HeaderSection>
            <ContentSection>
                <SectionTitle text='Projects'/>
                <div>
                    <h1>This Portfolio Website!</h1>
                    <Card>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <div className='buttons-container'>
                            <button type='button' className='button blue'>View Code</button>
                            <button type='button' className='button green'>View Demo</button>
                        </div>
                    </Card>
                    <h1>More Coming Soon!</h1>
                </div>
                <SectionTitle text='Tech Stack'/>
                <div className='tech-stack-container'>
                    <h1>Programming Languages, Frameworks & Tools</h1>
                    <div className='services-container'>
                        <LabeledCard imageSrc={typescriptLogo} label='TypeScript'/>
                        <LabeledCard imageSrc={nodeJsLogo} label='NodeJS'/>
                        <LabeledCard imageSrc={reactLogo} label='ReactJS'/>
                        <LabeledCard imageSrc={kotlinLogo} label='Kotlin'/>
                        <LabeledCard imageSrc={androidLogo} label='Android'/>
                        <LabeledCard imageSrc={terraformLogo} label='Terraform'/>
                    </div>
                    <h1>AWS Services</h1>
                    <div className='services-container'>
                        <LabeledCard imageSrc={lambdaLogo} label='Lambda'/>
                        <LabeledCard imageSrc={apiGatewayLogo} label='API Gateway'/>
                        <LabeledCard imageSrc={s3Logo} label='S3'/>
                        <LabeledCard imageSrc={dynamoDbLogo} label='DynamoDB'/>
                        <LabeledCard imageSrc={cloudFrontLogo} label='CloudFront'/>
                        <LabeledCard imageSrc={route53Logo} label='Route 53' />
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