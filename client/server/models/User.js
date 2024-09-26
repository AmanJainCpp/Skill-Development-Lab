const db = require('../config/db');

exports.findUserByEmail = async (email) => {
  return await db.query("SELECT * FROM users WHERE email = ?", [email]);
};
