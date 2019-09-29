# ga-reddit-clone
// Pivotal Tracker User stories and documentation
https://www.pivotaltracker.com/n/projects/2400263 

//Technologies Used
-HTML5: We used HTML5 for the front end of the project. 
-JavaScript: We used JavaScript for handling the APIs and collecting information from the front end.
-CSS: We used CSS for basic styling of the pages

We also created a Module to handle the API functions so we didn't have to write out Fetch() statements on every Fetch() call. All we had to do was pass the necessary parameters and the module handled everything. This method made it easier to read what call we were making on the Fetch() call.

//General Planning
For this project, we had a couple of desgins in mind on how to create it. We started by looking at reddit to try to get a understanding of the layout of everything. Then once we understood what went where, we created sketches for how we want our final design to start looking. We created 4 different diesgins for each function. We created a home page, a login page, a sign up page, and a page for creating post. Creating the seperate pages helped us out while coding because we were able to test each page for functionality before we linked it to the home page. 

Once we had our design, we spent most of our time using the white boards in GA to plan out our coding. We created a lot of psudeo code which helped in actually writing the actually code because we understood what the functions were supposed to do. We spent the beginning of the project coding by ourselves with our respsonsibilites split between creating the module for the APIs and creating the front end of the site. Once the front end was finished, we started pair programming when writing the JavaScript code. We split time pair programming so we can get the maximun output on our knowledge. 

//Problems
We ran into a couple of problems when developing our project. One of the main errors we were getting was a CORS issue which wouldn't let us get data from the other pages. We solved this issue by testing our project on the Visual Studio server. Another issue we ran into came when we were designing our project. When creating the layout of our assignment, we descided to use the HTML tag of frames to section off the home page. The problem was that frames were discontiuned in HTML5 and was replaced with iframes. When we implemented iframes, the iframe came out as too small so we stopped using it. Later in the project, we went back to iframes because we still had a layout issue. We solved the problem by googling how to make iframes full screen.
