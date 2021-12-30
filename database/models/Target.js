module.exports = function (sequelize, dataTypes) {
  let alias = "Targets";
  //Esto es como vamos a llamar a la tabla
  let cols = {
    //Define las columnas de la tabla
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      notNull: true,
    },
    name: { type: dataTypes.STRING, notNull: true },
  };
  let config = {
    //Le damos el nombre de la tabla en la DB
    tableName: "target",
    timestamps: false,
  };
  let Targets = sequelize.define(alias, cols, config);
  //defino el modelo con todos los parametros que defini arriba

  Targets.associate = function (models) {
    Targets.hasMany(models.Products, {
      as: "products",
      foreignKey: "id_target",
    });
  };
  return Targets;
};
