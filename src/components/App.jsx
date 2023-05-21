// import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
// import { Section } from "./Section/Section";
// import { Notification } from "./Notification/Notification";


export const App = () => {
  return (
    <div>
      {/* 
      <Section title="Please leave feedback">
      </Section>
      <Notification />
      <FeedbackOptions 
      />
    */}
      <Statistics 
      good={0}
      neutral={0}
      bad={0}
      total={0}
      positivePercentage={0}
      /> 
    </div>
  );
};
