import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    SnotifyModule,

    RouterModule.forRoot([
      { path: 'signup', loadChildren: './user/user.module' },
      { path: 'login', loadChildren: './user/user.module' },
      { path: 'passwordReset/:resetToken', loadChildren: './user/user.module' },
      { path: 'todo/:userId', loadChildren: './todo/todo.module' },
      { path: 'frnd/:guestUserId/:userId', loadChildren: './todo/todo.module' },
      // { path: 'home', component: HomeComponent },
      // { path: 'homepage', component: HomepageComponent },
      // { path: '', component: HomeComponent },
      { path: '*', component: PageNotFoundComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
