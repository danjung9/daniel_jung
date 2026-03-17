"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../../data/site";
import { NavLink } from "../ui/nav-link";
import { Container } from "./container";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[rgba(246,243,238,0.82)] backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.08em] text-[var(--text)] focus-visible:outline-none"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-1" aria-label="Main">
          <NavLink href="/" current={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/projects" current={pathname.startsWith("/projects")}>
            Projects
          </NavLink>
          <NavLink href="/about" current={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/contact" current={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
