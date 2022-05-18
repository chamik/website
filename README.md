# Kubíkovo website

Hi, welcome. This my little place on the interwebs. All of the styling and 'tech-ish' stuff is licensed under the MIT license. All of the creative content (namely in the folder `_posts`) falls under the [CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/). Feel free to share and recreate!

This site is created using my [jekyll-tailwind-template](https://github.com/chamik/jekyll-tailwind-template), so I recommend looking there if you're looking for something more bare-bones.

## Build

This site is built using [Jekyll](https://jekyllrb.com/), you can learn how to set it up [here](https://jekyllrb.com/docs/installation/).

When you clone the repository, first of all run:
```sh
npm run setup
```

To get a live dev server up, run:
```sh
npm start
```
or alternatively this, if you want to see your future articles and drafts appear:
```sh
npm run drafts
```

To build a release version, (turn off the live server if you have it running, and) run:
```sh
npm run build
```

To deploy I use the `./upload` script to `rsync` the build files to my VPS with NGINX set up.

## How to use?

Great question. Jekyll has a pretty good [documentation](https://jekyllrb.com/docs/) and an awesome [community forum](https://talk.jekyllrb.com/), I recommend starting there. Of course, If you have any questions, you can just [get in touch with me](https://chamik.eu/contact/).