import { createRouter, createWebHashHistory } from 'vue-router'

//首頁
import HomeView from '@/views/home/HomeView.vue'

//品牌精鑄
import BrandView from '@/views/brand/BrandView.vue'
import DeepView from '@/views/brand/deep/DeepView.vue'
import InterView from '@/views/brand/inter/InterView.vue'
// import TeamView from '@/views/brand/team/TeamView.vue'

//13期首席
import ChoiceView from '@/views/choice/ChoiceView.vue'
import MetroView from '@/views/choice/metro/MetroView.vue'
import TransView from '@/views/choice/trans/TransView.vue'

//生活機能
import LifeView from '@/views/life/LifeView.vue'

//市場直擊
import LiveView from '@/views/live/LiveView.vue'
import LoanView from '@/views/live/loan/LoanView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/brand',
      component: BrandView,
      children: [
        {
          path: '',
          name: 'deep',
          component: DeepView,
        },
        {
          path: 'inter',
          name: 'inter',
          component: InterView,
        },
      ],
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
    {
      path: '/live',
      component: LiveView,
      children: [
        {
          path: '',
          name: 'loan',
          component: LoanView,
        },
      ],
    },
  ],
})

export default router
