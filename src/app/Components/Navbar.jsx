import Link from "next/link";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";
import Image from "next/image";




export default function Navbar() {
  return (
    
    <nav className=" bg-blue-50 text-black h-[10vh] flex justify-between text-3xl capitalize m-1 p-2">
        
        <div className="flex items-center gap-2" >
            <Image src="/A&G.png" width="50" height="50"/>
        
            <p>AISHA</p>
        </div>
        <ul className="flex items-center gap-x-5 ">
            <li className=" hover:text-black-300 hover:underline"><Link href='/'>Home</Link></li>
            <li className=" hover:text-black-500 hover:underline"><Link href='/category'>blog</Link></li>
            <li className=" hover:text-black-500 hover:underline"><Link href='/about'>about</Link></li>
        </ul>
        
        <SocialIcons />

        <div className="flex items-center">
        <Buttons /> 
        </div>
        
</nav>
)
}