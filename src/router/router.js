
//1导入vue-router包
import VueRouter from 'vue-router'
//导入account组件
import account from '../main/account.vue'
//导入goodlist组件
import goodlist from '../main/goodlist.vue'
//导入account的两个子组件
import login from '../subcom/login.vue'
import register from '../subcom/register.vue'

//3.创建路由对象
var router = new VueRouter({
   routes:[
       //account goodlist
       {
           path:'/account',
           component:account,
           children:[
               {path:'login',component:login},
               {path:'register',component:register}
           ]
       
       },
       {path:'/goodlist',component:goodlist}
   ]
})

//把路由对象给暴露出去
export default router