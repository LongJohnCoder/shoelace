---
layout: default.html
title: Icons
description: Shoelace doesn’t ship with icons, but you can easily add your own!
stylesheets:
 - https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css
---

## Icons

Shoelace doesn’t bundle its own icons, but you can easily include your favorite library such as [Font Awesome](http://fontawesome.io/). They work superbly together.

This keeps Shoelace light and makes it more customizable.

### Font Awesome

You can load Font Awesome locally or via CDN. To use the CDN version, add this to the `<head>` section of your page:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
```

Then add icons as you normally would with `<i class="fa fa-*"></i>`:

<div class="input-single">
  <button type="button"><i class="fa fa-star"></i> Star</button>
  <button type="button" class="button-success"><i class="fa fa-check"></i> Check</button>
  <button type="button" class="button-warning"><i class="fa fa-pencil"></i> Edit</button>
  <button type="button" class="button-info"><i class="fa fa-comment"></i> Comment</button>
</div>

<div class="input-group">
  <span class="input-addon"><i class="fa fa-envelope"></i></span>
  <input type="email" placeholder="Email">
  <button type="button">Submit</button>
</div>

For your convenience, [here’s a full list](http://fontawesome.io/icons/) of icons available in Font Awesome.