"use client";

import { useSyncExternalStore } from "react";
import { readMood, type Mood } from "./mood";

type State = {
  mood: Mood;
  focused: boolean;
  /** Length of what's been written; the corners hush only once there's something on the page. */
  length: number;
};

const initial: State = { mood: "still", focused: false, length: 0 };

let state = initial;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function update(next: Partial<State>) {
  state = { ...state, ...next };
  listeners.forEach((l) => l());
}

export function useRoom() {
  return useSyncExternalStore(subscribe, () => state, () => initial);
}

export function writeInRoom(text: string) {
  update({ mood: readMood(text), length: text.length });
}

export function setRoomFocus(focused: boolean) {
  update({ focused });
}
