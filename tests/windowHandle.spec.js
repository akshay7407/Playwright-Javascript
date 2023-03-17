import { expect, test, Page, chromium } from '@playwright/test';

test.describe("Window handling", () => {

    let browser;
    let context;
    let page;
    test.beforeEach(async () => {
        browser = await chromium.launch({
            headless: true
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://letcode.in/windows")
    })

    test("@Web Home Page", async () => {
        console.log(await page.title());
        expect(await page.title()).toBe("Window handling - LetCode");
    })

    test("@Web Single page handling", async () => {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#home")
        ])
        await newWindow.waitForLoadState();
        expect(newWindow.url()).toContain("test");
        await newWindow.click('"Log in"');
        expect(newWindow.url()).toContain("signin");
        // await newWindow.close();
        await page.bringToFront();
        // await page.pause()
        await page.click('"Work-Space"');
        expect(await page.url()).toContain('test')
        await page.goBack()

    })
    test("@Web Multipage handling", async () => {
        await page.click("#multi")
        await page.waitForLoadState();
        const allwindows = page.context().pages();
        console.log("no.of windows: " + allwindows.length);
        allwindows.forEach(page => {
            console.log(page.url());
        });
        await allwindows[1].bringToFront();
        allwindows[1].on("dialog", (dialog) => {
            console.log('Message: ' + dialog.message());
            dialog.accept();
        })
        await allwindows[1].click("id=accept")

    })
    test.afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    })
})