const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File path for storing submissions
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

// Initialize submissions file if it doesn't exist
async function initSubmissionsFile() {
  try {
    await fs.access(SUBMISSIONS_FILE);
  } catch (error) {
    // File doesn't exist, create it with empty array
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
    console.log('Created submissions.json file');
  }
}

// Save submission to JSON file
async function saveSubmissionToFile(submission) {
  try {
    // Read existing submissions
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf8');
    const submissions = JSON.parse(data);
    
    // Add new submission
    submissions.push(submission);
    
    // Write back to file
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    console.log('Submission saved to file');
    return true;
  } catch (error) {
    console.error('Error saving to file:', error);
    return false;
  }
}

// Get all submissions from file
async function getAllSubmissions() {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
}

// API endpoint to handle form submission
app.post('/api/submit', async (req, res) => {
  const { name, email, message, phone } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email address'
    });
  }

  // Create submission object
  const submission = {
    id: Date.now(), // Use timestamp as unique ID
    name,
    email,
    phone: phone || '',
    message,
    submittedAt: new Date().toISOString(),
    ip: req.ip || req.connection.remoteAddress
  };
  
  // Save to JSON file
  await saveSubmissionToFile(submission);
  
  console.log('New submission saved:', submission);

  // Return the submission data in response
  res.status(200).json({
    success: true,
    message: 'Form submitted successfully!',
    data: submission // Include the saved submission in response
  });
});

// GET endpoint to retrieve all submissions (for admin purposes)
app.get('/api/submissions', async (req, res) => {
  const submissions = await getAllSubmissions();
  res.json({
    success: true,
    count: submissions.length,
    data: submissions
  });
});

// GET endpoint to get a single submission by ID
app.get('/api/submissions/:id', async (req, res) => {
  const submissions = await getAllSubmissions();
  const submission = submissions.find(s => s.id == req.params.id);
  
  if (!submission) {
    return res.status(404).json({
      success: false,
      error: 'Submission not found'
    });
  }
  
  res.json({
    success: true,
    data: submission
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    submissionsFile: SUBMISSIONS_FILE
  });
});

// Initialize and start server
async function startServer() {
  await initSubmissionsFile();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Submissions saved to: ${SUBMISSIONS_FILE}`);
  });
}

startServer();