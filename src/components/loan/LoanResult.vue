<template>
  <div class="loan-view-result">
    <ul class="loan-result-col">
      <li class="loan-result-li">
        <h4>訂金:</h4>
        <p class="loan-result-number">{{ state.deposit }}</p>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <h4>簽約金:</h4>
        <p class="loan-result-number">{{ state.sign }}</p>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <h4>開工款:</h4>
        <p class="loan-result-number">{{ state.kickOff }}</p>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <div class="loan-result-container">
          <div class="loan-result-li-top">
            <h4>工程款:</h4>
            <p class="loan-result-number">{{ state.construction }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
          <div class="loan-result-li-bottom">(5期)</div>
        </div>
      </li>
      <li class="loan-result-li">
        <div class="loan-result-container">
          <div class="loan-result-li-top">
            <h4>契稅申款:</h4>
            <p class="loan-result-number">{{ state.tax }}</p>
            <div class="loan-result-text">萬元</div>
          </div>
          <div class="loan-result-li-bottom">(可依客戶條件併入申請貸款)</div>
        </div>
      </li>
      <li class="loan-result-li">
        <h4>交屋款:</h4>
        <p class="loan-result-number">{{ state.delivery }}</p>
        <div class="loan-result-text">萬元</div>
      </li>
    </ul>
    <ul class="loan-result-col loan-result-col-second">
      <li class="loan-result-li">
        <h4>自備金額:</h4>
        <p class="loan-result-number">{{ state.ownMoney }}</p>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li">
        <h4>貸款金額:</h4>
        <p class="loan-result-number">{{ state.loanMoney }}</p>
        <div class="loan-result-text">萬元</div>
      </li>
      <li class="loan-result-li" v-if="is_Allowance">
        <h4>前三年寬限期:</h4>
        <p class="loan-result-number">{{ state.allowancePeriodCost }}</p>
        <div class="loan-result-text">月</div>
      </li>
      <li class="loan-result-li">
        <h4>本息均攤:</h4>
        <p class="loan-result-number">{{ all }}</p>
        <div class="loan-result-text">月</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { useLoanStore } from '@/stores/loanStore'
import '@/assets/scss/live/loan-result.scss'
import { storeToRefs } from 'pinia'

const loanStore = useLoanStore()

const is_Allowance = ref(false)

// const {
//   deposit
// }=storeToRefs(loanStore)

const { state } = storeToRefs(loanStore)

watch(
  () => [state.value.allowancePeriodCost],
  () => {
    if (Number(state.value.allowancePeriodCost.replace(',', '')) > 0) {
      is_Allowance.value = true
    } else {
      is_Allowance.value = false
    }
  },
)

const all = computed(() => {
  return is_Allowance.value
    ? state.value.afterAllowancePeriodCost
    : Number(state.value.monthlyCost.replace(',', ''))
})

onMounted(() => {
  loanStore.cleanAll()
})
</script>

<style scoped></style>
