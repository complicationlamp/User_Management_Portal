import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
	user: User;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private location: Location
	  ) {}
// the error on line 27 must be commented out for the app to start, uncomment it to se detail page
	  ngOnInit(): void {
		this.route.params
		  .switchMap((params: Params) => this.userService.getUser(+params['id']))
		  // .subscribe(user => this.user = user);
		}
		// save also runs into a problem during the atempted fix, need to look at how user object is being passed
		save(): void {
			this.userService.update(this.user)
				.then(() => this.goBack());
		}
		// function to go back, requiers the location property to nav back to previous page
	  goBack(): void {
			this.location.back();
		}	
}