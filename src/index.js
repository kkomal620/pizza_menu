import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Pizza Menugit</h1>;
}
// for React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
//React.render(<App />);
