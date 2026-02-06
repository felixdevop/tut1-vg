import type { MerchProduct } from "@/lib/products";

interface IconProps {
  className?: string;
}

export function ScarfIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      {/* Flowing fabric / wave lines */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8c2-2 4 2 6 0s4 2 6 0 4 2 6 0"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12c2-2 4 2 6 0s4 2 6 0 4 2 6 0"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16c2-2 4 2 6 0s4 2 6 0 4 2 6 0"
      />
    </svg>
  );
}

export function HoodieIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      {/* Hoodie silhouette */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 3c-1 0-2.5.5-3.5 1.5S3 7 3 8v12h5v-6h8v6h5V8c0-1-.5-2.5-1.5-3.5S17 3 16 3c-1.5 0-2 1-4 1S9.5 3 8 3Z"
      />
      {/* Hood opening */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 3C10 5 10.5 7 12 7s2-2 2.5-4"
      />
    </svg>
  );
}

export function CapIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      {/* Cap profile silhouette */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 14c0-4 3.5-7 8-7s8 3 8 7"
      />
      {/* Brim */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 14h20"
      />
      {/* Crown detail */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7V5"
      />
    </svg>
  );
}

export function getCategoryIcon(
  category: MerchProduct["category"],
  className?: string
) {
  switch (category) {
    case "scarf":
      return <ScarfIcon className={className} />;
    case "hoodie":
      return <HoodieIcon className={className} />;
    case "cap":
      return <CapIcon className={className} />;
  }
}
