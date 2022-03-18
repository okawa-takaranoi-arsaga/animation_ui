<template>
  <div class="accordion-menu">
    <div ref="toggleButton" class="toggle" @click="toggleMenu">
      <h3>開閉ボタン</h3>
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

export default defineComponent({
  setup() {
    const menuContents = ref<HTMLDivElement | null>(null)
    const toggleButton = ref<HTMLDivElement | null>(null)
    const arrowIcon = ref<SVGElement | null>(null)

    const toggleMenu = () => {
      if (menuContents.value && arrowIcon.value && toggleButton.value) {

        const isOpen = toggleButton.value.classList.contains('-open')
        if (isOpen) {
          // 閉じる
          toggleButton.value.classList.remove('-open')
        } else {
          // 開く
          toggleButton.value.classList.add('-open')
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

  > .contents {
    max-height: 0;
    padding: 0 10px;
    overflow: hidden;
    font-size: 14px;
    line-height: 2;
    background-color: rgb(238, 238, 235);
    transition: max-height 0.6s ease-in;
  }

  > .toggle > .icon {
    transition: transform 0.6s ease-in;
    transform: rotateZ(0deg);
  }

  > .toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
    background-color: rgb(195, 195, 195);

    &.-open > .icon {
      transform: rotateZ(-180deg);
    }

    &.-open ~ .contents {
      max-height: 100vh;
    }
  }
}

</style>
