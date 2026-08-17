// EmailJS configuration
// To set up:
// 1. Create an account at https://www.emailjs.com/
// 2. Add your service ID, template IDs, and public key to .env.local:
//    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PARTNER=your_partner_template_id
//    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RECRUITMENT=your_recruitment_template_id
//    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateIds: {
    partner: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PARTNER || '',
    recruitment: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RECRUITMENT || '',
  },
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};
