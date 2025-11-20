"use client";
import { useEffect, useState } from "react";
import ProductCard from "../proudectcard";
import Header from "../header";
import Footer from "../footer";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  function handelcl(){
    localStorage.removeItem("cart"); 
  setCart([]); 
  }
  return (
  
    <>  <Header/>

        <div>
    <div 
        className="flex flex-col items-center text-center my-10"
        style={{ paddingTop: "50px",marginBottom:"50px" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-4xl mb-2.5">
السلة
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
<div className="flex flex-wrap justify-evenly">


      {cart.length === 0 ? (
        <p>السلة فاضية</p>
      ) : (
        cart.map((item) => (
        
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
          />
       
    
 

        ))
      )}</div>
    </div> 
     <button onClick={handelcl} className="bg-red-700 w-52 h-9 text-2xl font-bold rounded-2xl cursor-pointer  flex justify-center text-white" style={{margin:"auto" }}>
تفريغ السلة 
     </button>
<Footer  style={{position:"absolute",bottom:"0"}} />
       </>
  );
}
