import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ViewUI from 'view-design';
import store from '../store'
Vue.use(ViewUI);

const Main = ()=>import('views/main/Main')
const Home = ()=>import('views/home/Home')
const UserList = ()=>import('views/user/UserList')
const Login = ()=>import('views/Login/Login')


const router = new VueRouter({
  routes: [
    {path:'',redirect:'/main/home'},
    {path: '/main',
     component:Main,
     children:[
       {
         path:'home',
         component:Home,
         name:'Home',
         meta:{title:'主页',activeName:'0'}
       },
       {
         path: 'userList',
         component:UserList,
         meta: {title: "用户列表",activeName: '1-1'}
       }
     ]
    },
    {
      path: '/login',
      component:Login
    }
  ],
  mode:'hash'
})


export default router





router.beforeEach((to, from, next) => {
  if (to.path !== '/login'){
    if (!sessionStorage.getItem('token')){
      if (!store.state.isLogin){
        return next('/login')
      }
    }
  }
  if (to.meta.title) document.title = to.meta.title
  ViewUI.LoadingBar.start();
  next()
})

router.afterEach(route => {
  ViewUI.LoadingBar.finish();
});