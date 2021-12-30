const fs = require("fs");
const path = require("path");

users = {
  User: function User(
    id,
    email,
    firstname,
    lastname,
    password,
    phone,
    zip,
    category,
    image
  ) {
    this.id = id;
    this.email = email;
    this.firstname = fisftname;
    this.lastname = lastname;
    this.password = password;
    this.phone = phone;
    this.zip = zip;
    this.category = category;
    this.image = image;
  },
  usersFilePath: path.join(__dirname, "../data/users.json"),

  getData: function () {
    return JSON.parse(fs.readFileSync(this.usersFilePath, "utf-8"));
  },

  findAll: function () {
    return this.getData();
  },

  generateId: function () {
    users = this.findAll();
    lastUser = users.pop();
    if (lastUser) {
      newId = lastUser.id + 1;
      return newId;
    } else {
      return 1;
    }
  },

  findUserbyPK: function (id) {
    let users = this.findAll();
    let user = users.find((obj) => obj.id === +id);
    return user;
  },
  findUserbyField: function (field, value) {
    let users = this.findAll();
    let user = users.find((obj) => obj[field] === value);
    return user;
  },

  create: function (newUser) {
    let users = this.findAll();
    newUser.id = this.generateId();
    users.push(newUser);

    fs.writeFileSync(this.usersFilePath, JSON.stringify(users, null, " "));
    return newUser;
  },
  delete: function (id) {
    let users = this.findAll();
    let newUsers = users.filter((obj) => obj.id !== id);
    fs.writeFileSync(this.usersFilePath, JSON.stringify(newUsers));
    return true;
  },
  edit: function (userToUpdate) {
    let users = this.findAll();
    let IndexUserToUpdate = users.findIndex(
      (obj) => obj.id === userToUpdate.id
    );
    users.splice(IndexUserToUpdate, 1, userToUpdate);
    fs.writeFileSync(this.usersFilePath, JSON.stringify(users, null, " "));
    return userToUpdate;
  },
};

// test = {
//   email: "tuviejaentanga@seratonic.com",
//   firstname: "tu papa en tanga",
//   lastname: "S.R.L.",
//   password: "Pan.Ke.Ke",
//   phone: "123456789",
//   zip: "4142",
//   cateogry: "Comprador",
//   image: "dummy.jpg",
//   id: 11,
// };
// console.log(users.edit(test));

module.exports = users;
