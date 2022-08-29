<template>
  <a-col :span="6">
    <a-card class="item" :title="post.title">
      {{ post.body }}
      <a-card-meta >
        <template #description></template>
      </a-card-meta>
    </a-card>
  </a-col>
</template>

<script lang="ts">
import Post from "~/interfaces/Post";
import { mapActions } from 'vuex'
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PostsItem",
  props: {
    post: Post
  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    ...mapActions([
      'Users/getUserById'
    ])
  }
})
</script>

<style scoped lang="scss">
.item {
  height : 100%;
}
</style>
