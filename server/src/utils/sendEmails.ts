import nodemailer, { SentMessageInfo } from 'nodemailer';

const confirm = (email: string, url: string) => {
    return {
        from: '"Brendan" <jim@murphyslandscaping.io>',
        to: email,
        subject: 'Confirm New User ✔',
        text: `Thanks for registering for Murphy's! Please click the link to confirm your new account`,
        html: `<a href="${url}">${url}</a>`
    };
}

const forgotPassword = (email: string, url: string) => {
    return {
        from: '"Brendan" <brendan@murphyslandscaping.io>',
        to: email,
        subject: `Reset Murphy's Landscaping Password`,
        text: `Please click the link to reset your Murphy's password`,
        html: `<a href="${url}">${url}</a>`
    };
}

export const sendEmail = async (email: string, url: string, type: string) => {
    let info: SentMessageInfo = {
        messageId: ''
    };
    const account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    if (type === 'Confirm') {
        console.log('confirm');
        info = await transporter.sendMail(confirm(email, url));
    } else if (type === 'Forgot Password') {
        info = await transporter.sendMail(forgotPassword(email, url));
    } else {
        console.log('please provide type');
        throw Error('Please provide type');
    }

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}