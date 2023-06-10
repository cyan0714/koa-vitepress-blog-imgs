const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const useRoutes = require('../router')

const app = new Koa()

app.useRoutes = useRoutes

app.use(bodyParser())
app.use(cors())
app.useRoutes()

module.exports = app
