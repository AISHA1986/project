import Catlinks from "./CatLinks"
import SocialIcons from "./SocialIcons"
import PageLinks from "./PageLinks"
import Link from "next/link"
import Category from "../category/page"


export default function Footer() {
  return (
    <footer className="h-[60vh] bg-slate-900 text-white flex gap-20 mt-6 pt-10 ">

    <div className=" capitalize ml-10">
        <p className=" text-2xl flex" > AISHA
  </p>
        
        <p> welcome to the home of AISHA where<br/>
         your comfort is our desire
        </p>
        <SocialIcons />
    </div> 

  <div>
     <h2 className="ml-5 text-lg ">Categories</h2>
     <div className="m-4">
      <Catlinks title="Food" bg="bg-pink-700" link='/Food'/><br/>
      <Catlinks title="Entertainment" bg="bg-yellow-700" link='/entertaiment'/><br/>
      <Catlinks title="Home and Decor" bg="bg-blue-700" link='/home-and-decor'/>
      <Catlinks title="Education" bg="bg-red-700" link='/education'/><br/>
      <Catlinks title="Travel" bg="bg-yellow-700" link='/travel'/>
      <Catlinks title="Technology" bg="bg-blue-700" link='/tech'/><br/>
      <Catlinks title="Fashion" bg="bg-red-700" link='/fashion'/>
     </div>
    
  </div>

   <div className="inline-block">
      <h2 className="text-2xl"> Pages </h2>

      <div className="flex items-start gap-10 ">
         <ol>
            <PageLinks title='Home' link='/'/>
            <PageLinks title='Blog' link='/'/>
            <PageLinks title='Author' link='/'/>
            <PageLinks title='About us'link='/'/>
            <PageLinks title='Subscribe'link='/'/>
            <PageLinks title='Privacy Policy'/>

           </ol>

           <ol>
           <PageLinks title='Style Guide'/>
           <PageLinks title='Instructions'/>
           <PageLinks title='Licenses'/>
           <PageLinks title='Changelog'/>
           <PageLinks title='Coming Soon'/>
           <PageLinks title='Link In Bio'/>
           <PageLinks title='Password Protected'/>
           


      

           </ol>
      </div>


   </div>

   </footer>
)

}