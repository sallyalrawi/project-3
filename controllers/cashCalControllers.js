var db = require('../models');

module.exports = {
  createDiary: function(req, res) {
    const { meal, description, calories } = req.body;
    // console.log(`user_id: ${req.params.userId}`, food, description, calories);
    db.Diaries.create({
      user_id: req.params.userId,
      meal,
      description,
      calories
    }).then(data => res.json(data));
  },

  getDiary: function(req, res) {
    db.Diaries.findAll({ where: { user_id: req.params.userId } }).then(data =>
      res.json(data)
    );
  },

  addWeight: function(req, res) {
    console.log(`user_id: ${req.params.userId}, weight: ${req.body.weight}`);
    db.Weights.create({
      user_id: req.params.userId,
      weight: req.body.weight
    }).then(data => res.json(data));
  },

  getWeight: function(req, res) {
    db.Weights.findAll({ where: { user_id: req.params.userId } }).then(data =>
      res.json(data)
    );
  },

  createUser: function(req, res) {
    db.Users.create(req.body).then(data => res.json(data));
  },

  getUser: function(req, res) {
    db.Users.findAll({}).then(data => res.json(data));
  }
};