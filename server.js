const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/tournaments', require('./routes/tournaments'));
app.use('/api/matches', require('./routes/matches'));
app.use('/api/players', require('./routes/players'));
app.use('/api/settings', require('./routes/settings'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/analysis', require('./routes/analysis'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
