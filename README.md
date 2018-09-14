# Simple GraphQL

This repo is primarily to practice hooking up GraphQL in a Node and React app, and to explain some simple setup.  For more advanced ones, a repo is coming soon to show a variety of other ways of using it with few other libraries.

Other libraries are available that may make what this repo does easier, but the purpose of this repo is only to show a simple example using only the default graphql libraries.

GraphQL is separated into other files mainly for readability's sake.  In order to try to keep this simple, only a few helpers are used and in ways that it should be fairly easy to learn it and then to take that knowledge on to other tools that are easier to use.

### Features of this repo:
  - Schema are in their own files in the `/schema` folder, separated by either kind or `type`
  - There is a back-end and a front-end aspect of the project
  - The `master` branch contains incomplete code, but the `solution` branch contains the finished code (will be available after the talk)

### Setup:
  - `git clone` this repo
  - `npm install-all` in the main folder

### Running the project:
  - `npm start`

### Or, with the VS Code debugger:
  - `cd react-front-end` and `npm start`
  - Start the debugger ("Launch Program" debug configuration or press <kbd>F5</kbd>)