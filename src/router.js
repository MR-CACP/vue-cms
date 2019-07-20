import VueRouter from 'vue-router';

import home from './component/tabbar/home.vue';
import member from './component/tabbar/member.vue';
import search from './component/tabbar/search.vue';
import shopcar from './component/tabbar/shopcar.vue';
import NewsList from './component/news/NewsList.vue';
import NewsInfo from './component/news/NewsInfo.vue';
import PhotoList from './component/Photos/PhotoList.vue';

const router = new VueRouter({
  routes: [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/search', component: search },
    { path: '/shopcar', component: shopcar },
    { path: '/home/NewsList', component: NewsList },
    { path: '/home/PhotoList', component: PhotoList },
    { path: '/home/NewsInfo/:id', component: NewsInfo }
  ],
  linkActiveClass: "mui-active",
})

export default router