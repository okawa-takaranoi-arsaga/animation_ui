<template>
  <div class="inner">
    <div class="toggle-button">開閉ボタン</div>
    <div class="toggle-target">
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
      <p>テスト要素テスト要素</p>
    </div>
  </div>
</template>

<style lang="scss">
.toggle-target {
  height: 0;
  overflow: hidden;
}

.toggle-target > p {
  color: red;
}
</style>
