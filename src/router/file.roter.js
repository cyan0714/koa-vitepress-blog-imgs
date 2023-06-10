const Router = require('koa-router')

const { pictureHandler } = require('../middleware/file.middleware')
const { savePictureInfo, getPictures, getPicture } = require('../controller/file.controller')

const fileRouter = new Router({ prefix: '/file' })

fileRouter.post('/upload', pictureHandler, savePictureInfo)
fileRouter.get('/pictures', getPictures)
fileRouter.get('/picture/:filename', getPicture)
module.exports = fileRouter
