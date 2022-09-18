import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
const chrome = require("chrome-aws-lambda");
import puppeteer from "puppeteer-core";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { site } = req.body;
  const minimal_args = [
    "--autoplay-policy=user-gesture-required",
    "--disable-background-networking",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-dev-shm-usage",
    "--disable-domain-reliability",
    "--disable-extensions",
    "--disable-features=AudioServiceOutOfProcess",
    "--disable-hang-monitor",
    "--disable-ipc-flooding-protection",
    "--disable-notifications",
    "--disable-offer-store-unmasked-wallet-cards",
    "--disable-popup-blocking",
    "--disable-print-preview",
    "--disable-prompt-on-repost",
    "--disable-renderer-backgrounding",
    "--disable-setuid-sandbox",
    "--disable-speech-api",
    "--disable-sync",
    "--hide-scrollbars",
    "--ignore-gpu-blacklist",
    "--metrics-recording-only",
    "--mute-audio",
    "--no-default-browser-check",
    "--no-first-run",
    "--no-pings",
    "--no-sandbox",
    "--no-zygote",
    "--password-store=basic",
    "--use-gl=swiftshader",
    "--use-mock-keychain",
  ];
  try {
    const browser = await puppeteer.launch(
      process.env.NEXT_PUBLIC_ENV === "dev"
        ? {
            args: minimal_args,
            executablePath:
              process.platform === "win32"
                ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
                : process.platform === "linux"
                ? "/usr/bin/google-chrome"
                : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          }
        : {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
          }
    );
    console.log("browser launched");
    const page = await browser.newPage();
    console.log("page created");
    await page.setViewport({ width: 1280, height: 720 });
    console.log("viewport set");
    const website_url = site;
    console.log("website url", website_url);
    // Open URL in current page
    await page.goto(website_url || "https://www.gitsol.xyz", {
      waitUntil: "networkidle0",
    });
    console.log("page loaded");
    const pic = await page.screenshot({
      path: "ss.webp",
      fullPage: false,
    });
    console.log("screenshot taken");
    await browser.close();
    console.log("browser closed");
    res.status(200).json({ pic: Buffer.from(pic).toString("base64") });
  } catch (e) {
    let error = e as Error;
    console.log(error, "error");
    res.status(500).json({ error: error.message });
  }
}
