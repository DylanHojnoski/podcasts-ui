import { Category } from "./category";
import { Post } from "./post";

export class Feed {
  id: string = "";
  name?: string;
  description?: string;
  image?: string;
  url?: string;
  posts: Post[] = [];
  categories: Category[] = [];
}
