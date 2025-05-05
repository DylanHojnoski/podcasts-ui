import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { PostService } from "src/app/services/post.service";
import { addPostView, addPostViewFailure, addPostViewSuccess, loadPosts, loadPostsDate, loadPostsDateFailure, loadPostsDateSuccess, loadPostsFailure, loadPostsSuccess } from "./posts.action";

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
                                       from(this.postService.getFeedPosts(props.feedId, props.order)).pipe(
                                         map((posts) => loadPostsSuccess({posts: posts})),
                                           catchError((error) => of(loadPostsFailure({ error })))
                                       )
                                      )
                           )
                          );

  loadPostsDate = createEffect(() =>
                           this.actions.pipe(
                             ofType(loadPostsDate),
                             switchMap((props) =>
                                       from(this.postService.getFeedPostsDate(props.feedId, props.date, props.order)).pipe(
                                         map((posts) => loadPostsDateSuccess({posts: posts})),
                                           catchError((error) => of(loadPostsDateFailure({ error })))
                                       )
                                      )
                           )
                          );


  addPostView = createEffect(() =>
                           this.actions.pipe(
                             ofType(addPostView),
                             switchMap((props) =>
                                       from(this.postService.viewPost(props.id)).pipe(
                                         map(() => addPostViewSuccess({id: props.id})),
                                           catchError((error) => of(addPostViewFailure({ error })))
                                       )
                                      )
                           )
                          );
}
