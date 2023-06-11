const connection = require('../app/database')

class QuotesService {
  async fetchOneQuote() {
    const statement = `SELECT * FROM quotes ORDER BY RAND() LIMIT 1;`
    const [result] = await connection.execute(statement)
    return result
  }
  async fetchQuotesByHeroName(hero) {
    const statement = `SELECT * FROM quotes WHERE hero = ?;`
    const [result] = await connection.execute(statement, [hero])
    return result
  }
}

module.exports = new QuotesService()
