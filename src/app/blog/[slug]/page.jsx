import { items } from "@/app/category/page"
import Image from "next/image"
import styles from './blog.module.css'

export default function BlogSlug({params}) {
    const filteredCat = items.filter(item => item.title.split(' ').join('-') == params.slug)
    
  return (
    <div className={`${styles.blog} w-4/5 m-auto my-5 flex flex-col gap-4`}>
    
    <div>
      <h3>{filteredCat[0].category}</h3>
      <h2>{filteredCat[0].title}</h2>
    </div>

    <div className="flex items-start gap-4">
    <Image src={`/${filteredCat[0].author.split(' ').join('-')}.jpg`} alt={filteredCat[0].title} width='100' height='100'/>

    <div>
      <h3>{filteredCat[0].author}</h3>
      <p>{filteredCat[0].authorDesignation}</p>
    </div>

    </div>

    <div>
    <Image src={`/id${filteredCat[0].id}.jpg`} alt={filteredCat[0].title} width='1000' height='400' className="w-[1000px] h-[600px]"/>
    </div>

    <div>
      {filteredCat[0].descriptions1.map(para => (
        <p>{para}</p>
      ))}
    </div>

    <div>
      {filteredCat[0].descriptions2.map(para => (
        <p>{para}</p>
      ))}
    </div>

    <div>
      {filteredCat[0].descriptions3.map(para => (
        <p>{para}</p>
      ))}
    </div>

    <div>
    <iframe width="1100" height="600" src={filteredCat[0].src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        
    </div>

    <div>
      {filteredCat[0].descriptions4.map(para => (
        <p>{para}</p>
      ))}
    </div>
</div>
  )
}