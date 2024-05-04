function CardSkeleton() {
  return (
    <div className="col-span-1 csm:w-[365px] csm:mx-auto  md:col-span-2 2xl:col-span-4 place-content-center lg:col-span-5 flex max-md:mx-auto  justify-center items-center">
      <div className="  md:h-[412px] shadow-lg shadow-slate-700 bg-white  text-black    h-[359px] md:w-80 2xl:w-96 w-[80%] rounded-lg flex flex-col  overflow-hidden items-center">
        <div className="md:h-96 w-full h-60   animate-pulse bg-gray-400"></div>
        <div className=" h-32 w-full flex flex-col gap-2 p-2 animate-pulse bg-white">
          <div className="w-1/3 gap-1 flex flex-col">
            <div className="h-5 animate-pulse rounded-3xl bg-gray-300"></div>
            <div className="h-5 animate-pulse rounded-3xl bg-gray-300"></div>
          </div>
          <div className="flex items-start  justify-between">
            <div className="flex w-1/3 gap-1 flex-col">
              <div className="h-5 animate-pulse rounded-3xl bg-gray-300"></div>
              <div className="h-5 animate-pulse rounded-3xl bg-gray-300"></div>
            </div>
            <div className="w-1/3 animate-pulse h-5 rounded-3xl bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardSkeleton;

{
  /* <div className="col-span-1 csm:mx-auto csm:w-[365px] md:col-span-2 2xl:col-span-4 place-content-center lg:col-span-5 flex max-md:mx-auto  justify-center items-center"> */
}
