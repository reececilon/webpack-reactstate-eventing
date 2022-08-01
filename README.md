# Bundling

## Problem

- code gets hard to manage as problems get more complex
- It gets easier if we split code into smaller files
- Browsers don't like using imports or ('require' or 'import)
- We could link each file seperately but that gets messy

## Solution (bundlers)

- Massively hacky
- Write the code in seperate files using imports
- Get a tool (a **bundler**)
- Use the tool to package up all the files into a single file
- The single file contains all code required, in the right order

The bundler that we are using is WebPack

- It takes all the folders separated using imports and bundles them together into one file.
- webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser,

To get Started use

- npm init -y
- npm install --save-dev webpack webpack-cli html-webpack-plugin

How to start
- make a src folder. This contains all the code to be bundled up
- public folder contains the code that we share with the users
- in the src folder create index.js, the entry point file

- add "build": "webpack" in to the package.json scripts
- then run **npm run build**
- a dist folder should be created with main inside
- main contains all the bundled code and will change each time js in the src is updated and webpack is run
- Now set up a config folder
- make also a .gitignore and add .DS_Store, node_modules, dist, build
- change the build script in package.json to "build": "webpack --config config/webpack.config.prod.js"
- add a start script of "start": "webpack --config config/webpack.config.dev.js"

## Transpilation

- Compilation: translate code in one language down to another more machine focused language
- Transpilation: translate code in one language across to another at the same level of abstraction

`console.log(3)` -> `out 3` -> `111000101 1000100`
`console.log(3)` -> `print(3)`

- we use transpilation because there are many version of JS in use

before compiling, must install more libraries

- npm install -D @babel/core @babel/preset-env @babel/preset-react

- npm install -D babel-loader

To work on the dev config more we have to install another library

- npm install -D webpack-dev-server

change the package json file to have this

- "start": "webpack-cli serve --config config/webpack.config.dev.js"

After updating the normal config file, add these libraries

- npm install -D style-loader css-loader file-loader

________________________________________________________________________

///////////////////////////Setting up react/////////////////////////////

To get started with react first you must install it 

- npm i react react-dom

As a seperate it require to be installed

- babel
- css loader
- file loader