const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Your MongoDB connection string
const db = 'YOUR_MONGODB_CONNECTION_STRING';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Redirect route
app.get('/room', (req, res) => {
    const roomId = req.query.roomId;
    const targetUrl = `https://yourapp.com/room?roomId=${roomId}`;
    if (roomId) {
        res.redirect(targetUrl);
    } else {
        res.status(400).send('Room ID is missing');
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
