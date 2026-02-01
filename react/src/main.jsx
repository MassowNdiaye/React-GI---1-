import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BasicInfo from "./App"; //Importing BasicInfo from App.jsx default allow me to rename it 

//Render root fron index.html
createRoot(document.getElementById("root")).render(
  // StrictMode -> Allow me to detects unexpected side effets (catch early bugs)
  <StrictMode>
    <BasicInfo />
  </StrictMode>,
);
