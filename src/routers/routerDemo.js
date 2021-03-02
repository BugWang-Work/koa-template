import Router from 'koa-router'
import ApiDemo from '../api/apiDemo.js'

const router = new Router()

router.get('/demoGet', ApiDemo.demoGet)
router.post('/demoPost', ApiDemo.demoPost)

export default router