<template>
  <div
    class="floor-point"
    :class="props.className"
    @click.stop="
      () => {
        emits('handle-click', props.name)
      }
    "
  >
    <div class="floor-green-point" v-if="props.name">
      <p>{{ props.name }}</p>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
    <!-- 1、2 樓用-->
    <div
      class="floor-red-point"
      :class="[props.tag === props.listTag ? 'floor-red-start' : 'floor-red-stop']"
      @mouseenter="hoverFn"
      @mouseleave="outFn"
      @click.stop="
        () => {
          emits('handle-click', props.fName)
        }
      "
      v-else
    >
      <div class="floor-red-point-img">
        {{ props.numberList }}
      </div>
      <div className="radiation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/building/floor-points.scss'

const props = defineProps([
  'className',
  'name',
  'fName',
  'tag',
  'listTag',
  'content',
  'swiperTag',
  'numberList',
])

const emits = defineEmits(['hover-list-handle', 'out-list-handle', 'handle-click'])

const hoverFn = () => {
  emits('hover-list-handle', props.tag)
}

const outFn = () => {
  emits('out-list-handle')
}
</script>

<style scoped></style>
