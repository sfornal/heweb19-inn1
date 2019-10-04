# Better, Harder, Faster, Stronger: Supercharge Your Site with Service Workers

[![Netlify Status](https://api.netlify.com/api/v1/badges/176729ee-f411-4b78-9c33-c2fe9bb625c5/deploy-status)](https://app.netlify.com/sites/heweb19-inn1/deploys)

A simple slide deck, built on [Netlify](https://netlify.com), [Eleventy](https://www.11ty.io/), and the [EleventyOne](https://eleventyone.netlify.com/) scaffold by Phil Hawksworth.

## Instructions

To get your own instance of this 11ty starter project cloned and deploying to Netlify very quickly, just click the button below and follow the instructions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sfornal/heweb19-inn1)


## Wait, what happens when I click that button?

Good question. Here's what it will do...

1. Netlify will clone the git repository of this project into your Github account. It will be asking for permission to add the repo for you.
2. We'll create a new site for you in Netlify, and configure it to use your shiny new repo. Right away you'll be able to deploy changes simply by pushing changes to your repo.
3. That's it really.


## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash
# install the dependencies
npm install

# It will then be available locally for building with
npm run start
```

## Add some Netlify helpers
Netlify Dev adds the ability to use Netlify redirects, proxies, and serverless functions.

```bash
# install the Netlify CLI in order to get Netlify Dev
npm install -g netlify-cli

# run a local server with some added Netlify sugar in front of Eleventy
netlify dev
```

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- /.netlify/functions/hello
- /.netlify/functions/fetch-joke


### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello
- /api/fetch-joke

