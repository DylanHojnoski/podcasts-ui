import { Injectable } from "@angular/core";
import { FeedService } from "src/app/services/feed.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadFeeds, loadFeedsFailure, loadFeedsSuccess } from "./feed.action";
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
}
