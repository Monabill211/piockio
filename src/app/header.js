"use client";
import { useState   } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonBrgr from "../app/buottonbargrmune"
import SidebarMenu from "./barger";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import Link from "next/link";
     import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
const [open, setOpen] = useState(false);

 
  return (
    <>
      <span className="hidden md:inline">
        <header className="w-full border-b border-gray-200">
          {/* الجزء العلوي */}
          <div
            className="flex justify-between items-center px-15 py-3 bg-black p-2.5"
            style={{ padding: "10px" }}
          >
            {/* اللوجو */}
            <Link href="/">
            <div
              className="text-4xl font-bold  text-white pl-2 cursor-pointer "
              style={{ paddingLeft: "30px" }}
            >
              Pic<span className="text-red-500">k</span>io
            </div></Link>

            {/* الأيقونات */}
            <div
              className="flex items-center gap-4 text-white font-bold fonr-3x1"
              style={{ paddingRight: "40px" }}
            >
              <SearchIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" />
              <LanguageIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" />
              
              <FavoriteIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" />
              <Link href="/cart">
              <ShoppingCartIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" /></Link>
            </div>
          </div>

          {/* الجزء السفلي */}
          <nav
            className="flex items-center gap-6 px-6 py-2 bg-white  font-medium relative justify-center"
            style={{ padding: "10px" }}
          >
            <Link href="/">  <button
        
              className="hover:text-black font-bold text-2xl cursor-pointer"
            >
              الرئسية
            </button>
            </Link>
          
          <Link href="/protfilo">          <button
           
              className="hover:text-black font-bold text-2xl cursor-pointer
"
            >
              المشاريع
            </button>
          </Link>
 < span className="hidden md:inline">
      <div className="relative">

        {/* زرار فتح المنيو */}
        <button
          onClick={() => setOpen(!open)}
          className="hover:text-black flex items-center gap-2 text-2xl font-bold cursor-pointer"
        >
          المنتجات
          <span className="text-xs">▼</span>
        </button>

        {/* الـ Overlay — يقفل لما تدوس برا */}
        {open && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* المنيو */}
        <div
          className={`
            fixed left-[5%] top-[80px] w-[90%] h-[40vh]
            bg-white shadow-lg rounded-lg p-6 z-50
            transition-all duration-500
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <div className="grid grid-cols-4 gap-6">
            <Link href="/meeting">
        
            <button className="block hover:bg-gray-100 rounded-md p-4 text-lg font-medium">
               طربيزات اجتماعات
            </button>    </Link>
                <Link href="/office">
            <button  className="block hover:bg-gray-100 rounded-md p-4 text-lg font-medium">
              مكاتب
            </button></Link>
                <Link href="/chers">
            <button  className="block hover:bg-gray-100 rounded-md p-4 text-lg font-medium">
              كراسي
            </button></Link>
                <Link href="/work">
            <button  className="block hover:bg-gray-100 rounded-md p-4 text-lg font-medium">
               خلايا عمل
            </button></Link>
          </div>
        </div>
      </div>
    </span>
<Link href="/about">
         <button
            
              className="hover:text-black font-bold text-2xl cursor-pointer
"
            >
              من نحن
            </button>
</Link>

   <Link href="/contact">    <button
             
              className="hover:text-black font-bold text-2xl cursor-pointer
1"
            >
              اتصل بنا
            </button>
   </Link>
           
            <div></div>
          </nav>
        </header>
      </span>
      <span className="md:hidden">
        <div
          className="flex justify-between items-center px-15 py-3 bg-black p-2.5"
          style={{ padding: "10px" }}
        >
          {/* اللوجو */}
          <div
            className="text-4xl font-bold  text-white pl-2 m-auto"
            style={{ margin: "auto" }}
          >
            Pic<span className="text-red-500">k</span>io
          </div>
        </div>
        <nav
          className="flex items-center gap-6 px-6 py-2 bg-white  font-medium relative justify-between "
          style={{ padding: "10px" }}
        >
          <div
            className="flex items-center gap-4 text-black font-bold fonr-3x1"
            style={{ paddingRight: "40px" }}
          >
            <SearchIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" />
            <LanguageIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" />
          
            <FavoriteIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" />
            <Link href="/cart">
           
            <ShoppingCartIcon className="cursor-pointer hover:text-red-500 font-bold fonr-3x1" /> </Link>
          </div>
          <div>
<span className="md:hidden">
  <div className="relative z-40">
    <button
      onClick={() => setOpen(!open)}
      className="hover:text-black flex items-center gap-2 text-2xl font-bold mx-auto"
    >
      <MenuIcon className="text-4xl cursor-pointer" />
    </button>

    {open && (
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={() => setOpen(false)}
      ></div>
    )}

   
    <div
      className={`
        fixed top-0 right-0 h-full w-[70%] max-w-[300px]
        bg-white shadow-xl z-50 p-6
        transition-transform duration-500
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex flex-col gap-6 mt-10 text-center">
       <Link href="/">
       <h1 className="text-black mt-6 font-bold text-6xl" style={{marginTop:"55px",marginBottom:"55px"}}>Pic
        <span className="text-red-600">k</span>io</h1></Link>  
<span className="flex flex-col">
     <Link href="/office">
 {/* <button className="block rounded-md p-4 text-lg font-medium hover:text-red-600 " style={{margin:"auto ",marginBottom:"20px"}}> */}
  <ButtonBrgr title="مكاتب"/>
        
        {/* </button>*/}
        </Link> 
   <Link href="/meeting">
        {/* <button  className="block rounded-md p-4 text-lg font-medium hover:text-red-600" style={{margin:"auto ",marginBottom:"20px"}}> */}
          <ButtonBrgr title="طربيزات اجتماعات" className="hover:text-red-600" />
        {/* </button> */}
        </Link>
   <Link href="/work">
        {/* <button  className="block rounded-md p-4 text-lg font-medium hover:text-red-600" style={{margin:"auto ",marginBottom:"20px"}}> */}
         <ButtonBrgr title="خلايا عمل"/>
        {/* </button> */}
        </Link>
   <Link href="/chers">
        {/* <button  className="block rounded-md p-4 text-lg font-medium hover:text-red-600" style={{margin:"auto ",marginBottom:"20px"}}> */}
         <ButtonBrgr title=" كراسي"/>
        {/* </button> */}
        </Link>


</span>
       
      </div>
    </div>

  </div>
</span>



          </div>
        </nav>
      </span>
    </>
  );
}
