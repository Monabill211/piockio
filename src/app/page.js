import Image from "next/image";
import Header from "./header";
import Landing from "./landing";
import ProductCard from "./proudectcard";
import Section from "./seckions";
import Bast from "./bestseller";
import Footer from "./footer";
import Meeting from "./meeting";
import Offcie from "./office";
import OffcieM from "./officemanger";
import Work from "./work";
import Chers from "./chers";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Section />
      <Bast />
 
      <Offcie/>
      <OffcieM/>
   <Chers/>
      <Meeting/>   <Work/>
<Footer/>
     </div>
  );
}
