"use client";

import { useState } from "react";
import { MOODS, TRY_LINES } from "@/lib/mood";
import { setRoomFocus, useRoom, writeInRoom } from "@/lib/moodStore";
import s from "./Room.module.css";

/** The writing pad. What's typed stays in this component's state: it is never stored or sent. */
export function Pad() {
  const { mood, focused } = useRoom();
  const [text, setText] = useState("");
  const write = (value: string) => {
    setText(value);
    writeInRoom(value);
  };

  return (
    <>
      <div className={`${s.pad} in3 ${focused ? s.on : ""}`}>
        <label htmlFor="pad">Write anything. The room will follow.</label>
        <textarea
          id="pad"
          placeholder="What's on your mind right now?"
          value={text}
          onChange={(e) => write(e.target.value)}
          onFocus={() => setRoomFocus(true)}
          onBlur={() => setRoomFocus(false)}
        />
        <div className={s.padfoot}>
          <div className={s.moodline} aria-live="polite">
            <span className="cdot" style={{ background: MOODS[mood].dot }} />
            <span>The room feels</span>
            <b>{MOODS[mood].name}</b>
          </div>
          <span className="ill">Illustration · a sketch of the idea</span>
        </div>
      </div>
      <div className={s.tries}>
        <span className="lab" style={{ marginRight: 6 }}>Try a line</span>
        {TRY_LINES.map((t) => (
          <button type="button" className={s.try} key={t.label} onClick={() => write(t.text)}>{t.label}</button>
        ))}
      </div>
    </>
  );
}
