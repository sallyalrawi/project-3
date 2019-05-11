module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
      user_id: DataTypes.STRING,
      user_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      height: DataTypes.STRING,
      points: DataTypes.INTEGER
    });
    return User;
  };