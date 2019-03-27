

import './css/index.css';


//在webpack中尝试使用vue
// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
//1导入vue-router包
import VueRouter from 'vue-router'
//2手动安装vuerouter
Vue.use(VueRouter)
//导入minit ui 组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//手动安装到vue中去
Vue.use(MintUI)

//导入bootstrap样式
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'




//导入login组件
import app from './app.vue'

//导入自定义路由
import router from './router/router.js'





var vm = new Vue({
    el: '#app',
    data: {

    },
    router: router,
    render(createElements) { //render 会把el指定的容器中，所有的内容都清空覆盖
        return createElements(app)

    },
    // components:{
    //     'login':login
    // }
})