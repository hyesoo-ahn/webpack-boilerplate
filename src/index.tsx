import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./styles/nav.css";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(<App />);
