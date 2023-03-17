import CommonFunctions from "../pages/commonFunction";
import HeaderPage from "../pages/headers";
import { LoginPage } from "..//pages/loginPage";
import Env from "../Utils/environment";
import { test, chromium, expect, page } from '@playwright/test';



test.describe("TC001", () => {
    // my pages
    let header;
    let login;
    let common;

    //context 
    let browser;
    let context;
    let page;


    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto(Env.test);
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);
    })

    test("@Web Login positive _ JIRA101", async () => {
        await header.clickLoginLink();
        expect(await page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName("koushik1@letcode.in");
        await login.enterUserPassword(process.env.PASSWORD);
        await login.clickLoginBtn();
        const toaster = await common.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await header.clickSignOutLink();

    });
})