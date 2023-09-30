# Web Development Project 2 - Cat Facts

Submitted by: Vivian Kwong

This web app: Has 10 flashcards in random order to test your knowledge about cats. Click on the flashcard to see answers to the questions and the arrow buttons to see previous and next flashcards. Refresh the page to have the order of flashcards randomized again.

Time spent: 7 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contains images in addition to or in place of text
- [ ] Cards have different visual styles such as color based on their category
  - [ ] *visual style implemented*

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
      When hovering over the card or buttons, the cursor changes to pointer and the border color changes to dark green
      The text flips when you click on the flashcard to look like the card is actually flipping.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDhhcWFtMW5rMHF5eXF0YnBhdTJkeGk1eG9ia3B5eTE4MXhmazNuNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VIkxEMJYSZNMFZAEDD/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
I faced issues with transitions (flipping the text on click), inserting an image for the background, aligning the text in the card, 
coding the next and previous buttons, making sure you see the question first when you switch to a different flashcard, coding the 
random shuffle of the flashcards, and implementing the flipping of the card (using useState to tell when to show which side of the 
card). For the transitions, aligning text, and inseting images, I had to play around with css. For the coding of the next and 
previous buttons, making sure you see the question first when you switch to a different flashcard, coding the random shuffle of the
flashcards, and implementing the flipping of the card, I had to look stuff up, refer to the lab, and ask chatgpt for any specific 
errors.

## License

    Copyright 2023 Vivian Kwong

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
