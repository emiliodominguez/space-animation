import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ShipProvider } from "./contexts";
import { App } from "./components";
import "./styles/main.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <StrictMode>
        <ShipProvider>
            <App />
        </ShipProvider>
    </StrictMode>
);

reportWebVitals();
