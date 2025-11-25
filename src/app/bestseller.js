import { title } from "framer-motion/client";
import ProCard from "./proudectcard";
import ProductSlider from "./sw";
import ProductCard from "./proudectcard";
export default function Bast() {
  return (
    <>
    <div
        className="flex flex-col items-center text-center my-10"
        style={{ paddingTop: "50px",marginBottom:"50px" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-4xl mb-2.5">
          Pic<span className="text-red-600">k</span>io الاكثر مبيعا من 
        </h2>

        <div
          className="flex items-center w-full justify-center"
          style={{ paddingTop: "10px" }}
        >
          <div
            className="h-[2px] bg-red-500/40 w-1/4"
            style={{ marginRight: "8px" }}
          ></div>

          <div className="w-2.5 h-2.5 bg-red-600 rotate-45 mx-[3px] rounded-sm shadow-md"></div>

          <div
            className="h-[2px] bg-red-500/40 w-1/4  "
            style={{ marginLeft: "8px" }}
          ></div>
        </div>
      </div>
       <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around", gap:"10px"}}>
 <ProductCard
               id="2"
               img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
               title="مكتب"
               desc="مكتب مدير"
               price="10000"
                                                             absolute="تصنيع"

               style={{ paddingTop: "50px" }}
             />
        <ProductCard
               id="1"
               img="\2d6c5cdd96aa4ef98c893b33ac87ddd1.jpg"
               title="كرسي"
               desc=" كرسي مدير"
               price="5200"
                                                             absolute="جاهز"

               style={{ paddingTop: "50px" }}
             />
      <ProductCard
             id="1"
             img="\2e05b2e3931b3ca0e97ea8c0c265b2f5.jpg"
             title="طربيزت اجتماعات"
             desc="طربيزات اجتماعات  "
             price="120000"
                                                           absolute="تصنيع"

             style={{ paddingTop: "50px" }}
           />
        <ProductCard
               id="1"
               img="\566f0aa710590159bd183d46308cdd9c.jpg"
               title="مكتب"
               desc="مكتب مدير"
               price="10000"
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
    
    

       </div>
       
    </>
    
  );
}
