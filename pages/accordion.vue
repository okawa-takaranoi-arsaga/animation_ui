<template>
  <div class="accordion-page">
    <div class="contents">
      <div class="menu">
        <AccordionMenu />
        <AccordionMenu />
        <AccordionMenu />
      </div>
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
</style>
