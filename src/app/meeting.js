import ProductCard from "./proudectcard";
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export default function Meeting(){
    return(<>
    <div>
        <img src= "\Gemini_Generated_Image_ex6jorex6jorex6j.png" className="m-8 rounded-2xl" style={{margin:"30px auto", width:'95%'}}/>
    </div>
  

    <div style={{display:"flex",justifyContent:"space-between", margin:"40px",  }}>
        <Link href="/meeting" >
         <h4 className="text-3xl text-red-600 cursor-pointer hover:translate-x-2 transition "> المزيد  <KeyboardDoubleArrowRightIcon /> </h4> 
 </Link><Link href="/meeting" >
          <h2 className="text-4xl text-red-600 cursor-pointer ">طربيزات اجتماعات</h2>
     </Link>
    </div>
   
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around", gap:"10px",marginTop:"40px"}}>
     <ProductCard
                   id="1"
                   img="\2e05b2e3931b3ca0e97ea8c0c265b2f5.jpg"
                   title="طربيزت اجتماعات"
                   desc="طربيزت اجتماعات عصرية تتسع  لي 9 اشخاص"
                   price="10000"
                   style={{ paddingTop: "50px" }}
                 />
            <ProductCard
                   id="1"
                   img="\1247f526adb01cb85464b6721630d38f.jpg"
                    title="طربيزت اجتماعات"
                   desc="طربيزت اجتماعات عصرية تتسع  لي 10 اشخاص"
                   price="20000"
                   style={{ paddingTop: "50px" }}
                 />
          <ProductCard
                 id="1"
                 img="\4ef97163f5ebdae777f4eb64463db178.jpg"
                title="طربيزت اجتماعات"
                   desc="طربيزت اجتماعات عصرية تتسع  لي 8 اشخاص"
                 price="180000"
                 style={{ paddingTop: "50px" }}
               />
            <ProductCard
                   id="1"
                          img="\2e05b2e3931b3ca0e97ea8c0c265b2f5.jpg"
                   title="طربيزت اجتماعات"
                   desc="طربيزت اجتماعات عصرية تتسع  لي 11 اشخاص"
                   price="105000"
                   style={{ paddingTop: "50px" }}
                 />
           <ProductCard
                  id="1"
           img="\1247f526adb01cb85464b6721630d38f.jpg"
                   title="طربيزت اجتماعات"
                   desc="طربيزت اجتماعات عصرية تتسع  لي 9 اشخاص"
                  price="10000"
                  style={{ paddingTop: "50px" }}
                />
        
        
    
           </div>
    </>)
}