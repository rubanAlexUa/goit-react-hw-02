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
    window.localStorage.setItem("neutralFeedback", rating.neutral);
    window.localStorage.setItem("badFeedback", rating.bad);
  }, [rating]);
  const updateFeedBack = (feedbackType) => {
    changeRating({
      ...rating,
      [feedbackType]: rating[feedbackType] + 1,
    });
  };

  const resetRating = () => {
    console.log("hello");
    changeRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = rating.good + rating.neutral + rating.bad;
  const positiveFeedback = Math.round((rating.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        onClick={updateFeedBack}
        totalFeedback={totalFeedback}
        resetFunc={resetRating}
      />
      {totalFeedback > 0 ? (
        <Feedback
          rating={rating}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
