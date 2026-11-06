import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/logo-light.svg"
        alt="Muhit Telecom — gadgets and mobile repair in Hili, Dinajpur"
        width={675}
        height={225}
        sizes="(min-width: 768px) 156px, 126px"
        unoptimized
        className="h-[42px] w-auto transition-transform duration-200 group-hover:scale-[1.02] sm:h-12 md:h-[50px]"
        priority
      />
    </Link>
  );
}
