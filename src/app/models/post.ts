import { DatePipe } from "@angular/common";

export class Post {
  id?: string;
  title?: string;
  description?: string;
  published_at?: DatePipe;
  url?: string;
  audio?: string;
  feed_id?: string;
}
