import { createRoot } from "react-dom/client";
import App from "./App";

const start = async () => {
  try {
    createRoot(document.getElementById("root")).render(<App />);
  } catch (err) {
    document.getElementById("root").innerText = "Boot failed: " + err.message;
    console.error(err);
  }
};

start();
