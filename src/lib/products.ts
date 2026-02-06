export interface MerchProduct {
  id: string;
  name: string;
  description: string;
  category: "scarf" | "hoodie" | "cap";
  externalUrl: string;
}

export const MERCH_PRODUCTS: MerchProduct[] = [
  {
    id: "merch-1",
    name: "VG Scarf",
    description: "Woven scarf with signature branding. Soft-touch finish.",
    category: "scarf",
    externalUrl: "https://leftkiss.com/",
  },
  {
    id: "merch-2",
    name: "VG Hoodie",
    description: "Heavyweight hoodie with front & back embroidery",
    category: "hoodie",
    externalUrl: "https://leftkiss.com/",
  },
  {
    id: "merch-3",
    name: "VG Cap",
    description: "Structured black cap with embroidered logo or reflective peak print.",
    category: "cap",
    externalUrl: "https://leftkiss.com/",
  },
];
