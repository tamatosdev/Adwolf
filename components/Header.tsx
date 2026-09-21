"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isLp = pathname.startsWith("/lp/");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (isLp) {
    return (
      <header className={`nav lp${solid ? " solid" : ""}`} id="nav">
        <div className="wrap">
          <Link href="/" aria-label="Adwolf home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Adwolf" width={181} height={71} />
          </Link>
          <ul>
            <li>
              <a
                className="pill"
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }

  const navLinks = [
    { href: "/work/", label: "Work" },
    { href: "/#make", label: "Make" },
    { href: "/build/", label: "Build" },
    { href: "/studio/", label: "Studio" },
    { href: "/blog/", label: "Blog" },
  ];

  function isActive(href: string) {
    if (href === "/#make") return false;
    return pathname === href || pathname.startsWith(href.replace(/\/$/, ""));
  }

  return (
    <header className={`nav${solid ? " solid" : ""}${open ? " open" : ""}`} id="nav">
      <div className="wrap">
        <Link href="/" aria-label="Adwolf home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Adwolf" width={181} height={71} />
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul id="navlist">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link className="pill" href="/contact/">
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
