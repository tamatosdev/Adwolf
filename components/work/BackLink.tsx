"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function BackLink() {
  const [href, setHref] = useState("/work/");

  useEffect(() => {
    const from = new URLSearchParams(window.location.search).get("from");
    if (from) setHref(`/work/?category=${encodeURIComponent(from)}`);
  }, []);

  return (
    <Link className="crumbs" href={href}>
      ← Back to work
    </Link>
  );
}