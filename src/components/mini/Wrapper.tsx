import { cn } from "@/lib/utils";

function Wrapper({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "lg:w-2/5 sm:w-1/2 w-4/5 bg-white text-black rounded-lg border border-white p-2",
        className
      )}
    >
      {children}
    </div>
  );
}
export default Wrapper;
