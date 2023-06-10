const connection = require('../app/database')

class FileService {
  async createFile(filename, mimetype, size) {
    const statement = `INSERT INTO file (filename, mimetype, size) VALUES (?, ?, ?)`
    const [result] = await connection.execute(statement, [filename, mimetype, size])
    return result
  }
  async getPicture(filename) {
    const statement = `select * from file where filename = ?;`
    const [result] = await connection.execute(statement, [filename])
    return result
  }
  async getPictures() {
    const statement = `select * from file;`
    const [result] = await connection.execute(statement)
    return result
  }
}

module.exports = new FileService()
