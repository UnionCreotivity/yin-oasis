<template>
  <div id="floor-plan-inner" :class="mainItem?.id" @click.stop="backToFloor">
    <p class="floor-plan-inner-mention">本圖面僅供參考，實際圖面依合約書附圖為準</p>
    <div class="floor-plan-inner-left" :class="[show ? 'plan-inner-left-hide' : '']">
      <div class="floor-plan-inner-left-item-1-squre"></div>
      <h1>{{ mainItem?.floor }}</h1>
      <div class="floor-plan-inner-left-item-1">
        <div>全區配置圖</div>
        <p>FLOOR PLAN</p>
      </div>
      <div
        class="floor-plan-inner-left-view"
        v-if="tag === '4F-9F' || tag === '10F'"
        @click.stop="viewClick(tag)"
      >
        景觀 VIEW
      </div>
    </div>
    <div class="floor-plan-inner-right" :class="[show ? 'plan-inner-zIndex' : '', mainItem?.id]">
      <ScaleDrag
        :max-ratio="2"
        :init="{ x: -350, y: -100 }"
        @hide-text="hideLeft"
        @show-text="showLeft"
        @watch-scale="watchScale"
      >
        <div class="container">
          <div class="anchor-area">
            <div class="anchor-area-map">
              <FadeIn>
                <div class="floor-plan-inner-right-points" v-if="treeCategory === ''">
                  <FloorPoints
                    v-for="item in mainItem?.points"
                    :key="item?.className"
                    :className="item?.className"
                    :name="item?.name"
                    :tag="item?.tag"
                    :fName="item?.fName"
                    :content="item?.content"
                    :swiperTag="item?.swiperTag"
                    :numberList="item?.numberList"
                    :listTag="listTag"
                    @hover-list-handle="hoverListHandle"
                    @out-list-handle="outListHandle"
                    @handle-click="handleClick"
                  />
                </div>
              </FadeIn>
              <img class="imgBoxMap" :src="mainItem?.image" />
            </div>
          </div>
        </div>
      </ScaleDrag>
      <div class="floor-plan-inner-left-item-3" v-if="mainItem?.list">
        <ul class="floor-plan-inner-left-ul">
          <li
            v-for="item in mainItem?.list"
            :key="item.id"
            :class="[item.id === listTag ? 'floor-plan-inner-left-hover' : '']"
          >
            <div
              class="floor-plan-inner-left-li-top"
              @mouseenter="hoverListHandle(item.id)"
              @mouseleave="outListHandle"
              @click.stop="handleClick(item.name)"
            >
              <div class="floor-plan-inner-left-li-squre"><img :src="item.number" alt="" /></div>
              <div class="floor-plan-inner-left-li-text">{{ item.name }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <Back /> -->
    <FadeIn>
      <!-- <FloorPlanInFancyBox :boxContent="boxContent" @remove-tag="removeTag" v-if="boxContent" /> -->
    </FadeIn>
    <FadeIn>
      <FloorView v-if="viewContent" :viewContent="viewContent" @view-click="viewClick" />
    </FadeIn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ScaleDrag from '@/components/scale-drag/ScaleDrag.vue'
import FloorPoints from '@/components/floorPlan/FloorPoints.vue'
import FloorView from '@/components/floorPlan/FloorView.vue'
// import FloorPlanInFancyBox from '@/components/floorPlan/FloorPlanInFancyBox.vue'
import FadeIn from '@/components/transition/FadeIn.vue'
import { FloorPlanAest, FloorPlanImg, FloorViewData } from '@/views/building/floorPlanData'
import '@/assets/scss/building/floor-plan-in-page.scss'

const route = useRoute()

const router = useRouter()

//根據網址的q來渲染資料
const tag = ref('')

//1F的列表tag
const listTag = ref('')

const clickTag = ref('')

const mainItem = ref()

const boxContent = ref<object | null>(null)

const viewContent = ref<object | null>(null)

const show = ref(false)

const treeCategory = ref('')

// const play = ref(false)

//偵測圖片是否縮放
const isScale = ref(false)

const backToFloor = () => {
  if (isScale.value) return
  router.push({
    name: 'floorplan',
  })
}

const hoverListHandle = (val: string) => {
  listTag.value = val
}

const outListHandle = () => {
  listTag.value = ''
}

const handleClick = (val: string) => {
  clickTag.value = val
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const findItem = FloorPlanImg.find((item: any) => item.name === clickTag.value)
  if (findItem) {
    boxContent.value = findItem
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const removeTag = () => {
  boxContent.value = null
  clickTag.value = ''
}

const hideLeft = () => {
  show.value = true
}

const showLeft = () => {
  show.value = false
}

// const videoClick = (val: boolean) => {
//   if (val) {
//     play.value = true
//     treeCategory.value = ''
//   } else {
//     play.value = false
//   }
// }
//偵測縮放
const watchScale = (val: boolean) => {
  isScale.value = val
}

//景觀view點擊
const viewClick = (val: string) => {
  let findItem
  if (val) {
    findItem = FloorViewData.find((item) => item.tag === val)
  } else {
    viewContent.value = null
  }

  if (findItem) {
    viewContent.value = findItem
  }
}

onMounted(() => {
  if (route.query.q) {
    tag.value = route.query.q as string
  }
  //篩選有相同tag的資料
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const findItem = FloorPlanAest.find((item: any) => item.tag === tag.value)
  mainItem.value = findItem
  console.log(mainItem.value)
})

provide('toggle', backToFloor)
</script>

<style scoped></style>
