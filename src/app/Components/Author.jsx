import Image from "next/image"
import { items } from "../category/page"
import Link from "next/link"


export default function Author() {

    const uniqueAuthors = [...new Set(items.map(item => item.author))]

    const authorCat = uniqueAuthors.map((item,index) => (
        <section key={index}>
          <Link href={`/author/${item.split(' ').join('-')}`}>
            <Image src={`/${item.split(' ').join('-')}.jpg`} alt={item} width='400' height='400'/>
            <h2>{item}</h2>
          </Link>
        </section>
    ))
    
  return (
    <div className="w-4/5 grid grid-cols-3 gap-2 m-auto my-5">
        
    {authorCat}
</div>
  )
}
