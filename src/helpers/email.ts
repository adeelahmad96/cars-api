import nodemailer from "nodemailer";
import { User } from "../models/user";
import { logger } from "./logger";

// using test credentials therefore this will not send email on user's email
// but nodemailer gives url where you can see this email
// attaching this url on signup response
export const sendSignupEmail = async (user: User): Promise<string> => {
  // using test account to send emails
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: testAccount.user,
    to: user.email,
    subject: "Welcome to our App",
    text: `Welcome to our App. Here is your password to login.\n password: ${user.password}`,
  });
  logger.info("View email: %s", nodemailer.getTestMessageUrl(info)); // URL to preview email
  return nodemailer.getTestMessageUrl(info);
};
