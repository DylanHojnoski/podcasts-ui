import { FeedState } from "./feed/feed.reducer";
import { PlayingState } from "./playing/playing.reducer";
import { PostsState } from "./posts/posts.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
  feed: FeedState;
  playing: PlayingState;
  posts: PostsState;
  user: UserState;
}
