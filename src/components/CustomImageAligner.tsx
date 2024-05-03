import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
type Props = {
  url: string;
  alt: string;
  className?: string;
  aspectRatio?: number;
};
export default function CustomImageAligner({
  url,
  className,
  alt,
  aspectRatio = 16 / 9,
}: Props) {
  return (
    <AspectRatio ratio={aspectRatio} className="bg-muted">
      <img
        src={url}
        alt="Photo by Drew Beamer"
        className={cn("rounded-md h-full w-full object-cover", className)}
      />
    </AspectRatio>
  );
}
