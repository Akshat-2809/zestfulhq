"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import s from "./Nav.module.css";

const LINKS = [
  { href: "/#write", label: "Write", section: "write" },
  { href: "/#isnt", label: "What it isn't", section: "isnt" },
  { href: "/#return", label: "Return", section: "return" },
  { href: "/#story", label: "The story", section: "story" },
  { href: "/contact", label: "Contact", section: null },
];
const SECTIONS = LINKS.flatMap((l) => l.section ?? []);

/** The page links. On the homepage, the underline follows the section being read. */
export function NavLinks() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [section, setSection] = useState(SECTIONS[0]);

  useEffect(() => {
    if (!home) return;
    let raf = 0;
    const check = () => {
      raf = 0;
      const line = window.innerHeight * 0.4;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setSection(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [home]);

  return (
    <nav className={s.links} aria-label="Main">
      {LINKS.map((l) => {
        const active = l.section ? home && section === l.section : pathname === l.href;
        return (
          <Link key={l.href} href={l.href} className={`${s.link} ${active ? s.active : ""}`} aria-current={active ? "true" : undefined}>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
