# Web Development Project 3 - Cat Facts

Submitted by: Vivian Kwong

This web app: Has 10 flashcards to test your knowledge about cats. Click on the flashcard to see answers to the questions. A back button displayed on the card can be used to return to the previous card in a set sequence, and a next button displayed on the card can be used to navigate to the next card in a set sequenceThe user can enter their guess in a box before seeing the flipside of the card, and clicking on a submit button shows visual feedback about whether the answer was correct or incorrect. A shuffle button can be used to randomize the order of the cards.

Time spent: 7 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo4Z3NraHh0OHFvazhkM21kMGd5czA1eXlxYWxkYWxyOHlzcjRrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TusMHnQFYegNEz54gR/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
![](https://github.com/VivanKwong/WebDev102/blob/master/p2-flashcards1/Kapture%202023-10-07%20at%2000.55.22.mp4)
<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- Input as text. I did not know how to implement it, clear it if the left, right, or shuffle cards buttons were clicked, and compare it to the correct answer and change the border color depending on the correctness of the answers
- Connecting the different jsx files. It was difficult to grasp how to pass information between the components and App.jsx
- Keeping track of so the previous and next buttons would work as intended.

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
