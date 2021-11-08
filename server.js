const dotenv = require('dotenv');
const app = require('./app');

//
if (process.env?.NODE_ENV === 'development') {
  dotenv.config({ path: './config/development.env' });
} else {
  dotenv.config({ path: './config/production.env' });
}
console.log(process.env.PORT);

//PORT SECTION
app.listen(process.env.PORT, () => {
  console.log(
    `Server is Running on port ${process.env.PORT} and ${process.env.NODE_ENV} `
  );
});
