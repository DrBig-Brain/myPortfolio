const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error("MongoDB connection failed:",err);
    process.exit(1);
  })

const submissionSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },

  email:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
  },
  phone:{
    type:String,
    default:'',
  },
  message:{
    type:String,
    required:true,
    trim:true,
  },
  submittedAt:{
    type:Date,
    default: Date.now
  }
})

const Submission = mongoose.model('Submission',submissionSchema);

app.post('/api/submit',async(req,res)=>{
  try{
    const {name,email,message,phone} = req.body;
    if(!name||!email||!message){
      return res.status(400).json({
        success:false,
        error:'Please fill out the requred fields'
      })
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      return res.status(400).json({
        success:false,
        error: "Please enter a valid email."
      });
    }
    const submission = await Submission.create({
      name,
      email,
      phone:phone || "",
      message,
    })

    console.log('New submission saved: ',submission)

    res.status(201).json({
      success:true,
      message: "form submitted successfully",
      data: submission
    });
  }
  catch(err){
    console.error("Submission error: ",error);

    res.status(500).json({
      success:false,
      error:"Internal Server Error",
    })
  }
})
app.get('/api/health', async (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Initialize and start server
async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();