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

export default function TechStackSection () {
    return (
        <>
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
        </>
    )
}