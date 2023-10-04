"use strict";
const db = require("../config/db");
class UserStorage {
  // static getUsers(isAll, ...fields) {}

  static async getUserInfo(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM appusers WHERE id = ?", [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }

  // static async save(userInfo) {}
}

module.exports = UserStorage;
