import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import pkg from 'body-parser';
const { json } = pkg;

const app = express();

// Middleware
app.use(cors());  // Enable CORS to allow requests from frontend
app.use(json());  // Parse JSON request body

// Create a route for sending emails
app.post('/send-email', (req, res) => {
    const { from, message } = req.body;

    // Print the incoming data to the console for debugging
    console.log('Incoming request data:', req.body);  // This will print all the data in the request body
    console.log('Sender Email:', from);  // This will print the `from` field
    console.log('Message:', message);  // This will print the `message` field

    // Check if `from` email and `message` are present in the request body
    if (!from || !message) {
        return res.status(400).send('Missing sender email or message');
    }

    // Create a transporter using your email service (e.g., Gmail)
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'abdullahimtiaz371@gmail.com', // Your email address
            pass: 'pyzntaigmkzuzgrx',  // Your email password or app password
        },
    });

    // Define email options
    const mailOptions = {
        from: from,  // Sender's email address from the form (user input)
        to: 'abdullahimtiaz371@gmail.com', // Your email address where the message will be sent
        subject: `New Message from ${from}`, // Adding the sender's email to the subject
        text: `Message from: ${from}\n\n${message}`, // Include the sender's email in the message body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
