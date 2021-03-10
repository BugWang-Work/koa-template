import Router from 'koa-router'
import ApiDemo from '../api/apiDemo.js'

const router = new Router()
router.prefix('/test')
router.get('/getUserList', ApiDemo.getUserList)
router.post('/addUser', ApiDemo.addUser)

export default router
