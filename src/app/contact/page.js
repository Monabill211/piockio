"use client";

import Footer from "../footer";
import Header from "../header";
import Image from "next/image";
import { motion } from "framer-motion";

import RoomIcon from "@mui/icons-material/Room";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";
import Input from "../inputtext";

export default function Contact() {
  return (
    <>
      <Header />

      {/* البانر */}
      <div className="relative w-full h-96">
        <Image
          src="/467023190_122214977204065933_4513320303956219134_n.jpg"
          alt="contact-banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold tracking-wider drop-shadow-lg">
          تواصل معانا
        </h1>
      </div>

      {/* محتوى التواصل */}
      <div className="bg-gray-50
       py-16 text-center">

        <h3 className="text-white text-xl mb-2">تواصل معنا</h3>
        <h1 className="text-white text-4xl font-bold mb-10">
          لا تتردد بالتواصل معنا في اي وقت
        </h1>

        {/* البوكسات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">

          {/* Box 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow cursor-pointer"
          >
            <RoomIcon sx={{ fontSize: 45 }} className="mb-4" />
            <h2 className="font-bold text-xl mb-2">موقعنا</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow cursor-pointer"
          >
            <ShareIcon sx={{ fontSize: 45 }} className="mb-4" />
            <h2 className="font-bold text-xl mb-2">مواقع التواصل</h2>

            <div className="flex justify-center gap-4 text-black mt-3">
              <MusicNoteIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-lg shadow cursor-pointer"
          >
            <ChatIcon sx={{ fontSize: 45 }} className="mb-4" />
            <h2 className="font-bold text-xl mb-2">للتواصل</h2>

            <p className="font-bold">01111111111</p>
            <p className="text-gray-700">email@example.com</p>
          </motion.div>
        </div>

        {/* العنوان */}
        <h1 className="text-white text-4xl font-bold mb-10">
          ارسل لنا علي الواتساب او الايميل
        </h1>
        {/* نموذج الإرسال */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">
          {/* Textarea Your Message*/}
  <Input style={{height:"200px"}}   text="Your Message"  />
          {/* Right inputs */}
          <div className="flex flex-col gap-4">
            <Input text="Name" />
        <Input text='Email' />
        <Input text='phone' />
     <Input text='Subject' />
          </div>
        </div>

        {/* Buttons */}
        <div className="max-w-6xl mx-auto mt-6 flex flex-col gap-3 px-4 md:px-0">
          <button className="bg-red-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-700 transition">
            Send To WhatsApp <WhatsAppIcon />
          </button>

          <button className="bg-red-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-700 transition">
            Send To Email <SendIcon />
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
