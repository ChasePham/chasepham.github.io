import { reels } from "../data/reels";
import ReelsItem from "./ReelsItem";
function Reels() {
  return (
    <section id="reel" className="section">
      <div className="kicker">
        <span className="kicker-num">03</span>
        <span>Reel</span>
      </div>
      <h2>On the job</h2>
      {
        reels.map(reel => (<ReelsItem key={reel.title_image} {...reel} />))
      }
    </section>
  );
}

export default Reels;
