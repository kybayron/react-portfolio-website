import LabeledCard from "../../components/LabeledCard";
import SectionTitle from "../../components/SectionTitle";
import apiGatewayLogo from '../../assets/api_gateway_logo.svg'
import cloudFrontLogo from '../../assets/cloudfront_logo.jpg'
import cloudWatchLogo from '../../assets/cloudwatch_logo.png'
import lambdaLogo from '../../assets/aws_lambda_logo.png'
import s3Logo from '../../assets/s3_logo.png'
import snsLogo from '../../assets/sns_logo.png'
import sqsLogo from '../../assets/sqs_logo.png'
import stepFunctionsLogo from '../../assets/step_functions_logo.svg'
import wafLogo from '../../assets/waf_logo.png'
import dynamoDbLogo from '../../assets/dynamo_logo.png'
import kotlinLogo from '../../assets/kotlin_logo.png'
import nodeJsLogo from '../../assets/nodejs_logo.png'
import reactLogo from '../../assets/react_logo.png'
import typescriptLogo from '../../assets/typescript_logo.png'
import androidLogo from '../../assets/android_logo.png'
import terraformLogo from '../../assets/terraform_logo.png'
import route53Logo from '../../assets/route_53_logo.png'

interface imageWithLabel {
    imageSrc: string,
    label: string
}

interface TechStackCategoryProps {
    title: string,
    cards: imageWithLabel[]
}

function TechStackCategory ({ title, cards }: TechStackCategoryProps) {
    return (
        <>
        <h1>{title}</h1>
        <div className="services-container">
            {cards.map((service: imageWithLabel) => (
            <LabeledCard key={service.label} imageSrc={service.imageSrc} label={service.label} />
            ))}
        </div>
        </>
    );
  };

const programmingLanguages = [
    { imageSrc: typescriptLogo, label: 'TypeScript' },
    { imageSrc: nodeJsLogo, label: 'NodeJS' },
    { imageSrc: reactLogo, label: 'ReactJS' },
    { imageSrc: kotlinLogo, label: 'Kotlin' },
    { imageSrc: androidLogo, label: 'Android' },
    { imageSrc: terraformLogo, label: 'Terraform' },
];
  
const awsServices = [
    { imageSrc: lambdaLogo, label: 'Lambda' },
    { imageSrc: apiGatewayLogo, label: 'API Gateway' },
    { imageSrc: s3Logo, label: 'S3' },
    { imageSrc: dynamoDbLogo, label: 'DynamoDB' },
    { imageSrc: cloudFrontLogo, label: 'CloudFront' },
    { imageSrc: route53Logo, label: 'Route 53' },
    { imageSrc: snsLogo, label: 'SNS' },
    { imageSrc: sqsLogo, label: 'SQS' },
    { imageSrc: cloudWatchLogo, label: 'CloudWatch' },
    { imageSrc: stepFunctionsLogo, label: 'Step Functions' },
    { imageSrc: wafLogo, label: 'AWS WAF' },
];

export default function TechStackSection() {
    return (
        <div className="tech-stack-container">
        <SectionTitle text="Tech Stack" />
        <TechStackCategory title="Programming Languages, Frameworks &amp; Tools" cards={programmingLanguages} />
        <TechStackCategory title="AWS Services" cards={awsServices} />
        </div>
    );
};