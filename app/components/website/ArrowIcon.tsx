type Direction = "up-right" | "down-left" | "down" | "left" | "turn-right";

/** Vector arrows avoid platform-dependent emoji glyphs. */
export default function ArrowIcon({ direction = "up-right" }: { direction?: Direction }) {
  const paths: Record<Direction, string> = {
    "up-right": "M5 19 19 5M5 5h14v14",
    "down-left": "M19 5 5 19M5 5v14h14",
    down: "M12 4v16m-7-7 7 7 7-7",
    left: "M20 12H4m7-7-7 7 7 7",
    "turn-right": "M5 4v12h15m-6-6 6 6-6 6",
  };
  return <svg className="arrow-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[direction]} /></svg>;
}
