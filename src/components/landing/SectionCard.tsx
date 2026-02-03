import Link from "next/link";
import type { ReactNode } from "react";

interface SectionCardProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function SectionCard({
  href,
  title,
  description,
  icon,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-surface p-8 transition-all hover:border-primary/50 hover:bg-surface-hover"
    >
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-text">{title}</h3>
      <p className="text-sm text-text-muted">{description}</p>
    </Link>
  );
}
