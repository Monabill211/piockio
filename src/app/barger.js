"use client";
import { useState } from "react";
import StorageIcon from "@mui/icons-material/Storage";
import ChairIcon from "@mui/icons-material/Chair";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const categories = [
    {
      id: 1,
      name: "المكاتب",
      icon: <WorkIcon size={22} />,
      items: ["مكتب خشب", "مكتب معدني", "مكتب مدير"],
    },
    {
      id: 2,
      name: "الكراسي",
      icon: <ChairIcon size={22} />,
      items: ["كرسي جلد", "كرسي شبك", "كرسي انتظار"],
    },
    {
      id: 3,
      name: "الرئيسية",
      icon: <HomeIcon size={22} />,
      items: [],
    },
  ];

  return (
    <div className="flex">
      {/* المنيو الجانبية */}
      <div
        className={`h-screen bg-gray-100 shadow-lg transition-all duration-300 flex flex-col ${
          open ? "w-56" : "w-20"
        }`}
      >
        {/* زر البرجر */}
        <button
          onClick={() => setOpen(!open)}
          className="p-3 flex items-center justify-center text-2xl hover:bg-gray-200"
        >
          <StorageIcon />
        </button>

        {/* العناصر */}
        <div className="flex flex-col gap-3 mt-4">
          {categories.map((cat) => (
            <div key={cat.id}>
              <button
                onClick={() => setActive(active === cat.id ? null : cat.id)}
                className="flex items-center gap-3 w-full p-3 text-gray-700 hover:bg-gray-200"
              >
                {cat.icon}
                {open && <span className="font-medium">{cat.name}</span>}
              </button>

              {/* العناصر الفرعية */}
              {active === cat.id && open && cat.items.length > 0 && (
                <div className="ml-10 space-y-1 text-gray-600 text-sm">
                  {cat.items.map((item, i) => (
                    <p key={i} className="hover:text-black cursor-pointer">
                      • {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
