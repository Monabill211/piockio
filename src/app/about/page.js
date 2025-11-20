import Footer from "../footer";
import Header from "../header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />

    
      <div className="relative w-full h-96">
        <Image
          src="/467023190_122214977204065933_4513320303956219134_n.jpg"
          alt="about-banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold tracking-wider drop-shadow-lg">
          من نحن
        </h1>
      </div>

      {/* ===== سكشن من هم Pickio ===== */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10 pt-14 w-full mt-14 d-rlt" 
      style={{marginTop:"50px"
      }}>
        <div className="w-full ">
          <Image
            src="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
            width={600}
            height={400}
            className="rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            alt="who-we-are"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4" style={{direction:"rtl"}}>
          <h2 className="text-4xl font-bold text-gray-900">من هم Pic<span className="text-red-600">k</span>io</h2>

          <p className="text-lg text-gray-700 leading-8">
            Pickio شركة متخصصة في تصنيع وتجهيز الأثاث المكتبي والفندقي باستخدام
            أفضل أنواع المعادن. نركز على الجودة والمتانة والتصميم العملي.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            هدفنا تقديم حلول عملية تلائم احتياجات العملاء وتمنحهم تجربة استخدام
            مريحة ومناسبة للبيئة العملية.
          </p>
        </div>
      </div>

      {/* ================================================== */}
      {/* ===== سكشن أهداف Pickio (قبل المربعات) ===== */}
      {/* ================================================== */}

     <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10 pt-14 w-full"  
         style={{marginTop:"50px",direction:"rtl"}}>
        <div className="w-full ">
          <Image
            src="/b321e2485da40c0dde2685c3a4fdcb56.jpg"
            width={600}
            height={400}
            className="rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            alt="who-we-are"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900"> اهداف Pic<span className="text-red-600">k</span>io </h2>

          <p className="text-lg text-gray-700 leading-8">
            Pickio شركة متخصصة في تصنيع وتجهيز الأثاث المكتبي والفندقي باستخدام
            أفضل أنواع المعادن. نركز على الجودة والمتانة والتصميم العملي.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            هدفنا تقديم حلول عملية تلائم احتياجات العملاء وتمنحهم تجربة استخدام
            مريحة ومناسبة للبيئة العملية.
          </p>
        </div>
      </div>


      {/* ================================================== */}
      {/* ===== سكشن 4 المربعات ===== */}
      {/* ================================================== */}

      <div className="py-16 bg-white"      style={{marginTop:"50px"
      }}>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="relative bg-gray-100 py-10 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xl px-4 py-2 rounded-lg shadow-md font-bold">
              120+
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6" 
            style={{display:"flex",flexDirection:"column",height:"100px",
              alignItems:"center",justifyContent:"center"}}>المشاريع المكتملة</h3>
          </div>

          <div className="relative bg-gray-100 py-10 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xl px-4 py-2 rounded-lg shadow-md font-bold">
              15
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6"  style={{display:"flex",flexDirection:"column",height:"100px",
              alignItems:"center",justifyContent:"center"}}>أعضاء الفريق</h3>
          </div>

          <div className="relative bg-gray-100 py-10 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-x4 px-4 py-2 rounded-lg shadow-md font-bold">
              7
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6"  style={{display:"flex",flexDirection:"column",height:"100px",
              alignItems:"center",justifyContent:"center"}}>سنين الخبرة</h3>
          </div>

          <div className="relative bg-gray-100 py-10 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xl px-4 py-2 rounded-lg shadow-md font-bold">
              350+
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6"  style={{display:"flex",flexDirection:"column",height:"100px",
              alignItems:"center",justifyContent:"center"}}>عملاء سعداء</h3>
          </div>

        </div>
      </div>
<Footer/>  
  </>
  );
}
