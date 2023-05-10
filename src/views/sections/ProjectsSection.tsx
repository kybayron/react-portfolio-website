import Card from "../../components/Card";
import SectionTitle from "../../components/SectionTitle";

export default function ProjectsSection () {
    return (
        <>
            <SectionTitle text='Projects'/>
                <div>
                    <Card>
                        <h1 className='project-title'>This Portfolio Website!</h1>
                        <p>This portfolio website you are on right now is created using <b>Typescript</b> and <b>React</b> and is hosted on Amazon Web Service <b>S3</b> which is then distributed by AWS&apos;s Content Delivery Network Service called <b>Cloudfront</b>. The setup for the domain and SSL certificate of this website was done through AWS <b>Route 53</b>. </p>
                        <p>The main goal of this website is to provide an easy overview on my profile as a Software Developer as well as easy access to my deployed projects and their respective code which are hosted in my personal Github account.</p>
                        <div className='buttons-container'>
                            <a href='https://github.com/kybayron/react-portfolio-website' className='button one'>View Code</a>
                            {/* <button type='button' className='button two'>View Demo</button> */}
                        </div>
                    </Card>
                    <h1>More Coming Soon!</h1>
                </div>
        </>
    )
}