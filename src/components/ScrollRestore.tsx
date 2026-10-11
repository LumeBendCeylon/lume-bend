"use client";

import { useEffect, useLayoutEffect } from "react";

const KEY = "destinations-scroll-y";

export default function ScrollRestore() {
  // Save the scroll position when a destination card is clicked
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("/destinations/")) {
        sessionStorage.setItem(KEY, String(window.scrollY));
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // On return: hide the page, jump to the saved spot instantly, then show it
  useLayoutEffect(() => {
    const saved = sessionStorage.getItem(KEY);
    if (!saved) return;

    const y = Number(saved);
    const html = document.documentElement;
    const body = document.body;
    const prevBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.opacity = "0";

    let frames = 0;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      sessionStorage.removeItem(KEY);
      html.style.scrollBehavior = prevBehavior;
      body.style.opacity = "";
    };

    const restore = () => {
      if (done) return;
      window.scrollTo(0, y);
      frames++;
      const reached = Math.abs(window.scrollY - y) <= 2;
      // keep re-applying for a few frames so late layout changes can't undo it
      if (reached && frames > 8) {
        finish();
      } else if (frames < 90) {
        requestAnimationFrame(restore);
      } else {
        finish();
      }
    };

    restore();
    // safety: never leave the page hidden
    const safety = window.setTimeout(finish, 1500);

    return () => {
      window.clearTimeout(safety);
      finish();
    };
  }, []);

  return null;
}