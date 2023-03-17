import { test, expect, chromium } from '@playwright/test'

test('Record video in slow motion using browser contect', async () => {

    // Launch browser
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });
    // Create a new incognito browser context
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos',
            size: { width: 800, height: 600 }
        }
    });
    // Create a new page inside context.
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).isVisible()
    // Dispose context once it's no longer needed.
    await context.close();

});