import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { NavShell } from "./NavShell";
import s from "./Nav.module.css";

/** Name on the left, sections in the middle, the one action on the right. Hushes while you write. */
export function Nav() {
  return (
    <NavShell>
      <div className={s.navin}>
        <Link className={s.wm} href="/#write" aria-label="Zestful home">Zestful</Link>
        <NavLinks />
        <Link className={`btn btn-ink ${s.cta}`} href="/#join">Build with us <span className="arr">→</span></Link>
      </div>
    </NavShell>
  );
}
