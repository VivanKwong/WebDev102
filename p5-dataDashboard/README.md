# Web Development Project 6 - WeatherDash

Submitted by: Vivian Kwong

This web app: Has data visualizations in the dashboard view and a detail view containing more info related to a given data point about weather.

Time spent: 7 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app includes at least one unique chart developed using the fetched data that tell an interesting story**
- [ ] **Clicking on an item in the list view displays more details about it**
- [X] **Clicking on an item has a direct, unique link to that item's detail view page**


The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data
- [X] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* [X] List anything else that you added to improve the site's functionality!
      The site has 2 different data visualizations, temperature and wind speed, that are color coded, labeled, and toggle-able.
      It also has a navigation bar.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemk4NmY0OHlibnN1cXh2d2M1bWdsMDkxbHh2dWN0eWEycXB0bTdkcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M5VMpK3WDsnhDZzFRQ/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
I struggled with errors such as "No routes matched location "/detail-view/Comugne"," which I was unable to resolve. While I was able to fulfill "Clicking on an item has a direct, unique link to that item's detail view page", I did not succeed with getting the details to align.
I encountered an issue with "Warning: Encountered two children with the same key" which I was able to resolve. This was difficult though because this API did not have specific ids for each data point. I had to figure out how to ensure each data point wouldn't be confused for another a different way.
Another problem I had was "Uncaught Error: "category" is not a registered scale." This had to do with the data visualizations. I had to play around with where I used useRef() and it was a lot of trial and error.
I also faced a setback with using Routers; I kept on getting an error about not being able to use multiple routers and did not know where I had multiple routers. I found the spot though.

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
