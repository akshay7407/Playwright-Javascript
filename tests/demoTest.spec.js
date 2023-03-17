const { test, expect } = require('@playwright/test');

test('first test', async ({ page }) => {


    await page.goto('https://github.com/')
    await expect(page).toHaveTitle('GitHub: Let’s build from here · GitHub')

});

test('Validate orangeHrm title in admin page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
});