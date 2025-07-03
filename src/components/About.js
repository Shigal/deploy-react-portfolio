import AboutImg from '../assets/contact.png'

export default function About(){

    const config = {
        line1: 'I\'m a passionate and detail-oriented full-stack developer. I specialize in creating end-to-end solutions using Spring Boot for backend development and Angular for modern, responsive frontend interfaces. With a strong understanding of RESTful APIs, microservices architecture, and clean code practices, I enjoy turning complex problems into elegant and efficient solutions. Whether it\'s designing backend systems, crafting user-friendly interfaces, or ensuring smooth integration between components, I aim to deliver high-quality, maintainable software. ',
        line2: 'I\’m comfortable working in agile environments, collaborating with cross-functional teams, and continuously learning new tools and technologies to improve both the product and the development process.'
    }

    return <section id='about' className='flex flex-col md:flex-row bg-secondary'>
        <div className='md:w-1/2 px-5'>
            <img src={AboutImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white p-4'>
            <h1 className='text-4xl border-b-4 border-primary  mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>
                {config.line1}
            </p>
            <p>
                {config.line2}
            </p>
        </div>
        </div>
    </section>
}