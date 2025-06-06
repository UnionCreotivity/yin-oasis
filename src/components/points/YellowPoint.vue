<template>
  <div
    class="yellow-point"
    :class="[
      props.className,
      props.tag === props.activeTag || props.listKey === props.activeTag ? 'point-active' : '',
    ]"
    @click="handleClick"
  >
    <div class="yellow-point-img">
      <img src="/src/assets/img/other/yellow-button.svg" alt="" />
    </div>
    <div className="radiation">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/point/yellow-point.scss'

const props = defineProps(['tag', 'activeTag', 'listKey', 'className'])

const emits = defineEmits(['handle-tag'])

const handleClick = () => {
  emits('handle-tag', props.tag)
}
</script>

<style scoped></style>
