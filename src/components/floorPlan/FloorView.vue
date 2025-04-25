<template>
  <div class="floor-view" @click.stop="back">
    <div class="floor-view-inner">
      <ul class="floor-view-ul">
        <li
          class="floor-view-li-position"
          :class="direction === 'south' ? 'floor-view-li-active' : ''"
          @click.stop="findItem('south')"
        >
          南
        </li>
        <li
          class="floor-view-li-position"
          :class="direction === 'west' ? 'floor-view-li-active' : ''"
          @click.stop="findItem('west')"
        >
          西
        </li>
        <li
          class="floor-view-li-position"
          :class="direction === 'north' ? 'floor-view-li-active' : ''"
          @click.stop="findItem('north')"
        >
          北
        </li>
        <li
          class="floor-view-li-position"
          :class="direction === 'video' ? 'floor-view-li-active' : ''"
          @click.stop="findItem('video')"
        >
          環景
        </li>
        <li class="floor-view-day-night" @click.stop="toggle">
          <img src="@/assets/img/floor-plan/day-night.svg" alt="day-night" />
        </li>
      </ul>
      <div class="floor-view-main">
        <FadeIn>
          <!-- <div
              class="floor-view-img"
              v-for="item in props.viewContent?.images"
              :key="item.tag"
              v-show="item?.tag === direction"
            >
              <video
                v-if="direction === 'video'"
                :src="item.video"
                controls
                autoplay
              ></video>
              <img :src="item.img" alt="view" v-else />
            </div> -->
          <div class="floor-view-img" v-if="imageItem?.tag === 'east'">
            <p>實景示意圖</p>
            <FadeIn>
              <img :src="imageItem?.day" alt="view" v-if="day" />
              <img :src="imageItem?.night" alt="view" v-else />
            </FadeIn>
          </div>
          <div class="floor-view-img" v-else-if="imageItem?.tag === 'west'">
            <p>實景示意圖</p>
            <FadeIn>
              <img :src="imageItem?.day" alt="view" v-if="day" />
              <img :src="imageItem?.night" alt="view" v-else />
            </FadeIn>
          </div>
          <div class="floor-view-img" v-else-if="imageItem?.tag === 'south'">
            <p>實景示意圖</p>
            <FadeIn>
              <img :src="imageItem?.day" alt="view" v-if="day" />
              <img :src="imageItem?.night" alt="view" v-else />
            </FadeIn>
          </div>
          <div class="floor-view-img" v-else-if="imageItem?.tag === 'north'">
            <p>實景示意圖</p>
            <FadeIn>
              <img :src="imageItem?.day" alt="view" v-if="day" />
              <img :src="imageItem?.night" alt="view" v-else />
            </FadeIn>
          </div>
          <div class="floor-view-img" v-else>
            <FadeIn>
              <video :src="imageItem?.videoDay" autoplay controls v-if="day" />
              <video :src="imageItem?.videoNight" autoplay controls v-else />
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FadeIn from '../transition/FadeIn.vue'
import '@/assets/scss/building/floor-view.scss'

const props = defineProps(['viewContent'])

const emits = defineEmits(['view-click'])

//方位
const direction = ref('south')

//日夜景
const day = ref(true)

//物件
const imageItem = ref<{
  tag: string
  day?: string
  night: string
  videoDay?: string
  videoNight?: string
} | null>(null)

const findItem = (val: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const item = props.viewContent?.images.find((item: any) => item.tag === val)
  direction.value = val
  imageItem.value = item
}

const back = () => {
  emits('view-click')
}

const toggle = () => {
  day.value = !day.value
}

onMounted(() => {
  findItem(direction.value)
})
</script>

<style scoped></style>
