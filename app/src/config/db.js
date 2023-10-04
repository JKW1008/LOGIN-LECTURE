const mariadb = require("mariadb");

const db = mariadb.createPool({
  host: "svc.sel4.cloudtype.app",
  user: "test",
  password: "1234",
  database: "dsl",
  port: 30105,
});

// 데이터베이스 연결 시도
db.getConnection()
  .then((conn) => {
    console.log("MariaDB 연결 성공");
    conn.release(); // 연결 해제
  })
  .catch((err) => {
    console.error("MariaDB 연결 오류:", err);
  });

module.exports = db;
