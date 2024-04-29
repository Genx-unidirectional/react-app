function CardSkeleton() {
  return (
    <div className="col-span-1 csm:w-[365px] csm:mx-auto  md:col-span-2 2xl:col-span-4 place-content-center lg:col-span-5 flex max-md:mx-auto  justify-center items-center">
      <div className="  md:h-[412px] shadow-xl shadow-[#e29578] bg-white  text-black    h-[359px] md:w-80 2xl:w-96 w-[80%] rounded-lg flex flex-col  overflow-hidden items-center">
        <div className="md:h-96 w-full h-60   animate-pulse bg-gray-400"></div>
        <div className=" h-32 w-full animate-pulse bg-white"></div>
      </div>
    </div>
  );
}
export default CardSkeleton;

{
  /* <div className="col-span-1 csm:mx-auto csm:w-[365px] md:col-span-2 2xl:col-span-4 place-content-center lg:col-span-5 flex max-md:mx-auto  justify-center items-center"> */
}
