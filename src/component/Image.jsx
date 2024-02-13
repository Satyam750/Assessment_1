

const Image = ({res}) => {
  return (
    <div className=" h-screen w-full  flex justify-center items-center bg-purple-200 ">
    <div className="main w-[50vw] flex gap-14 border-[1vw] border-purple-300 p-[5vw] rounded-2xl ">
           <div className="image h-[10vw] w-[10vw]">
                 <img src={res.picture.large} alt="img"  className="rounded-2xl"/>
           </div>
           <div className="contact  h-[10vw] w-[30vw] flex flex-col gap-5">
                     <div className="flex gap-7">
                     <h1 className="font-medium text-[1.5vw]">{res.name.first}</h1>
                     <h1 className="font-medium text-[1.5vw]">{res.name.last}</h1>
                     </div>
                     <div>
                        <h1 className="capitalize font-medium text-[1.5vw] ">{res.gender}</h1>
                     </div>
                     <div>
                        <h1 className=" font-medium text-[1.5vw]">{res.phone}</h1>
                     </div>

           </div>
    </div>

    </div>
  )
}

export default Image