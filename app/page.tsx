import Link from "next/link";
import CardList from "@/components/CardList/OnlineHours";
import InstantProcess from "@/components/CardList/InstantProcess";
import Features from "@/components/CardList/Features";
import MaxSpeed from "@/components/CardList/MaxSpeed";

export default function Home() {
 return (
  <div>
   <section className="bg-gradient-to-br from-yellow-800 to-yellow-400 h-auto py-[13%] px-56">
    <h1 className="text-bone font-bold text-4xl 2xl:text-6xl">
     Lebih Cepat Lebih Baik
    </h1>
    <p className="text-bone mt-4 2xl:mt-6 2xl:text-xl">
     Dengan CEKATAN POS Semua Menjadi Mudah
    </p>
    <div className="flex mt-10 text-bone gap-x-6">
     <Link href="/">
      <button className="rounded-full border px-3 py-2 hover:scale-110 duration-300 transition-all">
       Hubungi Kami Sekarang
      </button>
     </Link>
     <Link href="/">
      <h1 className="hover:underline mt-2">Pelajari Selengkapnya</h1>
     </Link>
    </div>

    {/* Keunggulan */}
    <div className="text-center text-3xl 2xl:text-4xl mt-44 2xl:mt-[35%] font-bold text-bone">
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
   </section>

   {/* Fitur Untuk Semua Jenis Usaha */}
   <section className="bg-bone h-auto py-20 px-56">
    <h1 className="text-black font-bold text-3xl 2xl:text-4xl text-end">
     Satu Aplikasi untuk Semua Jenis Usaha
    </h1>
    <div className="ml-[55%] mt-6 text-black gap-x-6 text-start 2xl:max-w-2xl 2xl:text-xl">
     <p>
      Dengan aplikasi Cekatan POS, anda dapat menggunakan fitur untuk segala
      jenis usaha seperti :
     </p>

     {/* Restoran */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#d45353]"
       viewBox="0 0 448 512"
       xmlns="http://www.w3.org/2000/svg">
       {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"></path>
      </svg>
      <h1>Restoran</h1>
     </div>

     {/* Kedai Kopi */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#5b4433]"
       viewBox="0 0 512 512"
       xmlns="http://www.w3.org/2000/svg">
       {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"></path>
      </svg>
      <h1>Kedai Kopi</h1>
     </div>

     {/* Retail */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#25d069]"
       viewBox="0 0 640 512"
       xmlns="http://www.w3.org/2000/svg">
       {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"></path>
      </svg>
      <h1>Retail</h1>
     </div>

     {/* Jasa Pelayanan */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#1d6cba]"
       viewBox="0 0 512 512"
       xmlns="http://www.w3.org/2000/svg">
       {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
      </svg>
      <h1>Jasa Pelayanan</h1>
     </div>
    </div>
   </section>

   {/* Fitur Untuk Semua Jenis Usaha */}
   <section className="bg-white h-auto py-20 px-56">
    <h1 className="text-black font-bold text-3xl 2xl:text-4xl text-end">
     Satu Aplikasi untuk Semua Jenis Usaha
    </h1>
    <div className="ml-[55%] mt-6 text-black gap-x-6 text-start 2xl:max-w-2xl 2xl:text-xl">
     <p>
      Dengan aplikasi Cekatan POS, anda dapat menggunakan fitur untuk segala
      jenis usaha seperti :
     </p>

     {/* Restoran */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#d45353]"
       viewBox="0 0 448 512"
       xmlns="http://www.w3.org/2000/svg">
       {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"></path>
      </svg>
      <h1>Restoran</h1>
     </div>

     {/* Kedai Kopi */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#5b4433]"
       viewBox="0 0 512 512"
       xmlns="http://www.w3.org/2000/svg">
       {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"></path>
      </svg>
      <h1>Kedai Kopi</h1>
     </div>

     {/* Retail */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#25d069]"
       viewBox="0 0 640 512"
       xmlns="http://www.w3.org/2000/svg">
       {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"></path>
      </svg>
      <h1>Retail</h1>
     </div>

     {/* Jasa Pelayanan */}
     <div className="my-6 flex gap-x-4 font-medium">
      <svg
       className="size-7 fill-[#1d6cba]"
       viewBox="0 0 512 512"
       xmlns="http://www.w3.org/2000/svg">
       {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
       <path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
      </svg>
      <h1>Jasa Pelayanan</h1>
     </div>
    </div>
   </section>
  </div>
 );
}
