import { Shelf } from "./Shelf";

export function Return() {
  return (
    <section className="sec" id="return">
      <div className="wrap">
        <div className="rv stack">
          <span className="lab">Over time</span>
          <h2 className="h2">Write, reflect, and <em>return</em> to your thoughts.</h2>
        </div>
        <Shelf />
      </div>
    </section>
  );
}
