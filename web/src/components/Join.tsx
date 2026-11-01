import { CONTACT_EMAIL } from "@/lib/site";
import { EarlyAccess } from "./EarlyAccess";
import s from "./Join.module.css";

export function Join() {
  return (
    <section className="sec" id="join">
      <div className={`wrap ${s.inner}`}>
        <div className="rv stack">
          <span className="lab">Come closer</span>
          <h2 className="h2">Build it, or <em>be first</em> to write in it.</h2>
        </div>
        <div className={s.join}>
          <div className={`${s.card} ${s.dark}`}>
            <span className="lab">Looking for a co-founder</span>
            <h3 className={s.title}>Someone who has built from 0<span className="arr">→</span>1 before.</h3>
            <p>An ex-founder, an early-stage builder, or someone who has genuinely owned and shipped something from the ground up. Not a predefined role: someone who wants to take a bet on the problem, build, experiment, talk to users, and figure out product and distribution together.</p>
            <a className={`btn ${s.write}`} href={`mailto:${CONTACT_EMAIL}?subject=Co-founder`}>Write to Muskaan</a>
          </div>
          <EarlyAccess />
        </div>
      </div>
    </section>
  );
}
