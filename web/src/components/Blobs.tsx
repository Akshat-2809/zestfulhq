"use client";

import { MOODS } from "@/lib/mood";
import { useRoom } from "@/lib/moodStore";
import s from "./Room.module.css";

export function Blobs() {
  const { mood } = useRoom();
  const [c1, c2, c3] = MOODS[mood].c;
  return (
    <>
      <div className={`${s.blob} ${s.b1}`} style={{ backgroundColor: c1 }} aria-hidden="true" />
      <div className={`${s.blob} ${s.b2}`} style={{ backgroundColor: c2 }} aria-hidden="true" />
      <div className={`${s.blob} ${s.b3}`} style={{ backgroundColor: c3 }} aria-hidden="true" />
    </>
  );
}
