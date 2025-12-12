import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import App from "./App";

const start = async () => {
  try {
    createRoot(document.getElementById("root")).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>,
    );
  } catch (err) {
    document.getElementById("root").innerText = "Boot failed: " + err.message;
    console.error(err);
  }
};

start();
