import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>tech</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>Exploration of the latest developments in artificial intelligence <br /> tech</h1>
        </div>
        <div>
            <Image src='/pcs5.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>Up-coming tech bloggers, you need to watch </h2>
            <p>
The technology of computers is a vast field that encompasses hardware, software, and the interaction between them. Here is a brief overview.
Hardware: This includes all the physical components of a computer system. Key components include:
Central Processing Unit (CPU): The brain of the computer, responsible for executing instructions.
Memory (RAM): Provides temporary storage for data and instructions that the CPU needs while processing.
Storage: Devices like hard disk drives (HDDs), solid-state drives (SSDs), and flash drives store data permanently.
Motherboard: The main circuit board that connects all the components together.
Input and Output Devices: Such as keyboards, mice, monitors,</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span>Early Mechanical Computers:
The concept of mechanical computing dates back to ancient times, with devices like the abacus used for arithmetic calculations.
In the 17th century, Blaise Pascal invented the Pascaline, a mechanical calculator capable of addition and subtraction.
In the 19th century, Charles Babbage conceptualized the Analytical Engine, a mechanical general-purpose computer. Although never fully built during his lifetime, it laid the groundwork for modern computing. </li>
                <li><span className='font-bold'>.</span>First Electronic Computers:
The 20th century saw the emergence of electronic computers. In the 1940s, during World War II:
The ENIAC (Electronic Numerical Integrator and Computer), completed in 1945, was one of the earliest electronic general-purpose computers.
Shortly after, in 1948, the Manchester Baby, built at the University of Manchester, became the first stored-program computer, capable of executing instructions from memory .</li>
                <li><span className='font-bold'>.</span>Transistors and Integrated Circuits:
The invention of the transistor in 1947 revolutionized computing by replacing bulky vacuum tubes with smaller, more reliable components.
Integrated circuits, developed in the late 1950s and 1960s, further miniaturized electronic components, leading to the development of smaller, more powerful computers .</li>
                <li><span className='font-bold'>.</span>
Mainframes and Minicomputers:
In the 1950s and 1960s, mainframe computers dominated the computing landscape. These large, centralized systems were used by businesses, government agencies, and academic institutions for data processing and scientific calculations.
Minicomputers, introduced in the 1960s, were smaller and more affordable than mainframes, making them accessible to a broader range of organizations </li>
            </ol>
            <p className='mt-16'>
Networking and the Internet:
The ARPANET, developed by the U.S. Department of Defense in the late 1960s, laid the foundation for the modern Internet.
In the 1990s, the World Wide Web, created by Tim Berners-Lee, revolutionized communication and information sharing, ushering in the era of the internet as we know it today.
Mobile and Wearable Computing:
The 21st century witnessed the rise of mobile computing, with the proliferation of smartphones and tablets enabling users to access information and services on the go.
Recent years have also seen the emergence of wearable devices, such as smartwatches and fitness trackers, that integrate computing technology into everyday items.
The history of computers is a testament to human ingenuity and innovation, with each milestone building upon the achievements of the past to push the boundaries of what is possible in computing technology</p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>
        <iframe width="1100" height="600" src="https://www.youtube.com/embed/eo7Ko0E3N1k?si=ma8LLqD6aNpnVnrC&amp;start=65" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        {/* <iframe width="1100" height="600" src="https://www.youtube.com/embed/UmzCWRylL8M?si=8CZy78cfChzwcL1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
        <div className='mt-20'>
            <h2 className='font-bold'>10 tell-tale signs you need to get a new tech</h2>
            <p className='mt-4'>Certainly! Lets delve deeper into various aspects of computer technology:

Processor Architecture:
Central Processing Units (CPUs) are the heart of computer systems, executing instructions and performing calculations.
CPUs are designed with various architectures, such as x86, ARM, and RISC-V, each optimized for specific applications and performance requirements.
Memory and Storage:
Random Access Memory (RAM) provides temporary storage for data and instructions that the CPU needs while processing.
Storage devices like Hard Disk Drives (HDDs), Solid-State Drives (SSDs), and Flash Drives offer long-term storage for programs and data.
Emerging storage technologies, such as 3D XPoint and MRAM, promise faster access times and higher capacities compared to traditional storage media.
Graphics Processing Units (GPUs):
GPUs are specialized processors designed to handle graphics and parallel processing tasks.
Initially used primarily for rendering graphics in video games and visual applications, GPUs are now also employed in scientific computing, artificial intelligence, and machine learning due to their parallel computing capabilities.</p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>Computer technology continues to evolve rapidly, driven by research and development efforts to improve performance, efficiency, and functionality. The interplay of hardware, software, and networking technologies drives innovation and enables new possibilities in computing</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>
Virtualization and Cloud Computing:
Virtualization technology allows multiple virtual machines (VMs) to run simultaneously on a single physical machine, enabling efficient resource utilization and workload isolation.
Cloud computing platforms provide on-demand access to computing resources, such as processing power, storage, and applications, over the internet, offering scalability and flexibility to businesses and users.
Security and Privacy:
Computer security measures protect against unauthorized access, data breaches, malware, and other cyber threats.
Techniques like encryption, authentication, access control, and intrusion detection help safeguard computers and data from security breaches and privacy violations.
Emerging Technologies:
Advances in areas like artificial intelligence (AI), machine learning, quantum computing, blockchain, and edge computing are driving innovation and shaping the future of computer technology.
These technologies offer new opportunities for automation, optimization, and intelligence across various industries and applications.</p>
        </div>
</div>
)
}