"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../../data/site";
import { NavLink } from "../ui/nav-link";
import { Container } from "./container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--header-background)] backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between py-3 sm:h-18 sm:py-4">
        <Link
          href="/"
          className="whitespace-nowrap text-sm font-semibold tracking-[0.08em] text-[var(--text)]"
        >
          {siteConfig.name}
        </Link>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[var(--border)] bg-white text-[var(--text)] shadow-[0_8px_20px_rgba(25,35,46,0.05)] md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
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

        {isMenuOpen ? (
          <div className="absolute inset-x-0 top-full pt-3 md:hidden">
            <nav
              id={menuId}
              aria-label="Mobile"
              className="overflow-hidden border border-[var(--border)] bg-[var(--surface-strong)] p-2 shadow-[0_20px_48px_rgba(25,35,46,0.08)] backdrop-blur-xl"
            >
              <div className="grid gap-1">
                {navItems.map((item, index) => {
                  const current =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`mobile-nav-link border-l-2 border-transparent px-4 py-3 text-base font-medium text-[var(--text)] transition hover:!text-[var(--accent)] ${
                        current ? "!border-[var(--accent)] !text-[var(--accent)]" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
