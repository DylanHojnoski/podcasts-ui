import { createAction, props } from "@ngrx/store";
import { Category } from "src/app/models/category";
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

export const loadFollowedFeeds = createAction('Load Followed Feeds');

export const loadFollowedFeedsSuccess = createAction(
  'Followed Feeds Load Success',
  props<{ feeds: Feed[] }>()
);

export const loadFollowedFeedsFailure = createAction(
  'Followed Feeds Load Failure',
  props<{ error: string }>()
)

export const loadFeedsForCategory = createAction(
  'Load Feeds For Category',
  props<{ categoryID: string, limit: number }>()
);

export const loadFeedsForCategorySuccess = createAction(
  'Feeds Load Success',
  props<{ feeds: Feed[] }>()
);

export const loadFeedsForCategoryFailure = createAction(
  'Feeds Load Failure',
  props<{ error: string }>()
)

export const loadFeedCategories = createAction('Load Feed Categories');

export const loadFeedCategoriesSuccess = createAction(
  'Feed Categories Load Success',
  props<{ categories: Category[] }>()
);

export const loadFeedCategoriesFailure = createAction(
  'Feed Categories Load Failure',
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

export const addFeedFollow = createAction(
  'Add Feed Follow',
  props<{ id: string }>()
);

export const addFeedFollowSuccess = createAction(
  'Add Feed Success',
  props<{ id: String }>()
);

export const addFeedFollowFailure = createAction(
  'Add Feed Failure',
  props<{ error: string }>()
);

export const removeFeedFollow = createAction(
  'Remove Feed Follow',
  props<{ id: string }>()
);

export const removeFeedFollowSuccess = createAction(
  'Remove Feed Success',
  props<{ id: string }>()
);

export const removeFeedFollowFailure = createAction(
  'Remove Feed Failure',
  props<{ error: string }>()
);
