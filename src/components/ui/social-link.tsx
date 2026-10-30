import Link from "next/link";
import { cn } from "../../lib/utils";

interface SocialLinkProps { label: string; href: string; className?: string; }
export function SocialLink({ label, href, className }: SocialLinkProps) {
  const external = href.startsWith("http");
  return <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cn("text-link", className)}>{label}</Link>;
}
