# Trovobot.online
## Official Webserver for the `Trovo.js Discord` & Trovobot Community


### Script Commands

* `npm run pm2`: Launch Process Watcher for the Service
* `npm run start`: Launch the Service Directly
* `npm run test`: Runs all Tests associated too the Project
* `npm run migrate`: Migrates all database structure into the postgres
* `npm run seed`: Seeds the base Data into the database

### Useful Commands

* `npx sequelize-cli model:generate --name User --attributes username:string,password:string,email:string`
* * Example of how to Generate a new Table Model for the Project
* `npx sequelize-cli seed:generate --name dev-users`
* * Generates a Seed file named dev-users for the Project


### Makefile Commands

* `all`: Will 'install' -> 'test' -> 'server' in that order.
* `install`: Installs Development Packages for the Project
* `install-prod`: Installs Production Packages for the Project
* `test`: Runs test on the Project
* `server`: Runs the Project with a Process Manager
* `update`: Updates the Project with Development Packages
* `clean`: Deletes the node_modules folder in the Project
* `docker-run`: Starts the Project up in a Docker Container
* `docker-stop`: Stops the Docker Container for the Project
