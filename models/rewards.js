module.exports = (sequelize, DataTypes) => {
    const Rewards = sequelize.define('Rewards', {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      link: DataTypes.STRING,
      points: DataTypes.INTEGER
    });
    return Rewards;
  };