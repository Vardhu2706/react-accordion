// Importing Helpers
import React from "react";

// Importing Components/ Files
import data from "./data";
import SingleQuestion from "./Question";

// Functional Component
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {data.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

// Default Export
export default App;
