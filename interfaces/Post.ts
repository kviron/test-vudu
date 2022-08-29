import {PostInterface} from "~/store/Posts";

export default class Post implements PostInterface {
  userId: number
  id: number
  title: string
  body: string

  constructor( userId: number , id: number, title: string, body: string) {
    this.userId = userId
    this.id = id
    this.title = title
    this.body = body
  }
}
