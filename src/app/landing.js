import SidebarMenu from "./barger";
export default function Landing() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/1cd595fbbe8144410ee9f13697a4acd6.jpg')",
      }}
    >
      {/* تظليل خفيف علشان النص يبان */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* النص والزر */}
      <div className="relative z-10 max-w-2xl px-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          هل تريد أثاث مكتبي ؟
        </h1>
        <p className="text-4x1 md:text-5xl mb-8" style={{ paddingTop: "15px" }}>
          Pic<span className="text-red-500">k</span>io أهلاً بكم في
        </p>
      </div>{" "}
      {/* <span>
        <SidebarMenu />
      </span> */}
    </section>
  );
}
