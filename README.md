## Week 1 Assignment: Flixster

Submitted by: **Benjamin Martinez**

Estimated time spent: **10** hours spent in total

Deployed Application: [Flixster Deployed Site](https://ben-martinez.github.io/flixster_starter/)

### Application Features

#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages. 
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

`![Demo walkthrough of project](demo.gif)`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics like learning how to use API requests, updating CSS and HTML dynamically with JS, and general website design were very useful in preparing me for this assignment.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
There were many things I wanted to add and change that I couldn't implement within the time constraint. I would want to implement:
- Filters by genre
- Search sorting options
- Header search bar that stays when scrolling
- More Home page categories with updated UI for side scrolling on the different categories (like netflix)
- Make movie posters size more responsive to window size
- Show more info on movie information like genre, related movies, cast and director, etc.


* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I liked how the CSS style turned out, very minimalistic. Something that was unresolved was that I did not display movies that did not have a poster. Also, when loading the new images, it is slow because I am requesting their images, processing them and displaying them all at once which can be optimized by processing them before displaying. Others implemented embedding trailers which is something I want to add. 


### Open-source libraries used

- n/a

### Shout out
Shout out to Phineas, Isa, and Josh for looking over my code and helping out with ideas!