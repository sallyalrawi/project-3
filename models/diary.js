module.exports = (sequelize, DataTypes) => {
    const Diary = sequelize.define('Diaries', {
      user_id: DataTypes.STRING,
      meal: DataTypes.STRING,
      description: DataTypes.STRING,
      calories: DataTypes.INTEGER
    });
    return Diary;
  };