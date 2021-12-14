# CS465-fullstack

# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA)

I personally prefered working with the single page application because typescript was much closer to java, which I use professionally, and that made it easier for me to find and fix errors in the code. It was also nice because any changes I made were automatically applied to the webpage which meant I'd be able to swap back and forth between the webpage and visual studio without having to touch the command line. It did take a lot more coding to create the angular spa however, which meant there were more mistakes and more code to fix. 

# Why did the backend use a NoSQL MongoDB database?

I use SQL databases at work and sometimes the structuring of the database can be a little difficult to work with. For this application I didn't see an obvious reason to use one over the other but if this webpage were to expand it might need to store different types of data, some of which might be unstructered. NoSql also handles schema changes slightly better

# How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

Javascript is a programming language, JSON is just a very easy way to store objects that are also easy for humans to read. Since it stores readable objects that can easily be brought back into a program, JSON is used in almost every programming language. In web development it is often used to serialize objects before they are sent to the user for use by the browser. 

#Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components

Early on in express we moved information about the vacation packages out of the HTML file to a JSON file for rendering. We later moved all of this data to the database and utilized the database connection to render these objects which provides huge storage and security benefits over storing this information in a file. This also allowed us to set up the Angular admin website the same way, and allowed the admin site to write to and read from the database.

# Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods are functions that perform a certain task within the application, endpoints are where applications communicate, and security is the use of secure programming to ensure important information not accessed by outside actors. For example, an endpoint would be when the users webrowser accesses the trips page to see what trips are available the webbrowser would ask the server for that information. The webserver would have another endpoint where it retrieves that request, then it would rely on functions to retrieve information. The functions will need to have access to information the user does not need, such as how to contact the database and read the information retrieved from it so part of software security is ensuring that only necessary information is sent back over the endpoint to the user. 

# How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

The work with github would be very useful and likely a first introduction to github for many. Github is a very heavily used system for software development and is extremely useful for maintaining the integrity of software while allowing multiple developers to work on and modify the same code. However, I have already spent a lot of time working with github and only really did some early experimenting with it in this class because I can commit straight to main here so little of what I learned in this class will be useful to me moving forward
