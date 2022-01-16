<template>
  <div class="accordion-menu">
    <div ref="toggleButton" class="toggle" @click="toggleMenu">
      <p>開閉ボタン</p>
      <svg
        ref="arrowIcon"
        class="icon"
        fill="none"
        width="24px"
        height="24px"
        verticalAlign="bottom"
        stroke="#363636"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
    <div class="contents" ref="menuContents">
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'
import gsap from 'gsap'

export default defineComponent({
  setup() {
    const menuContents = ref<HTMLDivElement | null>(null)
    const toggleButton = ref<HTMLDivElement | null>(null)
    const arrowIcon = ref<SVGElement | null>(null)
    const scrollSpeed = 0.5
    const toggleMenu = () => {
      console.log('menucontent')
      console.log(menuContents.value, arrowIcon.value)

      if (menuContents.value && arrowIcon.value && toggleButton.value) {
        const isOpen = menuContents.value.classList.contains('-open')
        if (isOpen) {
          // 閉じる
          menuContents.value.classList.remove('-open')
          // コンテンツ
          gsap.to(menuContents.value, {
            height: 0,
            duration: scrollSpeed,
            ease: 'power2.inOut',
          })
          // ボタンのアニメーション
          gsap.to(toggleButton.value, {
            backgroundColor: 'rgba(255, 246, 127, 0.8)',
            duration: scrollSpeed,
            ease: 'power2.inOut',
          })
          // 矢印アイコン
          gsap.to(arrowIcon.value, {
            rotate: '0deg',
            duration: scrollSpeed,
            ease: 'power2.inOut',
          })
        } else {
          // 開く
          menuContents.value.classList.add('-open')
          // コンテンツ
          gsap.to(menuContents.value, {
            height: 'auto',
            duration: scrollSpeed,
            ease: 'power2.inOut',
          })
          // ボタンのアニメーション
          gsap.to(toggleButton.value, {
            backgroundColor: 'rgba(255, 246, 127, 1)',
            duration: scrollSpeed,
            ease: 'power2.inOut',
          })
          // 矢印アイコン
          gsap.to(arrowIcon.value, {
            rotate: '-180deg',
            duration: scrollSpeed,
            ease: 'power2.inOut',
          })
        }
      }
    }
    return {
      menuContents,
      toggleMenu,
      arrowIcon,
      toggleButton,
    }
  },
})
</script>

<style lang="scss">
.accordion-menu {
  font-family: 'M PLUS 1p', sans-serif;
  border-radius: 10px;
}

.accordion-menu > .toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  background-color: rgba(255, 246, 127, 0.8);
}

.accordion-menu > .contents {
  height: 0;
  padding: 0 10px;
  overflow: hidden;
  font-size: 14px;
  line-height: 2;
  background-color: rgba(255, 246, 127, 1);
  transform-origin: bottom;
}
</style>
