"use client";

import { useState } from "react";
import { MOODS, type Mood } from "@/lib/mood";
import s from "./Return.module.css";

const ENTRIES: { date: string; mood: Mood; title: string; body: string }[] = [
  { date: "12 Mar", mood: "restless", title: "Before the big conversation", body: "I keep rehearsing what I’ll say, and every version sounds wrong. Writing it here first so it stops circling." },
  { date: "28 Apr", mood: "heavy", title: "A slow, low Sunday", body: "Didn’t do much today. Felt far away from everything. Putting it down so I don’t carry it into Monday." },
  { date: "19 May", mood: "calm", title: "Rain on the balcony", body: "Sat outside while it rained. Nothing to fix, nothing to decide. I want to remember that this is possible." },
  { date: "07 Jul", mood: "warm", title: "It finally worked", body: "Months of trying and today it finally clicked. Reading March back, I can see how far this came." },
  { date: "22 Sep", mood: "still", title: "Reading old pages", body: "Went back through the year. Some of these thoughts I don’t recognise anymore. Some I still do." },
];

export function Shelf() {
  const [current, setCurrent] = useState(0);
  const entry = ENTRIES[current];
  const mood = MOODS[entry.mood];

  return (
    <div className={s.ret}>
      <div className={s.left}>
        <div className={s.shelf} role="group" aria-label="Past entries">
          {ENTRIES.map((e, i) => (
            <button type="button" key={e.date} className={`${s.entry} ${i === current ? s.on : ""}`} aria-pressed={i === current} onClick={() => setCurrent(i)}>
              <span className="cdot" style={{ background: MOODS[e.mood].dot }} />
              <span className={s.d}>{e.date}</span>
              <span className={s.t}>{e.title}</span>
            </button>
          ))}
        </div>
        <span className="ill">Illustration · sample entries</span>
      </div>
      <div className={s.reader} style={{ backgroundColor: mood.reader }}>
        {/* the key restarts the swap animation for each entry */}
        <div className={s.swap} key={current}>
          <span className="lab">{entry.date} · {mood.name}</span>
          <h3 className={s.title}>{entry.title}</h3>
          <p className={s.body}>{entry.body}</p>
        </div>
      </div>
    </div>
  );
}
