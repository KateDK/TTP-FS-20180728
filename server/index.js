const express = require('express');
const bodyParser = require('body-parser');
// const SequelizeStore = require('connect-session-sequelize');
const db = require('./db');
// const sessionStore = SequelizeStore({ db });

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.listen(port, () => console.log(`Listening on port ${port}`));

const syncDb = () => db.sync({ force: true });

async function bootApp() {
  // await sessionStore.sync();
  await syncDb();
}

if (require.main === module) {
  bootApp();
}
