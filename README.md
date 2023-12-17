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
  1. [GitHub](github.com/expressjs/cors)
  2. [NPM](https://www.npmjs.com/package/cors)
  3. [Homepage](https://github.com/expressjs/cors#readme)
2. dotenv
  1. [GitHub](github.com/motdotla/dotenv)
  2. [NPM](https://www.npmjs.com/package/dotenv)
  3. [Homepage](https://www.dotenv.org/)
3. express
  1. [GitHub](github.com/expressjs/express)
  2. [NPM](https://www.npmjs.com/package/express)
  3. [Homepage](http://expressjs.com/)
4. express-async-errors
  1. [GitHub](https://github.com/davidbanham/express-async-errors)
  2. [NPM](https://www.npmjs.com/package/express-async-errors)
  3. [Homepage](https://github.com/davidbanham/express-async-errors#readme)
5. mongodb
  1. [GitHub](https://github.com/mongodb/node-mongodb-native)
  2. [NPM](https://www.npmjs.com/package/mongodb)
  3. [Homepage](www.mongodb.com)
6. morgan
  1. [GitHub](https://github.com/expressjs/morgan)
  2. [NPM](https://www.npmjs.com/package/morgan)
  3. [Homepage](https://github.com/expressjs/morgan#readme)
7. webpack
  1. [GitHub]()
  2. [NPM](https://www.npmjs.com/package/)
  3. [Homepage]()
8. webpack-cli
  1. [GitHub]()
  2. [NPM](https://www.npmjs.com/package/)
  3. [Homepage]()
9. webpack-node-externals
  1. [GitHub]()
  2. [NPM](https://www.npmjs.com/package/)
  3. [Homepage]()
10. XXX Next Package
  1. [GitHub]()
  2. [NPM](https://www.npmjs.com/package/)
  3. [Homepage]()

## Routes

XXX

## Deployment

If you followed the new setup instructions and tasks are followed, then you will only need to check in your code to source control.

## TODO's

- [ ] Convert to TypeScript
- [ ] Add PM2 for keeping the app alive and managing.
- [ ] Keep updating