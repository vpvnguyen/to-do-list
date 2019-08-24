module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });

};
