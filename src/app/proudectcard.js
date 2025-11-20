"use client";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";



export default function ProductCard({ id, title, desc, price, img }) {
  const [hovered, setHovered] = useState(false);
  const [fav, setFav] = useState(false);
const router = useRouter();
  // تحميل الحالة من localStorage أول ما الصفحة تفتح
  useEffect(() => {
    const savedFav = localStorage.getItem(`fav_${id}`);
    if (savedFav === "true") setFav(true);
  }, [id]);

  // لما المستخدم يضغط على القلب
  const toggleFav = () => {
    const newFav = !fav;
    setFav(newFav);
    localStorage.setItem(`fav_${id}`, newFav);
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = { id, title, price, img };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
   router.push("/cart")
  };

  return (
    <div className="w-[185px] bg-white rounded-2xl shadow-md overflow-hidden text-center pb-4 hover:-translate-y-1 transition cursor-pointer">
      <div className="relative">
        <img
src={hovered ? "566f0aa710590159bd183d46308cdd9c.jpg" : img }
         alt={title} className="w-full h-[200px] object-cover"
         onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} />
        <FavoriteBorderIcon
          onClick={toggleFav}
          className={`absolute top-3 right-3 text-2xl cursor-pointer transition ${
            fav ? "text-red-500" : "text-gray-400"
          }`}
        />
      </div>

      <h3 className="text-lg font-bold mt-3">{title}</h3>
      <p className="text-sm text-gray-600 px-3 mb-2 text-end">{desc}</p>

      <span className="text-base font-bold text-gray-800">
        {" "}
        يبدا من{price} جنيه
      </span>
      <button
        onClick={addToCart}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 transition w-full h-8 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
