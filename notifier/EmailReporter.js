
class EmailReporter {

    async emailReporter() {

        let username = 'akshay.gaikwad@infobeans.com'
        let toList = 'akshaygaikwad362@gmail.com'
        const password = 'sjulhdvysntivapx'
        var nodemailer = require('nodemailer')
        const filesData = [{ name: 'index.html', path: './playwright-report/index.html', cid: 'report' }, { name: '', path: './Screenshots/reportScreenshot.png', cid: 'reportImage' }]
        const attachments = filesData.map((file) => {
            return { filename: file.name, path: file.path, cid: file.cid };
        });
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: username,
                pass: password
            }
        })
        async function sendMail() {
            let sendResult = await transporter.sendMail({
                from: username,
                to: toList,
                subject: `html report of execution`,

                html:

                    `
<h3>Execution Report :<h3>

<img src="cid:reportImage"/>
<file src="cid:report"/>

<h4>Thanks and Regards,</h4>
<h4>Akshay Gaikwad,</h4>
<h4>QA Automation Team</h4>`,



                attachments: attachments
            })
            console.log(sendResult)
            console.log("Mail sent Sucesssfully")
        }
        await sendMail().catch(err => console.error(err))
    }

}

export default new EmailReporter();