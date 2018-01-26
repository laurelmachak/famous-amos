'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    // id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthday: DataTypes.DATE,
    favoriteFood: DataTypes.STRING,
    picUrl: DataTypes.TEXT,
    picUrlSq: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Pet;
};
