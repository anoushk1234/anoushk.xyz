import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
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

  const browser = await puppeteer.launch({
    headless: true,
    args: minimal_args,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  const website_url = site;

  // Open URL in current page
  await page.goto(website_url || "https://www.gitsol.xyz", {
    waitUntil: "networkidle0",
  });
  const pic = await page.screenshot({
    path: "ss.webp",
    fullPage: true,
  });
  await browser.close();

  res.status(200).json({ pic: Buffer.from(pic).toString("base64") });
}
