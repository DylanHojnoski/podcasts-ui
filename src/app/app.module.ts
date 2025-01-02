import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule, } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffects } from './state/feed/feed.effects';
import { feedReducer } from './state/feed/feed.reducer';
import { PlayingComponent } from './components/playing/playing.component';
import { playingReducer } from './state/playing/playing.reducer';
import { postsReducer } from './state/posts/posts.reducer';
import { PostEffects } from './state/posts/posts.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostsComponent,
    PlayingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({feed: feedReducer, playing: playingReducer, posts: postsReducer}),
    EffectsModule.forRoot([FeedEffects, PostEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
