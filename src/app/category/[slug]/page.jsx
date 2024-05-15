import { items } from "../page"
import Link from "next/link"

export default function CategorySlug({params}) {
    const filteredCat = items.filter(item => item.category == params.slug)
    
  return (
    <div className="grid grid-cols-3 gap-4">
    {filteredCat.map(item =>(
      
      <Link key={item.id} href={`/blog/${item.title.split(' ').join('-')}`} title={item.title}>
      <section  className={`p-4 text-black bg-cover h-[300px] mt-11`} style={{backgroundImage: `url(/id${item.id}.jpg)`}}>
          <h2 className='p-4 bg-orange-700 w-4/5 text-gray-300 capitalize'>{item.title}</h2>
      </section>
    </Link>


))}
</div>
    

  )
}