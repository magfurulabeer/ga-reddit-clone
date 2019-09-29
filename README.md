# ga-reddit-clone

### Pivotal Tracker User stories and documentation:
https://www.pivotaltracker.com/n/projects/2400263 

### Technologies Used:
- HTML5: We used HTML5 for the layout of the pages
- CSS: We used CSS for styling of the pages
- JavaScript: We used JavaScript for handling the APIs and user interaction

We also created an object wrapper around the API to abstract away the fetch code. It allowed us to make api calls as simple function calls passing in the approproate parameters and receiving a promise in return. It allowed for our code to cleaner and easier to read.

### General Planning:
For this project, we had a couple of desgins in mind on how to create it. We started by looking at reddit to try to get a understanding of the layout of everything. Then once we understood what went where, we created sketches for how we want our final design to start looking. We created 4 different designs for each function. We created a home page, a login page, a sign up page, a post page, and a page for creating posts. Creating the separate pages helped us out while coding because we were able to test each page for functionality before we linked it to the home page. 

Once we had our design, we spent most of our time using the white boards in GA to plan out our coding. We created a lot of psudeo code which helped in actually writing the actually code because we understood what the functions were supposed to do. We spent the beginning of the project coding by ourselves with our responsibilities split between creating the module for the APIs and creating the front end of the site. Once the front end was finished, we started pair programming when writing the JavaScript code. We split time pair programming so we can get the maximun output on our knowledge. 

### Problems:
We ran into a couple of problems when developing our project. 

One of the main errors we were getting was a CORS issue which wouldn't let import javascript files when running the local files on our browser. We solved this issue by running our project on the VSCode Live Server. 

Another issue we ran into came when we were designing our project. When creating the layout of our assignment, we descided to use the HTML frame tags to section off the home page. The problem was that frames were discontiuned in HTML5. We replaced it with an iframe but the iframe did not seem to take up the full screen. Later in the project, we took another shot with the iframe because didn't want to copy and paste our header into every page. We googled more extensively than before and found a way to get around our original sizing issue by using absolute positioning.

We had an issue with when displaying comments. We were under the impression that they were shown in order however after some testing, we realized that the comments were grouped by the user first and supposedly sorted but we managed mess with the sorting if we posted comments succession fast enough. We ended up sorting the comments client-side by the comment ids since they were in order(though it's not the best course of action since that might change in the future) and we no access to timestamps.
