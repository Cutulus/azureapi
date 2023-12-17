# Azure API App

## NEW SETUP INSTRUCTIONS AND TASKS

Complete the following tasks
- [ ] Update the GitHub WorkFlows YAML file.
  - [ ] Line 4 Use the Azure Web App Service you will need to create.
  - [ ] Line 22 Update to the version of Node you are using.
  - [ ] Line 62 Get your user profile information *^Not currently aware of how to retirieve this.
- [ ] Rename the env.md file to .env and update the variables.
- [ ] Add the variables from the .env file to your Azure Web App
- [ ] Edit the router.mjs file to update the rte values with whatever route you want to create.
- [ ] Update the coll variable in the rte.mjs file for the MongoDB collection you are calling.
- [ ] Publish App to GitHub repo.
- [ ] Add the repo to your Azure Web App
  - Go to the Azure portal> Web App > Deployment Center > Settings
  - Connect to your GitHub account and select your repository.
- [ ] To run locally run the following commands in the terminal
  - npm i
  - npm run start

If you have completed all these tasks to update the project, then the app should run no problem and then you should be able to get the pages to load.

## Package Repos

1. cors
  - [GitHub](github.com/expressjs/cors)
  - [NPM](https://www.npmjs.com/package/cors)
  - [Homepage](https://github.com/expressjs/cors#readme)
2. dotenv
  - [GitHub](github.com/motdotla/dotenv)
  - [NPM](https://www.npmjs.com/package/dotenv)
  - [Homepage](https://www.dotenv.org/)
3. express
  - [GitHub](github.com/expressjs/express)
  - [NPM](https://www.npmjs.com/package/express)
  - [Homepage](http://expressjs.com/)
4. express-async-errors
  - [GitHub](https://github.com/davidbanham/express-async-errors)
  - [NPM](https://www.npmjs.com/package/express-async-errors)
  - [Homepage](https://github.com/davidbanham/express-async-errors#readme)
5. mongodb
  - [GitHub](https://github.com/mongodb/node-mongodb-native)
  - [NPM](https://www.npmjs.com/package/mongodb)
  - [Homepage](www.mongodb.com)
6. morgan
  - [GitHub](https://github.com/expressjs/morgan)
  - [NPM](https://www.npmjs.com/package/morgan)
  - [Homepage](https://github.com/expressjs/morgan#readme)
7. webpack
  - [GitHub](https://github.com/webpack/webpack)
  - [NPM](https://www.npmjs.com/package/webpack)
  - [Homepage](https://webpack.js.org/)
8. webpack-cli
  - [GitHub](https://github.com/webpack/webpack-cli)
  - [NPM](https://www.npmjs.com/package/webpack-cli)
  - [Homepage](https://github.com/webpack/webpack-cli/tree/master/packages/webpack-cli)
9. webpack-node-externals
  - [GitHub](https://github.com/liady/webpack-node-externals)
  - [NPM](https://www.npmjs.com/package/webpack-node-externals)
  - [Homepage](https://github.com/liady/webpack-node-externals)
10. XXX Next Package
  - [GitHub]()
  - [NPM](https://www.npmjs.com/package/)
  - [Homepage]()

## Routes

XXX

## Deployment

If you followed the new setup instructions and tasks are followed, then you will only need to check in your code to source control.

## TODO's

- [ ] Convert to TypeScript
- [ ] Add PM2 for keeping the app alive and managing.
- [ ] Keep updating