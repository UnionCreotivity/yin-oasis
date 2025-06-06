<template>
  <section class="fancy-container">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.fancy-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgb(68, 94, 97) 0%,
    rgb(84, 114, 115) 44%,
    rgb(95, 128, 129) 100%
  );
  overflow: hidden;
  z-index: 15;
}
</style>
