import ContentImg from '../assets/about.png'
import { AiOutlineLinkedin, AiOutlineMedium, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subTitle: 'I\'m a Full-stack developer',
        social : {
            linkedIn: 'https://www.linkedin.com/in/lawshiga-thurairajasingam-a00308156/',
            medium: 'https://medium.com/@lawshiga11uoj',
            gitHub: 'https://github.com/Shigal'
        }
    }

    return <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-black text-6xl font-hero-font'>Hi, <br/> I'm Lawshiga Thurairajasingam
                <p className='text-2xl'>{config.subTitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedIn} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.medium} className='pr-5 hover:text-white'><AiOutlineMedium size={40}/></a>
                <a href={config.social.gitHub} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={ContentImg}/>
    </section>
}