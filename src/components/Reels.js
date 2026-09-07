import { useEffect, useRef } from "react";
import { reels } from "../data/reels";
import ReelsItem from "./ReelsItem";

function Reels() {
  const stripRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      if (pausedRef.current || document.hidden) return;

      const card = strip.querySelector(".reel-item");
      const step = card ? card.offsetWidth + 2 : 300;
      const atEnd = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 6;

      if (atEnd) strip.scrollTo({ left: 0, behavior: "smooth" });
      else strip.scrollBy({ left: step, behavior: "smooth" });
    }, 2000);

    return () => clearInterval(id);
  }, []);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <section id="reel" className="section">
      <div className="kicker">
        <span className="kicker-num">03</span>
        <span>Reel</span>
      </div>
      <h2>On the job</h2>

      <div
        className="reel-strip"
        ref={stripRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
        {reels.map(reel => (<ReelsItem key={reel.title_image} {...reel} />))}
      </div>
    </section>
  );
}

export default Reels;
