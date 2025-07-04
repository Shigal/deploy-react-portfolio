import AboutImg from '../assets/resume.png'

export default function Resume(){
    const config = {
        link: ''
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary'>
        <div className='md:w-1/2 px-5 flex justify-center'>
            <img className='w-[300px]' src={AboutImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white p-4'>
            <h1 className='text-4xl border-b-4 border-primary  mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>
                You can view my resume <a className='btn' href={config.link}>Download</a>
            </p>
        </div>
        </div>
    </section>
}