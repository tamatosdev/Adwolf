"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { href: "/lp/ai-video-ads/", label: "AI video ads" },
  { href: "/lp/cgi-product-films/", label: "CGI product films" },
  { href: "/lp/2d-animation/", label: "2D animation" },
  { href: "/lp/websites-and-apps/", label: "Websites and apps" },
  { href: "/lp/odoo-erp/", label: "Odoo ERP" },
];

const studio = [
  { href: "/work/", label: "Work" },
  { href: "/build/", label: "Build" },
  { href: "/studio/", label: "About the studio" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

function FooterInner() {
  const year = new Date().getFullYear();
  return (
    <div className="foot-base" style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>
      <span>&copy; {year} Adwolf</span>
      <span>
        <Link href="/privacy/">Privacy policy</Link>
      </span>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isLp = pathname.startsWith("/lp/");
  const year = new Date().getFullYear();

  if (isLp) {
    return (
      <footer className="foot">
        <div className="wrap">
          <FooterInner />
        </div>
      </footer>
    );
  }

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Adwolf" width={181} height={71} />
            <p>
              AI video, animation, CGI and software from one studio in Karachi. Working with
              brands in the US, the GCC and Pakistan.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              {studio.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/your-page" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@yourdomain.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>&copy; {year} Adwolf. All rights reserved.</span>
          <span>
            <Link href="/privacy/">Privacy policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
