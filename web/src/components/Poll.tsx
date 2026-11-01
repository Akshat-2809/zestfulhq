import { ACCENT } from "@/lib/site";
import { ScrollTrigger } from "./ScrollTrigger";
import s from "./Poll.module.css";

const BARS = [
  { label: "Notes app", value: 40, color: ACCENT },
  { label: "WhatsApp drafts", value: 30, color: "#3E8F89" },
  { label: "Paper / journal", value: 20, color: "#8FC8C2" },
  { label: "ChatGPT / AI tools", value: 10, color: "#E6D59F" },
];

export function Poll() {
  return (
    <section className="sec">
      <ScrollTrigger className={`wrap ${s.poll}`} activeClassName={s.go}>
        <div className="rv stack">
          <span className="lab">When your mind feels messy</span>
          <h2 className="h2">Where do you <em>actually</em> go to write things out?</h2>
          <p className="lede">We asked. Most people reach for whatever is nearest: a notes app, a WhatsApp draft. Zestful is being built for that moment.</p>
        </div>
        <div className={s.side}>
          <div className={s.bars}>
            {BARS.map((b) => (
              <div className={s.prow} key={b.label}>
                <span>{b.label}</span>
                <div className={s.track}>
                  <div className={s.fill} style={{ "--w": `${b.value * 2.2}%`, background: b.color } as React.CSSProperties} />
                </div>
                <b>{b.value}%</b>
              </div>
            ))}
          </div>
          <span className="ill">LinkedIn poll by the founder · May 2026 · 10 votes</span>
        </div>
      </ScrollTrigger>
    </section>
  );
}
