const Router = require('koa-router')

const { pictureHandler, attachmentHandler } = require('../middleware/file.middleware')
const { savePictureInfo, getPictures, getPicture, download } = require('../controller/file.controller')

const fileRouter = new Router({ prefix: '/file' })

fileRouter.post('/upload/picture', pictureHandler, savePictureInfo)
fileRouter.post('/upload/attachment', attachmentHandler, savePictureInfo)
fileRouter.get('/pictures', getPictures)
fileRouter.get('/picture/:filename', getPicture)
fileRouter.get('/download/:filename', download)
module.exports = fileRouter
