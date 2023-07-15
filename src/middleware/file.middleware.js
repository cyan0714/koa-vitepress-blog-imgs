const Multer = require('koa-multer')
const { PICTURE_PATH, ATTACHMENT_PATH } = require('../constants/file-path')
console.log('PICTURE_PATH: ', PICTURE_PATH);

const pictureUpload = Multer({
  dest: PICTURE_PATH,
})
const pictureHandler = pictureUpload.array('picture', 30)

const attachmentUpload = Multer({
  dest: ATTACHMENT_PATH,
})

const attachmentHandler = attachmentUpload.array('attachment', 30)

module.exports = {
  pictureHandler,
  attachmentHandler,
}
