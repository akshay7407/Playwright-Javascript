const { chromium } = require('@playwright/test');
const path = require('path');
import EmailReporter from "../notifier/EmailReporter"


export async function sendNotification() {

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext()
    const page = await context.newPage();

    await page.waitForTimeout(10000)
    const url = path.join(process.cwd(), "./playwright-report/index.html")
    console.log(process.cwd());
    console.log(url, "$$$$$$$$$$$$$$$$$");
    await page.goto(url, { waitUntil: 'load' })
    const chartBox = await page.locator("//div[@class='htmlreport vbox px-4 pb-4']//div[@class='header-view-status-container ml-2 pl-2 d-flex']");
    await chartBox.screenshot({ path: "./Screenshots/reportScreenshot.png" })
    await page.waitForTimeout(5000)
    await EmailReporter.emailReporter()

}