# Teddi
# <https://teddi.herokuapp.com/>
Be able to organize your adventures better! Teddi has up to date information on all of the United States National Parks. Sign up to save your favorite parks that you have been to or plan on going to and have all the information you need. 
Feel free to use this account:  
  **username** - _theo@teddi.com_  
  **password** - _teddi123_  

## Technologies Used
  * Node/Express
    * Key modules: 
      * Passport / Bcrypt - Authentication and password hashing
  * PostgreSQL
  * Sequelize
  * jQuery
  * Bootstrap

## User Stories
The target user group for this app is those who are planning to do a trip to see any of the US National Park, and those who might have already travelled to see these parks and want to keep track of what they have seen. 

As a user, I want to be able to:
  * Search through all of the national parks
  * View more details about each park
  * Save the park to my profile if it is one that interests me
  * Also, delete anyone 

## Aproach 

### *Sprint 1*
* Wireframe application using draw.io
![trello-1](/public/img/readme-img/wireframe-1.png)  

* Setup Trello Board
![trello-1](/public/img/readme-img/trello-1.png)

* Add and populate gitignore file
* Decide on technologies
* Create database - models/associations
* Basic folder structure
* HTML for index.js filled out
* Stub out routes
* Empty ReadMe  

### *Sprint 2* 

* Add Basic styling
* Reach MVP functionality
  * Save api information to db
* Deploy to heroku

* Debug 
![trello-1](/public/img/readme-img/trello-3.png)  

### *Sprint 3*

* Finishing Touches
* Advanced Styling
* Fill out ReadMe
* Begin strech goals
![trello-4](/public/img/readme-img/trello-4.png)

## Steps to Setting Up
If you'd like to set this project up on your own local server:
* Fork and clone this repository
* Run `npm install` to install dependencies
  * Use `nodemon` to start your application
* Setup your database (this app already has one existing model)
  * Run `createdb teddi` to create the database
  * Run `sequelize db:migrate` to run migrations
* Create .env file, which will need to include:
  * `SESSION_SECRET` (you determine this)
  * `API_KEY` (from your NPS service account)

## Backlog
* Give users ability to comment on the different parks
* Allow users to have a more customized profile page (add profile picture)
* Images to search results (web scrape wikipedia)
* Like/dislike column -- star system