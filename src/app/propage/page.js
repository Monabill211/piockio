"use client";
import { useState } from "react";
import Image from "next/image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("red");

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

  const product = colors.find((c) => c.name === selectedColor);

  return (
    <div className="max-w-6xl mx-auto py-10 px-5 grid md:grid-cols-2 gap-10">
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
              alt={selectedColor + " chair"}
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
          <h2 className="text-2xl font-bold text-gray-900">STYRPEL</h2>
          <p className="text-gray-500">Gaming chair, {selectedColor}</p>
          <p className="text-3xl font-semibold mt-2">$299.00</p>
        </div>

        {/* النجوم */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">
              ★
            </span>
          ))}
          <span className="text-sm text-gray-500 ml-2">(280)</span>
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

        {/* الزر */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
        >
          Add to cart
        </motion.button>

        {/* الوصف */}
        <div className="text-gray-600 leading-relaxed pt-4 border-t">
          <p>
            STYRPEL gaming chair helps you play at the top of your game. Adjust
            the headrest, lumbar support, armrests and the seat height and depth
            – the mesh material keeps you cool when the game heats up!
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Tested for 125 kg (276 lb) | ANSI/BIFMA x5.1 | Article: 706.130.58
          </p>
        </div>
      </div>
    </div>
  );
}
