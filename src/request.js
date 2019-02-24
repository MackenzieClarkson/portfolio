module.exports = (sequelize, DataTypes) => {
  const request = sequelize.define('request', {
    oid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    project_oid: {
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'requested_ts',
    },
  },
{
  createdAt:false,
  freezeTableName: true,
})
  request.associate = function(models) {

  }
  return request
}
