const fs = require('fs');
const pool = require('./db');

async function init() {
  const schema = fs.readFileSync('./schema.sql', 'utf8');
  await pool.query(schema);
  console.log('Database initialized successfully.');
  process.exit(0);
}

init().catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
