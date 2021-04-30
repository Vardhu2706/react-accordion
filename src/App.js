// Importing Helpers
import React, { useState } from "react";

// Importing Components/ Files
import data from "./data";
import SingleQuestion from "./Question";

// Functional Component
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

// Default Export
export default App;
