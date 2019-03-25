/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_author: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'books'
  });
};
