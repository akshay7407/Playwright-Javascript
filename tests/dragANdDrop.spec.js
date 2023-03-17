import { test, chromium } from '@playwright/test';

test.describe("Drag and Drop", async () => {
    let browser;
    let context;
    let page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
    })


    test("@Web my test", async () => {
        await page.goto("https://jqueryui.com/droppable/")
        // switch to frame
        const frame = page.frame({ url: "https://jqueryui.com/resources/demos/droppable/default.html" })
        if (frame) {
            const src = await frame.$("#draggable")
            const dst = await frame.$("#droppable");
            if (src && dst) {
                const srcBound = await src.boundingBox()
                const dstBound = await dst.boundingBox()
                if (srcBound && dstBound) {
                    await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2)
                    await page.mouse.down();
                    await page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2)
                    await page.mouse.down();
                } else {
                    throw new Error("No Element")
                }
            }
        }
    })

})