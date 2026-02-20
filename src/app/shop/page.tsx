import { MERCH_PRODUCTS } from "@/lib/products";
import MerchCard from "@/components/shop/MerchCard";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-black tracking-tight text-text">
          Merch
        </h1>
        <p className="text-text-muted">
          Browse the collection. All purchases handled on{" "}
          <a
            href="https://leftkiss.com/pages/violendgroove"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            leftkiss.com
          </a>
          .
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MERCH_PRODUCTS.map((product) => (
          <MerchCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
