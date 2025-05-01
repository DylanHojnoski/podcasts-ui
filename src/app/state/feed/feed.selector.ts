import { createSelector } from "@ngrx/store";
import { FeedState } from "./feed.reducer";
import { AppState } from "../app.state";

export const feedState  = (state: AppState) => state.feed;

export const selectAllFeeds = createSelector(
  feedState,
  (state: FeedState) => state.feeds
);

export const selectFollowedFeeds = createSelector(
  feedState,
  (state: FeedState) => state.followedFeeds
);

export const selectCategoryFeeds = createSelector(
  feedState,
  (state: FeedState) => state.categories
);
