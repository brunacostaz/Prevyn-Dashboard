import { chromium } from "file:///C:/Users/Bruna%20Costa/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("file:///C:/Users/Bruna%20Costa/Documents/ChatGPT/Ford/prevyn-dashboard/index.html");
await page.screenshot({
  path: "C:/Users/Bruna Costa/Documents/ChatGPT/Ford/prevyn-dashboard/dashboard-logo-preview.png",
  fullPage: true,
});
await browser.close();
