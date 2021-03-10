import { TestModel } from '../db/index'
class ApiDemo {
  async getUserList(ctx) {
    const query = ctx.request.query
    const result = await TestModel.find()
    ctx.body = {
      msg: '你好世界get!',
      query,
      data: result,
    }
  }

  async addUser(ctx) {
    console.log(ctx.request.body)
    const params = ctx.request.body
    ctx.body = {
      msg: '你好世界post!',
      params,
    }
  }
}

export default new ApiDemo()
