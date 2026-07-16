import { type CaseType, convertCase } from "../lib/case-converter";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends an analytics event if GA4 is loaded (no-op otherwise, e.g. ad blockers or gaId unset)
 */
function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

/**
 * Swaps "Ctrl" shortcut hints for the Mac "⌘" symbol on Apple platforms
 */
function updateShortcutHintsForMac() {
  const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
  if (!isMac) return;

  ["shortcut-convert", "shortcut-copy"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = el.textContent?.replace("Ctrl", "⌘") ?? el.textContent;
    }
  });
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeToolConverter();
  });
}

function initializeToolConverter() {
  const form = document.getElementById("tool-form") as HTMLFormElement;
  const inputText = document.getElementById(
    "input-text",
  ) as HTMLTextAreaElement;
  const caseTypeSelect = document.getElementById(
    "case-type",
  ) as HTMLSelectElement;
  const outputEl = document.getElementById("output") as HTMLDivElement;
  const charCountEl = document.getElementById("char-count") as HTMLSpanElement;
  const copyButton = document.getElementById(
    "copy-button",
  ) as HTMLButtonElement;
  const copyText = document.getElementById("copy-text") as HTMLSpanElement;

  if (!form || !outputEl) {
    console.error("Required elements not found");
    return;
  }

  function convert() {
    const result = convertCase({
      text: inputText.value,
      caseType: caseTypeSelect.value as CaseType,
    });
    outputEl.textContent = result;
    charCountEl.textContent = `${result.length} characters`;
    trackEvent("convert_text", { caseType: caseTypeSelect.value });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    convert();
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      convert();
    }
  });

  copyButton?.addEventListener("click", async () => {
    const text = outputEl.textContent ?? "";
    if (!text) return;

    await navigator.clipboard.writeText(text);
    copyButton.classList.add("success");
    const originalText = copyText.textContent;
    copyText.textContent = "Copied!";

    setTimeout(() => {
      copyButton.classList.remove("success");
      copyText.textContent = originalText;
    }, 2000);

    trackEvent("copy_output");
  });

  updateShortcutHintsForMac();
}
