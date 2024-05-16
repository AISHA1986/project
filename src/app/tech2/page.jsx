import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>travel</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>Exploring the vibrant world <br /> tech</h1>
        </div>
        <div>
            <Image src='/tech2.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>Up-coming tech bloggers, you need to watch </h2>
            <p>Modern technology encompasses a vast array of advancements across various fields, shaping how we live, work, communicate, and interact with the world. Here is an overview of some key areas of modern technology</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span> Artificial Intelligence (AI):
AI involves the development of computer systems that can perform tasks that typically require human intelligence, such as speech recognition, natural language processing, visual perception, and decision-making.
Machine learning, a subset of AI, enables computers to learn from data and improve performance over time without explicit programming</li>
                <li><span className='font-bold'>.</span> Internet of Things (IoT):
IoT refers to the network of interconnected devices embedded with sensors, software, and connectivity, enabling them to collect and exchange data.
IoT applications span various domains, including smart homes, wearable devices, industrial automation, healthcare monitoring, and environmental monitoring</li>
                <li><span className='font-bold'>.</span> 5G Technology:
5G is the fifth generation of wireless technology for cellular networks, offering significantly faster data speeds, lower latency, and increased capacity compared to previous generations.
5G technology enables new applications such as augmented reality (AR), virtual reality (VR), autonomous vehicles, and the Internet of Things.</li>
                <li><span className='font-bold'>.</span> distracted by the readable content of a page when looking at its layout</li>
            </ol>
            <p className='mt-16'>Blockchain Technology:
Blockchain is a decentralized and distributed ledger technology that records transactions across multiple computers in a secure and transparent manner.
Blockchain technology underpins cryptocurrencies like Bitcoin and Ethereum, as well as applications in supply chain management, finance, healthcare, and voting systems.
Biotechnology:
Biotechnology involves the use of biological systems, organisms, or derivatives to develop products and technologies for various applications.
Advances in biotechnology have led to breakthroughs in areas such as gene editing, personalized medicine, synthetic biology, and agricultural biotechnology.
Quantum Computing:
Quantum computing harnesses the principles of quantum mechanics to perform computations using quantum bits (qubits).</p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>
        <iframe width="1100" height="600" src="https://www.youtube.com/embed/OtRrVrHx7Do?si=RsfNC5A7SrRtk8zy&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        
        </div>
        <div className='mt-20'>
            <h2 className='font-bold'>10 tell-tale signs you need to get a new tech</h2>
            <p className='mt-4'>Technology has become deeply intertwined with every aspect of human society, bringing about numerous benefits across various domains. Here are some ways in which technology benefits human society</p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>Overall, technology has the potential to significantly improve the quality of life, address societal challenges, and create a more equitable and sustainable future for humanity. However, itis essential to consider ethical, social, and environmental implications and ensure that technology is used responsibly and for the benefit of all.</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>Environmental Sustainability:
Clean technologies, renewable energy sources, and eco-friendly innovations help mitigate environmental impact and promote sustainability.
Smart energy grids, energy-efficient buildings, and electric vehicles reduce carbon emissions, conserve resources, and contribute to a greener future.
Economic Growth and Innovation:
Technological innovations drive economic growth, create new industries, and stimulate job creation.
Entrepreneurship, startups, and venture capital investments fuel innovation ecosystems, driving forward progress and competitiveness in the global economy.
Social Empowerment and Inclusion:
Technology can empower marginalized communities, promote social inclusion, and amplify diverse voices.
Accessible technologies, assistive devices, and inclusive design practices ensure equal participation and opportunities for people with disabilities.
Crisis Response and Resilience:
During emergencies, natural disasters, and crises, technology plays a crucial role in disaster preparedness, response, and recovery efforts.
Emergency communication systems, GIS mapping tools, and social media platforms facilitate coordination, resource allocation, and community resilience.</p>
        </div>
</div>
)
}
