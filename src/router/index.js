import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

// 路由配置
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
