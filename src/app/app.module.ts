import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { UsersComponent }  from './users.component';
import { UserService } from './user.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent
      }
    ])
  ],
  declarations: [ AppComponent, UserDetailComponent, UsersComponent ],
  providers: [ UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }