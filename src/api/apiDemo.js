 class ApiDemo {
  async demoGet(ctx){
    const query = ctx.request.query
    ctx.body = {
      msg: '你好世界get!',
      query
    }
  }

  async demoPost(ctx){
    console.log(ctx.request.body)
    const params = ctx.request.body
    ctx.body = {
      msg: '你好世界post!',
      params
    }
  }
}

export default new ApiDemo()


