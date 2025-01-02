import { createAction, props } from "@ngrx/store";
import { Feed } from "src/app/models/feed";

export const loadFeeds = createAction('Load Feeds');

export const loadFeedsSuccess = createAction(
  'Feeds Load Success',
  props<{ feeds: Feed[] }>()
);

export const loadFeedsFailure = createAction(
  'Feeds Load Failure',
  props<{ error: string }>()
)

export const addFeed = createAction(
  'Add Feed',
  props<{ url: string }>()
);

export const addFeedSuccess = createAction(
  'Add Feed Success',
  props<{ feed: Feed }>()
);

export const addFeedFailure = createAction(
  'Add Feed Failure',
  props<{ error: string }>()
)
