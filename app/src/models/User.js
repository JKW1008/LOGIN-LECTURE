"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body;
    console.log(client);
    try {
      const { id, password } = await UserStorage.getUserInfo(client.id);
      if (id) {
        if (id === client.id && password === client.password) {
          return { success: true };
        }
        return {
          success: false,
          msg: "아이디 또는 비밀번호가 잘못 입력되었습니다.",
        };
      }
      return {
        success: false,
        msg: "존재하지 않는 정보입니다.",
      };
    } catch (error) {
      throw error;
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
