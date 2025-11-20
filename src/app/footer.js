"use client";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // للتيك توك

export default function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white py-10 px-6" dir="ltr "
    style={{paddingTop:"30px",paddingRight:"30px",paddingLeft:'30px',marginTop:"30px"}}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* القسم الأول */}
        <div>
          <h2 className="text-3xl font-bold text-black">
            Pic<span className="text-red-600">k</span>io
          </h2>

          <ul className="mt-5 space-y-2 text-lg">
            <li>سياسة الاسترجاع</li>
            <li>سياسة الخصوصية</li>
            <li>الشروط و الأحكام</li>
            <li>الضمان</li>
          </ul>

          {/* أيقونات جانبية */}
          <div className="flex flex-col gap-4 mt-6">
            
          </div>
        </div>

        {/* القسم الأوسط */}
        <div className="text-center">
          <p className="text-lg mb-4 flex justify-center items-center gap-2">
             Esmat Khedr Street, off El-Nozha nasr city 7<LocationOnIcon className="text-white" />
           
          </p>

          <p className="text-lg mb-4 flex justify-center items-center gap-2">
           01016434958 <PhoneIcon className="text-white" /> 
          </p>

          <p className="text-lg mb-4 flex justify-center items-center gap-2">
           pickiooffice@gmail.com <MailIcon className="text-white" /> 
          </p>

          {/* اللوجوهات */}
          {/* <div className="flex justify-center items-center gap-3 mt-6 flex-wrap">
            <img src="/visa.png" className="h-10" />
            <img src="/souhoola.png" className="h-10" />
            <img src="/sympl.png" className="h-10" />
            <img src="/valu.png" className="h-10" />
            <img src="/premium.png" className="h-10" />
            <img src="/aman.png" className="h-10" />
          </div> */}
        </div>

        {/* القسم الثالث */}
        <div className="text-right"
        style={{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between"}}>
          <h2 className="text-3xl font-bold text-white">
            Pic<span className="text-red-600">k</span>io
          </h2>

          <p className="my-3 text-lg">
            نقدم الجودة التي تثق بها،<br/>  
            والخدمة التي تعتمد عليها في كل خطوة.
          </p>

          {/* <h3 className="font-bold text-xl mb-3">نحن نقبل</h3> */}

          {/* سوشيال ميديا */}
          <div className="flex gap-3 mb-6 justify-start">
            <div className="bg-white text-black w-10 h-10 rounded-full grid place-items-center text-xl">
              <MusicNoteIcon /> {/* تيك توك */}
            </div>
            <div className="bg-white text-black w-10 h-10 rounded-full grid place-items-center text-xl">
              <FacebookIcon />
            </div>
            <div className="bg-white text-black w-10 h-10 rounded-full grid place-items-center text-xl">
              <InstagramIcon />
            </div>
          </div>

          
        </div>
      </div>

      {/* خط تحت */}
      <div className="text-center text-lg mt-10">
        © جميع الحقوق محفوظة 2025
      </div>
    </footer>
  );
}
