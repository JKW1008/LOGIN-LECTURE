"use strict";

const { reduce } = require("async");

class UserStorage {
  static #users = {
    id: ["test", "정강우", "정팀장"],
    password: ["1234", "1234", "1234"],
    name: ["김춘삼", "김영삼", "박정희"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    // console.log(newUsers);
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, password, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;
