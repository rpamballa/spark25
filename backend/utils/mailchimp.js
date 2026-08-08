import axios from "axios";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const sendgridApiKey = "YOUR_SENDGRID_API_KEY";

export async function registerToMailchimpContact({
  email,
  name,
  projectDetails,
  serviceType,
}) {
  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");
  const url = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${subscriberHash}`;

  const data = {
    email_address: email,
    status_if_new: "subscribed",
    status: "subscribed",
    merge_fields: {
      FNAME: name,
      PROJECT: projectDetails,
      SERVICE: serviceType,
      ADDRESS: "",
    },
  };

  try {
    const response = await axios.put(url, data, {
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Mailchimp registration failed:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to register email to Mailchimp");
  }
}

export async function registerToMailchimpNewletter(email) {
  const url = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`;
  try {
    const response = await axios.post(
      url,
      {
        email_address: email,
        status: "subscribed",
      },
      { headers: { Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}` } }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Mailchimp registration failed:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to register email to Mailchimp");
  }
}

// Helper function to send bulk email via Mailchimp
export async function sendBulkEmailMailchimp(
  subject,
  htmlContent,
  plainTextContent
) {
  const createCampaignUrl = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns`;

  // Create the campaign
  const campaignData = {
    type: "regular",
    recipients: {
      list_id: process.env.MAILCHIMP_LIST_ID, // Your Mailchimp audience/list ID
    },
    settings: {
      subject_line: subject,
      title: "Bulk Email Campaign",
      from_name: "Your Website Name",
      reply_to: "your-email@yourdomain.com",
    },
  };

  try {
    // Step 1: Create a campaign
    const campaignResponse = await axios.post(createCampaignUrl, campaignData, {
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const campaignId = campaignResponse.data.id;

    // Step 2: Add content to the campaign
    const contentUrl = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaignId}/content`;
    const contentData = {
      plain_text: plainTextContent,
      html: htmlContent,
    };

    await axios.put(contentUrl, contentData, {
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    // Step 3: Send the campaign
    const sendCampaignUrl = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/campaigns/${campaignId}/actions/send`;
    await axios.post(
      sendCampaignUrl,
      {},
      {
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    );

    console.log("Bulk email sent successfully!");
  } catch (error) {
    console.error(
      "Error sending bulk email:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to send bulk email");
  }
}
