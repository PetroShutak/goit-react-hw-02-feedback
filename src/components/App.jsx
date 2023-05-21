import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (option) => {
    setShowNotification(true);
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1
    }));
  };

  const { good, neutral, bad } = feedback;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + neutral + bad}
        positivePercentage={Math.round((good / (good + neutral + bad)) * 100)}
      />
      {showNotification && <Notification message="Дякуємо за ваш відгук!" />}
    </div>
  );
};

