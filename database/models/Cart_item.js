module.exports = function (sequelize, dataTypes) {
  let alias = "Cart_items";
  //Esto es como vamos a llamar a la tabla
  let cols = {
    //Define las columnas de la tabla
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      notNull: true,
    },
    id_item_type: { type: dataTypes.INTEGER, notNull: true },
    id_item: { type: dataTypes.INTEGER, notNull: true },
    amount: { type: dataTypes.INTEGER, notNull: true },
    id_user: { type: dataTypes.INTEGER, notNull: true },
  };
  let config = {
    //Le damos el nombre de la tabla en la DB
    tableName: "cart_items",
    timestamps: false,
  };
  let Cart_items = sequelize.define(alias, cols, config);
  //defino el modelo con todos los parametros que defini arriba
  return Cart_items;
};
