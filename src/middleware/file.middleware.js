const path = require('path')
const Multer = require('koa-multer')
const { PICTURE_PATH, ATTACHMENT_PATH } = require('../constants/file-path')

const storagePicture = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PICTURE_PATH); // 指定图片存储的目录
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // 获取原始文件的扩展名
    cb(null, file.fieldname + '-' + Date.now() + ext); // 使用当前时间戳作为文件名，并添加扩展名
  }
});
const pictureUpload = Multer({ storage: storagePicture });
const pictureHandler = pictureUpload.array('picture', 30)


const storageAttachment = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, ATTACHMENT_PATH); // 指定图片存储的目录
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // 获取原始文件的扩展名
    cb(null, file.fieldname + '-' + Date.now() + ext); // 使用当前时间戳作为文件名，并添加扩展名
  }
});
const attachmentUpload = Multer({ storage: storageAttachment });
const attachmentHandler = attachmentUpload.array('attachment', 30)

module.exports = {
  pictureHandler,
  attachmentHandler,
}
