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
import { FeedsComponent } from './components/feeds/feeds.component';
import { AddFeedComponent } from './components/add-feed/add-feed.component';
import { ExploreCategoryComponent } from './components/explore-category/explore-category.component';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QueueComponent } from './components/queue/queue.component';
import { ExploreComponent } from './components/explore/explore.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'feed/:id', component: FeedPageComponent},
  { path: 'queue', component: QueueComponent},
  { path: 'explore', component: ExploreComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostsComponent,
    PlayingComponent,
    FeedsComponent,
    AddFeedComponent,
    ExploreCategoryComponent,
    HomeComponent,
    FeedPageComponent,
    NavbarComponent,
    QueueComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({feed: feedReducer, playing: playingReducer, posts: postsReducer}),
    EffectsModule.forRoot([FeedEffects, PostEffects]),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
