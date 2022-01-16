<template>
  <div class="accordion-page">
    <h1 class="title">アコーディオンメニュー</h1>
    <div class="contents">
      <div class="menu">
        <AccordionMenu />
      </div>
      <!-- <div class="menu">
        <AccordionMenu />
      </div>
      <div class="menu">
        <AccordionMenu />
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion-page {
  position: relative;
  width: 100%;
  height: 100vh;
}

.accordion-page > .title {
  padding-top: 90px;
  font-size: 18px;
  text-align: center;
}

.accordion-page > .contents {
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
</style>
