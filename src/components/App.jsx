import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import Notification from "./Notification";

function App() {
  const [rating, changeRating] = useState(() => {
    const goodLocaleStorage = window.localStorage.getItem("goodFeedback");
    const neutralLocaleStorage = window.localStorage.getItem("neutralFeedback");
    const badLocaleStorage = window.localStorage.getItem("badFeedback");
    return {
      good: Number(goodLocaleStorage) || 0,
      neutral: Number(neutralLocaleStorage) || 0,
      bad: Number(badLocaleStorage) || 0,
    };
  });
  useEffect(() => {
    window.localStorage.setItem("goodFeedback", rating.good);
    console.log("Good: " + rating.good);
  }, [rating.good]);
  useEffect(() => {
    window.localStorage.setItem("neutralFeedback", rating.neutral);
    console.log("Neutral: " + rating.neutral);
  }, [rating.neutral]);
  useEffect(() => {
    window.localStorage.setItem("badFeedback", rating.bad);
    console.log("Bad: " + rating.bad);
  }, [rating.bad]);

  const updateFeedBack = (feedbackType) => {
    changeRating({
      ...rating,
      [feedbackType]: rating[feedbackType] + 1,
    });
  };
  const resetRating = (totalFeedback) => {
    changeRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = rating.good + rating.neutral + rating.bad;
  return (
    <>
      <Description />
      <Options onClick={() => updateFeedBack("good")}>Good</Options>
      <Options onClick={() => updateFeedBack("neutral")}>Neutral</Options>
      <Options onClick={() => updateFeedBack("bad")}>Bad</Options>
      {totalFeedback > 0 && (
        <Options onClick={() => resetRating(totalFeedback)}> Reset </Options>
      )}
      {totalFeedback > 0 ? (
        <Feedback rating={rating} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
