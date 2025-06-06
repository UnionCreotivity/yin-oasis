<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="menu-icon-container" @click.stop="showClick(true)">
    <div class="menu-right">
      <img src="../../assets/img/other/menu-icon.svg" alt="" />
    </div>
    <!-- 判斷是否顯示頁面上方的submenu -->
    <div class="menu-left" @click.stop v-if="props.listTag === 'bath'">
      <div
        class="menu-left-item"
        v-for="menu in subMenu"
        :key="menu.key"
        :class="menu.toggle === props.main ? 'menu-left-item-active' : ''"
      >
        <div class="menu-left-item-inner" @click="handleToggle(menu.toggle)">
          {{ menu.name }}
          <div class="menu-left-triangle"></div>
        </div>
        <p>．</p>
      </div>
    </div>
  </div>
  <Transition name="mask">
    <div class="menu-main" v-if="is_Show">
      <div class="menu-main-bg"><img src="../../assets/img/menu/menu-bg02@2x.webp" alt="" /></div>
      <div class="menu-top">
        <router-link :to="{ name: 'home' }" class="menu-top-left">
          <div class="menu-title-1">
            <img src="../../assets/img/menu/menu-title-1.svg" alt="" />
          </div>
          <div class="menu-title-2">
            <img src="../../assets/img/menu/menu-title-2.svg" alt="" />
          </div>
        </router-link>
        <ul class="menu-top-right">
          <li class="menu-top-right-item" v-for="item in menuData" :key="item.key">
            <h4>{{ item.zhName }}</h4>
            <h5>{{ item.enName }}</h5>
            <div class="menu-links">
              <router-link :to="{ name: link.link }" v-for="link in item.list" :key="link.key">
                <p>{{ link.name }}</p>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="menu-icon-close" @click.stop="showClick(false)">
        <img src="../../assets/img/other/close-button.svg" alt="" />
      </div></div
  ></Transition>
</template>

<script setup lang="ts">
// 建材內的menu與其他的menu分開
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import { menuData } from './menuData'
import '@/assets/scss/menu/menu.scss'

//隱藏上方submenu的地方

const props = defineProps(['listTag', 'main'])

const emits = defineEmits(['toggle-main'])

const is_Show = ref(false)

const subMenu = ref<{ key: string; name: string; toggle: boolean }[]>([
  {
    key: 'main-1',
    name: '主浴',
    toggle: true,
  },
  {
    key: 'main-2',
    name: '次浴',
    toggle: false,
  },
])

const showClick = (val: boolean) => {
  is_Show.value = val
}

const handleToggle = (val: boolean) => {
  emits('toggle-main', val)
}
</script>

<style lang="scss">
.mask-enter-active,
.mask-leave-active {
  transition: all 1.5s ease;
}

.mask-enter-from,
.mask-leave-to {
  mask-position: 0vw;
}
</style>
