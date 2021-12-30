module.exports = function (sequelize, dataTypes) {
  let alias = "Services";
  //Esto es como vamos a llamar a la tabla
  let cols = {
    //Define las columnas de la tabla
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      notNull: true,
    },
    price: { type: dataTypes.FLOAT, notNull: true },
    description: { type: dataTypes.STRING, notNull: true },
    id_service_category: { type: dataTypes.INTEGER, notNull: true },
    name: { type: dataTypes.STRING, notNull: true },
    expiration_date: { type: dataTypes.DATE, notNull: true },
  };
  let config = {
    //Le damos el nombre de la tabla en la DB
    tableName: "service",
    timestamps: false,
  };
  let Services = sequelize.define(alias, cols, config);
  //defino el modelo con todos los parametros que defini arriba
  return Services;
};
