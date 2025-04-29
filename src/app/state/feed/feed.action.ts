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

export const loadFeedsForCategory = createAction(
  'Load Feeds For Category',
  props<{ categoryID: string}>()
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
