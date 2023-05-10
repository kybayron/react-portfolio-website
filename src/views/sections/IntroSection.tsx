import selfImage from '../../assets/self_photo.jpg'

export default function IntroSection () {
    return (
        <div className='intro-container'>
                    <div className='img-self-container'>
                        <img className='img-self' src={ selfImage } alt='self'/>
                    </div>
                    <div className='intro-text-container'>
                        <h1 className='intro-title'> Hi I&apos;m Karl!</h1>
                        <p className='intro-body'>As a software engineer, I am passionate about writing clean, readable, and testable code. With extensive experience in NodeJS, Typescript, React, Redux, and AWS Services, I am well-equipped to tackle even the most complex software development projects.</p>
                        <p className='intro-body'>Currently a Software Engineer at <a href='https://www.maya.ph/'>Maya Philippines, Inc.</a></p>
                    </div>
                </div>
    )
}