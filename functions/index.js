require("dotenv").config();
const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const postmark = require("postmark");
const logger = require("firebase-functions/logger");

setGlobalOptions({ maxInstances: 10 });

// Initialize Postmark client
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

exports.sendContactEmail = onRequest({ cors: true }, async (req, res) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Send email via Postmark template
    await client.sendEmailWithTemplate({
      From: process.env.POSTMARK_FROM_EMAIL,
      To: process.env.POSTMARK_SUPPORT_EMAIL,
      TemplateId: 41018727,
      TemplateModel: {
        type: "Contact",
        sender_email: email,
        name: name,
        message: message,
      },
    });

    logger.info("Contact email sent successfully", { email, name });
    return res.status(200).json({ success: true });
  } catch (error) {
    logger.error("Error sending contact email", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});
