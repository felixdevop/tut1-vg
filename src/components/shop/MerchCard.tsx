import type { MerchProduct } from "@/lib/products";
import { getCategoryIcon } from "@/components/icons/MerchIcons";

interface MerchCardProps {
  product: MerchProduct;
}

export default function MerchCard({ product }: MerchCardProps) {
  return (
    <a
      href={product.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-xl border border-border bg-surface transition-all hover:border-primary/50 hover:bg-surface-hover"
    >
      {/* Gradient placeholder with icon */}
      <div className="flex aspect-square items-center justify-center rounded-t-xl bg-gradient-to-br from-white/5 to-white/10">
        <div className="text-text-muted transition-colors group-hover:text-primary">
          {getCategoryIcon(product.category, "h-20 w-20")}
        </div>
      </div>

      <div className="p-6">
        <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-text-muted">
          {product.category}
        </span>
        <h3 className="mb-1 text-lg font-bold text-text">{product.name}</h3>
        <p className="mb-4 text-sm text-text-muted">{product.description}</p>

        <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-black transition-opacity group-hover:opacity-90">
          Buy on leftkiss
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
