![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

![Mole Image](/assets/images/mole.png "image of cartoon mole")
# Welcome to Whack-a-mole!

## [Whack-a-mole](https://drubach.github.io/https:Whack-a-mole/) is a fun game meant to test your reflexes designed primarily for chldren between 5 and 13 years of age. Features include easy to operate controls, increasing difficulty and entertaining images with a cartoonish fun atmosphere.

## [View Whack-a-mole project here](https://drubach.github.io/https:Whack-a-mole/)
![Screenshots](/assets/images/screenshotsMS2.png "Screenshots of game")

## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**Player goals**](#player-goals)
    - [**Parental goals**](#parental-goals)
    - [**Developer and Business Goals**](#developer-and-business-goals)
    - [**User Stories**](#user-stories)
    - [**Design choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies used**](#technologies-used)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)

7. [**Disclaimer**](#disclaimer)

## UX

### Project Goals
The primary goal of Whack-a-mole is to provide a fun, child friendly game to entertain it's users.
It has two target audiences: School aged children 5 to 13 and their parents. 

#### Player goals
The target audience for this game is children aged 5 to 13 years old.

Players goals are:
- A fun game to play.
- Child friendly controls.
- All controls laid out intuitively. 
- Entertaining images.
- A rewarding experience when improvements are made.

Whack-a-mole meets these needs because:
- The design is visually appealing, using these user goals as design parameters.
- Controls are logically grouped, large and the use is easily interpreted.
- Colors lean towards the primary and are therefore stimulating and icons are simple and clear. 
- There is a means to save a score and gives a reward when a new high score is achieved.
- If the decision to save high scores is not made, there is still a "great job!" given.

#### Parental goals
Parents are concerned about the amount of time children can spend playing computer games and want to be able to control 
identification and saving of information their child might enter into a website. 

Parent's goals are:
- Ability to reset or delete a stored player profile.
- A fun, well-functioning game that can be extended in its' use so additional games don't need to be purchased. 
- The ability to limit the time spent to finish a game.

Whack-a-mole meets these needs by:
- There is a reset data option that is easy to operate. 
- The game includes an increasing level difficulty (slow, med, fast) as the game is played and the abiliity to tell when improvements are made by the stored high scores.
- Each game is timed for 20 seconds.

#### Developer and Business Goals
- An appealing and functional website that works as expected and provides a rewarding, fun experience for the user.
- An educational experience in the development of an interactive website using Javascript.
- A valuable example for the developers portfolio.

#### User Stories
- As a **player** aged between 5-13 years old, I want:
1. Easily understood and operated controls.
2. Responsive and functional on all devices.
3. Feedback to know when I have been successful or not.
4. Increase the challenge when my abilities improve.
5. Positive feedback when I hit a new high score.
6. Appealing icons and images that I can understand.

- As a **parent of a player**, I want:
1. An appealing game, so that my child and I can have a positive experience when using it.
2. To know who developed the game and to be able to contact them easily. 

### Design Choices
- Design choices were made to be visually appealing to young users easy to navigate and play the game. 

**Fonts**
- The primary font **Roboto** was chosen and **Sans Serif** is used as a back up in case of a failure to load.

**Colors**
- The main colors used are **light blue**, **royal blue**, and **lawn green**.

**Styling**
- Styling is purposely colorful, complementary in contrast with large dark borders. Images are cartoon-like and brightly colored as well.

**Backgrounds**
- The header background is **light blue**.
- The body background is **royal blue**.
- The footer background is **lawn green**.

### Wireframes
Wireframes were created using [Balsamiq](https://balsamiq.com/) during the design phase of the project. -   The wireframes that were developed were ideational. After discussions with my mentor and input from friends and family, colors and other design elements were adjusted to be more attractive. 
#### Game site
![Screenshot wireframes](/assets/images/wireframesScreenSm.png "Screen design wireframes")
#### High score alert
![High score wireframe](/assets/images/hiScorePopupSm.png "High score popup wireframe")
#### Good job alert
![Good job wireframe](/assets/images/goodJobPopupSm.png "Good job popup wireframe")

## Features
### Existing Features
1. Resizes autmatically for different screen sizes.
2. Automatically increases in difficulty as the game is played by speeding up.
3. Provides for voluntary high score saving by using windows local storage.
4. If high score is saved, it acknowledges when a new high score is reached.
5. If the high score is not beaten or is not saved, it will still provide a "good job" popup.
6. Automatically counts down and records the score.
7. Provides copyright and contact information for the developer.
8. Provides feedback on a good hit by changing the image to a hammer.

### Potential Future Features
1. Providing 3 levels of difficulty to extend the use even further.
2. Sounds to provide additional feedback to gameplay.
3. Customize and improve the look of the popups.

### Known Bugs 
1. Issue - Timer for the game decremented from 0 on restart of the game.
    - Fix - Added time reset function to the start button click event. 

2. Issue - Timer for the game decremented by one immediately on reseting with start button for second game.
    - Fix - Added time out for 1 second on count down function on start button click. 

3. Issue - Score was able to be increased even after time was run out.
    - Fix - clear randomPos and hitPos variables added to time up and start button.

4. Issue - GET http://localhost:8080/favicon.ico 404 (Not Found) error.
    - Fix - Added code for a generic link to a tab icon to the head of index.html per [GitHub repository for issue](https://github.com/gridsome/gridsome/issues/711).

## Testing
### Functionality
-   The Website was tested on Google Chrome, Microsoft Edge and Safari browsers and found to function correctly.
-   The website was viewed and tested on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX and found to function correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Website Performance
Lighthouse developer tools were used to test the website performance. The four areas were examined load performance, accessibility, best practices and search engine optimiztation.
#### [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- ![Lighthouse Performance Test](/assets/images/LighthousePerfTestSm.png "Lighthouse performance test results")

### Code Syntax
Three different online tools were used to validate there were no syntax errors in the project.
#### [W3C HTML Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
- ![W3C HTML test](/assets/images/w3cHTMLtestSM.png "W3C HTML validation results")
#### [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 
- ![W3C CSS test](/assets/images/w3cCSStestSm.png "W3C CSS validation results")
#### [ExtendsClass Validator](https://extendsclass.com/javascript-fiddle.html)
- ![ExtendsClass Javascript test](/assets/images/jsTestSm.png "ExtendsClass Javascript validation results")

### User Stories
As a player aged between 5-13 years old, I want:
1. Easily understood and operated controls.
2. Responsive and functional on all devices.
3. Feedback to know when I have been successful or not.
4. Increase the challenge when my abilities improve.
5. Positive feedback when I hit a new high score.
6. Appealing icons and images that I can understand.

These needs are met by:
1. One button to press to play the game.
2. The game works on mobile and laptop devices.
3. A succesful hit is registered by an image change.
4. There is an automated increasing of speed of play.
5. There is built in high score recognition.
6. The images are fun and brightly colored.

As a parent of a player, I want:
1. An appealing game, so that my child and I can have a positive experience when using it.
2. To know who developed the game and to be able to contact them easily. 

These needs are met by:
1. The game is responsive on all devices and platforms and design choices emphasize color and simple fun graphics.
2. There is a simple footer that identifies the developer and provides links to social media for contact purposes.

## Technologies Used
### Langauges Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used
1. [Bootstrap 4.6.0:](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Roboto' font into the style.css file which is used throughout the project.
3. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used  to add icons for aesthetic and UX purposes.
4. [jQuery 3.5.1:](https://jquery.com/)
    - jQuery was added directly to the project in a minimized format to speed the loading of the functionality provided by jQuery.
5. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
6. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
    - The **Code Insititue Full Template** was used as the base of the project and Eventyret's Bootstrap 4 extension was used to generate the boilreplate HTML file. [CI Full Template](https://github.com/Code-Institute-Org/gitpod-full-template)
7. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.
8. [EZ-gif:](https://ezgif.com/png-to-webp)
    - The original images were resized and converted to webp format to save space and speed the loading of the web pages using this online service.

## Deployment
This project was developed using the [Gitpod IDE](https://gitpod.io), committed to git and pushed to GitHub. 

To deploy Whack-a-mole to GitHub Pages from its [GitHub repository](https://github.com/drubach/Whack-a-mole), the following steps were taken: 
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits
### Content
- All text in this project was written by the developer.

### Images
- The screenshots of the application were created by the developer.
- The **mole** was taken from [openclipart.org](https://openclipart.org/image/2400px/svg_to_png/168496/mole2.png).
- The **grass** was taken from [cliparts.co](http://cliparts.co/cliparts/rTL/oR8/rTLoR88zc.jpg.)
- The **hammer** image was taken from [freepngclipart.com](http://freepngclipart.com/download/hammer/85555-cute-hammer-cartoon-hq-image-free-png.png).
- The **running mole** is taken from [clipartjunction.com]https://www.clipartjunction.com/wp-content/uploads/2018/10/Mole-Running-Clipart-Images-1024x911.png.

### Code
- The read me was created by editing this [sample readme](https://github.com/Code-Institute-Solutions/SampleREADME) from Code Institute.
- A significant portion of the code for this project was copied and edited from the previous projects I completed in the program.
- Code for the game board grid was based upon guidance from the site [css-tricks.com](https://css-tricks.com/snippets/css/complete-guide-grid/).
- Guidance for code to create the high score save yes/no modal was taken from [Stackoverflow](https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options).
- Guidance for local storage of high score and game count was taken from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

### Acknowledgements
Special thanks to: 
- Code Institute Mentor **Caleb Mbakwe** for his time and support in the production of this project.
- My son, **Jacob Rubach** who is also a student in this program.
- Tutor support at **Code Institute** for their support.

#### Disclaimer
This website and all content are for educational purposes only.
