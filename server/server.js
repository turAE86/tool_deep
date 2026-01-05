const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const authController = require('./controllers/authController');
require('./controllers/authController'); // Load passport strategies

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({ secret: process.env.JWT_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Contact form submission:', { name, email, phone, message });
  // Here you would save to database or send email
  res.json({ 
    success: true, 
    message: 'Thank you for contacting Redscan. We will get back to you soon.' 
  });
});

app.post('/api/demo', (req, res) => {
  const { name, email, company, phone } = req.body;
  console.log('Demo request:', { name, email, company, phone });
  res.json({
    success: true,
    message: 'Demo scheduled successfully. Our team will contact you shortly.'
  });
});

// Auth routes
app.post('/api/auth/send-otp', authController.sendOTP);
app.post('/api/auth/verify-otp', authController.verifyOTP);

// Google OAuth routes (only if credentials are provided)
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_ID !== 'your_google_client_id') {
  app.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  app.get('/api/auth/google/callback',
    passport.authenticate('google', { failureRedirect: `${process.env.CLIENT_URL}/login` }),
    (req, res) => {
      // Generate JWT token for Google user
      const jwt = require('jsonwebtoken');
      const token = jwt.sign(
        { userId: req.user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      // Redirect to client with token
      res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}`);
    }
  );
}

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});