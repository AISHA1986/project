import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>Food</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>unleash the graet tast <br /> food</h1>
        </div>
        <div>
            <Image src='/cake.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>Up-coming food bloggers, you need to watch </h2>
            <p>Chocolate foods hold a special place in culinary culture, captivating taste buds with their rich, indulgent flavors and versatility in both sweet and savory dishes. From decadent desserts to savory entrees and snacks, chocolate lends its unique taste and texture to a wide array of culinary creations, delighting chocolate enthusiasts of all ages around the world</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span> The importance of chocolate food</li>
                <li><span className='font-bold'>.</span> Pleasure and Indulgence: Chocolate foods are synonymous with pleasure and indulgence, offering a sensory experience that tantalizes the taste buds and uplifts the mood.</li>
                <li><span className='font-bold'>.</span> Nutritional Benefits: While often associated with indulgence, chocolate foods also offer nutritional benefits when consumed in moderation</li>
                <li><span className='font-bold'>.</span>Cultural and Social Significance: Chocolate foods hold cultural and social significance in societies around the world, playing integral roles in traditions, celebrations, and social gatherings</li>
            </ol>
            <p className='mt-16'>At the heart of chocolate cuisine are the beloved desserts that have become iconic symbols of indulgence and luxury. From classic favorites like chocolate cake, brownies, and chocolate chip cookies to more elaborate treats such as chocolate mousse, truffles, and lava cakes, there's no shortage of delectable options to satisfy a sweet tooth. Whether enjoyed as a comforting homemade treat or savored at a high-end patisserie, chocolate desserts offer a symphony of flavors and textures that tantalize the senses and evoke feelings of blissful indulgence.</p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>


        <iframe width="1100" height="600" src="https://www.youtube.com/embed/vI5w-fK25w4?si=3nLb7NIj38tRnmaH&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </div>
        <div className='mt-20'>
            <h2 className='font-bold'> signs you need to get a chocolate food</h2>
            <p className='mt-4'>Beyond desserts, chocolate also lends its distinctive flavor to a variety of savory dishes, adding depth and richness to savory-sweet flavor profiles. Mole poblano, a traditional Mexican sauce made with chocolate, chili peppers, and spices, is a prime example of how chocolate can elevate savory dishes to new heights of culinary sophistication. Similarly, cocoa powder and dark chocolate are often used in marinades, sauces, and rubs for meats such as beef, pork, and poultry, imparting a subtle sweetness and complexity to savory dishes</p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>Chocolate also finds its way into a myriad of snacks and confections, offering irresistible treats for moments of indulgence or celebration. From chocolate-covered fruits and nuts to gourmet chocolate bars and artisanal chocolates, there's a world of delicious options to explore for chocolate lovers with discerning palates. Additionally, chocolate is a versatile ingredient in breakfast and brunch dishes, with chocolate pancakes, waffles, and French toast making appearances on menus at cafes and restaurants worldwide.</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>Chocolate also finds its way into a myriad of snacks and confections, offering irresistible treats for moments of indulgence or celebration. From chocolate-covered fruits and nuts to gourmet chocolate bars and artisanal chocolates, there's a world of delicious options to explore for chocolate lovers with discerning palates. Additionally, chocolate is a versatile ingredient in breakfast and brunch dishes, with chocolate pancakes, waffles, and French toast making appearances on menus at cafes and restaurants worldwide.</p>
        </div>
</div>
)
}