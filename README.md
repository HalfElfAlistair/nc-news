# NC-News

A site displaying user written articles, which can be voted and commented on.

[https://ajss-ncnews.netlify.app](https://ajss-ncnews.netlify.app)

## Contents

- [Introduction](#Introduction)

- [Technologies](#Technologies)

- [Launch](#Launch)

- [Author](#Author)

- [Acknowledgments](#Acknowledgments)

## Introduction

The frontend project, completed for the Northcoders Bootcamp. Using React, I used my API from the [backend project](https://github.com/HalfElfAlistair/nc_backend_project) to access and display article, topic, comment and user data. As an MVP, the user can sort data in different ways, write and delete new comments, and vote on articles.

There are select boxes to filter or sort articles, and a button on each card to view an article. Each article page has vote buttons, a comment view toggle and a text input for adding a new comment. The user can also see a delete icon next to each comment they have written, which, when pressed will check that they are sure they want to delete the comment. Overall navigation can be done with breadcrumbs, that fit the linear user journey better than a nav bar.

### Aims

- Responsively and accessibly present data from the backend project in a simple, stylish manner.
- Provide interactivity for the user, so that they can contribute to the data via votes and comments.
- Handle errors and present a message to the user that briefly advises them of what went wrong.

## Technologies

- JavaScript
- React
- Node
- Axios
- CSS

## Launch

To run this project locally, you'll need to do the following:

Make sure you're using at least node version v14.18.1

Use the 'code' button to view the url, copy this

Open your terminal, navigate to the directory you want the repo to be in ('cd <chosen-directory>'), then enter: 'git clone <repo-url>'. For a more detailed set of instructions, please use this handy guide from the [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Once in your cloned repository, enter 'npm start' to run the project in the development mode

You'll also need to make sure the following dependencies are installed:

- Axios v-0.26.1
- React v-18.0.0
- React-dom v-18.0.0
- React-icons v-4.3.1
- React-router-dom v-6.3.0
- React-scripts v-5.0.1
- Web-vitals v-2.1.4

## Author

Alistair Sinclair-Smith

Email: [alistairjss90@gmail.com](alistairjss90@gmail.com)

GitHub: [HalfElfAlistair](https://github.com/HalfElfAlistair)

## Acknowledgments

### [Northcoders](https://northcoders.com/)

This project was part of Northcoders bootcamp and their tutors were very helpful and supportive, much appreciated!

### [Netlify](https://www.netlify.com/)

The site is hosted on Netlify.

### [Heroku](https://www.heroku.com/)

The API with backend data is hosted with Heroku.

### [Tania Rascia](https://www.taniarascia.com/)

I use this [Design for Developers](https://www.taniarascia.com/design-for-developers/) article for design pointers with most projects and this was no different. It's also perfect for this sort site, as it covers creating an article card.

### [Colormind](http://colormind.io/)

A solid recommendation from the Northcoders tutors, Colormind has been very useful at selecting a simple colour-scheme for design.

### [WebAIM.org](https://webaim.org/)

Their colour contrast checker helped me ensure my text would still be readable when using colour.
