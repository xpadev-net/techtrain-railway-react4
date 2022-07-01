/// <reference types="vite/client" />

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
type Thread = {
  id: number,
  title: string,
  posts: Post[]
}
type Post = {
  id: number,
  date: number,
  name: string,
  content: string
}