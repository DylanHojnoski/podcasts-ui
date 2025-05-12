import { Injectable } from "@angular/core";
import { FeedService } from "src/app/services/feed.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addFeed, addFeedFailure, addFeedFollow, addFeedFollowFailure, addFeedFollowSuccess, addFeedSuccess, loadFeedCategories, loadFeedCategoriesFailure, loadFeedCategoriesSuccess, loadFeeds, loadFeedsFailure, loadFeedsForCategory, loadFeedsForCategoryFailure, loadFeedsForCategorySuccess, loadFeedsSuccess, loadFollowedFeeds, loadFollowedFeedsFailure, loadFollowedFeedsSuccess, removeFeedFollow, removeFeedFollowFailure, removeFeedFollowSuccess } from "./feed.action";
import { catchError, from, map, of, switchMap } from "rxjs";

@Injectable()
export class FeedEffects {
  constructor(
    private actions: Actions,
    private feedService: FeedService,
  ) {}

  loadFeeds = createEffect(() =>
                           this.actions.pipe(
                             ofType(loadFeeds),
                             switchMap(() =>
                                       from(this.feedService.getFeed()).pipe(
                                         map((feeds) => {
                                           return loadFeedsSuccess({feeds: feeds});
                                         }
                                            ),
                                           catchError((error) => of(loadFeedsFailure({ error })))
                                       )
                                      )
                           )
                          );

  loadFollowedFeeds = createEffect(() =>
                           this.actions.pipe(
                             ofType(loadFollowedFeeds),
                             switchMap(() =>
                                       from(this.feedService.getFollowedFeeds()).pipe(
                                         map((feeds) => {
                                           return loadFollowedFeedsSuccess({feeds: feeds});
                                         }
                                            ),
                                           catchError((error) => of(loadFollowedFeedsFailure({ error })))
                                       )
                                      )
                           )
                          );

  loadFeedsForCategory = createEffect(() =>
                           this.actions.pipe(
                             ofType(loadFeedsForCategory),
                             switchMap((props) =>
                                       from(this.feedService.getFeedForCategory(props.categoryID, props.limit, props.offset)).pipe(
                                         map((feeds) => {
                                           return loadFeedsForCategorySuccess({feeds: feeds});
                                         }
                                            ),
                                           catchError((error) => of(loadFeedsForCategoryFailure({ error })))
                                       )
                                      )
                           )
                          );

  loadFeedCategories = createEffect(() =>
                           this.actions.pipe(
                             ofType(loadFeedCategories),
                             switchMap(() =>
                                       from(this.feedService.getFeedCategories()).pipe(
                                         map((categories) => {
                                           return loadFeedCategoriesSuccess({categories: categories});
                                         }
                                            ),
                                           catchError((error) => of(loadFeedCategoriesFailure({ error })))
                                       )
                                      )
                           )
                          );

  addFeed = createEffect(() =>
                           this.actions.pipe(
                             ofType(addFeed),
                             switchMap((props) =>
                                       from(this.feedService.addFeed(props.url)).pipe(
                                         map((feed) => {
                                           return addFeedSuccess({feed: feed});
                                         }
                                            ),
                                           catchError((error) => of(addFeedFailure({ error })))
                                       )
                                      )
                           )
                          );


  addFeedFollow = createEffect(() =>
                           this.actions.pipe(
                             ofType(addFeedFollow),
                             switchMap((props) =>
                                       from(this.feedService.followFeed(props.id)).pipe(
                                         map(() => {
                                           return addFeedFollowSuccess({ id: props.id });
                                         }
                                            ),
                                           catchError((error) => of(addFeedFollowFailure({ error })))
                                       )
                                      )
                           )
                          );

  removeFeedFollow = createEffect(() =>
                           this.actions.pipe(
                             ofType(removeFeedFollow),
                             switchMap((props) =>
                                       from(this.feedService.deleteFollowFeed(props.id)).pipe(
                                         map(() => {
                                           return removeFeedFollowSuccess({ id: props.id });
                                         }
                                            ),
                                           catchError((error) => of(removeFeedFollowFailure({ error })))
                                       )
                                      )
                           )
                          );
}
