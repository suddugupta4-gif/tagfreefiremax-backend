const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');

dotenv.config();

const app = express();

const schema = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tournaments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS matches (
  id SERIAL PRIMARY KEY,
  tournament_id INT REFERENCES tournaments(id) ON DELETE CASCADE,
  match_number INT NOT NULL,
  map_name VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS players (
  id SERIAL PRIMARY KEY,
  in_game_name VARCHAR(50) UNIQUE NOT NULL,
  team_name VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

let dbInitialized = false;

app.use(async (req, res, next) => {
  if (!dbInitialized) {
    try {
      await pool.query(schema);
      dbInitialized = true;
    } catch (err) {
      console.error('Error initializing database schema:', err);
    }
  }
  next();
});

app.use(cors());
app.use(express.json());

// Embedded view routes to avoid static file bundling issues on Vercel
const indexHtml = require('./views/index_html');
const adminHtml = require('./views/admin_html');
const styleCss = require('./views/style_css');
const appJs = require('./views/app_js');
const adminJs = require('./views/admin_js');

app.get('/', (req, res) => {
  res.type('html').send(indexHtml);
});

app.get('/admin', (req, res) => {
  res.type('html').send(adminHtml);
});

app.get('/css/style.css', (req, res) => {
  res.type('css').send(styleCss);
});

app.get('/js/app.js', (req, res) => {
  res.type('js').send(appJs);
});

app.get('/js/admin.js', (req, res) => {
  res.type('js').send(adminJs);
});

app.use(express.static('public'));

app.use('/api/tournaments', require('./routes/tournaments'));
app.use('/api/matches', require('./routes/matches'));
app.use('/api/players', require('./routes/players'));
app.use('/api/settings', require('./routes/settings'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/analysis', require('./routes/analysis'));

module.exports = app;
