import { Component } from '@angular/core';


// broken out section for the title and how to use section of the application
@Component({
  selector: 'my-app',
  template: `
		<h1 class="h3 mb-3 font-weight-normal">{{title}}</h1>
			<p>Click on a name to continue</p>

		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'User Management Portal';
}