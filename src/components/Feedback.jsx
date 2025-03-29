export default function Options({ rating, totalFeedback, positiveFeedback }) {
  return (
    <ul>
      <li>Good: {rating.good}</li>
      <li>Neutral: {rating.neutral}</li>
      <li>Bad: {rating.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>{positiveFeedback}%</li>
    </ul>
  );
}
