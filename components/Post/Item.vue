<template>
  <a-col :span="6">
    <a-card :title="post.title" class="item">
      {{ post.body }}
    </a-card>
  </a-col>
</template>

<script lang="ts">
import Post from "~/interfaces/Post";
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PostsItem",
  props: {
    post: {
      type: Post
    }
  }
})
</script>

<style scoped lang="scss">
.item {
  height : 100%;
}
</style>
