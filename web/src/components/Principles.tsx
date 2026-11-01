import s from "./Principles.module.css";

const PRINCIPLES = [
  { n: "01", title: "AI as a tool, not a substitute.", body: "Built with a strong belief in using AI thoughtfully and responsibly." },
  { n: "02", title: "A question about inner life.", body: "Not a platform for instant solutions, productivity hacks or social optimisation." },
  { n: "03", title: "Built through lived iteration.", body: "Not from templates or borrowed best practices. Some categories don't reveal themselves upfront." },
];

export function Principles() {
  return (
    <section className="sec" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="rv stack">
          <span className="lab">How it&apos;s being built</span>
          <h2 className="h2">Slowly, and <em>on purpose.</em></h2>
        </div>
        <div className={`${s.prin} rv`}>
          {PRINCIPLES.map((p) => (
            <div className={s.pc} key={p.n}>
              <span className={s.n}>{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
