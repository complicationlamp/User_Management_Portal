# User_Management_Portal

Dear User, this code can be run by cloning the file and using the npm install command in the terminal, while inside the file.
Note there is an error in this code which I have yet to solve. In order to run the page on NPM the error in detail page, must be commented out line 27 of user-detail.component. Once running if you uncomment the error // .subscribe(user => this.user = user); the detail page will render.
this application was built atop the angular quicks tart package and has been

Also, due to an overly packed schedule and lack of experience with angular, typescript, and bootstrap this application is incomplete, but was a fun learning experience for myself.

Following steps to complete:
-get the permissions checkbox to correctly display and update the user information
-create an editable list of roles that can be assigned to the user and edited fully. 
-move styling from css to bootstrap  (note that css styling is primarily from the angular docs and was meant as a stand in until the end, I simply ran out of time)
-style the app so that all containers and tables are cleanly centered and have a sleek look to them
-during mobil view have the columns of the table collapse so that only the name and id show, less important such as the email can be hidden and permissions can be hidden in mobil view
-add the ability to export the file into a csv file.
-set up testing: 
    -include smoke testing for basic rendering of elements on home and details page
    -include testing for adding and removing a person from the table
    -include testing for editing all details for the user
    -include testing for permissions such as the ability to add more than one permission
    -include testing for the ability to create, update assign and delete roles.
