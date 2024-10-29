import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import Index from "./index.tsx";
import App from "./routes/App.tsx";
// TODO: Change the error

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Missing CLERK_PUBLISHABLE_KEY environment variable. Check your .env file."
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/app" element={<App />} />
          </Routes>
        </ClerkProvider>
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
);
