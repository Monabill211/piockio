import Footer from "../footer";
import Header from "../header";
import ProductCard from "../proudectcard";


export default function MeetingS(){
    return(
        <>
        <Header/>
        <div 
        className="flex flex-col items-center text-center my-10"
        style={{ paddingTop: "50px",marginBottom:"50px" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-4xl mb-2.5">
          Pic<span className="text-red-600">k</span>io    طربيزات اجتماعات من 
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
        <div className=" flex flex-wrap gap-5 justify-evenly  " style={{margin:"20px"}}>



    
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
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
                           price="10000"
                           style={{ paddingTop: "50px" }}
                         />
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
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
                           price="10000"
                           style={{ paddingTop: "50px" }}
                         />
        <ProductCard
                           id="1"
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
                           price="10000"
                           style={{ paddingTop: "50px" }}
                         />
        <ProductCard
                           id="1"
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
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
                        img="\1247f526adb01cb85464b6721630d38f.jpg"
                         title="طربيزت اجتماعات"
                        desc="طربيزت اجتماعات عصرية تتسع  لي 10 اشخاص"
                        price="20000"
                        style={{ paddingTop: "50px" }}
                      />
        <ProductCard
                           id="1"
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
                           price="10000"
                           style={{ paddingTop: "50px" }}
                         />
        <ProductCard
                           id="1"
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
                           price="10000"
                           style={{ paddingTop: "50px" }}
                         />
        <ProductCard
                           id="1"
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
                           price="10000"
                           style={{ paddingTop: "50px" }}
                         />
        <ProductCard
                           id="1"
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
                           price="10000"
                           style={{ paddingTop: "50px" }}
                         />
        <ProductCard
                           id="1"
                           img="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
                           title="مكتب"
                           desc="مكتب مدير"
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
                             </div>
                             <Footer/>
        </>
    
    )
}