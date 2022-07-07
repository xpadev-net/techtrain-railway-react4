/// <reference types="vite/client" />

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
type Thread = {
  id: number,
  title: string
}
type Posts = {
  threadId: string,
  posts:{id:string,post:string}[]
}