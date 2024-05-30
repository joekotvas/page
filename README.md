# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./images/screenshot.png)

### Links

- Solution Repo: [github.com/joekotvas/stats-preview-card](https://github.com/joekotvas/stats-preview-card)
- Live Site: [stats-preview-card-joekotvas.netlify.app](stats-preview-card-joekotvas.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS for co-located styling
- Flexbox
- CSS Grid
- CSS animations
- Mobile-first workflow
- CountUp.js for the animated stats

### What I learned

It was fun playing with the `mix-blend-mode` CSS property. I used it to overlay the image with the violet hue. I also found it interesting to integrate Tailwind CSS outside of a React environment.

I wanted to give the card a bit of flair, so I used the `CountUp.js` library to animate the statistics as they count up to their final values. I've used CountUp before, but again, this was in the context of React, and here the plan was to use some of the same tools and libraries but outside of the React ecosystem.

I also added a gradient shimmer effect to the highlight color in the card heading. This was a fun detail to code and I think it adds a bit of visual interest to the card.

```css
.purple-shimmer {
  -webkit-background-clip: text;
  animation: shimmer 5s infinite linear;
  background: linear-gradient(
    90deg,
    #b159e7 0%,
    #cb80f8 25%,
    #b560e8 50%,
    #cb80f8 75%,
    #b159e7 100%
  );
  background-clip: text;
  background-size: 400% 400%;
  color: transparent;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
```

## Author

Joe is a front-end developer and UX specialist who has been building client sites for over a decade. He is passionate about creating beautiful, user-friendly websites that help businesses grow. Joe is a lifelong learner who is always looking for new ways to improve his skills and stay up-to-date with the latest trends in web development.

- Agency - [Jokma Web Solutions](https://jokma.com)
- Frontend Mentor - [@joekotvas](https://www.frontendmentor.io/profile/joekotvas)
- GitHub - [@joekotvas](https://www.github.com/joekotvas)
