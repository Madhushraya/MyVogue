const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Multer Setup for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Serve images from the uploads folder
app.use('/uploads', express.static('uploads'));

// Dress Schema
const dressSchema = new mongoose.Schema({
    name: String,
    category: String,
    size: String,
    location: String,
    laundryStatus: Boolean,
    imageUrl: String,
    description: String,
});

const Dress = mongoose.model('Dress', dressSchema);

// Routes
app.post('/api/dresses', upload.single('image'), async (req, res) => {
    const { name, category, size, location, laundryStatus, description } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    try {
        const dress = new Dress({ name, category, size, location, laundryStatus, imageUrl, description });
        await dress.save();
        res.status(201).json(dress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/dresses', async (req, res) => {
    try {
        const dresses = await Dress.find();
        res.status(200).json(dresses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/dresses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Dress.findByIdAndDelete(id);
        res.status(200).json({ message: 'Dress deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
