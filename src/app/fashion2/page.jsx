import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>fashion</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>Fashion Trends- Past, Present, and Future <br /> fashion</h1>
        </div>
        <div>
            <Image src='/makeup.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>Up-coming fashion bloggers, you need to watch </h2>
            <p>Fashion serves as a dynamic and multifaceted cultural phenomenon, encompassing clothing, accessories, hairstyles, and personal grooming practices that reflect individual identity, societal values, and historical trends. From haute couture runways to street style fashion, the world of fashion is a vibrant tapestry of creativity, innovation, and self-expression that shapes and reflects the ever-evolving landscape of human culture and society</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span> The importance of fashion</li>
                <li><span className='font-bold'>.</span>Self-Expression and Identity: Fashion provides individuals with a means of expressing their identities, personalities, and beliefs through clothing, accessories, and personal style choices.</li>
                <li><span className='font-bold'>.</span> Cultural Expression and Heritage: Fashion serves as a reflection of cultural diversity and heritage, preserving and transmitting traditions, customs, and aesthetics across generations.</li>
                <li><span className='font-bold'>Economic and Creative Industries: Fashion is a driving force behind economic growth and innovation, encompassing a vast industry that spans design, manufacturing, retail, and marketing.</span> </li>
            </ol>
            <p className='mt-16'>At its core, fashion is a form of self-expression and personal identity, allowing individuals to communicate their personalities, beliefs, and aspirations through the clothing they wear and the styles they adopt. Whether dressing for a special occasion, expressing cultural heritage, or making a statement of individuality, fashion offers a means of articulating ones identity and asserting agency over ones appearance and presentation to the world.</p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>
        <iframe width="1100" height="600" src="https://www.youtube.com/embed/SrvQBD6kfRU?si=2AUUZkrFXzgB00Wo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

       
        </div>
        <div className='mt-20'>
            <h2 className='font-bold'> signs you need to get a fashion designer</h2>
            <p className='mt-4'>Moreover, fashion serves as a powerful vehicle for cultural expression and storytelling, reflecting the values, traditions, and aesthetics of diverse communities around the world. Through clothing, textiles, and adornments, different cultures communicate their histories, beliefs, and social hierarchies, preserving and transmitting cultural heritage across generations. From traditional garments worn in ceremonial rituals to contemporary fashion trends inspired by global fusion and cross-cultural exchange, fashion reflects the dynamic interplay between tradition and modernity, local and global influences</p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>Fashion also plays a significant role in shaping social norms and perceptions, influencing how individuals are perceived and treated based on their appearance and attire. Clothing choices can convey social status, professional identity, and group affiliations, signaling belongingness to specific subcultures, communities, or social movements. Additionally, fashion trends and beauty standards perpetuated by the media and fashion industry can impact individuals self-esteem, body image, and sense of belonging, contributing to broader discussions about representation, diversity, and inclusivity in the fashion world.</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>Furthermore, fashion serves as a driver of economic growth and innovation, encompassing a vast industry that spans design, manufacturing, retail, and marketing. Fashion designers and brands continually push the boundaries of creativity and craftsmanship, introducing new styles, materials, and technologies that shape the way people dress and consume fashion. From luxury fashion houses producing couture collections to fast-fashion retailers offering affordable, on-trend clothing, the fashion industry caters to a diverse range of tastes, preferences, and budgets, driving consumer demand and fueling global commerce.</p>
           
            
        </div>
</div>
)
}