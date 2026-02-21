"use client";

import { useEffect, useState } from "react";

const COOKIE_KEY = "vg_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "all");
    setVisible(false);
  }

  function necessary() {
    localStorage.setItem(COOKIE_KEY, "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-bg/90 backdrop-blur-md px-4 py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-muted">
          We use cookies to improve your experience. You can choose to accept all cookies or only the ones necessary for the site to function.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={necessary}
            className="rounded border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-primary hover:text-primary"
          >
            Necessary only
          </button>
          <button
            onClick={accept}
            className="rounded bg-primary px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-80"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
