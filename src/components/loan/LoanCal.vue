<template>
  <div class="loan-view-right">
    <div class="loan-view-bg"></div>
    <div class="loan-view-right-container">
      <div class="loan-view-cal-item loan-cal-1" @click.stop="numberClick('1')">
        <img src="/src/assets/img/loan/1.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-2" @click.stop="numberClick('2')">
        <img src="/src/assets/img/loan/2.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-3" @click.stop="numberClick('3')">
        <img src="/src/assets/img/loan/3.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-4" @click.stop="numberClick('4')">
        <img src="/src/assets/img/loan/4.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-5" @click.stop="numberClick('5')">
        <img src="/src/assets/img/loan/5.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-6" @click.stop="numberClick('6')">
        <img src="/src/assets/img/loan/6.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-7" @click.stop="numberClick('7')">
        <img src="/src/assets/img/loan/7.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-8" @click.stop="numberClick('8')">
        <img src="/src/assets/img/loan/8.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-9" @click.stop="numberClick('9')">
        <img src="/src/assets/img/loan/9.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-dot" @click.stop="numberClick('.')">
        <img src="/src/assets/img/loan/dot.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-0" @click.stop="numberClick('0')">
        <img src="/src/assets/img/loan/zero.svg" alt="" />
      </div>
      <div class="loan-view-cal-item loan-cal-icon-2" @click.stop="backClick">
        <img src="/src/assets/img/loan/icon-1.svg" alt="" />
      </div>
      <button class="loan-view-right-submit" @click.stop="submitClick">確認送出</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/scss/live/loan-cal.scss'

const emits = defineEmits(['keyboard-click', 'keyboard-back-click', 'submit-click'])

const numberClick = (val: string) => {
  emits('keyboard-click', val)
}

const backClick = () => {
  emits('keyboard-back-click')
}

const submitClick = () => {
  emits('submit-click')
}
</script>

<style scoped></style>
