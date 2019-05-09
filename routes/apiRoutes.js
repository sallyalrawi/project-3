const db = require('../models');

module.exports = function(app) {
  app.post('/api/diary', (req, res) => {
    db.Businesses.create(req.body).then(data => {
      return res.json(data);
    });
  });

  app.get('/api/diary', (req, res) => {
    db.Businesses.findAll({}).then(data => {
      return res.json(data);
    });
  });

  app.post('/api/weight', (req, res) => {
    db.Devs.create(req.body).then(data => {
      return res.json(data);
    });
  });

  app.get('/api/weight', (req, res) => {
    db.Devs.findAll({}).then(data => {
      return res.json(data);
    });
  });

  app.post('/api/user', (req, res) => {
    db.Contacts.create(req.body).then(data => {
      return res.json(data);
    });
  });

  app.get('/api/user', (req, res) => {
    db.Contacts.findAll({}).then(data => {
      return res.json(data);
    });
  });
};
