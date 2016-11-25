# Jaunt-Social-Network
Jaunt is a social network inspired by Twitter that aims to make social interaction more fun and gratifying.<br>
Project site link: <a href='http://gsoster.github.io/Jaunt-Social-Network/'>http://gsoster.github.io/Jaunt-Social-Network/</a><br>
demo: <a href="http://ec2-52-67-182-246.sa-east-1.compute.amazonaws.com/">Jaunt demonstration</a><br>
### The Project .
Jaunt is an open-source social network project that focus in the interaction among users. The main objective of this project is to offer and easy of use and delightful plataform for final users that is also modular and easily edited by developers.

### Templates
The main point for users interaction is the timeline, We’ve crafted two handsome templates for you to use. The first one is similar to Twitter's timeline ( {{> timeline}} ). There is also a grid timeline created to arrange users posts in a charming way ( {{> gridTimeline}} ).

### Project Structure
The project aims to be modular so developers can easily develop and integrate new features.
The root project folder consists of:<br>
<b>/client</b> -> here is where we can find all code related with client. <br>
<b>/server</b> -> server code (database queries and so on). <br>
<b>/public</b> -> assets to be used in the client (eg.: images). <br>
<b>/model</b> -> database collections. 

The content inside client is divided in a way that each feature has 3 files.
eg: /leaderboard has a leaderboard.js that handles requests/events and provide data to the template. leaderboard.html is the template that defines how the data should be displayed. leaderboard.css styles the template.

### Authors and Contributors
@GSoster created this project, but anyone can help to improve it, just change something and send us a pull request.
