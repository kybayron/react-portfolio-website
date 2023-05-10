import ClickableCard from "../../components/ClickableCard";
import SectionTitle from "../../components/SectionTitle";
import linkedinLogo from '../../assets/linkedin_logo.png'
import githubLogo from '../../assets/github_logo.png'

export default function SocialsSection () {
    return (
        <>
            <SectionTitle text='Socials'/>
                <div className='socials-container'>
                    <ClickableCard imageSrc={linkedinLogo} url="https://www.linkedin.com/in/karl-edward-bayron/" label="LinkedIn"/>
                    <ClickableCard imageSrc={githubLogo} url="https://github.com/kybayron" label="GitHub"/>
                </div>
        </>
    )
}