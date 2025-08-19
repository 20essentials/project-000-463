import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      fontFamily:
        "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
    },
    "*,*::after,*::before": {
      boxSizing: "inherit",
    },
    a: {
      WebkitTapHighlightColor: "transparent",
    },
    html: {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "transparent transparent",
    },
    body: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      placeContent: "center",
      overflow: "hidden",
      backgroundColor: "#000",
    },
  },
  containerLoader: {
    width: "300px",
    height: "300px",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "perspective(500px) rotateX(60deg)",
    "@media (width <= 1111px)": {
      zoom: "0.7",
    },
  },
  aro: {
    position: "absolute",
    inset: "calc(var(--s) * 10px)",
    boxShadow: "inset 0 0 80px #ba55d388",
    clipPath:
      "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
    animationName: {
      "0%,100%": {
        transform: "translateZ(-100px) rotate(0deg)",
      },
      "50%": {
        transform: "translateZ(100px) rotate(90deg)",
      },
    },
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "both",
    animationDelay: "calc(var(--s) * -0.1s)",
  },
});

function App() {
  return (
    <aside {...stylex.props(styles.containerLoader)}>
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} {...stylex.props(styles.aro)} style={{ "--s": i }} />
      ))}
    </aside>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
