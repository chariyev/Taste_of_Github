const dotenv = require('dotenv');
const app = require('./app');
const db = require('./config/db');

//ENVIROMENT SECTION
if (process.env?.NODE_ENV === 'development') {
  dotenv.config({ path: './config/development.env' });
} else {
  dotenv.config({ path: './config/production.env' });
}

//DATABASE CONNECTION
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error', err));

//PORT SECTION
app.listen(process.env.PORT, () => {
  console.log(
    `Server is Running on port ${process.env.PORT} and ${process.env.NODE_ENV} `
  );
});
