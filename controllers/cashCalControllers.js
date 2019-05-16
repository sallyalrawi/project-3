var db = require('../models');

module.exports = {
  createDiary: function(req, res) {
    const { meal, description, calories } = req.body;
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
    db.Users.create({
      user_id: req.params.userId,
      user_name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      height: req.body.userHeight,
      weight: req.body.weight,
      points: 100
    }).then(data => res.json(data));
  },

  getUser: function(req, res) {
    db.Users.findAll({ where: { user_id: req.params.userId } }).then(data =>
      res.json(data)
    );
  },

  updateUser: function(req, res) {
    console.log(req.params.userId, req.body);
    db.Users.update(
      { points: req.body.points },
      { where: { user_id: req.params.userId } }
    ).then(data => res.json(data));
  },

  getRewards: function(req, res) {
    db.Rewards.findAll({}).then(data => res.json(data));
  }
};