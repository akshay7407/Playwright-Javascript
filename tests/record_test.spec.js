import { test, expect } from '@playwright/test';

//  Record the test at specific file using below command
// npx playwright codegen --target javascript -o tests\record_test.spec.js
test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByPlaceholder('Password').press('Enter');
    await page.getByRole('link', { name: 'My Info' }).click();
    await page.locator('div').filter({ hasText: 'Employee Full NameNickname' }).getByRole('textbox').nth(3).click();
    await page.locator('div').filter({ hasText: 'Employee Full NameNickname' }).getByRole('textbox').nth(3).click();
    await page.locator('div').filter({ hasText: 'Employee Full NameNickname' }).getByRole('textbox').nth(3).press('Control+a');
    await page.locator('div').filter({ hasText: 'Employee Full NameNickname' }).getByRole('textbox').nth(3).fill('A');
    await page.locator('div').filter({ hasText: 'Employee Full NameNickname' }).getByRole('textbox').nth(3).click({
        modifiers: ['Shift']
    });
    await page.locator('div').filter({ hasText: 'Employee Full NameNickname' }).getByRole('textbox').nth(3).fill('Akshay123');
    await page.locator('div').filter({ hasText: '* Required Save' }).getByRole('button', { name: 'Save' }).click();
    await page.locator('div').filter({ hasText: 'Employee Full Name' }).nth(1).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('Gaikwad');
    await page.locator('div').filter({ hasText: '* Required Save' }).getByRole('button', { name: 'Save' }).click();
    await page.locator('form').filter({ hasText: 'Blood Type-- Select -- Save' }).getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'Directory' }).click();
});