module.exports = function (sequelize, dataTypes) {
  let alias = "Products";
  //Esto es como vamos a llamar a la tabla
  let cols = {
    //Define las columnas de la tabla
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    name: { type: dataTypes.STRING, allowNull: false },
    model: { type: dataTypes.STRING, allowNull: false },
    description: { type: dataTypes.STRING, allowNull: false },
    price: { type: dataTypes.FLOAT, allowNull: false },
    id_target: { type: dataTypes.INTEGER, allowNull: false },
    id_product_category: { type: dataTypes.INTEGER, allowNull: false },
    image: {
      type: dataTypes.STRING,
      defaultValue: "Dummy.jpg",
      allowNull: false,
    },
    warranty: { type: dataTypes.INTEGER, allowNull: false },
    id_brand: { type: dataTypes.INTEGER, allowNull: false },
  };
  let config = {
    //Le damos el nombre de la tabla en la DB
    tableName: "product",
    timestamps: false,
  };
  let Products = sequelize.define(alias, cols, config);
  //defino el modelo con todos los parametros que defini arriba

  Products.associate = function (models) {
    Products.belongsTo(models.Product_categorys, {
      foreignKey: "id_product_category",
      as: "category",
    });
    Products.belongsTo(models.Targets, {
      foreignKey: "id_target",
      as: "target",
    });
    Products.belongsTo(models.Brands, {
      foreignKey: "id_brand",
      as: "brand",
    });
  };

  return Products;
};
