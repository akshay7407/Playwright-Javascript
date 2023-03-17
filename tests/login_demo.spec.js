import { test, expect } from '@playwright/test'
import * as data from '../data/jsonData.json'

test('@Web Login test demo', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    // await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Raghav')
    await page.getByPlaceholder('Enter your password').fill('1234')
    await page.waitForSelector('text=Sign in', { timeout: 5900 })
    await page.getByRole('link', { name: 'Sign in' }).click()
    // await page.pause()
    await page.locator('text=Add Account').isDisabled()
})

test('@Web OrangeHRM login test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(data.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).isVisible()
    await page.locator('.oxd-userdropdown-name').click()
    await page.getByRole('menuitem', { name: 'Logout' }).click()
    await page.getByPlaceholder('Username').isDisabled()
});