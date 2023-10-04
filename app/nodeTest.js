"use strict";
const UserStorage = require("./src/models/UserStorage");

async function testGetUserInfo() {
  try {
    const userInfo = await UserStorage.getUserInfo();
    console.log(userInfo);
  } catch (error) {
    console.error(error);
  }
}

testGetUserInfo();
// 테스트 함수 실행
