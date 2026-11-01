import { ScrollTrigger } from "./ScrollTrigger";
import s from "./Isnt.module.css";

const WORDS = ["Advice.", "Feeds.", "Social pressure.", "Instant solutions.", "Productivity hacks.", "Social optimisation."];

export function Isnt() {
  return (
    <ScrollTrigger as="section" className={s.isnt} activeClassName={s.go} id="isnt">
      <div className="wrap">
        <span className="lab">What Zestful isn&apos;t</span>
        <div className={s.words}>
          {WORDS.map((w) => <span className={s.word} key={w}>{w}</span>)}
        </div>
        <p className={s.left}>Designed to be calm and non-intrusive. Just you, your words, and a place to put them.</p>
      </div>
    </ScrollTrigger>
  );
}
