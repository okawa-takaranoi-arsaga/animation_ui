<template>
  <ul class="list-container">
    <li v-for="(item, index) in list" :key="index" class="list_item">
      <media :content="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'

import Media, { Title } from './Media.vue'

type DataType = {
  list: Title[]
}
export default defineComponent({
  components: {
    Media,
  },
  data(): DataType {
    return {
      list: ['テスト1', 'テスト2', 'テスト3'],
    }
  },
})
</script>

<style lang="scss" scoped>
* {
  &_item {
    & + & {
      margin-top: 24px;
    }
  }
}
</style>
