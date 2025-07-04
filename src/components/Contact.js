export default function Contact(){
    const config = {
        email: 'lawshiga11uoj@gmail.com',
        phone: '+94771961724'
    }

    return <section id='contact' className='flex flex-col px-5 py-32 bg-primary'>
        <div className='flex flex-col items-center text-black'>
            <h1 className='text-4xl border-b-4  border-primary  mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>
                I'm open to new opportunities, collaborations, or any inquiries related to software development. Feel free to reach out through the links below:
            </p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}