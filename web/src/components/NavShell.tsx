"use client";

import { useEffect, useState } from "react";
import { useRoom } from "@/lib/moodStore";
import s from "./Nav.module.css";

/** Client part of the nav: hushes it while writing, and adds its hairline once the page has scrolled. */
export function NavShell({ children }: { children: React.ReactNode }) {
  const { focused, length } = useRoom();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.nav} ${focused && length > 0 ? s.hush : ""} ${scrolled ? s.scrolled : ""}`}>
      {children}
    </header>
  );
}
