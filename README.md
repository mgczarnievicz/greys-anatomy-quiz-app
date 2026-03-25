# Grey's Anatomy Quiz App

## Overview

The **Grey's Anatomy Quiz App** is a project from the Web Development Bootcamp at Spiced Academy. This repository showcases **Part 1** and **Part 2** of a mobile-first quiz application themed around the TV series *Grey's Anatomy*, built with plain HTML, CSS, and JavaScript.

🌐 **Live site**: [my-quiz-app-grey-anatomy.vercel.app](https://my-quiz-app-grey-anatomy.vercel.app/)

This is an **advanced solution** that goes beyond the foundational approach. While the app covers the same core features as the vanilla version, almost all pages are generated dynamically through JavaScript — no hardcoded HTML per page. This positions it as a middle ground between a plain HTML solution and a fully component-driven approach like React, and serves as a reference for students to see how far vanilla JS can take you.

Each part is available in its respective branch:

- **Part 1**: Build the basic layout of a mobile quiz app.
- **Part 2**: Expand functionality, including saving quiz data to local storage.

The **main branch** contains a more sophisticated version of Part 2, with added features such as local storage for quiz data persistence.

### Color Scheme

The app uses the **Grey’s Anatomy Color Scheme** to create a visually cohesive and appealing design:

| Color Name         | Hex Code   |
|---------------------|------------|
| Yankees Blue        | `#182841` |
| Blue Sapphire       | `#235F85` |
| Blue Yonder         | `#587C9F` |
| Seashell            | `#FBF2ED` |
| Spartan Crimson     | `#9F1B17` |

You can view the full palette on the [Grey’s Anatomy Color Scheme](https://www.schemecolor.com/greys-anatomy.php).

## Features

### Part 1: Layout and Basic Pages

The initial phase focuses on creating the layout and basic pages for the quiz app. The app includes three main pages:

- **Home Page**: Displays all the available questions on the platform.
- **Bookmark Page**: A dedicated section for viewing bookmarked questions, which are marked on the Home page.
- **Profile Page**: Allows users to manage their profile and settings.

### Part 2: Interactivity and New Features

In Part 2, interactivity and additional functionality are added:

- **Bookmarking Questions**: Users can bookmark questions on the Home page.
- **Toggle Answers**: Users can show or hide the answer to a question card.
- **Add Page**: A new page where users can create their own questions by submitting:
  - A question
  - An answer
  - Hashtags

  Newly created question cards are displayed on the Add page.

This phase expands the app to include four pages:

- **Home Page**: View all available questions.
- **Bookmark Page**: View and manage bookmarked questions.
- **Add Page**: Create and display user-generated questions.
- **Profile Page**: Manage user profiles and settings.

## What Makes This Solution Different

Unlike the vanilla solution where pages are largely structured in HTML, here **JavaScript is responsible for rendering most of the UI dynamically**. Question cards, page content, and navigation states are all built and injected into the DOM via JS functions — making the codebase a natural stepping stone toward understanding how frameworks like React work under the hood.

## Learning Outcomes

This project helps students understand:

1. **Responsive Design**: Building layouts for mobile-first web applications.
2. **Interactivity**: Adding dynamic features using JavaScript.
3. **Dynamic Rendering**: Using JavaScript to generate and update the DOM instead of relying on static HTML.
4. **Component-Based Thinking**: Structuring reusable JS functions that mimic the behavior of UI components.

## Technologies

![My Skills](https://skillicons.dev/icons?i=js,html,css)

- JavaScript
- HTML
- CSS

## Preview

### Home Page

![Home page](https://raw.githubusercontent.com/mgczarnievicz/quiz-app-grey-anatomy/main/preview/greys-anatomy-home.gif)

### Bookmark Page

![Bookmark page](https://raw.githubusercontent.com/mgczarnievicz/quiz-app-grey-anatomy/main/preview/greys-anatomy-bookmark.gif)

### Add Question

![Add Question](https://raw.githubusercontent.com/mgczarnievicz/quiz-app-grey-anatomy/main/preview/greys-anatomy-addquestion.gif)

### Profile

![Profile Page](https://raw.githubusercontent.com/mgczarnievicz/quiz-app-grey-anatomy/main/preview/greys-anatomy-profile.gif)

### Responsive

![Responsive](https://raw.githubusercontent.com/mgczarnievicz/quiz-app-grey-anatomy/main/preview/greys-anatomy-responsive.gif)
