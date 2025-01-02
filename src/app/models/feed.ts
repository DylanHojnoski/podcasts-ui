import { Post } from "./post";

export class Feed {
  id: string = "";
  name?: string;
  image?: string;
  url?: string;
  posts: Post[] = [];
}
