const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Experience = require("./models/Experience.js");
const User = require("./models/User.js");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
// Connect to MongoDB
require("dotenv").config(); // Load environment variables from .env file

const mongodbUrl = process.env.MONGODB_URL;

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// app.post('/login', async (req, res) => {
//   try {
//       const { email, password } = req.body;
//       const userDoc = await User.findOne({ email });

//       if (userDoc) {
//           const passOk = await bcrypt.compare(password, userDoc.password);

//           if (passOk) {
//               const token = jwt.sign(
//                   {
//                       email: userDoc.email,
//                       id: userDoc._id,
//                   },
//                   jwtSecret,
//                   {}
//               );
//               res.cookie('token', token).json(userDoc);
//           } else {
//               res.status(422).json('Incorrect password');
//           }
//       } else {
//           res.status(404).json('User not found, register first');
//       }
//   } catch (error) {
//       console.error(error);
//       res.status(500).json('Internal server error');
//   }
// });
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    // If not, create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if a user with the provided username exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Check if the provided password matches the user's password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    // If the username and password are correct, return a success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// app.post("/register", async (req, res) => {
//   try {
//       const { name, email, number, password } = req.body;

//       // Check if user with the same phone number already exists
//       const existingUserByNumber = await User.findOne({ number });
//       if (existingUserByNumber) {
//           return res.status(409).json({
//               success: false,
//               message: "User with this phone number already exists. Please register with a different phone number",
//           });
//       }

//       // Create a new user
//       const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
//       const newUser = new User({
//           name,
//           email,
//           number,
//           password: hashedPassword,
//       });
//       await newUser.save();

//       res.json({ success: true, message: "Registration successful" });
//   } catch (error) {
//       console.error("Registration failed:", error);
//       res
//           .status(500)
//           .json({ success: false, message: "Registration failed. Please try again later." });
//   }
// });

// Route to handle form submissions
app.post("/experiences", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json({ message: "Experience saved successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/experiences", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server' });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//QiJrWimGrZzXFGYt
