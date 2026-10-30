import { SiteFooter } from "@/components/layout/site-footer";
import Link from "next/link";
import { PerceptionField } from "@/components/perception-field";
import { siteConfig } from "@/data/site";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <PerceptionField isHome={false}>
    <div className="portfolio-page relative flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-16 rounded-[4px] bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition-transform focus:translate-y-0 focus-visible:translate-y-0"
      >
        Skip to main content
      </a>
      <div className="portfolio-header">
        <Link href="/" className="portfolio-home-link">{siteConfig.name}</Link>
      </div>
      <main id="main-content" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
    </PerceptionField>
  );
}
