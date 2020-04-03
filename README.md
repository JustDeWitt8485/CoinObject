# GitLab
- https://tdse2020.gitlab.io/coin-object-assessment 

# Development Plan 
- Produce 0-1 randomly
 - Math.Floor(Math.Random())
- connect Heads and Tails strings to my random 0-1 while 
producing images to match
- append strings and images to the page

# Assessment: Coin Object

# Instructions
Today you will practice what you've read about objects in JavaScript by creating a coin object. The coin object will represent whether a single coin is heads or tails. You will add several methods (a method is a function that is a property of an object) to it to support flipping the coin and displaying which side is currently facing up.

Create a directory called 'coinObject', and a JS file called coinObject.js. It is important to follow these naming instructions, or the testing/grading tools will not work.

Start from the following code template, and fill in the incomplete or missing code indicated by the comments:
Note that you will need to download or create images to use to display face-up or face-down coins for the toHTML method. Create a folder directory named images in your repository to hold them.

Also note that, by convention, an object's toString() method should always return a string which represents the object. This return value can then be used in any debugging output you may need to do. This will be a helpful convention to follow going forward. However, a toString() method should not directly produce any visual output itself – that is, for example, it shouldn't itself perform a console.log(): it should only return the string.

Test and demonstrate that your coin object is complete doing the following:

One point: Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method) and also push the result of the flip to the array 'results'. After your loop completes, return the results array.

One point: Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method). Also push each result to the array 'results' and return the results array after your loop completes.

Your HTML file should have nothing in the body except for your script tag. Instead of hard-coding HTML elements, create them dynamically with Javascript and append them to your HTML

# Submission
Push your code into your GitLab repository, and deploy it via GitLab pages.
Once you have the GitLab Pages url (ex: https://username.gitlab.io/coinObject/), go back to your code to create a README.md file, and put the GitLab Pages url and your thought process/development plan as the contents.
Push your code to your GitLab repo once more.
In Canvas, please submit your Gitlab Repo url.
In GitLab, add KA_Grading as a member on your project with "Reporter" permission.