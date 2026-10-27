import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";
import { expect, test } from "vitest";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const { document } = new JSDOM(html).window;

test("shows the headline", () => {
  expect(document.querySelector("h1")?.textContent).toBe("Ship your next idea with an AI dev crew");
});

test("has a call-to-action link", () => {
  const callToAction = document.querySelector("a[data-cta]");

  expect(callToAction).not.toBeNull();
  expect(callToAction?.getAttribute("href")).toBe("#next-steps");
});
