import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>entertainment</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>activity that holds attention and interest of audience <br /> entertainment</h1>
        </div>
        <div>
            <Image src='/entertaiment1.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>Up-coming entertaiment bloggers, you need to watch </h2>
            <p>Entertainment serves as a vital component of human life, offering avenues for relaxation, escapism, and cultural enrichment. From the earliest forms of storytelling around campfires to the modern-day spectacles of cinema and virtual reality, entertainment has evolved alongside human civilization, reflecting societal values, aspirations, and creativity. Whether through literature, music, theater, film, television, or digital media, entertainment provides individuals with opportunities to engage their senses, emotions, and imaginations, fostering personal growth, social bonding, and shared experiences.</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span> importance of entertaiment</li>
                <li><span className='font-bold'>.</span> Emotional Well-being: Entertainment serves as a source of joy, relaxation, and emotional fulfillment, contributing to individuals' overall well-being and mental health..</li>
                <li><span className='font-bold'>.</span> Social Connection: Entertainment facilitates social bonding and community engagement, fostering connections and relationships among individuals</li>
                <li><span className='font-bold'>.</span> Cultural Enrichment: Entertainment plays a vital role in preserving and transmitting cultural heritage, traditions, and values across generations</li>
            </ol>
            <p className='mt-16'>One of the primary functions of entertainment is to provide escapism, allowing individuals to temporarily suspend reality and immerse themselves in alternate worlds, narratives, and experiences. Through books, films, video games, and other forms of media, people can explore fantastical realms, embark on epic adventures, and vicariously experience lives and cultures different from their own. Escapist entertainment offers a respite from the stresses and challenges of everyday life, providing moments of relaxation, inspiration, and wonder that rejuvenate the spirit and nourish the soul.</p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>

        <iframe width="1100" height="600" src="https://www.youtube.com/embed/xA_89C_ZFG4?si=iooFSejOS3gieIoS&amp;start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        {/* <iframe width="1100" height="600" src="https://www.youtube.com/embed/UmzCWRylL8M?si=8CZy78cfChzwcL1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
        <div className='mt-20'>
            <h2 className='font-bold'> signs you need to get an entertainer</h2>
            <p className='mt-4'>Entertainment also serves as a powerful medium for cultural expression and storytelling, preserving traditions, histories, and identities across generations. Through music, dance, theater, and visual arts, cultures around the world share their unique perspectives, values, and narratives, fostering understanding, empathy, and appreciation for diverse cultural heritage. Whether through folk songs, religious ceremonies, or contemporary performances, entertainment reflects the collective experiences and aspirations of communities, bridging cultural divides and fostering dialogue and mutual respec</p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>Furthermore, entertainment plays a central role in social bonding and community cohesion, bringing people together to share laughter, tears, and moments of joy. From family movie nights and concerts to sporting events and festivals, entertainment provides opportunities for individuals to connect with friends, family, and strangers alike, forging bonds of friendship, camaraderie, and solidarity. Shared experiences of entertainment create lasting memories and strengthen social ties, fostering a sense of belonging and interconnectedness in an increasingly fragmented world.</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>Moreover, entertainment has the power to inspire, educate, and provoke thought, challenging societal norms, sparking conversations, and fostering critical thinking and empathy. Whether through thought-provoking films, provocative art installations, or immersive storytelling experiences, entertainment can stimulate reflection, dialogue, and social change, addressing pressing issues such as inequality, injustice, and environmental sustainability. By amplifying diverse voices and perspectives, entertainment has the potential to catalyze positive social transformation and inspire individuals to envision a more equitable and harmonious world.</p>
        </div>
</div>
)
}