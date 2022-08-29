<template>
  <div>
    <slot>
      <a-row type="flex" :gutter="gutter">
        <post-item v-for="post in list" :user="getUser(post.userId)" :key="post.id" :post="post"></post-item>
      </a-row>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PostsList",
  props: {
    list: Array,
    users: Array,
    gutter: Array
  },
  methods: {
    getUser(id: number) {
      return this.users?.filter((user) => {
        // @ts-ignore
        return user.id === id
      })
    }
  },
  mounted() {
    console.log(this.getUser(1))
  }
})
</script>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
