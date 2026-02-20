import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className="bg-amber-100">
    <section className="grid grid-cols-2 h-[50vh]">
   <div className=" flex flex-col text-black items-center justify-center">
    <p className="text-4xl font-bold ">
      The best URL shortner
    </p>
    <p className="px-50 text-center">
      We are the best URL shortner in the market and most straight forward shortner .. we understand your needs and hence we have created this
    </p>
    <div className="flex gap-3 justify-start my-2">
     <Link href="/generate"><button className='bg-purple-600 shadow-lg p-3 py-1 font-bold rounded-lg'>Try Now</button></Link>
    <Link href="/github"><button className='bg-purple-600 shadow-lg p-3 rounded-lg py-1 font-bold'>Github</button></Link>
    </div>
   </div>
   <div className=" justify-start flex relative">
   <Image alt="an image of vector" src={"/vector.jpg"} fill={true}></Image>
   </div>
    </section>
   </main>
  );
}
