# Carousel

This was an interview challenge as part of the Scandiweb recruitment process. I implemented it with HTML, CSS, React.js and Redux.

## Getting Started

To view this project, either clone this repository and open the `index.html` file in your web browser, or alternatively just [view the live demo](https://anastasiastarodubtseva.github.io/Carousel/).

## Requirements

Here I will list all of the project requirements and how I approached each one.

> Setup the environment manually (including Webpack or any other bundler configuration).

For the sake of simplicity, I avoided all build systems and package managers. Running the project is as simple as opening the `index.html` page in a web browser. All dependencies are downloaded from a content-delivery network.

> Create a carousel component that works on mobile and desktop, demonstrate it in action.

I built a carousel component with ReactJS. It works on desktop and mobile devices. To demonstrate it in action, I enabled the GitHub Pages integration for this repository, so anyone can view the live demo and interact with it.

> Make a useful readme - tell us how to set up your application.

You are reading it :)

> Must work for mobile and desktop devices

I was careful to ensure the carousel is responsive and responds appropriately to both mouse and touch inputs.

> Must support swipes

The carousel supports swipe gestures.

> Must work for any HTML content

I implemented the carousel with a focus on image content, and my implementation includes an API call to the Unsplash service to download image data.

> Must be animated, finger-following swipes, you can use a multi-picture post in Instagram as a reference.

I did not have time to implement this.

> Supports multiple slides on the screen

I did not have time to implement this.

> Supports infinite option

The carousel supports infinite scrolling, meaning that click on the control to show the next image will bring the user back to the first image if they were viewing the last image in the sequence.

> Supports scrolling to a selected slide (like go to slide X)

The carousel supports scrolling to a specific slide with the indicators below the image. The indicators also show which particular image the user is currently viewing.

> Any optimizations related to performance are welcome and appreciated!

The carousel performs well.

> Using any runtime libraries is prohibited except for the react core itself and CSS-in-JS approach allowers.

I only used React to build the HTML, and Redux to manage the state. I did not use any other libraries. I also avoided any CSS preprocessors or CSS-in-JS technology for the sake of simplicity. I also avoided using JSX for the same reason.

> Using environment setup automatizers (like create-react-app) is prohibited.

I created the project from scratch manually.

> Submitting any code that is not written by you

I wrote everything myself.