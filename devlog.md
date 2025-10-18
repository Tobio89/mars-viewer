# Development Log

### 2025-10-18

After thinking about it for a while, I've decided to split the two parts of the app.

I wanted to avoid any complications while building and deploying the app - Vercel, for example, excels at hosting web apps, but I am not sure how it would handle a web app with a server in one project, that's not using Next.js

The other reason is, I wanted to try out Nest.js. I saw this framework on a few fullstack job descriptions, and I heard good things about it, so I thought I'd try it out.

### 2025-10-15

I fought with DeckGL, and I won. I selected version 9.0.34, which I knew was a compatible version.
DeckGL is more powerful than WebGL - it's a visualisation tool made by Uber.
I think this is part of what makes it hard to implement in OSD apps - it is basically a full replacement. Anyway, it's working!

This is great because DeckGL comes with free support for hovering over elements, and it also supports paths nicely.

As such, I've added some point data! Mountains and mission sites. Now that's working, I'll be able to add fun tooltips to explain something about each point.
Currently the data is in a json file in the viewer's main directory. I'm going to build this into the tiler at some point.

### 2025-10-13

I spent a couple of days setting up Mars annotations to use.

The base image is from a Tianwen satellite mission, but the other images I found that explain Mars' regions are from another mission, so I had to try my best to line everything up.
Since doing this, it's really nice to have working bit masked annotations! However I've noticed that the annotations aren't quite up to standard:

- The slightly overlapping regions don't look that good
- The mountains aren't that accurate
- There are way more craters, and having more would look nicer.

Still, now that the main work is done, it should be nice and quick.
I might also try to get a slightly bigger version up. Maybe I can stitch multiple layers together in Rust. Or I can use downscaling!

I do think that the dual-project system is quite good for development, but I am thinking to separate them out. I want to minimise issues that I could have when building and deploying. Also I want to try Go or maybe Java for the server.

### 2025-10-06

It's Thanksgiving in Korea, but there's a quick moment, so I'm setting up a bit of styling. I've also decided to make the repo public.

This is an ongoing project. It'll probably take a week or two of work to finish it, but it'll be good to have something to show, even if it's not finished.

I'll add a devlog as well, it might give people an insight into what problems I've met, and how I overcome them.

---

### 2025-10-04

I set it up in Next, but Next's build system (turbopack) does NOT like the renderer package. It would be great to fix this but:

- Build-level errors are the most ambiguous, so actually figuring out what is wrong will take a long time
- It's more likely a problem with the package, which uses outdated build tools
- I don't want to spend a long time fixing this when I could just use React and Vite and get something working in less time

I'll stick to React.

**An app must work first. Once it works, you can make a branch and mess around making it tuned to high heaven.**

I can always come back to Next when it's done. I've migrated a couple of apps to and from Next, and this won't be a heavy.

---

### 2025-09-29

I modified `rust-img-merge` to allow me to pass an image straight through if the PNG is already coloured using the bitmasking scheme.

I also thought about what data I will show. Most likely, separate layers for different geological features, and layers for Mars missions.

I am also thinking about using Next.js for this. It will be a good refresher.

---

### 2025-09-26

Compatibility issues. I get an error like `Can't instantiate BaseDrawer without new`.
I solved this issue after fighting it for a while. Steps:

- Check ES target in TSconfig for this app
- Check ES target in TSconfig for the renderer project
- _Absolutely no swearing at all_
- Check build settings in renderer project
- Add `"browserslist": [  "last 1 chrome versions" ], ` to renderer package.json
- _"This probably won't do anything, but if I try it, I can rule it out"_
- Successfully built using correct ES version.

---

### 2025-09-25

I spent more time working on `rust-img-merge`. I've set it up to divide the high res image into DZI tiles.
Assuming a given tile size n (usually 256px):

- Calculate how many rows and columns it will be
- Looping over these numbers, create a blank image of nxn
- Copy an nxn square of pixels from the source image, and save it
- Once the first layer is complete, per layer
- Looping over the number of rows and columns of the previous layer, with step of 2,
- Create a blank 2nx2n image
- Load the tiles that will fit inside this area (or use a blank square)
- Place these tiles onto the blank image
- Scale it down by 1/2 (back to n) and save
- Continue until reaching a layer with only one tile

---

### 2025-09-21

I set up this app in the same way that the demo project for OSD React Renderer works.
Using `concurrently` and `yarn cwd` it's straightforward to run the tiler and front end at the same time!

I found a MASSIVE image of Mars, which I think will make an interesting topic to base this app around.
