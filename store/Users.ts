import useFetch from "~/hooks/useFetch";
import {PostInterface} from "~/store/Posts";
const {fetchApi} = useFetch()

export interface UserInterface {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface State {
  users: Array<UserInterface>
}


export const state = () => ({
  users: []
})

export const mutations = {
  updateUsers: (state: State, posts: PostInterface[]) => {
    state.users = posts
  },
}

export const getters = {
  userList: (state: State) => {
    return state.users
  }
}

export const actions = {
  // @ts-ignore
  async fetchUsers(context) {
    try {
      const response = await fetchApi.get('users')
      context.commit('updateUsers', response.data)

    } catch (e) {
      if (e instanceof TypeError) {
        alert(e.message)
      }
    }
  },

  // @ts-ignore
  async getUserById(context, id) {
    try {
      const response = await fetchApi.get('users?id=' + id)
      return response.data;

    } catch (e) {
      if (e instanceof TypeError) {
        alert(e.message)
      }
    }
  }
}
