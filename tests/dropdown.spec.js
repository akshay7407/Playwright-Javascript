import { browser, page, test, chromium } from '@playwright/test';

test.describe("How to handle Select", () => {

    let browser;
    let context;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: true
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://letcode.in/dropdowns")
    })
    test("@Web Select a dropdown based on value", async () => {
        const fruits = await page.$("#fruits");
        // await fruits?.selectOption({ label: "" });
        await fruits?.selectOption("2");
        const msg = await page.$("div.notification.is-success");
        if (msg) {
            // expect(await msg.textContent()).toContain("Apple");
        }
    })
    test("@Web Select multiple", async () => {
        const heros = await page.$("#superheros");
        heros?.selectOption([
            { label: "Aquaman" }, { value: "bt" }, { index: 8 }
        ])
    })
    test("@Web Count of the select", async () => {
        const lang = await page.$$("#lang option")
        console.log(lang.length);
    })
    // test("get selected text", async () => {
    //     await page.selectOption("#country", "India");
    //     const text = await page.$eval < string, HTMLSelectElement> ("#country", ele => ele.value)
    //     console.log(text);
    //     expect(text).toBe("India");
    // })

    test.afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    })
})