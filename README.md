# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)



## Overview

Room homepage using HTML, SASS, and JS.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot


![Screenshot](https://user-images.githubusercontent.com/52973411/134697235-f5f88dce-a716-4cb6-86ab-ffdfbf01b33a.png)
)


### Links

- Solution URL: (https://github.com/deepak539/Room-Homepage)
- Live Site URL: (https://deepak539.github.io/Room-Homepage/)

## My process

I used desktop first approach. Challenging part was to switch images and content on clicking the buttons. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media queries
- Desktop-first workflow


### What I learned
I have to use porperty z-index in most of the cases of position absolute.

```css
.homepage-top-left-navs {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  bottom: 0;
  right: -123px;
  z-index: 1;
}
```


### Continued development
Still progressing on navbar which doesn't seems good enough, background image properties because these causes many issues.

### Useful resources

-(https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) - This helped me for understanding background image porperties.


## Author

- Website - [Deepak](https://deepak539.github.io/Room-Homepage/)
- Frontend Mentor - [@deepak539](https://www.frontendmentor.io/profile/deepak539)

