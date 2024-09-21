import { cn } from "@/lib/utils";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center">
      <MarketingImage
        src="/images/documents.png"
        srcDark="/images/documents-dark.png"
        alt="hero"
      />
      <MarketingImage
        src="/images/reading.png"
        srcDark="/images/reading-dark.png"
        alt="hero"
        className="hidden xl:block"
      />
    </div>
  );
}
export default Hero;

type MarketingImageProps = {
  src: string;
  srcDark: string;
  alt: string;
  className?: string;
};

const MarketingImage = ({
  src,
  srcDark,
  alt,
  className,
}: MarketingImageProps) => {
  return (
    <div
      className={cn(
        "relative size-[300px] sm:size-[350px] md:size-[400px]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain dark:hidden"
        sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
      />
      <Image
        src={srcDark}
        alt={alt}
        fill
        className="hidden object-contain dark:block"
        sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
      />
    </div>
  );
};
