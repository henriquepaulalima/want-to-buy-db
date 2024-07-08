const express = require('express');
const cors = require('cors');
require('dotenv/config');
const { sequelize } = require('./models/index');
const router = require('./routes/wishlistItems');

const app = express();

app.use(express.static('public'));
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8080;

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log('Server running on port: ' + PORT);
    });
  })
  .catch((err) => {
    console.log('Failed to sync database: ', err);
  });
