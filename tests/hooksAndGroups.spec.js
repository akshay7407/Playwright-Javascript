import { test, expect } from '@playwright/test'
const mailSender = require('../Utils/functions')


test.describe('@Web All my tests', async () => {
    //test.beforeEach will execute before every test 
    //test.afterEach will execute after every test 
    //test.beforeAll will execute before all test cases 
    //test.afterAll will execute After all test cases 
    test.beforeEach(async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
    })

    test.afterAll(async ({ page }) => {
        await mailSender.sendNotification()
        await page.close()
    })

    test.afterEach(async ({ page }) => {
        await page.getByRole('img', { name: 'profile picture' }).click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();
    })
    test('homepage', async ({ page }) => {
        await page.getByRole('link', { name: 'Time' }).click();
        console.log(await page.title)
    });

    test('logout test', async ({ page }) => {

        await page.getByRole('link', { name: 'Leave', exact: true }).click();
        await page.getByText('Entitlements').click();
        await page.getByRole('menuitem', { name: 'My Entitlements' }).click();
    });
})
