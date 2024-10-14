import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./App.tsx";
import "./index.css";
const container: HTMLElement | null = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={Router} />
    </StrictMode>
  );
}
