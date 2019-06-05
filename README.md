# F1 Midfield Fantasy

F1 tracker is an app that allows the user to keep track of their selected teams and drivers that compete in the Formula 1 World Championship. The user is able to select and add teams/drivers to their profile that is created when logged in. The user is then able to see live updates of each teams/drivers stats after every race. The user is also able to remove teams/drivers from their profile.


## Screenshots

 ![Landing Page](../master/images/f1-tracker.png)

![Logged in](../master/images/f1-tracker-loggedin.png)

![ERD](../master/images/erd.png)



## Pseudocode



Set up Oauth verification. 

Set up models with driver, team, and user Schema. 
Assign properties within schemas:
Driver Properties: name, team, position, points
UserTeam Properties: drivers, name
User Properties: name, email, Userteam

Require models in routes
Set routes to get all drivers, create new team, add and remove driver, and delete team.
Create request function to pull teams/drivers info from API

Set routes to get post put and delete.
Set route to get index.
Set route to get new.
Set route to post new to index.
Set route to get show.

Set controller to render index.
Set controller to render new.
Set controller to post new to index.
Set controller to get show.
Set controller to create post.
Set controller to render request from api. 

Set route to delete selected id.
Set controller to delete selected id.

Set route to get to edit view.
Create edit view.
Set controller to get to edit view.
Set route to put update on id.




## Technologies Used

JavaScrip, Express, Node.js, MongoDb, Mongoose, Heroku

## Getting Sarted 

Link to game - [F1 Tracker](https://whispering-mountain-71039.herokuapp.com)

## Authors

* **Omar Calzada** - [omarclzd](https://github.com/omarclzd)

## Next Steps

* Add team and driver stats
* Add team and driver icons



