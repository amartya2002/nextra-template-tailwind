import Link from "next/link"
const index =()=> {
  return (
    <section className=" mt-24 mx-6 md:mx-20 ">

    <div className=" space-y-1 max-w-2xl text-dark ">
        <p className="text-4xl md:text-6xl   font-regular ">Simplified Docs,
        </p>

        

        {/* <p className="text-5xl md:text-6xl  font-bold  text-white bg-gradient-to-r from-red-400  to-indigo-400 inline-block">Beautifully</p> */}

        <h1 className="  text-dark  text-4xl font-regular md:text-6xl / ">Beautifully Designed.  </h1>
        {/* <FaCircle className=" mt-6 text-dark h-3"/> */}
        <p className="pt-4   tracking-normal text-xl text-silver ">
        Create beautiful documentation sites with ease using this Nextra template, featuring built-in Tailwind CSS styling and a simple page structure utilizing MDX.
        </p>

<div className="pt-3 flex space-x-4">
<Link href="docs" className="flex items-center font-bold bg-black text-slate-200 py-2 px-5 rounded-md text-lg hover:bg-slate-900 hover:scale-105 active:scale-110 duration-150 ">Get Started  </Link >
<Link href="https://nextra.site/docs" target="_blank" className="flex items-center font-bold bg-slate-100 border text-dark py-2 px-5 rounded-md text-lg hover:bg-slate-200 hover:scale-105 active:scale-110 duration-150 ">Nextra Docs  </Link >
</div>




    </div>
</section>
  )
}
export default index





