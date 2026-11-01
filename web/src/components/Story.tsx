import Image from "next/image";
import founderPhoto from "@/assets/founder/muskaan-sharma.jpg";
import { FOUNDER_LINKEDIN, FOUNDER_NAME } from "@/lib/site";
import { ScrollTrigger } from "./ScrollTrigger";
import s from "./Story.module.css";

export function Story() {
  return (
    <section className={`sec ${s.sec}`} id="story">
      <ScrollTrigger className={`wrap ${s.story}`} activeClassName={s.go}>
        <div>
          <div className={s.clip} aria-hidden="true">
            <div className={s.mast}><span>The Morning Paper</span><span>Page 7</span></div>
            <div className={s.cols}>
              A short column on habits of the mind, and on taking a moment each day for{" "}
              <span className={s.circled}>
                introspection
                <svg viewBox="0 0 200 60" preserveAspectRatio="none"><path d="M100 4 C 40 2, 6 18, 8 32 C 10 50, 70 58, 120 56 C 176 54, 196 40, 192 24 C 188 8, 140 2, 80 6" /></svg>
              </span>
              , written in plain words, to the side of the day&apos;s bigger news, in a font small enough to miss.
            </div>
          </div>
          <div className={s.dict}>
            <b>in·tro·spec·tion</b> <span className={s.ph}>noun</span>
            <p>The examination of one&apos;s own thoughts and feelings.</p>
          </div>
        </div>
        <div className={s.telling}>
          <span className="lab">Where it began</span>
          <p className="lede">At 13, Muskaan found a word in the newspaper, ran to the dictionary, and then asked her sister:</p>
          <p className={s.q}>“Why is there no tool for introspection?”</p>
          <p className="lede">She ended the conversation with: “Someone should build something like that.” That memory became the first seed of Zestful. At first she called it Smile, the English meaning of her name. That one was already taken.</p>
          <div className={s.founder}>
            <Image className={s.photo} src={founderPhoto} alt={FOUNDER_NAME} width={96} height={96} sizes="96px" placeholder="blur" />
            <div className={s.who}>
              <span className={s.name}>{FOUNDER_NAME}</span>
              <span className="lab">Founder · Gurugram</span>
              <a className={s.linkedin} href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label={`${FOUNDER_NAME} on LinkedIn (opens in a new tab)`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
}
