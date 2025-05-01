import { createReducer, on } from "@ngrx/store";
import { addFeed, addFeedFailure, addFeedFollow, addFeedFollowFailure, addFeedFollowSuccess, addFeedSuccess, loadFeedCategories, loadFeedCategoriesFailure, loadFeedCategoriesSuccess, loadFeeds, loadFeedsFailure, loadFeedsForCategory, loadFeedsForCategoryFailure, loadFeedsForCategorySuccess, loadFeedsSuccess, loadFollowedFeeds, loadFollowedFeedsFailure, loadFollowedFeedsSuccess, removeFeedFollow, removeFeedFollowFailure, removeFeedFollowSuccess } from "./feed.action";
import { Feed } from "src/app/models/feed";
import { Category } from "src/app/models/category";

export interface FeedState {
  feeds: Feed[],
  followedFeeds: Feed[],
  categories: Category[],
  error: string | null;
}

export const initialState: FeedState = {
  feeds: [],
  followedFeeds: [],
  categories: [],
  error: null,
}

export const feedReducer = createReducer(
  initialState,

  on(loadFeeds, (state) => ({...state})),

  on(loadFeedsSuccess, (state, { feeds }) => ({
    ...state,
    feeds: feeds,
    error: null,
  })),

  on(loadFeedsFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(loadFollowedFeeds, (state) => ({...state})),

  on(loadFollowedFeedsSuccess, (state, { feeds }) => ({
    ...state,
    followedFeeds: feeds,
    error: null,
  })),

  on(loadFollowedFeedsFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(loadFeedsForCategory, (state) => ({...state})),

  on(loadFeedsForCategorySuccess, (state, { feeds }) => ({
    ...state,
    feeds: feeds,
    error: null,
  })),

  on(loadFeedsForCategoryFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(loadFeedCategories, (state) => ({...state})),

  on(loadFeedCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories: categories,
    error: null,
  })),

  on(loadFeedCategoriesFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(addFeed, (state) => ({...state})),

  on(addFeedSuccess, (state, { feed }) => ({
    ...state,
    feeds: state.feeds.concat(feed),
    error: null,
  })),

  on(addFeedFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(addFeedFollow, (state) => ({...state})),

  on(addFeedFollowSuccess, (state, { id }) => ({
    ...state,
    followedFeeds: state.followedFeeds.concat({id: id} as Feed),
    error: null,
  })),

  on(addFeedFollowFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(removeFeedFollow, (state) => ({...state})),

  on(removeFeedFollowSuccess, (state, { id }) => ({
    ...state,
    followedFeeds: state.followedFeeds.filter(f => f.id != id),
    error: null,
  })),

  on(removeFeedFollowFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
)
