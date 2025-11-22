"use client";
import { useState } from "react";
import Image from "next/image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../header";
import Footer from "../footer";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedsize, setSelectedsize] = useState("120");
  const [quantity, setQuantity] = useState(1);


  const colors = [
    {
      name: "black",
      color: "#1a1a1a",
      image: "/1cd595fbbe8144410ee9f13697a4acd6.jpg",
    },
    {
      name: "grey",
      color: "#555555",
      image: "/b321e2485da40c0dde2685c3a4fdcb56.jpg",
    },
    {
      name: "purple",
      color: "#8a4fff",
      image: "/1cd595fbbe8144410ee9f13697a4acd6.jpg",
    },
    {
      name: "red",
      color: "#c0392b",
      image: "/b321e2485da40c0dde2685c3a4fdcb56.jpg",
    },
  ];
  const size = [
  { name: "120", price: 20000 },
  { name: "140", price: 23000 },
  { name: "180", price: 26000 },
  { name: "220", price: 30000 },
];


  const product = colors.find((c) => c.name === selectedColor);
  const productsize = size.find((c) => c.name === selectedsize);

  return (
    <>
    
     <Header />
    <div
  className="
    max-w-4xl mx-auto 
    py-4 px-3        /* موبايل */
    md:py-10 md:px-5 /* ديسكتوب */
    grid md:grid-cols-2 
    gap-6 md:gap-10 
    mt-4 md:mt-10
  "
>

      {/* الصورة */}
      <div className="flex flex-col items-center relative">
        <AnimatePresence mode="wait">
          <motion.a
            key={product.image}
            data-fancybox="gallery"
            href={product.image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="block w-full"
          >
            <Image
              src={product.image}
              alt={selectedColor + selectedsize  + " chair"}
              width={600}
              height={600}
              className="rounded-2xl shadow-lg cursor-pointer"
            />
          </motion.a>
        </AnimatePresence>
      </div>

      {/* التفاصيل */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">مكتب</h2>
          <p className="text-gray-500"> مكتب مدير {selectedColor} {selectedsize} </p>
        <p className="text-3xl font-semibold mt-2">
  {productsize ? productsize.price : "اختر مقاس"}
</p>

        </div>

      

        {/* اختيار اللون */}
        <div>
          <p className="font-medium mb-2">Choose color:</p>
          <div className="flex items-center gap-3">
            {colors.map((c) => (
              <motion.button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === c.name
                    ? "border-black scale-110 shadow-md"
                    : "border-gray-300 hover:scale-105"
                }`}
                style={{ backgroundColor: c.color }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      {/* ?اختار المقاس */}

        <div>
  <p className="font-medium mb-2">Choose size :</p>
  <div className="flex items-center gap-3">
    {size.map((c) => (
      <motion.button
        key={c.name}
        onClick={() => setSelectedsize(c.name)}
        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-200 text-sm font-semibold
          ${
            selectedsize === c.name
              ? "border-black scale-110 shadow-md bg-gray-200"
              : "border-gray-300 hover:scale-105 bg-white"
          }`}
        whileTap={{ scale: 0.9 }}
      >
        {c.name}
      </motion.button>
    ))}
  </div>
</div>



     {/* كونتر العدد */}
       <p className="font-medium mb-2">check out:</p>
{/* <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around"}}>  */}
<div className=" items-center gap-4 flex flex-wrap justify-around ">
  <div className="flex items-center bg-gray-100 rounded-xl shadow-sm  w-36 h-10 flex justify-evenly" >

    <button
      onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}
      className="px-4 py-2 text-lg font-bold hover:bg-gray-200 rounded-l-xl transition"
    >
      - 
    </button>

    <span className="px-4 py-2 text-lg font-semibold min-w-10 text-center">
      {quantity}
    </span>

    <button
      onClick={() => setQuantity(q => q + 1)}
      className="px-4 py-2 text-lg font-bold hover:bg-gray-200 rounded-r-xl transition"
    >
      +
    </button>

  </div>

  {/* زرار الإضافة */}
  
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-red-500 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg w-36 h-10"   style={{margin:"30px"}}
  >
    Add to cart
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-green-500 hover:bg-green-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg md:w-36 h-10 w-1/2 " 
    style={{margin:"30px"}}
  >
 send
  </motion.button>
</div>
{/* </div> */}
        {/* الوصف */}
        <div className="pt-6 border-t grid md:grid-cols-2 gap-6 text-gray-700">

  {/* جدول التفاصيل */}
  <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
    <h3 className="font-bold text-lg mb-3 text-red-600 text-center font-bold   " >تفاصيل المنتج</h3>
    <table className="w-full text-sm">
      <tbody className="divide-y">
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">الطول</td>
          <td>{selectedsize} cm</td>
        </tr>
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">العرض</td>
          <td>60 cm</td>
        </tr>
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">الارتفاع</td>
          <td>75 cm</td>
        </tr>
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">نوع الخامة</td>
          <td>خشب HPL + معدن</td>
        </tr>
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">اللون</td>
          <td>{selectedColor}</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* جدول معلومات الكود */}
  <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
    <h3 className="font-bold text-lg mb-3 text-red-600 text-center font-bold   " >معلومات إضافية</h3>
    <table className="w-full text-sm">
      <tbody className="divide-y">
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">كود المنتج</td>
          <td>MD-{selectedsize}-{selectedColor}</td>
        </tr>
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">التصنيف</td>
          <td>مكاتب مدير</td>
        </tr>
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">الضمان</td>
          <td>سنة كاملة</td>
        </tr>
        <tr className="py-2 text-center">
          <td className="font-semibold py-2">بلد الصنع</td>
          <td>مصر</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

      </div>
    </div>
    <Footer/>
    </>
   
  );
}
