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
}

module.exports = UserStorage;
