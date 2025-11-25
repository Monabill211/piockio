import ProductCard from "./proudectcard";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from "next/link";
export default function OffcieM(){
    return(<>
    <div>
        <img src= "\Gemini_Generated_Image_ex6jorex6jorex6j.png" className="m-8 rounded-2xl" style={{margin:"30px auto", width:'95%'}}/>
    </div>
    <div style={{display:"flex",justifyContent:"space-between", marginTop:"40px"}}>
        <Link href="/office">
         <h4 className="text-3xl text-red-600 cursor-pointer hover:translate-x-2 transition "> المزيد
                <KeyboardDoubleArrowRightIcon /> </h4> </Link>
                   <Link href="/office">
          <h2 className="text-4xl text-red-600  cursor-pointer">مكاتب مدير</h2>
          </Link>
     
    </div>

    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around", gap:"10px",marginTop:"40px"}}>
     <ProductCard
                   id="1"
                   img="\1cd595fbbe8144410ee9f13697a4acd6.jpg"
                   title="مكتب"
                   desc="مكتب مدير"
                   price="20000"
                                                                 absolute="تصنيع"

                   style={{ paddingTop: "50px" }}
                 />
            <ProductCard
                   id="1"
                   img="\566f0aa710590159bd183d46308cdd9c.jpg"
                   title="مكتب"
                   desc="مكتب مدير"
                   price="80000"
                                                                 absolute="تصنيع"

                   style={{ paddingTop: "50px" }}
                 />
          <ProductCard
                 id="1"
                 img="\a3bdafb21267fdefdf7ecb4c6b442242.jpg"
                 title="مكتب"
                 desc="مكتب مدير"
                 price="12000"
                                                               absolute="تصنيع"

                 style={{ paddingTop: "50px" }}
               />
            <ProductCard
                   id="1"
                   img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                   title="مكتب"
                   desc="مكتب مدير"
                   price="10000"
                                                                 absolute="تصنيع"

                   style={{ paddingTop: "50px" }}
                 />
           <ProductCard
                  id="1"
                   img="\566f0aa710590159bd183d46308cdd9c.jpg"
                  title="مكتب"
                  desc="مكتب مدير"
                  price="90000"
                                                                absolute="تصنيع"

                  style={{ paddingTop: "50px" }}
                />
        
        
    
           </div>
    </>)
}