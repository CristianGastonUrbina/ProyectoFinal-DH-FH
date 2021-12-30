module.exports = function (sequelize, dataTypes) {
  let alias = "Brand";
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
    tableName: "brand",
    timestamps: false,
  };
  let Brand = sequelize.define(alias, cols, config);
  //defino el modelo con todos los parametros que defini arriba
  return Brand;
};
