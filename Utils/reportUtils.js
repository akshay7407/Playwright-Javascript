let reporter;
export default class ReportUtils {


    static async screenshot(description, page) {
        const screenshotBuffer = await page.screenshot();
        description = description != undefined ? description : "screenshot";
        await reporter.addAttachment(description, screenshotBuffer, Date.now() + "image/png");
    }

}