import { createRouter, createWebHashHistory } from 'vue-router'

//首頁
import HomeView from '@/views/home/HomeView.vue'

//13期首席
import ChoiceView from '@/views/choice/ChoiceView.vue'
import MetroView from '@/views/choice/metro/MetroView.vue'
import TransView from '@/views/choice/trans/TransView.vue'

//生活機能
import LifeView from '@/views/life/LifeView.vue'

//暫時
import TempView from '@/views/temp/TempView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/temp',
      name: 'temp',
      component: TempView,
    },
    {
      path: '/choice',
      component: ChoiceView,
      children: [
        {
          path: '',
          name: 'metro',
          component: MetroView,
        },
        {
          path: 'trans',
          name: 'trans',
          component: TransView,
        },
      ],
    },
    {
      path: '/life',
      name: 'life',
      component: LifeView,
    },
  ],
})

export default router
