import { Page, test, expect } from '@playwright/test'

test('assertion test', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //Assertions 

    //Check the element is present or not 
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if (await page.$('heading', { name: 'The Kitchen' })) {
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }
    // check element hidden or vxsxsble
    //Soft Assertions
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()
    // check element enabled or disabled
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    //Check the text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('ABCD')

    //Assert URL and Title

    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    //Assert title using regular expression
    await expect(page).toHaveTitle(/.*Kitchen/)
});