module.exports = (sequelize, DataTypes) => {
    const Weight = sequelize.define('Weights', {
      user_id: DataTypes.STRING,
      weight: DataTypes.INTEGER
    });
    return Weight;
  };