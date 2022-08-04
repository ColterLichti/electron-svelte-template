# Electron & Svelte Template

A template for building Svelte apps powered by Electron with code splitting and hot-reload.

# Purpose
I couldn't find a svelte and electron template that felt just right for me so I decided to make my own. I plan on using this template in my future projects and I thought others might find some use for it as well. I've put a lot of work into making sure it's well put together as it's going to be a foundational element of my future project(s).


# Features

- Svelte template
  - SCSS preprocessor configured
  - Svelte SPA router
    - Route code splitting configured
  - Global SCSS file found in src/theme
      - Not CSS like Svelte template
      - Hot-reload works on global SCSS file
- Electron template
  - Simple single window app configured
  - Preload script template and loading configured
  - Watcher that performs hot-reload in development
- Sample app
  - Minimal example styled similarly to the stock svelte template
  - Two pages to navigate between
    - Home page is loaded right away
    - Other page is loaded when user navigates to it
  - Intended to show base functionality and provide example usage
- Preconfigured scripts
  - electron-watch
    - Run the electron app and the svelte-dev command in dev mode
    - Watches for content changes
    - Can also view app on browser via link in CLI
    - Probably the goto script for most needs
  - electron-start
    - Run only the electron app in dev mode
    - Window will still watch for build change but svelte won't be watching
    - Good for previewing changes to the main process code
    - Build svelte at least once before running this
  - svelte-build
    - Default build script from stock svelte template
  - svelte-dev
    - Default dev script from stock svelte template
  - svelte-start
    - Default start script from stock svelte template

# Usage

Clone or download then:
```
npm install
```
After that it's as simple as:
```
npm run electron-watch
```
After the Electron window pops open, edit any of the Svelte or SCSS files and watch your changes appear almost instantly in the window.


The template is failry minimal and should be very easy to leap off from when you are familiar with it and ready to start your project.

# Notes
I feel like this template could use some scripts for bundling and publishing the app but I haven't gotten that far in my project yet so I'll leave it where it is for now.

I will have a backend express-mongo API that also serves a browser version of the app (similar to Discord) in my final project. I don't really wan't to overburden this template so I'll probably just make that a seperate repo and link to it here when it's done.

# References
- Svelte Docs
  - https://svelte.dev/docs
  - All you need to know about Svelte
- svlete-spa-router
  - https://github.com/ItalyPaleAle/svelte-spa-router
  - This is the router used in the template
  - It does much more than the sample shows so it's worth checking out
- Electron Docs
  - https://www.electronjs.org/docs/latest
  - All you need to know about electron