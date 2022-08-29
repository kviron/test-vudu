<template>
  <div>
    <slot>
      <a-row type="flex" :gutter="gutter">
        <post-item v-for="post in list" :key="post.id" :post="post"></post-item>
      </a-row>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PostsList",
  props: {
    list: {
      type: Array
    },
    gutter: Array
  }
})
</script>

<style scoped lang="scss">

</style>
