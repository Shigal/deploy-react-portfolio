import foodOrderWebImg from '../assets/website1.jpg'
import bookArchiveImg from '../assets/bookarc.jpg'
import lmsImg from '../assets/lms.png'
import shopImg from '../assets/shop.jpg'
import imsImg from '../assets/ims.jpg'
import rideImg from '../assets/ride.jpeg'

export default function Projects() {
    const config = {
        projects : [
            {
                image: foodOrderWebImg,
                description: 'Online Food Delivery System developed with spring boot, Hibernate, ReactJS and Kafka',
                link: 'https://github.com/Shigal/online-food-delivery-rider-app'
            },
            {
                image: bookArchiveImg,
                description: 'Books Archive system developed with spring boot',
                link: 'https://github.com/Shigal/Books-Archive'
            },
            {
                image: lmsImg,
                description: 'Library Management System developed with PHP, JavaScript, MySQL, Bootstrap',
                link: 'https://github.com/Shigal/Library-Management-System'
            },
            {
                image: shopImg,
                description: 'Shopping Cart System developed with Spring Boot',
                link: 'https://github.com/Shigal/Shopping-Cart'
            },
            {
                image: imsImg,
                description: 'Inventory Management System developed with PHP, JavaScript, MySQL, Bootstrap',
                link: 'https://github.com/Shigal/Inventory-Management-System'
            },
            {
                image: rideImg,
                description: 'Ride Hailing App for Three-wheelers, an android application',
                link: 'https://github.com/Lawshiga/Ride-Hailing-App'
            }
        ]
    }

    return <section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col py-5 px-10">
                <h1 className="text-4xl border-b-4 border-primary  mb-5 w-[150px] font-bold">Projects</h1>
            <p>
                Below are some of the projects I’ve worked on, each reflecting my approach to problem-solving and software development.
            </p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                    <img className='h-[230px] w-[240px]' src={project.image} />
                    <div className='project-desc'>
                        <p className='text-center py-5 px-5'>
                            {project.description}
                        </p>
                    <div className='flex justify-center'>
                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
}