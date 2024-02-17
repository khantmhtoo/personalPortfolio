const contactService = require("../services/contactServices");

exports.sendContact = async (req, res) => {
  try {
    console.log(req.body);
    const contactRecieved = await contactService.processMailing(req.body);
    if (contactRecieved) {
      res.json({ success: "Email has been processed." });
    } else {
      res.json({ err: "Email has been failed to processed." });
    }
  } catch (err) {
    console.error(err);
  }
};
