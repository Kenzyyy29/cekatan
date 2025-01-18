import Link from "next/link";

export default function Home() {
  return (
   <div>
    <section className="bg-gradient-to-br from-yellow-800 to-yellow-400 h-screen py-[13%] px-56">
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
    </section>
    <section className="bg-gradient-to-br from-yellow-800 to-yellow-400 h-96">
     <h1 className="text-center text-3xl py-10 font-bold text-white">
      Keunggulan Kami
     </h1>
    </section>
    <section className="h-screen">
     <div className="text-center text-3xl py-10 font-bold text-white ">
      <h1>Konsultasi Bisnis</h1>
      <h1>Kebutuhan Anda</h1>
     </div>
    </section>
   </div>
  );
}
