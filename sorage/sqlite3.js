const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL
)`);

module.exports = {
  async getUsers() {
    try {
      const users = await new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', [], (err, rows) => {
          if (err) {
            reject(err)
            return
          }
          resolve(rows);
        });
      });

      return users;
    } catch (err) {
      return null;
    };
  },

  async addUser(user) {
    const id = await new Promise((resolve, reject) => {
      db.run('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age], function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(this.id);
      });
    });
    return { id, ...user };
  },

  async updateUser(id, updateData) {
    const changID = await new Promise((resolve, reject) => {
      db.run('UPDATE users SET name = ?, age = ? WHERE id = ?', [updateData.name, updateData.age, id], function (err) {
        if (err) {
          reject(err)
          return
        }
        resolve(this.id)
      });
    });
    if (changID === 0) {
      return null;
    }

    return this.getUserById(changID);
  },

  async deleteUser(id) {
    const changeID = await new Promise((resolve, reject) => {
      db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
        if (err) {
          reject(err);
          return
        }
        resolve(this.id);
      });
    });

    return changeID > 0;
  },

  async getUserById(id) {
    const user = await new Promise((resolve, reject) => {
      db.run('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(row);
      });
    });

    return user;
  }
}