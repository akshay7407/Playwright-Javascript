import { test, expect } from "@playwright/test"

test('Selectors demo', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()

    //Using Xpath selectors
    await page.locator("//input[@name='username']").fill('Admin')

    //USing CSS selectors
    await page.locator("input[name='password']").fill('admin123')

    //Using Text selector
    await page.locator('button:has-text(" Login ")').click()
    await page.pause()

});
