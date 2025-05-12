import { HttpClientModule } from '@angular/common/http';
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { FollowedFeedsComponent } from './components/followed-feeds/followed-feeds.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { PlayIconComponent } from './components/icons/play-icon/play-icon.component';
import { AddIconComponent } from './components/icons/add-icon/add-icon.component';
import { CheckmarkIconComponent } from './components/icons/checkmark-icon/checkmark-icon.component';
import { MoveIconComponent } from './components/icons/move-icon/move-icon.component';
import { UpArrowIconComponent } from './components/icons/up-arrow-icon/up-arrow-icon.component';
import { DownArrowIconComponent } from './components/icons/down-arrow-icon/down-arrow-icon.component';
import { CloseIconComponent } from './components/icons/close-icon/close-icon.component';
import { UploadIconComponent } from './components/icons/upload-icon/upload-icon.component';
import { DownloadIconComponent } from './components/icons/download-icon/download-icon.component';
import { PlayNextIconComponent } from './components/icons/play-next-icon/play-next-icon.component';
import { MuteIconComponent } from './components/icons/mute-icon/mute-icon.component';
import { SkipForwardIconComponent } from './components/icons/skip-forward-icon/skip-forward-icon.component';
import { SkipBackwardIconComponent } from './components/icons/skip-backward-icon/skip-backward-icon.component';
import { SoundIconComponent } from './components/icons/sound-icon/sound-icon.component';
import { PauseIconComponent } from './components/icons/pause-icon/pause-icon.component';
import { SecondsToTimePipe } from './helpers/seconds-to-time.pipe';
import { HamburgerIconComponent } from './components/icons/hamburger-icon/hamburger-icon.component';
import { MagnifierIconComponent } from './components/icons/magnifier-icon/magnifier-icon.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { LeftArrowIconComponent } from './components/icons/left-arrow-icon/left-arrow-icon.component';
import { RightArrowIconComponent } from './components/icons/right-arrow-icon/right-arrow-icon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/explore', pathMatch: 'full'},
  { path: 'feed/:id', component: FeedPageComponent},
  { path: 'queue', component: QueueComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'account/create-account', component: CreateAccountComponent},
  { path: 'account', component: AccountComponent},
  { path: 'category/:id', component: CategoryPageComponent},
  { path: 'feed/search/:name', component: SearchPageComponent},
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
    AccountComponent,
    FollowedFeedsComponent,
    CategoryPageComponent,
    NewPostsComponent,
    SearchComponent,
    SearchPageComponent,
    DarkModeComponent,
    PlayIconComponent,
    AddIconComponent,
    CheckmarkIconComponent,
    MoveIconComponent,
    UpArrowIconComponent,
    DownArrowIconComponent,
    CloseIconComponent,
    UploadIconComponent,
    DownloadIconComponent,
    PlayNextIconComponent,
    MuteIconComponent,
    SkipForwardIconComponent,
    SkipBackwardIconComponent,
    SoundIconComponent,
    PauseIconComponent,
    SecondsToTimePipe,
    HamburgerIconComponent,
    MagnifierIconComponent,
    LeftArrowIconComponent,
    RightArrowIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({feed: feedReducer, playing: playingReducer, posts: postsReducer, user: userReducer}),
    EffectsModule.forRoot([FeedEffects, PostEffects, UserEffects]),
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
