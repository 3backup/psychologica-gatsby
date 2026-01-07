// Serverless function for Vercel to send SMS via SMSAPI.pl
// Receives webhook from Formkeep and sends SMS notification

const SMSAPI_TOKEN = process.env.SMSAPI_TOKEN || 'vBkE7UPuZcaU9KtlAflv9qbBH7Hs6kQVeg4dvOys';
const SMS_RECIPIENT = '0048881442883'; // +48 881 442 883
const SMSAPI_URL = 'https://api.smsapi.pl/sms.do';

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse data from Formkeep webhook
    const formData = req.body;
    
    // Extract form fields
    const email = formData.email || 'Nie podano';
    const name = formData.name || 'Nie podano';
    const phone = formData.phone || 'Nie podano';
    const message = formData.message || 'Brak treści';
    
    // Create compact SMS message (max 160 chars for 1 SMS)
    // Truncate message if too long
    const messagePreview = message.length > 50 
      ? message.substring(0, 50) + '...' 
      : message;
    
    // Compact format to fit in 1 SMS (160 chars)
    const smsText = `psychologica: email:${email} imie:${name} tel:${phone} ${messagePreview}`;

    // Prepare SMSAPI request
    const smsParams = new URLSearchParams({
      to: SMS_RECIPIENT,
      message: smsText,
      format: 'json'
    });

    // Send SMS via SMSAPI.pl
    const smsResponse = await fetch(SMSAPI_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SMSAPI_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: smsParams.toString()
    });

    const smsResult = await smsResponse.json();

    // Check if SMS was sent successfully
    if (smsResult.error) {
      console.error('SMSAPI error:', smsResult.error);
      return res.status(500).json({ 
        error: 'Failed to send SMS', 
        details: smsResult.error 
      });
    }

    // Success
    console.log('SMS sent successfully:', smsResult);
    return res.status(200).json({ 
      success: true, 
      message: 'SMS sent successfully',
      smsId: smsResult.id || smsResult.list?.[0]?.id
    });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
};

