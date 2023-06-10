const Multer = require('koa-multer')
const { PICTURE_PATH } = require('../constants/file-path')
console.log('PICTURE_PATH: ', PICTURE_PATH);

const pictureUpload = Multer({
  dest: PICTURE_PATH,
})
const pictureHandler = pictureUpload.array('picture', 9)

module.exports = {
  pictureHandler,
}
