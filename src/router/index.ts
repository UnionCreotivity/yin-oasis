import { createRouter, createWebHashHistory } from 'vue-router'

//首頁
import HomeView from '@/views/home/HomeView.vue'

//品牌精鑄
import BrandView from '@/views/brand/BrandView.vue'
import DeepView from '@/views/brand/deep/DeepView.vue'
import InterView from '@/views/brand/inter/InterView.vue'
import TeamView from '@/views/brand/team/TeamView.vue'
import CraftView from '@/views/brand/craft/CraftView.vue'

//13期首席
import ChoiceView from '@/views/choice/ChoiceView.vue'
import MetroView from '@/views/choice/metro/MetroView.vue'
import TransView from '@/views/choice/trans/TransView.vue'
import RiseView from '@/views/choice/rise/RiseView.vue'

//森粼雅居
import BuildingView from '@/views/building/BuildingView.vue'
import FloorPlanView from '@/views/building/floorPlan/FloorPlanView.vue'
import FloorPlanInnerView from '@/views/building/floorPlanInner/FloorPlanInnerView.vue'

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
        {
          path: 'team',
          name: 'team',
          component: TeamView,
        },
        {
          path: 'craft',
          name: 'craft',
          component: CraftView,
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
        {
          path: 'rise',
          name: 'rise',
          component: RiseView,
        },
      ],
    },
    {
      path: '/building',
      component: BuildingView,
      children: [
        {
          path: '',
          name: 'floorplan',
          component: FloorPlanView,
        },
        {
          path: '/floorInner',
          name: 'floorInner',
          component: FloorPlanInnerView,
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
