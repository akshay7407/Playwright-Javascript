

export default class CommonFunctions {


    constructor(page) {
        this.page = page;
    }

    toaster = async () => await this.page.waitForSelector("div[role='alertdialog']");

    // public async verifToastMessage() {

    // }
}