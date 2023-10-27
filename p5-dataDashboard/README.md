# Web Development Project 5 - WeatherDash

Submitted by: Vivian Kwong

This web app: This application constructs the dashboard view of the WeatherBit Current Weather API. The dashboard view contains summary statistics and a list view of the data that can be searched and filtered. 

Time spent: 8 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] The average temperature
  - [X] The highest temperature
  - [X] The lowest temperature
- [X] **A search bar allows the user to search for an item in the fetched data**
- [X] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [X] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3Y4NnBpNGxjaGhsaGRnb3FyczRrY3N5ZGk0ZncxemtmenI3YWhvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6wyzw6bOG2GDOLfdOX/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
I wasn't able to attend last week's class, so I had to catch up/learn on my own, which was a challenge. 
I struggled with trying to make the filters work; it works when I check the console where I kept a log. However, 
it does not update on the webpage itself. I hope to get that working in the next iteration. 
I struggled with being able to get more than one data record from the API because I had a free account; to work 
around the limitations, I signed up for a free business trial. 

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
