# RepoSearcher

## Introduction

A user interface to navigate the repositories and commits in Netflix’s Github. As a User, I would like to be able to see a list of Netflix’s repositories, and when I click on a repository, I want to be able to see the list of commits.

## About Project

Create a user interface to navigate the repositories and commits in Netflix’s Github. As a User, I would like to be able to see a list of Netflix’s repositories, and when I click on a repository, I want to be able to see the list of commits.

Basic Requirements
-Create a scrollable list of Netflix’s repositories: https://api.github.com/orgs/Netflix/repos
-Each item in the repository list should show: Repo name, Language, Description, Star Count, Fork Count, Date Created.
-This list should be sorted by Star Count in descending order
-When clicking on an item in the list, it should show another list of the recent commits
-Each item in this commits list should show: Commit Title, Committer username, Commit hash, Date Created

-Host the application on AWS, Heroku, Digital Ocean, or your own Web Host.

\*Bonus Requirement
As a user, I want to be able to type into an input an organization name other than Netflix and see a list of that organization’s repositories and commits instead.
Any design additions, UI/UX improvements are always a plus.

## INSTRUCTIONS TO START PROJECT

### STEP 1: Travel to '/repo-frontend',

Open new window in terminal. In the terminal, you need to navigate too the "repo-frontend" by putting the command `cd repo-frontend` from the home directory of project.

### STEP 2: Download dependencies for project

Now that you are in "repo-frontend" folder in the terminal. Type in `npm install` or `npm i` into your terminal.

### STEP 3: Start up project

When Dependencies are installed, you are finally ready to start project. In the same terminal now type `npm start` to start the project yourself.
