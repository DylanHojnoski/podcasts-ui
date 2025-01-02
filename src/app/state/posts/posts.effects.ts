import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { PostService } from "src/app/services/post.service";
import { loadPosts, loadPostsAfterDate, loadPostsAfterDateFailure, loadPostsAfterDateSuccess, loadPostsFailure, loadPostsSuccess } from "./posts.action";

@Injectable()
export class PostEffects {
  constructor(
    private actions: Actions,
    private postService: PostService
  ) {}

  loadPosts = createEffect(() =>
                           this.actions.pipe(
                             ofType(loadPosts),
                             switchMap((props) =>
                                       from(this.postService.getFeedPosts(props.feedId)).pipe(
                                         map((posts) => loadPostsSuccess({posts: posts})),
                                           catchError((error) => of(loadPostsFailure({ error })))
                                       )
                                      )
                           )
                          );

  loadPostsAfterDate = createEffect(() =>
                           this.actions.pipe(
                             ofType(loadPostsAfterDate),
                             switchMap((props) =>
                                       from(this.postService.getFeedPostsBeforeDate(props.feedId, props.date)).pipe(
                                         map((posts) => loadPostsAfterDateSuccess({posts: posts})),
                                           catchError((error) => of(loadPostsAfterDateFailure({ error })))
                                       )
                                      )
                           )
                          );
}
