import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>home-and-decor</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>Exploring the vibrant world <br /> homes</h1>
        </div>
        <div>
            <Image src='/home1.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>Up-coming home bloggers, you need to watch </h2>
            <p>Interior decor plays a pivotal role in shaping the ambiance and functionality of living spaces, reflecting the personal tastes and lifestyle preferences of occupants. From minimalist and contemporary to rustic and eclectic, the myriad styles of interior design offer endless possibilities for creating environments that are both aesthetically pleasing and conducive to comfort and well-being. Key elements such as color schemes, furniture selection, lighting, and accessorizing contribute to the overall harmony and visual appeal of a room, transforming it into a sanctuary that exudes warmth and personality.</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span> some importance of home decor .</li>
                <li><span className='font-bold'>.</span> Personal Expression: Home decor allows individuals to express their personalities, tastes, and interests.</li>
                <li><span className='font-bold'>.</span> Comfort and Well-being: A well-designed home promotes comfort and enhances overall well-being.</li>
                <li><span className='font-bold'>.</span> Social Connection: Home decor plays a pivotal role in facilitating social connection and fostering meaningful relationships.</li>
            </ol>
            <p className='mt-16'>Color psychology plays a significant role in interior decor, as different hues evoke distinct emotions and moods. For instance, serene shades of blue and green are often employed in bedrooms and living areas to promote relaxation and tranquility, while vibrant tones like red and yellow inject energy and vitality into spaces such as kitchens and dining rooms. The strategic use of color can also visually alter the perception of room size and shape, making small spaces appear larger or creating intimate atmospheres in expansive areas.</p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>
        
         <iframe width="1100" height="600" src="https://www.youtube.com/embed/hRpxiDCZj8E?si=OzBbe5721pf3WNz4&amp;start=29" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

         
        </div>
        <div className='mt-20'>
            <h2 className='font-bold'> signs you need to get an interior decor</h2>
            <p className='mt-4'>Furniture selection is a fundamental aspect of interior decor, encompassing not only aesthetics but also functionality and comfort. From sofas and chairs to tables and storage units, each piece of furniture should be chosen with careful consideration of the room's layout and intended use. Modular and multifunctional furniture solutions are particularly popular in modern interior design, offering versatility and space-saving benefits for compact living spaces. Additionally, the materials and finishes of furniture pieces contribute to the overall style and ambiance of a room, whether it be the warmth of natural wood or the sleekness of metal and glass</p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>Lighting design is an essential component of interior decor, as it influences the atmosphere and functionality of a space while accentuating architectural features and decor elements. Natural light is prized for its ability to create a sense of openness and connection to the outdoors, while artificial lighting fixtures such as chandeliers, pendants, and sconces serve both practical and decorative purposes. Task lighting, ambient lighting, and accent lighting are carefully layered to provide illumination where needed while adding depth and dimension to the overall design scheme.</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>Accessorizing is the final touch in interior decor, allowing homeowners to inject their personality and style into their living spaces through decorative objects, artwork, textiles, and plants. Accessories serve as the finishing touches that tie together the various elements of a room, adding visual interest and character. From statement-making art pieces to cozy throw pillows and rugs, accessories can be easily swapped out to refresh the look of a space and adapt to changing tastes and seasons. Ultimately, interior decor is a creative expression of individuality and lifestyle, transforming houses into homes that reflect the unique identities and stories of their inhabitants.</p>
        </div>
</div>
)
}