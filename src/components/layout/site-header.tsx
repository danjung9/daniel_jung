"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#bio", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="portfolio-header">
      <Link href="/" className="portfolio-home-link">{siteConfig.name}</Link>
      <div className="home-menu">
        <button className="home-menu-toggle" popoverTarget="portfolio-navigation">
          <svg className="menu-constellation" viewBox="0 0 32 32" aria-hidden="true">
            <g className="menu-orbit">
              <path className="menu-icon-path" d="M7 21L18 8L26 22" />
              <circle className="menu-point-one" cx="7" cy="21" r="1.9" />
              <circle className="menu-point-two" cx="18" cy="8" r="2.2" />
              <circle className="menu-point-three" cx="26" cy="22" r="1.7" />
            </g>
          </svg>
          <span>Menu</span>
        </button>
        <nav id="portfolio-navigation" className="home-navigation" popover="auto" aria-label="Main">
          <div className="menu-link-list">
            <svg className="menu-branch" viewBox="0 0 48 208" aria-hidden="true">
              <path d="M28 26L18 78L31 130L22 182" />
              <circle cx="28" cy="26" r="2.5" />
              <circle cx="18" cy="78" r="2.5" />
              <circle cx="31" cy="130" r="2.5" />
              <circle cx="22" cy="182" r="2.5" />
            </svg>
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href}
                aria-current={(href === "/" ? pathname === href : pathname.startsWith(href)) ? "page" : undefined}
                onClick={event => event.currentTarget.closest("nav")?.hidePopover()}>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
