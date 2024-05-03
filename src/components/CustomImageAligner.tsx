import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
type Props = {
  url: string;
  alt: string;
  className?: string;
  aspectRatio?: number;
};
export function AspectRatioDemo({
  url,
  className,
  alt,
  aspectRatio = 16 / 9,
}: Props) {
  return (
    <AspectRatio ratio={aspectRatio} className={cn("bg-muted", className)}>
      <img
        src={url}
        alt="Photo by Drew Beamer"
        className="rounded-md h-full w-full object-cover"
      />
    </AspectRatio>
  );
}
