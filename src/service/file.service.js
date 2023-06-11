const connection = require('../app/database')

class FileService {
  async createFile(filename, mimetype, size, type) {
    const statement = `INSERT INTO file (filename, mimetype, size, type) VALUES (?, ?, ?, ?)`
    const [result] = await connection.execute(statement, [filename, mimetype, size, type])
    return result
  }
  async getPicture(filename) {
    const statement = `select * from file where filename = ?;`
    const [result] = await connection.execute(statement, [filename])
    return result
  }
  async getPictures(type) {
    const statement = `select * from file where type = ?;`
    const [result] = await connection.execute(statement, [type])
    return result
  }
}

module.exports = new FileService()
