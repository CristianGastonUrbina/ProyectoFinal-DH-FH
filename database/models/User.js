module.exports = function (sequelize, dataTypes) {
  let alias = "Users";
  //Esto es como vamos a llamar a la tabla
  let cols = {
    //Define las columnas de la tabla
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      notNull: true,
    },
    email: { unique: true, type: dataTypes.STRING, notNull: true },
    first_name: { type: dataTypes.STRING, notNull: true },
    last_name: { type: dataTypes.STRING, notNull: true },
    password: { type: dataTypes.STRING, notNull: true },
    phone: { type: dataTypes.INTEGER },
    zip: { type: dataTypes.INTEGER },
    id_user_category: { type: dataTypes.INTEGER, notNull: true },
    image: { type: dataTypes.STRING, notNull: true },
    address: { type: dataTypes.STRING },
  };
  let config = {
    //Le damos el nombre de la tabla en la DB
    tableName: "user",
    timestamps: false,
  };
  let Users = sequelize.define(alias, cols, config);
  //defino el modelo con todos los parametros que defini arriba
  Users.associate = function(models){
    Users.belongsTo(models.User_categorys,{
      foreignKey:"id_user_category",
      as:"category"
    })
  }
  return Users;
};
