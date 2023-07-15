const fs = require('fs');
const fileService = require('../service/file.service')
const { PICTURE_PATH, ATTACHMENT_PATH } = require('../constants/file-path')
const config = require('../app/config')

class FileController {
  async download(ctx, next) {
    const { filename } = ctx.params
    const [result] = await fileService.getPicture(filename)
    ctx.response.set('content-type', result.mimetype)
    ctx.body = fs.createReadStream(`${ATTACHMENT_PATH}/${result.filename}`)
  }

  async savePictureInfo(ctx, next) {
    // 1.获取图像信息
    const files = ctx.req.files
    const { type } = ctx.req.body

    // 2.将所有的文件信息保存到数据库中
    for (let file of files) {
      const { filename, mimetype, size } = file
      await fileService.createFile(filename, mimetype, size, type)
    }

    ctx.body = '文件上传成功~'
  }

  async getPicture(ctx, next) {
    const { filename } = ctx.params
    const [result] = await fileService.getPicture(filename)
    ctx.response.set('content-type', result.mimetype)
    ctx.body = fs.createReadStream(`${PICTURE_PATH}/${result.filename}`)
  }

  async getPictures(ctx, next) {
    const { type } = ctx.query
    const result = await fileService.getPictures(type)
    const newRes = []
    for (let file of result) {
      newRes.push(fs.createReadStream(`${PICTURE_PATH}/${file.filename}`))
    }
    const res = newRes.map(item => {
      const arr = item.path.split('/')
      const filename = arr[arr.length - 1]
      return {
        path: `${config.APP_HOST}:${config.APP_PORT}/file/picture/${filename}`,
      }
    })
    ctx.body = res
  }
}

module.exports = new FileController()
