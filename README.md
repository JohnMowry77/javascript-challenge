# JavaScript Homework - JavaScript and DOM Manipulation

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

## Your Task


### Before You Begin

1. Create a new repository for this project called `javascript-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Javascript challenge. Use the folder names to correspond to the challenges: **UFO-level-1** and **UFO-level-2**.

4. Add your **html** files to this folder as well as your static folder containing your javascript. This will be the main script to run for analysis.

5. Push the above changes to GitHub or GitLab.

6. Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file


### Level 1: Automatic Table and Date Search (Required)

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting. ###Refer to day 3 class time 1hr 20minutes. 

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.


### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

Steps for level 1:
1) Create a variable for data in order to leave the original data.js file intact. 

2) Get a reference to the table body

3) Loop through tableData and console.log each ufoSightings Object

4) use d3 to append one table row 'tr' for each ufoSightings value

5) Use d3 to append 1 cell "td" per ufoSightings value

6) Select the button and the form 

7) Create the handlers 

8) Complete the event handeler function for form

9) Select the unordered list element by class name

10) Remove any children from the list
