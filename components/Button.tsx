import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary:
    "bg-ink text-white hover:bg-graphite focus-visible:outline-ink shadow-sm",
  secondary:
    "border border-line bg-white text-ink hover:border-accent hover:text-accent focus-visible:outline-accent",
  ghost:
    "text-ink hover:bg-accentSoft hover:text-accent focus-visible:outline-accent"
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isFile = /\.[a-z0-9]+($|[?#])/i.test(href);
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${styles[variant]} ${className}`;

  if (isExternal || isFile) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
