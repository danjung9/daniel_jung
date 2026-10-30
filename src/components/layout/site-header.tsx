"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SiteHeaderProps {
  isHome: boolean;
  paused: boolean;
  reducedMotion: boolean;
  onToggleMotion: () => void;
}

export function SiteHeader({ isHome, paused, reducedMotion, onToggleMotion }: SiteHeaderProps) {
  const pathname = usePathname();
  const closeMenu = (event: React.MouseEvent<HTMLAnchorElement>) => event.currentTarget.closest("nav")?.hidePopover();

  return (
    <header className={`home-menu${paused || reducedMotion ? " is-motion-paused" : ""}`}>
      <button className="home-menu-toggle" popoverTarget="site-navigation">
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
      <nav id="site-navigation" className="home-navigation" popover="auto" aria-label="Main">
        <div className="menu-link-list">
          <svg className="menu-branch" viewBox="0 0 48 156" aria-hidden="true">
            <path d="M28 26L18 78L31 130" />
            <circle cx="28" cy="26" r="2.5" />
            <circle cx="18" cy="78" r="2.5" />
            <circle cx="31" cy="130" r="2.5" />
          </svg>
          <Link href="/projects" aria-current={pathname.startsWith("/projects") ? "page" : undefined} onClick={closeMenu}><span>Projects</span></Link>
          <Link href={isHome ? "#bio" : "/#bio"} onClick={closeMenu}><span>About</span></Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenu}><span>Contact</span></Link>
        </div>
        <button className="field-motion-toggle" disabled={reducedMotion} onClick={onToggleMotion}>
          {reducedMotion ? "Motion reduced" : paused ? "Resume animation" : "Pause animation"}
        </button>
      </nav>
    </header>
  );
}
