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
    <div className="h-screen overflow-hidden relative w-full">
      <img
        src="/images/hero2.jpg"
        alt="hero-page-image"
        className="lg:w-full w-full object-cover top-0 left-0 absolute z-10 h-full"
      />
      <section
        id="mentor"
        className="flex mx-auto  text-white relative justify-center max-w-4xl flex-col h-screen items-center  gap-10  pt-20  px-3 sm:px-4 md:px-6  "
      >
        <h2 className="text-4xl bg-gradient-to-b from-white to-gray-500   bg-clip-text text-transparent drop-shadow-glow z-20 md:text-5xl absolute top-[20%] w-full text-center font-bold">
          What My Mentor Says.
        </h2>
        <div className="flex justify-center  w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards items={items} direction="right" speed="fast" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Mentor;
