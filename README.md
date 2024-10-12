<a id="top" href="https://petspace-frontend-4974c05787c4.herokuapp.com/" target="_blank"><img src="documentation/readme-image/petspace.png"></a><br />

<h2>PetSpace frontend</h2>

![x](/documentation/readme-image/amiresponsive.png)

PetSpace is a Full-Stack web application designed to facilitate content sharing among users, similar to Instagram. Utilizing Django Rest Framework for the back-end and React for the front-end, the application provides a seamless user experience for browsing, posting, and interacting with content.
<br>
<br>
Visit the website: [PetSpace](https://petspace-frontend-4974c05787c4.herokuapp.com/)
<br>

<hr>

<h1 id="contents">Contents</h1>

-   [Introduction](#introduction)
-   [Live Site](#demo)
    -   [Backend API repository](#demo)
-   [User Experience - UX](#user-experience)
    -   [User Stories](#user-stories)
    -   [Agile Methodology](#agile-methodology)
    -   [The Scope](#the-scope)
-   [Design](#design)
    -   [Colours](#colours)
    -   [Typography](#typography)
    -   [Media](#media)
    -   [Wireframes](#wireframes)
-   [Features](#features)
    -   [Homepage](#homepage)
    -   [Navigation Desktop](#navigation-desktop)
    -   [Navigation Mobile](#navigation-mobile)
    -   [Petspace Details](#post-details)
    -   [Petspace Sidebar](#sidebar)
    -   [Petspace Feed](#feed)
    -   [Liked Posts](#liked-posts)
    -   [Search Results](#search-results)
    -   [Profile](#profile)
    -   [Future Features](#future-features)
-   [Technologies](#technologies)
    -   [Languages](#languages)
    -   [React Packages](#react-packages)
    -   [Frameworks & Libraries](#frameworks)
-   [Development](#development)
    -   [Custom Components](#custom-components)
    -   [Custom Hooks](#custom-hooks)
    -   [Contexts](#custom-contexts)
    -   [React Component Diagram](#component-diagram)
-   [Testing](TESTING.md)
    -   [Automated Jest Testing Results](#testing-results)
    -   [Manual Testing Results](#testing-results)
    -   [Bugs](TESTING.md#bugs)
-   [Deployment](#deployment)
-   [Credits](#credits)

<h1 id="introduction">Introduction</h1>
Project Milestone 5 for Code Institute Full-stack development program. PetSpace - is a frontend React.js project that runs on Heroku.

This app allows users to upload posts then create, edit, add comments and add recipes from the frontend once registered & logged in.

<h1 id="demo">Live Site</h1>
A live version of the site can be found <a href="https://petspace-frontend-4974c05787c4.herokuapp.com/" target="_blank">HERE</a><br><br>

This repository is the frontend for PetSpace utilising React.js.

The backend API repository can be found <a href="https://petspace-api-195e436e05ae.herokuapp.com/" target="_blank">HERE </a><br><br>

<img src="documentation/readme-image/amiresponsive.png"><br><br>

<h1 id="user-experience">User Experience - UX</h1>

<a href="#top">Back to the top.</a>

<h2 id="user-stories">User Stories</h2>

| Category  | as      | I want to                      | so that I can                                                                                    | UI components                                |
| --------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| auth      | user    | register for an account        | have a personal profile with a picture                                                           | SignUpForm<br>ProfilePage<br>ProfileEditForm |
| auth      | user    | register for an account        | create, like and comment on posts                                                                | Post<br>PostPage<br>Comment                  |
| auth      | user    | register for an account        | follow users                                                                                     | Profile<br>ProfilePage                       |
| posts     | visitor | view a list of posts           | browse the most recent uploads                                                                   | PostsPetPage                                    |
| posts     | visitor | view an individual post        | see user feedback, i.e. likes and read comments                                                  | Post<br>PostPage                            |
| posts     | visitor | search a list of posts         | find a post by a specific artist or a title                                                      | PostsPetPage                                    |
| posts     | visitor | scroll through a list of posts | browse the site more comfortably                                                                 | InfiniteScrollComponent                      |
| posts     | user    | edit and delete my post        | correct or hide any mistakes                                                                     | PostEditForm<br>MoreDropdownMenu             |
| posts     | user    | create a post                  | share my moments with others                                                                     | PostCreateForm                               |
| posts     | user    | view liked posts               | go back often to my favourite posts                                                              | PostsPetPage                                    |
| posts     | user    | view followed users' posts     | keep up with my favourite users' moments                                                         | PostsPetPage                                    |
| like_post     | user    | like a post                    | express my interest in someone's shared moment                                                   | Post like icon                               |
| like_post     | user    | unlike a post                  | express that my interest in someone's shared moment has faded away                               | Post (un) like icon                          |
| like_comment     | user    | like a comment                    | express my interest in someone's shared opinion                                                   | Comment like icon                               |
| like_comment     | user    | unlike a comment                  | express that my interest in someone's shared opinion has faded away                               | Comment (un) like icon                          |
| like_post     | user    | see the most liked posts                 | see what posts are the most favorites                               | PopularPosts                          |
| comments  | user    | create a comment               | share my thoughts on other people's content                                                      | PostPage<br>CommentCreateForm                |
| comments  | user    | edit and delete my comment     | correct or hide any mistakes                                                                     | PostPage<br>Comment<br>MoreDropdownMenu      |
| profiles  | user    | view a profile                 | see a user's recent posts + post, followers, following count data                                | ProfilePage<br>Post                          |
| profiles  | user    | edit a profile                 | update my profile information                                                                    | ProfileEditForm                              |
| followers | user    | follow a profile               | express my interest in someone's content                                                         | Profile follow button                        |
| followers | user    | unfollow a profile             | express that my interest in someone's content has faded away and remove their posts from my feed | Profile (un) follow button 
| category | user    | create a category               | add that category to the database so other users can use it too while creating a post |AddCategory                               |
| category | user    | choose a category               | filter the posts through | ChooseCategory            |

<h2 id="agile-methodology">Agile Methodology</h2>

The Agile Methodology was used to plan this project. This was implemented through Github and the Project Board which can be seen here - <a href="https://github.com/users/alsona1188/projects/14/views/1?layout=board" target="_blank"> Petspace Frontend User Stories</a>

Through the use of the Kanban board in the projects view in Github, the project was divived into a few different sections:

-   Addons
-   Todo
-   In Progress
-   Done

![Kanban board github](documentation/readme-image/petspace_frontend_canban.png)

Github issues were used to create User Stories and any other fixes or updates for the project. This was where the project user was assigned, labels were added to provide clarity, and the story was added to the appropriate sprint and the project.

Milestones were used to create sprints. There are 4 sprints each dated appropriately. User Stories were completed based on the current sprint in progress. Each sprint was completed on time.

<h2 id="the-scope">The Scope</h2>

-   To provide users with a good clean experience when using the PetSpace website.
-   To provide users with a visually pleasing website that is intuitive to use and easy to navigate.
-   To provide a website with a clear purpose.
-   To provide role-based permissions that allows user to interact with the website example: uplaod image, like, comment and add a category.
-   To provide search functionality to find posts on the PetSpace site.

<h1 id="design">Design</h1>

<a href="#top">Back to the top.</a>

<h2 id="colours">Colours</h2>

-   I decided to stick with the high contrast colour palette to maintain a nice visual contrast when viewing the site.

<h2 id="typography">Typography</h2>

-   Utilised the DM Sans font for the complete site to keep it clean and modern.

<h2 id="media">Media</h2>

-   All images are from<a href="https://pixabay.com/" target="_blank"> Pixabay </a>

-   The logo and favicon are designed by me in<a href="https://new.express.adobe.com/" target="_blank"> Adobe Express </a>

<h2 id="wireframes">Wireframes</h2>

>Login/Signup

![](documentation/readme-image/wireframe_log.png)

>Home page

![](documentation/readme-image/wireframe_home.png)

>Create a Post

![](documentation/readme-image/wireframe_addPost.png)

>Post

![](documentation/readme-image/wireframe_post.png)

>Profile

![](documentation/readme-image/wireframe_profiles.png)

<a href="#top">Back to the top.</a>

<h1 id="features">Features</h1>

<h2 id="homepage">Homepage</h2>

-   The Home Page is the landing page of the website and that's visible first when the site loads. It is designed to allow the user to quickly find their way around the site. The homepage displays all Posts in chronological order by lateset first and the sidebar displays the top followed profiles and below that the top liked posts.

<img src="documentation/readme-image/home_page.png">

<h2 id="navigation-desktop">Navigation Desktop</h2>

-   The site navigation is done through the navigation bar at the top of each page & this is consistant throughout the website.

-   The navigation bar at the top of each page is sticky to allow access to the navigation at any time.

-   Options on the navigation bar change depending on whether the user is logged in or not.

-   Navigation menu when nobody is logged in only options are home, login & sign-up.

    <img src="documentation/readme-image/log_out.png">

-   Navigation menu when an authenticated user is logged in options are home, feed, liked, sign out & profile.

-   Users also have the + icon to add a new post or category.

    <img src="documentation/readme-image/sign_in.png">

<h2 id="navigation-mobile">Navigation Mobile</h2>

-   Navigation menu when nobody is logged in only menu options are home, login & sign-up.

-   There is also a sticky footer navigation on mobile with the only the home option.

<img src="documentation/readme-image/mobile_logout.png">

-   Navigation menu when regular authenticated user is logged in options are home, feed, liked, sign out & profile.

-   There is also an Add icon to add new post or category. 

<img src="documentation/readme-image/mobile_signin.png">

<a href="#top">Back to the top.</a>

<h2 id="post-details">Post Details</h2>

-   When an authenticated user is logged in they can upload, create, edit, like, comment on the Post detail page.

-   A tooltip displays extra info to the user regarding the button functionaliity.

-   Create Post
<img src="documentation/readme-image/add_post.png">

-   Edit Post by clicking on the 3 dots icon on the details page.

<img src="documentation/readme-image/edit_post.png">

-   Add category

<img src="documentation/readme-image/add_category.png">

-   Choose category

<img src="documentation/readme-image/choose_category.png">

-   Add a comment

<img src="documentation/readme-image/add_comment.png">

-   Edit a comment by clicking on the 3 dots icon.

<img src="documentation/readme-image/edit_comment.png">

<a href="#top">Back to the top.</a>

<h2 id="sidebar">Sidebar</h2>

-   The sidebar displays the top 6 followed foodSNAPPERS with 1 or more followers and below that the 4 top liked foodSNAPS with 2 or more likes.

-   You can also follow or unfollow a profile here.

-   Popular Profiles

<img src="documentation/readme-image/sidebar.png">

-   Below the top 6 followed Profiles the sidebar displays the 4 top liked posts with likes in decending order.

-   Popular Posts

<img src="documentation/readme-image/popular_posts.png">

<a href="#top">Back to the top.</a>

<h2 id="feed">Feed Followed Profiles</h2>

-   When an authenticated user follows a profile this will be added to their feed page which can be accessed by clicking on the feed icon on the navbar.

-   If the user has not followed anyone a message will appear to follow a user.

<img src="documentation/readme-image/feed_page.png">

<h2 id="liked-posts">Liked Posts</h2>

-   When an authenticated user likes a post this will be added to their liked Posts page which can be accessed by clicking on the heart liked icon on the navbar.

-   If the user has not liked any post a message will appear to like a foodSNAP first.

<img src="documentation/readme-image/liked_page.png">

<h2 id="search-results">Search Results</h2>

-   Enter a search word in the search box and click enter the search results will be displayed filterd by the search word.

-   The search is performed on the posts title & the username fields.

<img src="documentation/readme-image/search_bar.png">

<a href="#top">Back to the top.</a>

<h2 id="profile">Profile</h2>

-   On the profile page the user can view all the posts they have created.

-   This can be accessed by clicking on the profile image on the top right of the navbar.

-   The user can also see how many profiles followe them and how many profiles they folllow.

-   If the user is the owner of the profile they can edit their profile by clicking on the 3 dots.

<img src="documentation/readme-image/profile_page.png">

-   You can change the image and your "abut me" here.

<img src="documentation/readme-image/change_profile.png">

-   You can change your username here.

<img src="documentation/readme-image/change_username.png">

-   You can change your password here.

<img src="documentation/readme-image/change_password.png">

<a href="#top">Back to the top.</a>

<h2 id="future-features">Possible Future Features</h2>

-   Social login to allow the user to signup using Facebook or Google.

-   Allow users to tag each other by username.

-   Allowing user to chat with each other.

<h1 id="technologies">Technologies</h1>

Throughout the planning, design, testing and deployment of the PetSpace app, I have used a number of technologies listed below:

<h2 id="languages">Languages Used</h2>

-   [HTML 5](https://en.wikipedia.org/wiki/HTML/)
-   [CSS 3](https://en.wikipedia.org/wiki/CSS)
-   [JavaScript](https://www.javascript.com/)
-   [React](https://reactjs.org/)

<h2 id="react-packages">React Dependencies Used</h2>

-   [NPM](https://www.npmjs.com/package/node)<br>
    Package manager used to install dependencies
-   [React Bootstrap](https://react-bootstrap.github.io/)<br>
    Was used to style the website, add responsiveness and interactivity
-   [Axios](https://axios-http.com/docs/intro)<br>
    As the HTTP client for the app.
-   [Material UI](https://mui.com/)<br>
    Was used for certain components and icons.
-   [JWT Decode](https://www.npmjs.com/package/jwt-decode)<br>
    To help decoding JWTs token which are Base64Url encoded.
-   [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)<br>
    A component to make the post load as an infinite scroll.
-   [react-router-dom](https://www.npmjs.com/package/react-router-dom)<br>
    Bindings for using React Router in web applications.
-   [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)<br>
    Testing Library that provides custom DOM element matchers for Jest.

<h2 id="frameworks">Frameworks - Libraries - Programs Used</h2>

-   [Git](https://git-scm.com/)<br>
    Git was used for version control by utilizing the Gitpod terminal to commit to Git and push to GitHub
-   [GitHub](https://github.com/)<br>
    GitHub is used to store the project's code after being pushed from Git
-   [Heroku](https://id.heroku.com)<br>
    Heroku was used to deploy the live project
-   [Miro](https://miro.com/app/dashboard/)<br>
    Miro was used to create the wireframes & flow chart
-   [W3C - HTML](https://validator.w3.org/)<br>
    W3C- HTML was used to validate all the HTML code
-   [W3C - CSS](https://jigsaw.w3.org/css-validator/)<br>
    W3C - CSS was used to validate the CSS code
-   [Fontawesome](https://fontawesome.com/)<br>
    To add icons to the app
-   [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)<br>
    To check App responsiveness and debugging
-   [Resizepixel](https://www.resizepixel.com/)<br>
    To resize the images.
-   [Adobe Express](https://new.express.adobe.com/)<br>
    To build the logo and icon for the project

<a href="#top">Back to the top.</a>

<h2 id="component-diagram">React Component Diagram</h2>

Custom components were created to enable the code and functionality to re-used throughout the PetSpace app.

-   [PopularPosts.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/PopularPosts.js) was created to display the 4 most liked posts in decending order.

-   [NavBar.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/NavBar.js) was created to display the navigation menu and display different icons depending on if the user is logged in or not.

-   [Asset.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/Asset.js) was created to display a spinner when data is being fetched to notify the user that an action is being performed.

-   [Avatar.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/Avatar.js) was created to display the users profile image throughout the app.

-   [NotFound.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/NotFound.js) was created to display a message to the user if the content they are looking for does not exist.

-   [MoreDropdown.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/MoreDropdown.js) was created to display a message to the user if the content they are looking for does not exist.

-   [ChooseCategory.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/ChooseCategory.js) was created to choose a category and filter the posts.
-   [AddCategory.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/components/AddCategory.js) was created to add a category from the user.

<h2 id="custom-hooks">Custom Hooks</h2>

-   [useAlert.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/hooks/useAlert.js) hook was created to call the alert messaging in the app.

-   [useRedirect.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/hooks/useRedirect.js) was created to redirect the user to the homepage based on their userAuthStatus.

-   [useClickOutsideToggle.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/hooks/useClickOutsideToggle.js) was created close the expanded menu on a click outside the menu at every stage in the app.

<h2 id="custom-contexts">Custom Context</h2>

-   [AlertContext.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/contexts/AlertContext.js) was created to allow the alert functionality to be used at every stage in the app.

-   [CurrentUserContext.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/contexts/CurrentUserContext.js) was created to get the current users authentication state and redirect the user to the signin page if not signed in.

-   [ProfileDataContext.js](https://github.com/alsona1188/petspace_frontend-pp5/blob/main/src/contexts/ProfileDataContext.js) was created to setProfileData, handleFollow, handleUnfollow of user profiles and access this data throughout the app.

<a href="#top">Back to the top.</a>

<h1 id="development">Testing</h1>

<h2 id="testing-results">Automated Testing Results</h2>

-   Automated Jest Testing results [HERE](TESTING.md#automated-testing)

<h2 id="testing-results">Manual Testing Results</h2>

-   Manual Testing results [HERE](TESTING.md#manual-testing)

<h1 id="deployment">Deployment</h1>

### This project was created on GitHub and edited in GitPod by carrying out the following:

<ol>
    <li>A new repository was created without a template</li>
    <li>A meaningful name was given to my new repository and I selected 'Create Repository'</li>
    <li>I then opened the repository on GitHub and clicked the 'Gitpod' button to build the GitPod workspace which would allow me to build and edit the code used to make the <em>PetSpace</em> app.</li>
    <li>Version control was used throughout the project using the following commands in the terminal using Bash
        <ul>
            <li>git add . <strong>OR</strong> git add "file name" - to stage the changes and get them ready for being committed to the local repo.</li> 
            <li>git commit -m "Description of the update" - to save the change and commit the change to the local repo</li>
            <li>git push - to push all committed changes to the GitHub</li>
            <li>git reset "commit hash" </li>
            <li>git push -f - This was used to force changes through to the GitHub repo if either "commit --amend" or "git reset" were used</li>
        </ul>
    </li>

## Heroku

The project was deployed via <a href="https://id.heroku.com/login" target="_blank">Heroku</a>, and the live link can be found here: <a href="https://petspace-frontend-4974c05787c4.herokuapp.com/" target="_blank">PetSpace</a>

Before deploying to Heroku I created the Procfile with web: serve -s build

This project was deployed to Heroku using the Heroku CLI details below

-   Login
    To use the CLI you must log in to your Heroku account. To do this you will need to
    enter the command heroku login -i in the terminal. It requires the email and
    password you used to sign up. If you have enabled multi-factor authentication (a
    recommended security practice) then instead of your password you need an API key.
    To get the API key go to your account settings and scroll down to the section ‘API
    Key’. Click reveal and copy that, then paste it into the password prompt.

-   Creating A Heroku App
    Now that you are logged in, the first thing is to create a new app. Heroku creates a
    URL based on your app name, so it must be unique not only on your account, but
    across the whole site. You may need to try a few different names. To create an app
    use the following command, where myapp is the name of your app.

-   Here the app heroku-cli-example has been created with an output of the website
    URL. It also displays and sets the git remote repository which will be used to deploy.
    By default the region will be set to the US. If you would prefer a server based in the
    EU then you can specify the region with the flag EU.

-   When you push code to Heroku it will look at the repository contents to decide how
    to build the project. One of the factors taken into consideration is the package file.
    With a React project the standard file is a package.json file, which will have the
    list of packages needed to run the project. If this file is present it will build the project
    using the React buildpack.

## Deployment Steps On Heroku.

-   In Heroku create a new app, give it a name and choose location.

-   In the deploy tab, go to 'deployment method', choose 'Github'

-   Search for the repository in Github that you want to connect and click on the connect button

-   In the 'manual deploy' section click on 'deploy branch'

-   The build log will run, when complete you will see a message saying 'build succeeded'

-   An 'Open App' button will appear, click this to take you to your deployed app.

-   You can enable automatic deploys in the 'deployment section' so each time you push your code to 'Github' your deployed app will be updated.

## Github Local Deployment

There are many ways to deploy the project locally on your own device. Forking, Cloning, GitHub Desktop and Zip Exctraction, the steps in these processes are outlined below:

### Forking the GitHub repo

If you want to make changes to the repo without affecting it, you can make a copy of it by 'Forking' it. This will make sure that the original repo remains unchanged.

<ol>
    <li>Log in to your GitHub account</li>
    <li>Navigate to the repository <a href="https://github.com/alsona1188/petspace_frontend-pp5" target="_blank"><strong>HERE</strong></a></li>
    <li>Select the 'Fork' button in the top right corner of the page (under your account image)</li>
    <li>The repo has now been copied into your own repos and you can work on it in your chosen IDE</li>
    <li>If you have any suggestions to make regards to the code to make the site better, you can put in a pull request</li>
</ol>

### Cloning the repo with GitPod

<ol>
    <li>Log in to your GitHub account</li>
    <li>Navigate to the Repository <a href="https://github.com/alsona1188/petspace_frontend-pp5" target="_blank"><strong>HERE</strong></a></li>
    <li>Select the 'Code' button above the file list on the right had side</li>
    <li>Ensure HTTPS is selected and click the clipboard on the right of the URL to copy it</li>
    <li>Open a new workspace in GitPod</li>
    <li>In the bash terminal type 'git clone [copy url here from step 4]'</li>
    <li>Press enter - the IDE will clone and download the repo</li>
</ol>

### Github Desktop

<ol>
    <li>Log in to your GitHub account</li>
    <li>Navigate to the Repository <a href="https://github.com/alsona1188/petspace_frontend-pp5" target="_blank"><strong>HERE</strong></a></li>
    <li>Select the 'Code' button above the file list on the right had side</li>
    <li>Select 'Open with GitHub Desktop'</li>
    <li>If you haven't already installed GitHub desktop application - you will need to follow the relevant steps to do this</li>
    <li>The repo will then be copied locally onto your machine</li>
</ol>

### Download and extract the zip directly from GitHub

<ol>
    <li>Log in to your GitHub account</li>
    <li>Navigate to the Repository <a href="https://github.com/alsona1188/petspace_frontend-pp5" target="_blank"><strong>HERE</strong></a></li>
    <li>Select the 'Code' button above the file list on the right had side</li>
    <li>Select 'Download Zip'</li>
    <li>Once you have the Zip downloaded, open it with your prefered file decompression software</li>
    <li>You can then drag and drop the files from the folder into your chosen IDE or view/edit them on your local machine</li>
    <li>If you want to create a web-app from the repo please follow the instructions in "Project Deployment"</li>
</ol>

<a href="#top">Back to the top.</a>

<h1 id="credits">Credits</h1>

### I have listed some of the resources I used for inspiration and in researching how to create the PetSpace app.

-   Code Institute "Moments" tutorial helped me setup the initial code for PetSpace.
-   All the header images are from <a href="https://pixabay.com/" target="_blank"><strong>Pixabay</strong></a>.

### These are some of the resources that helped me solve some of the issues encountered when developing the site and also provided some inspiration

-   [W3Schools - React](https://www.w3schools.com/react/default.asp)
-   [Stack Overflow](https://stackoverflow.com/) for various code snippets and solutions
-   [React Documentation](https://reactjs.org/)
-   [React Testing Jest](https://jestjs.io/docs/tutorial-react)
-   [React Testing Jest Cheatsheet](https://devhints.io/jest)
-   [React Social Media Site](https://www.youtube.com/watch?v=zM93yZ_8SvE)
-   [React Social Media App Design](https://www.youtube.com/watch?v=FweHcYHkt9A)
-   [Material UI](https://mui.com/)

<h2 id="acknowledgements">Acknowledgements</h2>

This project was made possible due to the help & advice from my Code Institute mentor, Code Institute Slack community, code institute tutor, Stack Overflow community, my family and a lot of extensive Googling.

<a href="#top">Back to the top.</a>
