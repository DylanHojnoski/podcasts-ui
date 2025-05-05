
export class Post {
  id?: string;
  title?: string;
  description?: string;
  published_at?: string;
  url?: string;
  audio?: string;
  duration?: string;
  viewed?: boolean;
  feed_id?: string;
}

export enum Order {
  desc = "desc",
  asc = "asc"
}
