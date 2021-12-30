module.exports = {
  development: {
    username: "app.cmhm",
    password: "Cmhm_2021",
    database: "cphmr",
    host: "apps.solucionescn.com",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
