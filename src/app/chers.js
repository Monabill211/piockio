import ProductCard from "./proudectcard";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from "next/link";
export default function Chers(){
    return(<>
    <div>
        <img src= "\Gemini_Generated_Image_ex6jorex6jorex6j.png" className="m-8 rounded-2xl" style={{margin:"30px auto", width:'95%'}}/>
    </div>
    <div style={{display:"flex",justifyContent:"space-between", marginTop:"40px"}}>

       <Link href="/chers">
         <h4 className="text-3xl text-red-600 cursor-pointer hover:translate-x-2 transition "> المزيد 
               <KeyboardDoubleArrowRightIcon /> </h4> </Link>
                      <Link href="/chers">
          <h2 className="text-4xl text-red-600 cursor-pointer"> كراسي مكتب</h2>
     </Link>
    </div>

    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around", gap:"10px",marginTop:"40px"}}>
     <ProductCard
                   id="1"
                   img="\2d6c5cdd96aa4ef98c893b33ac87ddd1.jpg"
                   title="كرسي"
                   desc="كرسي مكتب مدير"
                   price="90000"
                   style={{ paddingTop: "50px" }}
                 />
            <ProductCard
                   id="1"
                   img="\7fb950356fd6707dbbc796e1cc185048.jpg"
                   title="كرسي"
                   desc="كرسي موظف بالوان مختلفة"
                   price="2000"
                   style={{ paddingTop: "50px" }}
                 />
          <ProductCard
                 id="1"
                 img="\4c3f3ad802eb52af0f174582ed4ea7db.jpg"
                   title="كرسي"
                   desc="كرسي موظف بالوان مختلفة"
                 price="80000"
                 style={{ paddingTop: "50px" }}
               />
            <ProductCard
                   id="1"
                   img="\2d6c5cdd96aa4ef98c893b33ac87ddd1.jpg"
                   title="كرسي"
                   desc="كرسي مكتب مدير"
                   price="2000"
                   style={{ paddingTop: "50px" }}
                 />
           <ProductCard
                  id="1"
                   img="\7fb950356fd6707dbbc796e1cc185048.jpg"
                   title="كرسي"
                   desc="كرسي موظف بالوان مختلفة"
                  price="1000"
                  style={{ paddingTop: "50px" }}
                />
        
        
    
           </div>
    </>)
}