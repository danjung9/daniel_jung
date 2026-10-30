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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsMenuOpen(false);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const frameId = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });
    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setIsMenuOpen(false);
    }} className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--header-background)] backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between py-3 sm:h-18 sm:py-4">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-[0.03em] text-[var(--text)]"
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-[8px] bg-[var(--accent)] transition-transform duration-200 group-hover:scale-125"
          />
          <span>{siteConfig.name}</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? menuId : undefined}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] bg-[var(--surface)] text-[var(--text)] shadow-[0_10px_26px_rgba(16,24,32,0.06)] ring-1 ring-[var(--border)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-[8px] bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-[8px] bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-[8px] bg-current transition-transform duration-200 ${
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
              className="overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface-strong)] p-2 shadow-[0_20px_48px_rgba(25,35,46,0.08)] backdrop-blur-xl"
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
                      className={`mobile-nav-link rounded-[8px] px-4 py-3 text-base font-medium text-[var(--text-muted)] transition hover:bg-[var(--accent-soft)] hover:!text-[var(--text)] ${
                        current ? "bg-[var(--accent-soft)] !text-[var(--accent)]" : ""
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
