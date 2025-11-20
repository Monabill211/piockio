import Footer from "../footer";
import Header from "../header";
import Image from "next/image";

export default function Protfilo() {
  return (
    <>
      <Header />

      {/* البانر */}
      <div className="relative w-full h-96">
        <Image
          src="/467023190_122214977204065933_4513320303956219134_n.jpg"
          alt="about-banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold tracking-wider drop-shadow-lg">
          سابقة أعمالنا
        </h1>
      </div>

      {/* GRID الأعمال */}
      <div
        className="max-w-7xl mx-auto px-4 py-16 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden shadow-md 
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* الصورة */}
            <div className="w-full h-56 relative overflow-hidden">
              <Image
                src={`/works/work-${i + 1}.jpg`}
                alt={`work-${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* النص */}
            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-black transition">
                شركة رقم {i + 1}
              </h2>
              <p className="text-gray-500 text-sm mt-1 group-hover:text-gray-700 transition">
                تصميم وتنفيذ أعمال احترافية
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
