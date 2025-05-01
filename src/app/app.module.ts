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
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'feed/:id', component: FeedPageComponent},
  { path: 'queue', component: QueueComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'account/create-account', component: CreateAccountComponent},
  { path: 'account', component: AccountComponent},
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
    ExploreComponent,
    CreateAccountComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({feed: feedReducer, playing: playingReducer, posts: postsReducer, user: userReducer}),
    EffectsModule.forRoot([FeedEffects, PostEffects, UserEffects]),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
