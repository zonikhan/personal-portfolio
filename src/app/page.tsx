import Image from "next/image";
import profile from "../..image/Ai.jpeg"
import Footer from "@/components/footer";
// import Footer from "./components/footer";
// import Navbar from "./components/navbar";
// import Hero from  "./components/hero";
import Navbar from "@/components/navbar";


  export default function Home() {

  return (
    <div>
   
    <h1 className="text-center pt-5 text-[24px]">RABIA</h1>

   <Navbar />

   
   <div className="content flex justify-around">
            <div className="my-details">
                <h1 className="text-2xl text-blue-800">Rabia</h1>
                <h2 className="text-xl text-gray-600">IT student</h2>
                <h3 className="text-xl  text-orange-500">matric the flower school</h3>
                <h4 className="text-xl  text-pink-500">inter collage</h4>
                <h5 className="text-xl  text-blue-800">BA continue</h5>
                <h5 className="text-xl text-red-500">Email:Abc@gmail.com</h5>
                <h5 className="text-xl text-red-500">Contact:123450000</h5>
                <h6 className="text-xl text-yellow-200">Exprience:Banking</h6>
            </div>
            <div className="w-150 h-150">
            <Image src={"/Ai.jpeg"} alt="Ai.jpeg"width={160} height={150}
             className="rounded-full"
             />
            </div>
    </div>
    
   <Footer/>
   </div >
    
  
  )
  }
