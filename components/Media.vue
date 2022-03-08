<template>
  <h2>{{ value }}</h2>
</template>
<script lang="ts">
import { ref, defineComponent, PropType } from '@nuxtjs/composition-api'

export type Title = String
export default defineComponent({
  props: {
    content: {
      type: String as PropType<Title>,
      default: '',
      required: true,
    },
  },
  computed: {
    value(): String {
      return this.content !== '' ? this.content : 'タイトル'
    },
  },
})
</script>
