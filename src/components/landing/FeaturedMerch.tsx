import Image from "next/image";
import { MERCH_PRODUCTS } from "@/lib/products";
import { getCategoryIcon } from "@/components/icons/MerchIcons";

export default function FeaturedMerch() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-black tracking-tight text-text">
          Merchandise
        </h2>
        <p className="text-text-muted">
          Available via{" "}
          <a
            href="https://leftkiss.com/pages/violendgroove"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            leftkiss
          </a>
          .
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {MERCH_PRODUCTS.map((product) => (
          <a
            key={product.id}
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border bg-surface transition-all hover:border-primary/50 hover:bg-surface-hover"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-xl bg-gradient-to-br from-white/5 to-white/10">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-text-muted transition-colors group-hover:text-primary">
                    {getCategoryIcon(product.category, "h-16 w-16")}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="mb-1 text-lg font-bold text-text">
                {product.name}
              </h3>
              <p className="mb-4 text-sm text-text-muted">
                {product.description}
              </p>
              <span className="text-sm font-medium text-primary">
                Browse on leftkiss &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://leftkiss.com/pages/violendgroove"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
        >
          Shop All on leftkiss
        </a>
      </div>
    </section>
  );
}
