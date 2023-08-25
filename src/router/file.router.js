const Router = require('koa-router')

const { pictureMiddleware, attachmentMiddleware } = require('../middleware/file.middleware')
const {
  savePicture,
  saveAttachment,
  getPictures,
  getPicture,
  getAttachment,
} = require('../controller/file.controller');

const fileRouter = new Router({ prefix: '/file' })

// 上传图片
fileRouter.post('/upload/picture', pictureMiddleware, savePicture)
// 上传附件
fileRouter.post('/upload/attachment', attachmentMiddleware, saveAttachment);
// 下载(获取)图片
fileRouter.get('/picture/:filename', getPicture)
// 下载(获取)附件
fileRouter.get('/attachment/:filename', getAttachment);
// 获取图片路径列表
fileRouter.get('/pictures', getPictures)

module.exports = fileRouter
