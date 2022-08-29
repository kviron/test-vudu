import useFetch from "~/hooks/useFetch";

const {fetchApi} = useFetch()

export interface PostInterface {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface State {
  posts: Array<PostInterface>
}

export const state = () => ({
  posts: []
})

export const mutations = {
  updatePosts: (state: State, posts: PostInterface[]) => {
    state.posts = posts
  },
}

export const getters = {
  postList: (state: State) => {
    return state.posts
  }
}

export const actions = {
  //@ts-ignore
  async fetchPosts(context) {
    try {
      const response = await fetchApi.get('posts')
      context.commit('updatePosts', response.data)

    } catch (e) {
      if (e instanceof TypeError) {
        alert(e.message)
      }
    }
  }
}
