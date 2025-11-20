import ProductCard from "./proudectcard";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from "next/link";
export default function Work(){
    return(<>
    <div>
        <img src= "\Gemini_Generated_Image_ex6jorex6jorex6j.png" className="m-8 rounded-2xl" style={{margin:"30px auto", width:'95%'}}/>
    </div>
    <div style={{display:"flex",justifyContent:"space-between", marginTop:"40px"}}>

       <Link href="/work">
         <h4 className="text-3xl text-red-600 cursor-pointer hover:translate-x-2 transition "> المزيد 
               <KeyboardDoubleArrowRightIcon /> </h4> </Link>
       <Link href="/work">
           <h2 className="text-4xl text-red-600 cursor-pointer "> خلية عمل</h2>
     </Link>
    </div>

    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around", gap:"10px",marginTop:"40px"}}>
     <ProductCard
                   id="1"
                   img="\402ab660bba64a8880c64d5cc8d17821.jpg"
                   title="خلية عمل"
                    desc="خلية عمل تتسع لاعدد 8 اشخاص بمساحة واسعة"
                   price="80000"
                   style={{ paddingTop: "50px" }}
                 />
            <ProductCard
                   id="1"
                   img="\8c66a679f593e357a693f185e63b5564.jpg"
                    title="خلية عمل"
                 desc="خلية عمل تتسع لاعدد 6 اشخاص بمساحة واسعة"
                   price="120000"
                   style={{ paddingTop: "50px" }}
                 />
          <ProductCard
                 id="1"
                 img="\4ef97163f5ebdae777f4eb64463db178.jpg"
                 title="خلية عمل"
               desc="خلية عمل تتسع لاعدد 10 اشخاص بمساحة واسعة"
                 price="10000"
                 style={{ paddingTop: "50px" }}
               />
            <ProductCard
                   id="1"
                   img="\402ab660bba64a8880c64d5cc8d17821.jpg"
                    title="خلية عمل"
                      desc="خلية عمل تتسع لاعدد 4 اشخاص بمساحة واسعة"
                   price="40000"
                   style={{ paddingTop: "50px" }}
                 />
           <ProductCard
                  id="1"
                  img="\8c66a679f593e357a693f185e63b5564.jpg"
                  title="خلية عمل"
                  desc="خلية عمل تتسع لاعدد 5 اشخاص بمساحة واسعة"
                  price="50000"
                  style={{ paddingTop: "50px" }}
                />
        
        
    
           </div>
    </>)
}