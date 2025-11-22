import Title from "./simbel";
import Link from "next/link";
export default function Section() {

  return (
    <>
      <div
        className="flex flex-col items-center text-center my-10"
        style={{ paddingTop: "50px" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-4xl mb-2.5">
          Pic<span className="text-red-600">k</span>io اقسام
        </h2>

        <div
          className="flex items-center w-full justify-center"
          style={{ paddingTop: "10px" }}
        >
          <div
            className="h-[2px] bg-red-500/40 w-1/4"
            style={{ marginRight: "8px" }}
          ></div>

          <div className="w-2.5 h-2.5 bg-red-600 rotate-45 mx-[3px] rounded-sm shadow-md"></div>

          <div
            className="h-[2px] bg-red-500/40 w-1/4  "
            style={{ marginLeft: "8px" }}
          ></div>
        </div>
      </div>
      <div
        className="flex justify-around pt-8 m-7 flex-wrap"
        style={{ paddingTop: "30px",rowGap:"50px" }}
      >
        <Link href="/office" >
        <div className="w-36 h-36 cursor-pointer hover:text-red-500">
          <img src="\b321e2485da40c0dde2685c3a4fdcb56.jpg"  className="w-36 h-36"/>
          <h3
            className="m-1.5 font-bold text-center "
            style={{ paddingTop: "10px", fontSize: "25px" }}
          >
            مكاتب
          </h3>
        </div></Link>
                <Link href="/chers" >

        <div className="w-36 h-36 cursor-pointer hover:text-red-500 ">
          <img src="\2d6c5cdd96aa4ef98c893b33ac87ddd1.jpg"  className="w-36 h-36" />
          <h3
            className="m-1.5 font-bold text-center "
            style={{ paddingTop: "10px", fontSize: "25px" }}
          >
            كراسي
          </h3>
        </div>
        </Link>
                <Link href="/meeting" >

        <div className="w-36 h-36 cursor-pointer hover:text-red-500">
          <img src="\2e05b2e3931b3ca0e97ea8c0c265b2f5.jpg"  className="w-36 h-36" />
          <h3
            className="m-1.5 font-bold text-center "
            style={{ paddingTop: "10px", fontSize: "25px" }}
          >
            طربيزات اجتماعات
          </h3>
        </div>
        </Link>
                <Link href="/work" >

        <div className="w-36 h-36 cursor-pointer hover:text-red-500">
          <img src="\8c66a679f593e357a693f185e63b5564.jpg" className="w-36 h-36" />
          <h3
            className="m-1.5 font-bold text-center "
            style={{ paddingTop: "10px", fontSize: "25px" }}
          >
            خلية عمل
          </h3>
        </div>
        </Link>
      </div>
    </>
  );
}
