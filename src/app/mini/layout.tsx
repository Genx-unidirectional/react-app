import MiniNavbar from "@/components/mini/MiniNavbar";
import MiniSidebar from "@/components/mini/MiniSidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen scrollbar-none md:h-screen w-full">
      <header className="fixed top-0 w-full z-50 bg-black text-white">
        <MiniNavbar />
      </header>
      <div className="flex relative scrollbar-none isolate w-full min-h-screen bg-slate-900">
        <div className="z-10 mt-[72.8px] h-screen isolate hidden md:block bg-black">
          <MiniSidebar />
        </div>

        <div className="min-h-screen md:h-screen overflow-hidden overflow-y-scroll isolate   flex-grow  z-50  scrollbar-none">
          {children}
        </div>
      </div>
    </div>
  );
}
export default layout;
