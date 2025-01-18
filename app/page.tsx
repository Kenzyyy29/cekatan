import Link from "next/link";
import CardList from "@/components/CardList/OnlineHours";
import InstantProcess from "@/components/CardList/InstantProcess"
import Features from "@/components/CardList/Features";
import MaxSpeed from "@/components/CardList/MaxSpeed";

export default function Home() {
 return (
  <div>
   <section className="bg-gradient-to-br from-yellow-800 to-yellow-400 h-auto py-[13%] px-56">
    <h1 className="text-white font-bold text-4xl ">Lebih Cepat Lebih Baik</h1>
    <p className="text-gray-400 mt-4">
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div className="flex mt-10 text-white gap-x-6">
     <Link href="/">
      <button className="rounded-full border px-3 py-2  hover:scale-110 duration-300 transition-all">
       Hubungi Kami Sekarang
      </button>
     </Link>
     <Link href="/">
      <h1 className="hover:underline mt-2">Pelajari Selengkapnya</h1>
     </Link>
    </div>

    {/* Keunggulan Section */}
    <div className="text-center text-3xl mt-44 font-bold text-white">
     <h1>Keunggulan Kami</h1>
     <div className="flex flex-col md:flex-row justify-between mt-10">
      <InstantProcess />
      <Features />
     </div>
     <div className="flex flex-col md:flex-row justify-between">
      <MaxSpeed />
      <CardList />
     </div>
    </div>

    {/* Keunggulan Section */}
    <div className="text-center text-3xl mt-24 font-bold text-white">
     <h1>Konsultasikan Bisnis Anda</h1>
    </div>
   </section>
  </div>
 );
}
