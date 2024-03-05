import Button from "../components/Button"

function Home() {
  
    return (
        <div className="bg-black bg-opacity-40 sm:p-12  p-4 rounded-xl ">
            <div className="sm:grid sm:grid-cols-4 sm:grid-rows-2  grid-flow-row ">
                <section className=" sm:self-center flex justify-center mt-8 sm:mt-0 sm:row-span-2 sm:col-span-2 ">
                    <img src="./Foto-small.jpg" className="h-auto max-[376px]:w-60 w-80 xl:w-96 rounded-lg " alt="Closeup of Martina with a blurred background, she's smiling subtly"/>
                </section>
                <section className="max-[376px]:text-sm text-center text-stone-200 font-dmsans  grid-flow-col sm:col-span-2 sm:align-middle sm:row-span-2 sm:items-center sm:justify-between sm:self-center">
                    <h1 className="max-[376px]:text-lg text-2xl  mt-5 ">Ahoj!</h1>
                    {/* <h1 className="mt-4 text-xl">I&apos;m Martina</h1>
                    <h1 className="mt-2  sm:w-20% flex justify-evenly align-middle">
                    <span className="px-2 uppercase text-xl mr-2 font-bold">Frontend</span> and <span className="ml-2 px-2 uppercase text-xl mr-2 font-bold">Fullstack</span> 
                    </h1>
                <h1 className="mt-2 text-xl">developer</h1> */}
                    <h1 className=" sm:p-10 mt-4 mb-6">My name is <span className="font-semibold ">Martina</span>. I&apos;m a <span className="font-semibold capitalise">FULLSTACK </span> 
                    Web Developer. I have a high enthusiasm for coding. This is a start of a new journey and I can&apos;t wait!</h1>
                    <Button>CV</Button>
                    
                </section>

            </div>
        </div>
    )
  }
  
  export default Home
  