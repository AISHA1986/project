import { items } from "../page"


export default function Author({params}) {
    const filteredCat = items.filter(item => item.title.split(' ').join('-') == params.slug)
    
  return (
    <div className="w-4/5 m-auto my-5">
    {filteredCat.map(item =>(
      <div key={item.id}>

        <section className={`text-black bg-cover h-[700px]`} style={{backgroundImage: `url(/id${item.id}.jpg)`}}>
        </section>
            <h2 className=" text-2xl ">{item.title}</h2>

            {item.author.map(desc => (
              <div className=" text-2xl ">
                <p>{desc}</p>
              </div>
            ))}


      </div>
    ))}
    
</div>
  )
}
