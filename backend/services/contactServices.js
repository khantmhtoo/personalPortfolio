const nodeService = require("../services/nodeMailer(SMTP)");

exports.processMailing = (data) => {
  if (data) {
    const newData = {
      mailData: `The contact information is sended by ${data.email}.\n${data.subject}`,
    };
    const transporter = nodeService.transporter();
    const mailOptions = nodeService.mailOptions(
      "testkun54@gmail.com",
      `Contact from ${data.name}`,
      newData.mailData
    );
    const sendMail = nodeService.sendMail(transporter, mailOptions);
    return true;
  } else {
    return false;
  }
};
