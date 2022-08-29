<template>
  <div class="main-content">
    <a-row type="flex" justify="center">
      <a-col :span="6">
        <a-input-search placeholder="Поиск..." />
      </a-col>
    </a-row>
    <post-list :list="postList" :users="userList" class="list" :gutter="[16,16]"></post-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import '../assets/main.scss'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    postList () { return this.$store.getters["Posts/postList"] },
    userList () { return this.$store.getters["Users/userList"] }
  },
  methods: {
    ...mapActions([
      'Posts/fetchPosts'
    ])
  },
  mounted() {
    this["Posts/fetchPosts"]()
  }
})
</script>

<style lang="scss">
.list {
  margin    : 32px auto;
  max-width : 80%;
}
</style>
