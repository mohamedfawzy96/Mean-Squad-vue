import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login';
import Search from '../components/Search';
import Profile from '../components/profile';
import NavBar from '../components/NavBar';


Vue.use(Router)

const routeView = {
  //router-view views the component chosen by the route
  template: '<router-view></router-view>'
}

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/profile',
      component:routeView ,
      //if you want to add sub routes here but most probably you won't need to
      children:[
        {
          path:'',
          component:Profile
        }
      ]
    }
  ]
})
