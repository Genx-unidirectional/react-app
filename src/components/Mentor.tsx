"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const items: { quote: string; name: string; title: string }[] = [
  {
    quote: "Ganesh is a frontend engineer who can learn while working",
    name: "Yash Gaikwad,",
    title: "5+ yr experience frontend software engineer",
  },
];
function Mentor() {
  return (
    <section
      id="mentor"
      className="flex mx-auto  text-white relative justify-center max-w-4xl flex-col h-screen items-center  gap-10  pt-20 scroll-mt-12 px-3 sm:px-4 md:px-6  "
    >
      <h2 className="text-4xl  md:text-5xl absolute top-[20%] w-full text-center font-bold">
        What My Mentor Says.
      </h2>
      <div className="flex justify-center  w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={items} direction="right" speed="fast" />
        </div>
      </div>
    </section>
  );
}
export default Mentor;
