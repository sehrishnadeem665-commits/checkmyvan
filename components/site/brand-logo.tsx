import { ShieldCheck } from 'lucide-react';

type BrandLogoProps = {
  variant?: 'light' | 'dark';
};

export function BrandLogo({ variant = 'light' }: BrandLogoProps) {
  const isLight = variant === 'light';

  return (
    <span className="inline-flex items-center gap-2 sm:gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary shadow-md shadow-primary/25 sm:h-10 sm:w-10 sm:rounded-xl">
        <ShieldCheck
          aria-hidden="true"
          className="h-5 w-5 text-white sm:h-6 sm:w-6"
          strokeWidth={1.8}
        />
      </span>
      <span className="flex items-center leading-none">
        <span
          className={`whitespace-nowrap text-[18px] font-extrabold tracking-[-0.055em] sm:text-[22px] lg:text-[25px] ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          CheckMy<span className="text-primary">Van</span>
        </span>
      </span>
    </span>
  );
}
