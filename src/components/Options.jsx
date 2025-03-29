export default function Feedback({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
