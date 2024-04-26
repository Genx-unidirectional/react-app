import MiniNavbar from "@/components/mini/MiniNavbar";
import MiniSidebar from "@/components/mini/MiniSidebar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:h-screen w-full">
      <header className="fixed top-0 w-full z-50 bg-black text-white">
        <MiniNavbar />
      </header>
      <div className="flex">
        <div className="md:block hidden overflow-hidden relative min-h-screen  border-slate-500 bg-black flex-none w-56 lg:w-72 mt-[72.8px] border-r ">
          <MiniSidebar />
        </div>

        <div className="min-h-screen  flex-grow   bg-slate-900 ">
          {children}
        </div>
      </div>
    </div>
  );
}
export default layout;
