const fs = require('fs')
const quotesService = require('../service/quotes.service')
const config = require('../app/config')

class QuotesController {
  async getRandomQuote(ctx, next) {
    const res = await quotesService.fetchOneQuote()
    ctx.body = res
  }
  async getQuotesByHeroName(ctx, next) {
    const { hero } = ctx.query
    const res = await quotesService.fetchQuotesByHeroName(hero)
    ctx.body = res
  }
}

module.exports = new QuotesController()
