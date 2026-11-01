/** The room's moods and the small word list that picks one. Runs only in the browser: nothing typed is sent anywhere. */
export type Mood = "still" | "calm" | "warm" | "heavy" | "restless";

export const MOODS: Record<Mood, { name: string; c: [string, string, string]; dot: string; reader: string }> = {
  still: { name: "still", c: ["#E3F1EF", "#F6F0DC", "#EAF4F2"], dot: "#8FC8C2", reader: "#EEF6F4" },
  calm: { name: "calm", c: ["#CBE6E2", "#DDEFEC", "#BFE0DB"], dot: "#5DB1AB", reader: "#DDEFEC" },
  warm: { name: "warm", c: ["#F3E5BC", "#F8EFD2", "#EEE0B2"], dot: "#D2BC78", reader: "#F8F0D8" },
  heavy: { name: "heavy", c: ["#AFCFCB", "#C4DCD9", "#A6C7C3"], dot: "#3E8F89", reader: "#D3E5E2" },
  restless: { name: "restless", c: ["#BFE3DE", "#F1E2B0", "#A9D6CF"], dot: "#2F7F79", reader: "#E8F1E3" },
};

const LEXICON: Record<Exclude<Mood, "still">, string[]> = {
  calm: ["calm", "quiet", "peaceful", "peace", "rest", "slow", "breathe", "okay", "still", "settled", "gentle", "soft", "clear"],
  warm: ["grateful", "happy", "excited", "love", "proud", "glad", "hope", "hopeful", "thankful", "joy", "finally", "smile", "good"],
  heavy: ["sad", "tired", "lonely", "heavy", "lost", "cry", "crying", "hurt", "miss", "empty", "low", "exhausted", "alone"],
  restless: ["anxious", "worried", "nervous", "overthinking", "stress", "stressed", "scared", "afraid", "racing", "restless", "deadline", "angry", "frustrated", "messy"],
};

export const TRY_LINES = [
  { label: "Overthinking tomorrow", text: "I keep overthinking tomorrow. My head feels messy and I can’t slow it down." },
  { label: "A quiet win", text: "Something small went right today and I feel quietly proud. Grateful, actually." },
  { label: "A heavy week", text: "This week felt heavy. I’m tired, and I miss feeling like myself." },
  { label: "Just breathing", text: "Sat by the window for a while. Slow morning, calm and still." },
];

/** The mood with the most matching words. A tie goes to whichever matched last. */
export function readMood(text: string): Mood {
  const words = text.toLowerCase().replace(/[’']/g, "").split(/[^a-z]+/);
  const moods = Object.keys(LEXICON) as Exclude<Mood, "still">[];
  const score = { calm: 0, warm: 0, heavy: 0, restless: 0 };
  let last: Mood | null = null;
  for (const word of words) {
    for (const m of moods) {
      if (LEXICON[m].includes(word)) {
        score[m] += 1;
        last = m;
      }
    }
  }
  let best: Mood = "still";
  let top = 0;
  for (const m of moods) {
    if (score[m] > top || (score[m] === top && top > 0 && m === last)) {
      best = m;
      top = score[m];
    }
  }
  return best;
}
