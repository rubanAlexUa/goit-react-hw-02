import Notification from "./Notification";

export default function Feedback({
  rating,
  totalFeedback,
  onClick,
  resetFunc,
}) {
  return (
    <div>
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFunc}> Reset </button>}
    </div>
  );
}
