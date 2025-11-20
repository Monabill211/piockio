export default function Title(title) {
  return (
    <div className="flex flex-col items-center text-center my-10">
      {/* النص فوق */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* الخط مع المعين */}
      <div className="flex items-center w-full justify-center">
        {/* الخط اليمين */}
        <div className="h-[2px] bg-red-500/40 w-1/4"></div>

        {/* المعين في النص */}
        <div className="w-6 h-6 bg-red-600 rotate-45 mx-[3px] rounded-sm shadow-md"></div>

        {/* الخط الشمال */}
        <div className="h-[2px] bg-red-500/40 w-1/4"></div>
      </div>
    </div>
  );
}
