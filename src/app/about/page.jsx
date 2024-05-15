import Image from 'next/image'
import React from 'react'
import Author from '../Components/Author'
export default function page() {
  return (
    <section>
        <div className='flex items-start px-8 py-10 gap-4'>
            <div className='flex flex-col gap-y-4'>
            <h1 className='capitalize text-3xl font-bold '>about</h1>
            <p>Welcome to Blaze Pop! We are a passionate team dedicated to bringing you the latest <br />
            and most insightful content in the world of Flexography. Our mission <br />
            is to provide our readers with a one-stop destination for all things  from AISHA informative articles to in-depth <br />
             analyses and engaging discussions.</p>

            <div className='flex gap-5'>
                    <div className='h-[90px] w-[90px] border-2 border-red-200 text-center justify-center flex flex-col  '>
                        <span >5Ok</span>
                        <span>Total blogs</span>
                    </div>
                    <div className='h-[90px] w-[90px] border-2 border-yellow-300 text-center justify-center flex flex-col  '>
                        <span >7</span>
                        <span>Skilled Author</span>
                    </div>
                    <div className='h-[90px] w-[90px] border-2 border-red-800 text-center justify-center flex flex-col  '>
                        <span >15k+</span>
                        <span>Genuine user</span>
                    </div>

            </div>
           
            </div>
            <Image src='/family.jpg' alt='a man' width='550' height='200'/> 
        </div>
        <div className=''>
            <h2 className='font-bold text-2xl text-center py-9'>Our Story</h2>
            <p>Our journey into the world of pop culture is deeply rooted in our unwavering passion for Flexography. Founded by a group of dedicated individuals who share a common love for Flexo, our story is one of collective vision and perseverance. Inspired by the profound impact that Flexography has on individuals and communities, we set out to create a platform that not only celebrates the beauty and intricacies of Flexo, but also fosters a sense of belonging and connection among enthusiasts worldwide.</p>
        </div>
        <div className='flex py-9 gap-4 items-center justify-center'>
            <p className='bg-green-500'>Community Support</p>
            <p className='bg-purple-500'>Simple and Affordable</p>
            <p className='bg-red-300'>Standard in Industry Knowledge</p>
        </div>

        <section>
            <Author/>
        </section>

        
</section>
  )
}
