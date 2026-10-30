import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-page relative flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-16 rounded-[4px] bg-[var(--text)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition-transform focus:translate-y-0 focus-visible:translate-y-0"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
