
exports.LoginPage = class LoginPage {


    constructor(page) {
        this.page = page;
    }

    // First way to write locator 
    eleEmailTextField = async () => await this.page.$("input[name='email']");

    //  get eleEmailTextField() {
    //     return this.page.$("input[name='email']")
    //     // return elename;
    // }

    elePassTextField = async () => await this.page.$("input[name='password']");
    // Second way to write locator 
    get eleLoginBtn() {
        return this.page.$("//button[text()='LOGIN']")
        // return elename;
    }

    async enterUserName(name) {
        const ele = await this.eleEmailTextField();
        if (ele != null)
            await ele.fill(name);
        else throw new Error("No element, hence failed")
    }
    async enterUserPassword(pass) {
        const ele = await this.elePassTextField();
        await ele?.fill(pass);
    }
    async clickLoginBtn() {
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }

    async login(username, pass) {
        await this.enterUserName(username);
        await this.enterUserPassword(pass);
        await this.clickLoginBtn();
    }
}