import { Blobs } from "./Blobs";
import { Pad } from "./Pad";
import s from "./Room.module.css";

export function Room() {
  return (
    <section className={s.room} id="write">
      <Blobs />
      <div className={`wrap ${s.rin}`}>
        <span className="lab in1">Zestful · Helping people understand themselves better</span>
        <h1 className={`${s.h1} in2`}>A private space to <em>process your thoughts.</em></h1>
        <Pad />
        <p className="lede" style={{ maxWidth: "60ch" }}>Write it out, and the environment quietly adapts to what you&apos;re expressing, helping you reflect along the way.</p>
        <div className={s.scrollcue} aria-hidden="true"><i />Read on</div>
      </div>
    </section>
  );
}
