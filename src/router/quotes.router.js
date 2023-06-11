const Router = require('koa-router')

const { getRandomQuote, getQuotesByHeroName } = require('../controller/quotes.controller')

const quotesRouter = new Router({ prefix: '/quotes' })

quotesRouter.get('/one-quote', getRandomQuote)
quotesRouter.get('/all-quote', getQuotesByHeroName)
module.exports = quotesRouter
