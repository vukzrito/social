'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    mediaUrl: DataTypes.STRING,
    mediaType: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};