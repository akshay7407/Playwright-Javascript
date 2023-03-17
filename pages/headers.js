
export default class HeaderPage {


    constructor(page) {
        this.page = page;
    }


    // locators

    get eleLoginBtn() {
        return this.page.$("text=Log in");

    }

    get eleSignOutBtn() {
        return this.page.$("text=Sign out");

    }

    async clickLoginLink() {
        await Promise.all([
            this.page.waitForNavigation({
                waitUntil: "domcontentloaded"
            }),
            this.page.click("text=Log in")
        ])
        // const ele = await this.eleLoginBtn;
        // await ele?.click();
    }
    async clickSignOutLink() {
        const ele = await this.eleSignOutBtn;
        await ele?.click();
    }
}

