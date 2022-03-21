---
title: Image Lazy Loading
date: "2020-09-16T10:31:03.284Z"
description: "Make sure your customer have a great experience by only making them download your images when they are visible!"
---

We all love to see images and gifs online. And we are using more and more the web to connect with people and things we love. So to make sure that your customer's experience will be great, you need to think about how you deliver your content. To avoid impacting the initial experience by delivering a lot of images at once, you should use a Lazy Loading Strategy to deliver images.

With this strategy, you are going make your customer's browser download the image only when it is <b>visible</b>. And by doing so you will optimize the page loading time.

Look at what happens to the computer's network when we access Pinterest, the images social network:

<video autoplay loop style="width:100%">
  <source src="./pinterest-image-lazy-loading.mov" type="video/mp4">
</video>
<br>
<br>
As we navigate and see more images, they are downloaded from the social network servers in California (or a server close to you, if they use a CDN to have a smart delivery) to our machine.

This helps a lot to make the initial loading faster, since only the visible images will be download at any time.

There are two good ways to apply this strategy. One of them is through the loading attribute available since 2019 (only for Chrome, Firefox and Edge):

```html
<img loading="lazy" src="https://placekitten.com/400/400">
```

Another way of acchieving Lazy Loading is with the Intersection Observer API (available for all major browsers). This API fires JavaScript events whenever the element observed enters the customer's screen, and with that you can do a lot of things, like animate some part of your site to make it friendlier to customers. But let's see how we can control when the customer will download the image.

We just need to change the `src` attribute to the `data-src` attribute, so the image will not be downloaded initially.:

```html
<img data-src="'https://placekitten.com/400/400'">
```

And then we set the `src` attribute when the image enters the screen:

```js
const images = document.querySelectorAll('img');

const lazyLoad = target => {
  console.log(target);
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const src = target.dataset.src;
        target.setAttribute('src', src);
      }
    });
    observer.disconnect();
  });
  io.observe(target);
};

images.forEach(lazyLoad);
```

Done! Now your customer will not download any image that they don't see, avoiding even unnecessary downloads.

 To make things prettier, you should apply some animation to avoid flickering the screen when the image is being loaded.