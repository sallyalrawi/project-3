const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

const syncOptions = { force: false };

if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

db.sequelize
  .sync(syncOptions)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🌎 ==> API server now on port ${PORT}!`)
    )
  );
