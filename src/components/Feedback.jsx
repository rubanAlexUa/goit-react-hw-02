export default function Options({ rating, totalFeedback }) {
  return (
    <ul>
      <li>Good: {rating.good}</li>
      <li>Neutral: {rating.neutral}</li>
      <li>Bad: {rating.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>{Math.round((rating.good / totalFeedback) * 100)}%</li>
    </ul>
  );
}
