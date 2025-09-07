export const surveyMail = () => {
  return {
    subject: `Your feedback is shaping the future of Compurse 🚀`,
    content: `Thank you for taking the time to participate in our survey on digitizing rotating savings and credit associations (ROSCAs). Your insights are incredibly valuable as we work to build an excellent, secure and user-friendly product tailored to the needs of our communities.
    \n
    Your feedback helps us better understand how people view digital solutions for traditional savings circles like Esusu, Ajo, and Chamas. We’re excited about the future, and your input brings us one step closer to delivering a tool that truly makes a difference.
    \n
    Please stay connected with us for updates, early access, and opportunities to shape how Compurse evolves. You can follow us on social media @compurse.io  (coming soon!).
    \n
    Warm regards,
    The Compurse Team`,
    htmlTemplate: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Thank you — Compurse Survey</title>
</head>
<body style="margin:0; padding:0; background-color:#f7f7fb; font-family:Inter, Arial, sans-serif; color:#111827;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f7fb; padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 18px rgba(2,6,23,0.08);">
          
          <!-- Header / Logo -->
          <tr>
            <td align="center" style="padding:28px 24px 8px;">
              <img
                src="https://compurse.io/logo.png"
                alt="Compurse"
                style="display:block; max-width:160px; height:auto;"
              />
            </td>
          </tr>

          <!-- Greeting -->

          <!-- Body copy -->
          <tr>
            <td style="padding:0 36px 8px; font-size:15px; line-height:1.7; color:#111827;">
              <p style="margin:0 0 12px;">
                Thank you for taking the time to participate in our survey on digitizing rotating savings and credit associations (ROSCAs). Your insights are incredibly valuable as we work to build an excellent, secure and user-friendly product tailored to the needs of our communities.
              </p>

              <p style="margin:0 0 12px;">
                Your feedback helps us better understand how people view digital solutions for traditional savings circles like Esusu, Ajo, and Chamas. We’re excited about the future, and your input brings us one step closer to delivering a tool that truly makes a difference.
              </p>

              <p style="margin:0 0 14px;">
                Please stay connected with us for updates, early access, and opportunities to shape how Compurse evolves. You can follow us on social media <a href="https://instagram.com/compurse.io" style="color:#2563eb; text-decoration:none;">@compurse.io</a> (coming soon!).
              </p>

              <p style="margin:0 0 6px;">Warm regards,</p>
              <p style="margin:0; font-weight:600;">The Compurse Team</p>
            </td>
          </tr>

          <!-- CTA / Follow -->
          <tr>
            <td style="padding:18px 36px 22px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
                <tr>
                  <td align="left" style="font-size:14px; color:#6b7280;">
                    <p style="margin:0;">Follow our journey:</p>
                  </td>
                  <td align="right">
                    <a href="https://instagram.com/compurse.io" style="text-decoration:none; font-size:14px;">
                      <img src="https://compurse.io/logo.png" alt="Instagram" width="28" height="28" style="vertical-align:middle; margin-left:8px;" />
                      <span style="vertical-align:middle; margin-left:8px; color:#111827;">@compurse.io</span>
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 36px;">
              <hr style="border:none; border-top:1px solid #eef2f7; margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f3f4f6; padding:18px 36px; text-align:center; font-size:12px; color:#6b7280;">
              <p style="margin:0 0 6px;">
                Compurse © 2025 | <a href="https://compurse.io/privacy-policy" style="color:#2563eb; text-decoration:none;">Privacy Policy</a> | <a href="https://compurse.io/terms-and-conditions" style="color:#2563eb; text-decoration:none;">Terms</a>
              </p>
              <p style="margin:0;">85 Great Portland St, London W1W 7LT</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

  <!-- Plain-text fallback for email clients that strip styles (keeps a copy of message visible) -->
  <div style="display:none; font-size:1px; color:#ffffff; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
    Thank you for taking the time to participate in our survey on digitizing ROSCAs. Your insights are incredibly valuable as we work to build an excellent, secure and user-friendly product tailored to the needs of our communities.
  </div>
</body>
</html>
`,
  };
};

export const waitingListMail = () => {
  return {
    subject: `You're In! Get Ready for Something Big 🚀`,
    content: `Welcome to the Compurse family! Thank you so much for joining our waitlist. We’re thrilled to have you on board.
We’re putting the finishing touches on the app to make sure it’s perfect for you. You’ve just taken the first step toward saying goodbye to spreadsheets, WhatsApp chaos, and chasing friends for payments. 
What's next?
1.	We'll email you an exclusive app invite soon
2.	Get free premium features for 3 months as an early user
Want to move up?

Tell your friends! The more the merrier and Follow our journey on Instagram for updates.
We're building this for you, reply anytime with questions or ideas!
The Compurse Team
________________________________________
Compurse © 2025 | Privacy Policy | Terms
85 Great Portland St, London W1W 7LT`,
    htmlTemplate: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>You're In! Get Ready for Something Big 🚀</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f9fafb; font-family:Arial, sans-serif; color:#111827;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb; padding:40px 0;">
      <tr>
        <td align="center">
          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
            
            <!-- Logo -->
            <tr>
              <td align="center" style="padding:30px 20px 10px;">
                <img src="https://compurse.io/logo.png" alt="Compurse Logo" style="display:block; max-width:160px; height:auto;" />
              </td>
            </tr>

            <!-- Hero / Welcome -->
            <tr>
              <td style="padding:20px 40px; font-size:16px; line-height:1.6;">
                <p>Welcome to the <strong>Compurse family!</strong> Thank you so much for joining our waitlist. We’re thrilled to have you on board.</p>
                <p>We’re putting the finishing touches on the app to make sure it’s perfect for you. You’ve just taken the first step toward saying goodbye to spreadsheets, WhatsApp chaos, and chasing friends for payments.</p>
              </td>
            </tr>

            <!-- What's Next -->
            <tr>
              <td style="padding:0 40px 20px;">
                <h3 style="margin:20px 0 10px; font-size:18px; color:#2563eb;">What's next?</h3>
                <ol style="padding-left:20px; margin:0; font-size:16px; line-height:1.6;">
                  <li>We'll email you an exclusive app invite soon</li>
                  <li>Get free premium features for 3 months as an early user</li>
                </ol>
              </td>
            </tr>

            <!-- Call to action -->
            <tr>
              <td style="padding:20px 40px;">
                <p style="margin-bottom:10px;">Want to move up?</p>
                <p style="margin-bottom:15px;">Tell your friends! The more the merrier and follow our journey on <a href="https://www.instagram.com/compurse_io" style="color:#2563eb; text-decoration:none;">Instagram</a> for updates.</p>
                <p style="margin-bottom:0;">We're building this for you, reply anytime with questions or ideas!</p>
              </td>
            </tr>

            <!-- Signature -->
            <tr>
              <td style="padding:20px 40px;">
                <p style="font-weight:bold; margin:0;">The Compurse Team</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f3f4f6; text-align:center; padding:20px; font-size:12px; color:#6b7280;">
                <p style="margin:0;">Compurse © 2025 | <a href="https://compurse.io/privacy-policy" style="color:#2563eb; text-decoration:none;">Privacy Policy</a> | <a href="https://compurse.io/terms-and-conditions" style="color:#2563eb; text-decoration:none;">Terms and conditions</a></p>
                <p style="margin:5px 0 0;">85 Great Portland St, London W1W 7LT</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
  };
};
