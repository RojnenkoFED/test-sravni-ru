const express = require('express');
const app = express();
const PORT = 5000;

app.use('/api/offers', require('./routes/offers'));

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`start localhost on ${PORT}`);
    });
  } catch (e) {
    console.log('Server Error:', e.message);
    process.exit(1);
  }
}

start();
