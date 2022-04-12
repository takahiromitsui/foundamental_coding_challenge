# Frontend Challenge
Welcome to our frontend challenge! :wave:

## Setup
1. Please upload this repository to your git
2. You will need to have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed
3. Install the frontend
   ```shell
   $ cd frontend
   $ yarn install
   ```
4. To start the Frontend + API + DB run:
    ```shell
    $ docker-compose up
    ```
5. You will need to initialize the DB. Open http://localhost:20002 in your browser and go to `/init_db` --> expand it --> click on `Try it out` on the right --> click on the blue `Execute` button.
    ![Init DB](/images/init_db.png "Init DB")
    ![Init DB 2](/images/init_db2.png "Init DB 2")
    That's it, the DB should be initialized now.

6. If you install a new package for the frontend, you will need to stop the docker-compose and rebuild the frontend:
    ```shell
    $ docker-compose build frontend
    ```

The frontend runs on `localhost:3000`

The API runs on `localhost:20002`
- you can see the OpenAPI/Swagger documentation by opening `http://localhost:20002/` in the browser
- The API has 4 endpoints:
  - `GET` `/companies` //get all companies
  - `PATCH` `/companies/{id}` //patch a specific part of a company
  - `GET` `/deals` //get all deals
  - `PATCH` `/deals/{id}` //patch a specific part of a deal

The DB runs on `localhost:3306`.
- The DB already has all the data in the `app` scheme:
  - `companies` table, filled out with companies
  - `deals` table, filled out with deals
  - `companies` have a 1 to N relationship with `deals`
    - e.g. 1 `company` can have N `deals`



## Challenge
You will need to create the frontend in NextJS to this stack. You will get companies and deals and should display them & have some interaction.

The setup for the frontend is already done, so you just need to add your code.

1. Display all `companies` and their information
2. Display all `deals` of every `company` and their information
3. Add a way to edit `company` and `deal` information
   - you should call the provided `PATCH` endpoints for that
4. Make it look fancy :)
